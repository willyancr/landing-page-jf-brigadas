"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RotatingPhrases() {
  const phrases = [
    {
      title: "Prepare-se para emergências e torne-se um brigadista certificado",
      description:
        "Aprenda técnicas avançadas de combate a incêndio e primeiros socorros, tornando-se um profissional capacitado para atuar em situações de risco e salvar vidas.",
    },
    {
      title: "Capacite-se para combater incêndios e proteger vidas",
      description:
        "Desenvolva habilidades essenciais para identificar perigos, responder rapidamente e garantir a segurança de todos ao seu redor em emergências.",
    },
    {
      title: "Treinamento profissional em brigada de incêndio com certificação",
      description:
        "Participe de um curso completo com certificação reconhecida e esteja pronto para atuar como brigadista, com conhecimento técnico e prático em prevenção de incêndios.",
    },
  ];
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    // Configura um intervalo para alternar entre as frases a cada 3 segundos
    const interval = setInterval(() => {
      // Atualiza a frase atual, avançando para a próxima e voltando ao início quando chegar ao fim
      setCurrentPhrase((prevPhrase) => (prevPhrase + 1) % phrases.length);
    }, 8000);

    // Função de limpeza para remover o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <div className="w-[700px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPhrase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <p className="text-5xl font-bold text-zinc-50">
            {phrases[currentPhrase].title}
          </p>
          <p className="text-xl text-zinc-200">
            {phrases[currentPhrase].description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
