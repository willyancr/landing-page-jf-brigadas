"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import confetti from "canvas-confetti";
import {
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  ArrowRight,
  Download,
  Home,
  AlertCircle,
  Award,
  Mail,
  User,
  Check,
  RotateCcw,
  Flame,
  HeartPulse,
  Activity,
  ShieldAlert,
} from "lucide-react";
import {
  AVAILABLE_QUIZZES,
  QuizId,
  QuizConfig,
  OptionKey,
  Question,
  getQuizById,
} from "@/data/quiz-questions";
import { QuizSubmission } from "@/data/quiz-storage";
import { generateQuizPDF } from "@/lib/generate-certificate-pdf";

type Step = "IDENTIFICATION" | "QUIZ" | "RESULT" | "ALREADY_COMPLETED";

function QuizContent() {
  // Estado do Usuário
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState("");
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);

  // Seleção de Questionário Ativo
  const [selectedQuizId, setSelectedQuizId] = useState<QuizId>(
    "primeiros-socorros"
  );

  // Fluxo de Etapas
  const [currentStep, setCurrentStep] = useState<Step>("IDENTIFICATION");

  // Estado do Questionário em Execução
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, OptionKey>>({});
  const [showHint, setShowHint] = useState(false);

  // Submissão e Resultados
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<QuizSubmission | null>(
    null
  );
  const [emailStatusMessage, setEmailStatusMessage] = useState<string | null>(
    null
  );

  // Questionário ativo
  const activeQuiz: QuizConfig = getQuizById(selectedQuizId);
  const totalQuestions = activeQuiz.questions.length;
  const minPassingScore = Math.ceil(totalQuestions * 0.7);

  // Ler query params e dados salvos na montagem
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        const quizParam = params.get("quiz");
        if (
          quizParam === "brigada-incendio" ||
          quizParam === "primeiros-socorros" ||
          quizParam === "sbv" ||
          quizParam === "trauma-aph"
        ) {
          setSelectedQuizId(quizParam as QuizId);
        }

        const savedEmail = localStorage.getItem("jf_test_user_email");
        if (savedEmail) {
          setEmail(savedEmail);
          const savedName = localStorage.getItem("jf_test_user_name");
          if (savedName) setName(savedName);
        }
      }
    } catch (e) {
      console.error("Erro ao inicializar parâmetros:", e);
    }
  }, []);

  // Efeito de Confetes caso aprovado
  useEffect(() => {
    if (
      currentStep === "RESULT" &&
      submissionResult &&
      submissionResult.status === "APROVADO"
    ) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#10b981", "#e41e26", "#e68600", "#ffffff"],
      });
    }
  }, [currentStep, submissionResult]);

  // Iniciar Questionário Selecionado
  const handleStartQuiz = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedName || trimmedName.length < 3) {
      setFormError("Por favor, digite seu nome completo.");
      return;
    }

    if (
      !trimmedEmail ||
      !trimmedEmail.includes("@") ||
      !trimmedEmail.includes(".")
    ) {
      setFormError("Por favor, digite um e-mail válido.");
      return;
    }

    setIsCheckingEmail(true);
    try {
      localStorage.setItem("jf_test_user_email", trimmedEmail);
      localStorage.setItem("jf_test_user_name", trimmedName);

      // Iniciar questionário
      setCurrentStep("QUIZ");
      setCurrentQuestionIndex(0);
      setAnswers({});
      setShowHint(false);
    } catch (err) {
      console.error("Erro ao iniciar quiz:", err);
      setCurrentStep("QUIZ");
    } finally {
      setIsCheckingEmail(false);
    }
  };

  // Questão Atual do Questionário Ativo
  const currentQuestion: Question = activeQuiz.questions[currentQuestionIndex];
  const selectedAnswer = answers[currentQuestion?.id];
  const hasAnsweredCurrent = selectedAnswer !== undefined;

  // Selecionar Opção (Imediato)
  const handleSelectOption = (key: OptionKey) => {
    if (hasAnsweredCurrent) return;

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: key,
    }));
  };

  // Próxima Pergunta ou Concluir
  const handleNext = async () => {
    if (!hasAnsweredCurrent) return;

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setShowHint(false);
    } else {
      await finishQuiz();
    }
  };

  // Enviar Respostas para API
  const finishQuiz = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/teste/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          quizId: activeQuiz.id,
          userAnswers: answers,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmissionResult(data.submission);
        localStorage.setItem(
          `jf_test_submission_${activeQuiz.id}_${email.trim().toLowerCase()}`,
          JSON.stringify(data.submission)
        );

        if (data.emailSent) {
          setEmailStatusMessage(
            "Resultados enviados com sucesso para a coordenação (jfbrigada@hotmail.com)!"
          );
        } else {
          setEmailStatusMessage(
            "Resultados registrados no sistema com sucesso."
          );
        }
        setCurrentStep("RESULT");
      } else {
        alert(data.error || "Ocorreu um erro ao salvar o teste. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar resultado:", error);
      alert(
        "Houve uma instabilidade na conexão. Seus dados estão salvos localmente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Baixar PDF
  const handleDownloadPDF = () => {
    if (submissionResult) {
      generateQuizPDF(submissionResult);
    }
  };

  // Refazer o Teste ou Escolher Outro Questionário
  const handleRetakeQuiz = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setShowHint(false);
    setSubmissionResult(null);
    setEmailStatusMessage(null);
    setFormError("");
    setCurrentStep("IDENTIFICATION");
  };

  return (
    <main className="min-h-screen bg-[#0d0f14] text-zinc-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* ========================================================
          CABEÇALHO PADRÃO DO MODELO DA IMAGEM
      ======================================================== */}
      <header className="w-full border-b border-zinc-800/80 bg-[#11131a]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Logo Oficial da Página Principal */}
          <Link
            href="/"
            className="flex items-center gap-2 group transition-opacity hover:opacity-90"
            title="Voltar para a página inicial"
          >
            <Image
              src="/logo-horizontal.png"
              alt="JF Brigadas"
              width={180}
              height={45}
              className="h-9 sm:h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Título Centralizado do Teste Ativo */}
          <div className="text-center">
            <h1 className="text-xs sm:text-sm md:text-base font-bold text-zinc-100 tracking-tight">
              {activeQuiz.title}
            </h1>
            <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">
              {activeQuiz.subtitle}
            </p>
          </div>

          {/* Botão Superior Direito */}
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-300 transition-colors border border-zinc-700/50"
            >
              Início
            </Link>
          </div>
        </div>

        {/* BARRA DE PROGRESSO SEGMENTADA */}
        {currentStep === "QUIZ" && (
          <div className="w-full max-w-5xl mx-auto px-4 pb-3">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 flex items-center gap-1 sm:gap-1.5">
                {activeQuiz.questions.map((q, idx) => {
                  const isCurrent = idx === currentQuestionIndex;
                  const isAnswered = answers[q.id] !== undefined;

                  let barColor = "bg-zinc-800";
                  if (isCurrent) {
                    barColor = "bg-zinc-200 ring-2 ring-zinc-400/30";
                  } else if (isAnswered) {
                    const wasCorrect = answers[q.id] === q.correctAnswer;
                    barColor = wasCorrect ? "bg-emerald-500/80" : "bg-red-500/80";
                  }

                  return (
                    <div
                      key={q.id}
                      className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${barColor}`}
                      title={`Pergunta ${idx + 1}`}
                    />
                  );
                })}
              </div>

              <div className="text-xs sm:text-sm font-semibold text-zinc-300 shrink-0">
                {currentQuestionIndex + 1} / {totalQuestions}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================
          CONTEÚDO PRINCIPAL
      ======================================================== */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* ====================================================
            1. TELA DE IDENTIFICAÇÃO E ESCOLHA DO QUESTIONÁRIO
        ==================================================== */}
        {currentStep === "IDENTIFICATION" && (
          <div className="w-full max-w-4xl bg-[#14161f] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/80">
            {/* Logo da Página Principal no Card */}
            <div className="flex justify-center mb-5">
              <Image
                src="/logo-horizontal.png"
                alt="JF Brigada's"
                width={220}
                height={55}
                className="h-12 sm:h-14 w-auto object-contain"
                priority
              />
            </div>

            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Portal de Avaliações Técnicas
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-lg mx-auto">
                Preencha seus dados cadastrais e escolha qual questionário você deseja realizar.
              </p>
            </div>

            {/* Formulário de Identificação */}
            <form onSubmit={handleStartQuiz} className="space-y-6">
              {formError && (
                <div className="p-3 bg-red-950/50 border border-red-800/70 rounded-xl text-red-300 text-xs sm:text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Dados do Aluno */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Nome Completo
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome completo"
                      className="w-full bg-[#1a1d28] border border-zinc-700/80 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Seu E-mail
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seuemail@exemplo.com"
                      className="w-full bg-[#1a1d28] border border-zinc-700/80 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* SELEÇÃO DO QUESTIONÁRIO (CARDS MODERNOS - 3 OPÇÕES) */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2.5">
                  Selecione a Avaliação Desejada:
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {AVAILABLE_QUIZZES.map((quiz) => {
                    const isSelected = selectedQuizId === quiz.id;

                    return (
                      <div
                        key={quiz.id}
                        onClick={() => setSelectedQuizId(quiz.id)}
                        className={`cursor-pointer rounded-2xl p-4 sm:p-5 border transition-all duration-200 flex flex-col justify-between relative text-left ${
                          isSelected
                            ? "bg-gradient-to-b from-[#251d23] to-[#1a1c26] border-red-500 ring-2 ring-red-500/30 shadow-lg shadow-red-950/40"
                            : "bg-[#181a24] border-zinc-800/90 hover:border-zinc-700 hover:bg-[#1e202d]"
                        }`}
                      >
                        {/* Tag no topo */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                              isSelected
                                ? "bg-red-500/20 text-red-300 border-red-500/40"
                                : "bg-zinc-800 text-zinc-400 border-zinc-700/60"
                            }`}
                          >
                            {quiz.badge}
                          </span>

                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                              isSelected
                                ? "border-red-500 bg-red-600"
                                : "border-zinc-600 bg-zinc-800"
                            }`}
                          >
                            {isSelected && (
                              <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            )}
                          </div>
                        </div>

                        {/* Ícone e Título */}
                        <div className="flex items-start gap-3 mb-2">
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
                              quiz.iconType === "first-aid"
                                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                                : quiz.iconType === "fire"
                                ? "bg-red-500/10 text-red-400 border-red-500/30"
                                : quiz.iconType === "heart-pulse"
                                ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                                : "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
                            }`}
                          >
                            {quiz.iconType === "first-aid" ? (
                              <HeartPulse className="w-5 h-5" />
                            ) : quiz.iconType === "fire" ? (
                              <Flame className="w-5 h-5" />
                            ) : quiz.iconType === "heart-pulse" ? (
                              <Activity className="w-5 h-5" />
                            ) : (
                              <ShieldAlert className="w-5 h-5" />
                            )}
                          </div>

                          <div>
                            <h3 className="text-sm font-bold text-white leading-snug">
                              {quiz.title}
                            </h3>
                            <span className="text-[11px] text-zinc-400 font-medium">
                              {quiz.questions.length} questões objetivas
                            </span>
                          </div>
                        </div>

                        {/* Descrição resumida */}
                        <p className="text-xs text-zinc-400 leading-relaxed mt-1 line-clamp-3">
                          {quiz.shortDescription}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Informações Complementares */}
              <div className="bg-[#1a1c26] border border-zinc-800 rounded-xl p-3.5 text-xs text-zinc-300 flex items-center gap-3">
                <Award className="w-5 h-5 text-amber-500 shrink-0" />
                <span>
                  Cada questão vale 1 ponto (total: {totalQuestions} pontos). Aprovação mínima:{" "}
                  <strong className="text-white">70% ({minPassingScore} acertos)</strong>. Envio
                  automático para <strong>jfbrigada@hotmail.com</strong> e emissão de comprovante em PDF.
                </span>
              </div>

              <button
                type="submit"
                disabled={isCheckingEmail}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold rounded-xl shadow-lg shadow-red-900/30 transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isCheckingEmail ? (
                  <span>Iniciando...</span>
                ) : (
                  <>
                    <span>Iniciar: {activeQuiz.title}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}

        {/* ====================================================
            2. TELA DO QUESTIONÁRIO (Layout Idêntico à Imagem)
        ==================================================== */}
        {currentStep === "QUIZ" && currentQuestion && (
          <div className="w-full max-w-3xl">
            {/* Header da Questão */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-zinc-400 text-sm font-semibold mb-1">
                <span>Pergunta {currentQuestion.id}</span>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">
                  {activeQuiz.badge}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug">
                {currentQuestion.question}
              </h2>
            </div>

            {/* Alternativas de Resposta (A, B, C, D) */}
            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedAnswer === option.key;
                const isCorrect = option.key === currentQuestion.correctAnswer;

                let cardClasses =
                  "bg-[#171922] hover:bg-[#1e202d] border border-zinc-800/80 text-zinc-200 cursor-pointer";
                let badgeLetterClasses = "text-zinc-400 font-bold";

                if (hasAnsweredCurrent) {
                  if (isSelected && isCorrect) {
                    cardClasses =
                      "bg-emerald-950/40 border-2 border-emerald-500 text-emerald-100 shadow-md shadow-emerald-950/50";
                    badgeLetterClasses = "text-emerald-400 font-bold";
                  } else if (isSelected && !isCorrect) {
                    cardClasses =
                      "bg-red-950/40 border-2 border-red-500 text-red-100 shadow-md shadow-red-950/50";
                    badgeLetterClasses = "text-red-400 font-bold";
                  } else if (!isSelected && isCorrect) {
                    cardClasses =
                      "bg-emerald-950/20 border-2 border-emerald-500/80 text-emerald-200";
                    badgeLetterClasses = "text-emerald-400 font-bold";
                  } else {
                    cardClasses =
                      "bg-[#14161f]/60 border border-zinc-800/40 text-zinc-500 opacity-60";
                  }
                }

                return (
                  <button
                    key={option.key}
                    type="button"
                    onClick={() => handleSelectOption(option.key)}
                    disabled={hasAnsweredCurrent}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 flex items-start gap-4 ${cardClasses}`}
                  >
                    <span className={`text-base sm:text-lg ${badgeLetterClasses}`}>
                      {option.key}.
                    </span>

                    <div className="flex-1 text-sm sm:text-base font-normal leading-relaxed pt-0.5">
                      {option.text}
                    </div>

                    {hasAnsweredCurrent && (
                      <div className="shrink-0 pt-0.5">
                        {isCorrect && (
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/40">
                            <CheckCircle2 className="w-4 h-4" />
                            <span className="hidden sm:inline">Correta</span>
                          </div>
                        )}
                        {isSelected && !isCorrect && (
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-red-400 bg-red-950/60 px-2.5 py-1 rounded-full border border-red-500/40">
                            <XCircle className="w-4 h-4" />
                            <span className="hidden sm:inline">Incorreta</span>
                          </div>
                        )}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* SEÇÃO DA DICA */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setShowHint(!showHint)}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-400 hover:text-zinc-200 transition-colors py-1 group"
              >
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>Dica</span>
                {showHint ? (
                  <ChevronUp className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                )}
              </button>

              {showHint && (
                <div className="mt-2.5 p-3.5 bg-[#191c28] border border-amber-500/30 rounded-xl text-zinc-300 text-xs sm:text-sm leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                  {currentQuestion.hint}
                </div>
              )}
            </div>

            {/* FEEDBACK INLINE E BOTÃO DE AVANÇAR */}
            {hasAnsweredCurrent && (
              <div className="mt-8 pt-5 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  {selectedAnswer === currentQuestion.correctAnswer ? (
                    <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold bg-emerald-950/40 px-3.5 py-2 rounded-xl border border-emerald-500/30">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Resposta Correta! (+1 ponto)</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-red-400 text-sm font-semibold bg-red-950/40 px-3.5 py-2 rounded-xl border border-red-500/30">
                      <XCircle className="w-4 h-4 shrink-0" />
                      <span>
                        Incorreto! A opção certa era a letra{" "}
                        <strong className="text-white">
                          {currentQuestion.correctAnswer}
                        </strong>
                        .
                      </span>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-red-950/50 flex items-center justify-center gap-2 transition-all group disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Registrando e enviando...</span>
                  ) : currentQuestionIndex < totalQuestions - 1 ? (
                    <>
                      <span>Próxima Pergunta</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  ) : (
                    <>
                      <span>Finalizar e Ver Resultado</span>
                      <Award className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        )}

        {/* ====================================================
            3. TELA DE RESULTADO FINAL (Aprovado / Reprovado)
        ==================================================== */}
        {currentStep === "RESULT" && submissionResult && (
          <div className="w-full max-w-2xl bg-[#14161f] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="text-center mb-6">
              {submissionResult.status === "APROVADO" ? (
                <>
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 mb-3 shadow-lg shadow-emerald-950/50">
                    <Award className="w-10 h-10 animate-bounce" />
                  </div>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-sm uppercase tracking-wider border border-emerald-500/40 mb-2">
                    APROVADO
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Parabéns, você foi aprovado!
                  </h2>
                  <p className="text-sm text-zinc-300 mt-2 max-w-md mx-auto">
                    Seu desempenho em{" "}
                    <strong className="text-white">
                      {submissionResult.quizTitle || activeQuiz.title}
                    </strong>{" "}
                    demonstra excelente preparo e conhecimento técnico.
                  </p>
                </>
              ) : (
                <>
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/20 border-2 border-red-500 text-red-400 mb-3 shadow-lg shadow-red-950/50">
                    <AlertCircle className="w-10 h-10" />
                  </div>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/20 text-red-300 font-extrabold text-sm uppercase tracking-wider border border-red-500/40 mb-2">
                    REPROVADO
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Continue estudando, você está quase lá!
                  </h2>
                  <p className="text-sm text-zinc-300 mt-2 max-w-md mx-auto">
                    Revise os pontos fundamentais de{" "}
                    <strong className="text-white">
                      {submissionResult.quizTitle || activeQuiz.title}
                    </strong>{" "}
                    e fortaleça seus conhecimentos para a próxima tentativa.
                  </p>
                </>
              )}
            </div>

            {/* Painel de Métricas */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#191c28] border border-zinc-800 rounded-xl p-4 text-center">
                <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-1">
                  Pontos Obtidos
                </span>
                <span className="text-2xl sm:text-3xl font-black text-white">
                  {submissionResult.score}{" "}
                  <span className="text-base font-normal text-zinc-400">
                    / {submissionResult.totalQuestions || totalQuestions}
                  </span>
                </span>
              </div>

              <div className="bg-[#191c28] border border-zinc-800 rounded-xl p-4 text-center">
                <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-1">
                  Porcentagem de Acerto
                </span>
                <span
                  className={`text-2xl sm:text-3xl font-black ${
                    submissionResult.status === "APROVADO"
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                >
                  {submissionResult.percentage}%
                </span>
              </div>
            </div>

            {/* Informações do Envio por E-mail */}
            <div className="bg-[#191c28] border border-zinc-800/80 rounded-xl p-4 mb-6 flex items-start gap-3">
              <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-zinc-300">
                <p className="font-semibold text-white">
                  {emailStatusMessage ||
                    "Resultados encaminhados com sucesso para jfbrigada@hotmail.com."}
                </p>
                <p className="text-zinc-400 mt-0.5">
                  Participante: <strong>{submissionResult.name}</strong> (
                  {submissionResult.email}) • Avaliação:{" "}
                  <strong>{submissionResult.quizTitle || activeQuiz.title}</strong>
                </p>
              </div>
            </div>

            {/* Ações (Download PDF + Refazer / Trocar Teste + Home) */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button
                type="button"
                onClick={handleDownloadPDF}
                className="flex-1 py-3.5 px-4 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold rounded-xl shadow-lg shadow-red-950/50 flex items-center justify-center gap-2 transition-all text-sm"
              >
                <Download className="w-4 h-4" />
                <span>Exportar Comprovante em PDF</span>
              </button>

              <button
                type="button"
                onClick={handleRetakeQuiz}
                className="py-3.5 px-5 bg-[#1b1e2a] hover:bg-[#252837] text-white font-bold rounded-xl border border-zinc-700/80 flex items-center justify-center gap-2 transition-all shadow-md text-sm group"
                title="Voltar para a tela inicial para refazer ou escolher outro questionário"
              >
                <RotateCcw className="w-4 h-4 text-amber-500 group-hover:-rotate-45 transition-transform" />
                <span>Refazer / Trocar Teste</span>
              </button>

              <Link
                href="/"
                className="py-3.5 px-5 bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-200 font-semibold rounded-xl border border-zinc-700/60 flex items-center justify-center gap-2 transition-colors text-center text-sm"
              >
                <Home className="w-4 h-4" />
                <span>Página Inicial</span>
              </Link>
            </div>

            {/* Revisão do Gabarito Completo */}
            <div className="mt-8 border-t border-zinc-800/80 pt-6">
              <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span>
                  Revisão do Gabarito ({submissionResult.score}/
                  {submissionResult.totalQuestions || totalQuestions} Acertos)
                </span>
              </h3>

              <div className="space-y-3 max-h-72 overflow-y-auto pr-2 custom-scrollbar">
                {activeQuiz.questions.map((q) => {
                  const ans = submissionResult.answers.find(
                    (a) => a.questionId === q.id
                  );
                  const isCorrect = ans?.isCorrect;

                  return (
                    <div
                      key={q.id}
                      className={`p-3 rounded-xl border text-xs sm:text-sm ${
                        isCorrect
                          ? "bg-emerald-950/20 border-emerald-900/60 text-zinc-300"
                          : "bg-red-950/20 border-red-900/60 text-zinc-300"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-semibold text-white">
                          Pergunta {q.id}: {q.question}
                        </span>
                        {isCorrect ? (
                          <span className="shrink-0 text-emerald-400 font-bold text-xs flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" /> Correto
                          </span>
                        ) : (
                          <span className="shrink-0 text-red-400 font-bold text-xs flex items-center gap-1">
                            <XCircle className="w-3.5 h-3.5" /> Errado
                          </span>
                        )}
                      </div>
                      <div className="mt-1 text-xs text-zinc-400">
                        Sua resposta: <strong>Opção {ans?.selectedKey}</strong>
                        {!isCorrect && (
                          <span className="text-emerald-400 ml-2">
                            • Correta: <strong>Opção {q.correctAnswer}</strong>
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default function TestePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0d0f14] text-white flex items-center justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-500" />
        </div>
      }
    >
      <QuizContent />
    </Suspense>
  );
}
