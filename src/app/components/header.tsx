"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItemsHome = [
  { id: 1, title: "Sobre o Curso", href: "/#about" },
  { id: 2, title: "Instrutores", href: "/#instructors" },
  { id: 3, title: "Contato", href: "/#contact" },
  { id: 4, title: "FAQs", href: "/#faqs" },
  { id: 5, title: "Empresa", href: "/#enterprise" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-primary text-secondary">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 py-4 md:px-12">
        <Link href="/">
          <Image
            src="/logo-horizontal.png"
            alt="JF Brigadas"
            width={200}
            height={200}
            quality={100}
            // className="md:h-[80px] md:w-[100px]"
          />
        </Link>

        {/* Menu hambúrguer para telas menores */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu de navegação */}
        <nav className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            {navItemsHome.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="transition-all hover:text-zinc-50"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
