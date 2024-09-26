import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="block w-full bg-primary text-secondary">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-12 py-4">
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
              <Link href="#about" className="transition-all hover:text-zinc-50">
                Sobre o Curso
              </Link>
            </li>
            <li>
              <Link
                href="#instructors"
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
              <Link href="#empresa" className="transition-all hover:text-zinc-50">
                Empresa
              </Link>
            </li>
            <li>
              <Button className="bg-secondary font-bold uppercase text-primary shadow-lg hover:text-zinc-50">
                Inscreva-se
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
