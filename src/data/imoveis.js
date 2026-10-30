const isRawRepoIndex = typeof document !== 'undefined'
  && !!document.querySelector('link[href*="src/styles/main.css"]')
  && !document.querySelector('script[src*="@vite"]');

const BASE = isRawRepoIndex ? './public/' : './';

export const imoveis = [
  {
    id: "KMY-001",
    titulo: "Hotel Boutique Frente ao Mar — 48 Suítes Luxo",
    subtitulo: "Operação hoteleira consolidada com alta rentabilidade",
    categoria: "hoteis",
    categoriaNome: "Hotéis & Resorts",
    finalidade: "venda",
    finalidadeNome: "Venda de Ativo",
    cidade: "São Sebastião",
    uf: "SP",
    localizacao: "Praia de Juquehy, Litoral Norte — SP",
    preco: 38500000,
    precoFormatado: "R$ 38.500.000",
    areaTotal: "6.200 m²",
    areaConstruida: "3.800 m²",
    suites: 48,
    vagas: 60,
    destaques: [
      "Piscina de borda infinita debruçada sobre o mar",
      "Restaurante gastronômico contemporâneo e bar de praia",
      "Spa completo com saunas seca e úmida",
      "Taxa média de ocupação anual: 78%",
      "EBITDA anual auditado e governança estruturada"
    ],
    descricao: "Excepcional oportunidade de investimento em hospitalidade de alto luxo no litoral mais valorizado de São Paulo. O complexo hoteleiro conta com 48 suítes decoradas em padrão internacional, gastronomia de autor e infraestrutura completa para casamentos corporativos e turismo premium de alto poder aquisitivo.",
    imagem: `${BASE}assets/images/imovel_1_hotel.jpg`,
    status: "Exclusividade KMY Prime",
    tags: ["Pé na areia", "Boutique", "Alta Rentabilidade", "Spa"]
  },
  {
    id: "KMY-002",
    titulo: "Resort Eco-Luxo Frente Mar — 110 Bangalôs Privativos",
    subtitulo: "Complexo paradisíaco integrado à natureza com heliponto",
    categoria: "hoteis",
    categoriaNome: "Hotéis & Resorts",
    finalidade: "venda",
    finalidadeNome: "Venda ou Arrendamento",
    cidade: "Porto Seguro / Trancoso",
    uf: "BA",
    localizacao: "Costa do Descobrimento — Trancoso / BA",
    preco: 95000000,
    precoFormatado: "R$ 95.000.000",
    areaTotal: "85.000 m²",
    areaConstruida: "14.200 m²",
    suites: 110,
    vagas: 150,
    destaques: [
      "Faixa de 400m de praia semi-exclusiva",
      "Parque aquático com piscinas orgânicas interconectadas",
      "Heliponto homologado para pousos diurnos e noturnos",
      "Centro de eventos e convenções para até 500 pessoas",
      "Arrendamento disponível sob análise de grupo hoteleiro"
    ],
    descricao: "Um dos ativos hoteleiros mais icônicos do Brasil. Estrutura eco-friendly com certificação verde, autossuficiência hídrica parcial, spa de renome internacional e ampla cartela de clientes fidelizados de altíssimo padrão nacional e internacional.",
    imagem: `${BASE}assets/images/imovel_2_resort.jpg`,
    status: "Ativo Triple A",
    tags: ["Heliponto", "Trancoso", "Eco-Luxo", "Arrendamento Disponível"]
  },
  {
    id: "KMY-003",
    titulo: "Pousada Alpina Exclusiva — 18 Chalés Suíços com Lareira",
    subtitulo: "Charme da serra com bosque de araucárias nativas",
    categoria: "pousadas",
    categoriaNome: "Pousadas",
    finalidade: "arrendamento",
    finalidadeNome: "Arrendamento Comercial",
    cidade: "Campos do Jordão",
    uf: "SP",
    localizacao: "Alto do Capivari — Campos do Jordão / SP",
    preco: 65000,
    precoFormatado: "R$ 65.000 / mês",
    precoInfo: "Contrato de arrendamento de 10 anos",
    areaTotal: "12.000 m²",
    areaConstruida: "1.950 m²",
    suites: 18,
    vagas: 25,
    destaques: [
      "Chalés térmicos com piso aquecido e banheira de hidromassagem",
      "Adega subterrânea climatizada para 1.500 garrafas",
      "Restaurante de fondue premiado e bistrô bistrô de montanha",
      "Totalmente mobiliada e operando a pleno vapor",
      "Reputação 9.8 nas principais plataformas de reserva"
    ],
    descricao: "Arrendamento de pousada boutique tradicional no ponto mais nobre de Campos do Jordão. Empreendimento 100% equipado, com alta margem líquida durante as temporadas de inverno e turismo de casais ao longo do ano.",
    imagem: `${BASE}assets/images/imovel_3_pousada.jpg`,
    status: "Oportunidade de Arrendamento",
    tags: ["Serra da Mantiqueira", "Lareira & Hidro", "Adega Climatizada"]
  },
  {
    id: "KMY-004",
    titulo: "Pousada Colonial Histórica — Centro de Paraty",
    subtitulo: "Patrimônio arquitetônico restaurado com spa e piscina de pedra",
    categoria: "pousadas",
    categoriaNome: "Pousadas",
    finalidade: "venda",
    finalidadeNome: "Venda de Ativo",
    cidade: "Paraty",
    uf: "RJ",
    localizacao: "Centro Histórico Tombado — Paraty / RJ",
    preco: 22000000,
    precoFormatado: "R$ 22.000.000",
    areaTotal: "2.400 m²",
    areaConstruida: "1.750 m²",
    suites: 22,
    vagas: 0,
    destaques: [
      "Casarão secular restaurado com rigor histórico e conforto moderno",
      "Pátio interno ajardinado com piscina de pedra natural iluminada",
      "Acervo de mobiliário de época e obras de arte integradas",
      "Fluxo constante de turistas qualificados da FLIP e festivais",
      "Possibilidade de expansão com imóvel anexo"
    ],
    descricao: "Verdadeira jóia no centro histórico de Paraty. Combina o charme barroco e a elegância colonial com suítes climatizadas de padrão internacional. Perfeito para investidores que prezam por patrimônios culturais de valor perene.",
    imagem: `${BASE}assets/images/imovel_4_pousada.jpg`,
    status: "Patrimônio Tombado",
    tags: ["Centro Histórico", "Jóia Colonial", "Alta Visibilidade"]
  },
  {
    id: "KMY-005",
    titulo: "Hospital Geral e Centro Cirúrgico Especializado",
    subtitulo: "Edificação hospitalar Triple A com 12 salas cirúrgicas",
    categoria: "hospitais",
    categoriaNome: "Hospitais & Centros Médicos",
    finalidade: "venda",
    finalidadeNome: "Venda de Ativo Hospitalar",
    cidade: "Campinas / Valinhos",
    uf: "SP",
    localizacao: "Eixo Rodoviário D. Pedro / Anhanguera — SP",
    preco: 145000000,
    precoFormatado: "R$ 145.000.000",
    areaTotal: "18.500 m²",
    areaConstruida: "16.800 m²",
    suites: 90,
    vagas: 220,
    destaques: [
      "12 salas cirúrgicas inteligentes com fluxo laminar",
      "90 leitos de internação sendo 24 de UTI geral e coronariana",
      "Central de imagem completa (Ressonância, Tomografia, Hemodinâmica)",
      "Heliponto para transporte aeromédico homologado",
      "Normas ANVISA RDC-50 100% atendidas"
    ],
    descricao: "Estrutura hospitalar moderna, concebida para atender operadoras de saúde, redes de medicina diagnóstica ou fundos imobiliários com contratos atípicos (SLB - Sale & Leaseback). Pronto para operação imediata.",
    imagem: `${BASE}assets/images/imovel_5_hospital.jpg`,
    status: "Ativo Institucional de Saúde",
    tags: ["Centro Cirúrgico", "UTI Completa", "ANVISA RDC-50", "Sale & Leaseback"]
  },
  {
    id: "KMY-006",
    titulo: "Laje Corporativa Triple A — 1.250 m² na Av. Faria Lima",
    subtitulo: "Andar inteiro de altíssimo padrão no epicentro financeiro",
    categoria: "lajes",
    categoriaNome: "Lajes Corporativas",
    finalidade: "venda",
    finalidadeNome: "Venda ou Locação",
    cidade: "São Paulo",
    uf: "SP",
    localizacao: "Av. Brigadeiro Faria Lima, Itaim Bibi — São Paulo / SP",
    preco: 52000000,
    precoFormatado: "R$ 52.000.000",
    precoInfo: "Opção de locação: R$ 380/m²",
    areaTotal: "1.250 m² privativos",
    areaConstruida: "1.250 m²",
    suites: 0,
    vagas: 38,
    destaques: [
      "Certificação LEED Platinum e Well Health-Safety",
      "Pé-direito livre de 3,10m com piso elevado de alta capacidade",
      "Fachada unitizada com vidros de controle solar térmico e acústico",
      "Gerador com atendimento para 100% da área privativa",
      "Elevadores inteligentes com chamada antecipada"
    ],
    descricao: "Espaço corporativo de prestígio no endereço mais valorizado da América Latina. Configuração em vão livre propícia para sedes de bancos de investimento, private equity, fintechs e multinacionais que exigem máxima representatividade institucional.",
    imagem: `${BASE}assets/images/imovel_6_laje.jpg`,
    status: "Triple A — Faria Lima",
    tags: ["LEED Platinum", "Faria Lima", "Vão Livre", "Edifício Ícone"]
  },
  {
    id: "KMY-007",
    titulo: "Andar Corporativo Panorâmico — 720 m² em Alphaville",
    subtitulo: "Espaço pronto com vista privilegiada para o verde",
    categoria: "lajes",
    categoriaNome: "Lajes Corporativas",
    finalidade: "locacao",
    finalidadeNome: "Locação Corporativa",
    cidade: "Barueri / Alphaville",
    uf: "SP",
    localizacao: "Alameda Rio Negro, Alphaville — Barueri / SP",
    preco: 68000,
    precoFormatado: "R$ 68.000 / mês",
    precoInfo: "Condomínio e IPTU sob consulta",
    areaTotal: "720 m²",
    areaConstruida: "720 m²",
    suites: 0,
    vagas: 24,
    destaques: [
      "Totalmente cabeado com ar-condicionado VRF inverter",
      "4 salas de reunião privativas em vidro acústico e auditório no térreo",
      "Copa executiva e lounge de descanso mobiliados",
      "Próximo ao Shopping Iguatemi Alphaville e centro comercial",
      "Fácil acesso pela Rodovia Castello Branco"
    ],
    descricao: "Laje corporativa pronta para ocupação imediata (plug & play). Design moderno com forro acústico amadeirado, piso vinílico de alta densidade e vista panorâmica para o horizonte e a área verde de Alphaville.",
    imagem: `${BASE}assets/images/imovel_7_laje.jpg`,
    status: "Pronto para Ocupação (Plug & Play)",
    tags: ["Alphaville", "Plug & Play", "VRF Inverter", "Vista Panorâmica"]
  },
  {
    id: "KMY-008",
    titulo: "Flagship Store de Luxo — 380 m² na Rua Oscar Freire",
    subtitulo: "Ponto comercial de esquina mais cobiçado dos Jardins",
    categoria: "lojas",
    categoriaNome: "Lojas & Pontos Comerciais",
    finalidade: "venda",
    finalidadeNome: "Venda do Ponto / Imóvel",
    cidade: "São Paulo",
    uf: "SP",
    localizacao: "Rua Oscar Freire, Jardins — São Paulo / SP",
    preco: 28000000,
    precoFormatado: "R$ 28.000.000",
    precoInfo: "Disponível também para locação: R$ 130.000/mês",
    areaTotal: "380 m²",
    areaConstruida: "380 m² em 2 pavimentos",
    suites: 0,
    vagas: 4,
    destaques: [
      "Testada com 14 metros de vitrine em vidro temperado e moldura dourada",
      "Piso em mármore travertino romano e iluminação cênica integrada",
      "Fluxo de pedestres de altíssimo ticket médio dos Jardins",
      "Subsolo preparado para estoque seguro e sala de atendimento VIP",
      "Imóvel desocupado para implantação de marca premium"
    ],
    descricao: "Endereço lendário no quadrilátero do luxo paulistano. Perfeito para joalherias, grifes de alta costura, galerias de arte ou marcas globais que buscam fixar presença na rua mais charmosa do país.",
    imagem: `${BASE}assets/images/imovel_8_loja.jpg`,
    status: "Ponto Comercial Ícone",
    tags: ["Oscar Freire", "Jardins", "Vitrine 14m", "Travertino Romano"]
  },
  {
    id: "KMY-009",
    titulo: "Residencial Parque das Acácias — Lote com 48 Aptos MCMV",
    subtitulo: "Portfólio de unidades residenciais prontas para locação",
    categoria: "mcmv",
    categoriaNome: "Aptos MCMV (Investidor)",
    finalidade: "venda",
    finalidadeNome: "Venda em Bloco (Investidor)",
    cidade: "São Paulo",
    uf: "SP",
    localizacao: "São Mateus / Itaquera, Zona Leste — São Paulo / SP",
    preco: 10800000,
    precoFormatado: "R$ 10.800.000",
    precoInfo: "Equivalente a R$ 225.000 por unidade",
    areaTotal: "2.800 m² privativos totais",
    areaConstruida: "3.400 m²",
    suites: 0,
    vagas: 48,
    destaques: [
      "48 apartamentos de 2 dormitórios (48 m² a 52 m²) com varanda",
      "Condomínio com portaria 24h, quadra, playground e salão gourmet",
      "Yield estimado de locação: 0,68% a.m. livre de vacância",
      "Localizado a 800m de futura estação de monotrilho",
      "Documentação e habite-se 100% aprovados na CEF"
    ],
    descricao: "Excelente oportunidade para fundos de renda residencial, incorporadores ou investidores patrimoniais. Aquisição em bloco de unidades prontas dentro do programa Minha Casa Minha Vida (Faixa 2/3), garantindo liquidez e retorno locativo constante.",
    imagem: `${BASE}assets/images/imovel_9_mcmv.jpg`,
    status: "Venda em Lote para Investidor",
    tags: ["MCMV Faixa 3", "Alta Liquidez", "Renda Locativa", "Habite-se CEF"]
  },
  {
    id: "KMY-010",
    titulo: "Shopping Center Regional — 85 Operações e Cinema Multiplex",
    subtitulo: "Ativo de varejo consolidado com 100% de ABL alugada",
    categoria: "shopping",
    categoriaNome: "Shoppings & Malls",
    finalidade: "venda",
    finalidadeNome: "Venda de Ativo de Varejo",
    cidade: "Ribeirão Preto",
    uf: "SP",
    localizacao: "Região Metropolitana de Ribeirão Preto / SP",
    preco: 185000000,
    precoFormatado: "R$ 185.000.000",
    precoInfo: "Cap Rate projetado: 8,7% a.a.",
    areaTotal: "42.000 m² de terreno",
    areaConstruida: "26.500 m² (18.200 m² ABL)",
    suites: 0,
    vagas: 980,
    destaques: [
      "85 lojas satélites, 4 lojas âncoras e praça de alimentação com 24 operações",
      "Complexo de cinema com 5 salas stadium (2 3D)",
      "Estacionamento automatizado com 980 vagas cobertas",
      "Fluxo mensal auditado superior a 380 mil visitantes",
      "Contratos de locação com garantia sólida e repasse de condomínio"
    ],
    descricao: "Ativo de renda de primeira linha no polo econômico do agronegócio paulista. Shopping center com domínio regional absoluto em sua área de influência primária, proporcionando distribuição de proventos estável e potencial de expansão imobiliária.",
    imagem: `${BASE}assets/images/imovel_10_shopping.jpg`,
    status: "Ativo Institucional de Renda",
    tags: ["Cap Rate 8.7%", "85 Lojas", "Cinema Multiplex", "Ribeirão Preto"]
  }
];

