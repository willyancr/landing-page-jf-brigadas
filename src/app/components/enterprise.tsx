import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaAngleRight, FaWhatsapp } from "react-icons/fa6";

export default function Enterprise() {
  return (
    <div
      id="enterprise"
      className="container mx-auto max-w-[1200px] px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16"
    >
      <div className="mb-8 flex items-center gap-2 border-l-2 border-secondary pl-2 sm:mb-12 lg:mb-16">
        <Image
          src="/icon-empresa.png"
          alt="icon empresa"
          width={36}
          height={36}
          quality={100}
        />
        <h1 className="flex items-center gap-2 text-2xl font-semibold sm:text-3xl lg:text-4xl">
          Nossa Empresa
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6 rounded-lg bg-image-card-info bg-cover p-4 text-zinc-50 shadow-lg sm:p-6 md:grid-cols-2">
        <div className="flex flex-col items-center justify-between border-secondary/50 md:border-r">
          <Image
            src="/logo-vertical.png"
            alt="icon contato"
            width={300}
            height={300}
            quality={100}
            className="mb-4 h-auto max-w-full"
          />
          <div className="flex w-full max-w-md flex-col gap-2 p-4 text-gray-300 sm:max-w-lg">
            <p className="rounded-md bg-secondary/30 p-2 text-sm sm:text-base">
              <strong>MISSÃO:</strong> Formar profissionais técnicos e
              capacitados para atividade de bombeiro profissional civil.
            </p>
            <p className="rounded-md bg-secondary/30 p-2 text-sm sm:text-base">
              <strong>VISÃO:</strong> Ser uma empresa reconhecida pela
              qualidade, bem como uma empresa transformadora da realidade social
              e humana.
            </p>
            <p className="rounded-md bg-secondary/30 p-2 text-sm sm:text-base">
              <strong>VALORES:</strong> Ética, humanismo, responsabilidade
              social, integridade e inovação.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">
            JF Brigadas
          </h2>
          <div className="flex flex-col gap-3 text-sm text-gray-300 sm:text-base">
            {[
              "Prestamos serviços para eventos temporários conforme a ANT 26 do CBMTO.",
              "Bombeiros civis profissionais, treinados e capacitados, com foco na prevenção, proteção coletiva e bem-estar social.",
              "Combate a princípios de incêndio e atendimento pré-hospitalar.",
              "Vistorias prévias, avaliação de riscos e inspeção de equipamentos.",
              "Desempenhamos um papel social, fornecendo informações que podem melhorar a qualidade de vida da comunidade.",
              "Zelamos por vidas e pelo respeito ao meio ambiente.",
              "Emitimos nota fiscal.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <FaAngleRight className="mt-1 flex-shrink-0 text-secondary" />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <Button className="w-full bg-secondary text-zinc-50 sm:w-fit">
            <a
              href="https://wa.me/5563999595787"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 uppercase"
            >
              Faça um orçamento
              <FaWhatsapp size={20} />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
