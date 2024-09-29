import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaAngleRight, FaWhatsapp } from "react-icons/fa6";

export default function Enterprise() {
  return (
    <div
      id="enterprise"
      className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16"
    >
      <div className="mb-8 sm:mb-12 lg:mb-16 flex items-center gap-2 border-l-2 border-secondary pl-2">
        <Image
          src="/icon-empresa.png"
          alt="icon empresa"
          width={36}
          height={36}
          quality={100}
        />
        <h1 className="flex items-center gap-2 text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Nossa Empresa
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-lg bg-image-card-info p-4 sm:p-6 text-zinc-50 shadow-lg">
        <div className="flex items-center justify-center md:border-r border-secondary/50">
          <Image
            src="/logo-2.png"
            alt="icon contato"
            width={300}
            height={300}
            quality={100}
            className="mb-4 max-w-full h-auto"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold">JF Brigadas</h2>
          <div className="flex flex-col gap-3 text-gray-300 text-sm sm:text-base">
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
                <FaAngleRight className="text-secondary flex-shrink-0 mt-1" />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <Button className="w-full sm:w-fit bg-secondary text-primary">
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
