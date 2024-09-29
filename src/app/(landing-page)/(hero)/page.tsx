import About from "@/app/components/about";
import Contact from "@/app/components/contact";
import Enterprise from "@/app/components/enterprise";
import Faqs from "@/app/components/faqs";
import Footer from "@/app/components/footer";
import GalleryImages from "@/app/components/gallery-images";
import Header from "@/app/components/header";
import Home from "@/app/components/home";
import Instructors from "@/app/components/instructors";

export default function HeroSection() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Instructors />
      <GalleryImages />
      <Contact />
      <Faqs />
      <Enterprise />
      <Footer />
    </div>
  );
}
