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

export default function BrigadaIncendio() {
  return (
    <div>
      <Header />
      <main className="mb-24 min-h-screen">
        <div className="relative bg-zinc-100 pb-20">
          <div className="container mx-auto max-w-[1200px] px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
            <div className="flex flex-col gap-8 md:flex-row md:gap-12">
              <Image
                src="/image-curso-brigadista.jpg"
                alt="imagem curso brigadista"
                width={500}
                height={500}
                quality={100}
                className="h-60 w-full rounded-xl object-cover shadow-xl md:w-60"
              />
              <div className="flex w-full flex-col gap-4 md:w-[500px]">
                <h1 className="text-2xl font-bold">
                  Curso: Treinamento de Brigada de Incêndio
                </h1>

                <div className="flex gap-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> 16h
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Users className="h-3 w-3" /> Iniciante
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> Presencial
                  </Badge>
                </div>

                <p className="text-sm text-zinc-500">
                  Aprenda técnicas avançadas de combate a incêndio e primeiros
                  socorros, tornando-se um profissional capacitado para atuar em
                  situações de risco e salvar vidas.
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
                <Button className="w-full bg-primary text-white hover:bg-secondary hover:text-primary md:w-auto">
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
                <p>
                  A brigada é treinada para identificar e mitigar riscos de
                  incêndio, como instalações elétricas inadequadas e
                  armazenamento incorreto de materiais inflamáveis.
                </p>

                <h3 className="font-bold">Resposta rápida e eficiente:</h3>
                <p>
                  Em caso de incêndio, uma brigada bem treinada pode agir
                  rapidamente para combater as chamas e evitar sua propagação,
                  utilizando extintores e outros equipamentos de combate a
                  incêndios.
                </p>

                <h3 className="font-bold">Evacuação segura:</h3>
                <p>
                  A brigada é responsável por organizar e conduzir a evacuação
                  segura de pessoas, garantindo que todos conheçam as rotas de
                  fuga e os procedimentos de segurança.
                </p>

                <h3 className="font-bold">Primeiros socorros:</h3>
                <p>
                  Além de combater incêndios, os membros da brigada são
                  treinados em primeiros socorros, podendo prestar assistência
                  imediata até a chegada dos serviços de emergência.
                </p>

                <h3 className="font-bold">Cumprimento legal:</h3>
                <p>
                  A brigada de incêndio é uma exigência legal para empresas e
                  condomínios, evitando multas e outras penalidades.
                </p>

                <h3 className="font-bold">Proteção de vidas e patrimônio:</h3>
                <p>
                  O treinamento adequado pode fazer a diferença entre salvar
                  vidas e sofrer perdas irreparáveis, além de minimizar danos
                  materiais. Investir no treinamento da brigada de incêndio é,
                  portanto, um investimento em segurança e bem-estar para todos
                  os ocupantes de um edifício ou estabelecimento.
                </p>
              </div>

              <div className="my-10 border-b-2 border-zinc-200" />

              {/* INSTRUTORES */}
              <div className="flex flex-col gap-8">
                <h2 className="text-xl font-bold">Instrutores</h2>
                <div className="flex flex-col gap-8 sm:flex-row">
                  <CardInstructorCourse
                    src="https://res.cloudinary.com/drvploup8/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1729533193/JO%C3%83O-PAULO_zsdy48.jpg"
                    name="João Paulo de Sousa"
                    description="Sargento Bombeiro Militar - TO; Bombeiro Profissional
                          Civil; Bombeiro de Aeródromo; Bombeiro Voluntário;"
                    href="/#instructors"
                  />
                  <CardInstructorCourse
                    src="https://res.cloudinary.com/drvploup8/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1729536300/Thalyta_Diniz_Trindade_d6jcxg.jpg"
                    name="Thalyta Diniz Trindade"
                    description="Técnica em Segurança do Trabalho; Bacharel em Direito;
                          Bombeiro Profissional Civil Bombeiro Aeródromo."
                    href="/#instructors"
                  />
                  <CardInstructorCourse
                    src="https://res.cloudinary.com/drvploup8/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1729536300/Erika_Silva_Pereira_Ara%C3%BAjo_amynyb.jpg"
                    name="Erika Silva Pereira Araújo"
                    description="Técnica em Segurança do Trabalho; Bombeiro
                          Profissional Civil."
                    href="/#instructor-line-2"
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
