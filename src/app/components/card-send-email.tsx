'use client';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { FaSpinner, FaEnvelope } from "react-icons/fa6";
import toast from "react-hot-toast";

export default function CardSendEmail() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return toast.error("Preencha todos os campos");
    }
    setIsLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        return toast.success("Email enviado com sucesso!");
      } else {
        return toast.error("Erro ao enviar o email");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Card className="h-fit shadow-md">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Entre em Contato</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            Sinta-se à vontade para nos contatar a qualquer momento.
            Responderemos o mais breve possível!
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Nome"
              className="outline-none focus:border-secondary"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <Input
              type="email"
              placeholder="Email"
              className="outline-none focus:border-secondary"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <Textarea
              placeholder="Mensagem"
              className="resize-none outline-none focus:border-secondary"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            {isLoading ? (
              <Button
                className="flex w-full items-center gap-2 bg-primary text-zinc-50"
                type="submit"
                disabled
              >
                <FaSpinner className="animate-spin" />
                Enviando
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full bg-primary text-zinc-50 hover:bg-secondary hover:text-zinc-50"
              >
                Solicitar mais informações
                <FaEnvelope className="ml-3 h-4 w-4" />
              </Button>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
