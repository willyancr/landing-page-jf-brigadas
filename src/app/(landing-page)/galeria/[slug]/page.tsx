import Header from "@/app/components/header";
import GalleryImages from "@/app/components/section-gallery/gallery-images";

export default function PageGallery({ params }: { params: { slug: string } }) {
  return (
    <>
      <Header />
      <GalleryImages params={params} />
    </>
  );
}
