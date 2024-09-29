import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CardCoursesAPH() {
  return (
    <div className="flex w-full flex-col gap-6 rounded-lg bg-zinc-100 p-4 shadow-lg lg:grid lg:grid-cols-2 lg:gap-12 lg:p-10">
      <Image
        src="/image-curso-aph.jpg"
        alt="imagem curso brigadista"
        width={500}
        height={500}
        quality={100}
        className="h-auto w-full rounded-xl object-cover shadow-xl"
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
              Detalhes do Curso
            </span>
          </div>
          <Button className="bg-primary transition-all hover:bg-secondary sm:mt-0">
            <Link href="#faqs" className="flex items-center gap-2">
              <span>INFO</span>
              <Image
                src="/icon-info.png"
                alt="icon brigadas"
                width={18}
                height={18}
                quality={100}
              />
            </Link>
          </Button>
        </div>

        <div className="mb-4 space-y-2">
          <h1 className="text-3xl font-bold lg:text-4xl">APH-B Prático</h1>
          <p className="text-base text-zinc-500 lg:text-lg">
            Capacite-se em primeiros socorros, aprendendo técnicas de APH para
            atuar com eficiência em situações de emergência e salvar vidas.
          </p>
        </div>
        <div className="xs:flex-row xs:items-center flex items-start justify-between gap-4">
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
            { id: 1, title: "Suporte Básico de Vida (SBV)" },
            { id: 2, title: "Controle de Hemorragias" },
            { id: 3, title: "Imobilização de Fraturas" },
            { id: 4, title: "Atendimento a Vítimas de Traumas" },
            { id: 5, title: "Cuidados com Queimaduras" },
            { id: 6, title: "Imobilização e Transporte de Vítimas" },
            { id: 7, title: "Desobstrução de Vias Aéreas" },
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
    </div>
  );
}
