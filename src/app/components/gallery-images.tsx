"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ImageItem {
  id: string;
  src: string;
  alt: string;
}

const images: ImageItem[] = [
  { id: "1", src: "/curso/imagem1.webp", alt: "Descrição da imagem 1" },
  { id: "2", src: "/curso/imagem2.webp", alt: "Descrição da imagem 2" },
  { id: "3", src: "/curso/imagem3.webp", alt: "Descrição da imagem 3" },
  // Adicione mais imagens conforme necessário
];

export function GalleryImages() {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const searchParams = useSearchParams();
  const initialImageId = searchParams.get("image");

  const openImage = (image: ImageItem) => setSelectedImage(image);
  const closeImage = () => setSelectedImage(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image) => (
          <motion.div
            key={image.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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

      <Dialog open={!!selectedImage} onOpenChange={closeImage}>
        <DialogContent className="max-w-3xl">
          {selectedImage && (
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="h-full w-full object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default GalleryImages;
