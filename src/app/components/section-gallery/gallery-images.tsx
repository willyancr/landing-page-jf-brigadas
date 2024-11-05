"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import Image from "next/image";
import Loading from "../loading";

interface CloudinaryImage {
  asset_id: string;
  secure_url: string;
}

export function GalleryImages({ params }: { params: { slug: string } }) {
  const [selectedImage, setSelectedImage] = useState<CloudinaryImage | null>(
    null,
  );
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [loading, setLoading] = useState(false);
  const openImage = (image: CloudinaryImage) => setSelectedImage(image);
  const closeImage = () => setSelectedImage(null);

  useEffect(() => {
    async function fetchImages() {
      setLoading(true);
      if (!params.slug) return;

      try {
        const response = await fetch(`/api/cloudinary?slug=${params.slug}`);
        if (!response.ok) {
          console.error("Erro ao buscar imagens");
          return;
        }
        const data = await response.json();
        setImages(data.resources || []);
      } catch (error) {
        console.error("Erro na requisição", error);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [params.slug]);
  console.log(images);

  function slugToTitle(slug: string) {
    return slug
      .replace(/-/g, " ") // Substitui hifens por espaços
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitaliza a primeira letra de cada palavra
  }

  return (
    <div className="">
      <div className="container mx-auto max-w-[1200px] px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
        <div className="mb-16 flex items-center gap-3 border-l-2 border-secondary pl-2">
          <Image
            src="/icon-galeria.png"
            alt="icon galeria de imagens"
            width={30}
            height={30}
            quality={100}
          />
          <div>
            <h1 className="flex items-center gap-2 text-4xl font-semibold">
              Galeria de Imagens
            </h1>

            <p className="text-lg uppercase text-secondary">
              Curso: {slugToTitle(params.slug)}
            </p>
          </div>
        </div>
        {loading && <Loading />}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image) => (
            <div
              key={image.asset_id}
              onClick={() => openImage(image)}
              className="cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:scale-105"
            >
              <Image
                src={image.secure_url}
                alt="Imagem de curso"
                width={300}
                height={200}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={closeImage}>
        <DialogContent className="w-[400px] sm:w-full sm:max-w-3xl">
          {selectedImage && (
            <Image
              src={selectedImage.secure_url}
              alt="Imagem de curso"
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
