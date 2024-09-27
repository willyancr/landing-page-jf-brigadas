import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import SocialMediaLink from "./social-midia-link";

export default function Instructors() {
  return (
    <div
      id="instructors"
      className="bg-image-instructors bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto max-w-[1200px] px-12 py-16">
        <div className="flex items-center gap-2 border-l-2 border-secondary pl-2">
          <Image
            src="/icon-instrutores.png"
            alt="icon instrutores"
            width={30}
            height={30}
            quality={100}
          />
          <h1 className="flex items-center gap-2 text-4xl font-semibold">
            Instrutores
          </h1>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4 rounded-md bg-primary/10 p-4 shadow-lg">
            <Image
              src="/image-profile-bombeiro-1.jpeg"
              alt="imagem do instrutor"
              width={400}
              height={400}
              quality={100}
              className="w-full rounded-md"
            />
            <h2 className="text-2xl font-bold">Instrutor 1</h2>
            {/* <div className="border-b-2 border-secondary w-20 rounded-md" /> */}

            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatem, quae beatae, aperiam, voluptas unde possimus quidem
              explicabo quos?
            </p>
            <div className="flex items-center gap-4">
              <SocialMediaLink href="https://www.instagram.com">
                <FaInstagram size={24} />
              </SocialMediaLink>
              <SocialMediaLink href="https://www.facebook.com">
                <FaFacebook size={24} />
              </SocialMediaLink>
              <SocialMediaLink href="https://www.linkedin.com">
                <FaLinkedin size={24} />
              </SocialMediaLink>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-md bg-primary/10 p-4 shadow-lg">
            <Image
              src="/image-profile-medical-1.jpeg"
              alt="imagem do instrutor"
              width={400}
              height={400}
              quality={100}
              className="w-full rounded-md"
            />
            <h2 className="text-2xl font-bold">Instrutor 2</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatem, quae beatae, aperiam, voluptas unde possimus quidem
              explicabo quos?
            </p>
            <div className="flex items-center gap-4">
              <SocialMediaLink href="https://www.instagram.com">
                <FaInstagram size={24} />
              </SocialMediaLink>
              <SocialMediaLink href="https://www.facebook.com">
                <FaFacebook size={24} />
              </SocialMediaLink>
              <SocialMediaLink href="https://www.linkedin.com">
                <FaLinkedin size={24} />
              </SocialMediaLink>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-md bg-primary/10 p-4 shadow-lg">
            <Image
              src="/image-profile-bombeiro-2.jpeg"
              alt="imagem do instrutor"
              width={400}
              height={400}
              quality={100}
              className="w-full rounded-md"
            />
            <h2 className="text-2xl font-bold">Instrutor 3</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatem, quae beatae, aperiam, voluptas unde possimus quidem
              explicabo quos?
            </p>
            <div className="flex items-center gap-4">
              <SocialMediaLink href="https://www.instagram.com">
                <FaInstagram size={24} />
              </SocialMediaLink>
              <SocialMediaLink href="https://www.facebook.com">
                <FaFacebook size={24} />
              </SocialMediaLink>
              <SocialMediaLink href="https://www.linkedin.com">
                <FaLinkedin size={24} />
              </SocialMediaLink>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-md bg-primary/10 p-4 shadow-lg">
            <Image
              src="/image-profile-bombeiro-3.jpeg"
              alt="imagem do instrutor"
              width={400}
              height={400}
              quality={100}
              className="w-full rounded-md"
            />
            <h2 className="text-2xl font-bold">Instrutor 4</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatem, quae beatae, aperiam, voluptas unde possimus quidem
              explicabo quos?
            </p>
            <div className="flex items-center gap-4">
              <SocialMediaLink href="https://www.instagram.com">
                <FaInstagram size={24} />
              </SocialMediaLink>
              <SocialMediaLink href="https://www.facebook.com">
                <FaFacebook size={24} />
              </SocialMediaLink>
              <SocialMediaLink href="https://www.linkedin.com">
                <FaLinkedin size={24} />
              </SocialMediaLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
