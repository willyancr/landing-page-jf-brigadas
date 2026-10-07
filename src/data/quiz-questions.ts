export type OptionKey = "A" | "B" | "C" | "D";

export interface Option {
  key: OptionKey;
  text: string;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
  correctAnswer: OptionKey;
  hint: string;
}

export type QuizId =
  | "primeiros-socorros"
  | "brigada-incendio"
  | "sbv"
  | "trauma-aph";

export interface QuizConfig {
  id: QuizId;
  title: string;
  subtitle: string;
  shortDescription: string;
  badge: string;
  iconType: "first-aid" | "fire" | "heart-pulse" | "trauma";
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

export const QUIZ_SBV: QuizConfig = {
  id: "sbv",
  title: "Quiz de Suporte Básico de Vida (SBV)",
  subtitle: "10 perguntas · Ressuscitação Cardiopulmonar & DEA",
  shortDescription:
    "Avaliação focada em protocolos de SBV, relação 30:2, frequência e profundidade das compressões, ventilações e operação segura do DEA.",
  badge: "Suporte Básico de Vida",
  iconType: "heart-pulse",
  questions: [
    {
      id: 1,
      question:
        "Qual é a relação correta de compressões e ventilações em um ciclo de RCP para um adulto em parada cardiorrespiratória por um único socorrista?",
      options: [
        { key: "A", text: "50 compressões para 2 ventilações" },
        { key: "B", text: "30 compressões para 2 ventilações" },
        { key: "C", text: "15 compressões para 2 ventilações" },
        { key: "D", text: "30 compressões para 5 ventilações" },
      ],
      correctAnswer: "B",
      hint: "Pense no número padrão de compressões contadas antes de realizar 2 insuflações.",
    },
    {
      id: 2,
      question:
        "Qual é a frequência recomendada para as compressões torácicas por minuto durante a RCP em adultos?",
      options: [
        { key: "A", text: "100 a 120 compressões por minuto" },
        { key: "B", text: "130 a 150 compressões por minuto" },
        { key: "C", text: "80 a 100 compressões por minuto" },
        { key: "D", text: "60 a 80 compressões por minuto" },
      ],
      correctAnswer: "A",
      hint: "Lembre-se do ritmo da famosa música 'Stayin' Alive' dos Bee Gees.",
    },
    {
      id: 3,
      question:
        "Qual deve ser a profundidade adequada das compressões torácicas em um adulto durante a RCP?",
      options: [
        { key: "A", text: "Cerca de 2 a 3 cm" },
        { key: "B", text: "Qualquer profundidade, desde que seja rápida" },
        { key: "C", text: "Pelo menos 5 cm, sem ultrapassar 6 cm" },
        { key: "D", text: "Cerca de 8 a 10 cm" },
      ],
      correctAnswer: "C",
      hint: "Corresponde a aproximadamente 2 polegadas de depressão no tórax do paciente.",
    },
    {
      id: 4,
      question:
        "O que deve ser feito após cada compressão torácica para garantir a eficácia do procedimento?",
      options: [
        { key: "A", text: "Aguardar 5 segundos antes da próxima compressão" },
        { key: "B", text: "Manter a pressão no tórax sem aliviar totalmente" },
        { key: "C", text: "Permitir o retorno total do tórax à posição original" },
        { key: "D", text: "Remover completamente as mãos do tórax da vítima" },
      ],
      correctAnswer: "C",
      hint: "O coração precisa ter espaço para se reencher de sangue antes de ser comprimido novamente.",
    },
    {
      id: 5,
      question:
        "Ao realizar as ventilações de resgate em um adulto, qual deve ser a duração aproximada de cada ventilação?",
      options: [
        { key: "A", text: "O máximo de tempo que o socorrista conseguir soprar" },
        { key: "B", text: "Cerca de 3 segundos" },
        { key: "C", text: "Cerca de 1 segundo" },
        { key: "D", text: "Cerca de 5 segundos" },
      ],
      correctAnswer: "C",
      hint: "É o tempo suficiente para observar o tórax do paciente se elevação de forma suave.",
    },
    {
      id: 6,
      question:
        "Qual é a primeira ação que o socorrista deve tomar ao encontrar uma pessoa desacordada?",
      options: [
        { key: "A", text: "Iniciar imediatamente as compressões torácicas" },
        { key: "B", text: "Realizar duas ventilações de resgate" },
        { key: "C", text: "Aplicar o Desfibrilador Externo Automático (DEA)" },
        { key: "D", text: "Verificar a segurança do local" },
      ],
      correctAnswer: "D",
      hint: "Sua própria integridade física deve vir sempre em primeiro lugar antes de prestar socorro.",
    },
    {
      id: 7,
      question:
        "Qual é o local correto para posicionar as mãos no tórax do adulto para realizar as compressões?",
      options: [
        { key: "A", text: "Na parte superior do osso esterno, próximo ao pescoço" },
        { key: "B", text: "Na metade inferior do osso esterno, no centro do tórax" },
        { key: "C", text: "Na ponta inferior do osso esterno (processo xifoide)" },
        { key: "D", text: "No lado esquerdo do tórax, diretamente sobre o coração" },
      ],
      correctAnswer: "B",
      hint: "Busque o centro da linha intermamária na metade inferior do osso do peito.",
    },
    {
      id: 8,
      question:
        "Assim que um Desfibrilador Externo Automático (DEA) chega ao local da emergência, qual é o primeiro passo a ser dado?",
      options: [
        { key: "A", text: "Ligar o DEA" },
        { key: "B", text: "Colocar as pás no tórax antes de ligar o aparelho" },
        { key: "C", text: "Administrar duas ventilações de resgate" },
        { key: "D", text: "Pressionar o botão de choque imediatamente" },
      ],
      correctAnswer: "A",
      hint: "Sem este passo inicial, o equipamento não poderá fornecer as instruções sonoras e visuais.",
    },
    {
      id: 9,
      question:
        "Qual é o tempo máximo que um socorrista deve gastar para checar a respiração e o pulso da vítima?",
      options: [
        { key: "A", text: "Cerca de 1 minuto" },
        { key: "B", text: "No máximo 5 segundos" },
        { key: "C", text: "Exatamente 20 segundos" },
        { key: "D", text: "Entre 5 e 10 segundos" },
      ],
      correctAnswer: "D",
      hint: "Não deve ultrapassar dez segundos para que as compressões sejam iniciadas rapidamente.",
    },
    {
      id: 10,
      question:
        "Caso haja dois socorristas treinados no local, de quanto em quanto tempo eles devem alternar a função de compressor?",
      options: [
        { key: "A", text: "A cada 5 ciclos de RCP (cerca de 2 minutos)" },
        { key: "B", text: "A cada 1 ciclo de RCP (cerca de 30 segundos)" },
        { key: "C", text: "A cada 10 ciclos de RCP (cerca de 4 minutos)" },
        { key: "D", text: "Apenas quando o primeiro socorrista se sentir totalmente exausto" },
      ],
      correctAnswer: "A",
      hint: "A troca costuma coincidir com o momento em que o DEA faz a reavaliação do ritmo cardíaco.",
    },
  ],
};

export const QUIZ_TRAUMA_APH: QuizConfig = {
  id: "trauma-aph",
  title: "Prova de Trauma no Atendimento Pré-Hospitalar (APH)",
  subtitle: "17 perguntas · Protocolo XABCDE & Avaliação Sistematizada",
  shortDescription:
    "Avaliação detalhada em trauma abordando mnemônico XABCDE, RMC, Tríade de Cushing, Tríade Letal, Escala de Glasgow, SAMPLA e AVDI.",
  badge: "Trauma no APH",
  iconType: "trauma",
  questions: [
    {
      id: 1,
      question:
        "No protocolo de atendimento inicial ao trauma (XABCDE), o que representa a letra X?",
      options: [
        {
          key: "A",
          text: "Controle de hemorragias exsanguinantes externas",
        },
        {
          key: "B",
          text: "Exame físico detalhado das extremidades",
        },
        {
          key: "C",
          text: "Raio-X imediato no local do acidente",
        },
      ],
      correctAnswer: "A",
      hint: "Refere-se ao controle imediato de sangramentos graves e volumosos.",
    },
    {
      id: 2,
      question: "Na sigla XABCDE, o que indica a letra A?",
      options: [
        {
          key: "A",
          text: "Anamnese completa da vítima de trauma",
        },
        {
          key: "B",
          text: "Avaliação da dor e analgesia precoce",
        },
        {
          key: "C",
          text: "Vias aéreas e controle da coluna cervical",
        },
      ],
      correctAnswer: "C",
      hint: "Envolve garantir que o ar passe e proteger a região do pescoço.",
    },
    {
      id: 3,
      question:
        "Qual é a avaliação principal realizada na etapa B do protocolo XABCDE?",
      options: [
        {
          key: "A",
          text: "Batimentos cardíacos e aferição de pressão arterial",
        },
        {
          key: "B",
          text: "Boa ventilação e respiração",
        },
        {
          key: "C",
          text: "Busca por fraturas no esqueleto axial",
        },
      ],
      correctAnswer: "B",
      hint: "Avalia o funcionamento adequado dos pulmões e a troca gasosa.",
    },
    {
      id: 4,
      question:
        "O que representa a letra C na avaliação do paciente traumatizado?",
      options: [
        {
          key: "A",
          text: "Circulação, controle de hemorragias internas e perfusão",
        },
        {
          key: "B",
          text: "Checagem do estado de consciência e pupilas",
        },
        {
          key: "C",
          text: "Coleta de exames laboratoriais na cena",
        },
      ],
      correctAnswer: "A",
      hint: "Trata do fluxo sanguíneo, pulsos e sinais de choque.",
    },
    {
      id: 5,
      question:
        "Qual é o objetivo principal da etapa D no protocolo XABCDE?",
      options: [
        {
          key: "A",
          text: "Avaliação do déficit neurológico",
        },
        {
          key: "B",
          text: "Descompressão torácica de emergência",
        },
        {
          key: "C",
          text: "Desinfecção e curativo de ferimentos",
        },
      ],
      correctAnswer: "A",
      hint: "Envolve testar o nível de consciência e respostas cerebrais do paciente.",
    },
    {
      id: 6,
      question:
        "O que abrange a letra E no atendimento sistematizado ao trauma?",
      options: [
        {
          key: "A",
          text: "Encaminhamento rápido para o centro cirúrgico",
        },
        {
          key: "B",
          text: "Eletrocardiograma e monitorização contínua",
        },
        {
          key: "C",
          text: "Exposição do corpo e controle do ambiente (prevenção da hipotermia)",
        },
      ],
      correctAnswer: "C",
      hint: "Envolve retirar roupas para examinar e prevenir a perda de calor corporal.",
    },
    {
      id: 7,
      question:
        "No APH, qual é a prioridade absoluta de atendimento ao abordar uma vítima de trauma grave?",
      options: [
        {
          key: "A",
          text: "Garantir a segurança do local e da equipe de socorro",
        },
        {
          key: "B",
          text: "Transportar o paciente o mais rápido possível",
        },
        {
          key: "C",
          text: "Iniciar a ressuscitação cardiopulmonar imediatamente",
        },
      ],
      correctAnswer: "A",
      hint: "Antes de encostar na vítima, o socorrista deve garantir a sua própria integridade física.",
    },
    {
      id: 8,
      question:
        "Quais são os números de emergência corretos para acionar o Corpo de Bombeiros e o SAMU, respectivamente?",
      options: [
        { key: "A", text: "190 e 193" },
        { key: "B", text: "192 e 199" },
        { key: "C", text: "193 e 192" },
      ],
      correctAnswer: "C",
      hint: "Os Bombeiros atendem pelo dígito final 3 e o SAMU pelo dígito final 2.",
    },
    {
      id: 9,
      question:
        "O que significa a sigla RMC no contexto de trauma pré-hospitalar?",
      options: [
        {
          key: "A",
          text: "Ressuscitação Médica Contínua",
        },
        {
          key: "B",
          text: "Restrição de Mobilidade da Coluna",
        },
        {
          key: "C",
          text: "Redução Masculina de Choque",
        },
      ],
      correctAnswer: "B",
      hint: "Termo moderno que substituiu o conceito rígido de imobilização vertebral.",
    },
    {
      id: 10,
      question:
        "A Tríade de Cushing indica aumento da pressão intracraniana (PIC) e é composta por quais sinais?",
      options: [
        {
          key: "A",
          text: "Febre, rigidez de nuca e miose",
        },
        {
          key: "B",
          text: "Hipertensão, bradicardia e respiração irregular",
        },
        {
          key: "C",
          text: "Hipotensão, taquicardia e taquipneia",
        },
      ],
      correctAnswer: "B",
      hint: "Caracteriza-se por pressão alta aliada a batimentos cardíacos lentos.",
    },
    {
      id: 11,
      question:
        "Quais são os três componentes que formam a Tríade Letal do Trauma?",
      options: [
        {
          key: "A",
          text: "Hipotensão, taquicardia e perda de consciência",
        },
        {
          key: "B",
          text: "Hipertermia, hipertensão e dor intensa",
        },
        {
          key: "C",
          text: "Hipotermia, coagulopatia e acidose metabólica",
        },
      ],
      correctAnswer: "C",
      hint: "Abrange a queda de temperatura, sangue com dificuldade de coagular e desequilíbrio do pH.",
    },
    {
      id: 12,
      question:
        "A permanência do paciente na prancha rígida deve ser evitada sempre que possível, sendo recomendado um tempo máximo de:",
      options: [
        { key: "A", text: "Menos de 30 a 45 minutos" },
        { key: "B", text: "Até 4 horas consecutivas" },
        { key: "C", text: "Mais de 2 horas" },
      ],
      correctAnswer: "A",
      hint: "A prancha deve ser usada pelo menor tempo possível, preferencialmente menos de três quartos de hora.",
    },
    {
      id: 13,
      question:
        "Qual é a pontuação mínima e máxima na Escala de Coma de Glasgow (atualizada com reatividade pupilar)?",
      options: [
        { key: "A", text: "Mínima de 3 e máxima de 20" },
        { key: "B", text: "Mínima de 0 e máxima de 10" },
        { key: "C", text: "Mínima de 1 e máxima de 15" },
      ],
      correctAnswer: "C",
      hint: "O valor máximo de pontuação perfeita é 15 e a nota mínima pós-atualização pupilar pode chegar a 1.",
    },
    {
      id: 14,
      question:
        "No histórico obtido durante a avaliação do trauma, o que significa o 'M' da sigla SAMPLA?",
      options: [
        { key: "A", text: "Motivo do acidente" },
        { key: "B", text: "Medicamentos em uso" },
        { key: "C", text: "Moléstias neurológicas prévias" },
      ],
      correctAnswer: "B",
      hint: "Trata-se do levantamento de remédios ou drogas consumidas regularmente pelo paciente.",
    },
    {
      id: 15,
      question: "Na sigla SAMPLA, o que avalia a letra 'L'?",
      options: [
        {
          key: "A",
          text: "Líquidos e alimentos ingeridos (última refeição)",
        },
        {
          key: "B",
          text: "Língua e vias aéreas superiores",
        },
        {
          key: "C",
          text: "Lesões corporais aparentes",
        },
      ],
      correctAnswer: "A",
      hint: "Verifica o horário e conteúdo da última ingestão alimentar da vítima.",
    },
    {
      id: 16,
      question:
        "Para que serve a escala AVDI utilizada na avaliação do estado de consciência no APH?",
      options: [
        {
          key: "A",
          text: "Medir a quantidade de perda sanguínea na cena",
        },
        {
          key: "B",
          text: "Determinar a pressão sistólica e diastólica",
        },
        {
          key: "C",
          text: "Classificar rapidamente o nível de resposta do paciente aos estímulos",
        },
      ],
      correctAnswer: "C",
      hint: "Trata-se de uma ferramenta ágil para testar se a vítima responde a estímulos verbais ou dolorosos.",
    },
    {
      id: 17,
      question:
        "O que indica a letra 'D' na aplicação da escala neurológica AVDI?",
      options: [
        { key: "A", text: "Disfunção cardíaca grave" },
        { key: "B", text: "Dificuldade respiratória aguda" },
        { key: "C", text: "Resposta ao estímulo de Dor (doloroso)" },
      ],
      correctAnswer: "C",
      hint: "Refere-se ao tipo de estímulo aplicado quando a pessoa não reage à voz humana.",
    },
  ],
};

export const AVAILABLE_QUIZZES: QuizConfig[] = [
  QUIZ_PRIMEIROS_SOCORROS,
  QUIZ_BRIGADA_INCENDIO,
  QUIZ_SBV,
  QUIZ_TRAUMA_APH,
];

export function getQuizById(id: string): QuizConfig {
  const found = AVAILABLE_QUIZZES.find((q) => q.id === id);
  return found || QUIZ_PRIMEIROS_SOCORROS;
}

// Aliases para compatibilidade retroativa
export const QUIZ_TITLE = QUIZ_PRIMEIROS_SOCORROS.title;
export const QUIZ_SUBTITLE = QUIZ_PRIMEIROS_SOCORROS.subtitle;
export const QUIZ_QUESTIONS = QUIZ_PRIMEIROS_SOCORROS.questions;
