import Image from "next/image";

export default function Contact() {
  return (
    <div id="contact" className="container mx-auto max-w-[1200px] px-12 py-16">
      <div className="mb-16 flex items-center gap-2 border-l-2 border-secondary pl-2">
        <Image
          src="/icon-contato.png"
          alt="icon contato"
          width={36}
          height={36}
          quality={100}
        />
        <h1 className="flex items-center gap-2 text-4xl font-semibold">
          Contato
        </h1>
      </div>
    </div>
  );
}
