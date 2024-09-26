import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CardCoursesDetails() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Image
            src="/icon-brigadas.png"
            alt="icon brigadas"
            width={24}
            height={24}
            quality={100}
          />
          <span className="text-sm font-medium text-zinc-500">
            Detalhes do Curso
          </span>
        </div>
        <Button className="bg-primary transition-all hover:bg-secondary">
          +Detalhes
        </Button>
      </div>
      <div className="mb-4 space-y-2">
        <h1 className="text-4xl font-bold">Brigadas de Incêndios</h1>
        <p className="text-lg text-zinc-500">
          Aprenda técnicas avançadas de combate a incêndio e primeiros socorros,
          tornando-se um profissional capacitado para atuar em situações de
          risco e salvar vidas.
        </p>
      </div>
      <div className="flex items-center justify-between">
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
      <div className="grid grid-cols-2 gap-2">
        {[
          { id: 1, title: "Prevenção de Incêndios" },
          { id: 2, title: "Evacuação de Emergência" },
          { id: 3, title: "Primeiros Socorros" },
          { id: 4, title: "Controle de Pânico" },
          { id: 5, title: "Combate a Incêndios com Extintores" },
          { id: 6, title: "Simulações Práticas de Incêndio" },
          { id: 7, title: "Responsabilidades do Brigadista" },
          { id: 8, title: "Plano de Ação de Emergência" },
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
  );
}
