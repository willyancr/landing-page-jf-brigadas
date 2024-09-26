import Image from "next/image";

export default function CardCoursesAPH() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Image
          src="/icon-cruz-vermelha.png"
          alt="icon brigadas"
          width={24}
          height={24}
          quality={100}
        />
        <span className="text-sm font-medium text-zinc-500">
          Detalhes do Curso
        </span>
      </div>

      <div className="mb-4 space-y-2">
        <h1 className="text-4xl font-bold">APH-B Prático</h1>
        <p className="text-lg text-zinc-500">
          Capacite-se em primeiros socorros, aprendendo técnicas de APH para
          atuar com eficiência em situações de emergência e salvar vidas.
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
  );
}
