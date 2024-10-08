import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Calendar, Clock, Star, Users } from "lucide-react";
import { FaClock, FaEnvelope, FaMapPin, FaWhatsapp } from "react-icons/fa6";
import CardSendEmail from "@/app/components/card-send-email";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Image from "next/image";

export default function APHB() {
  return (
    <div>
      <Header />
      <main className="mb-24 min-h-screen">
        <div className="relative bg-zinc-100 pb-20">
          <div className="container mx-auto max-w-[1200px] px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
            <div className="flex flex-col gap-8 md:flex-row md:gap-12">
              <Image
                src="/image-curso-aph.jpg"
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
                    <Clock className="h-3 w-3" /> 30h
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Users className="h-3 w-3" /> Profissional
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> Presencial
                  </Badge>
                </div>

                <p className="text-sm text-zinc-500">
                  Capacite-se em primeiros socorros, aprendendo técnicas de APH
                  para atuar com eficiência em situações de emergência e salvar
                  vidas.
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
                <h2 className="text-xl font-bold">Cursos de Capacitação</h2>
                <p>
                  O objetivo da capacitação em APH-B prático é preparar
                  profissionais da área da saúde que desejam atuar como
                  socorristas, bombeiros profissionais civis e militares,
                  condutores de veículos de emergência, comissários de voo,
                  técnicos em segurança do trabalho, bombeiros voluntários,
                  brigadistas, socorristas de resgate rodoviário, enfermeiros e
                  técnicos, entre outros.
                </p>

                <p>
                  O curso é totalmente prático, com foco no manejo de pacientes
                  traumáticos, contenção de pacientes psiquiátricos não
                  colaborativos, suporte básico de vida (SBV), controle de
                  hemorragias, entre outros aspectos fundamentais.
                </p>

                <h3 className="text-xl font-bold">Pré-Requisitos</h3>
                <p>
                  Ser profissional de nível técnico ou superior, socorrista,
                  bombeiro militar, agente de segurança pública ou bombeiro
                  profissional civil.
                </p>

                <h3 className="text-xl font-bold">Conteúdo Programático</h3>
                <p>O conteúdo programático inclui:</p>
                <ul className="list-none pl-0">
                  <li>- Conceito de Trauma</li>
                  <li>- Epidemiologia do Trauma</li>
                  <li>- Segurança e Biossegurança do Socorrista</li>
                  <li>- Avaliação da Cena / Cinemática do Trauma</li>
                  <li>
                    - Atualizações sobre RMC, Manipulação e Transporte, Choque,
                    entre outros tópicos.
                  </li>
                </ul>
              </div>
              <div className="my-10 border-b-2 border-zinc-200" />
              <div className="flex flex-col gap-8">
                <h2 className="text-xl font-bold">Instrutores</h2>
                <div className="flex flex-col justify-between gap-8 sm:flex-row sm:gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src="/image-profile-bombeiro-1.jpeg"
                      alt="imagem instrutor"
                      width={100}
                      height={100}
                      quality={100}
                      className="h-30 w-30 rounded-full"
                    />
                    <div className="flex flex-col items-center">
                      <h3 className="text-lg font-bold">Nome do instrutor</h3>
                      <p className="text-sm text-zinc-500">
                        Descrição do instrutor
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src="/image-profile-bombeiro-1.jpeg"
                      alt="imagem instrutor"
                      width={100}
                      height={100}
                      quality={100}
                      className="h-30 w-30 rounded-full"
                    />
                    <div className="flex flex-col items-center">
                      <h3 className="text-lg font-bold">Nome do instrutor</h3>
                      <p className="text-sm text-zinc-500">
                        Descrição do instrutor
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src="/image-profile-bombeiro-1.jpeg"
                      alt="imagem instrutor"
                      width={100}
                      height={100}
                      quality={100}
                      className="h-30 w-30 rounded-full"
                    />
                    <div className="flex flex-col items-center">
                      <h3 className="text-lg font-bold">Nome do instrutor</h3>
                      <p className="text-sm text-zinc-500">
                        Descrição do instrutor
                      </p>
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
