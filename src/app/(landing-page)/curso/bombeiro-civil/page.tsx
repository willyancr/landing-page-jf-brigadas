import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Calendar, Clock, Star, Users } from "lucide-react";
import { FaClock, FaEnvelope, FaMapPin, FaWhatsapp } from "react-icons/fa6";
import CardSendEmail from "@/app/components/card-send-email";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Image from "next/image";

export default function BombeiroCivil() {
  return (
    <div>
      <Header />
      <main className="mb-24 min-h-screen">
        <div className="relative bg-zinc-100 pb-20">
          <div className="container mx-auto max-w-[1200px] px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
            <div className="flex flex-col gap-8 md:flex-row md:gap-12">
              <Image
                src="/image-curso-bombeiro-civil.jpg"
                alt="imagem curso bombeiro civil"
                width={500}
                height={500}
                quality={100}
                className="h-60 w-full rounded-xl object-cover shadow-xl md:w-60"
              />
              <div className="flex flex-col gap-4 md:w-[500px]">
                <h1 className="text-2xl font-bold">
                  Curso: Bombeiro Profissional Civil
                </h1>

                <div className="flex gap-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> 310h
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Users className="h-3 w-3" /> Iniciante
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> Presencial
                  </Badge>
                </div>

                <p className="text-sm text-zinc-500">
                  Capacite-se em combate a incêndio, salvamentos e primeiros
                  socorros, tornando-se um bombeiro profissional civil preparado
                  para agir em emergências e proteger vidas.
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
                  O curso de <strong>Bombeiro Profissional Civil</strong> é uma
                  formação essencial para quem deseja atuar na prevenção e
                  combate a incêndios, além de prestar primeiros socorros em
                  situações de emergência. Abaixo, estão alguns detalhes
                  importantes sobre o curso:
                </p>

                <h3 className="text-lg font-bold">Duração e Carga Horária</h3>
                <p>
                  O curso geralmente tem uma duração de cerca de 2 meses,
                  totalizando aproximadamente 310 horas de aulas.
                </p>

                <h3 className="text-lg font-bold">Conteúdo</h3>
                <p>
                  O curso é dividido em módulos que incluem tanto aulas teóricas
                  quanto práticas.
                </p>

                <h3 className="text-lg font-bold">
                  Grade Curricular do Curso de Bombeiro Profissional Civil
                </h3>

                <h4 className="text-lg font-bold">Módulo I</h4>
                <ul>
                  <li>Anatomia Humana – carga horária: 10 horas</li>
                  <li>
                    Atendimento Pré-Hospitalar Básico – carga horária: 70 horas
                  </li>
                </ul>

                <h4 className="text-lg font-bold">Módulo II</h4>
                <ul>
                  <li>
                    Atividade Operacional do Bombeiro Profissional Civil – carga
                    horária: 20 horas
                  </li>
                  <li>Produtos Perigosos – carga horária: 12 horas</li>
                  <li>
                    Fundamentos da Análise de Risco – carga horária: 8 horas
                  </li>
                </ul>

                <h4 className="text-lg font-bold">Módulo III</h4>
                <ul>
                  <li>
                    Salvamento Terrestre e Salvamento em Alturas – carga
                    horária: 50 horas
                  </li>
                  <li>EPI e EPR – carga horária: 20 horas</li>
                </ul>

                <h4 className="text-lg font-bold">Módulo IV</h4>
                <ul>
                  <li>Ordem Unida</li>
                  <li>Boas Maneiras</li>
                  <li>Legislação Específica do Bombeiro Profissional Civil</li>
                  <li>Atividade Física Direcionada</li>
                  <li>Estágio Supervisionado – total: 60 horas</li>
                </ul>

                <h4 className="text-lg font-bold">Módulo V</h4>
                <ul>
                  <li>
                    Equipamentos de Combate a Incêndio e Auxiliares – carga
                    horária: 30 horas
                  </li>
                  <li>
                    Prevenção e Combate a Incêndio / Técnicas de Combate a
                    Incêndio – carga horária: 30 horas
                  </li>
                </ul>

                <h3 className="text-lg font-bold">Avaliação</h3>
                <p>
                  Os alunos são avaliados separadamente em teoria e prática.
                  Para obter o certificado, é necessário um aproveitamento
                  mínimo de 70% em cada módulo.
                </p>

                <h3 className="text-lg font-bold">Reciclagem</h3>
                <p>
                  Após a conclusão do curso básico, é obrigatório realizar um
                  curso de reciclagem anualmente para manter a certificação
                  atualizada.
                </p>

                <h3 className="text-lg font-bold">Instituições</h3>
                <p>
                  O curso deve ser realizado em uma instituição de ensino
                  autorizada pelo Corpo de Bombeiros do estado.
                </p>

                <p className="underline">
                  Se você está pensando em seguir essa carreira, é uma excelente
                  escolha para quem deseja contribuir para a segurança e o
                  bem-estar da comunidade.
                </p>
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
