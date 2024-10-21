import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  src: string;
  name: string;
  description: string;
  href: string;
};

export default function CardInstructorCourse({
  src,
  name,
  description,
  href,
}: Props) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        src={src}
        alt="imagem instrutor"
        width={100}
        height={100}
        quality={100}
        className="h-28 w-28 rounded-full"
      />
      <div className="flex w-52 flex-col items-center text-center">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-zinc-500">{description}</p>
        <Link
          href={href}
          className="mt-2 flex w-fit items-center rounded-md bg-zinc-200 px-2 py-1 text-sm font-semibold text-zinc-500 transition-all duration-300 hover:bg-secondary hover:text-primary"
        >
          +INFO
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
