import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronDown,
  Download,
  GraduationCap,
  ListOrdered,
  Users,
} from "lucide-react";
import {
  CONTACTS,
  MaterialSection,
  STUDY_MATERIALS,
  getMaterialBySlug,
} from "@/data/study-materials";
import { MaterialBlock } from "../_components/material-blocks";

export function generateStaticParams() {
  return STUDY_MATERIALS.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const material = getMaterialBySlug(params.slug);
  if (!material) return {};
  return {
    title: `${material.title} — Material de estudo | JF Brigadas`,
    description: material.description,
  };
}

function TableOfContents({ sections }: { sections: MaterialSection[] }) {
  return (
    <ol className="space-y-0.5">
      {sections.map((section, i) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className="flex gap-2 rounded-lg px-2 py-1.5 text-[13px] leading-snug text-zinc-400 transition-colors hover:bg-zinc-800/60 hover:text-white"
          >
            <span className="w-5 shrink-0 text-right font-mono text-xs text-zinc-600">
              {String(i + 1).padStart(2, "0")}
            </span>
            {section.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

export default function MaterialPage({ params }: { params: { slug: string } }) {
  const material = getMaterialBySlug(params.slug);
  if (!material) notFound();

  const quizHref = `/teste?quiz=${material.quizId}`;

  return (
    <main className="min-h-screen bg-[#0d0f14] font-sans text-zinc-100 selection:bg-red-600 selection:text-white">
      {/* CABEÇALHO */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-[#11131a]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <Link href="/" className="transition-opacity hover:opacity-90" title="Página inicial">
            <Image
              src="/logo-horizontal.png"
              alt="JF Brigadas"
              width={160}
              height={40}
              className="h-8 w-auto object-contain sm:h-9"
              priority
            />
          </Link>
          <div className="flex items-center gap-2">
            <a
              href={material.pdfPath}
              download
              className="hidden items-center gap-1.5 rounded-full border border-zinc-700/50 bg-zinc-800/80 px-3.5 py-1.5 text-xs font-semibold text-zinc-300 transition-colors hover:bg-zinc-700/80 sm:inline-flex"
            >
              <Download className="h-3.5 w-3.5" /> PDF
            </a>
            <Link
              href={quizHref}
              className="rounded-full bg-gradient-to-r from-red-600 to-amber-600 px-3.5 py-1.5 text-xs font-bold text-white transition-all hover:from-red-500 hover:to-amber-500"
            >
              Fazer o teste
            </Link>
          </div>
        </div>
      </header>

      {/* CAPA */}
      <section className="border-b border-zinc-800/60 bg-gradient-to-b from-[#1a1218] to-[#0d0f14]">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <Link
            href="/teste"
            className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 transition-colors hover:text-zinc-200"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Portal de avaliações
          </Link>
          <span className="mb-3 block w-fit rounded-full border border-red-500/40 bg-red-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-red-300">
            Material de estudo · {material.badge}
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            {material.title}
          </h1>
          <p className="mt-2 text-sm font-medium text-amber-400 sm:text-base">
            {material.subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            {material.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-zinc-400 sm:text-sm">
            <span className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-amber-500" />
              Instrutor: {material.instructors}
            </span>
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 text-amber-500" />
              {material.audience}
            </span>
            <span className="flex items-center gap-2">
              <ListOrdered className="h-4 w-4 text-amber-500" />
              {material.sections.length} tópicos
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={material.pdfPath}
              download
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/50 transition-all hover:from-red-500 hover:to-amber-500"
            >
              <Download className="h-4 w-4" /> Baixar apostila em PDF
            </a>
            <Link
              href={quizHref}
              className="flex items-center justify-center gap-2 rounded-xl border border-zinc-700/80 bg-[#1b1e2a] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[#252837]"
            >
              Já estudei, fazer o teste <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 lg:grid-cols-[240px_1fr] lg:py-12">
        {/* Sumário */}
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          {/* Mobile: sumário recolhível */}
          <details className="group rounded-2xl border border-zinc-800 bg-[#14161f] lg:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-2 p-4 text-xs font-bold uppercase tracking-wider text-zinc-300">
              <span className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-amber-500" /> Sumário
              </span>
              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-2 pb-3">
              <TableOfContents sections={material.sections} />
            </div>
          </details>

          {/* Desktop: sumário fixo */}
          <div className="hidden lg:block">
            <p className="mb-2 flex items-center gap-2 px-2 text-xs font-bold uppercase tracking-wider text-zinc-300">
              <BookOpen className="h-4 w-4 text-amber-500" /> Sumário
            </p>
            <div className="max-h-[calc(100vh-9rem)] overflow-y-auto">
              <TableOfContents sections={material.sections} />
            </div>
          </div>
        </aside>

        {/* Seções */}
        <div className="min-w-0 space-y-6">
          {material.sections.map((section, i) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 rounded-2xl border border-zinc-800/90 bg-[#14161f] p-5 sm:p-7"
            >
              <div className="mb-5 flex items-start gap-3">
                <span className="font-mono text-sm font-bold text-red-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-lg font-extrabold leading-snug text-white sm:text-xl">
                    {section.title}
                  </h2>
                  {section.summary && (
                    <p className="mt-0.5 text-sm text-zinc-400">{section.summary}</p>
                  )}
                </div>
              </div>
              <div className="space-y-4">
                {section.blocks.map((block, b) => (
                  <MaterialBlock key={b} block={block} variant="web" />
                ))}
              </div>
            </section>
          ))}

          {/* Encerramento + CTA */}
          <section className="rounded-2xl border border-red-500/30 bg-gradient-to-br from-[#251d23] to-[#14161f] p-6 text-center sm:p-8">
            <p className="text-lg font-bold italic text-white sm:text-xl">
              “{material.closing.phrase}”
            </p>
            {material.closing.quote && (
              <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-400">
                “{material.closing.quote.text}” — {material.closing.quote.author}
              </p>
            )}
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={quizHref}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/50 transition-all hover:from-red-500 hover:to-amber-500"
              >
                Fazer o teste de {material.title} <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={material.pdfPath}
                download
                className="flex items-center justify-center gap-2 rounded-xl border border-zinc-700/80 bg-[#1b1e2a] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#252837]"
              >
                <Download className="h-4 w-4" /> Baixar PDF
              </a>
            </div>
          </section>

          {/* Referências e contato */}
          <section className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-[#14161f] p-5">
              <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-zinc-300">
                Referências
              </h2>
              <ul className="space-y-1.5 text-xs leading-relaxed text-zinc-400">
                {material.references.map((ref) => (
                  <li key={ref}>{ref}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-[#14161f] p-5">
              <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-zinc-300">
                Contato do instrutor
              </h2>
              <ul className="space-y-1.5 text-sm text-zinc-400">
                <li>Telefone: {CONTACTS.phone}</li>
                <li>E-mail: {CONTACTS.email}</li>
                <li>Instagram: {CONTACTS.instagram}</li>
                <li>{CONTACTS.site}</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
