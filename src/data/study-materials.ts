import { QuizId } from "@/data/quiz-questions";

// Texto aceita **negrito** inline.
export type Block =
  | { type: "p"; text: string }
  | { type: "list"; title?: string; items: string[]; ordered?: boolean }
  | {
      type: "callout";
      tone: "info" | "warning" | "danger" | "tip";
      title: string;
      text?: string;
      items?: string[];
    }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  | { type: "cards"; items: { title: string; text: string; tag?: string }[] }
  | { type: "steps"; items: { title: string; text?: string }[] }
  | { type: "dodont"; doTitle?: string; dontTitle?: string; dos: string[]; donts: string[] }
  | { type: "subtitle"; text: string };

export interface MaterialSection {
  id: string;
  title: string;
  summary?: string;
  blocks: Block[];
}

export interface StudyMaterial {
  slug: string;
  quizId: QuizId;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  instructors: string;
  audience: string;
  edition: string;
  pdfPath: string;
  sections: MaterialSection[];
  references: string[];
  closing: { phrase: string; quote?: { text: string; author: string } };
}

export const INSTRUCTOR_PROFILE = {
  name: "João Paulo de Sousa",
  qualifications: [
    "Sargento do Corpo de Bombeiros Militar do Tocantins",
    "Licenciado em Pedagogia pela Universidade Federal do Tocantins",
  ],
  areas: [
    "Atendimento pré-hospitalar, Suporte Básico de Vida (SBV) e Primeiros Socorros",
    "Prevenção e combate a incêndios e equipamentos auxiliares",
    "Técnicas de Combate a Incêndio (TCI) e Brigadas de Incêndio",
    "Lei Lucas e cursos de trauma no atendimento pré-hospitalar",
    "Manipulação e transporte de vítimas de trauma, RMC e Stop The Bleed",
    "Ética profissional e formação de instrutores",
  ],
};

export const CONTACTS = {
  phone: "(63) 9 9959-5787",
  email: "jfbrigada@hotmail.com",
  instagram: "@jfbrigadas",
  site: "www.jfbrigadas.com.br",
};

