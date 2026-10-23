// Gera os PDFs das apostilas a partir de /teste/materiais/<slug>/impressao.
// Uso: com o site rodando (npm run dev), execute `npm run materiais:pdf`.
// Variáveis opcionais: BASE_URL (padrão http://localhost:3000) e BROWSER_PATH.
import { spawn } from "node:child_process";
import { existsSync, mkdtempSync, rmSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { setTimeout as sleep } from "node:timers/promises";

const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";

// Manter em sincronia com src/data/study-materials.ts (slug e pdfPath).
const MATERIALS = [
  { slug: "primeiros-socorros", output: "public/materiais/apostila-primeiros-socorros.pdf" },
  { slug: "brigada-de-incendio", output: "public/materiais/apostila-brigada-de-incendio.pdf" },
];

const BROWSER_CANDIDATES = [
  process.env.BROWSER_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

const browser = BROWSER_CANDIDATES.find((p) => existsSync(p));
if (!browser) {
  console.error("Chrome/Edge não encontrado. Defina BROWSER_PATH.");
  process.exit(1);
}

// O Edge no Windows pode devolver o controle antes de terminar de imprimir,
// então esperamos o arquivo aparecer e parar de crescer.
async function waitForFile(file, timeoutMs = 120_000) {
  const start = Date.now();
  let lastSize = -1;
  while (Date.now() - start < timeoutMs) {
    if (existsSync(file)) {
      const size = statSync(file).size;
      if (size > 0 && size === lastSize) return size;
      lastSize = size;
    }
    await sleep(1000);
  }
  throw new Error(`Tempo esgotado esperando ${file}`);
}

const profileDir = mkdtempSync(path.join(tmpdir(), "jf-pdf-"));

try {
  for (const { slug, output } of MATERIALS) {
    const url = `${BASE_URL}/teste/materiais/${slug}/impressao`;
    const outPath = path.resolve(output);
    rmSync(outPath, { force: true });
    console.log(`Gerando ${output} ...`);

    const child = spawn(
      browser,
      [
        "--headless",
        "--disable-gpu",
        "--no-first-run",
        `--user-data-dir=${profileDir}`,
        "--no-pdf-header-footer",
        "--virtual-time-budget=15000",
        `--print-to-pdf=${outPath}`,
        url,
      ],
      { stdio: "ignore" }
    );
    await new Promise((resolve) => child.on("exit", resolve));

    const size = await waitForFile(outPath);
    console.log(`  ok (${Math.round(size / 1024)} KB)`);
  }
} finally {
  await sleep(2000);
  rmSync(profileDir, { recursive: true, force: true, maxRetries: 5 });
}
