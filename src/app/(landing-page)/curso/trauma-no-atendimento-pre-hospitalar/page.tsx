import CardInstructorCourse from "@/app/components/cards-courses/card-instructor-courses";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Calendar, Clock, Star, Users } from "lucide-react";
import { FaClock, FaEnvelope, FaMapPin, FaWhatsapp } from "react-icons/fa6";
import CardSendEmail from "@/app/components/card-send-email";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Image from "next/image";

export default function TraumaNoAtendimentoPreHospitalar() {
  return (
    <div>
      <Header />
      <main className="mb-24 min-h-screen">
        <div className="relative bg-zinc-100 pb-20">
          <div className="container mx-auto max-w-[1200px] px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
            {/* INFO CURSO */}
            <div className="flex flex-col gap-8 md:flex-row md:gap-12">
              <Image
                src="/image-curso-trauma.jpg"
                alt="imagem curso aph-b"
                width={500}
                height={500}
                quality={100}
                className="h-60 w-full rounded-xl object-cover shadow-xl md:w-60"
              />
              <div className="flex w-full flex-col gap-4 md:w-[500px]">
                <h1 className="text-2xl font-bold">
                  Curso: Trauma no Atendimento Pré-Hospitalar (APH-B)
                </h1>

                <div className="flex gap-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> 08h
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Users className="h-3 w-3" /> Profissional da Saúde
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> Presencial
                  </Badge>
                </div>

                <p className="text-sm text-zinc-500">
                  Capacite-se para atuar em situações de trauma no ambiente
                  pré-hospitalar, aprendendo técnicas essenciais de
                  imobilização, resgate e suporte vital, garantindo uma resposta
                  rápida e eficaz em emergências.
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-current text-yellow-400" />
                    <Star className="h-5 w-5 fill-current text-yellow-400" />
                    <Star className="h-5 w-5 fill-current text-yellow-400" />
                    <Star className="h-5 w-5 fill-current text-yellow-400" />
                    <Star className="h-5 w-5 text-gray-300" />
                    <span className="ml-2 text-sm text-zinc-500">(4.0)</span>
                  </div>
                  <span className="text-sm text-zinc-500">500+ alunos</span>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Material incluso</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Certificado</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:ml-auto md:mt-0">
                <Button className="w-full bg-primary text-white hover:bg-secondary hover:text-zinc-50 md:w-auto">
                  <a
                    href="https://wa.me/5563999595787"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 uppercase"
                  >
                    Faça um orçamento
                    <FaWhatsapp size={20} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto max-w-[1200px] px-4 pb-10 sm:px-6 lg:px-12">
          <div className="relative -mt-20 grid grid-cols-1 gap-10 lg:grid-cols-[70%_30%]">
            <div className="rounded-lg bg-white p-6 pb-20 shadow-md">
              <h2 className="mb-4 text-2xl font-bold">Sobre o curso</h2>
              {/* DESCRIÇÃO DO CURSO */}
              <div className="space-y-2 text-sm text-zinc-500">
                <h2 className="text-xl font-bold">
                  Trauma no Atendimento Pré-Hospitalar (APH-B)
                </h2>
                <p>
                  O curso de{" "}
                  <strong>Trauma no Atendimento Pré-Hospitalar (APH-B)</strong>{" "}
                  capacita profissionais para atuar em emergências traumáticas,
                  preparando-os para realizar atendimentos rápidos e eficazes em
                  situações de risco. Com foco em técnicas de imobilização,
                  manejo de traumas e suporte vital, os participantes estarão
                  aptos a prestar o primeiro atendimento de forma segura e
                  eficiente.
                </p>

                <h3 className="text-xl font-bold">Conteúdo do Curso</h3>
                <ul>
                  <li>- Conceito de trauma</li>
                  <li>- Epidemiologia do trauma</li>
                  <li>- Segurança e biossegurança do socorrista</li>
                  <li>- Avaliação da cena e cinemática do trauma</li>
                  <li>- Atualizações sobre Reanimação Cardiopulmonar (RCP)</li>
                  <li>- Manipulação e transporte de vítimas</li>
                  <li>- Tratamento de choque e hemorragias</li>
                </ul>

                <h3 className="text-xl font-bold">Checklist de Habilidades</h3>
                <ul>
                  <li>
                    - Técnicas de avaliação primária e secundária de traumas
                  </li>
                  <li>- Imobilização e transporte seguro de vítimas</li>
                  <li>- Atendimento a traumas cranioencefálicos e espinhais</li>
                  <li>
                    - Manejo de hemorragias externas e choque hipovolêmico
                  </li>
                  <li>
                    - Utilização de dispositivos de imobilização (colares
                    cervicais, pranchas rígidas, etc.)
                  </li>
                  <li>
                    - Atendimento de fraturas, luxações e lesões
                    musculoesqueléticas
                  </li>
                  <li>
                    - Procedimentos de emergência para traumas torácicos e
                    abdominais
                  </li>
                  <li>
                    - Técnicas de extração de vítimas em ambientes de difícil
                    acesso
                  </li>
                  <li>
                    - Prática de suporte ventilatório e manejo de vias aéreas
                  </li>
                  <li>
                    - Protocolos de atendimento em múltiplas vítimas (triagem e
                    priorização)
                  </li>
                </ul>

                <p>
                  Ao final do curso, o participante estará apto a aplicar
                  protocolos de atendimento pré-hospitalar em cenários de
                  trauma, garantindo segurança e eficácia no suporte inicial à
                  vítima.
                </p>
              </div>

              <div className="my-10 border-b-2 border-zinc-200" />

              {/* INSTRUTORES */}
              <div className="flex flex-col gap-8">
                <h2 className="text-xl font-bold">Instrutores</h2>
                <div className="flex flex-col gap-8 sm:flex-row sm:gap-20">
                  <CardInstructorCourse
                    src="https://res.cloudinary.com/drvploup8/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1729536547/perfil-ismael_xsivmz.jpg"
                    name="Ismael Armondes"
                    description="Médico Ortopedista e Traumatologista; Bombeiro Militar
                          - TO, atuante de 2006 a 2014."
                    href="/#instructors"
                  />
                  <CardInstructorCourse
                    src="https://res.cloudinary.com/drvploup8/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1729533193/JO%C3%83O-PAULO_zsdy48.jpg"
                    name="João Paulo de Sousa"
                    description="Sargento Bombeiro Militar - TO; Bombeiro Profissional
                          Civil; Bombeiro de Aeródromo; Bombeiro Voluntário;"
                    href="/#instructors"
                  />
                </div>
              </div>
            </div>
            {/* CARD INFORMAÇÕES */}
            <div className="flex flex-col gap-4">
              <CardSendEmail />
              <Card className="h-fit shadow-md">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    Informações
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <FaEnvelope className="mr-3 h-5 w-5" />
                      <span>jfbrigada@hotmail.com</span>
                    </li>
                    <li className="flex items-center">
                      <FaWhatsapp className="mr-3 h-5 w-5" />
                      <span>(63) 99959-5787</span>
                    </li>
                    <li className="flex items-center">
                      <FaMapPin className="mr-3 h-5 w-5" />
                      <span>Palmas, Tocantins</span>
                    </li>
                    <li className="flex items-center">
                      <FaClock className="mr-3 h-5 w-5" />
                      <span>08:00h - 18:00h</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
