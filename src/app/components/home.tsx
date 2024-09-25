import Image from "next/image";
import RotatingPhrases from "./rotating-phrases";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Image
        src="/bg-hero.jpeg"
        alt="Hero"
        width={5000}
        height={5000}
        quality={100}
        className="absolute inset-0 h-full w-full object-cover brightness-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-[1200px] px-12 text-center">
          <RotatingPhrases />
        </div>
      </div>
    </div>
  );
}
