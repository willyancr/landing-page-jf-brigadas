import React from "react";
import {
  AlertTriangle,
  Check,
  Info,
  Lightbulb,
  ShieldAlert,
  X,
} from "lucide-react";
import { Block } from "@/data/study-materials";

export type Variant = "web" | "print";

// Converte **negrito** em <strong>.
export function RichText({ text, variant }: { text: string; variant: Variant }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong
            key={i}
            className={variant === "web" ? "font-semibold text-white" : "font-semibold text-zinc-900"}
          >
            {part.slice(2, -2)}
          </strong>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
}

const CALLOUT_STYLES = {
  web: {
    info: "bg-cyan-500/5 border-cyan-500/30 [&_.callout-icon]:text-cyan-400",
    tip: "bg-amber-500/5 border-amber-500/30 [&_.callout-icon]:text-amber-400",
    warning: "bg-orange-500/5 border-orange-500/30 [&_.callout-icon]:text-orange-400",
    danger: "bg-red-500/10 border-red-500/40 [&_.callout-icon]:text-red-400",
  },
  print: {
    info: "bg-sky-50 border-sky-300 [&_.callout-icon]:text-sky-700",
    tip: "bg-amber-50 border-amber-300 [&_.callout-icon]:text-amber-700",
    warning: "bg-orange-50 border-orange-300 [&_.callout-icon]:text-orange-700",
    danger: "bg-red-50 border-red-300 [&_.callout-icon]:text-red-700",
  },
};

const CALLOUT_ICONS = {
  info: Info,
  tip: Lightbulb,
  warning: AlertTriangle,
  danger: ShieldAlert,
};

