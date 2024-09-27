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
        <div className="flex flex-col gap-14">
          <CardCoursesDetails />
          <CardCoursesBombeiroCivil />

          <CardCoursesAPH />
        </div>
      </div>
    </div>
  );
}
