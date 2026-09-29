import fs from "fs";
import path from "path";

export interface SubmissionAnswer {
  questionId: number;
  selectedKey: "A" | "B" | "C";
  correctKey: "A" | "B" | "C";
  isCorrect: boolean;
}

export interface QuizSubmission {
  id: string;
  quizId?: string;
  quizTitle?: string;
  name: string;
  email: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  status: "APROVADO" | "REPROVADO";
  submittedAt: string;
  answers: SubmissionAnswer[];
}

const dataFilePath = path.join(process.cwd(), "src", "data", "quiz-submissions.json");

export function getSubmissions(): QuizSubmission[] {
  try {
    if (!fs.existsSync(dataFilePath)) {
      fs.writeFileSync(dataFilePath, JSON.stringify([], null, 2), "utf-8");
      return [];
    }
    const content = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(content) as QuizSubmission[];
  } catch (err) {
    console.error("Erro ao ler quiz-submissions.json:", err);
    return [];
  }
}

export function findSubmissionByEmail(email: string): QuizSubmission | undefined {
  const submissions = getSubmissions();
  const normalized = email.trim().toLowerCase();
  return submissions.find((sub) => sub.email.trim().toLowerCase() === normalized);
}

export function saveSubmission(submission: QuizSubmission): boolean {
  try {
    const submissions = getSubmissions();
    const normalized = submission.email.trim().toLowerCase();

    const existingIndex = submissions.findIndex(
      (sub) => sub.email.trim().toLowerCase() === normalized
    );

    if (existingIndex >= 0) {
      submissions[existingIndex] = submission;
    } else {
      submissions.push(submission);
    }

    fs.writeFileSync(dataFilePath, JSON.stringify(submissions, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Erro ao salvar quiz-submissions.json:", err);
    return false;
  }
}
