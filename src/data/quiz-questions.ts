export interface Option {
  key: "A" | "B" | "C";
  text: string;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
  correctAnswer: "A" | "B" | "C";
  hint: string;
}

export type QuizId = "primeiros-socorros" | "brigada-incendio";

export interface QuizConfig {
  id: QuizId;
  title: string;
  subtitle: string;
  shortDescription: string;
  badge: string;
  iconType: "first-aid" | "fire";
  questions: Question[];
}

export const PASSING_PERCENTAGE = 70; // 70%
export const TOTAL_QUESTIONS = 15;

export const QUIZ_PRIMEIROS_SOCORROS: QuizConfig = {
  id: "primeiros-socorros",
  title: "Teste de Primeiros Socorros para Brigada de Incêndio",
  subtitle: "15 perguntas · Primeiros Socorros & Atendimento Pré-Hospitalar",
  shortDescription:
    "Avaliação teórica cobrindo Suporte Básico de Vida (SBV), RCP, desmaios, queimaduras, contenção de hemorragias e desobstrução de vias aéreas.",
  badge: "Primeiros Socorros",
  iconType: "first-aid",
  questions: [
    {
      id: 1,
      question: "O que são primeiros socorros?",
      options: [
        {
          key: "A",
          text: "Procedimentos cirúrgicos realizados exclusivamente dentro do ambiente hospitalar.",
        },
        {
          key: "B",
          text: "Cuidados imediatos prestados a uma vítima até a chegada do atendimento especializado.",
        },
        {
          key: "C",
          text: "Diagnóstico definitivo e prescrição de medicamentos para o paciente.",
        },
      ],
      correctAnswer: "B",
      hint: "Pense no atendimento temporário e imediato no local do acidente.",
    },
    {
      id: 2,
      question:
        "Qual é o número de telefone de emergência do Corpo de Bombeiros no Brasil?",
      options: [
        { key: "A", text: "192" },
        { key: "B", text: "193" },
        { key: "C", text: "190" },
      ],
      correctAnswer: "B",
      hint: "Este número termina com o dígito 3.",
    },
    {
      id: 3,
      question: "Qual é o número telefônico para acionar o SAMU?",
      options: [
        { key: "A", text: "192" },
        { key: "B", text: "193" },
        { key: "C", text: "199" },
      ],
      correctAnswer: "A",
      hint: "É o número de emergência médica que termina com o dígito 2.",
    },
    {
      id: 4,
      question:
        "Qual deve ser a primeira prioridade ao chegar ao local de um acidente?",
      options: [
        {
          key: "A",
          text: "Iniciar as compressões cardíacas imediatamente.",
        },
        {
          key: "B",
          text: "Transportar a vítima rapidamente para o hospital.",
        },
        {
          key: "C",
          text: "Garantir a segurança da cena e do socorrista.",
        },
      ],
      correctAnswer: "C",
      hint: "Antes de tocar na vítima, garanta que você não se tornará uma nova vítima.",
    },
    {
      id: 5,
      question: "No contexto de primeiros socorros, o que é biossegurança?",
      options: [
        {
          key: "A",
          text: "Técnica de sinalização de trânsito em vias públicas.",
        },
        {
          key: "B",
          text: "Conjunto de medidas e uso de EPIs para prevenir infecções e contaminações.",
        },
        {
          key: "C",
          text: "Uso obrigatório de extintores de incêndio no atendimento.",
        },
      ],
      correctAnswer: "B",
      hint: "Pense no uso de luvas descartáveis para evitar infecções e contato com fluidos.",
    },
    {
      id: 6,
      question:
        "Qual avaliação fundamental deve ser feita em uma vítima inconsciente para checar os sinais vitais imediatos?",
      options: [
        {
          key: "A",
          text: "Checar a presença de respiração e pulso central.",
        },
        {
          key: "B",
          text: "Aferir a pressão arterial com esfigmomanômetro.",
        },
        {
          key: "C",
          text: "Verificar o nível de glicose no sangue.",
        },
      ],
      correctAnswer: "A",
      hint: "Avalie se o peito da vítima se movimenta e se há batimento no pescoço.",
    },
    {
      id: 7,
      question:
        "No Suporte Básico de Vida (SBV), qual é a frequência recomendada de compressões torácicas na PCR em adultos?",
      options: [
        { key: "A", text: "50 a 60 compressões por minuto." },
        { key: "B", text: "100 a 120 compressões por minuto." },
        { key: "C", text: "150 a 180 compressões por minuto." },
      ],
      correctAnswer: "B",
      hint: "É um ritmo rápido, similar ao compasso da música 'Stayin' Alive'.",
    },
    {
      id: 8,
      question:
        "Qual equipamento portátil é utilizado em primeiros socorros para emitir choque elétrico em caso de PCR?",
      options: [
        { key: "A", text: "Oxímetro de pulso." },
        { key: "B", text: "Eletrocardiógrafo manual." },
        { key: "C", text: "DEA (Desfibrilador Externo Automático)." },
      ],
      correctAnswer: "C",
      hint: "Trata-se de um dispositivo automático acoplado ao tórax por pás adesivas.",
    },
    {
      id: 9,
      question: "O que significa a sigla OVACE?",
      options: [
        {
          key: "A",
          text: "Obstrução de Vasos e Artérias com Embolia.",
        },
        {
          key: "B",
          text: "Oclusão Venosa Aguda do Cérebro e Esôfago.",
        },
        {
          key: "C",
          text: "Obstrução de Vias Aéreas por Corpo Estranho.",
        },
      ],
      correctAnswer: "C",
      hint: "Esta sigla refere-se ao engasgo causado por um objeto ou alimento bloqueando a respiração.",
    },
    {
      id: 10,
      question:
        "Qual é a manobra indicada para desobstruir as vias aéreas de um adulto consciente com OVACE grave?",
      options: [
        {
          key: "A",
          text: "Oferecer água copiosamente para a vítima engolir.",
        },
        {
          key: "B",
          text: "Manobra de Heimlich (compressões abdominais).",
        },
        {
          key: "C",
          text: "Tapas contínuos nas costas com a vítima deitada.",
        },
      ],
      correctAnswer: "B",
      hint: "Envolve posicionar-se atrás da vítima e realizar compressões para dentro e para cima na região abdominal.",
    },
    {
      id: 11,
      question: "O que caracteriza uma hemorragia externa?",
      options: [
        {
          key: "A",
          text: "Sangramento com saída visível de sangue para o exterior do corpo.",
        },
        {
          key: "B",
          text: "Acúmulo de sangue dentro de uma cavidade interna do corpo.",
        },
        {
          key: "C",
          text: "Aumento temporário do fluxo sanguíneo sem rompimento de vasos.",
        },
      ],
      correctAnswer: "A",
      hint: "É o tipo de sangramento em que o sangue extravasa para fora do corpo através da pele.",
    },
    {
      id: 12,
      question:
        "Qual é a principal diferença entre hemorragia arterial e hemorragia venosa?",
      options: [
        {
          key: "A",
          text: "A arterial jorra em jatos ritmados de vermelho vivo; a venosa flui de forma contínua e vermelho-escura.",
        },
        {
          key: "B",
          text: "A arterial escorre lentamente; a venosa jorra em alta pressão.",
        },
        {
          key: "C",
          text: "Ambas apresentam a mesma cor e padrão de sangramento, mudando apenas a dor.",
        },
      ],
      correctAnswer: "A",
      hint: "Lembre-se de que o sangue arterial vem direto do coração empurrado com pressão a cada batimento.",
    },
    {
      id: 13,
      question:
        "Em que situação o uso do torniquete é indicado no atendimento pré-hospitalar?",
      options: [
        {
          key: "A",
          text: "Em hemorragias graves nas extremidades quando a pressão direta é insuficiente.",
        },
        {
          key: "B",
          text: "Exclusivamente em sangramentos localizados na cabeça ou pescoço.",
        },
        {
          key: "C",
          text: "Em qualquer pequeno corte ou arranhão nos membros.",
        },
      ],
      correctAnswer: "A",
      hint: "Trata-se de uma medida para conter sangramentos graves e abundantes nos braços ou pernas.",
    },
    {
      id: 14,
      question: "O que é uma fratura?",
      options: [
        {
          key: "A",
          text: "Uma lesão na pele sem atingir músculos ou ossos.",
        },
        {
          key: "B",
          text: "A perda da continuidade ou ruptura parcial/total de um osso.",
        },
        {
          key: "C",
          text: "O estiramento excessivo de um ligamento articular.",
        },
      ],
      correctAnswer: "B",
      hint: "Pense no dano ou quebra da estrutura óssea do corpo humano.",
    },
    {
      id: 15,
      question:
        "Qual é o procedimento adequado para o atendimento inicial de queimaduras de 1º grau ou para o auxílio durante uma crise convulsiva?",
      options: [
        {
          key: "A",
          text: "Aplicar manteiga ou creme dental na queimadura e colocar um objeto de metal na boca do paciente em convulsão.",
        },
        {
          key: "B",
          text: "Resfriar a queimadura com água corrente e proteger a cabeça da vítima na convulsão sem segurar seus movimentos.",
        },
        {
          key: "C",
          text: "Furar as bolhas da queimadura e imobilizar à força os membros da vítima em crise convulsiva.",
        },
      ],
      correctAnswer: "B",
      hint: "Para a queimadura use apenas água corrente limpa; na convulsão, proteja a cabeça contra choques e pancadas.",
    },
  ],
};

