import Image from "next/image";

export default function Home() {
  return (
    <div className="relative m-auto h-screen">
      <Image
        src="/bg-hero.jpeg"
        alt="Hero"
        width={5000}
        height={5000}
        quality={100}
        className="mx-auto h-[900px] w-full object-cover brightness-50"
      />
      <div className="max-w-[1200px] px-12">
        <h1 className="absolute left-44 top-[40%] w-[70%] text-center text-4xl font-bold text-zinc-50">
          Capacite-se para Combater Incêndios e Garanta a Segurança da Sua
          Empresa
        </h1>
      </div>
    </div>
  );
}
