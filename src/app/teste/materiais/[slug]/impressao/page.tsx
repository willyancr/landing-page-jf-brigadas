import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CONTACTS,
  INSTRUCTOR_PROFILE,
  STUDY_MATERIALS,
  getMaterialBySlug,
} from "@/data/study-materials";
import { MaterialBlock } from "../../_components/material-blocks";

// Versão A4 da apostila, usada para gerar o PDF (npm run materiais:pdf).

export function generateStaticParams() {
  return STUDY_MATERIALS.map((m) => ({ slug: m.slug }));
}

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function MaterialPrintPage({ params }: { params: { slug: string } }) {
  const material = getMaterialBySlug(params.slug);
  if (!material) notFound();

  const pageCss = `
    @page {
      size: A4;
      margin: 18mm 16mm 20mm;
      @bottom-left {
        content: "JF Brigada's · ${material.title} · ${material.edition}";
        font-family: Arial, sans-serif; font-size: 8pt; color: #71717a;
      }
      @bottom-right {
        content: counter(page) " / " counter(pages);
        font-family: Arial, sans-serif; font-size: 8pt; color: #71717a;
      }
    }
    @page :first {
      margin: 0;
      @bottom-left { content: none; }
      @bottom-right { content: none; }
    }
    html, body { background: #ffffff !important; }
    * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    p, li { orphans: 3; widows: 3; }
    body > button, body > div[class*="fixed"] { display: none !important; }
    @media screen {
      .print-doc { max-width: 210mm; margin: 0 auto; }
    }
  `;

  return (
    <div className="print-doc bg-white font-sans text-zinc-800">
      <style dangerouslySetInnerHTML={{ __html: pageCss }} />

      {/* CAPA */}
      <section className="relative flex h-[297mm] break-after-page flex-col justify-between overflow-hidden bg-[#0d0f14] px-[18mm] py-[22mm] text-white">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-red-600/25 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-amber-600/20 blur-3xl" />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-horizontal.png" alt="JF Brigada's" className="relative h-14 w-auto self-start" />

        <div className="relative">
          <p className="mb-4 inline-block rounded-full border border-red-500/50 bg-red-500/15 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-red-300">
            Apostila de estudo
          </p>
          <h1 className="text-6xl font-extrabold leading-[1.05] tracking-tight">
            {material.title}
          </h1>
          <div className="mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-red-600 to-amber-500" />
          <p className="mt-6 max-w-[140mm] text-base leading-relaxed text-zinc-300">
            {material.description}
          </p>
        </div>

        <div className="relative grid grid-cols-3 gap-6 border-t border-zinc-700 pt-6 text-sm">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
              Instrutor
            </p>
            <p className="mt-1 text-zinc-200">{material.instructors}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
              Público
            </p>
            <p className="mt-1 text-zinc-200">{material.audience}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
              Edição
            </p>
            <p className="mt-1 text-zinc-200">{material.edition}</p>
          </div>
        </div>
      </section>

      {/* SUMÁRIO + INSTRUTOR */}
      <section className="break-after-page">
        <h2 className="mb-6 text-2xl font-extrabold text-zinc-900">Sumário</h2>
        <ol className="mb-10 columns-2 gap-8 text-sm">
          {material.sections.map((section, i) => (
            <li key={section.id} className="mb-2 flex break-inside-avoid gap-3">
              <span className="w-6 shrink-0 font-mono font-bold text-red-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-zinc-800">{section.title}</span>
            </li>
          ))}
        </ol>

        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
          <p className="text-[10px] font-bold uppercase tracking-wider text-red-600">
            Sobre o instrutor
          </p>
          <p className="mt-1 text-lg font-bold text-zinc-900">{INSTRUCTOR_PROFILE.name}</p>
          <ul className="mt-2 space-y-0.5 text-sm text-zinc-700">
            {INSTRUCTOR_PROFILE.qualifications.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs font-bold uppercase tracking-wider text-zinc-500">
            Áreas de instrução
          </p>
          <ul className="mt-1.5 list-disc space-y-0.5 pl-4 text-sm text-zinc-700">
            {INSTRUCTOR_PROFILE.areas.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* SEÇÕES */}
      {material.sections.map((section, i) => (
        <section key={section.id} className="mb-9">
          <div className="mb-4 flex break-after-avoid items-baseline gap-3 border-b-2 border-red-600 pb-2">
            <span className="font-mono text-sm font-bold text-red-600">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="text-xl font-extrabold text-zinc-900">{section.title}</h2>
              {section.summary && <p className="text-sm text-zinc-500">{section.summary}</p>}
            </div>
          </div>
          <div className="space-y-4">
            {section.blocks.map((block, b) => (
              <MaterialBlock key={b} block={block} variant="print" />
            ))}
          </div>
        </section>
      ))}

      {/* ENCERRAMENTO */}
      <section className="break-before-page">
        <div className="rounded-2xl bg-[#0d0f14] p-8 text-center text-white">
          <p className="text-xl font-bold italic">“{material.closing.phrase}”</p>
          {material.closing.quote && (
            <p className="mx-auto mt-3 max-w-[130mm] text-sm text-zinc-400">
              “{material.closing.quote.text}” — {material.closing.quote.author}
            </p>
          )}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6">
          <div>
            <h2 className="mb-2 text-sm font-bold uppercase tracking-wider text-zinc-900">
              Referências
            </h2>
            <ul className="space-y-1.5 text-xs leading-relaxed text-zinc-600">
              {material.references.map((ref) => (
                <li key={ref}>{ref}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-sm font-bold uppercase tracking-wider text-zinc-900">
              Contato
            </h2>
            <ul className="space-y-1 text-sm text-zinc-700">
              <li>Telefone: {CONTACTS.phone}</li>
              <li>E-mail: {CONTACTS.email}</li>
              <li>Instagram: {CONTACTS.instagram}</li>
              <li>{CONTACTS.site}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-zinc-700">
          <strong className="text-zinc-900">Teste seus conhecimentos:</strong> faça a avaliação
          online em <strong className="text-zinc-900">{CONTACTS.site}/teste</strong>.
        </div>
      </section>
    </div>
  );
}
