import { NextResponse } from "next/server";

interface CloudinaryResource {
  asset_folder: string;
}
export async function GET(req: Request) {
  // Extrai o 'slug' dos parâmetros da query string
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "Slug não encontrado" }, { status: 400 });
  }

  try {
    // Faz uma requisi o para a API do Cloudinary para buscar as imagens
    // contidas na pasta 'JF-BRIGADAS' com o slug passado na query string
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_NAME}/resources/image/upload?asset_folder=JF-BRIGADAS&max_results=500`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.CLOUDINARY_KEY}:${process.env.CLOUDINARY_SECRET}`,
          ).toString("base64")}`,
        },
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Erro ao buscar imagens no Cloudinary" },
        { status: 500 },
      );
    }

    // Extrai as imagens da resposta da API
    const data = await response.json();

    // Filtra as imagens da pasta 'JF-BRIGADAS' com o slug passado na query string
    const filterResources = data.resources.filter(
      (img: CloudinaryResource) => img.asset_folder === `JF-BRIGADAS/${slug}`,
    );

    // Retorna a resposta com as imagens filtradas, mantendo a estrutura
    // original da resposta da API do Cloudinary
    return NextResponse.json({
      ...data,

      // Array com as imagens filtradas pela pasta e slug
      resources: filterResources,
    });
  } catch (error) {
    console.error("Erro na requisi o", error);
    return NextResponse.json({ error: "Erro no servidor" }, { status: 500 });
  }
}
