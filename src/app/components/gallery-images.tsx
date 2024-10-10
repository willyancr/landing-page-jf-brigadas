"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { scaleAnimation } from "../lib/animation";

interface ImageItem {
  id: string;
  src: string;
  alt: string;
}

const images: ImageItem[] = [
  {
    id: "1",
    src: "/galeria-curso-1.jpg",
    alt: "Descrição da imagem 1",
  },
  {
    id: "2",
    src: "/galeria-curso-2.jpg",
    alt: "Descrição da imagem 2",
  },
  {
    id: "3",
    src: "/image-curso-brigadista.jpg",
    alt: "Descrição da imagem 3",
  },
  { id: "4", src: "/image-curso-brigadista.jpg", alt: "Descrição da imagem 4" },
  {
    id: "5",
    src: "/image-curso-brigadista.jpg",
    alt: "Descrição da imagem 1",
  },
  {
    id: "6",
    src: "/image-curso-brigadista.jpg",
    alt: "Descrição da imagem 2",
  },
  {
    id: "7",
    src: "/image-curso-brigadista.jpg",
    alt: "Descrição da imagem 3",
  },
  { id: "8", src: "/image-curso-brigadista.jpg", alt: "Descrição da imagem 4" },
];

export function GalleryImages() {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  const openImage = (image: ImageItem) => setSelectedImage(image);
  const closeImage = () => setSelectedImage(null);

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
            Galeria de imagens
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image) => (
            <motion.div
              key={image.id}
              {...scaleAnimation}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
              onClick={() => openImage(image)}
              className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={closeImage}>
        <DialogContent className="w-[400px] sm:w-full sm:max-w-3xl">
          {selectedImage && (
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="h-[600px] w-full animate-modal rounded-lg object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default GalleryImages;