/* ==========================================================
   PRIMEIROS SOCORROS
========================================================== */
const PRIMEIROS_SOCORROS: StudyMaterial = {
  slug: "primeiros-socorros",
  quizId: "primeiros-socorros",
  title: "Primeiros Socorros",
  subtitle: "Apostila de estudo · Atualização 2026",
  description:
    "Conteúdo de apoio para leigos treinados e não treinados: avaliação da cena, sinais vitais, RCP, engasgo, hemorragias, queimaduras, emergências clínicas e acidentes com animais.",
  badge: "Primeiros Socorros",
  instructors: "João Paulo de Sousa",
  audience: "Público em geral, leigos treinados e não treinados",
  edition: "2026",
  pdfPath: "/materiais/apostila-primeiros-socorros.pdf",
  sections: [
    {
      id: "introducao",
      title: "O que são primeiros socorros",
      blocks: [
        {
          type: "p",
          text: "Primeiros socorros são a **atitude de ajuda e os cuidados iniciais** prestados a uma pessoa com doença ou lesão aguda, até a chegada do socorro especializado. **Podem ser prestados por qualquer pessoa.**",
        },
        {
          type: "p",
          text: "O que cada socorrista pode fazer depende do seu **nível de treinamento** e dos **recursos disponíveis** no local.",
        },
        {
          type: "callout",
          tone: "info",
          title: "Sobre esta apostila",
          text: "Os procedimentos descritos aqui são voltados para leigos. Profissionais de saúde e equipes de resgate seguem protocolos próprios, que podem ser diferentes.",
        },
      ],
    },
    {
      id: "legislacao",
      title: "Legislação",
      blocks: [
        {
          type: "list",
          items: [
            "**Portaria nº 2.048/2002 do Ministério da Saúde** — regulamenta os sistemas estaduais de urgência e emergência.",
            "**NR 07 (PCMSO)** — prevê noções de primeiros socorros nas empresas.",
            "**Art. 135 do Código Penal** — define o crime de omissão de socorro.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Omissão de socorro — Art. 135 do Código Penal",
          text: "Deixar de prestar assistência, quando possível fazê-lo sem risco pessoal, à criança abandonada ou extraviada, ou à pessoa inválida ou ferida, ao desamparo ou em grave e iminente perigo; ou não pedir, nesses casos, o socorro da autoridade pública. **Pena: detenção de 1 a 6 meses, ou multa.**",
        },
        {
          type: "p",
          text: "Ligar para o socorro **também é prestar socorro**. Quando não for seguro agir, acionar o serviço de emergência já cumpre o dever legal.",
        },
      ],
    },
    {
      id: "urgencia-emergencia",
      title: "Urgência, emergência e como pedir socorro",
      blocks: [
        {
          type: "cards",
          items: [
            {
              title: "Urgência",
              tag: "Atenção imediata",
              text: "Requer atenção médica rápida, mas ainda **não configura** risco imediato de morte.",
            },
            {
              title: "Emergência",
              tag: "Risco de morte",
              text: "Requer atenção médica **imediata** e pode levar à morte.",
            },
          ],
        },
        {
          type: "table",
          caption: "Telefones de emergência",
          headers: ["Número", "Serviço"],
          rows: [
            ["192", "SAMU — Serviço de Atendimento Móvel de Urgência"],
            ["193", "Corpo de Bombeiros Militar"],
            ["190", "Polícia Militar"],
            ["191", "Polícia Rodoviária Federal"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Ao ligar para o socorro",
          items: [
            "Mantenha a calma e fale com clareza.",
            "Responda às perguntas do atendente — elas orientam o envio da equipe certa.",
            "Informe o endereço completo e **dois pontos de referência**.",
            "Só desligue quando o atendente orientar.",
          ],
        },
      ],
    },
    {
      id: "definicoes",
      title: "Definições importantes",
      blocks: [
        {
          type: "cards",
          items: [
            {
              title: "Vítima",
              text: "Pode estar consciente ou inconsciente; responde ou não ao chamado do socorrista.",
            },
            {
              title: "Vítima de trauma",
              text: "Sofreu lesão causada por um agente externo: acidente de trânsito, queda, agressão etc.",
            },
            {
              title: "Paciente clínico",
              text: "Apresenta um problema de saúde, sem trauma. Ex.: AVC, infarto, crise convulsiva, doenças crônicas.",
            },
          ],
        },
      ],
    },
    {
      id: "cena-segura",
      title: "Cena segura e biossegurança",
      blocks: [
        {
          type: "p",
          text: "Antes de se aproximar da vítima, avalie a cena. **Um socorrista ferido vira mais uma vítima.**",
        },
        {
          type: "steps",
          items: [
            {
              title: "Qual é a situação?",
              text: "O que aconteceu e o que ainda pode gerar novos riscos?",
            },
            {
              title: "Quais riscos ainda existem?",
              text: "Trânsito, fogo, eletricidade, gás, desabamento, agressor, animais.",
            },
            {
              title: "Como posso ajudar?",
              text: "Defina como agir sem colocar em risco você, a vítima e outras pessoas.",
            },
          ],
        },
        {
          type: "subtitle",
          text: "Biossegurança",
        },
        {
          type: "p",
          text: "Conjunto de práticas e procedimentos destinados a **prevenir riscos** associados a agentes biológicos, químicos e físicos.",
        },
        {
          type: "list",
          items: [
            "Use os EPIs disponíveis — o ideal é **luvas, máscara e óculos**.",
            "**Lave as mãos antes e depois** de cada atendimento.",
          ],
        },
      ],
    },
    {
      id: "sinais-vitais",
      title: "Sinais vitais",
      blocks: [
        {
          type: "p",
          text: "Sinais vitais são medidas que mostram como estão funcionando as **funções essenciais do corpo**. Em primeiros socorros, o foco principal é a **respiração**.",
        },
        {
          type: "table",
          caption: "Valores de referência",
          headers: ["Sinal", "Adulto", "Criança"],
          rows: [
            [
              "Pulso (pressão do sangue contra a parede da artéria)",
              "60 a 100 bpm",
              "2 anos: 80–100 bpm · 4 anos: 80–120 bpm · 6 anos: 75–110 bpm",
            ],
            [
              "Respiração (troca de gases entre o ar e o sangue nos pulmões)",
              "12 a 20 mrm",
              "2 anos: 20–30 mrm · 4 anos: 20–26 mrm · 8 a 10 anos: 18–24 mrm",
            ],
            ["Temperatura (opcional em primeiros socorros)", "36,5 °C a 37 °C", "—"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Como verificar a respiração",
          text: "Coloque a mão sobre o abdômen da vítima e observe o movimento por **até 10 segundos**. bpm = batimentos por minuto; mrm = movimentos respiratórios por minuto.",
        },
      ],
    },
    {
      id: "sbv-pcr",
      title: "Suporte Básico de Vida e parada cardiorrespiratória",
      blocks: [
        {
          type: "p",
          text: "**Suporte Básico de Vida (SBV)** são os procedimentos de emergência prestados a vítimas de parada cardiorrespiratória (PCR), obstrução de vias aéreas ou afogamento, **sem uso de equipamentos invasivos**.",
        },
        {
          type: "callout",
          tone: "danger",
          title: "O que é uma PCR?",
          text: "É quando o coração **para de bater de repente**. O sangue deixa de circular e não chega ao cérebro. A pessoa fica **inconsciente e não respira** (ou só apresenta \"gasping\", uma respiração agônica).",
        },
        {
          type: "subtitle",
          text: "Avaliação inicial",
        },
        {
          type: "steps",
          items: [
            { title: "Cena segura", text: "Confirme que o local é seguro para você e para a vítima." },
            {
              title: "Verifique a responsividade",
              text: "Toque nos ombros da vítima e chame-a em voz alta.",
            },
            {
              title: "Peça ajuda e um DEA",
              text: "Ligue 192 ou 193 e peça que alguém traga um DEA (Desfibrilador Externo Automático). Segundo a AHA, o DEA deve ser solicitado **antes mesmo da confirmação da PCR**.",
            },
            {
              title: "Verifique a respiração",
              text: "Leigos: só a respiração. Profissionais treinados: respiração e pulso. Em **até 10 segundos**.",
            },
          ],
        },
        {
          type: "subtitle",
          text: "Os 4 passos que salvam uma vida",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**Reconhecer a PCR rapidamente:** vítima inconsciente e sem respiração normal.",
            "**Pedir ajuda corretamente:** ligar 192 e solicitar o DEA.",
            "**RCP de alta qualidade:** para leigos não treinados, somente compressões (hands only).",
            "**Usar o DEA o quanto antes.**",
          ],
        },
        {
          type: "subtitle",
          text: "Tipos de RCP",
        },
        {
          type: "cards",
          items: [
            {
              title: "Somente compressões",
              tag: "Leigo não treinado",
              text: "Quem tem pouco treinamento e nenhum equipamento faz apenas compressões torácicas até o socorro chegar.",
            },
            {
              title: "RCP 30:2",
              tag: "Socorrista treinado",
              text: "30 compressões torácicas para 2 ventilações. Ex.: policial treinado em SBV atendendo um adolescente.",
            },
            {
              title: "Equipe de alto desempenho",
              tag: "Vários socorristas",
              text: "Socorrista 1 faz as compressões; socorrista 2, as ventilações com bolsa-válvula-máscara; socorrista 3 opera o DEA e coordena a equipe, minimizando pausas.",
            },
          ],
        },
      ],
    },
    {
      id: "rcp-hands-only",
      title: "Como fazer RCP somente com as mãos",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Posicione a vítima",
              text: "Deitada de barriga para cima, sobre uma **superfície rígida**.",
            },
            {
              title: "Localize o ponto",
              text: "**Centro do peito**, na metade inferior do osso esterno.",
            },
            {
              title: "Posicione-se",
              text: "Ajoelhado ao lado da vítima, mãos sobrepostas, **braços estendidos** e ombros alinhados sobre as mãos.",
            },
            {
              title: "Comprima",
              text: "**100 a 120 compressões por minuto**, com profundidade de **5 a 6 cm** em adultos, deixando o tórax voltar totalmente entre uma compressão e outra.",
            },
            {
              title: "Não pare",
              text: "Continue até o socorro chegar, a vítima voltar a respirar ou você ficar exausto. Se houver outra pessoa treinada, revezem a cada 2 minutos.",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Hands only — lembre-se",
          text: "Pelo protocolo da AHA para leigos, **somente compressões**. Não é necessário fazer respiração boca a boca nem pausas.",
        },
      ],
    },
    {
      id: "ovace",
      title: "Engasgo (OVACE)",
      summary: "Obstrução das Vias Aéreas por Corpo Estranho",
      blocks: [
        {
          type: "list",
          title: "Causas de obstrução das vias aéreas",
          items: [
            "Queda da língua (em vítimas inconscientes)",
            "Edema de glote",
            "Sangue, vômito ou outros fluidos",
            "Corpo estranho (alimentos, objetos) — o OVACE propriamente dito",
            "Trauma ou doença",
          ],
        },
        {
          type: "subtitle",
          text: "Obstrução parcial — a vítima consegue respirar, tossir, falar ou chorar",
        },
        {
          type: "steps",
          items: [
            { title: "Informe que vai ajudar" },
            {
              title: "Incentive a tosse",
              text: "Oriente a vítima a continuar tossindo e **não interfira**.",
            },
            {
              title: "Deixe-a confortável",
              text: "Permita que encontre uma posição de conforto ou mantenha-a sentada.",
            },
            {
              title: "Observe",
              text: "Confirme se o corpo estranho foi eliminado. Se a vítima piorar e não conseguir mais tossir, trate como obstrução total.",
            },
          ],
        },
        {
          type: "subtitle",
          text: "Obstrução total — a vítima não consegue respirar, tossir nem falar",
        },
        {
          type: "cards",
          items: [
            {
              title: "Adulto e criança",
              tag: "AHA / Cruz Vermelha",
              text: "Alterne **golpes nas costas** (entre as escápulas) e **compressões abdominais** (manobra de Heimlich) até desobstruir.",
            },
            {
              title: "Bebê (menor de 1 ano)",
              tag: "Lactente",
              text: "Alterne **5 golpes nas costas** e **5 compressões no peito**, com o bebê apoiado no antebraço e a cabeça mais baixa que o tronco.",
            },
          ],
        },
        {
          type: "callout",
          tone: "danger",
          title: "Se a vítima ficar inconsciente",
          text: "Ligue 192 (se ainda não ligou) e inicie a RCP.",
        },
      ],
    },
    {
      id: "hemorragias",
      title: "Hemorragias",
      blocks: [
        {
          type: "callout",
          tone: "danger",
          title: "Atenção",
          text: "A hemorragia é a **principal causa de morte evitável** após uma lesão.",
        },
        {
          type: "p",
          text: "**Hemorragia** é a perda de sangue para fora dos vasos sanguíneos ou do coração. É classificada em 4 graus de gravidade (I, II, III e IV).",
        },
        {
          type: "cards",
          items: [
            { title: "Externa", text: "O sangramento é visível." },
            {
              title: "Interna",
              text: "O sangue fica dentro do corpo — suspeite após traumas fortes.",
            },
          ],
        },
        {
          type: "list",
          title: "Quanto à origem do sangramento",
          items: ["Arterial", "Venosa", "Capilar", "Mista"],
        },
        {
          type: "dodont",
          doTitle: "Tratamento da hemorragia externa",
          dos: [
            "Acionar imediatamente o 192.",
            "Fazer **pressão direta** sobre o ferimento — pode ser com a mão protegida.",
            "Aplicar curativo compressivo com panos limpos, gazes ou compressas.",
            "Em grandes hemorragias de braços e pernas, usar **torniquete**.",
            "Preencher o ferimento (com agente hemostático, se houver).",
            "Manter a temperatura do corpo com lençol, cobertor ou manta térmica.",
            "Dar apoio emocional até a chegada do socorro.",
          ],
          dontTitle: "Não fazer",
          donts: ["Dar água, alimentos ou remédios à vítima."],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Sangramento nasal",
          text: "Comprima as narinas por **10 minutos**, com a cabeça levemente inclinada **para a frente**.",
        },
      ],
    },
    {
      id: "ferimentos",
      title: "Ferimentos",
      blocks: [
        {
          type: "p",
          text: "Ferimento é qualquer lesão em um tecido do corpo causada por trauma.",
        },
        {
          type: "subtitle",
          text: "Evisceração (órgãos expostos)",
        },
        {
          type: "dodont",
          dos: [
            "Acionar imediatamente o 192.",
            "Umedecer os órgãos expostos com soro fisiológico.",
            "Cobrir com gaze ou compressa limpa.",
            "Dar apoio emocional.",
          ],
          donts: ["Recolocar os órgãos para dentro do corpo."],
        },
        {
          type: "subtitle",
          text: "Ferimentos penetrantes e objetos encravados",
        },
        {
          type: "p",
          text: "São lesões que atravessam a pele e danificam os tecidos. Quando há ponto de entrada e de saída, o ferimento é chamado de **transfixante**.",
        },
        {
          type: "dodont",
          dos: [
            "Acionar imediatamente o 192.",
            "Imobilizar o objeto na posição em que está.",
            "Dar apoio emocional e aguardar o transporte ao hospital.",
          ],
          donts: [
            "**Retirar o objeto encravado** — exceto na bochecha, quando ele atrapalha a respiração.",
          ],
        },
      ],
    },
    {
      id: "fraturas-quedas",
      title: "Lesões em ossos e quedas",
      blocks: [
        {
          type: "cards",
          items: [
            {
              title: "Entorse",
              text: "Torção ou distensão brusca de uma articulação.",
            },
            {
              title: "Luxação",
              text: "Desalinhamento das extremidades dos ossos de uma articulação.",
            },
            { title: "Fratura", text: "Quebra total ou parcial de um osso." },
          ],
        },
        {
          type: "dodont",
          doTitle: "Suspeita de fratura",
          dos: [
            "Acionar o serviço de emergência.",
            "Havendo recursos, imobilizar o membro na posição encontrada.",
          ],
          donts: [
            "Dar água, remédios ou alimentos.",
            "Separar a parte amputada ou avulsionada.",
            "Fazer torniquete sobre a fratura.",
          ],
        },
        {
          type: "subtitle",
          text: "Quedas",
        },
        {
          type: "p",
          text: "A queda é um trauma por **desaceleração vertical**: os órgãos continuam em movimento e são puxados de seus ligamentos (lesão por cisalhamento), o que pode causar ferimentos internos graves.",
        },
        {
          type: "list",
          title: "Tipos de queda",
          items: [
            "Queda em pé",
            "Queda da própria altura",
            "Queda de cabeça (trauma axial)",
            "Queda para a frente com os braços estendidos",
          ],
        },
        {
          type: "p",
          text: "São mais comuns em adultos e idosos. Nos casos graves, **acione a emergência e aguarde o socorro especializado** sem movimentar a vítima.",
        },
      ],
    },
    {
      id: "queimaduras",
      title: "Queimaduras",
      blocks: [
        {
          type: "p",
          text: "Queimadura é uma lesão na pele causada por calor, produtos químicos, radiação ou eletricidade.",
        },
        {
          type: "table",
          caption: "Classificação das queimaduras",
          headers: ["Grau", "Características", "Procedimento"],
          rows: [
            [
              "1º grau",
              "Dor e vermelhidão.",
              "Resfriar com água fria corrente ou soro fisiológico. Cuidado com o choque térmico.",
            ],
            [
              "2º grau",
              "Dor, vermelhidão e bolhas.",
              "Limpar com água fria ou soro fisiológico. **Nunca estourar as bolhas.**",
            ],
            [
              "3º grau",
              "Atinge todas as camadas da pele, podendo chegar ao osso. Geralmente sem dor.",
              "Limpar com água ou soro fisiológico, resfriar por até 20 minutos e cobrir com curativo úmido.",
            ],
            [
              "4º grau",
              "Indolor. Atinge pele, gordura, músculos, ossos ou órgãos internos.",
              "Retirar anéis, relógio, pulseiras e roupas não grudadas; recortar ao redor das roupas grudadas; cobrir com manta térmica aluminizada para evitar choque e hipotermia.",
            ],
          ],
        },
        {
          type: "dodont",
          dos: [
            "Acionar o socorro: 193 ou 192.",
            "Lavar o local com água corrente por **20 minutos**.",
            "Acalmar a vítima.",
            "Encaminhar ao hospital.",
          ],
          donts: [
            "Usar pomadas ou receitas caseiras: pasta de dente, manteiga, açúcar, borra de café etc.",
            "Estourar bolhas ou arrancar roupas grudadas na pele.",
          ],
        },
      ],
    },
    {
      id: "emergencias-clinicas",
      title: "Emergências clínicas",
      blocks: [
        {
          type: "subtitle",
          text: "AVC — Acidente Vascular Cerebral (ou Encefálico)",
        },
        {
          type: "p",
          text: "Disfunção neurológica causada pela **interrupção do fluxo de sangue** para uma parte do cérebro. Quanto mais cedo o atendimento, menores as sequelas.",
        },
        {
          type: "table",
          caption: "Escala FAST (versão simplificada da escala de Cincinnati)",
          headers: ["Letra", "O que avaliar"],
          rows: [
            ["F — Face (rosto)", "Peça para a pessoa sorrir. Um lado do rosto está caído?"],
            ["A — Arms (braços)", "Peça para levantar os dois braços. Um deles está fraco ou cai?"],
            ["S — Speech (fala)", "Peça para repetir uma frase simples. A fala está enrolada ou estranha?"],
            ["T — Time (tempo)", "Notou algum sinal? **Ligue 192 imediatamente** e anote o horário."],
          ],
        },
        {
          type: "subtitle",
          text: "IAM — Infarto Agudo do Miocárdio",
        },
        {
          type: "p",
          text: "Ocorre quando uma área do músculo do coração fica sem sangue e oxigênio por um período prolongado, por obstrução ou rompimento das artérias que o nutrem, levando à morte do tecido cardíaco.",
        },
        {
          type: "callout",
          tone: "info",
          title: "Conduta no AVC e no infarto",
          items: [
            "Acionar o 192.",
            "Tranquilizar a vítima e mantê-la em repouso.",
            "Afrouxar as roupas.",
            "Monitorar os sinais vitais — se parar de respirar, iniciar RCP.",
          ],
        },
        {
          type: "subtitle",
          text: "Convulsões e crises epilépticas",
        },
        {
          type: "list",
          title: "Sinais e sintomas",
          items: [
            "Perda de consciência e queda ao chão",
            "Rigidez do corpo, do pescoço e das extremidades",
            "Contrações musculares generalizadas e repetitivas",
            "Pode haver arroxeamento (cianose) e perda de urina ou fezes",
            "Após a crise, confusão e esquecimento do episódio",
          ],
        },
        {
          type: "dodont",
          dos: [
            "Acionar o 192.",
            "Afastar curiosos, móveis e objetos que possam machucar a vítima.",
            "Proteger a cabeça da vítima.",
            "Afrouxar roupas apertadas.",
            "Após a crise, deitar a vítima **de lado** para evitar engasgo com secreções.",
          ],
          donts: [
            "Puxar a língua.",
            "Colocar dedos ou objetos na boca da vítima.",
            "Segurar os movimentos à força.",
          ],
        },
        {
          type: "subtitle",
          text: "Desmaio",
        },
        {
          type: "p",
          text: "Perda temporária da consciência por redução ou interrupção momentânea do fluxo de sangue para o cérebro.",
        },
        {
          type: "cards",
          items: [
            {
              title: "Causas comuns",
              text: "Emoções fortes, hipoglicemia, calor excessivo, anemia ou sangramento volumoso e mudança brusca de posição.",
            },
            {
              title: "Sinais de alerta",
              text: "Mal-estar, tontura, pele fria, pálida e úmida, suor frio e formigamento.",
            },
          ],
        },
        {
          type: "list",
          title: "O que fazer",
          items: [
            "Segurar a pessoa para que não caia.",
            "Se ainda estiver consciente com sinais de desmaio, orientar a fazer manobras de contrapressão ou ficar de cócoras.",
            "Se estiver sentada, inclinar o tronco para a frente e baixar levemente a cabeça.",
            "Acionar o socorro.",
          ],
        },
      ],
    },
    {
      id: "animais",
      title: "Acidentes com animais",
      blocks: [
        {
          type: "p",
          text: "No Brasil, os acidentes mais comuns envolvem **escorpiões, aranhas, abelhas, lagartas, lacraias, formigas, cobras, cães e gatos**.",
        },
        {
          type: "subtitle",
          text: "Mordidas (cães, gatos, cavalos, morcegos)",
        },
        {
          type: "list",
          items: [
            "Lavar o local **imediatamente** com bastante água e sabão, para remover a saliva e a sujeira do animal.",
            "Se houver sangramento, controlar com curativo compressivo e seco.",
            "Procurar atendimento médico — pode ser necessária vacina antirrábica.",
          ],
        },
        {
          type: "subtitle",
          text: "Picadas de animais peçonhentos",
        },
        {
          type: "dodont",
          dos: [
            "Acionar o 192.",
            "Manter a vítima em repouso.",
            "Aplicar compressa fria ou atadura úmida no local.",
            "Levar a vítima ao atendimento médico.",
            "Se possível, identificar o animal ou tirar uma foto.",
          ],
          donts: [
            "Fazer a vítima caminhar.",
            "Cortar a pele ou sugar o veneno.",
            "Usar garrote ou torniquete.",
            "Fazer curativos caseiros.",
            "Dar bebidas alcoólicas.",
            "Perder tempo.",
          ],
        },
      ],
    },
    {
      id: "manipulacao-transporte",
      title: "Manipulação e transporte de vítimas",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "Regra geral",
          text: "Manipular e transportar vítimas é tarefa de **profissionais treinados** (Corpo de Bombeiros, SAMU, PRF). Mover uma vítima de trauma de forma errada pode agravar lesões.",
        },
        {
          type: "p",
          text: "**Exceção:** em incêndios, enchentes e outros sinistros, **qualquer pessoa pode e deve retirar a vítima** quando deixá-la no local significa risco de morte. Exemplo: pessoa presa em um veículo pegando fogo.",
        },
        {
          type: "subtitle",
          text: "Acidentes de trânsito",
        },
        {
          type: "steps",
          items: [
            { title: "Sinalize e garanta a segurança da cena", text: "Use EPIs, se disponíveis." },
            {
              title: "Aborde a vítima",
              text: "Chame-a, identifique-se, diga que vai ajudar e peça permissão para o atendimento.",
            },
            { title: "Acione o 192" },
            { title: "Verifique a respiração" },
            {
              title: "Não movimente a vítima",
              text: "Exceto em caso de sinistro, se ela não respirar ou se houver hemorragia grave.",
            },
          ],
        },
      ],
    },
    {
      id: "kit",
      title: "Kit de primeiros socorros",
      blocks: [
        {
          type: "p",
          text: "Deve ficar em **local de fácil acesso e bem identificado**.",
        },
        {
          type: "list",
          title: "Composição sugerida",
          items: [
            "Gazes e esparadrapo",
            "Soro fisiológico",
            "Ataduras e talas flexíveis",
            "Torniquetes e bandagens israelenses",
            "Tesoura",
            "EPIs (luvas, máscara, óculos)",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Sem medicamentos",
          text: "O kit **não deve conter medicamentos**: pela legislação, só profissionais de saúde habilitados podem administrá-los. O oxímetro também não é de uso comum em primeiros socorros.",
        },
      ],
    },
    {
      id: "dicas",
      title: "Dicas importantes",
      blocks: [
        {
          type: "list",
          items: [
            "Ao presenciar um acidente com vítimas, **acione o 192 imediatamente**.",
            "Verifique os sinais vitais das vítimas.",
            "Tranquilize as vítimas.",
            "Previna acidentes: seja prudente no trânsito e cuidado com eletricidade.",
            "Atenção em praias, rios e piscinas.",
            "Cuidado com acidentes domésticos e com animais silvestres.",
          ],
        },
      ],
    },
  ],
  references: [
    "Corpo de Bombeiros Militar do Estado de São Paulo. Manual de Atendimento Pré-Hospitalar, 2023/2026.",
    "American Heart Association (AHA). Diretrizes de RCP e ACE e e-book de SBV, 2023/2026.",
    "American Red Cross. Guidelines for First Aid.",
    "Canadian Red Cross. Guidelines for First Aid.",
    "Cruz Vermelha Brasileira — Filial São Paulo, 2023.",
  ],
  closing: {
    phrase: "O que fazemos em vida ecoa na eternidade.",
  },
};

/* ==========================================================
   BRIGADA DE INCÊNDIO
========================================================== */
const BRIGADA_INCENDIO: StudyMaterial = {
  slug: "brigada-de-incendio",
  quizId: "brigada-incendio",
  title: "Brigada de Incêndio",
  subtitle: "Apostila de estudo · TCI 2026",
  description:
    "Técnicas de controle de princípios de incêndio e equipamentos auxiliares: legislação, atribuições da brigada, sistemas de proteção, química do fogo, classes de incêndio, extintores, sinalização e abandono de área.",
  badge: "Brigada de Incêndio",
  instructors: "João Paulo de Sousa e Thalyta",
  audience: "Candidatos a brigadista e brigadistas em reciclagem",
  edition: "2026",
  pdfPath: "/materiais/apostila-brigada-de-incendio.pdf",
  sections: [
    {
      id: "legislacao",
      title: "Legislação do Estado do Tocantins",
      blocks: [
        {
          type: "list",
          items: [
            "**Lei nº 3.798, de 13 de julho de 2021** — Código de Segurança contra Incêndio e Emergência em Edificações e Áreas de Risco do Estado.",
            "**Portaria nº 09/2021/DISTEC, de 12 de agosto de 2021 — Anexo XII**.",
            "**Norma Técnica nº 12 — Brigada de Incêndio** (CBMTO): programa de treinamento para composição de brigadas.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Importante",
          text: "Alguns procedimentos adotados pelos corpos de bombeiros militares podem divergir dos apresentados nesta apostila. O **combate a incêndios declarados** é atribuição do Corpo de Bombeiros; o brigadista atua na prevenção e no **princípio de incêndio**.",
        },
      ],
    },
    {
      id: "brigada",
      title: "A brigada de incêndio",
      blocks: [
        {
          type: "p",
          text: "Grupo organizado de pessoas, voluntárias ou não, **treinadas e capacitadas** para atuar na prevenção e no combate a princípios de incêndio, no abandono de área e nos primeiros socorros, dentro de uma área preestabelecida.",
        },
        {
          type: "list",
          title: "Critérios básicos para selecionar brigadistas",
          items: [
            "Permanecer na edificação durante o expediente",
            "Preferencialmente, ter experiência anterior como brigadista",
            "Ter boa condição física e boa saúde",
            "Conhecer bem as instalações",
            "Ter responsabilidade legal",
            "Ser alfabetizado",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Todo brigadista deve conhecer",
          items: [
            "O sistema de proteção contra incêndios da edificação",
            "A edificação, principalmente as **rotas de fuga**",
            "Os telefones de socorro: **193** (Bombeiros) e **192** (SAMU)",
          ],
        },
        {
          type: "subtitle",
          text: "Controle do programa de brigada",
        },
        {
          type: "cards",
          items: [
            {
              title: "Reuniões ordinárias",
              tag: "Mensais",
              text: "Encontros periódicos com os membros da brigada.",
            },
            {
              title: "Reuniões extraordinárias",
              tag: "Quando necessário",
              text: "Após um sinistro ou quando for identificado um risco iminente.",
            },
            {
              title: "Exercícios simulados",
              tag: "Periódicos",
              text: "Treinam o abandono de área e a resposta da brigada.",
            },
          ],
        },
      ],
    },
    {
      id: "atribuicoes",
      title: "Atribuições da brigada",
      blocks: [
        {
          type: "table",
          headers: ["Ações de prevenção", "Ações de emergência"],
          rows: [
            ["Avaliar os riscos existentes", "Identificar a situação"],
            ["Inspecionar os equipamentos de combate a incêndio", "Acionar o alarme e iniciar o abandono de área"],
            ["Inspecionar as rotas de fuga", "Acionar o Corpo de Bombeiros e/ou ajuda externa"],
            ["Elaborar relatório das irregularidades encontradas", "Combater o princípio de incêndio"],
            ["Encaminhar o relatório aos setores competentes", "Cortar a energia"],
            ["Orientar a população fixa e flutuante", "Prestar primeiros socorros"],
            ["Participar de exercícios simulados", "Controlar o pânico"],
          ],
        },
      ],
    },
    {
      id: "sistemas-protecao",
      title: "Sistemas de proteção contra incêndio",
      blocks: [
        {
          type: "subtitle",
          text: "Proteção ativa",
        },
        {
          type: "cards",
          items: [
            { title: "Hidrantes", text: "Pontos de água com mangueiras para combate a incêndios." },
            {
              title: "Chuveiros automáticos (sprinklers)",
              text: "Disparam sozinhos com o calor. São controlados pela VGA (válvula de governo e alarme).",
            },
            {
              title: "Extintores",
              text: "Portáteis ou sobre rodas, para combate a princípios de incêndio.",
            },
            {
              title: "Sistema de inundação",
              text: "Liberação automática de gás carbônico, que apaga o fogo por abafamento.",
            },
            {
              title: "Detectores e alarme",
              text: "Detectores de calor ou fumaça, central de alarme e avisadores visuais (ex.: em boates).",
            },
            {
              title: "Apoio",
              text: "Bomba de incêndio, registro de recalque e reserva técnica de incêndio (caixa d'água).",
            },
          ],
        },
        {
          type: "subtitle",
          text: "Proteção passiva — escadas de segurança",
        },
        {
          type: "table",
          headers: ["Tipo de escada", "Características"],
          rows: [
            [
              "Escada enclausurada",
              "Resistência ao fogo de 2 h · sem antecâmara · porta corta-fogo (PCF) de 30 min",
            ],
            [
              "Escada enclausurada protegida",
              "Resistência ao fogo e à fumaça de 4 h · com antecâmara · PCF de 60, 90 ou 120 min",
            ],
            [
              "Escada pressurizada",
              "Antecâmara não obrigatória · 2 ventiladores · PCF de 120 min",
            ],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Barra antipânico",
          text: "As portas das escadas de segurança devem ter barra antipânico, que abre com um simples empurrão.",
        },
        {
          type: "list",
          title: "Outros itens de proteção e apoio",
          items: [
            "Escada secundária",
            "Iluminação de emergência",
            "Sinalização de emergência (rotas de fuga, saídas e equipamentos)",
            "Central de energia (chave geral) e motogerador",
            "Central de gás",
            "SPDA — sistema de proteção contra descargas atmosféricas (para-raios)",
            "Pontos de encontro interno e externo",
            "Plano de prevenção e controle de incêndio",
          ],
        },
      ],
    },
    {
      id: "fogo",
      title: "Fogo e incêndio",
      blocks: [
        {
          type: "cards",
          items: [
            {
              title: "Fogo (combustão)",
              text: "Reação química entre um **combustível** (madeira, papel, tecido, borracha etc.) e o **oxigênio do ar**, iniciada por calor, que produz luz e calor de forma autossustentável.",
            },
            {
              title: "Incêndio (sinistro)",
              text: "É o fogo que **foge ao controle** humano e pode causar danos à vida, ao patrimônio e ao meio ambiente.",
            },
          ],
        },
        {
          type: "subtitle",
          text: "As 4 ações do brigadista em caso de incêndio",
        },
        {
          type: "steps",
          items: [
            { title: "Manter a calma" },
            { title: "Acionar os bombeiros — 193" },
            { title: "Acionar o alarme e informar a situação" },
            { title: "Cortar a energia (chave geral) e o gás" },
          ],
        },
        {
          type: "subtitle",
          text: "Tetraedro do fogo — os 4 elementos",
        },
        {
          type: "cards",
          items: [
            { title: "Combustível", text: "Elemento que **alimenta** o fogo." },
            { title: "Comburente (oxigênio)", text: "Elemento que **ativa** o fogo." },
            { title: "Calor", text: "Elemento que **dá início** ao fogo." },
            { title: "Reação em cadeia", text: "Processo que **mantém** o fogo aceso." },
          ],
        },
        {
          type: "subtitle",
          text: "Tipos de combustível",
        },
        {
          type: "table",
          headers: ["Estado", "Exemplos"],
          rows: [
            ["Sólidos", "Madeira, papel, tecido, borracha"],
            ["Líquidos", "Gasolina, álcool, thinner, tintas"],
            ["Gasosos", "GLP, propano, gás natural"],
          ],
        },
      ],
    },
    {
      id: "classes",
      title: "Classes de incêndio",
      blocks: [
        {
          type: "table",
          headers: ["Classe", "Material", "Característica", "Como combater"],
          rows: [
            [
              "**A**",
              "Sólidos orgânicos: madeira, papel, tecido, plástico, borracha",
              "Queima em profundidade e deixa cinzas e brasas",
              "Resfriamento",
            ],
            [
              "**B**",
              "Líquidos inflamáveis e gases: gasolina, álcool, óleo, solventes",
              "Queima na superfície",
              "Abafamento ou isolamento",
            ],
            [
              "**C**",
              "Equipamentos elétricos energizados: motores, quadros, eletrônicos",
              "Risco de choque elétrico",
              "Desenergizar, se possível, e usar agente não condutor",
            ],
            [
              "**D**",
              "Metais pirofóricos: magnésio, sódio, lítio metálico, alumínio em pó",
              "Reagem violentamente com água",
              "**Nunca usar água** — agentes especiais",
            ],
            [
              "**K** (ou F)",
              "Óleos e gorduras de cozinha",
              "Queimam em temperatura muito alta",
              "Agente que provoca saponificação",
            ],
            [
              "**L**",
              "Baterias de íon-lítio: veículos elétricos, celulares, notebooks, patinetes, nobreaks",
              "Fuga térmica, gases tóxicos e alto risco de reignição (horas ou dias)",
              "Resfriamento prolongado e monitoramento contínuo",
            ],
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "As 3 classes principais",
          text: "No dia a dia do brigadista, as classes mais comuns são **A** (sólidos), **B** (líquidos e gases inflamáveis) e **C** (equipamentos elétricos energizados).",
        },
        {
          type: "p",
          text: "Fontes: ABNT NBR 12693; NFPA 10; ISO 3941:2026 (publicada em 21/01/2026), que criou a classe L — o lítio metálico continua na classe D.",
        },
      ],
    },
    {
      id: "transferencia-calor",
      title: "Transferência de calor",
      blocks: [
        {
          type: "cards",
          items: [
            {
              title: "Condução",
              text: "O calor passa por **contato direto**, de um corpo para outro. Ex.: uma barra de metal aquecida na ponta.",
            },
            {
              title: "Convecção",
              text: "O calor é transportado por um **fluido em movimento** (líquido ou gás). Ex.: fumaça quente que sobe e espalha o fogo para os andares de cima.",
            },
            {
              title: "Radiação",
              text: "O calor viaja por **ondas**, sem precisar de meio material. Ex.: o calor que se sente perto de uma fogueira.",
            },
          ],
        },
      ],
    },
    {
      id: "extincao",
      title: "Métodos de extinção do fogo",
      summary: "Cada método atua sobre um elemento do tetraedro do fogo.",
      blocks: [
        {
          type: "cards",
          items: [
            {
              title: "Isolamento",
              tag: "Combustível",
              text: "Retirada do material combustível.",
            },
            {
              title: "Resfriamento",
              tag: "Calor",
              text: "Redução da temperatura do material em chamas.",
            },
            {
              title: "Abafamento",
              tag: "Oxigênio",
              text: "Interrupção do fornecimento de oxigênio.",
            },
            {
              title: "Extinção química",
              tag: "Reação em cadeia",
              text: "Agentes extintores lançados sobre o fogo reagem com o calor e **interrompem a reação em cadeia**. É o princípio dos extintores de pó químico.",
            },
          ],
        },
        {
          type: "subtitle",
          text: "Fases do incêndio",
        },
        {
          type: "steps",
          items: [
            { title: "Fase inicial", text: "Começa logo após a ignição de um material combustível." },
            {
              title: "Fase crescente",
              text: "O incêndio se desenvolve e a temperatura sobe de cerca de 50 °C para 800 °C.",
            },
            {
              title: "Fase totalmente desenvolvida",
              text: "Queima livre, com temperaturas acima de 800 °C.",
            },
            { title: "Fase final", text: "Fase de brasas ou decrescente." },
          ],
        },
      ],
    },
    {
      id: "extintores",
      title: "Extintores",
      blocks: [
        {
          type: "p",
          text: "Equipamento para **controle de princípios de incêndio**.",
        },
        {
          type: "table",
          headers: ["Extintor", "Classes", "Como age", "Observação"],
          rows: [
            ["Água", "A", "Resfriamento", "**Não usar** nas classes B, C, D e K"],
            ["Pó químico (BC)", "B e C", "Abafamento e quebra da reação em cadeia", "—"],
            ["Gás carbônico — CO₂", "B e C", "Abafamento e resfriamento", "—"],
          ],
        },
        {
          type: "subtitle",
          text: "Uso correto do extintor",
        },
        {
          type: "steps",
          items: [
            { title: "Verifique a classe do extintor", text: "Confirme se ele serve para o tipo de fogo." },
            { title: "Rompa o lacre e retire o pino" },
            { title: "Teste o extintor", text: "Dê um jato curto antes de se aproximar." },
            { title: "Direcione o jato para a base do fogo" },
            { title: "Use todo o conteúdo do extintor" },
            {
              title: "Ao final, deite o extintor",
              text: "Assim ninguém tenta usar um extintor vazio.",
            },
          ],
        },
      ],
    },
    {
      id: "sinalizacao",
      title: "Sinalização de emergência",
      blocks: [
        {
          type: "p",
          text: "A sinalização de emergência serve para **reduzir o risco de incêndio**, alertar para os riscos existentes, orientar as ações de combate e facilitar a localização dos equipamentos e das rotas de saída para um abandono de área seguro.",
        },
        {
          type: "subtitle",
          text: "Sinalização básica — 4 categorias",
        },
        {
          type: "cards",
          items: [
            {
              title: "Proibição",
              text: "Proíbe ações que possam iniciar um incêndio.",
            },
            {
              title: "Alerta",
              text: "Avisa sobre áreas e materiais com risco de incêndio, explosão, choque elétrico ou contaminação.",
            },
            {
              title: "Orientação e salvamento",
              text: "Indica as rotas de saída e as ações para acessá-las.",
            },
            {
              title: "Equipamentos",
              text: "Indica onde ficam os equipamentos de combate a incêndio.",
            },
          ],
        },
        {
          type: "list",
          title: "Sinalização complementar",
          items: [
            "Indicação continuada das rotas de saída",
            "Indicação de obstáculos e riscos nas rotas de saída",
            "Mensagens escritas que acompanham a sinalização básica (ex.: lotação máxima)",
          ],
        },
        {
          type: "table",
          caption: "Cores da sinalização",
          headers: ["Cor", "Significado"],
          rows: [
            ["Vermelho", "Equipamentos de combate a incêndio"],
            ["Verde", "Rotas de fuga e saídas de emergência"],
          ],
        },
      ],
    },
    {
      id: "abandono",
      title: "Abandono de área",
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Saia sempre pela escada", text: "Em fila, caminhando — nunca use o elevador." },
            { title: "Use o lado direito da escada" },
            { title: "Feche as portas corta-fogo ao passar" },
            { title: "Desça — nunca suba", text: "Siga até o ponto de encontro." },
            {
              title: "Faça a contagem",
              text: "No ponto de encontro, confira a população fixa e flutuante da edificação.",
            },
          ],
        },
        {
          type: "callout",
          tone: "danger",
          title: "Se precisar atravessar uma barreira de fogo",
          items: [
            "Molhe todo o corpo, as roupas e os sapatos.",
            "Enrole-se em uma cortina ou cobertor encharcado.",
            "Atravesse o mais rápido possível.",
            "Mantenha a esperança: muitas pessoas estão trabalhando para salvar você.",
          ],
        },
      ],
    },
    {
      id: "fumaca",
      title: "Fumaça, gases tóxicos e incêndios de progresso rápido",
      blocks: [
        {
          type: "subtitle",
          text: "As 5 características da fumaça — QOMIT",
        },
        {
          type: "cards",
          items: [
            { title: "Quente", tag: "Q", text: "Causa queimaduras nas vias aéreas." },
            { title: "Opaca", tag: "O", text: "Reduz a visibilidade e desorienta." },
            { title: "Móvel", tag: "M", text: "Espalha-se rapidamente pela edificação." },
            { title: "Inflamável", tag: "I", text: "Pode pegar fogo de repente." },
            { title: "Tóxica", tag: "T", text: "Contém gases que intoxicam e matam." },
          ],
        },
        {
          type: "p",
          text: "Os **pulmões e as vias aéreas** são as partes do corpo mais vulneráveis em um incêndio, porque a atmosfera é potencialmente tóxica. Por isso, **somente bombeiros treinados e protegidos** devem combater incêndios declarados.",
        },
        {
          type: "subtitle",
          text: "Principais gases tóxicos",
        },
        {
          type: "cards",
          items: [
            {
              title: "Monóxido de carbono (CO)",
              tag: "O que mais mata",
              text: "Incolor e inodoro, está presente em todo incêndio, principalmente nos pouco ventilados. Quanto mais escura a fumaça, mais CO está sendo produzido.",
            },
            {
              title: "Ácido cianídrico",
              tag: "O mais tóxico",
              text: "Gerado pela queima de materiais sintéticos (lã, seda, náilon, poliuretano, plásticos, resinas). É cerca de **20 vezes mais tóxico que o CO** e impede o organismo de usar o oxigênio.",
            },
          ],
        },
        {
          type: "list",
          title: "Sinais de falta de oxigênio no corpo",
          items: [
            "Perda de coordenação motora",
            "Tontura e dor de cabeça",
            "Desorientação",
            "Exaustão",
            "Inconsciência e morte",
          ],
        },
        {
          type: "subtitle",
          text: "Incêndios de progresso rápido",
        },
        {
          type: "cards",
          items: [
            {
              title: "Backdraft",
              text: "Gases quentes acumulados em um ambiente fechado explodem quando entra uma corrente súbita de oxigênio (ex.: ao abrir uma porta).",
            },
            {
              title: "Flashover",
              text: "O calor aquece gradualmente todos os materiais do ambiente até que eles se inflamam ao mesmo tempo.",
            },
          ],
        },
      ],
    },
    {
      id: "dicas",
      title: "Dicas de prevenção",
      blocks: [
        {
          type: "list",
          items: [
            "Mantenha a calma e evite pânico, correria e gritaria.",
            "Acione o botão de alarme mais próximo.",
            "Feche portas e janelas para confinar o fogo.",
            "Afaste os materiais combustíveis.",
            "Não deixe aparelhos elétricos ligados ao sair de casa.",
            "Não coloque tapetes ou carpetes sobre fios e instalações elétricas.",
            "Não use benjamins (\"T\") nem sobrecarregue tomadas.",
            "Organize os fios atrás dos móveis, evitando atrito.",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Brigada de incêndio, em síntese",
          text: "**Prevenção, conscientização, conhecimento** e respeito pela própria vida e pela vida do outro.",
        },
      ],
    },
  ],
  references: [
    "Corpo de Bombeiros Militar do Estado do Tocantins. Norma Técnica nº 12 — Brigada de Incêndio.",
    "Tocantins. Lei nº 3.798, de 13 de julho de 2021.",
    "Corpo de Bombeiros da Polícia Militar do Estado de São Paulo. Manual de Bombeiros, 2015.",
    "Manual de protección contra incendios. 3. ed. Madri: Mapfre, 1997.",
    "ABNT NBR 12693; NFPA 10; ISO 3941:2026.",
  ],
  closing: {
    phrase: "Uma edificação pode ser reconstruída depois de um incêndio. Uma vida, não.",
    quote: {
      text: "O verdadeiro lugar de nascimento é aquele em que lançamos pela primeira vez um olhar inteligente sobre nós mesmos.",
      author: "Marguerite Yourcenar",
    },
  },
};

export const STUDY_MATERIALS: StudyMaterial[] = [PRIMEIROS_SOCORROS, BRIGADA_INCENDIO];

export function getMaterialBySlug(slug: string): StudyMaterial | undefined {
  return STUDY_MATERIALS.find((m) => m.slug === slug);
}

export function getMaterialByQuizId(quizId: QuizId): StudyMaterial | undefined {
  return STUDY_MATERIALS.find((m) => m.quizId === quizId);
}
