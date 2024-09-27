import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaClock, FaEnvelope, FaMapPin, FaWhatsapp } from "react-icons/fa6";

export default function Contact() {
  return (
    <div id="contact" className="container mx-auto max-w-[1200px] px-12 py-16">
      <div className="mb-16 flex items-center gap-2 border-l-2 border-secondary pl-2">
        <Image
          src="/icon-contato.png"
          alt="icon contato"
          width={36}
          height={36}
          quality={100}
        />
        <h1 className="flex items-center gap-2 text-4xl font-semibold">
          Contatos
        </h1>
        <div></div>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              Entre em Contato
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-600">
              Sinta-se à vontade para nos contatar a qualquer momento.
              Responderemos o mais breve possível!
            </p>
            <form className="space-y-4">
              <Input placeholder="Nome" />
              <Input type="email" placeholder="Email" />
              <Textarea placeholder="Mensagem" className="resize-none" />
              <Button type="submit" className="w-full bg-primary text-white">
                ENVIAR
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-primary text-white">
          <CardHeader>
            <CardTitle className="flex flex-col items-center text-2xl font-semibold mb-4">
              <Image
                src="/logo-2.png"
                alt="icon contato"
                width={100}
                height={100}
                quality={100}
                className="mb-4"
              />
              <h2 className="text-2xl font-semibold">Informações</h2>
              <p className="text-sm text-gray-300">
                Sua empresa já realizou treinamento de{" "}
                <span className="text-secondary">brigada de incêndio</span> esse
                ano?
              </p>
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
                <span>08:00 - 18:00</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
