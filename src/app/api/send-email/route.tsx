import { NextResponse } from "next/server";
import nodemailer, { Transporter } from "nodemailer";

type Email = {
  name: string;
  email: string;
  message: string;
};

const transporter: Transporter = nodemailer.createTransport({
  host: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  const body: Email = await request.json();
  const { email, name, message } = body;

  if (!email || !name || !message) {
    return NextResponse.json(
      { error: "Preencha todos os campos" },
      { status: 400 },
    );
  }

  const mailOptions: nodemailer.SendMailOptions = {
    from: "willyancr@gmail.com",
    to: "willyancr@gmail.com",
    subject: `Novo contato de ${name}`,
    text: message,
    replyTo: email,
  };
  try {
    await transporter.sendMail(mailOptions);
    NextResponse.json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar o email:", error);
    NextResponse.json({ error: "Erro ao enviar o email" }, { status: 500 });
  }
  return NextResponse.json(
    { message: "Email enviado com sucesso!" },
    { status: 200 },
  );
}
