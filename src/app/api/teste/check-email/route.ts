import { NextResponse } from "next/server";
import { findSubmissionByEmail } from "@/data/quiz-storage";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "E-mail inválido" },
        { status: 400 }
      );
    }

    const existing = findSubmissionByEmail(email);

    return NextResponse.json({
      alreadySubmitted: false,
      previousSubmission: existing || null,
    });
  } catch (error) {
    console.error("Erro ao verificar email:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}
