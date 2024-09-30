'use client'
import { useState } from "react";
// import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: 1, title: "Sobre o Curso", href: "#about" },
  { id: 2, title: "Instrutores", href: "#instructors" },
  { id: 3, title: "Contato", href: "#contact" },
  { id: 4, title: "FAQs", href: "#faqs" },
  { id: 5, title: "Empresa", href: "#enterprise" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-primary text-secondary">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 py-4 md:px-12">
        <Image
          src="/logo-2.png"
          alt="JF Brigadas"
          width={100}
          height={100}
          quality={100}
          className="md:w-[100px] md:h-[80px]"
        />
        
        {/* Menu hambúrguer para telas menores */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu de navegação */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="transition-all hover:text-zinc-50"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            {/* <li>
              <Button className="bg-secondary font-bold uppercase text-primary shadow-lg hover:text-zinc-50 w-full md:w-auto">
                Inscreva-se
              </Button>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
