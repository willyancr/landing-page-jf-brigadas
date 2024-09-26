import Image from "next/image";
import RotatingPhrases from "./rotating-phrases";
import { ChevronsDown } from "lucide-react";
export default function Home() {
  return (
    <div className="relative h-screen">
      <Image
        src="/bg-hero2.jpg"
        alt="Hero"
        width={5000}
        height={5000}
        quality={100}
        className="absolute inset-0 h-full w-full object-cover brightness-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-16">
        <div className="border-secondary flex h-[270px] max-w-[1200px] items-center rounded-sm border-l-2 bg-gradient-to-r from-secondary/20 px-12">
          <RotatingPhrases />
        </div>
        <h1 className="flex flex-col items-center gap-4 text-2xl font-bold text-zinc-300">
          Conheça mais sobre nossos cursos
          <ChevronsDown className="animate-bounce" size={32} />
        </h1>
      </div>
    </div>
  );
}
