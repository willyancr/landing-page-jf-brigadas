import Image from "next/image";
import CardCoursesDetails from "./cards-courses/card-courses-details";
import CardCoursesBombeiroCivil from "./cards-courses/card-courses-bombeiro-civil";
import CardCoursesAPH from "./cards-courses/card-courses-aph";
import CardCoursesSBV from "./cards-courses/card-courses-sbv";
import CardCoursesTrauma from "./cards-courses/card-courses-trauma";

export default function About() {
  return (
    <div
      id="about"
      className="container mx-auto max-w-[1200px] px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16"
    >
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
          <CardCoursesSBV />
          <CardCoursesTrauma />
        </div>
      </div>
    </div>
  );
}
