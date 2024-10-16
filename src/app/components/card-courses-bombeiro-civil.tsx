"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { upAnimation } from "../lib/animation";
import ButtonInfo from "./button-info";

export default function CardCoursesBombeiroCivil() {
  return (
    <motion.div
      className="flex w-full flex-col gap-6 rounded-lg bg-zinc-100 p-4 shadow-lg lg:grid lg:grid-cols-2 lg:gap-12 lg:p-10"
      {...upAnimation}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/icon-bombeiro.png"
              alt="icon brigadas"
              width={24}
              height={24}
              quality={100}
            />
            <span className="text-sm font-medium text-zinc-500">
              Informações
            </span>
          </div>
          <Link href="/curso/bombeiro-civil">
            <ButtonInfo />
          </Link>
        </div>
        
        <div className="mb-4 space-y-2">
          <h1 className="text-3xl font-bold lg:text-4xl">
            Bombeiro Profissional Civil
          </h1>
          <p className="text-base text-zinc-500 lg:text-lg">
            Capacite-se em combate a incêndio, salvamentos e primeiros socorros,
            tornando-se um bombeiro civil preparado para agir em emergências e
            proteger vidas.
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
            { id: 1, title: "Prevenção e Combate a Incêndios" },
            { id: 2, title: "Resgate em Altura e Espaços Confinados" },
            { id: 3, title: "Primeiros Socorros e Atendimento Pré-Hospitalar" },
            {
              id: 4,
              title: "Uso de Equipamentos de Proteção Individual (EPIs)",
            },
            { id: 5, title: "Operação de Sistemas de Hidrantes" },
            { id: 6, title: "Evacuação e Controle de Multidões" },
            { id: 7, title: "Técnicas de Salvamento Aquático" },
            { id: 8, title: "Simulações Práticas de Emergências" },
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
        src="/image-curso-bombeiro-civil.jpg"
        alt="imagem curso bombeiro civil"
        width={500}
        height={500}
        quality={100}
        className="h-full w-full rounded-xl object-cover shadow-xl"
      />
    </motion.div>
  );
}
