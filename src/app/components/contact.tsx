"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaClock, FaEnvelope, FaMapPin, FaWhatsapp } from "react-icons/fa6";
import { useState, useEffect } from "react";

export default function Contact() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // ou um loader
  }

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
          Contato
        </h1>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="bg-image-card-info text-white">
          <CardHeader>
            <CardTitle className="mb-4 flex flex-col items-center text-2xl font-semibold">
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
                <FaEnvelope className="mr-3 h-5 w-5 text-secondary" />
                <span>jfbrigada@hotmail.com</span>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="mr-3 h-5 w-5 text-secondary" />
                <span>(63) 99959-5787</span>
              </li>
              <li className="flex items-center">
                <FaMapPin className="mr-3 h-5 w-5 text-secondary" />
                <span>Palmas, Tocantins</span>
              </li>
              <li className="flex items-center">
                <FaClock className="mr-3 h-5 w-5 text-secondary" />
                <span>08:00h - 18:00h</span>
              </li>
            </ul>
          </CardContent>
        </Card>
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
              <Input
                placeholder="Nome"
                className="outline-none focus:border-secondary"
              />
              <Input
                type="email"
                placeholder="Email"
                className="outline-none focus:border-secondary"
              />
              <Textarea
                placeholder="Mensagem"
                className="resize-none outline-none focus:border-secondary"
              />
              <Button
                type="submit"
                className="w-full bg-primary text-white hover:bg-secondary hover:text-primary"
              >
                Solicitar mais informações
                <FaEnvelope className="ml-3 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