export const QUIZ_BRIGADA_INCENDIO: QuizConfig = {
  id: "brigada-incendio",
  title: "Questionário Técnico de Brigada de Incêndio",
  subtitle: "15 perguntas · Prevenção e Combate a Princípios de Incêndio",
  shortDescription:
    "Avaliação técnica sobre química do fogo, tetraedro, classes A/B/C, extintores portáteis, hidrantes, registros de recalque e sistemas de alarme.",
  badge: "Brigada de Incêndio",
  iconType: "fire",
  questions: [
    {
      id: 1,
      question:
        "Qual é o número de telefone de emergência nacional para acionamento imediato do Corpo de Bombeiros?",
      options: [
        { key: "A", text: "193" },
        { key: "B", text: "192" },
        { key: "C", text: "190" },
      ],
      correctAnswer: "A",
      hint: "Número padrão de três dígitos exclusivo para o Corpo de Bombeiros.",
    },
    {
      id: 2,
      question:
        "O fogo pode ser definido quimicamente e fisicamente como uma reação de:",
      options: [
        {
          key: "A",
          text: "Condensação rápida, que gera vapor aquecido.",
        },
        {
          key: "B",
          text: "Combustão exotérmica, que libera luz e calor.",
        },
        {
          key: "C",
          text: "Fusão endotérmica, que absorve calor do ambiente.",
        },
      ],
      correctAnswer: "B",
      hint: "Lembre-se de que a reação libera energia na forma de calor.",
    },
    {
      id: 3,
      question:
        "Qual é a definição correta de um brigadista de incêndio segundo as normas técnicas?",
      options: [
        {
          key: "A",
          text: "Pessoa capacitada para atuar na prevenção e no combate ao princípio de incêndio.",
        },
        {
          key: "B",
          text: "Membro militar concursado responsável pelo socorro público urbano.",
        },
        {
          key: "C",
          text: "Profissional encarregado apenas do monitoramento patrimonial noturno.",
        },
      ],
      correctAnswer: "A",
      hint: "Refira-se ao treinamento voltado à atuação em fases iniciais dentro da edificação.",
    },
    {
      id: 4,
      question:
        "Qual é a principal função e atribuição da brigada de incêndio em uma edificação?",
      options: [
        {
          key: "A",
          text: "Dimensionamento da estrutura metálica contra colapso e manutenção civil.",
        },
        {
          key: "B",
          text: "Ações preventivas e resposta a emergências até a chegada do socorro.",
        },
        {
          key: "C",
          text: "Venda e recarga de equipamentos de combate contra incêndio.",
        },
      ],
      correctAnswer: "B",
      hint: "Foque na preservação de vidas e mitigação imediata dentro do plano de emergência.",
    },
    {
      id: 5,
      question: "Quais são os 4 elementos que compõem o tetraedro do fogo?",
      options: [
        {
          key: "A",
          text: "Gás metano, fagulha, eletricidade e nitrogênio.",
        },
        {
          key: "B",
          text: "Combustível, comburente, calor e reação em cadeia.",
        },
        {
          key: "C",
          text: "Oxigênio, água, gás carbônico e pressão.",
        },
      ],
      correctAnswer: "B",
      hint: "Lembre-se das três partes do triângulo acrescidas da continuidade química.",
    },
    {
      id: 6,
      question: "Quais são os 4 métodos principais de extinção de incêndio?",
      options: [
        {
          key: "A",
          text: "Resfriamento, abafamento, isolamento e quebra da reação em cadeia.",
        },
        {
          key: "B",
          text: "Ventilação, exaustão, pressurização e sucção de fumaça.",
        },
        {
          key: "C",
          text: "Diluição, evaporação, solidificação e liquefação.",
        },
      ],
      correctAnswer: "A",
      hint: "Pense nas formas de remover calor, oxigênio, combustível ou interromper a reação.",
    },
    {
      id: 7,
      question:
        "Em relação ao estado físico, como podem ser classificados os combustíveis?",
      options: [
        { key: "A", text: "Sólidos, líquidos e gasosos." },
        { key: "B", text: "Voláteis, densos e compressíveis." },
        { key: "C", text: "Metálicos, plásticos e sintéticos." },
      ],
      correctAnswer: "A",
      hint: "Considere os três estados fundamentais em que a matéria se apresenta na natureza.",
    },
    {
      id: 8,
      question: "Quais são as três principais classes de incêndio (A, B e C)?",
      options: [
        {
          key: "A",
          text: "Classe A (sólidos), Classe B (líquidos inflamáveis) e Classe C (equipamentos energizados).",
        },
        {
          key: "B",
          text: "Classe A (óleos de cozinha), Classe B (papel) e Classe C (fogos de artifício).",
        },
        {
          key: "C",
          text: "Classe A (gases), Classe B (metais) e Classe C (materiais radioativos).",
        },
      ],
      correctAnswer: "A",
      hint: "Identifique a classe dos sólidos que deixam resíduos, dos líquidos e da corrente elétrica.",
    },
    {
      id: 9,
      question: "Qual é a função do extintor de incêndio portable?",
      options: [
        {
          key: "A",
          text: "Extinção automática e contínua de grandes sinistros sem intervenção.",
        },
        {
          key: "B",
          text: "Fornecimento contínuo e ilimitado de agente extintor em alta vazão.",
        },
        {
          key: "C",
          text: "Combatente imediato de princípios de incêndio de forma rápida.",
        },
      ],
      correctAnswer: "C",
      hint: "Lembre-se do foco no atendimento primário e imediato (princípio de incêndio).",
    },
    {
      id: 10,
      question:
        "Qual é a função principal do hidrante de parede no sistema fixo de combate a incêndio?",
      options: [
        {
          key: "A",
          text: "Realizar a drenagem automática de águas pluviais durante vazamentos.",
        },
        {
          key: "B",
          text: "Armazenar pó químico pressurizado para acionamento na caixa.",
        },
        {
          key: "C",
          text: "Fornecer água sob pressão e vazão para combate direto.",
        },
      ],
      correctAnswer: "C",
      hint: "Considere o uso de mangueiras de incêndio conectadas à reserva hidráulica.",
    },
    {
      id: 11,
      question:
        "Qual é a cor padronizada para a tubulação de combate a incêndio segundo as normas técnicas?",
      options: [
        { key: "A", text: "Amarela." },
        { key: "B", text: "Verde." },
        { key: "C", text: "Vermelha." },
      ],
      correctAnswer: "C",
      hint: "É a cor universal associada aos equipamentos de emergência contra incêndio.",
    },
    {
      id: 12,
      question:
        "Qual é a função do registro de recalque instalado no passeio público ou fachada?",
      options: [
        {
          key: "A",
          text: "Permitir que a viatura dos bombeiros alimente ou alimente-se do sistema.",
        },
        {
          key: "B",
          text: "Acionar a sirene geral em casos de vandalismo na calçada.",
        },
        {
          key: "C",
          text: "Bloquear a saída dos ocupantes durante a evacuação de emergência.",
        },
      ],
      correctAnswer: "A",
      hint: "Pense no ponto de conexão externo utilizado prioritariamente pela viatura militar.",
    },
    {
      id: 13,
      question:
        "Qual é a função da porta corta-fogo (PCF) na compartimentação de emergência?",
      options: [
        {
          key: "A",
          text: "Aumentar a ventilação natural dentro dos corredores e salas.",
        },
        {
          key: "B",
          text: "Reter o avanço do fogo e da fumaça, protegendo a rota de fuga.",
        },
        {
          key: "C",
          text: "Servir como saída de serviço para transporte de cargas pesadas.",
        },
      ],
      correctAnswer: "B",
      hint: "Foque na criação de uma barreira física contra o calor e gases nas escadas de emergência.",
    },
    {
      id: 14,
      question:
        "Qual é a função do acionador manual (botoeira) do sistema de alarme de incêndio?",
      options: [
        {
          key: "A",
          text: "Desligar automaticamente toda a iluminação de emergência.",
        },
        {
          key: "B",
          text: "Permitir que qualquer ocupante sinalize manualmente uma emergência.",
        },
        {
          key: "C",
          text: "Disparar água pressurizada diretamente sobre a pessoa que o acionou.",
        },
      ],
      correctAnswer: "B",
      hint: "Dispositivo instalado nas paredes para notificação visual/manual por parte das pessoas.",
    },
    {
      id: 15,
      question:
        "Qual é a função da central de alarme de incêndio em uma instalação?",
      options: [
        {
          key: "A",
          text: "Armazenar a água da reserva técnica de emergência.",
        },
        {
          key: "B",
          text: "Fornecer energia elétrica contínua para os elevadores sociais.",
        },
        {
          key: "C",
          text: "Receber os sinais de detectores/acionadores e comandar os avisadores.",
        },
      ],
      correctAnswer: "C",
      hint: "Considere o 'cérebro' do sistema, responsável por identificar o setor afetado e disparar o alerta.",
    },
  ],
};

export const AVAILABLE_QUIZZES: QuizConfig[] = [
  QUIZ_PRIMEIROS_SOCORROS,
  QUIZ_BRIGADA_INCENDIO,
];

export function getQuizById(id: string): QuizConfig {
  const found = AVAILABLE_QUIZZES.find((q) => q.id === id);
  return found || QUIZ_PRIMEIROS_SOCORROS;
}

// Aliases para compatibilidade retroativa
export const QUIZ_TITLE = QUIZ_PRIMEIROS_SOCORROS.title;
export const QUIZ_SUBTITLE = QUIZ_PRIMEIROS_SOCORROS.subtitle;
export const QUIZ_QUESTIONS = QUIZ_PRIMEIROS_SOCORROS.questions;
