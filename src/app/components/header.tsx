import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 block w-full bg-primary/90 text-secondary">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between py-4 px-12">
        <Image
          src="/logo-2.png"
          alt="JF Brigadas"
          width={100}
          height={100}
          quality={100}
        />
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link href="#sobre" className="transition-all hover:text-zinc-50">
                Sobre o Curso
              </Link>
            </li>
            <li>
              <Link
                href="#instrutores"
                className="transition-all hover:text-zinc-50"
              >
                Instrutores
              </Link>
            </li>
            <li>
              <Link
                href="#contato"
                className="transition-all hover:text-zinc-50"
              >
                Contato
              </Link>
            </li>
            <li>
              <Link href="#faq" className="transition-all hover:text-zinc-50">
                FAQ
              </Link>
            </li>
            <li>
              <Button className="bg-secondary font-bold uppercase text-primary hover:text-zinc-50 shadow-lg">
                Inscreva-se
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
