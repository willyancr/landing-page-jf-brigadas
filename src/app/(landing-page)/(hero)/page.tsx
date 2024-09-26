import About from "@/app/components/about";
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
    </div>
  );
}