export function MaterialBlock({ block, variant }: { block: Block; variant: Variant }) {
  const web = variant === "web";
  const muted = web ? "text-zinc-300" : "text-zinc-700";
  const heading = web ? "text-white" : "text-zinc-900";
  const panel = web
    ? "bg-[#191c28] border border-zinc-800"
    : "bg-zinc-50 border border-zinc-200";

  switch (block.type) {
    case "p":
      return (
        <p className={`text-sm sm:text-[15px] leading-relaxed ${muted}`}>
          <RichText text={block.text} variant={variant} />
        </p>
      );

    case "subtitle":
      return (
        <h3
          className={`pt-2 text-base font-bold ${heading} ${web ? "" : "break-after-avoid"}`}
        >
          {block.text}
        </h3>
      );

    case "list": {
      const ListTag = block.ordered ? "ol" : "ul";
      return (
        <div className="break-inside-avoid">
          {block.title && (
            <p className={`mb-2 text-sm font-semibold ${heading}`}>{block.title}</p>
          )}
          <ListTag className={`space-y-1.5 text-sm sm:text-[15px] leading-relaxed ${muted}`}>
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-2.5">
                {block.ordered ? (
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                      web ? "bg-red-600/20 text-red-300" : "bg-red-100 text-red-700"
                    }`}
                  >
                    {i + 1}
                  </span>
                ) : (
                  <span
                    className={`mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full ${
                      web ? "bg-red-500" : "bg-red-600"
                    }`}
                  />
                )}
                <span>
                  <RichText text={item} variant={variant} />
                </span>
              </li>
            ))}
          </ListTag>
        </div>
      );
    }

    case "callout": {
      const Icon = CALLOUT_ICONS[block.tone];
      return (
        <div
          className={`break-inside-avoid rounded-xl border p-4 ${CALLOUT_STYLES[variant][block.tone]}`}
        >
          <div className="flex items-start gap-3">
            <Icon className="callout-icon mt-0.5 h-5 w-5 shrink-0" />
            <div className="space-y-1.5">
              <p className={`text-sm font-bold ${heading}`}>{block.title}</p>
              {block.text && (
                <p className={`text-sm leading-relaxed ${muted}`}>
                  <RichText text={block.text} variant={variant} />
                </p>
              )}
              {block.items && (
                <ul className={`list-disc space-y-1 pl-4 text-sm leading-relaxed ${muted}`}>
                  {block.items.map((item, i) => (
                    <li key={i}>
                      <RichText text={item} variant={variant} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      );
    }

    case "table":
      return (
        <div className="break-inside-avoid">
          {block.caption && (
            <p className={`mb-2 text-sm font-semibold ${heading}`}>{block.caption}</p>
          )}
          <div
            className={`overflow-x-auto rounded-xl ${
              web ? "border border-zinc-800" : "border border-zinc-300"
            }`}
          >
            <table className="w-full min-w-[480px] text-left text-sm print:min-w-0">
              <thead>
                <tr className={web ? "bg-[#1e2130] text-zinc-200" : "bg-zinc-900 text-white"}>
                  {block.headers.map((h) => (
                    <th key={h} className="px-3 py-2.5 text-xs font-bold uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, r) => (
                  <tr
                    key={r}
                    className={
                      web
                        ? "border-t border-zinc-800 odd:bg-[#161923] even:bg-[#1a1d28]"
                        : "border-t border-zinc-200 even:bg-zinc-50"
                    }
                  >
                    {row.map((cell, c) => (
                      <td
                        key={c}
                        className={`px-3 py-2.5 align-top leading-relaxed ${
                          c === 0 ? `font-semibold ${heading}` : muted
                        }`}
                      >
                        <RichText text={cell} variant={variant} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case "cards":
      return (
        <div
          className={`grid gap-3 ${
            block.items.length === 2 || block.items.length === 4
              ? "sm:grid-cols-2"
              : "sm:grid-cols-2 lg:grid-cols-3"
          } ${web ? "" : "grid-cols-2"}`}
        >
          {block.items.map((card) => (
            <div key={card.title} className={`break-inside-avoid rounded-xl p-4 ${panel}`}>
              {card.tag && (
                <span
                  className={`mb-2 inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                    web
                      ? "border border-amber-500/30 bg-amber-500/10 text-amber-300"
                      : "border border-amber-300 bg-amber-50 text-amber-800"
                  }`}
                >
                  {card.tag}
                </span>
              )}
              <p className={`text-sm font-bold ${heading}`}>{card.title}</p>
              <p className={`mt-1 text-sm leading-relaxed ${muted}`}>
                <RichText text={card.text} variant={variant} />
              </p>
            </div>
          ))}
        </div>
      );

    case "steps":
      return (
        <ol className="space-y-3">
          {block.items.map((step, i) => (
            <li key={i} className="flex break-inside-avoid gap-3">
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-black ${
                  web
                    ? "bg-gradient-to-br from-red-600 to-amber-600 text-white"
                    : "bg-red-600 text-white"
                }`}
              >
                {i + 1}
              </span>
              <div className="pt-0.5">
                <p className={`text-sm font-semibold ${heading}`}>{step.title}</p>
                {step.text && (
                  <p className={`mt-0.5 text-sm leading-relaxed ${muted}`}>
                    <RichText text={step.text} variant={variant} />
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      );

    case "dodont":
      return (
        <div className={`grid gap-3 sm:grid-cols-2 ${web ? "" : "grid-cols-2"}`}>
          <div
            className={`break-inside-avoid rounded-xl border p-4 ${
              web ? "border-emerald-500/30 bg-emerald-500/5" : "border-emerald-300 bg-emerald-50"
            }`}
          >
            <p
              className={`mb-2 flex items-center gap-2 text-sm font-bold ${
                web ? "text-emerald-300" : "text-emerald-800"
              }`}
            >
              <Check className="h-4 w-4" /> {block.doTitle ?? "O que fazer"}
            </p>
            <ul className={`space-y-1.5 text-sm leading-relaxed ${muted}`}>
              {block.dos.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className={web ? "text-emerald-400" : "text-emerald-700"}>✓</span>
                  <span>
                    <RichText text={item} variant={variant} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`break-inside-avoid rounded-xl border p-4 ${
              web ? "border-red-500/30 bg-red-500/5" : "border-red-300 bg-red-50"
            }`}
          >
            <p
              className={`mb-2 flex items-center gap-2 text-sm font-bold ${
                web ? "text-red-300" : "text-red-800"
              }`}
            >
              <X className="h-4 w-4" /> {block.dontTitle ?? "O que não fazer"}
            </p>
            <ul className={`space-y-1.5 text-sm leading-relaxed ${muted}`}>
              {block.donts.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className={web ? "text-red-400" : "text-red-700"}>✕</span>
                  <span>
                    <RichText text={item} variant={variant} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
  }
}
