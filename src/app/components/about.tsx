import Image from "next/image";
import CardCoursesDetails from "./card-courses-details";
import CardCoursesBombeiroCivil from "./card-courses-bombeiro-civil";
import CardCoursesAPH from "./card-courses-aph";

export default function About() {
  return (
    <div id="about" className="mx-auto max-w-[1200px] px-12 py-16">
      <div className="flex flex-col gap-24">
        <div className="flex items-center gap-2 border-l-2 border-secondary pl-2">
          <Image
            src="/icon-curso.png"
            alt="icon brigadas"
            width={30}
            height={30}
            quality={100}
          />
          <h1 className="flex items-center gap-2 text-4xl font-semibold">
            Cursos
          </h1>
        </div>
        <div className="flex flex-col gap-32">
          <div className="grid grid-cols-2 gap-12">
            <Image
              src="/image-curso-brigadista.jpg"
              alt="imagem curso brigadista"
              width={500}
              height={500}
              quality={100}
              className="rounded-xl shadow-xl"
            />
            <CardCoursesDetails />
          </div>
          <div className="grid grid-cols-2 gap-12">
            <CardCoursesBombeiroCivil />
            <Image
              src="/image-curso-bombeiro-civil.jpg"
              alt="imagem curso brigadista"
              width={500}
              height={500}
              quality={100}
              className="rounded-xl shadow-xl"
            />
          </div>
          <div className="grid grid-cols-2 gap-12">
            <Image
              src="/image-curso-aph.jpg"
              alt="imagem curso brigadista"
              width={500}
              height={500}
              quality={100}
              className="rounded-xl shadow-xl"
            />
            <CardCoursesAPH />
          </div>
        </div>
      </div>
    </div>
  );
}