export const categoriasList = [
  { id: "todos", nome: "Todos os Ativos", icone: "layout-grid", total: 10 },
  { id: "hoteis", nome: "Hotéis & Resorts", icone: "hotel", total: 2 },
  { id: "pousadas", nome: "Pousadas", icone: "palmtree", total: 2 },
  { id: "hospitais", nome: "Hospitais & Clínicas", icone: "stethoscope", total: 1 },
  { id: "lajes", nome: "Lajes Corporativas", icone: "building-2", total: 2 },
  { id: "lojas", nome: "Lojas & Varejo", icone: "store", total: 1 },
  { id: "mcmv", nome: "Aptos MCMV", icone: "home", total: 1 },
  { id: "shopping", nome: "Shoppings & Malls", icone: "shopping-bag", total: 1 }
];

export const decoracaoEtapas = [
  {
    num: "01",
    titulo: "Briefing do Projeto",
    desc: "Alinhamento aprofundado dos desejos, rotina, estilo de vida e metas de investimento do cliente."
  },
  {
    num: "02",
    titulo: "Estudo Conceitual",
    desc: "Criação dos primeiros croquis, moodboard de sensações, paleta cromática e layout espacial."
  },
  {
    num: "03",
    titulo: "Anteprojeto & Executivo",
    desc: "Plantas de demolição/construção, elétrica, iluminação cênica, gesso, hidráulica e marcenaria detalhada."
  },
  {
    num: "04",
    titulo: "Orçamento & Memorial",
    desc: "Planilha orçamentária rigorosa, especificação técnica de revestimentos, mármores e louças premium."
  },
  {
    num: "05",
    titulo: "Acompanhamento da Obra",
    desc: "Supervisão técnica contínua no canteiro, assegurando conformidade de cronograma e acabamentos."
  },
  {
    num: "06",
    titulo: "Produção & Montagem",
    desc: "Curadoria de arte, escolha de mobiliário assinado, tapetes, cortinas, iluminação e adornos exclusivos."
  },
  {
    num: "07",
    titulo: "Pós-Entrega & Garantia",
    desc: "Checklist final de entrega das chaves em clima de celebração com suporte técnico pós-ocupação."
  }
];

export const institucionalDados = {
  razaoSocial: "KMY PRIME PLANEJAMENTO IMOBILIÁRIO LTDA",
  cargo: "Decoradora & CEO Novos Negócios",
  responsavel: "Marta A. Soriano",
  creci: "198893-F",
  telefoneWhatsApp: "5511941978333",
  telefoneFormatado: "(11) 94197-8333",
  emails: ["kmyprime@kmyprime.com.br", "marta.kmyprime@gmail.com"],
  website: "www.kmyprime.com.br",
  instagram: "@kmyprime"
};
