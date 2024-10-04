"use client";
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import SocialMediaLink from "./social-midia-link";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-[1200px] px-4 pb-6 pt-4 text-zinc-50 md:px-12">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-0">
          <div className="mt-8 flex flex-col items-center gap-2 md:items-start">
            <Image
              src="/logo-2.png"
              alt="Logo"
              width={150}
              height={150}
              quality={100}
            />
            <span className="text-center text-sm text-zinc-300 md:text-left">
              Quadra 10, Bloco A, Sala 101
            </span>
            <span className="text-center text-sm text-zinc-300 md:text-left">
              Palmas, TO
            </span>
            <span className="text-center text-sm text-zinc-300 md:text-left">
              CEP: 77000-000
            </span>
          </div>

          <nav className="flex flex-col items-center gap-8 font-extralight md:flex-row md:items-start md:gap-32">
            <div className="space-y-4 text-center md:text-left">
              <span className="font-medium text-secondary">Footer Menu</span>
              <div className="flex flex-col gap-2">
                {[
                  { id: 1, title: "Sobre o curso", href: "/#about" },
                  { id: 2, title: "Instrutores", href: "/#instructors" },
                  { id: 3, title: "Contato", href: "/#contact" },
                  { id: 4, title: "FAQs", href: "/#faqs" },
                  { id: 5, title: "Empresa", href: "/#enterprise" },
                ].map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="transition-all hover:text-secondary"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4 text-center md:text-left">
              <span className="font-medium text-secondary">Redes Sociais</span>

              <div className="flex flex-col gap-2">
                <SocialMediaLink href="https://www.instagram.com/jfbrigadas/">
                  <FaInstagram />
                  Instagram
                </SocialMediaLink>

                <SocialMediaLink href="https://wa.me/5563999595787">
                  <FaWhatsapp />
                  WhatsApp
                </SocialMediaLink>

                <SocialMediaLink href="https://www.youtube.com">
                  <FaYoutube />
                  Youtube
                </SocialMediaLink>

                <SocialMediaLink href="https://x.com">
                  <FaXTwitter />
                  X/Twitter
                </SocialMediaLink>
              </div>
            </div>
          </nav>
        </div>

        <span className="mt-10 flex justify-center text-sm font-light text-secondary/60">
          © 2024. Todos os direitos reservados | Desenvolvido por{" "}
          <a
            href="https://github.com/willyancr"
            target="_blank"
            className="ml-1 underline"
          >
            Willyan Costa
          </a>
        </span>
      </div>
    </div>
  );
}
