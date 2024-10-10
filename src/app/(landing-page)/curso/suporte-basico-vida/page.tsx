import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, Award, BookOpen, Calendar, Clock, Star, Users } from "lucide-react";
import { FaClock, FaEnvelope, FaMapPin, FaWhatsapp } from "react-icons/fa6";
import CardSendEmail from "@/app/components/card-send-email";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Image from "next/image";
import Link from "next/link";

export default function SuporteBasicoVida() {
  return (
    <div>
      <Header />
      <main className="mb-24 min-h-screen">
        <div className="relative bg-zinc-100 pb-20">
          <div className="container mx-auto max-w-[1200px] px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
            <div className="flex flex-col gap-8 md:flex-row md:gap-12">
              <Image
                src="/image-curso-sbv-2.jpg"
                alt="imagem curso sbv"
                width={500}
                height={500}
                quality={100}
                className="h-60 w-full rounded-xl object-cover shadow-xl md:w-60"
              />
              <div className="flex flex-col gap-4 md:w-[500px]">
                <h1 className="text-2xl font-bold">
                  Curso: Suporte Básico de Vida (SBV)
                </h1>

                <div className="flex gap-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> 08h
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Users className="h-3 w-3" /> Profissional da saúde
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> Presencial
                  </Badge>
                </div>

                <p className="text-sm text-zinc-500">
                  Aprimore suas habilidades no atendimento de Suporte Básico de
                  Vida com o curso de SBV e faça a diferença na área da saúde e
                  do socorro.
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
              <div className="space-y-2 text-sm text-zinc-500">
                <p>
                  O <strong>Curso de Suporte Básico de Vida (SBV)</strong> tem
                  como objetivo capacitar profissionais para realizar as
                  intervenções iniciais em situações de emergência que envolvem
                  risco de vida iminente, como paradas cardiorrespiratórias,
                  engasgos e afogamentos. O curso ensina como reconhecer uma
                  emergência, realizar manobras de ressuscitação e aplicar
                  técnicas de estabilização até que o socorro especializado
                  chegue.
                </p>

                <h3 className="text-xl font-bold">Objetivos</h3>
                <p>
                  O principal objetivo do curso de SBV é preparar os
                  participantes para intervir de maneira segura e eficaz em
                  emergências, garantindo o suporte vital até a chegada da
                  equipe médica. Entre os objetivos específicos estão:
                </p>
                <ul>
                  <li>
                    Reconhecer sinais e sintomas de parada cardiorrespiratória,
                    obstrução das vias aéreas e outras emergências.
                  </li>
                  <li>
                    Aplicar corretamente as manobras de ressuscitação
                    cardiopulmonar (RCP).
                  </li>
                  <li>
                    Realizar a desobstrução das vias aéreas em casos de engasgo.
                  </li>
                  <li>
                    Utilizar o desfibrilador externo automático (DEA) quando
                    indicado.
                  </li>
                  <li>
                    Manter a segurança da cena e seguir protocolos de
                    biossegurança.
                  </li>
                </ul>

                <h3 className="text-xl font-bold">Público-Alvo</h3>
                <p>
                  O curso de SBV é destinado a profissionais da área de saúde,
                  como médicos, enfermeiros e técnicos de enfermagem, além de
                  socorristas, bombeiros e outros profissionais de segurança
                  pública.
                </p>

                <h3 className="text-xl font-bold">Importância do Curso</h3>
                <p>
                  Ter conhecimento em Suporte Básico de Vida é fundamental para
                  qualquer pessoa que queira estar preparada para agir em
                  situações de emergência. As técnicas aprendidas podem fazer a
                  diferença entre a vida e a morte de uma vítima, enquanto o
                  socorro especializado não chega. Em um ambiente onde cada
                  segundo conta, a intervenção rápida e adequada pode salvar
                  vidas.
                </p>
              </div>
              <div className="my-10 border-b-2 border-zinc-200" />
              <div className="flex flex-col gap-8">
                <h2 className="text-xl font-bold">Instrutores</h2>
                <div className="flex flex-col gap-8 sm:flex-row sm:gap-20">
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src="/perfil-ismael.jpg"
                      alt="imagem instrutor"
                      width={100}
                      height={100}
                      quality={100}
                      className="h-28 w-28 rounded-full object-cover"
                    />
                    <div className="flex w-52 flex-col items-center text-center">
                      <h3 className="text-lg font-bold">Ismael Armondes</h3>
                      <p className="text-sm text-zinc-500">
                        Médico Ortopedista e Traumatologista; Bombeiro Militar -
                        TO, atuante de 2006 a 2014.
                      </p>
                      <Link
                        href="/#instructors"
                        className="mt-2 flex w-fit items-center rounded-md bg-zinc-200 px-2 py-1 text-sm font-semibold text-zinc-500"
                      >
                        +INFO
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src="/image-profile-bombeiro-1.jpeg"
                      alt="imagem instrutor"
                      width={100}
                      height={100}
                      quality={100}
                      className="h-28 w-28 rounded-full"
                    />
                    <div className="flex w-52 flex-col items-center text-center">
                      <h3 className="text-lg font-bold">João Paulo de Sousa</h3>
                      <p className="text-sm text-zinc-500">
                        Sargento Bombeiro Militar - TO; Bombeiro Profissional
                        Civil; Bombeiro de Aeródromo; Bombeiro Voluntário;
                      </p>
                      <Link
                        href="/#instructors"
                        className="mt-2 flex w-fit items-center rounded-md bg-zinc-200 px-2 py-1 text-sm font-semibold text-zinc-500"
                      >
                        +INFO
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
