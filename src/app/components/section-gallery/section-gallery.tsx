"use client";

import Link from "next/link";
import { CardAlbum } from "./card-album";
import Image from "next/image";

interface ImageItem {
  id: string;
  url: string;
  title: string;
}

const images: ImageItem[] = [
  {
    id: "1",
    url: "https://res.cloudinary.com/drvploup8/image/upload/v1730461465/CAPA_m3hbf6.jpg",
    title: "SBV",
  },
  {
    id: "2",
    url: "https://res.cloudinary.com/drvploup8/image/upload/v1730461502/jfbrigadas_20240304_p_3316287679929893142_2_3316287675265797423_olqk0f.jpg",
    title: "Trauma no atendimento pré-hospitalar",
  },
  {
    id: "3",
    url: "/image-curso-brigadista.jpg",
    title: "",
  },
  {
    id: "4",
    url: "/image-curso-brigadista.jpg",
    title: "",
  },
  {
    id: "5",
    url: "/image-curso-brigadista.jpg",
    title: "",
  },
  {
    id: "6",
    url: "/image-curso-brigadista.jpg",
    title: "",
  },
  {
    id: "7",
    url: "/image-curso-brigadista.jpg",
    title: "",
  },
  {
    id: "8",
    url: "/image-curso-brigadista.jpg",
    title: "",
  },
];

export function SectionGallery() {
  
  function titleToSlug(title: string) {
    return title
      .toLowerCase() // Converte para minúsculas
      .normalize("NFD") // Normaliza caracteres acentuados
      .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
      .trim() // Remove espaços extras no início e no final
      .replace(/[^\w\s-]/g, "") // Remove caracteres especiais
      .replace(/\s+/g, "-") // Substitui espaços por hifens
      .replace(/-+/g, "-"); // Garante que não haja múltiplos hifens seguidos
  }

  return (
    <div className="bg-image-gallery bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto max-w-[1200px] px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
        <div className="mb-16 flex items-center gap-2 border-l-2 border-secondary pl-2">
          <Image
            src="/icon-galeria.png"
            alt="icon galeria de imagens"
            width={30}
            height={30}
            quality={100}
          />
          <h1 className="flex items-center gap-2 text-4xl font-semibold">
            Galeria de Cursos Realizados
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image) => (
            <Link href={`/galeria/${titleToSlug(image.title)}`} key={image.id}>
              <CardAlbum url={image.url} title={image.title} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionGallery;
