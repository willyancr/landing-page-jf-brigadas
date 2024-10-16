"use client";
import { leftAnimation } from "../lib/animation";
import { motion } from "framer-motion";
import ButtonInfo from "./button-info";
import Image from "next/image";
import Link from "next/link";

export default function CardCoursesTrauma() {
  return (
    <motion.div
      className="flex w-full flex-col gap-6 rounded-lg bg-zinc-100 p-4 shadow-lg lg:grid lg:grid-cols-2 lg:gap-12 lg:p-10"
      {...leftAnimation}
    >
      <Image
        src="/image-curso-trauma.jpg"
        alt="imagem curso aph-b prático"
        width={500}
        height={500}
        quality={100}
        className="h-full w-full rounded-xl object-cover shadow-xl"
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/icon-cruz-vermelha.png"
              alt="icon cruz vermelha"
              width={24}
              height={24}
              quality={100}
            />
            <span className="text-sm font-medium text-zinc-500">
              Informações
            </span>
          </div>
          <Link href="/curso/trauma-no-atendimento-pre-hospitalar">
            <ButtonInfo />
          </Link>
        </div>

        <div className="mb-4 space-y-2">
          <h1 className="text-3xl font-bold lg:text-4xl">
            Trauma no Atendimento Pré-Hospitalar (APH-B)
          </h1>
          <p className="text-base text-zinc-500 lg:text-lg">
            Capacite-se para atuar em situações de trauma no ambiente
            pré-hospitalar, aprendendo técnicas essenciais de imobilização,
            resgate e suporte vital, garantindo uma resposta rápida e eficaz em
            emergências.
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
            {
              id: 1,
              title: "Técnicas de avaliação primária e secundária de traumas",
            },
            { id: 2, title: "Imobilização e transporte seguro de vítimas" },
            {
              id: 3,
              title:
                "Atendimento inicial a traumas cranioencefálicos e espinhais",
            },
            {
              id: 4,
              title: "Manejo de hemorragias externas e choque hipovolêmico",
            },
            {
              id: 5,
              title:
                "Atendimento de fraturas, luxações e lesões musculoesqueléticas",
            },
            {
              id: 6,
              title:
                "Procedimentos de emergência para traumas torácicos e abdominais",
            },
            {
              id: 7,
              title:
                "Técnicas de extração de vítimas em ambientes de difícil acesso",
            },
            {
              id: 8,
              title: "Prática de suporte ventilatório e manejo de vias aéreas",
            },
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
    </motion.div>
  );
}
