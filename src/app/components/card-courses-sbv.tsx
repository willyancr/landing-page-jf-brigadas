"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { upAnimation } from "../lib/animation";
import { ArrowRightFromLine } from "lucide-react";

export default function CardCoursesSBV() {
  return (
    <motion.div
      className="flex w-full flex-col gap-6 rounded-lg bg-zinc-100 p-4 shadow-lg lg:grid lg:grid-cols-2 lg:gap-12 lg:p-10"
      {...upAnimation}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/icon-sbv.png"
              alt="icon sbv"
              width={24}
              height={24}
              quality={100}
            />
            <span className="text-sm font-medium text-zinc-500">
              Informações
            </span>
          </div>
          <Button className="bg-primary transition-all hover:bg-secondary hover:text-zinc-950 sm:mt-0">
            <Link
              href="/curso/suporte-basico-vida"
              className="flex items-center gap-2"
            >
              <span>Detalhes Curso</span>
              <ArrowRightFromLine className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="mb-4 space-y-2">
          <h1 className="text-3xl font-bold lg:text-4xl">
            Suporte Básico de Vida (SBV)
          </h1>
          <p className="text-base text-zinc-500 lg:text-lg">
            Aprimore suas habilidades no atendimento de Suporte Básico de Vida
            com o curso de SBV e faça a diferença na área da saúde e do socorro.
          </p>
        </div>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-secondary/30 p-4">
              <Image
                src="/icon-cronometro.png"
                alt="icon brigadas"
                width={32}
                height={32}
                quality={100}
              />
            </div>
            <span className="w-32 font-medium">
              Serviços rápidos e confiáveis
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-secondary/30 p-4">
              <Image
                src="/icon-certificado-1.png"
                alt="icon brigadas"
                width={32}
                height={32}
                quality={100}
              />
            </div>
            <span className="w-32 font-medium">Especialista Certificado</span>
          </div>
        </div>
        <div className="my-4 border-b-2 border-secondary/10" />
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[
            { id: 1, title: "Identificação de Situações de Emergência" },
            { id: 2, title: "Procedimentos em Casos de Choque" },
            { id: 3, title: "Ressuscitação Cardiopulmonar (RCP)" },
            { id: 4, title: "Desobstrução de Vias Aéreas" },
            { id: 5, title: "Uso do Desfibrilador Externo Automático (DEA)" },
            { id: 6, title: "Controle de Hemorragias" },
            { id: 7, title: "Imobilização e Transporte de Vítimas" },
            { id: 8, title: "Prevenção e Controle de Infecções" },
          ].map((item) => (
            <div key={item.id} className="flex items-center gap-1">
              <Image
                src="/icon-checking.png"
                alt="icon brigadas"
                width={24}
                height={24}
                quality={100}
              />
              <span className="text-sm font-medium">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      <Image
        src="/image-curso-sbv-3.jpg"
        alt="imagem curso Suporte Básico de Vida "
        width={500}
        height={500}
        quality={100}
        className="h-full w-full rounded-xl object-cover shadow-xl"
      />
    </motion.div>
  );
}
