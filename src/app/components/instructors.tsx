"use client";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import SocialMediaLink from "./social-midia-link";
import { leftAnimation } from "../lib/animation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Instructors() {
  return (
    <div
      id="instructors"
      className="bg-image-instructors bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto max-w-[1200px] px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
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

        {/* Dados dos instrutores */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            {...leftAnimation}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex flex-col gap-4 rounded-md bg-primary/10 p-4 shadow-lg"
          >
            <Image
              src="/perfil-ismael.jpg"
              alt="imagem do instrutor"
              width={400}
              height={400}
              quality={100}
              className="h-[350px] w-full rounded-md object-cover"
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold">Ismael Armondes</h2>
              <p>
                Médico Ortopedista e Traumatologista; Bombeiro Militar - TO,
                atuante de 2006 a 2014.
              </p>
            </div>
            <div>
              <p>
                <strong>Áreas de Instrução:</strong>
              </p>
              <ul>
                <li>→ Atendimento pré-hospitalar</li>
                <li>→ Suporte Básico de Vida (SBV)</li>
                <li>→ Primeiros Socorros</li>
                <li>→ Lei Lucas</li>
                <li>
                  → Trauma no atendimento pré-hospitalar, manipulação e
                  transporte de vítimas de trauma físico e RMC
                </li>
                <li>→ Stop The Bleed</li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <SocialMediaLink href="https://www.instagram.com/ismael.armondes/">
                <FaInstagram size={24} />
              </SocialMediaLink>
              <SocialMediaLink href="https://www.facebook.com/ismael.armondes">
                <FaFacebook size={24} />
              </SocialMediaLink>
              <SocialMediaLink href="https://www.linkedin.com/in/dr-ismael-armondes-524475304/">
                <FaLinkedin size={24} />
              </SocialMediaLink>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-between gap-4 rounded-md bg-primary/10 p-4 shadow-lg"
            {...leftAnimation}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Image
              src="https://res.cloudinary.com/drvploup8/image/upload/v1729533193/JO%C3%83O-PAULO_zsdy48.jpg"
              alt="imagem do instrutor"
              width={400}
              height={400}
              quality={100}
              className="h-[350px] w-full rounded-md object-cover"
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold">João Paulo de Sousa</h2>
              <p>
                Pedagogo; Sargento Bombeiro Militar - TO; Bombeiro Profissional
                Civil; Bombeiro de Aeródromo; Bombeiro Voluntário; Formado em
                Pedagogia pela Universidade Federal do Tocantins; Pós-Graduado
                em atendimento pré-hospitalar;
              </p>
            </div>
            <div>
              <p>
                <strong>Áreas de Instrução:</strong>
              </p>
              <ul>
                <li>
                  → Atendimento pré-hospitalar, Suporte Básico de Vida (SBV) e
                  Primeiros Socorros
                </li>
                <li>
                  → Prevenção, Combate a Incêndios e Equipamentos Auxiliares de
                  Incêndios
                </li>
                <li>
                  → Técnica de Combate a Incêndio (TCI) e Brigadas de Incêndio
                </li>
                <li>→ Ética Profissional</li>
                <li>
                  → Lei Lucas e Cursos de Trauma no atendimento pré-hospitalar
                </li>
                <li>
                  → Manipulação e Transporte de vítimas de trauma físico, RMC e
                  Stop The Bleed
                </li>
                <li>→ Curso de Formação de Instrutores</li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <SocialMediaLink href="https://www.instagram.com/jfbrigadas/">
                <FaInstagram size={24} />
              </SocialMediaLink>
              <SocialMediaLink href="https://api.whatsapp.com/send?phone=5563999595787">
                <FaWhatsapp size={24} />
              </SocialMediaLink>
              <SocialMediaLink href="https://www.youtube.com/jfbrigadas">
                <FaYoutube size={24} />
              </SocialMediaLink>
            </div>
          </motion.div>

          <motion.div
            {...leftAnimation}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="flex flex-col gap-4 rounded-md bg-primary/10 p-4 shadow-lg"
          >
            <Image
              src="https://res.cloudinary.com/drvploup8/image/upload/v1729536300/Thalyta_Diniz_Trindade_d6jcxg.jpg"
              alt="imagem do instrutor"
              width={400}
              height={400}
              quality={100}
              className="h-[350px] w-full rounded-md object-cover"
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold">Thalyta Diniz Trindade</h2>
              <p>
                Técnica em Segurança do Trabalho; Bacharel em Direito; Bombeiro
                Profissional Civil Bombeiro Aeródromo.
              </p>
            </div>
            <div>
              <p>
                <strong>Áreas de Instrução:</strong>
              </p>
              <ul>
                <li>→ Atendimento Pré-hospitalar</li>
                <li>→ Primeiros Socorros</li>
                <li>
                  → Prevenção e Combate a Incêndios e Equipamentos Auxiliares de
                  Incêndios
                </li>
                <li>→ Da Lei Lucas</li>
                <li>→ Brigadas de Incêndios</li>
                <li>→ Legislação</li>
                <li>→ Ética Profissional</li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <SocialMediaLink href="https://www.instagram.com/thalytadinizz/">
                <FaInstagram size={24} />
              </SocialMediaLink>
              <SocialMediaLink href="https://www.facebook.com">
                <FaFacebook size={24} />
              </SocialMediaLink>
              <SocialMediaLink href="https://www.linkedin.com">
                <FaLinkedin size={24} />
              </SocialMediaLink>
            </div>
          </motion.div>

          <motion.div
            {...leftAnimation}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex flex-col gap-4 rounded-md bg-primary/10 p-4 shadow-lg"
            id="instructor-line-2"
          >
            <Image
              src="https://res.cloudinary.com/drvploup8/image/upload/v1729536300/Erika_Silva_Pereira_Ara%C3%BAjo_amynyb.jpg"
              alt="imagem do instrutor"
              width={400}
              height={400}
              quality={100}
              className="h-[350px] w-full rounded-md object-cover"
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold">Erika Silva Pereira Araújo</h2>
              <p>
                Técnica em Segurança do Trabalho; Bombeiro Profissional Civil.
              </p>
            </div>
            <div>
              <p>
                <strong>Áreas de Instrução:</strong>
              </p>
              <ul>
                <li>→ Produtos Perigosos</li>
                <li>→ Primeiros Socorros</li>
                <li>
                  → Prevenção e Combate a Incêndios e Equipamentos Auxiliares de
                  Incêndios
                </li>
                <li>→ Atividade operacional do Bombeiro Profissional Civil</li>
                <li>→ Brigadas de Incêndios</li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <SocialMediaLink href="https://www.instagram.com/erikasilper">
                <FaInstagram size={24} />
              </SocialMediaLink>
              <SocialMediaLink href="https://www.facebook.com">
                <FaFacebook size={24} />
              </SocialMediaLink>
              <SocialMediaLink href="https://www.linkedin.com">
                <FaLinkedin size={24} />
              </SocialMediaLink>
            </div>
          </motion.div>

          <motion.div
            {...leftAnimation}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="flex flex-col gap-4 rounded-md bg-primary/10 p-4 shadow-lg"
            id="instructor-line-2"
          >
            <Image
              src="https://res.cloudinary.com/drvploup8/image/upload/v1729536300/Luiz_Henrique_Barbosa_Fernandes_s0qqb8.jpg"
              alt="imagem do instrutor"
              width={400}
              height={400}
              quality={100}
              className="h-[350px] w-full rounded-md object-cover"
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold">
                Luiz Henrique Barbosa Fernandes
              </h2>
              <p>
                Técnico em Segurança do Trabalho; Bombeiro Profissional Civil.
              </p>
            </div>
            <div>
              <p>
                <strong>Áreas de Instrução:</strong>
              </p>
              <ul>
                <li>→ Espaço Confinado – NR 33</li>
                <li>→ Trabalho em Altura - NR 35</li>
                <li>→ Primeiros Socorros</li>
                <li>
                  → Instrutor de Prevenção e Combate a Incêndios e Equipamentos
                  Auxiliares de Incêndios
                </li>
                <li>→ Supervisor de Resgate</li>
                <li>→ Supervisor de Espaço Confinado</li>
                <li>→ Supervisor de Trabalho em Altura</li>
                <li>→ Auditor Interno ISO 45001 e 14001</li>
                <li>→ Gestor de Segurança do Trabalho</li>
                <li>→ Especialista em eSocial</li>
                <li>→ Especialista Gestão Ocupacional</li>
              </ul>
            </div>
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
          </motion.div>

          <motion.div
            {...leftAnimation}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="flex flex-col gap-4 rounded-md bg-primary/10 p-4 shadow-lg"
            id="instructor-line-2"
          >
            <Image
              src="https://res.cloudinary.com/drvploup8/image/upload/v1729536300/Sara_Rayssa_dos_Santos_Gon%C3%A7alves_ibasm7.jpg"
              alt="imagem do instrutor"
              width={400}
              height={400}
              quality={100}
              className="h-[350px] w-full rounded-md object-cover"
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold">
                Sara Rayssa dos Santos Gonçalves
              </h2>
              <p>
                Licenciada e Bacharel em Educação Física; Bombeiro Profissional
                Civil
              </p>
            </div>
            <div>
              <p>
                <strong>Áreas de Instrução:</strong>
              </p>
              <ul>
                <li>→ Atendimento Pré-Hospitalar</li>
                <li>→ Primeiros Socorros</li>
                <li>
                  → Prevenção e Combate a Incêndios e Equipamentos Auxiliares de
                  Incêndios
                </li>
                <li>→ Atividade operacional do Bombeiro Profissional Civil</li>
                <li>→ Lei Lucas</li>
                <li>→ Atividade Física voltada para Bombeiro Civil</li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <SocialMediaLink href="https://www.instagram.com/sararayssa.prof">
                <FaInstagram size={24} />
              </SocialMediaLink>
              <SocialMediaLink href="https://www.facebook.com">
                <FaFacebook size={24} />
              </SocialMediaLink>
              <SocialMediaLink href="https://www.linkedin.com">
                <FaLinkedin size={24} />
              </SocialMediaLink>
            </div>
          </motion.div>

          <motion.div
            {...leftAnimation}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex flex-col gap-4 rounded-md bg-primary/10 p-4 shadow-lg"
            id="instructor-line-3"
          >
            <Image
              src="https://res.cloudinary.com/drvploup8/image/upload/v1729536300/Diego_de_Sousa_Damasceno_Rodrigues_trstyq.jpg"
              alt="imagem do instrutor"
              width={400}
              height={400}
              quality={100}
              className="h-[350px] w-full rounded-md object-cover"
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold">
                Diego de Sousa Damasceno Rodrigues
              </h2>
              <p>
                Licenciatura em Educação Física; Bombeiro Profissional Civil;
                Bombeiro de Aeródromo.
              </p>
            </div>
            <div>
              <p>
                <strong>Áreas de Instrução:</strong>
              </p>
              <ul>
                <li>→ Ordem Unida</li>
                <li>→ Salvamento em Altura e Terrestres</li>
                <li>
                  → Disciplinar na Escola do Bombeiro Militar do Tocantins
                </li>

                <li>→ NR6 (EPI e EPRA)</li>
                <li>→ Prevenção e Combate a Incêndios</li>
                <li>→ Primeiros Socorros</li>
              </ul>
            </div>
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}
