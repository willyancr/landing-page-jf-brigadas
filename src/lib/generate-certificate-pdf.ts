import { jsPDF } from "jspdf";
import { QuizSubmission } from "@/data/quiz-storage";

export function generateQuizPDF(submission: QuizSubmission) {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Fundo sutil / Moldura
  doc.setFillColor(249, 250, 251);
  doc.rect(0, 0, pageWidth, pageHeight, "F");

  // Borda decorativa dupla
  doc.setDrawColor(228, 30, 38); // Vermelho JF Brigada's
  doc.setLineWidth(1.5);
  doc.rect(10, 10, pageWidth - 20, pageHeight - 20);

  doc.setDrawColor(37, 24, 15); // Primária escura
  doc.setLineWidth(0.4);
  doc.rect(12, 12, pageWidth - 24, pageHeight - 24);

  // Faixa do Cabeçalho
  doc.setFillColor(37, 24, 15);
  doc.rect(12, 12, pageWidth - 24, 38, "F");

  // Linha de detalhe vermelho
  doc.setFillColor(228, 30, 38);
  doc.rect(12, 50, pageWidth - 24, 2.5, "F");

  // Título Cabeçalho
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("JF BRIGADA'S", pageWidth / 2, 26, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(254, 202, 202);
  doc.text(
    "TREINAMENTOS, CAPACITAÇÃO E BRIGADA DE INCÊNDIO",
    pageWidth / 2,
    33,
    { align: "center" }
  );

  doc.setFontSize(9);
  doc.setTextColor(203, 213, 225);
  doc.text("CNPJ & Registro de Capacitação Profissional", pageWidth / 2, 40, {
    align: "center",
  });

  // Título do Documento
  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.setTextColor(37, 24, 15);
  doc.text(
    "COMPROVANTE DE AVALIAÇÃO DE CONHECIMENTOS",
    pageWidth / 2,
    64,
    { align: "center" }
  );

  doc.setFont("helvetica", "italic");
  doc.setFontSize(11);
  doc.setTextColor(100, 116, 139);
  doc.text(
    submission.quizTitle || "Avaliação Técnica - JF Brigada's",
    pageWidth / 2,
    71,
    { align: "center" }
  );

  // Bloco de Identificação do Aluno
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.5);
  doc.roundedRect(18, 80, pageWidth - 36, 36, 3, 3, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(100, 116, 139);
  doc.text("NOME DO PARTICIPANTE:", 24, 89);
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  doc.text(submission.name.toUpperCase(), 24, 96);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.text("E-MAIL CADASTRADO:", 24, 105);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(30, 41, 59);
  doc.text(submission.email, 65, 105);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.text("DATA DE CONCLUSÃO:", pageWidth - 80, 105);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);
  const formattedDate = new Date(submission.submittedAt).toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });
  doc.text(formattedDate, pageWidth - 42, 105);

  // Bloco de Desempenho / Resultado
  const isApproved = submission.status === "APROVADO";
  const statusColor = isApproved ? [16, 185, 129] : [239, 68, 68];
  const cardBg = isApproved ? [240, 253, 244] : [254, 242, 242];

  doc.setFillColor(cardBg[0], cardBg[1], cardBg[2]);
  doc.setDrawColor(statusColor[0], statusColor[1], statusColor[2]);
  doc.setLineWidth(1.2);
  doc.roundedRect(18, 124, pageWidth - 36, 48, 4, 4, "FD");

  // Badge Status
  doc.setFillColor(statusColor[0], statusColor[1], statusColor[2]);
  doc.roundedRect(pageWidth / 2 - 32, 131, 64, 11, 2, 2, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(255, 255, 255);
  doc.text(
    `STATUS: ${submission.status}`,
    pageWidth / 2,
    138.5,
    { align: "center" }
  );

  // Métricas
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(15, 23, 42);
  doc.text(
    `${submission.score} de ${submission.totalQuestions} acertos`,
    pageWidth / 2,
    152,
    { align: "center" }
  );

  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(statusColor[0], statusColor[1], statusColor[2]);
  doc.text(
    `Aproveitamento Final: ${submission.percentage}%`,
    pageWidth / 2,
    159,
    { align: "center" }
  );

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text(
    "Critério de aprovação: Pontuação igual ou superior a 70% (mínimo de 11 acertos).",
    pageWidth / 2,
    166,
    { align: "center" }
  );

  // Resumo das respostas (Tabela compacta 2 colunas)
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(37, 24, 15);
  doc.text("Gabarito Resumido do Candidato:", 18, 182);

  const startY = 187;
  const colWidth = (pageWidth - 40) / 2;

  submission.answers.forEach((ans, idx) => {
    const col = idx < 8 ? 0 : 1;
    const row = idx < 8 ? idx : idx - 8;
    const x = 18 + col * colWidth;
    const y = startY + row * 6.5;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    doc.text(`Q${ans.questionId.toString().padStart(2, "0")}: Escolhida: ${ans.selectedKey} | Gabarito: ${ans.correctKey}`, x + 2, y);

    if (ans.isCorrect) {
      doc.setTextColor(16, 185, 129);
      doc.setFont("helvetica", "bold");
      doc.text("ACERTO", x + colWidth - 20, y);
    } else {
      doc.setTextColor(239, 68, 68);
      doc.setFont("helvetica", "bold");
      doc.text("ERRO", x + colWidth - 20, y);
    }
  });

  // Autenticação e Linha de Rodapé
  const authY = 248;
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.4);
  doc.line(18, authY, pageWidth - 18, authY);

  // Assinaturas
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105);

  doc.line(30, authY + 20, 95, authY + 20);
  doc.text("JF Brigada's - Treinamentos", 62.5, authY + 24, { align: "center" });
  doc.setFontSize(7);
  doc.text("Coordenação Técnica Operacional", 62.5, authY + 27.5, { align: "center" });

  doc.setFontSize(8);
  doc.line(pageWidth - 95, authY + 20, pageWidth - 30, authY + 20);
  doc.text(submission.name, pageWidth - 62.5, authY + 24, { align: "center" });
  doc.setFontSize(7);
  doc.text("Participante Avaliado", pageWidth - 62.5, authY + 27.5, { align: "center" });

  // Código de Validação
  doc.setFont("helvetica", "italic");
  doc.setFontSize(7.5);
  doc.setTextColor(148, 163, 184);
  doc.text(
    `Código de Autenticação: ${submission.id} • Registrado eletronicamente para fins de controle e histórico.`,
    pageWidth / 2,
    pageHeight - 16,
    { align: "center" }
  );

  // Salvar / Baixar
  const cleanName = submission.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
  doc.save(`Resultado_JF_Brigadas_${cleanName}.pdf`);
}
