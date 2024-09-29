import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function Faqs() {
  return (
    <div id="faqs" className="bg-image-faq bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto max-w-[1200px] px-12 py-16">
        <div className="mb-16 flex items-center gap-2 border-l-2 border-secondary pl-2">
          <Image
            src="/icon-faq.png"
            alt="icon faq"
            width={36}
            height={36}
            quality={100}
          />
          <h1 className="flex items-center gap-2 text-4xl font-semibold">
            FAQs
          </h1>
        </div>
        <div className="flex flex-col gap-12">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-secondary">
              Curso de Brigadista
            </h1>
            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-base md:text-lg lg:text-xl">
                    Quem pode fazer o curso de brigadista?
                  </AccordionTrigger>
                  <AccordionContent>
                    Qualquer pessoa acima de 18 anos interessada em aprender
                    técnicas de prevenção e combate a incêndios pode se
                    inscrever no curso de brigadista.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-base md:text-lg lg:text-xl">
                    Qual é a duração do curso de brigadista?
                  </AccordionTrigger>
                  <AccordionContent>
                    O curso tem duração média de 16 a 20 horas, distribuídas
                    entre aulas teóricas e práticas.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-base md:text-lg lg:text-xl">
                    O curso oferece certificação?
                  </AccordionTrigger>
                  <AccordionContent>
                    Sim, ao concluir o curso, você receberá um certificado
                    reconhecido, validando sua capacitação como brigadista.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-base md:text-lg lg:text-xl">
                    É necessário ter experiência prévia para fazer o curso?
                  </AccordionTrigger>
                  <AccordionContent>
                    Não, o curso é voltado tanto para iniciantes quanto para
                    quem já tem algum conhecimento na área de segurança e
                    combate a incêndios.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-base md:text-lg lg:text-xl">
                    Onde posso atuar após me formar brigadista?
                  </AccordionTrigger>
                  <AccordionContent>
                    Você pode atuar em empresas, indústrias, eventos e edifícios
                    comerciais que exigem a presença de brigadas de incêndio.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-secondary">
              Curso de Bombeiro Civil
            </h1>
            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-base md:text-lg lg:text-xl">
                    Qual a diferença entre brigadista e bombeiro civil?
                  </AccordionTrigger>
                  <AccordionContent>
                    O brigadista atua em empresas e ambientes privados em
                    prevenção e combate a pequenos focos de incêndio. Já o
                    bombeiro civil tem uma formação mais extensa e pode atuar em
                    situações mais complexas de emergência, como resgates e
                    grandes incêndios.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-base md:text-lg lg:text-xl">
                    O curso de bombeiro civil é reconhecido por algum órgão?
                  </AccordionTrigger>
                  <AccordionContent>
                    Sim, o curso segue as normas da ABNT e os regulamentos de
                    órgãos competentes de segurança e incêndio.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-base md:text-lg lg:text-xl">
                    Qual a carga horária do curso de bombeiro civil?
                  </AccordionTrigger>
                  <AccordionContent>
                    A carga horária média do curso de bombeiro civil varia entre
                    200 e 300 horas, com uma combinação de aulas teóricas e
                    práticas.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-base md:text-lg lg:text-xl">
                    Quais habilidades vou adquirir no curso?
                  </AccordionTrigger>
                  <AccordionContent>
                    Você aprenderá técnicas de combate a incêndios, salvamento
                    em altura e em espaços confinados, primeiros socorros e
                    evacuação de emergência.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-base md:text-lg lg:text-xl">
                    Existe um exame para obter a certificação?
                  </AccordionTrigger>
                  <AccordionContent>
                    Sim, após o término do curso, você passará por avaliações
                    teóricas e práticas para obter a certificação de bombeiro
                    civil.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-secondary">
              Curso de APH-B Prático
            </h1>
            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-base md:text-lg lg:text-xl">
                    O que é o curso de APH-B Prático?
                  </AccordionTrigger>
                  <AccordionContent>
                    O curso de APH-B Prático ensina técnicas de atendimento
                    pré-hospitalar básico para prestar os primeiros socorros em
                    situações de emergência.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-base md:text-lg lg:text-xl">
                    Quem pode se inscrever no curso de APH-B?
                  </AccordionTrigger>
                  <AccordionContent>
                    Qualquer pessoa que tenha interesse em aprender a salvar
                    vidas em situações de emergência, como acidentes e mal
                    súbitos.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-base md:text-lg lg:text-xl">
                    O curso inclui práticas reais?
                  </AccordionTrigger>
                  <AccordionContent>
                    Sim, o curso é focado em simulações práticas de emergências,
                    permitindo que os alunos apliquem os conhecimentos em
                    cenários realistas.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-base md:text-lg lg:text-xl">
                    Qual é a duração do curso?
                  </AccordionTrigger>
                  <AccordionContent>
                    A duração do curso varia de 20 a 40 horas, dependendo da
                    instituição e da carga horária das aulas práticas.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-base md:text-lg lg:text-xl">
                    O curso de APH-B Prático é certificado?
                  </AccordionTrigger>
                  <AccordionContent>
                    Sim, ao final do curso, os alunos recebem um certificado de
                    conclusão que atesta a capacidade de prestar primeiros
                    socorros.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
