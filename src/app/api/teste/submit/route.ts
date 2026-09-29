import { NextResponse } from "next/server";
import nodemailer, { Transporter } from "nodemailer";
import { getQuizById, PASSING_PERCENTAGE, TOTAL_QUESTIONS } from "@/data/quiz-questions";
import { saveSubmission, QuizSubmission, SubmissionAnswer } from "@/data/quiz-storage";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, userAnswers, quizId } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Nome completo é obrigatório." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "E-mail válido é obrigatório." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();
    const quiz = getQuizById(quizId || "primeiros-socorros");

    // Validar e calcular pontuação oficial no backend
    let score = 0;
    const answers: SubmissionAnswer[] = [];

    quiz.questions.forEach((q) => {
      const selected = userAnswers?.[q.id];
      const isCorrect = selected === q.correctAnswer;
      if (isCorrect) score += 1;

      answers.push({
        questionId: q.id,
        selectedKey: selected || "N/A",
        correctKey: q.correctAnswer,
        isCorrect,
      });
    });

    const percentage = Number(((score / TOTAL_QUESTIONS) * 100).toFixed(1));
    const status: "APROVADO" | "REPROVADO" =
      percentage >= PASSING_PERCENTAGE ? "APROVADO" : "REPROVADO";

    const submission: QuizSubmission = {
      id: `SUB-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
      quizId: quiz.id,
      quizTitle: quiz.title,
      name: name.trim(),
      email: normalizedEmail,
      score,
      totalQuestions: TOTAL_QUESTIONS,
      percentage,
      status,
      submittedAt: new Date().toISOString(),
      answers,
    };

    // Salvar no armazenamento do servidor (permite atualizar ou registrar retakes)
    saveSubmission(submission);

    // Configurar envio de e-mail via Nodemailer
    const gmailUser = process.env.GMAIL_USER || "willyancr@gmail.com";
    const gmailPass = process.env.GMAIL_PASS || process.env.GMAIL_PASSWORD;

    let emailSent = false;
    let emailError: string | null = null;

    if (gmailUser && gmailPass) {
      try {
        const transporter: Transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: gmailUser,
            pass: gmailPass,
          },
        });

        const statusColor = status === "APROVADO" ? "#10b981" : "#ef4444";
        const statusBadgeBg = status === "APROVADO" ? "#d1fae5" : "#fee2e2";
        const statusBadgeText = status === "APROVADO" ? "#065f46" : "#991b1b";

        const answersHtml = quiz.questions.map((q) => {
          const ans = answers.find((a) => a.questionId === q.id);
          const icon = ans?.isCorrect ? "✅ CORRETO" : "❌ INCORRETO";
          const bgColor = ans?.isCorrect ? "#f0fdf4" : "#fef2f2";
          const borderColor = ans?.isCorrect ? "#bbf7d0" : "#fecaca";

          return `
            <div style="background-color: ${bgColor}; border: 1px solid ${borderColor}; border-radius: 8px; padding: 12px; margin-bottom: 10px; font-family: sans-serif;">
              <div style="font-weight: bold; color: #1e293b; font-size: 14px; margin-bottom: 4px;">
                Pergunta ${q.id}: ${q.question}
              </div>
              <div style="font-size: 13px; color: #475569;">
                Resposta do aluno: <strong>Opção ${ans?.selectedKey}</strong> - <span style="font-weight: bold;">${icon}</span>
              </div>
              ${
                !ans?.isCorrect
                  ? `<div style="font-size: 12px; color: #047857; margin-top: 4px;">
                      Resposta correta esperada: <strong>Opção ${q.correctAnswer}</strong>
                     </div>`
                  : ""
              }
            </div>
          `;
        }).join("");

        const mailHtml = `
          <div style="background-color: #0f172a; padding: 30px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <div style="max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.2);">
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #25180f 0%, #e41e26 100%); padding: 30px 20px; text-align: center; color: #ffffff;">
                <h1 style="margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 1px;">JF BRIGADA'S</h1>
                <p style="margin: 6px 0 0; font-size: 14px; color: #fecaca;">${quiz.title}</p>
              </div>

              <!-- Body -->
              <div style="padding: 24px 28px;">
                <h2 style="color: #0f172a; font-size: 18px; margin-top: 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">
                  Dados do Participante
                </h2>
                
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px;"><strong>Nome:</strong></td>
                    <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${submission.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px;"><strong>E-mail:</strong></td>
                    <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${submission.email}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px;"><strong>Avaliação:</strong></td>
                    <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${quiz.title}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-size: 14px;"><strong>Data e Hora:</strong></td>
                    <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</td>
                  </tr>
                </table>

                <!-- Resultado Card -->
                <div style="background-color: #f8fafc; border: 2px solid ${statusColor}; border-radius: 10px; padding: 20px; text-align: center; margin-bottom: 25px;">
                  <span style="display: inline-block; background-color: ${statusBadgeBg}; color: ${statusBadgeText}; font-weight: bold; font-size: 16px; padding: 6px 18px; border-radius: 9999px; text-transform: uppercase; margin-bottom: 12px;">
                    ${status}
                  </span>
                  <div style="font-size: 32px; font-weight: 800; color: #0f172a; margin-top: 8px;">
                    ${score} / ${TOTAL_QUESTIONS} <span style="font-size: 20px; font-weight: 500; color: #64748b;">pontos</span>
                  </div>
                  <div style="font-size: 18px; font-weight: 700; color: ${statusColor}; margin-top: 4px;">
                    Aproveitamento: ${percentage}%
                  </div>
                  <div style="font-size: 12px; color: #94a3b8; margin-top: 6px;">
                    Nota mínima exigida para aprovação: ${PASSING_PERCENTAGE}% (11 acertos)
                  </div>
                </div>

                <!-- Detalhamento -->
                <h3 style="color: #0f172a; font-size: 16px; margin-bottom: 14px;">
                  Detalhamento das Questões:
                </h3>
                <div>
                  ${answersHtml}
                </div>

                <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
                  Envio automático gerado pela plataforma de testes JF Brigada's.
                </div>
              </div>
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"JF Brigadas - Avaliações" <${gmailUser}>`,
          to: "jfbrigada@hotmail.com",
          replyTo: submission.email,
          subject: `[Avaliação JF Brigadas - ${quiz.badge}] ${status} - ${submission.name} (${score}/${TOTAL_QUESTIONS} - ${percentage}%)`,
          text: `Resultado da Avaliação: ${quiz.title}
Nome: ${submission.name}
Email: ${submission.email}
Avaliação: ${quiz.title}
Pontuação: ${score}/${TOTAL_QUESTIONS} (${percentage}%)
Status: ${status}
Data: ${new Date().toLocaleString("pt-BR")}`,
          html: mailHtml,
        });

        emailSent = true;
      } catch (err: unknown) {
        const error = err as Error;
        console.error("Falha ao enviar e-mail via Nodemailer:", error);
        emailError = error?.message || "Erro desconhecido ao enviar email";
      }
    } else {
      console.warn("Credenciais de email GMAIL_USER ou GMAIL_PASS não configuradas.");
      emailError = "Credenciais de e-mail não configuradas no servidor.";
    }

    return NextResponse.json({
      success: true,
      submission,
      emailSent,
      emailError,
    });
  } catch (error) {
    console.error("Erro no processamento da submissão:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor ao processar o questionário." },
      { status: 500 }
    );
  }
}
