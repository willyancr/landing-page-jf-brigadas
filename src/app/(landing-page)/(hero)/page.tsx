import About from "@/app/components/about";
import Contact from "@/app/components/contact";
import Enterprise from "@/app/components/enterprise";
import Faqs from "@/app/components/faqs";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Home from "@/app/components/home";
import Instructors from "@/app/components/instructors";
import SectionGallery from "@/app/components/section-gallery/section-gallery";

export default function HeroSection() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Instructors />
      <SectionGallery />
      <Contact />
      <Faqs />
      <Enterprise />
      <Footer />
    </div>
  );
}
