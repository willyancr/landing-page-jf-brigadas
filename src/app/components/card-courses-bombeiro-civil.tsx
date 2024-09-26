import Image from "next/image";

export default function CardCoursesBombeiroCivil() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Image
          src="/icon-bombeiro.png"
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
        <h1 className="text-4xl font-bold">Bombeiro Civil</h1>
        <p className="text-lg text-zinc-500">
          Capacite-se em combate a incêndio, salvamentos e primeiros socorros,
          tornando-se um bombeiro civil preparado para agir em emergências e
          proteger vidas.
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
          { id: 1, title: "Prevenção e Combate a Incêndios" },
          { id: 2, title: "Resgate em Altura e Espaços Confinados" },
          { id: 3, title: "Primeiros Socorros e Atendimento Pré-Hospitalar" },
          { id: 4, title: "Uso de Equipamentos de Proteção Individual (EPIs)" },
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
  );
}
