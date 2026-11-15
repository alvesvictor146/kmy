var al=Object.defineProperty;var rl=(i,e,t)=>e in i?al(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ue=(i,e,t)=>rl(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();const ol=typeof document<"u"&&!!document.querySelector('link[href*="src/styles/main.css"]')&&!document.querySelector('script[src*="@vite"]'),Ge=ol?"./public/":"./",sl=[{id:"KMY-011",titulo:"Aratu — Condomínio Logístico Triple A",subtitulo:"Primeiro galpão logístico do Brasil com certificação EDGE concedida pelo IFC",categoria:"galpoes",categoriaNome:"Galpões Logísticos",finalidade:"venda",finalidadeNome:"Catálogo Executivo",cidade:"Simões Filho",uf:"BA",localizacao:"Via Centro, CIA Sul — Simões Filho, Bahia - BA (Região Metropolitana de Salvador)",preco:0,precoFormatado:"Sob Consulta",precoInfo:"Classificação AAA · Pé-direito 12 m · Capacidade do Piso 6 T/m²",areaTotal:"102.530 m²",areaConstruida:"102.530 m² ABL",abl:"102.530 m²",classificacao:"AAA",peDireito:"12 m",capacidadePiso:"6 T/m²",suites:0,vagas:0,destaques:["Área Bruta Locável (ABL): 102.530 m² composta por dois galpões modulares","Classificação AAA · Pé-direito de 12 m · Capacidade do Piso de 6 T/m²","Primeiro galpão logístico do Brasil a receber a certificação EDGE para empreendimentos verdes, concedida pelo IFC","Infraestrutura completa com restaurante, refeitório, auditório e salas de reunião","Localizado em Simões Filho (Via Centro, CIA Sul), com acesso direto às principais rodovias da região e distante apenas 20 km do centro de Salvador"],descricao:"Adquirido em junho de 2021, o condomínio logístico é composto por dois galpões modulares e possui mais de 100 mil m² de ABL (102.530 m²). Possui restaurante, refeitório, auditório e salas de reunião. Localizado em Simões Filho (Via Centro, CIA Sul), na região metropolitana de Salvador, o ativo possui acesso direto às principais rodovias da região e distância de apenas 20 km do centro da cidade de Salvador. O ativo Aratu é o primeiro galpão logístico do Brasil a receber a certificação EDGE para empreendimentos verdes, concedida pelo IFC.",imagem:`${Ge}assets/images/imovel_11_aratu.webp`,status:"Catálogo Executivo · AAA",tags:["ABL 102.530 m²","Classificação AAA","Pé-direito 12 m","Piso 6 T/m²","Certificação EDGE (IFC)"]},{id:"KMY-012",titulo:"Cajamar — Condomínio Logístico Triple A",subtitulo:"Galpão com certificação LEED GOLD inserido no maior polo logístico do país",categoria:"galpoes",categoriaNome:"Galpões Logísticos",finalidade:"venda",finalidadeNome:"Catálogo Executivo",cidade:"Cajamar",uf:"SP",localizacao:"Rodovia Anhanguera, km 43 — Cajamar, São Paulo - SP (Raio 30 km de São Paulo)",preco:0,precoFormatado:"Sob Consulta",precoInfo:"Classificação AAA · Pé-direito 12 m · Capacidade do Piso 6 T/m²",areaTotal:"35.690 m²",areaConstruida:"35.690 m² ABL",abl:"35.690 m²",classificacao:"AAA",peDireito:"12 m",capacidadePiso:"6 T/m²",suites:0,vagas:0,destaques:["Área Bruta Locável (ABL): 35.690 m², podendo ser dividido em 4 diferentes módulos","Classificação AAA · Pé-direito de 12 m · Capacidade do Piso de 6 T/m²","Galpão com certificação internacional LEED GOLD inserido em condomínio logístico","Infraestrutura com restaurante, refeitório, auditório e salas de reunião","Localizado no raio de 30 km de SP, no maior polo logístico do país, em frente à Rodovia Anhanguera (km 43) com acesso exclusivo"],descricao:"Adquirido pelo Fundo em agosto de 2021, é um galpão com certificação LEED GOLD que está inserido em um condomínio logístico com mais dois outros galpões. Possui 35 mil m² de ABL (35.690 m²), podendo ser dividido em 4 diferentes módulos. Além disso, tem restaurante, refeitório, auditório e salas de reunião. Localizado no raio de 30 km de SP, está localizado no maior polo logístico do país, frente a Rodovia Anhanguera (km 43) e acesso exclusivo em frente ao empreendimento.",imagem:`${Ge}assets/images/imovel_12_cajamar.webp`,status:"Catálogo Executivo · AAA",tags:["ABL 35.690 m²","Classificação AAA","Pé-direito 12 m","Piso 6 T/m²","LEED GOLD"]},{id:"KMY-013",titulo:"DCC — Condomínio Logístico Cajamar",subtitulo:"Complexo logístico com três blocos de galpões e usina de energia solar de 2,5 MW",categoria:"galpoes",categoriaNome:"Galpões Logísticos",finalidade:"venda",finalidadeNome:"Catálogo Executivo",cidade:"Cajamar",uf:"SP",localizacao:"Rodovia Anhanguera, Km 31.775 — Cidade de Cajamar, São Paulo - SP (Grande São Paulo)",preco:0,precoFormatado:"Sob Consulta",precoInfo:"Classificação AA · Pé-direito 12 m · Capacidade do Piso 6 T/m²",areaTotal:"102.708 m²",areaConstruida:"102.708 m² ABL",abl:"102.708 m²",classificacao:"AA",peDireito:"12 m",capacidadePiso:"6 T/m²",suites:0,vagas:0,destaques:["Área Locável Total (ABL): 102.708 m² compostos por três blocos de galpões","Classificação AA · Pé-direito de 12 m · Capacidade do Piso de 6 T/m²","Usina de energia solar própria com capacidade de geração de 2,5 MW","Rede de sprinklers, segurança 24h, sistema de CFTV e portaria blindada e armada","Auditório, salas de reunião, área de recreação, bicicletário e acesso direto à Rodovia Anhanguera (Km 31.775), próximo à Bandeirantes e Rodoanel"],descricao:"Adquirido pelo fundo em 2023, o ativo é composto por três blocos de galpões e totaliza mais de 102 mil m² de área bruta locável (102.708 m²). O condomínio, que está localizado na Grande São Paulo (município de Cajamar), possui acesso direto à Rodovia Anhanguera e está próximo a outros importantes eixos como a Rodovia Bandeirantes e ao trecho norte do Rodoanel em conclusão. Um dos diferenciais deste conjunto logístico é a usina de energia solar, com capacidade de geração de 2,5 MW. Possui rede de sprinklers, segurança 24h, sistema de CFTV, portaria blindada e armada, auditório, salas de reunião, área de recreação, bicicletário e usina solar com 2,5 MW de capacidade de geração.",imagem:`${Ge}assets/images/imovel_13_dcc.webp`,status:"Catálogo Executivo · AA",tags:["ABL 102.708 m²","Classificação AA","Pé-direito 12 m","Piso 6 T/m²","Usina Solar 2,5 MW"]},{id:"KMY-014",titulo:"HGLG Betim BTS – Meli",subtitulo:"Ativo Triple A Built to Suit produzido sob medida para grande empresa de e-commerce",categoria:"galpoes",categoriaNome:"Galpões Logísticos",finalidade:"venda",finalidadeNome:"Catálogo Executivo",cidade:"Betim",uf:"MG",localizacao:"Rua Sucupira S/N, Quadra 24, 25 e 27 — Betim, Minas Gerais - MG",preco:0,precoFormatado:"Sob Consulta",precoInfo:"Classificação AAA · Pé-direito 12 m · Capacidade do Piso 6 T/m²",areaTotal:"95.730 m²",areaConstruida:"95.730 m² ABL",abl:"95.730 m²",classificacao:"AAA",peDireito:"12 m",capacidadePiso:"6 T/m²",suites:0,vagas:0,destaques:["Área Locável Total (ABL): 95.730 m² em operação Built to Suit (BTS)","Classificação AAA · Pé-direito de 12 m · Capacidade do Piso de 6 T/m²","Built to Suit produzido sob medida para uma grande empresa do setor de e-commerce","Acesso direto à Rodovia Costa e Silva e próximo à Rodovia Fernão Dias","Localizado em Betim (MG), conectando estrategicamente Contagem e Belo Horizonte"],descricao:"Adquirido em 2022, o ativo está localizado na cidade de Betim (MG) e é vizinho de outro ativo do fundo, o HGLG Betim. É classificado como AAA e foi um built to suit produzido sob medida para uma grande empresa do setor de e-commerce. Assim como o galpão vizinho, possui acesso direto à Rodovia Costa e Silva e está próximo à Fernão Dias, que o conecta a Contagem e Belo Horizonte.",imagem:`${Ge}assets/images/imovel_14_betim.webp`,status:"Catálogo Executivo · AAA",tags:["ABL 95.730 m²","Classificação AAA","Pé-direito 12 m","Piso 6 T/m²","Built to Suit (BTS)"]},{id:"KMY-015",titulo:"Quantum — Edifício Corporativo Itaim Bibi",subtitulo:"Eficiência com inovação: estrutura cúbica, lajes lineares de 950 m² e varandas 360°",categoria:"predios",categoriaNome:"Prédios Corporativos",finalidade:"venda",finalidadeNome:"Catálogo Executivo",cidade:"São Paulo",uf:"SP",localizacao:"R. Joaquim Floriano, 973 - Itaim Bibi, São Paulo - SP, Brasil",preco:0,precoFormatado:"Sob Consulta",precoInfo:"Entrega Prevista 2026 · Participação 100% · 9 andares + rooftop",areaTotal:"10.230 m²",areaConstruida:"10.230 m² Locável",abl:"10.230 m²",entregaPrevista:"2026",participacao:"100%",configuracao:"9 andares mais rooftop. Lajes de 950 m²",suites:0,vagas:0,destaques:["Área Locável: 10.230 m² · Participação: 100% · Entrega Prevista: 2026","Configuração: 9 andares mais rooftop com lajes lineares de 950 m²","No 6º andar, onde há a união entre os blocos, conta com laje diferenciada e varandas 360°","Estrutura cúbica que oferece máxima flexibilidade de ocupação e layout","Localizado na esquina da Rua Joaquim Floriano com a Clodomiro Amazonas, a poucos passos da Avenida Faria Lima (Itaim Bibi)"],descricao:"Une eficiência com inovação, propondo novas formas de ocupação. No 6º andar, onde há a união entre os blocos, contamos com uma laje diferenciada, com varandas 360°. Com estrutura cúbica e lajes lineares de 950 m², oferece máxima flexibilidade de layout. O edifício se localiza na esquina da Rua Joaquim Floriano com a Clodomiro Amazonas (R. Joaquim Floriano, 973 - Itaim Bibi), a poucos passos da Avenida Faria Lima, uma das regiões mais movimentadas de São Paulo.",imagem:`${Ge}assets/images/imovel_15_quantum.png`,status:"Catálogo Executivo · 2026",tags:["Área Locável 10.230 m²","Entrega 2026","9 Andares + Rooftop","Lajes de 950 m²","Itaim Bibi"]},{id:"KMY-016",titulo:"Citadel — Edifício Corporativo Paulista",subtitulo:"Retrofit completo em conceito open space a 50 metros da Avenida Paulista",categoria:"predios",categoriaNome:"Prédios Corporativos",finalidade:"venda",finalidadeNome:"Catálogo Executivo",cidade:"São Paulo",uf:"SP",localizacao:"R. Bela Cintra, 986 - Consolação, São Paulo - SP, 01415-002, Brasil",preco:0,precoFormatado:"Sob Consulta",precoInfo:"15 pavimentos · Lajes de 852 m² · Retrofit Completo",areaTotal:"12.780 m²",areaConstruida:"12.780 m² Locável",abl:"12.780 m²",configuracao:"15 pavimentos. Lajes 852 m²",suites:0,vagas:0,destaques:["Área Locável: 12.780 m² · Configuração: 15 pavimentos com lajes de 852 m²","Retrofit com lajes em conceito open space, novos banheiros, elevadores e ar-condicionado totalmente renovados","Lobby ampliado e modernizado e entrada com área de drop-off e paisagismo","Fachada com renovação completa e nova pele de vidro","Localizado na Rua Bela Cintra, 986, a 50 metros da Avenida Paulista e ao lado do metrô"],descricao:"O retrofit contempla lajes em conceito open space com novos banheiros, além de elevadores e sistema de ar-condicionado totalmente renovados. O lobby será ampliado e modernizado, a entrada contará com uma área de drop-off com paisagismo, e a fachada passará por renovação completa com nova pele de vidro. Na Rua Bela Cintra (nº 986 - Consolação), a 50 metros da Avenida Paulista e ao lado do metrô, o Citadel está em uma das regiões corporativas mais dinâmicas de São Paulo.",imagem:`${Ge}assets/images/imovel_16_citadel.jpg`,status:"Catálogo Executivo · Retrofit",tags:["Área Locável 12.780 m²","15 Pavimentos","Lajes 852 m²","Open Space","Região Paulista"]},{id:"KMY-017",titulo:"Pinheiros One — Complexo Corporativo",subtitulo:"Estrutura de serviços e utilidades completa com vista panorâmica e acesso direto à Marginal Pinheiros",categoria:"predios",categoriaNome:"Prédios Corporativos",finalidade:"venda",finalidadeNome:"Catálogo Executivo",cidade:"São Paulo",uf:"SP",localizacao:"R. Lemos Monteiro, 120 - Butantã, São Paulo - SP, 05501-050, Brasil",preco:0,precoFormatado:"Sob Consulta",precoInfo:"Participação 50% · 18 andares · Lajes de até 1.710 m²",areaTotal:"33.358 m²",areaConstruida:"33.358 m² Locável",abl:"33.358 m²",participacao:"50%",configuracao:"18 andares. Lajes de até 1.710 m²",suites:0,vagas:0,destaques:["Área Locável: 33.358 m² · Participação: 50% · Configuração: 18 andares com lajes de até 1.710 m²","18 andares de escritórios com lajes amplas, vista panorâmica e dois andares de terraço preparado para eventos","Estrutura completa de serviços: restaurante, café, padaria, auditório, cabeleireiro e foodtrucks","Bicicletários com vestiários e estação lava-rápido","Acesso direto à Marginal Pinheiros e Avenida Francisco Morato (R. Lemos Monteiro, 120 - Butantã)"],descricao:"São 18 andares de escritórios, com lajes de 1.600 m² a 1.710 m² e vista panorâmica, dois andares de terraço (preparado para eventos), restaurante, café, padaria, auditório, cabeleireiro, bicicletários com vestiários, estação lava-rápido, foodtrucks e mais. Com acesso direto à Marginal Pinheiros e Avenida Francisco Morato (R. Lemos Monteiro, 120 - Butantã), está localizado em uma região estratégica que vem se consolidando como um polo corporativo.",imagem:`${Ge}assets/images/imovel_17_pinheiros_one.jpg`,status:"Catálogo Executivo · Triple A",tags:["Área Locável 33.358 m²","Participação 50%","18 Andares","Lajes até 1.710 m²","Marginal Pinheiros"]},{id:"KMY-018",titulo:"Thera Corporate — Edifício Corporativo Berrini",subtitulo:"Espaços que promovem conforto e equilíbrio no eixo Luís Carlos Berrini e Bandeirantes",categoria:"predios",categoriaNome:"Prédios Corporativos",finalidade:"venda",finalidadeNome:"Catálogo Executivo",cidade:"São Paulo",uf:"SP",localizacao:"Av. Engenheiro Luís Carlos Berrini, 105 - Brooklin, São Paulo - SP, 04571-010, Brasil",preco:0,precoFormatado:"Sob Consulta",precoInfo:"Participação 66% · 15 andares · Lajes a partir de 1.032 m²",areaTotal:"21.047 m²",areaConstruida:"21.047 m² Locável",abl:"21.047 m²",participacao:"66%",configuracao:"15 andares. Lajes com unidades a partir de 1.032 m²",suites:0,vagas:0,destaques:["Área Locável: 21.047 m² · Participação: 66% · Configuração: 15 andares com lajes a partir de 1.032 m²","Espaços que promovem conforto e equilíbrio com área externa, restaurante e café interno","Auditório, bicicletário para condôminos e visitantes, foodtrucks rotativos e serviços exclusivos","Acesso direto às avenidas Luís Carlos Berrini e Bandeirantes (Brooklin)","Localizado a poucos minutos do Aeroporto de Congonhas e cercado de opções de comércio e serviço"],descricao:"O Thera possui área externa com restaurante, café interno, auditório, bicicletário para condôminos e visitantes, foodtrucks rotativos e mais serviços exclusivos em espaços que promovem conforto e equilíbrio. Conta com 21.047 m² de área locável distribuídos em 15 andares (lajes com unidades a partir de 1.032 m²). Possui acesso direto às avenidas Luís Carlos Berrini (nº 105 - Brooklin) e Bandeirantes, além de estar a poucos minutos do aeroporto de Congonhas e cercado de opções de comércio e serviço.",imagem:`${Ge}assets/images/imovel_18_thera.png`,status:"Catálogo Executivo · Triple A",tags:["Área Locável 21.047 m²","Participação 66%","15 Andares","Lajes 1.032+ m²","Eixo Berrini"]},{id:"KMY-001",titulo:"Hotel Boutique Frente ao Mar — 48 Suítes Luxo",subtitulo:"Operação hoteleira consolidada com alta rentabilidade",categoria:"hoteis",categoriaNome:"Hotéis & Resorts",finalidade:"venda",finalidadeNome:"Venda de Ativo",cidade:"São Sebastião",uf:"SP",localizacao:"Praia de Juquehy, Litoral Norte — SP",preco:385e5,precoFormatado:"R$ 38.500.000",areaTotal:"6.200 m²",areaConstruida:"3.800 m²",suites:48,vagas:60,destaques:["Piscina de borda infinita debruçada sobre o mar","Restaurante gastronômico contemporâneo e bar de praia","Spa completo com saunas seca e úmida","Taxa média de ocupação anual: 78%","EBITDA anual auditado e governança estruturada"],descricao:"Excepcional oportunidade de investimento em hospitalidade de alto luxo no litoral mais valorizado de São Paulo. O complexo hoteleiro conta com 48 suítes decoradas em padrão internacional, gastronomia de autor e infraestrutura completa para casamentos corporativos e turismo premium de alto poder aquisitivo.",imagem:`${Ge}assets/images/imovel_1_hotel.jpg`,status:"Exclusividade KMY Prime",tags:["Pé na areia","Boutique","Alta Rentabilidade","Spa"]},{id:"KMY-002",titulo:"Resort Eco-Luxo Frente Mar — 110 Bangalôs Privativos",subtitulo:"Complexo paradisíaco integrado à natureza com heliponto",categoria:"hoteis",categoriaNome:"Hotéis & Resorts",finalidade:"venda",finalidadeNome:"Venda ou Arrendamento",cidade:"Porto Seguro / Trancoso",uf:"BA",localizacao:"Costa do Descobrimento — Trancoso / BA",preco:95e6,precoFormatado:"R$ 95.000.000",areaTotal:"85.000 m²",areaConstruida:"14.200 m²",suites:110,vagas:150,destaques:["Faixa de 400m de praia semi-exclusiva","Parque aquático com piscinas orgânicas interconectadas","Heliponto homologado para pousos diurnos e noturnos","Centro de eventos e convenções para até 500 pessoas","Arrendamento disponível sob análise de grupo hoteleiro"],descricao:"Um dos ativos hoteleiros mais icônicos do Brasil. Estrutura eco-friendly com certificação verde, autossuficiência hídrica parcial, spa de renome internacional e ampla cartela de clientes fidelizados de altíssimo padrão nacional e internacional.",imagem:`${Ge}assets/images/imovel_2_resort.jpg`,status:"Ativo Triple A",tags:["Heliponto","Trancoso","Eco-Luxo","Arrendamento Disponível"]},{id:"KMY-003",titulo:"Pousada Alpina Exclusiva — 18 Chalés Suíços com Lareira",subtitulo:"Charme da serra com bosque de araucárias nativas",categoria:"pousadas",categoriaNome:"Pousadas",finalidade:"arrendamento",finalidadeNome:"Arrendamento Comercial",cidade:"Campos do Jordão",uf:"SP",localizacao:"Alto do Capivari — Campos do Jordão / SP",preco:65e3,precoFormatado:"R$ 65.000 / mês",precoInfo:"Contrato de arrendamento de 10 anos",areaTotal:"12.000 m²",areaConstruida:"1.950 m²",suites:18,vagas:25,destaques:["Chalés térmicos com piso aquecido e banheira de hidromassagem","Adega subterrânea climatizada para 1.500 garrafas","Restaurante de fondue premiado e bistrô bistrô de montanha","Totalmente mobiliada e operando a pleno vapor","Reputação 9.8 nas principais plataformas de reserva"],descricao:"Arrendamento de pousada boutique tradicional no ponto mais nobre de Campos do Jordão. Empreendimento 100% equipado, com alta margem líquida durante as temporadas de inverno e turismo de casais ao longo do ano.",imagem:`${Ge}assets/images/imovel_3_pousada.jpg`,status:"Oportunidade de Arrendamento",tags:["Serra da Mantiqueira","Lareira & Hidro","Adega Climatizada"]},{id:"KMY-004",titulo:"Pousada Colonial Histórica — Centro de Paraty",subtitulo:"Patrimônio arquitetônico restaurado com spa e piscina de pedra",categoria:"pousadas",categoriaNome:"Pousadas",finalidade:"venda",finalidadeNome:"Venda de Ativo",cidade:"Paraty",uf:"RJ",localizacao:"Centro Histórico Tombado — Paraty / RJ",preco:22e6,precoFormatado:"R$ 22.000.000",areaTotal:"2.400 m²",areaConstruida:"1.750 m²",suites:22,vagas:0,destaques:["Casarão secular restaurado com rigor histórico e conforto moderno","Pátio interno ajardinado com piscina de pedra natural iluminada","Acervo de mobiliário de época e obras de arte integradas","Fluxo constante de turistas qualificados da FLIP e festivais","Possibilidade de expansão com imóvel anexo"],descricao:"Verdadeira jóia no centro histórico de Paraty. Combina o charme barroco e a elegância colonial com suítes climatizadas de padrão internacional. Perfeito para investidores que prezam por patrimônios culturais de valor perene.",imagem:`${Ge}assets/images/imovel_4_pousada.jpg`,status:"Patrimônio Tombado",tags:["Centro Histórico","Jóia Colonial","Alta Visibilidade"]},{id:"KMY-005",titulo:"Hospital Geral e Centro Cirúrgico Especializado",subtitulo:"Edificação hospitalar Triple A com 12 salas cirúrgicas",categoria:"hospitais",categoriaNome:"Hospitais & Centros Médicos",finalidade:"venda",finalidadeNome:"Venda de Ativo Hospitalar",cidade:"Campinas / Valinhos",uf:"SP",localizacao:"Eixo Rodoviário D. Pedro / Anhanguera — SP",preco:145e6,precoFormatado:"R$ 145.000.000",areaTotal:"18.500 m²",areaConstruida:"16.800 m²",suites:90,vagas:220,destaques:["12 salas cirúrgicas inteligentes com fluxo laminar","90 leitos de internação sendo 24 de UTI geral e coronariana","Central de imagem completa (Ressonância, Tomografia, Hemodinâmica)","Heliponto para transporte aeromédico homologado","Normas ANVISA RDC-50 100% atendidas"],descricao:"Estrutura hospitalar moderna, concebida para atender operadoras de saúde, redes de medicina diagnóstica ou fundos imobiliários com contratos atípicos (SLB - Sale & Leaseback). Pronto para operação imediata.",imagem:`${Ge}assets/images/imovel_5_hospital.jpg`,status:"Ativo Institucional de Saúde",tags:["Centro Cirúrgico","UTI Completa","ANVISA RDC-50","Sale & Leaseback"]},{id:"KMY-006",titulo:"Laje Corporativa Triple A — 1.250 m² na Av. Faria Lima",subtitulo:"Andar inteiro de altíssimo padrão no epicentro financeiro",categoria:"lajes",categoriaNome:"Lajes Corporativas",finalidade:"venda",finalidadeNome:"Venda ou Locação",cidade:"São Paulo",uf:"SP",localizacao:"Av. Brigadeiro Faria Lima, Itaim Bibi — São Paulo / SP",preco:52e6,precoFormatado:"R$ 52.000.000",precoInfo:"Opção de locação: R$ 380/m²",areaTotal:"1.250 m² privativos",areaConstruida:"1.250 m²",suites:0,vagas:38,destaques:["Certificação LEED Platinum e Well Health-Safety","Pé-direito livre de 3,10m com piso elevado de alta capacidade","Fachada unitizada com vidros de controle solar térmico e acústico","Gerador com atendimento para 100% da área privativa","Elevadores inteligentes com chamada antecipada"],descricao:"Espaço corporativo de prestígio no endereço mais valorizado da América Latina. Configuração em vão livre propícia para sedes de bancos de investimento, private equity, fintechs e multinacionais que exigem máxima representatividade institucional.",imagem:`${Ge}assets/images/imovel_6_laje.jpg`,status:"Triple A — Faria Lima",tags:["LEED Platinum","Faria Lima","Vão Livre","Edifício Ícone"]},{id:"KMY-007",titulo:"Andar Corporativo Panorâmico — 720 m² em Alphaville",subtitulo:"Espaço pronto com vista privilegiada para o verde",categoria:"lajes",categoriaNome:"Lajes Corporativas",finalidade:"locacao",finalidadeNome:"Locação Corporativa",cidade:"Barueri / Alphaville",uf:"SP",localizacao:"Alameda Rio Negro, Alphaville — Barueri / SP",preco:68e3,precoFormatado:"R$ 68.000 / mês",precoInfo:"Condomínio e IPTU sob consulta",areaTotal:"720 m²",areaConstruida:"720 m²",suites:0,vagas:24,destaques:["Totalmente cabeado com ar-condicionado VRF inverter","4 salas de reunião privativas em vidro acústico e auditório no térreo","Copa executiva e lounge de descanso mobiliados","Próximo ao Shopping Iguatemi Alphaville e centro comercial","Fácil acesso pela Rodovia Castello Branco"],descricao:"Laje corporativa pronta para ocupação imediata (plug & play). Design moderno com forro acústico amadeirado, piso vinílico de alta densidade e vista panorâmica para o horizonte e a área verde de Alphaville.",imagem:`${Ge}assets/images/imovel_7_laje.jpg`,status:"Pronto para Ocupação (Plug & Play)",tags:["Alphaville","Plug & Play","VRF Inverter","Vista Panorâmica"]},{id:"KMY-008",titulo:"Flagship Store de Luxo — 380 m² na Rua Oscar Freire",subtitulo:"Ponto comercial de esquina mais cobiçado dos Jardins",categoria:"lojas",categoriaNome:"Lojas & Pontos Comerciais",finalidade:"venda",finalidadeNome:"Venda do Ponto / Imóvel",cidade:"São Paulo",uf:"SP",localizacao:"Rua Oscar Freire, Jardins — São Paulo / SP",preco:28e6,precoFormatado:"R$ 28.000.000",precoInfo:"Disponível também para locação: R$ 130.000/mês",areaTotal:"380 m²",areaConstruida:"380 m² em 2 pavimentos",suites:0,vagas:4,destaques:["Testada com 14 metros de vitrine em vidro temperado e moldura dourada","Piso em mármore travertino romano e iluminação cênica integrada","Fluxo de pedestres de altíssimo ticket médio dos Jardins","Subsolo preparado para estoque seguro e sala de atendimento VIP","Imóvel desocupado para implantação de marca premium"],descricao:"Endereço lendário no quadrilátero do luxo paulistano. Perfeito para joalherias, grifes de alta costura, galerias de arte ou marcas globais que buscam fixar presença na rua mais charmosa do país.",imagem:`${Ge}assets/images/imovel_8_loja.jpg`,status:"Ponto Comercial Ícone",tags:["Oscar Freire","Jardins","Vitrine 14m","Travertino Romano"]},{id:"KMY-009",titulo:"Residencial Parque das Acácias — Lote com 48 Aptos MCMV",subtitulo:"Portfólio de unidades residenciais prontas para locação",categoria:"mcmv",categoriaNome:"Aptos MCMV (Investidor)",finalidade:"venda",finalidadeNome:"Venda em Bloco (Investidor)",cidade:"São Paulo",uf:"SP",localizacao:"São Mateus / Itaquera, Zona Leste — São Paulo / SP",preco:108e5,precoFormatado:"R$ 10.800.000",precoInfo:"Equivalente a R$ 225.000 por unidade",areaTotal:"2.800 m² privativos totais",areaConstruida:"3.400 m²",suites:0,vagas:48,destaques:["48 apartamentos de 2 dormitórios (48 m² a 52 m²) com varanda","Condomínio com portaria 24h, quadra, playground e salão gourmet","Yield estimado de locação: 0,68% a.m. livre de vacância","Localizado a 800m de futura estação de monotrilho","Documentação e habite-se 100% aprovados na CEF"],descricao:"Excelente oportunidade para fundos de renda residencial, incorporadores ou investidores patrimoniais. Aquisição em bloco de unidades prontas dentro do programa Minha Casa Minha Vida (Faixa 2/3), garantindo liquidez e retorno locativo constante.",imagem:`${Ge}assets/images/imovel_9_mcmv.jpg`,status:"Venda em Lote para Investidor",tags:["MCMV Faixa 3","Alta Liquidez","Renda Locativa","Habite-se CEF"]},{id:"KMY-010",titulo:"Shopping Center Regional — 85 Operações e Cinema Multiplex",subtitulo:"Ativo de varejo consolidado com 100% de ABL alugada",categoria:"shopping",categoriaNome:"Shoppings & Malls",finalidade:"venda",finalidadeNome:"Venda de Ativo de Varejo",cidade:"Ribeirão Preto",uf:"SP",localizacao:"Região Metropolitana de Ribeirão Preto / SP",preco:185e6,precoFormatado:"R$ 185.000.000",precoInfo:"Cap Rate projetado: 8,7% a.a.",areaTotal:"42.000 m² de terreno",areaConstruida:"26.500 m² (18.200 m² ABL)",suites:0,vagas:980,destaques:["85 lojas satélites, 4 lojas âncoras e praça de alimentação com 24 operações","Complexo de cinema com 5 salas stadium (2 3D)","Estacionamento automatizado com 980 vagas cobertas","Fluxo mensal auditado superior a 380 mil visitantes","Contratos de locação com garantia sólida e repasse de condomínio"],descricao:"Ativo de renda de primeira linha no polo econômico do agronegócio paulista. Shopping center com domínio regional absoluto em sua área de influência primária, proporcionando distribuição de proventos estável e potencial de expansão imobiliária.",imagem:`${Ge}assets/images/imovel_10_shopping.jpg`,status:"Ativo Institucional de Renda",tags:["Cap Rate 8.7%","85 Lojas","Cinema Multiplex","Ribeirão Preto"]}],ll=[{id:"todos",nome:"Todos os Ativos",icone:"layout-grid",total:18},{id:"galpoes",nome:"Galpões Logísticos",icone:"warehouse",total:4},{id:"predios",nome:"Prédios Corporativos",icone:"building",total:4},{id:"hoteis",nome:"Hotéis & Resorts",icone:"hotel",total:2},{id:"pousadas",nome:"Pousadas",icone:"palmtree",total:2},{id:"hospitais",nome:"Hospitais & Clínicas",icone:"stethoscope",total:1},{id:"lajes",nome:"Lajes Corporativas",icone:"building-2",total:2},{id:"lojas",nome:"Lojas & Varejo",icone:"store",total:1},{id:"mcmv",nome:"Aptos MCMV",icone:"home",total:1},{id:"shopping",nome:"Shoppings & Malls",icone:"shopping-bag",total:1}],cl=[{num:"01",titulo:"Briefing do Projeto",desc:"Alinhamento aprofundado dos desejos, rotina, estilo de vida e metas de investimento do cliente."},{num:"02",titulo:"Estudo Conceitual",desc:"Criação dos primeiros croquis, moodboard de sensações, paleta cromática e layout espacial."},{num:"03",titulo:"Anteprojeto & Executivo",desc:"Plantas de demolição/construção, elétrica, iluminação cênica, gesso, hidráulica e marcenaria detalhada."},{num:"04",titulo:"Orçamento & Memorial",desc:"Planilha orçamentária rigorosa, especificação técnica de revestimentos, mármores e louças premium."},{num:"05",titulo:"Acompanhamento da Obra",desc:"Supervisão técnica contínua no canteiro, assegurando conformidade de cronograma e acabamentos."},{num:"06",titulo:"Produção & Montagem",desc:"Curadoria de arte, escolha de mobiliário assinado, tapetes, cortinas, iluminação e adornos exclusivos."},{num:"07",titulo:"Pós-Entrega & Garantia",desc:"Checklist final de entrega das chaves em clima de celebração com suporte técnico pós-ocupação."}],cs={telefoneWhatsApp:"5511941978333"},dl=[{id:"KMY-011",titulo:"Aratu — Triple A Logistics Park",subtitulo:"First logistics warehouse in Brazil awarded EDGE green certification by IFC",categoria:"galpoes",categoriaNome:"Logistic Warehouses",finalidade:"venda",finalidadeNome:"Executive Portfolio",cidade:"Simões Filho",uf:"BA",localizacao:"Via Centro, CIA Sul — Simões Filho, Bahia - BA (Greater Salvador Metropolitan Area)",preco:0,precoFormatado:"Upon Request",precoInfo:"AAA Rating · 12 m Clear Height · 6 T/m² Floor Load",areaTotal:"102,530 m²",areaConstruida:"102,530 m² GLA",abl:"102,530 m²",classificacao:"AAA",peDireito:"12 m",capacidadePiso:"6 T/m²",suites:0,vagas:0,destaques:["Gross Leasable Area (GLA): 102,530 m² across two modular warehouses","AAA Classification · 12 m Clear Ceiling Height · 6 T/m² Floor Load Capacity","First logistics warehouse in Brazil to receive EDGE green building certification granted by IFC","Full corporate infrastructure including restaurant, cafeteria, auditorium, and meeting rooms","Located in Simões Filho (Via Centro, CIA Sul) with direct highway access and only 20 km from downtown Salvador"],descricao:"Acquired in June 2021, this logistics park comprises two modular warehouses with over 100,000 m² of GLA (102,530 m²). It features a restaurant, cafeteria, auditorium, and meeting rooms. Located in Simões Filho (Via Centro, CIA Sul) in the Greater Salvador Metropolitan Area, the asset offers direct access to major regional highways and is just 20 km from downtown Salvador. Aratu is the first logistics warehouse in Brazil to receive EDGE green building certification from the IFC.",imagem:`${Ge}assets/images/imovel_11_aratu.webp`,status:"Executive Portfolio · AAA",tags:["GLA 102,530 m²","AAA Rating","12 m Height","6 T/m² Floor","EDGE Certified (IFC)"]},{id:"KMY-012",titulo:"Cajamar — Triple A Logistics Park",subtitulo:"LEED GOLD certified warehouse located in Brazil's premier logistics hub",categoria:"galpoes",categoriaNome:"Logistic Warehouses",finalidade:"venda",finalidadeNome:"Executive Portfolio",cidade:"Cajamar",uf:"SP",localizacao:"Rodovia Anhanguera, km 43 — Cajamar, São Paulo - SP (Within 30 km of São Paulo)",preco:0,precoFormatado:"Upon Request",precoInfo:"AAA Rating · 12 m Clear Height · 6 T/m² Floor Load",areaTotal:"35,690 m²",areaConstruida:"35,690 m² GLA",abl:"35,690 m²",classificacao:"AAA",peDireito:"12 m",capacidadePiso:"6 T/m²",suites:0,vagas:0,destaques:["Gross Leasable Area (GLA): 35,690 m², divisible into up to 4 modules","AAA Classification · 12 m Clear Ceiling Height · 6 T/m² Floor Load Capacity","LEED GOLD certified warehouse within a prime logistics park","Full corporate infrastructure with restaurant, cafeteria, auditorium, and meeting rooms","Located within the 30 km radius of São Paulo (Rodovia Anhanguera, km 43), in the country's largest logistics hub with exclusive access"],descricao:"Acquired in August 2021, this LEED GOLD certified warehouse is part of a prime logistics park alongside two other warehouses. It features over 35,000 m² of GLA (35,690 m²) divisible into 4 modules, complete with restaurant, cafeteria, auditorium, and meeting rooms. Situated within the 30 km radius of São Paulo in the country's largest logistics hub, facing the Anhanguera Highway (km 43) with dedicated access directly in front of the property.",imagem:`${Ge}assets/images/imovel_12_cajamar.webp`,status:"Executive Portfolio · AAA",tags:["GLA 35,690 m²","AAA Rating","12 m Height","6 T/m² Floor","LEED GOLD"]},{id:"KMY-013",titulo:"DCC — Cajamar Logistics Park",subtitulo:"Three-block logistics complex featuring a 2.5 MW solar power plant",categoria:"galpoes",categoriaNome:"Logistic Warehouses",finalidade:"venda",finalidadeNome:"Executive Portfolio",cidade:"Cajamar",uf:"SP",localizacao:"Rodovia Anhanguera, Km 31.775 — Cajamar, São Paulo - SP (Greater São Paulo)",preco:0,precoFormatado:"Upon Request",precoInfo:"AA Rating · 12 m Clear Height · 6 T/m² Floor Load",areaTotal:"102,708 m²",areaConstruida:"102,708 m² GLA",abl:"102,708 m²",classificacao:"AA",peDireito:"12 m",capacidadePiso:"6 T/m²",suites:0,vagas:0,destaques:["Total Leasable Area (GLA): 102,708 m² across three warehouse blocks","AA Classification · 12 m Clear Ceiling Height · 6 T/m² Floor Load Capacity","On-site solar power plant with 2.5 MW generation capacity","Sprinkler network, 24/7 security, CCTV monitoring, and armored/armed gatehouse","Auditorium, meeting rooms, recreation area, bike rack, and direct access to Anhanguera Highway (Km 31.775), near Bandeirantes Highway and Rodoanel"],descricao:"Acquired in 2023, the asset comprises three warehouse blocks totaling over 102,000 m² of gross leasable area (102,708 m²). Located in Greater São Paulo (Cajamar), the complex offers direct access to the Anhanguera Highway and proximity to major logistics corridors including the Bandeirantes Highway and the northern section of the Rodoanel ring road. A key highlight is its on-site solar power plant with 2.5 MW generation capacity, alongside full sprinkler coverage, 24/7 security, CCTV, armored gatehouse, auditorium, meeting rooms, recreation area, and bike storage.",imagem:`${Ge}assets/images/imovel_13_dcc.webp`,status:"Executive Portfolio · AA",tags:["GLA 102,708 m²","AA Rating","12 m Height","6 T/m² Floor","2.5 MW Solar Plant"]},{id:"KMY-014",titulo:"HGLG Betim BTS – Meli",subtitulo:"Triple A Built to Suit logistics asset custom-built for a leading e-commerce company",categoria:"galpoes",categoriaNome:"Logistic Warehouses",finalidade:"venda",finalidadeNome:"Executive Portfolio",cidade:"Betim",uf:"MG",localizacao:"Rua Sucupira S/N, Quadra 24, 25 e 27 — Betim, Minas Gerais - MG",preco:0,precoFormatado:"Upon Request",precoInfo:"AAA Rating · 12 m Clear Height · 6 T/m² Floor Load",areaTotal:"95,730 m²",areaConstruida:"95,730 m² GLA",abl:"95,730 m²",classificacao:"AAA",peDireito:"12 m",capacidadePiso:"6 T/m²",suites:0,vagas:0,destaques:["Total Leasable Area (GLA): 95,730 m² in a Built to Suit (BTS) operation","AAA Classification · 12 m Clear Ceiling Height · 6 T/m² Floor Load Capacity","Custom-built (Built to Suit) for a major e-commerce leader","Direct access to Costa e Silva Highway and close proximity to Fernão Dias Highway","Strategically located in Betim (MG), connecting Contagem and Belo Horizonte"],descricao:"Acquired in 2022, this asset is located in Betim (MG) adjacent to the fund's HGLG Betim property. Rated AAA, it was developed as a custom Built to Suit (BTS) project for a major e-commerce company. Like its neighboring warehouse, it offers direct access to the Costa e Silva Highway and is close to the Fernão Dias Highway, connecting Contagem and Belo Horizonte.",imagem:`${Ge}assets/images/imovel_14_betim.webp`,status:"Executive Portfolio · AAA",tags:["GLA 95,730 m²","AAA Rating","12 m Height","6 T/m² Floor","Built to Suit (BTS)"]},{id:"KMY-015",titulo:"Quantum — Itaim Bibi Corporate Building",subtitulo:"Efficiency meets innovation: cubic structure, 950 m² linear floor plates, and 360° terraces",categoria:"predios",categoriaNome:"Corporate Buildings",finalidade:"venda",finalidadeNome:"Executive Portfolio",cidade:"São Paulo",uf:"SP",localizacao:"R. Joaquim Floriano, 973 - Itaim Bibi, São Paulo - SP, Brazil",preco:0,precoFormatado:"Upon Request",precoInfo:"Expected Delivery 2026 · 100% Ownership · 9 Floors + Rooftop",areaTotal:"10,230 m²",areaConstruida:"10,230 m² Leasable",abl:"10,230 m²",entregaPrevista:"2026",participacao:"100%",configuracao:"9 floors plus rooftop. 950 m² floor plates",suites:0,vagas:0,destaques:["Leasable Area: 10,230 m² · Ownership: 100% · Expected Delivery: 2026","Configuration: 9 floors plus rooftop with 950 m² linear floor plates","Distinctive 6th-floor connecting slab featuring 360° wraparound terraces","Cubic architectural structure offering maximum layout flexibility","Located at the corner of Rua Joaquim Floriano and Clodomiro Amazonas, steps from Faria Lima Ave. (Itaim Bibi)"],descricao:"Combining efficiency with innovation to propose new ways of occupancy. On the 6th floor, where the blocks connect, a distinctive floor plate offers 360° wraparound terraces. With a cubic structure and 950 m² linear floor plates, it provides maximum layout flexibility. Located at the corner of Rua Joaquim Floriano and Clodomiro Amazonas (R. Joaquim Floriano, 973 - Itaim Bibi), just steps from Faria Lima Avenue in one of São Paulo's most vibrant districts.",imagem:`${Ge}assets/images/imovel_15_quantum.png`,status:"Executive Portfolio · 2026",tags:["Leasable 10,230 m²","Delivery 2026","9 Floors + Rooftop","950 m² Floors","Itaim Bibi"]},{id:"KMY-016",titulo:"Citadel — Paulista Corporate Building",subtitulo:"Full open-space retrofit located 50 meters from Paulista Avenue",categoria:"predios",categoriaNome:"Corporate Buildings",finalidade:"venda",finalidadeNome:"Executive Portfolio",cidade:"São Paulo",uf:"SP",localizacao:"R. Bela Cintra, 986 - Consolação, São Paulo - SP, 01415-002, Brazil",preco:0,precoFormatado:"Upon Request",precoInfo:"15 Floors · 852 m² Floor Plates · Full Retrofit",areaTotal:"12,780 m²",areaConstruida:"12,780 m² Leasable",abl:"12,780 m²",configuracao:"15 floors. 852 m² floor plates",suites:0,vagas:0,destaques:["Leasable Area: 12,780 m² · Configuration: 15 floors with 852 m² floor plates","Full retrofit featuring open-space floor plates, new restrooms, and fully upgraded elevators and HVAC systems","Expanded and modernized lobby with landscaped drop-off entrance","Complete facade renovation with a new glass curtain wall","Located on Rua Bela Cintra, 986, just 50 meters from Paulista Avenue and next to the subway station"],descricao:"The retrofit features open-space floor plates with new restrooms, alongside fully upgraded elevators and air-conditioning systems. The lobby will be expanded and modernized, the entrance will include a landscaped drop-off area, and the facade will undergo a complete renovation with a new glass curtain wall. Situated on Rua Bela Cintra (No. 986 - Consolação), 50 meters from Paulista Avenue and right next to the subway, Citadel stands in one of São Paulo's most dynamic corporate districts.",imagem:`${Ge}assets/images/imovel_16_citadel.jpg`,status:"Executive Portfolio · Retrofit",tags:["Leasable 12,780 m²","15 Floors","852 m² Floors","Open Space","Paulista District"]},{id:"KMY-017",titulo:"Pinheiros One — Corporate Complex",subtitulo:"Complete amenities and utility infrastructure with panoramic views and direct access to Marginal Pinheiros",categoria:"predios",categoriaNome:"Corporate Buildings",finalidade:"venda",finalidadeNome:"Executive Portfolio",cidade:"São Paulo",uf:"SP",localizacao:"R. Lemos Monteiro, 120 - Butantã, São Paulo - SP, 05501-050, Brazil",preco:0,precoFormatado:"Upon Request",precoInfo:"50% Ownership · 18 Floors · Floor Plates up to 1,710 m²",areaTotal:"33,358 m²",areaConstruida:"33,358 m² Leasable",abl:"33,358 m²",participacao:"50%",configuracao:"18 floors. Floor plates up to 1,710 m²",suites:0,vagas:0,destaques:["Leasable Area: 33,358 m² · Ownership: 50% · Configuration: 18 floors with floor plates up to 1,710 m²","18 office floors featuring panoramic views and a two-level event-ready terrace","Complete service infrastructure: restaurant, café, bakery, auditorium, hair salon, and food trucks","Bike racks with locker rooms and car wash station","Direct access to Marginal Pinheiros and Francisco Morato Ave. (R. Lemos Monteiro, 120 - Butantã)"],descricao:"Featuring 18 office floors with 1,600 m² to 1,710 m² floor plates and panoramic views, two terrace levels (event-ready), restaurant, café, bakery, auditorium, hair salon, bike racks with locker rooms, car wash station, food trucks, and more. With direct access to Marginal Pinheiros and Francisco Morato Avenue (R. Lemos Monteiro, 120 - Butantã), it sits in a strategic district rapidly consolidating as a major corporate hub.",imagem:`${Ge}assets/images/imovel_17_pinheiros_one.jpg`,status:"Executive Portfolio · Triple A",tags:["Leasable 33,358 m²","50% Ownership","18 Floors","Up to 1,710 m² Floors","Marginal Pinheiros"]},{id:"KMY-018",titulo:"Thera Corporate — Berrini Corporate Building",subtitulo:"Spaces designed for comfort and balance along the Luís Carlos Berrini and Bandeirantes corridor",categoria:"predios",categoriaNome:"Corporate Buildings",finalidade:"venda",finalidadeNome:"Executive Portfolio",cidade:"São Paulo",uf:"SP",localizacao:"Av. Engenheiro Luís Carlos Berrini, 105 - Brooklin, São Paulo - SP, 04571-010, Brazil",preco:0,precoFormatado:"Upon Request",precoInfo:"66% Ownership · 15 Floors · Units starting at 1,032 m²",areaTotal:"21,047 m²",areaConstruida:"21,047 m² Leasable",abl:"21,047 m²",participacao:"66%",configuracao:"15 floors. Floor plates with units starting at 1,032 m²",suites:0,vagas:0,destaques:["Leasable Area: 21,047 m² · Ownership: 66% · Configuration: 15 floors with units starting at 1,032 m²","Spaces promoting comfort and balance featuring an outdoor area with restaurant and indoor café","Auditorium, bike racks for tenants and visitors, rotating food trucks, and exclusive services","Direct access to Luís Carlos Berrini and Bandeirantes Avenues (Brooklin)","Minutes from Congonhas Airport and surrounded by premier retail and service amenities"],descricao:"Thera features an outdoor plaza with restaurant, indoor café, auditorium, bike racks for tenants and visitors, rotating food trucks, and exclusive services in spaces designed for comfort and balance. It offers 21,047 m² of leasable area across 15 floors (with units starting at 1,032 m²). With direct access to Luís Carlos Berrini (No. 105 - Brooklin) and Bandeirantes Avenues, it is just minutes from Congonhas Airport and surrounded by retail and service options.",imagem:`${Ge}assets/images/imovel_18_thera.png`,status:"Executive Portfolio · Triple A",tags:["Leasable 21,047 m²","66% Ownership","15 Floors","1,032+ m² Units","Berrini Corridor"]},{id:"KMY-001",titulo:"Oceanfront Boutique Hotel — 48 Luxury Suites",subtitulo:"Established hotel operation with high profitability",categoria:"hoteis",categoriaNome:"Hotels & Resorts",finalidade:"venda",finalidadeNome:"Asset Sale",cidade:"São Sebastião",uf:"SP",localizacao:"Juquehy Beach, North Coast — SP, Brazil",preco:385e5,precoFormatado:"R$ 38,500,000",areaTotal:"6,200 m²",areaConstruida:"3,800 m²",suites:48,vagas:60,destaques:["Infinity pool overlooking the ocean","Contemporary fine dining restaurant and beach bar","Full-service spa with dry and steam saunas","Average annual occupancy rate: 78%","Audited annual EBITDA and structured corporate governance"],descricao:"Exceptional luxury hospitality investment opportunity on the most prestigious coastline of São Paulo. The hotel complex features 48 suites designed to international standards, signature gastronomy, and full infrastructure for corporate destination events and high-net-worth tourism.",imagem:`${Ge}assets/images/imovel_1_hotel.jpg`,status:"KMY Prime Exclusive",tags:["Beachfront","Boutique","High Yield","Spa"]},{id:"KMY-002",titulo:"Oceanfront Eco-Luxury Resort — 110 Private Bungalows",subtitulo:"Paradise complex integrated into nature with private helipad",categoria:"hoteis",categoriaNome:"Hotels & Resorts",finalidade:"venda",finalidadeNome:"Sale or Commercial Lease",cidade:"Porto Seguro / Trancoso",uf:"BA",localizacao:"Discovery Coast — Trancoso / BA, Brazil",preco:95e6,precoFormatado:"R$ 95,000,000",areaTotal:"85,000 m²",areaConstruida:"14,200 m²",suites:110,vagas:150,destaques:["400m stretch of semi-private beach","Water park with interconnected organic pools","Certified helipad for day and night landings","Convention and events center for up to 500 guests","Commercial lease available subject to hotel group approval"],descricao:"One of Brazil's most iconic hospitality assets. Eco-friendly structure with green certification, partial water self-sufficiency, internationally renowned spa, and an established clientele of ultra-high-net-worth domestic and international guests.",imagem:`${Ge}assets/images/imovel_2_resort.jpg`,status:"Triple A Asset",tags:["Helipad","Trancoso","Eco-Luxury","Lease Available"]},{id:"KMY-003",titulo:"Exclusive Alpine Boutique Inn — 18 Swiss Chalets with Fireplace",subtitulo:"Mountain charm surrounded by native Araucaria forest",categoria:"pousadas",categoriaNome:"Boutique Inns",finalidade:"arrendamento",finalidadeNome:"Commercial Lease",cidade:"Campos do Jordão",uf:"SP",localizacao:"Alto do Capivari — Campos do Jordão / SP, Brazil",preco:65e3,precoFormatado:"R$ 65,000 / month",precoInfo:"10-year commercial lease agreement",areaTotal:"12,000 m²",areaConstruida:"1,950 m²",suites:18,vagas:25,destaques:["Thermal chalets with heated floors and whirlpool tubs","Climate-controlled underground wine cellar for 1,500 bottles","Award-winning fondue restaurant and mountain bistro","Fully furnished and operating at full capacity","9.8 guest rating across major booking platforms"],descricao:"Commercial lease of a traditional boutique inn in the prime district of Campos do Jordão. 100% equipped turnkey operation with high net margins during winter peak seasons and year-round romantic tourism.",imagem:`${Ge}assets/images/imovel_3_pousada.jpg`,status:"Lease Opportunity",tags:["Mantiqueira Mountains","Fireplace & Spa","Wine Cellar"]},{id:"KMY-004",titulo:"Historic Colonial Boutique Inn — Downtown Paraty",subtitulo:"Restored architectural heritage with spa and natural stone pool",categoria:"pousadas",categoriaNome:"Boutique Inns",finalidade:"venda",finalidadeNome:"Asset Sale",cidade:"Paraty",uf:"RJ",localizacao:"Historic Landmark Center — Paraty / RJ, Brazil",preco:22e6,precoFormatado:"R$ 22,000,000",areaTotal:"2,400 m²",areaConstruida:"1,750 m²",suites:22,vagas:0,destaques:["Centuries-old mansion restored with historical rigor and modern comfort","Landscaped inner courtyard with illuminated natural stone pool","Collection of period furniture and integrated fine artworks","Steady stream of international tourists from FLIP and cultural festivals","Expansion potential with adjacent property"],descricao:"A true gem in the UNESCO historic center of Paraty. Combines Baroque charm and colonial elegance with air-conditioned international-standard suites. Ideal for investors seeking enduring cultural heritage assets.",imagem:`${Ge}assets/images/imovel_4_pousada.jpg`,status:"Heritage Asset",tags:["Historic Center","Colonial Gem","High Visibility"]},{id:"KMY-005",titulo:"General Hospital & Specialized Surgical Center",subtitulo:"Triple A healthcare facility with 12 smart operating rooms",categoria:"hospitais",categoriaNome:"Hospitals & Clinics",finalidade:"venda",finalidadeNome:"Healthcare Asset Sale",cidade:"Campinas / Valinhos",uf:"SP",localizacao:"D. Pedro / Anhanguera Highway Corridor — SP, Brazil",preco:145e6,precoFormatado:"R$ 145,000,000",areaTotal:"18,500 m²",areaConstruida:"16,800 m²",suites:90,vagas:220,destaques:["12 smart operating rooms with laminar airflow","90 inpatient beds including 24 general and coronary ICU beds","Complete diagnostic imaging center (MRI, CT, Hemodynamics)","Certified aeromedical transport helipad","100% compliant with ANVISA RDC-50 healthcare standards"],descricao:"Modern hospital complex designed for healthcare operators, diagnostic medicine networks, or real estate investment trusts via Sale & Leaseback (SLB) contracts. Turnkey and ready for immediate operation.",imagem:`${Ge}assets/images/imovel_5_hospital.jpg`,status:"Institutional Healthcare Asset",tags:["Surgical Center","Full ICU","ANVISA RDC-50","Sale & Leaseback"]},{id:"KMY-006",titulo:"Triple A Corporate Floor — 1,250 m² on Faria Lima Ave.",subtitulo:"Full-floor trophy office in the heart of the financial district",categoria:"lajes",categoriaNome:"Corporate Floors",finalidade:"venda",finalidadeNome:"Sale or Lease",cidade:"São Paulo",uf:"SP",localizacao:"Brigadeiro Faria Lima Ave., Itaim Bibi — São Paulo / SP",preco:52e6,precoFormatado:"R$ 52,000,000",precoInfo:"Lease option available: R$ 380/m²",areaTotal:"1,250 m² private area",areaConstruida:"1,250 m²",suites:0,vagas:38,destaques:["LEED Platinum and WELL Health-Safety certifications","3.10m clear ceiling height with heavy-duty raised flooring","Unitized curtain wall with thermal and acoustic solar control glass","Full backup power generator covering 100% of private area","Smart destination-dispatch elevator system"],descricao:"Prestigious corporate space at Latin America's most sought-after business address. Open-plan layout ideal for investment banks, private equity firms, fintechs, and multinationals demanding top institutional representation.",imagem:`${Ge}assets/images/imovel_6_laje.jpg`,status:"Triple A — Faria Lima",tags:["LEED Platinum","Faria Lima","Open Plan","Trophy Building"]},{id:"KMY-007",titulo:"Panoramic Corporate Floor — 720 m² in Alphaville",subtitulo:"Turnkey office space overlooking preserved green area",categoria:"lajes",categoriaNome:"Corporate Floors",finalidade:"locacao",finalidadeNome:"Corporate Lease",cidade:"Barueri / Alphaville",uf:"SP",localizacao:"Alameda Rio Negro, Alphaville — Barueri / SP, Brazil",preco:68e3,precoFormatado:"R$ 68,000 / month",precoInfo:"Condo fee and property tax upon request",areaTotal:"720 m²",areaConstruida:"720 m²",suites:0,vagas:24,destaques:["Fully cabled with VRF inverter air conditioning","4 private acoustic glass meeting rooms and ground-floor auditorium","Furnished executive pantry and breakout lounge","Adjacent to Iguatemi Alphaville Mall and business hub","Direct access via Castello Branco Highway"],descricao:"Plug & play corporate floor ready for immediate occupancy. Contemporary design featuring wooden acoustic ceilings, high-density vinyl flooring, and panoramic views of the Alphaville skyline.",imagem:`${Ge}assets/images/imovel_7_laje.jpg`,status:"Ready for Occupancy (Plug & Play)",tags:["Alphaville","Plug & Play","VRF Inverter","Panoramic View"]},{id:"KMY-008",titulo:"Luxury Flagship Store — 380 m² on Oscar Freire St.",subtitulo:"Most coveted corner retail property in Jardins",categoria:"lojas",categoriaNome:"Retail Stores",finalidade:"venda",finalidadeNome:"Property / Retail Sale",cidade:"São Paulo",uf:"SP",localizacao:"Rua Oscar Freire, Jardins — São Paulo / SP, Brazil",preco:28e6,precoFormatado:"R$ 28,000,000",precoInfo:"Also available for lease: R$ 130,000/month",areaTotal:"380 m²",areaConstruida:"380 m² across 2 levels",suites:0,vagas:4,destaques:["14-meter storefront window in tempered glass and gold framing","Roman travertine marble flooring and integrated architectural lighting","High-ticket pedestrian foot traffic in the heart of Jardins","Lower level equipped for secure vault storage and VIP lounge","Vacant property ready for luxury brand flagship deployment"],descricao:"Legendary address in São Paulo's luxury district. Ideal for fine jewelry houses, haute couture labels, art galleries, or global brands looking to establish a flagship presence on Brazil's most iconic street.",imagem:`${Ge}assets/images/imovel_8_loja.jpg`,status:"Iconic Retail Corner",tags:["Oscar Freire","Jardins","14m Storefront","Roman Travertine"]},{id:"KMY-009",titulo:"Parque das Acácias Residential — Block of 48 MCMV Units",subtitulo:"Portfolio of turnkey residential apartments for rental income",categoria:"mcmv",categoriaNome:"Residential Lots (MCMV)",finalidade:"venda",finalidadeNome:"Block Sale (Investor)",cidade:"São Paulo",uf:"SP",localizacao:"São Mateus / Itaquera, East Zone — São Paulo / SP",preco:108e5,precoFormatado:"R$ 10,800,000",precoInfo:"Equivalent to R$ 225,000 per unit",areaTotal:"2,800 m² total private area",areaConstruida:"3,400 m²",suites:0,vagas:48,destaques:["48 two-bedroom apartments (48 m² to 52 m²) with balcony","Gated community with 24/7 security, sports court, playground & gourmet lounge","Estimated rental yield: 0.68% p.m. net of vacancy","Located 800m from future monorail station","100% approved documentation and occupancy permit (CEF)"],descricao:"Outstanding opportunity for residential income funds, developers, or patrimonial investors. Block acquisition of ready-to-rent units under the MCMV housing program, ensuring high liquidity and steady rental cash flow.",imagem:`${Ge}assets/images/imovel_9_mcmv.jpg`,status:"Investor Block Sale",tags:["MCMV Tier 3","High Liquidity","Rental Income","Turnkey"]},{id:"KMY-010",titulo:"Regional Shopping Mall — 85 Stores & Multiplex Cinema",subtitulo:"Consolidated retail asset with 100% leased GLA",categoria:"shopping",categoriaNome:"Shopping Malls",finalidade:"venda",finalidadeNome:"Retail Asset Sale",cidade:"Ribeirão Preto",uf:"SP",localizacao:"Greater Ribeirão Preto Metropolitan Area / SP, Brazil",preco:185e6,precoFormatado:"R$ 185,000,000",precoInfo:"Projected Cap Rate: 8.7% p.a.",areaTotal:"42,000 m² land plot",areaConstruida:"26,500 m² (18,200 m² GLA)",suites:0,vagas:980,destaques:["85 satellite stores, 4 anchor stores, and food court with 24 operations","Cinema complex with 5 stadium theaters (2 in 3D)","Automated parking garage with 980 covered spaces","Audited monthly footfall exceeding 380,000 visitors","Solid lease agreements with full common area maintenance pass-through"],descricao:"Prime income-generating asset in the economic hub of São Paulo's agribusiness region. Regional shopping center with dominant market share in its primary catchment area, delivering stable dividend yields and real estate expansion potential.",imagem:`${Ge}assets/images/imovel_10_shopping.jpg`,status:"Institutional Income Asset",tags:["Cap Rate 8.7%","85 Stores","Multiplex Cinema","Ribeirão Preto"]}],ul=[{id:"todos",nome:"All Assets",icone:"layout-grid",total:18},{id:"galpoes",nome:"Logistic Warehouses",icone:"warehouse",total:4},{id:"predios",nome:"Corporate Buildings",icone:"building",total:4},{id:"hoteis",nome:"Hotels & Resorts",icone:"hotel",total:2},{id:"pousadas",nome:"Boutique Inns",icone:"palmtree",total:2},{id:"hospitais",nome:"Hospitals & Clinics",icone:"stethoscope",total:1},{id:"lajes",nome:"Corporate Floors",icone:"building-2",total:2},{id:"lojas",nome:"Retail Stores",icone:"store",total:1},{id:"mcmv",nome:"Residential Lots",icone:"home",total:1},{id:"shopping",nome:"Shopping Malls",icone:"shopping-bag",total:1}],hl=[{num:"01",titulo:"Project Briefing",desc:"In-depth alignment of the client's desires, routine, lifestyle, and investment goals."},{num:"02",titulo:"Conceptual Study",desc:"Creation of initial sketches, sensory moodboard, color palette, and spatial layout."},{num:"03",titulo:"Preliminary & Executive Design",desc:"Detailed plans for construction, electrical, architectural lighting, ceiling, plumbing, and custom millwork."},{num:"04",titulo:"Budgeting & Specifications",desc:"Rigorous cost planning and technical specification of premium finishes, marbles, and fixtures."},{num:"05",titulo:"Site Supervision",desc:"Continuous technical oversight on site, ensuring strict schedule compliance and flawless finishes."},{num:"06",titulo:"Styling & Assembly",desc:"Fine art curation, selection of designer furniture, rugs, drapery, lighting, and exclusive decor pieces."},{num:"07",titulo:"Handover & Warranty",desc:"Final inspection checklist and celebratory key handover with dedicated post-occupancy technical support."}];/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lr="160",fl=0,Cr=1,pl=2,ds=1,ml=2,Zt=3,fi=0,bt=1,Qt=2,di=0,$i=1,$a=2,Rr=3,Lr=4,gl=5,Ei=100,_l=101,vl=102,Pr=103,Dr=104,xl=200,Sl=201,Ml=202,El=203,ja=204,Ka=205,yl=206,bl=207,Al=208,Tl=209,wl=210,Cl=211,Rl=212,Ll=213,Pl=214,Dl=0,Il=1,Ul=2,jn=3,Nl=4,Fl=5,Ol=6,Bl=7,us=0,zl=1,Hl=2,ui=0,Gl=1,Vl=2,kl=3,Wl=4,Xl=5,ql=6,hs=300,Ji=301,Zi=302,Ja=303,Za=304,na=306,Qa=1e3,Gt=1001,er=1002,St=1003,Ir=1004,ha=1005,It=1006,Yl=1007,pn=1008,hi=1009,$l=1010,jl=1011,cr=1012,fs=1013,li=1014,ci=1015,mn=1016,ps=1017,ms=1018,bi=1020,Kl=1021,Vt=1023,Jl=1024,Zl=1025,Ai=1026,Qi=1027,Ql=1028,gs=1029,ec=1030,_s=1031,vs=1033,fa=33776,pa=33777,ma=33778,ga=33779,Ur=35840,Nr=35841,Fr=35842,Or=35843,xs=36196,Br=37492,zr=37496,Hr=37808,Gr=37809,Vr=37810,kr=37811,Wr=37812,Xr=37813,qr=37814,Yr=37815,$r=37816,jr=37817,Kr=37818,Jr=37819,Zr=37820,Qr=37821,_a=36492,eo=36494,to=36495,tc=36283,io=36284,no=36285,ao=36286,Ss=3e3,Ti=3001,ic=3200,nc=3201,Ms=0,ac=1,Ut="",ht="srgb",ti="srgb-linear",dr="display-p3",aa="display-p3-linear",Kn="linear",Je="srgb",Jn="rec709",Zn="p3",Li=7680,ro=519,rc=512,oc=513,sc=514,Es=515,lc=516,cc=517,dc=518,uc=519,oo=35044,so="300 es",tr=1035,ei=2e3,Qn=2001;class tn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],va=Math.PI/180,ir=180/Math.PI;function gn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pt[i&255]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]).toLowerCase()}function yt(i,e,t){return Math.max(e,Math.min(t,i))}function hc(i,e){return(i%e+e)%e}function xa(i,e,t){return(1-t)*i+t*e}function lo(i){return(i&i-1)===0&&i!==0}function nr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function on(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*a+e.x,this.y=r*a+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,n,a,r,s,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,s,o,l,c)}set(e,t,n,a,r,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=a,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],m=n[5],g=n[8],_=a[0],p=a[3],d=a[6],b=a[1],S=a[4],A=a[7],P=a[2],T=a[5],w=a[8];return r[0]=s*_+o*b+l*P,r[3]=s*p+o*S+l*T,r[6]=s*d+o*A+l*w,r[1]=c*_+u*b+f*P,r[4]=c*p+u*S+f*T,r[7]=c*d+u*A+f*w,r[2]=h*_+m*b+g*P,r[5]=h*p+m*S+g*T,r[8]=h*d+m*A+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-n*r*u+n*o*l+a*r*c-a*s*l}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*s-o*c,h=o*l-u*r,m=c*r-s*l,g=t*f+n*h+a*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(a*c-u*n)*_,e[2]=(o*n-a*s)*_,e[3]=h*_,e[4]=(u*t-a*l)*_,e[5]=(a*r-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(s*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Sa.makeScale(e,t)),this}rotate(e){return this.premultiply(Sa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sa=new ze;function ys(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ea(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fc(){const i=ea("canvas");return i.style.display="block",i}const co={};function fn(i){i in co||(co[i]=!0,console.warn(i))}const uo=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ho=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),En={[ti]:{transfer:Kn,primaries:Jn,toReference:i=>i,fromReference:i=>i},[ht]:{transfer:Je,primaries:Jn,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[aa]:{transfer:Kn,primaries:Zn,toReference:i=>i.applyMatrix3(ho),fromReference:i=>i.applyMatrix3(uo)},[dr]:{transfer:Je,primaries:Zn,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ho),fromReference:i=>i.applyMatrix3(uo).convertLinearToSRGB()}},pc=new Set([ti,aa]),Ye={enabled:!0,_workingColorSpace:ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!pc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=En[e].toReference,a=En[t].fromReference;return a(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return En[i].primaries},getTransfer:function(i){return i===Ut?Kn:En[i].transfer}};function ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ma(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Pi;class bs{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pi===void 0&&(Pi=ea("canvas")),Pi.width=e.width,Pi.height=e.height;const n=Pi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ea("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=ji(r[s]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ji(t[n]/255)*255):t[n]=ji(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mc=0;class As{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mc++}),this.uuid=gn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Ea(a[s].image)):r.push(Ea(a[s]))}else r=Ea(a);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bs.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gc=0;class Rt extends tn{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Gt,a=Gt,r=It,s=pn,o=Vt,l=hi,c=Rt.DEFAULT_ANISOTROPY,u=Ut){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=gn(),this.name="",this.source=new As(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(fn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ti?ht:Ut),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hs)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qa:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case er:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qa:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case er:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ht?Ti:Ss}set encoding(e){fn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ti?ht:Ut}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=hs;Rt.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,n=0,a=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*a+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*a+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*a+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,A=(m+1)/2,P=(d+1)/2,T=(u+h)/4,w=(f+_)/4,Y=(g+p)/4;return S>A&&S>P?S<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(S),a=T/n,r=w/n):A>P?A<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(A),n=T/a,r=Y/a):P<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(P),n=w/r,a=Y/r),this.set(n,a,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(f-_)/b,this.z=(h-u)/b,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _c extends tn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const a={width:e,height:t,depth:1};n.encoding!==void 0&&(fn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ti?ht:Ut),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Rt(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new As(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends _c{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ts extends Rt{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=St,this.minFilter=St,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vc extends Rt{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=St,this.minFilter=St,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,r,s,o){let l=n[a+0],c=n[a+1],u=n[a+2],f=n[a+3];const h=r[s+0],m=r[s+1],g=r[s+2],_=r[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==m||u!==g){let p=1-o;const d=l*h+c*m+u*g+f*_,b=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const P=Math.sqrt(S),T=Math.atan2(P,d*b);p=Math.sin(p*T)/P,o=Math.sin(o*T)/P}const A=o*b;if(l=l*p+h*A,c=c*p+m*A,u=u*p+g*A,f=f*p+_*A,p===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,a,r,s){const o=n[a],l=n[a+1],c=n[a+2],u=n[a+3],f=r[s],h=r[s+1],m=r[s+2],g=r[s+3];return e[t]=o*g+u*f+l*m-c*h,e[t+1]=l*g+u*h+c*f-o*m,e[t+2]=c*g+u*m+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(a/2),f=o(r/2),h=l(n/2),m=l(a/2),g=l(r/2);switch(s){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(s-a)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(a+s)/m,this._z=(r+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(r-c)/m,this._x=(a+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(s-a)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*o+a*c-r*l,this._y=a*u+s*l+r*o-n*c,this._z=r*u+s*c+n*l-a*o,this._w=s*u-n*o-a*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,a=this._y,r=this._z,s=this._w;let o=s*e._w+n*e._x+a*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=a,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*a+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=s*f+this._w*h,this._x=n*f+this._x*h,this._y=a*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),a=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(a),n*Math.sin(r),n*Math.cos(r),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*a,this.y=r[1]*t+r[4]*n+r[7]*a,this.z=r[2]*t+r[5]*n+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*a+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*a+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*a+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*n),u=2*(o*t-r*a),f=2*(r*n-s*t);return this.x=t+l*c+s*f-o*u,this.y=n+l*u+o*c-r*f,this.z=a+l*f+r*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a,this.y=r[1]*t+r[5]*n+r[9]*a,this.z=r[2]*t+r[6]*n+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=a*l-r*o,this.y=r*s-n*l,this.z=n*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ya.copy(this).projectOnVector(e),this.sub(ya)}reflect(e){return this.sub(ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ya=new L,fo=new _n;class vn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ot.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ot.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ot.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Ot):Ot.fromBufferAttribute(r,s),Ot.applyMatrix4(e.matrixWorld),this.expandByPoint(Ot);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yn.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yn.copy(n.boundingBox)),yn.applyMatrix4(e.matrixWorld),this.union(yn)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ot),Ot.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sn),bn.subVectors(this.max,sn),Di.subVectors(e.a,sn),Ii.subVectors(e.b,sn),Ui.subVectors(e.c,sn),ii.subVectors(Ii,Di),ni.subVectors(Ui,Ii),gi.subVectors(Di,Ui);let t=[0,-ii.z,ii.y,0,-ni.z,ni.y,0,-gi.z,gi.y,ii.z,0,-ii.x,ni.z,0,-ni.x,gi.z,0,-gi.x,-ii.y,ii.x,0,-ni.y,ni.x,0,-gi.y,gi.x,0];return!ba(t,Di,Ii,Ui,bn)||(t=[1,0,0,0,1,0,0,0,1],!ba(t,Di,Ii,Ui,bn))?!1:(An.crossVectors(ii,ni),t=[An.x,An.y,An.z],ba(t,Di,Ii,Ui,bn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ot).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ot).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yt=[new L,new L,new L,new L,new L,new L,new L,new L],Ot=new L,yn=new vn,Di=new L,Ii=new L,Ui=new L,ii=new L,ni=new L,gi=new L,sn=new L,bn=new L,An=new L,_i=new L;function ba(i,e,t,n,a){for(let r=0,s=i.length-3;r<=s;r+=3){_i.fromArray(i,r);const o=a.x*Math.abs(_i.x)+a.y*Math.abs(_i.y)+a.z*Math.abs(_i.z),l=e.dot(_i),c=t.dot(_i),u=n.dot(_i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const xc=new vn,ln=new L,Aa=new L;class xn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xc.setFromPoints(e).getCenter(n);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ln.subVectors(e,this.center);const t=ln.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(ln,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ln.copy(e.center).add(Aa)),this.expandByPoint(ln.copy(e.center).sub(Aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $t=new L,Ta=new L,Tn=new L,ai=new L,wa=new L,wn=new L,Ca=new L;class ur{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$t)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$t.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($t.copy(this.origin).addScaledVector(this.direction,t),$t.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){Ta.copy(e).add(t).multiplyScalar(.5),Tn.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(Ta);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Tn),o=ai.dot(this.direction),l=-ai.dot(Tn),c=ai.lengthSq(),u=Math.abs(1-s*s);let f,h,m,g;if(u>0)if(f=s*l-o,h=s*o-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,m=f*(f+s*h+2*o)+h*(s*f+h+2*l)+c}else h=r,f=Math.max(0,-(s*h+o)),m=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(s*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-s*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(f=Math.max(0,-(s*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c);else h=s>0?-r:r,f=Math.max(0,-(s*h+o)),m=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),a&&a.copy(Ta).addScaledVector(Tn,h),m}intersectSphere(e,t){$t.subVectors(e.center,this.origin);const n=$t.dot(this.direction),a=$t.dot($t)-n*n,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,r,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,a=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,a=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),n>s||r>a||((r>n||isNaN(n))&&(n=r),(s<a||isNaN(a))&&(a=s),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>a)||((o>n||n!==n)&&(n=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,$t)!==null}intersectTriangle(e,t,n,a,r){wa.subVectors(t,e),wn.subVectors(n,e),Ca.crossVectors(wa,wn);let s=this.direction.dot(Ca),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;ai.subVectors(this.origin,e);const l=o*this.direction.dot(wn.crossVectors(ai,wn));if(l<0)return null;const c=o*this.direction.dot(wa.cross(ai));if(c<0||l+c>s)return null;const u=-o*ai.dot(Ca);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(e,t,n,a,r,s,o,l,c,u,f,h,m,g,_,p){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,s,o,l,c,u,f,h,m,g,_,p)}set(e,t,n,a,r,s,o,l,c,u,f,h,m,g,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=a,d[1]=r,d[5]=s,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,a=1/Ni.setFromMatrixColumn(e,0).length(),r=1/Ni.setFromMatrixColumn(e,1).length(),s=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(a),c=Math.sin(a),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=s*u,m=s*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+m*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,_=c*f;t[0]=h+_*o,t[4]=g*o-m,t[8]=s*c,t[1]=s*f,t[5]=s*u,t[9]=-o,t[2]=m*o-g,t[6]=_+h*o,t[10]=s*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,_=c*f;t[0]=h-_*o,t[4]=-s*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=s*u,t[9]=_-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const h=s*u,m=s*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,m=s*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+m,t[1]=f,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=s*l,m=s*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=s*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sc,e,Mc)}lookAt(e,t,n){const a=this.elements;return Tt.subVectors(e,t),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),ri.crossVectors(n,Tt),ri.lengthSq()===0&&(Math.abs(n.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),ri.crossVectors(n,Tt)),ri.normalize(),Cn.crossVectors(Tt,ri),a[0]=ri.x,a[4]=Cn.x,a[8]=Tt.x,a[1]=ri.y,a[5]=Cn.y,a[9]=Tt.y,a[2]=ri.z,a[6]=Cn.z,a[10]=Tt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],b=n[3],S=n[7],A=n[11],P=n[15],T=a[0],w=a[4],Y=a[8],M=a[12],y=a[1],k=a[5],W=a[9],te=a[13],R=a[2],O=a[6],G=a[10],q=a[14],z=a[3],V=a[7],X=a[11],ee=a[15];return r[0]=s*T+o*y+l*R+c*z,r[4]=s*w+o*k+l*O+c*V,r[8]=s*Y+o*W+l*G+c*X,r[12]=s*M+o*te+l*q+c*ee,r[1]=u*T+f*y+h*R+m*z,r[5]=u*w+f*k+h*O+m*V,r[9]=u*Y+f*W+h*G+m*X,r[13]=u*M+f*te+h*q+m*ee,r[2]=g*T+_*y+p*R+d*z,r[6]=g*w+_*k+p*O+d*V,r[10]=g*Y+_*W+p*G+d*X,r[14]=g*M+_*te+p*q+d*ee,r[3]=b*T+S*y+A*R+P*z,r[7]=b*w+S*k+A*O+P*V,r[11]=b*Y+S*W+A*G+P*X,r[15]=b*M+S*te+A*q+P*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],_=e[7],p=e[11],d=e[15];return g*(+r*l*f-a*c*f-r*o*h+n*c*h+a*o*m-n*l*m)+_*(+t*l*m-t*c*h+r*s*h-a*s*m+a*c*u-r*l*u)+p*(+t*c*f-t*o*m-r*s*f+n*s*m+r*o*u-n*c*u)+d*(-a*o*u-t*l*f+t*o*h+a*s*f-n*s*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],_=e[13],p=e[14],d=e[15],b=f*p*c-_*h*c+_*l*m-o*p*m-f*l*d+o*h*d,S=g*h*c-u*p*c-g*l*m+s*p*m+u*l*d-s*h*d,A=u*_*c-g*f*c+g*o*m-s*_*m-u*o*d+s*f*d,P=g*f*l-u*_*l-g*o*h+s*_*h+u*o*p-s*f*p,T=t*b+n*S+a*A+r*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=b*w,e[1]=(_*h*r-f*p*r-_*a*m+n*p*m+f*a*d-n*h*d)*w,e[2]=(o*p*r-_*l*r+_*a*c-n*p*c-o*a*d+n*l*d)*w,e[3]=(f*l*r-o*h*r-f*a*c+n*h*c+o*a*m-n*l*m)*w,e[4]=S*w,e[5]=(u*p*r-g*h*r+g*a*m-t*p*m-u*a*d+t*h*d)*w,e[6]=(g*l*r-s*p*r-g*a*c+t*p*c+s*a*d-t*l*d)*w,e[7]=(s*h*r-u*l*r+u*a*c-t*h*c-s*a*m+t*l*m)*w,e[8]=A*w,e[9]=(g*f*r-u*_*r-g*n*m+t*_*m+u*n*d-t*f*d)*w,e[10]=(s*_*r-g*o*r+g*n*c-t*_*c-s*n*d+t*o*d)*w,e[11]=(u*o*r-s*f*r-u*n*c+t*f*c+s*n*m-t*o*m)*w,e[12]=P*w,e[13]=(u*_*a-g*f*a+g*n*h-t*_*h-u*n*p+t*f*p)*w,e[14]=(g*o*a-s*_*a-g*n*l+t*_*l+s*n*p-t*o*p)*w,e[15]=(s*f*a-u*o*a+u*n*l-t*f*l-s*n*h+t*o*h)*w,this}scale(e){const t=this.elements,n=e.x,a=e.y,r=e.z;return t[0]*=n,t[4]*=a,t[8]*=r,t[1]*=n,t[5]*=a,t[9]*=r,t[2]*=n,t[6]*=a,t[10]*=r,t[3]*=n,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),r=1-n,s=e.x,o=e.y,l=e.z,c=r*s,u=r*o;return this.set(c*s+n,c*o-a*l,c*l+a*o,0,c*o+a*l,u*o+n,u*l-a*s,0,c*l-a*o,u*l+a*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,r,s){return this.set(1,n,r,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,u=s+s,f=o+o,h=r*c,m=r*u,g=r*f,_=s*u,p=s*f,d=o*f,b=l*c,S=l*u,A=l*f,P=n.x,T=n.y,w=n.z;return a[0]=(1-(_+d))*P,a[1]=(m+A)*P,a[2]=(g-S)*P,a[3]=0,a[4]=(m-A)*T,a[5]=(1-(h+d))*T,a[6]=(p+b)*T,a[7]=0,a[8]=(g+S)*w,a[9]=(p-b)*w,a[10]=(1-(h+_))*w,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;let r=Ni.set(a[0],a[1],a[2]).length();const s=Ni.set(a[4],a[5],a[6]).length(),o=Ni.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),e.x=a[12],e.y=a[13],e.z=a[14],Bt.copy(this);const c=1/r,u=1/s,f=1/o;return Bt.elements[0]*=c,Bt.elements[1]*=c,Bt.elements[2]*=c,Bt.elements[4]*=u,Bt.elements[5]*=u,Bt.elements[6]*=u,Bt.elements[8]*=f,Bt.elements[9]*=f,Bt.elements[10]*=f,t.setFromRotationMatrix(Bt),n.x=r,n.y=s,n.z=o,this}makePerspective(e,t,n,a,r,s,o=ei){const l=this.elements,c=2*r/(t-e),u=2*r/(n-a),f=(t+e)/(t-e),h=(n+a)/(n-a);let m,g;if(o===ei)m=-(s+r)/(s-r),g=-2*s*r/(s-r);else if(o===Qn)m=-s/(s-r),g=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,a,r,s,o=ei){const l=this.elements,c=1/(t-e),u=1/(n-a),f=1/(s-r),h=(t+e)*c,m=(n+a)*u;let g,_;if(o===ei)g=(s+r)*f,_=-2*f;else if(o===Qn)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ni=new L,Bt=new nt,Sc=new L(0,0,0),Mc=new L(1,1,1),ri=new L,Cn=new L,Tt=new L,po=new nt,mo=new _n;class ra{constructor(e=0,t=0,n=0,a=ra.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],u=a[9],f=a[2],h=a[6],m=a[10];switch(t){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-yt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return po.makeRotationFromQuaternion(e),this.setFromRotationMatrix(po,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mo.setFromEuler(this),this.setFromQuaternion(mo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ra.DEFAULT_ORDER="XYZ";class ws{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ec=0;const go=new L,Fi=new _n,jt=new nt,Rn=new L,cn=new L,yc=new L,bc=new _n,_o=new L(1,0,0),vo=new L(0,1,0),xo=new L(0,0,1),Ac={type:"added"},Tc={type:"removed"};class ut extends tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new L,t=new ra,n=new _n,a=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new nt},normalMatrix:{value:new ze}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(_o,e)}rotateY(e){return this.rotateOnAxis(vo,e)}rotateZ(e){return this.rotateOnAxis(xo,e)}translateOnAxis(e,t){return go.copy(e).applyQuaternion(this.quaternion),this.position.add(go.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_o,e)}translateY(e){return this.translateOnAxis(vo,e)}translateZ(e){return this.translateOnAxis(xo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rn.copy(e):Rn.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),cn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jt.lookAt(cn,Rn,this.up):jt.lookAt(Rn,cn,this.up),this.quaternion.setFromRotationMatrix(jt),a&&(jt.extractRotation(a.matrixWorld),Fi.setFromRotationMatrix(jt),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ac)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(jt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cn,e,yc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cn,bc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++){const o=a[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),f=s(e.shapes),h=s(e.skeletons),m=s(e.animations),g=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=a,n;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}ut.DEFAULT_UP=new L(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zt=new L,Kt=new L,Ra=new L,Jt=new L,Oi=new L,Bi=new L,So=new L,La=new L,Pa=new L,Da=new L;let Ln=!1;class Ht{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),zt.subVectors(e,t),a.cross(zt);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,n,a,r){zt.subVectors(a,t),Kt.subVectors(n,t),Ra.subVectors(e,t);const s=zt.dot(zt),o=zt.dot(Kt),l=zt.dot(Ra),c=Kt.dot(Kt),u=Kt.dot(Ra),f=s*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,m=(c*l-o*u)*h,g=(s*u-o*l)*h;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,Jt)===null?!1:Jt.x>=0&&Jt.y>=0&&Jt.x+Jt.y<=1}static getUV(e,t,n,a,r,s,o,l){return Ln===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ln=!0),this.getInterpolation(e,t,n,a,r,s,o,l)}static getInterpolation(e,t,n,a,r,s,o,l){return this.getBarycoord(e,t,n,a,Jt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jt.x),l.addScaledVector(s,Jt.y),l.addScaledVector(o,Jt.z),l)}static isFrontFacing(e,t,n,a){return zt.subVectors(n,t),Kt.subVectors(e,t),zt.cross(Kt).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zt.subVectors(this.c,this.b),Kt.subVectors(this.a,this.b),zt.cross(Kt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,a,r){return Ln===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ln=!0),Ht.getInterpolation(e,this.a,this.b,this.c,t,n,a,r)}getInterpolation(e,t,n,a,r){return Ht.getInterpolation(e,this.a,this.b,this.c,t,n,a,r)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,r=this.c;let s,o;Oi.subVectors(a,n),Bi.subVectors(r,n),La.subVectors(e,n);const l=Oi.dot(La),c=Bi.dot(La);if(l<=0&&c<=0)return t.copy(n);Pa.subVectors(e,a);const u=Oi.dot(Pa),f=Bi.dot(Pa);if(u>=0&&f<=u)return t.copy(a);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Oi,s);Da.subVectors(e,r);const m=Oi.dot(Da),g=Bi.dot(Da);if(g>=0&&m<=g)return t.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Bi,o);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return So.subVectors(r,a),o=(f-u)/(f-u+(m-g)),t.copy(a).addScaledVector(So,o);const d=1/(p+_+h);return s=_*d,o=h*d,t.copy(n).addScaledVector(Oi,s).addScaledVector(Bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Pn={h:0,s:0,l:0};function Ia(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,a=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,a),this}setHSL(e,t,n,a=Ye.workingColorSpace){if(e=hc(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Ia(s,r,e+1/3),this.g=Ia(s,r,e),this.b=Ia(s,r,e-1/3)}return Ye.toWorkingColorSpace(this,a),this}setStyle(e,t=ht){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ht){const n=Cs[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ht){return Ye.fromWorkingColorSpace(mt.copy(this),e),Math.round(yt(mt.r*255,0,255))*65536+Math.round(yt(mt.g*255,0,255))*256+Math.round(yt(mt.b*255,0,255))}getHexString(e=ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(mt.copy(this),t);const n=mt.r,a=mt.g,r=mt.b,s=Math.max(n,a,r),o=Math.min(n,a,r);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=u<=.5?f/(s+o):f/(2-s-o),s){case n:l=(a-r)/f+(a<r?6:0);break;case a:l=(r-n)/f+2;break;case r:l=(n-a)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(mt.copy(this),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=ht){Ye.fromWorkingColorSpace(mt.copy(this),e);const t=mt.r,n=mt.g,a=mt.b;return e!==ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(Pn);const n=xa(oi.h,Pn.h,t),a=xa(oi.s,Pn.s,t),r=xa(oi.l,Pn.l,t);return this.setHSL(n,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*a,this.g=r[1]*t+r[4]*n+r[7]*a,this.b=r[2]*t+r[5]*n+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mt=new Fe;Fe.NAMES=Cs;let wc=0;class Ri extends tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=gn(),this.name="",this.type="Material",this.blending=$i,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ja,this.blendDst=Ka,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=jn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ro,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ja&&(n.blendSrc=this.blendSrc),this.blendDst!==Ka&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==jn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ro&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=a(e.textures),s=a(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rs extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=us,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new L,Dn=new We;class Nt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix3(e),this.setXY(t,Dn.x,Dn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=on(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=on(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=on(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=on(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=on(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),a=Et(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),a=Et(a,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oo&&(e.usage=this.usage),e}}class Ls extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ps extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lt extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Cc=0;const Dt=new nt,Ua=new ut,zi=new L,wt=new vn,dn=new vn,dt=new L;class Ft extends tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ys(e)?Ps:Ls)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dt.makeRotationFromQuaternion(e),this.applyMatrix4(Dt),this}rotateX(e){return Dt.makeRotationX(e),this.applyMatrix4(Dt),this}rotateY(e){return Dt.makeRotationY(e),this.applyMatrix4(Dt),this}rotateZ(e){return Dt.makeRotationZ(e),this.applyMatrix4(Dt),this}translate(e,t,n){return Dt.makeTranslation(e,t,n),this.applyMatrix4(Dt),this}scale(e,t,n){return Dt.makeScale(e,t,n),this.applyMatrix4(Dt),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=[];for(let n=0,a=e.length;n<a;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const r=t[n];wt.setFromBufferAttribute(r),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];dn.setFromBufferAttribute(o),this.morphTargetsRelative?(dt.addVectors(wt.min,dn.min),wt.expandByPoint(dt),dt.addVectors(wt.max,dn.max),wt.expandByPoint(dt)):(wt.expandByPoint(dn.min),wt.expandByPoint(dn.max))}wt.getCenter(n);let a=0;for(let r=0,s=e.count;r<s;r++)dt.fromBufferAttribute(e,r),a=Math.max(a,n.distanceToSquared(dt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)dt.fromBufferAttribute(o,c),l&&(zi.fromBufferAttribute(e,c),dt.add(zi)),a=Math.max(a,n.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,a=t.position.array,r=t.normal.array,s=t.uv.array,o=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let y=0;y<o;y++)c[y]=new L,u[y]=new L;const f=new L,h=new L,m=new L,g=new We,_=new We,p=new We,d=new L,b=new L;function S(y,k,W){f.fromArray(a,y*3),h.fromArray(a,k*3),m.fromArray(a,W*3),g.fromArray(s,y*2),_.fromArray(s,k*2),p.fromArray(s,W*2),h.sub(f),m.sub(f),_.sub(g),p.sub(g);const te=1/(_.x*p.y-p.x*_.y);isFinite(te)&&(d.copy(h).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(te),b.copy(m).multiplyScalar(_.x).addScaledVector(h,-p.x).multiplyScalar(te),c[y].add(d),c[k].add(d),c[W].add(d),u[y].add(b),u[k].add(b),u[W].add(b))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let y=0,k=A.length;y<k;++y){const W=A[y],te=W.start,R=W.count;for(let O=te,G=te+R;O<G;O+=3)S(n[O+0],n[O+1],n[O+2])}const P=new L,T=new L,w=new L,Y=new L;function M(y){w.fromArray(r,y*3),Y.copy(w);const k=c[y];P.copy(k),P.sub(w.multiplyScalar(w.dot(k))).normalize(),T.crossVectors(Y,k);const te=T.dot(u[y])<0?-1:1;l[y*4]=P.x,l[y*4+1]=P.y,l[y*4+2]=P.z,l[y*4+3]=te}for(let y=0,k=A.length;y<k;++y){const W=A[y],te=W.start,R=W.count;for(let O=te,G=te+R;O<G;O+=3)M(n[O+0]),M(n[O+1]),M(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const a=new L,r=new L,s=new L,o=new L,l=new L,c=new L,u=new L,f=new L;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);a.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),u.subVectors(s,r),f.subVectors(a,r),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)a.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,r),f.subVectors(a,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let d=0;d<u;d++)h[g++]=c[m++]}return new Nt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,n=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(a[l]=u,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const a=e.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mo=new nt,vi=new ur,In=new xn,Eo=new L,Hi=new L,Gi=new L,Vi=new L,Na=new L,Un=new L,Nn=new We,Fn=new We,On=new We,yo=new L,bo=new L,Ao=new L,Bn=new L,zn=new L;class Xt extends ut{constructor(e=new Ft,t=new Rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){Un.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Na.fromBufferAttribute(f,e),s?Un.addScaledVector(Na,u):Un.addScaledVector(Na.sub(t),u))}t.add(Un)}return t}raycast(e,t){const n=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),In.copy(n.boundingSphere),In.applyMatrix4(r),vi.copy(e.ray).recast(e.near),!(In.containsPoint(vi.origin)===!1&&(vi.intersectSphere(In,Eo)===null||vi.origin.distanceToSquared(Eo)>(e.far-e.near)**2))&&(Mo.copy(r).invert(),vi.copy(e.ray).applyMatrix4(Mo),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,_=h.length;g<_;g++){const p=h[g],d=s[p.materialIndex],b=Math.max(p.start,m.start),S=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let A=b,P=S;A<P;A+=3){const T=o.getX(A),w=o.getX(A+1),Y=o.getX(A+2);a=Hn(this,d,e,n,c,u,f,T,w,Y),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const b=o.getX(p),S=o.getX(p+1),A=o.getX(p+2);a=Hn(this,s,e,n,c,u,f,b,S,A),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=h.length;g<_;g++){const p=h[g],d=s[p.materialIndex],b=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let A=b,P=S;A<P;A+=3){const T=A,w=A+1,Y=A+2;a=Hn(this,d,e,n,c,u,f,T,w,Y),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const b=p,S=p+1,A=p+2;a=Hn(this,s,e,n,c,u,f,b,S,A),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function Rc(i,e,t,n,a,r,s,o){let l;if(e.side===bt?l=n.intersectTriangle(s,r,a,!0,o):l=n.intersectTriangle(a,r,s,e.side===fi,o),l===null)return null;zn.copy(o),zn.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(zn);return c<t.near||c>t.far?null:{distance:c,point:zn.clone(),object:i}}function Hn(i,e,t,n,a,r,s,o,l,c){i.getVertexPosition(o,Hi),i.getVertexPosition(l,Gi),i.getVertexPosition(c,Vi);const u=Rc(i,e,t,n,Hi,Gi,Vi,Bn);if(u){a&&(Nn.fromBufferAttribute(a,o),Fn.fromBufferAttribute(a,l),On.fromBufferAttribute(a,c),u.uv=Ht.getInterpolation(Bn,Hi,Gi,Vi,Nn,Fn,On,new We)),r&&(Nn.fromBufferAttribute(r,o),Fn.fromBufferAttribute(r,l),On.fromBufferAttribute(r,c),u.uv1=Ht.getInterpolation(Bn,Hi,Gi,Vi,Nn,Fn,On,new We),u.uv2=u.uv1),s&&(yo.fromBufferAttribute(s,o),bo.fromBufferAttribute(s,l),Ao.fromBufferAttribute(s,c),u.normal=Ht.getInterpolation(Bn,Hi,Gi,Vi,yo,bo,Ao,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new L,materialIndex:0};Ht.getNormal(Hi,Gi,Vi,f.normal),u.face=f}return u}class nn extends Ft{constructor(e=1,t=1,n=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,s,r,0),g("z","y","x",1,-1,n,t,-e,s,r,1),g("x","z","y",1,1,e,n,t,a,s,2),g("x","z","y",1,-1,e,n,-t,a,s,3),g("x","y","z",1,-1,e,t,n,a,r,4),g("x","y","z",-1,-1,e,t,-n,a,r,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(f,2));function g(_,p,d,b,S,A,P,T,w,Y,M){const y=A/w,k=P/Y,W=A/2,te=P/2,R=T/2,O=w+1,G=Y+1;let q=0,z=0;const V=new L;for(let X=0;X<G;X++){const ee=X*k-te;for(let Z=0;Z<O;Z++){const H=Z*y-W;V[_]=H*b,V[p]=ee*S,V[d]=R,c.push(V.x,V.y,V.z),V[_]=0,V[p]=0,V[d]=T>0?1:-1,u.push(V.x,V.y,V.z),f.push(Z/w),f.push(1-X/Y),q+=1}}for(let X=0;X<Y;X++)for(let ee=0;ee<w;ee++){const Z=h+ee+O*X,H=h+ee+O*(X+1),$=h+(ee+1)+O*(X+1),se=h+(ee+1)+O*X;l.push(Z,H,se),l.push(H,$,se),z+=6}o.addGroup(m,z,M),m+=z,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function en(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function xt(i){const e={};for(let t=0;t<i.length;t++){const n=en(i[t]);for(const a in n)e[a]=n[a]}return e}function Lc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ds(i){return i.getRenderTarget()===null?i.outputColorSpace:Ye.workingColorSpace}const Pc={clone:en,merge:xt};var Dc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ic=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dc,this.fragmentShader=Ic,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=en(e.uniforms),this.uniformsGroups=Lc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Is extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ct extends Is{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,a,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(va*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,t-=s.offsetY*n/c,a*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ki=-90,Wi=1;class Uc extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Ct(ki,Wi,e,t);a.layers=this.layers,this.add(a);const r=new Ct(ki,Wi,e,t);r.layers=this.layers,this.add(r);const s=new Ct(ki,Wi,e,t);s.layers=this.layers,this.add(s);const o=new Ct(ki,Wi,e,t);o.layers=this.layers,this.add(o);const l=new Ct(ki,Wi,e,t);l.layers=this.layers,this.add(l);const c=new Ct(ki,Wi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,r,s,o,l]=t;for(const c of t)this.remove(c);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qn)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,a),e.render(t,r),e.setRenderTarget(n,1,a),e.render(t,s),e.setRenderTarget(n,2,a),e.render(t,o),e.setRenderTarget(n,3,a),e.render(t,l),e.setRenderTarget(n,4,a),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,a),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Us extends Rt{constructor(e,t,n,a,r,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ji,super(e,t,n,a,r,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nc extends wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];t.encoding!==void 0&&(fn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ti?ht:Ut),this.texture=new Us(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new nn(5,5,5),r=new Ci({name:"CubemapFromEquirect",uniforms:en(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bt,blending:di});r.uniforms.tEquirect.value=t;const s=new Xt(a,r),o=t.minFilter;return t.minFilter===pn&&(t.minFilter=It),new Uc(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,a){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,a);e.setRenderTarget(r)}}const Fa=new L,Fc=new L,Oc=new ze;class Si{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=Fa.subVectors(n,t).cross(Fc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Fa),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Oc.getNormalMatrix(e),a=this.coplanarPoint(Fa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new xn,Gn=new L;class hr{constructor(e=new Si,t=new Si,n=new Si,a=new Si,r=new Si,s=new Si){this.planes=[e,t,n,a,r,s]}set(e,t,n,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei){const n=this.planes,a=e.elements,r=a[0],s=a[1],o=a[2],l=a[3],c=a[4],u=a[5],f=a[6],h=a[7],m=a[8],g=a[9],_=a[10],p=a[11],d=a[12],b=a[13],S=a[14],A=a[15];if(n[0].setComponents(l-r,h-c,p-m,A-d).normalize(),n[1].setComponents(l+r,h+c,p+m,A+d).normalize(),n[2].setComponents(l+s,h+u,p+g,A+b).normalize(),n[3].setComponents(l-s,h-u,p-g,A-b).normalize(),n[4].setComponents(l-o,h-f,p-_,A-S).normalize(),t===ei)n[5].setComponents(l+o,h+f,p+_,A+S).normalize();else if(t===Qn)n[5].setComponents(o,f,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(Gn.x=a.normal.x>0?e.max.x:e.min.x,Gn.y=a.normal.y>0?e.max.y:e.min.y,Gn.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Gn)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ns(){let i=null,e=!1,t=null,n=null;function a(r,s){t(r,s),n=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Bc(i,e){const t=e.isWebGL2,n=new WeakMap;function a(c,u){const f=c.array,h=c.usage,m=f.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=i.SHORT;else if(f instanceof Uint32Array)_=i.UNSIGNED_INT;else if(f instanceof Int32Array)_=i.INT;else if(f instanceof Int8Array)_=i.BYTE;else if(f instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,u,f){const h=u.array,m=u._updateRange,g=u.updateRanges;if(i.bindBuffer(f,c),m.count===-1&&g.length===0&&i.bufferSubData(f,0,h),g.length!==0){for(let _=0,p=g.length;_<p;_++){const d=g[_];t?i.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):i.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,a(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,u),f.version=c.version}}return{get:s,remove:o,update:l}}class fr extends Ft{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const r=e/2,s=t/2,o=Math.floor(n),l=Math.floor(a),c=o+1,u=l+1,f=e/o,h=t/l,m=[],g=[],_=[],p=[];for(let d=0;d<u;d++){const b=d*h-s;for(let S=0;S<c;S++){const A=S*f-r;g.push(A,-b,0),_.push(0,0,1),p.push(S/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){const S=b+c*d,A=b+c*(d+1),P=b+1+c*(d+1),T=b+1+c*d;m.push(S,A,T),m.push(A,P,T)}this.setIndex(m),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.widthSegments,e.heightSegments)}}var zc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Wc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$c=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ld=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ud=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,md="gl_FragColor = linearToOutputTexel( gl_FragColor );",gd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,_d=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ed=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Td=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ld=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Dd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Id=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ud=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Od=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$d=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,eu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,tu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,iu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,au=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ru=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ou=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,su=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,du=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_u=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Su=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Mu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Eu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Au=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ru=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Du=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Iu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ou=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ku=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ju=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ku=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ju=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,th=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ih=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ah=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ch=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ph=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_h=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:zc,alphahash_pars_fragment:Hc,alphamap_fragment:Gc,alphamap_pars_fragment:Vc,alphatest_fragment:kc,alphatest_pars_fragment:Wc,aomap_fragment:Xc,aomap_pars_fragment:qc,batching_pars_vertex:Yc,batching_vertex:$c,begin_vertex:jc,beginnormal_vertex:Kc,bsdfs:Jc,iridescence_fragment:Zc,bumpmap_pars_fragment:Qc,clipping_planes_fragment:ed,clipping_planes_pars_fragment:td,clipping_planes_pars_vertex:id,clipping_planes_vertex:nd,color_fragment:ad,color_pars_fragment:rd,color_pars_vertex:od,color_vertex:sd,common:ld,cube_uv_reflection_fragment:cd,defaultnormal_vertex:dd,displacementmap_pars_vertex:ud,displacementmap_vertex:hd,emissivemap_fragment:fd,emissivemap_pars_fragment:pd,colorspace_fragment:md,colorspace_pars_fragment:gd,envmap_fragment:_d,envmap_common_pars_fragment:vd,envmap_pars_fragment:xd,envmap_pars_vertex:Sd,envmap_physical_pars_fragment:Dd,envmap_vertex:Md,fog_vertex:Ed,fog_pars_vertex:yd,fog_fragment:bd,fog_pars_fragment:Ad,gradientmap_pars_fragment:Td,lightmap_fragment:wd,lightmap_pars_fragment:Cd,lights_lambert_fragment:Rd,lights_lambert_pars_fragment:Ld,lights_pars_begin:Pd,lights_toon_fragment:Id,lights_toon_pars_fragment:Ud,lights_phong_fragment:Nd,lights_phong_pars_fragment:Fd,lights_physical_fragment:Od,lights_physical_pars_fragment:Bd,lights_fragment_begin:zd,lights_fragment_maps:Hd,lights_fragment_end:Gd,logdepthbuf_fragment:Vd,logdepthbuf_pars_fragment:kd,logdepthbuf_pars_vertex:Wd,logdepthbuf_vertex:Xd,map_fragment:qd,map_pars_fragment:Yd,map_particle_fragment:$d,map_particle_pars_fragment:jd,metalnessmap_fragment:Kd,metalnessmap_pars_fragment:Jd,morphcolor_vertex:Zd,morphnormal_vertex:Qd,morphtarget_pars_vertex:eu,morphtarget_vertex:tu,normal_fragment_begin:iu,normal_fragment_maps:nu,normal_pars_fragment:au,normal_pars_vertex:ru,normal_vertex:ou,normalmap_pars_fragment:su,clearcoat_normal_fragment_begin:lu,clearcoat_normal_fragment_maps:cu,clearcoat_pars_fragment:du,iridescence_pars_fragment:uu,opaque_fragment:hu,packing:fu,premultiplied_alpha_fragment:pu,project_vertex:mu,dithering_fragment:gu,dithering_pars_fragment:_u,roughnessmap_fragment:vu,roughnessmap_pars_fragment:xu,shadowmap_pars_fragment:Su,shadowmap_pars_vertex:Mu,shadowmap_vertex:Eu,shadowmask_pars_fragment:yu,skinbase_vertex:bu,skinning_pars_vertex:Au,skinning_vertex:Tu,skinnormal_vertex:wu,specularmap_fragment:Cu,specularmap_pars_fragment:Ru,tonemapping_fragment:Lu,tonemapping_pars_fragment:Pu,transmission_fragment:Du,transmission_pars_fragment:Iu,uv_pars_fragment:Uu,uv_pars_vertex:Nu,uv_vertex:Fu,worldpos_vertex:Ou,background_vert:Bu,background_frag:zu,backgroundCube_vert:Hu,backgroundCube_frag:Gu,cube_vert:Vu,cube_frag:ku,depth_vert:Wu,depth_frag:Xu,distanceRGBA_vert:qu,distanceRGBA_frag:Yu,equirect_vert:$u,equirect_frag:ju,linedashed_vert:Ku,linedashed_frag:Ju,meshbasic_vert:Zu,meshbasic_frag:Qu,meshlambert_vert:eh,meshlambert_frag:th,meshmatcap_vert:ih,meshmatcap_frag:nh,meshnormal_vert:ah,meshnormal_frag:rh,meshphong_vert:oh,meshphong_frag:sh,meshphysical_vert:lh,meshphysical_frag:ch,meshtoon_vert:dh,meshtoon_frag:uh,points_vert:hh,points_frag:fh,shadow_vert:ph,shadow_frag:mh,sprite_vert:gh,sprite_frag:_h},ne={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Wt={basic:{uniforms:xt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:xt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Fe(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:xt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:xt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:xt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Fe(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:xt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:xt([ne.points,ne.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:xt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:xt([ne.common,ne.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:xt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:xt([ne.sprite,ne.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:xt([ne.common,ne.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:xt([ne.lights,ne.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Wt.physical={uniforms:xt([Wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Vn={r:0,b:0,g:0};function vh(i,e,t,n,a,r,s){const o=new Fe(0);let l=r===!0?0:1,c,u,f=null,h=0,m=null;function g(p,d){let b=!1,S=d.isScene===!0?d.background:null;S&&S.isTexture&&(S=(d.backgroundBlurriness>0?t:e).get(S)),S===null?_(o,l):S&&S.isColor&&(_(S,1),b=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),S&&(S.isCubeTexture||S.mapping===na)?(u===void 0&&(u=new Xt(new nn(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:en(Wt.backgroundCube.uniforms),vertexShader:Wt.backgroundCube.vertexShader,fragmentShader:Wt.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Ye.getTransfer(S.colorSpace)!==Je,(f!==S||h!==S.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Xt(new fr(2,2),new Ci({name:"BackgroundMaterial",uniforms:en(Wt.background.uniforms),vertexShader:Wt.background.vertexShader,fragmentShader:Wt.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(S.colorSpace)!==Je,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,d){p.getRGB(Vn,Ds(i)),n.buffers.color.setClear(Vn.r,Vn.g,Vn.b,d,s)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),l=d,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function xh(i,e,t,n){const a=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,o={},l=p(null);let c=l,u=!1;function f(R,O,G,q,z){let V=!1;if(s){const X=_(q,G,O);c!==X&&(c=X,m(c.object)),V=d(R,q,G,z),V&&b(R,q,G,z)}else{const X=O.wireframe===!0;(c.geometry!==q.id||c.program!==G.id||c.wireframe!==X)&&(c.geometry=q.id,c.program=G.id,c.wireframe=X,V=!0)}z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(V||u)&&(u=!1,Y(R,O,G,q),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function h(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?i.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?i.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function _(R,O,G){const q=G.wireframe===!0;let z=o[R.id];z===void 0&&(z={},o[R.id]=z);let V=z[O.id];V===void 0&&(V={},z[O.id]=V);let X=V[q];return X===void 0&&(X=p(h()),V[q]=X),X}function p(R){const O=[],G=[],q=[];for(let z=0;z<a;z++)O[z]=0,G[z]=0,q[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:q,object:R,attributes:{},index:null}}function d(R,O,G,q){const z=c.attributes,V=O.attributes;let X=0;const ee=G.getAttributes();for(const Z in ee)if(ee[Z].location>=0){const $=z[Z];let se=V[Z];if(se===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(se=R.instanceColor)),$===void 0||$.attribute!==se||se&&$.data!==se.data)return!0;X++}return c.attributesNum!==X||c.index!==q}function b(R,O,G,q){const z={},V=O.attributes;let X=0;const ee=G.getAttributes();for(const Z in ee)if(ee[Z].location>=0){let $=V[Z];$===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&($=R.instanceColor));const se={};se.attribute=$,$&&$.data&&(se.data=$.data),z[Z]=se,X++}c.attributes=z,c.attributesNum=X,c.index=q}function S(){const R=c.newAttributes;for(let O=0,G=R.length;O<G;O++)R[O]=0}function A(R){P(R,0)}function P(R,O){const G=c.newAttributes,q=c.enabledAttributes,z=c.attributeDivisors;G[R]=1,q[R]===0&&(i.enableVertexAttribArray(R),q[R]=1),z[R]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,O),z[R]=O)}function T(){const R=c.newAttributes,O=c.enabledAttributes;for(let G=0,q=O.length;G<q;G++)O[G]!==R[G]&&(i.disableVertexAttribArray(G),O[G]=0)}function w(R,O,G,q,z,V,X){X===!0?i.vertexAttribIPointer(R,O,G,z,V):i.vertexAttribPointer(R,O,G,q,z,V)}function Y(R,O,G,q){if(n.isWebGL2===!1&&(R.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const z=q.attributes,V=G.getAttributes(),X=O.defaultAttributeValues;for(const ee in V){const Z=V[ee];if(Z.location>=0){let H=z[ee];if(H===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(H=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(H=R.instanceColor)),H!==void 0){const $=H.normalized,se=H.itemSize,fe=t.get(H);if(fe===void 0)continue;const ge=fe.buffer,Ce=fe.type,Le=fe.bytesPerElement,Ee=n.isWebGL2===!0&&(Ce===i.INT||Ce===i.UNSIGNED_INT||H.gpuType===fs);if(H.isInterleavedBufferAttribute){const ke=H.data,I=ke.stride,gt=H.offset;if(ke.isInstancedInterleavedBuffer){for(let ve=0;ve<Z.locationSize;ve++)P(Z.location+ve,ke.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let ve=0;ve<Z.locationSize;ve++)A(Z.location+ve);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let ve=0;ve<Z.locationSize;ve++)w(Z.location+ve,se/Z.locationSize,Ce,$,I*Le,(gt+se/Z.locationSize*ve)*Le,Ee)}else{if(H.isInstancedBufferAttribute){for(let ke=0;ke<Z.locationSize;ke++)P(Z.location+ke,H.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ke=0;ke<Z.locationSize;ke++)A(Z.location+ke);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let ke=0;ke<Z.locationSize;ke++)w(Z.location+ke,se/Z.locationSize,Ce,$,se*Le,se/Z.locationSize*ke*Le,Ee)}}else if(X!==void 0){const $=X[ee];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(Z.location,$);break;case 3:i.vertexAttrib3fv(Z.location,$);break;case 4:i.vertexAttrib4fv(Z.location,$);break;default:i.vertexAttrib1fv(Z.location,$)}}}}T()}function M(){W();for(const R in o){const O=o[R];for(const G in O){const q=O[G];for(const z in q)g(q[z].object),delete q[z];delete O[G]}delete o[R]}}function y(R){if(o[R.id]===void 0)return;const O=o[R.id];for(const G in O){const q=O[G];for(const z in q)g(q[z].object),delete q[z];delete O[G]}delete o[R.id]}function k(R){for(const O in o){const G=o[O];if(G[R.id]===void 0)continue;const q=G[R.id];for(const z in q)g(q[z].object),delete q[z];delete G[R.id]}}function W(){te(),u=!0,c!==l&&(c=l,m(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:W,resetDefaultState:te,dispose:M,releaseStatesOfGeometry:y,releaseStatesOfProgram:k,initAttributes:S,enableAttribute:A,disableUnusedAttributes:T}}function Sh(i,e,t,n){const a=n.isWebGL2;let r;function s(u){r=u}function o(u,f){i.drawArrays(r,u,f),t.update(f,r,1)}function l(u,f,h){if(h===0)return;let m,g;if(a)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,u,f,h),t.update(f,r,h)}function c(u,f,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{m.multiDrawArraysWEBGL(r,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=f[_];t.update(g,r,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Mh(i,e,t){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=h>0,A=s||e.has("OES_texture_float"),P=S&&A,T=s?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:a,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:b,vertexTextures:S,floatFragmentTextures:A,floatVertexTextures:P,maxSamples:T}}function Eh(i){const e=this;let t=null,n=0,a=!1,r=!1;const s=new Si,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||n!==0||a;return a=h,n=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!a||g===null||g.length===0||r&&!p)r?u(null):c();else{const b=r?0:n,S=b*4;let A=d.clippingState||null;l.value=A,A=u(g,h,S,m);for(let P=0;P!==S;++P)A[P]=t[P];d.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,m,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<d)&&(p=new Float32Array(d));for(let S=0,A=m;S!==_;++S,A+=4)s.copy(f[S]).applyMatrix4(b,o),s.normal.toArray(p,A),p[A+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function yh(i){let e=new WeakMap;function t(s,o){return o===Ja?s.mapping=Ji:o===Za&&(s.mapping=Zi),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===Ja||o===Za)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Nc(l.height/2);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",a),t(c.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Fs extends Is{constructor(e=-1,t=1,n=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qi=4,To=[.125,.215,.35,.446,.526,.582],yi=20,Oa=new Fs,wo=new Fe;let Ba=null,za=0,Ha=0;const Mi=(1+Math.sqrt(5))/2,Xi=1/Mi,Co=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Mi,Xi),new L(0,Mi,-Xi),new L(Xi,0,Mi),new L(-Xi,0,Mi),new L(Mi,Xi,0),new L(-Mi,Xi,0)];class Ro{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,a=100){Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,a,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Do(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Po(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ba,za,Ha),e.scissorTest=!1,kn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:mn,format:Vt,colorSpace:ti,depthBuffer:!1},a=Lo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bh(r)),this._blurMaterial=Ah(r,e,t)}return a}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,Oa)}_sceneToCubeUV(e,t,n,a){const o=new Ct(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(wo),u.toneMapping=ui,u.autoClear=!1;const m=new Rs({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1}),g=new Xt(new nn,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(wo),_=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):b===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const S=this._cubeSize;kn(a,b*S,d>2?S:0,S,S),u.setRenderTarget(a),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===Ji||e.mapping===Zi;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Do()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Po());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new Xt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;kn(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Oa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=Co[(a-1)%Co.length];this._blur(e,a-1,a,r,s)}t.autoClear=n}_blur(e,t,n,a,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,a,"latitudinal",r),this._halfBlur(s,e,n,n,a,"longitudinal",r)}_halfBlur(e,t,n,a,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Xt(this._lodPlanes[a],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*yi-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):yi;p>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${yi}`);const d=[];let b=0;for(let w=0;w<yi;++w){const Y=w/_,M=Math.exp(-Y*Y/2);d.push(M),w===0?b+=M:w<p&&(b+=2*M)}for(let w=0;w<d.length;w++)d[w]=d[w]/b;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-n;const A=this._sizeLods[a],P=3*A*(a>S-qi?a-S+qi:0),T=4*(this._cubeSize-A);kn(t,P,T,3*A,2*A),l.setRenderTarget(t),l.render(f,Oa)}}function bh(i){const e=[],t=[],n=[];let a=i;const r=i-qi+1+To.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);t.push(o);let l=1/o;s>i-qi?l=To[s-i+qi-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,_=3,p=2,d=1,b=new Float32Array(_*g*m),S=new Float32Array(p*g*m),A=new Float32Array(d*g*m);for(let T=0;T<m;T++){const w=T%3*2/3-1,Y=T>2?0:-1,M=[w,Y,0,w+2/3,Y,0,w+2/3,Y+1,0,w,Y,0,w+2/3,Y+1,0,w,Y+1,0];b.set(M,_*g*T),S.set(h,p*g*T);const y=[T,T,T,T,T,T];A.set(y,d*g*T)}const P=new Ft;P.setAttribute("position",new Nt(b,_)),P.setAttribute("uv",new Nt(S,p)),P.setAttribute("faceIndex",new Nt(A,d)),e.push(P),a>qi&&a--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lo(i,e,t){const n=new wi(i,e,t);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function kn(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function Ah(i,e,t){const n=new Float32Array(yi),a=new L(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:pr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Po(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Do(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function pr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Th(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ja||l===Za,u=l===Ji||l===Zi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Ro(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&a(f)){t===null&&(t=new Ro(i));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",r),h.texture}else return null}}}return o}function a(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function wh(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const a=t(n);return a===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function Ch(i,e,t,n){const a={},r=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)e.remove(_[p])}h.removeEventListener("dispose",s),delete a[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return a[h.id]===!0||(h.addEventListener("dispose",s),a[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const _=m[g];for(let p=0,d=_.length;p<d;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let S=0,A=b.length;S<A;S+=3){const P=b[S+0],T=b[S+1],w=b[S+2];h.push(P,T,T,w,w,P)}}else if(g!==void 0){const b=g.array;_=g.version;for(let S=0,A=b.length/3-1;S<A;S+=3){const P=S+0,T=S+1,w=S+2;h.push(P,T,T,w,w,P)}}else return;const p=new(ys(h)?Ps:Ls)(h,1);p.version=_;const d=r.get(f);d&&e.remove(d),r.set(f,p)}function u(f){const h=r.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Rh(i,e,t,n){const a=n.isWebGL2;let r;function s(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function u(m,g){i.drawElements(r,g,o,m*l),t.update(g,r,1)}function f(m,g,_){if(_===0)return;let p,d;if(a)p=i,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,g,o,m*l,_),t.update(g,r,_)}function h(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<_;d++)this.render(m[d]/l,g[d]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,_);let d=0;for(let b=0;b<_;b++)d+=g[b];t.update(d,r,1)}}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function Lh(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function Ph(i,e){return i[0]-e[0]}function Dh(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Ih(i,e,t){const n={},a=new Float32Array(8),r=new WeakMap,s=new Ze,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(u);if(p===void 0||p.count!==_){let O=function(){te.dispose(),r.delete(u),u.removeEventListener("dispose",O)};var m=O;p!==void 0&&p.texture.dispose();const S=u.morphAttributes.position!==void 0,A=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],Y=u.morphAttributes.color||[];let M=0;S===!0&&(M=1),A===!0&&(M=2),P===!0&&(M=3);let y=u.attributes.position.count*M,k=1;y>e.maxTextureSize&&(k=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const W=new Float32Array(y*k*4*_),te=new Ts(W,y,k,_);te.type=ci,te.needsUpdate=!0;const R=M*4;for(let G=0;G<_;G++){const q=T[G],z=w[G],V=Y[G],X=y*k*4*G;for(let ee=0;ee<q.count;ee++){const Z=ee*R;S===!0&&(s.fromBufferAttribute(q,ee),W[X+Z+0]=s.x,W[X+Z+1]=s.y,W[X+Z+2]=s.z,W[X+Z+3]=0),A===!0&&(s.fromBufferAttribute(z,ee),W[X+Z+4]=s.x,W[X+Z+5]=s.y,W[X+Z+6]=s.z,W[X+Z+7]=0),P===!0&&(s.fromBufferAttribute(V,ee),W[X+Z+8]=s.x,W[X+Z+9]=s.y,W[X+Z+10]=s.z,W[X+Z+11]=V.itemSize===4?s.w:1)}}p={count:_,texture:te,size:new We(y,k)},r.set(u,p),u.addEventListener("dispose",O)}let d=0;for(let S=0;S<h.length;S++)d+=h[S];const b=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(i,"morphTargetBaseInfluence",b),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=h===void 0?0:h.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let A=0;A<g;A++)_[A]=[A,0];n[u.id]=_}for(let A=0;A<g;A++){const P=_[A];P[0]=A,P[1]=h[A]}_.sort(Dh);for(let A=0;A<8;A++)A<g&&_[A][1]?(o[A][0]=_[A][0],o[A][1]=_[A][1]):(o[A][0]=Number.MAX_SAFE_INTEGER,o[A][1]=0);o.sort(Ph);const p=u.morphAttributes.position,d=u.morphAttributes.normal;let b=0;for(let A=0;A<8;A++){const P=o[A],T=P[0],w=P[1];T!==Number.MAX_SAFE_INTEGER&&w?(p&&u.getAttribute("morphTarget"+A)!==p[T]&&u.setAttribute("morphTarget"+A,p[T]),d&&u.getAttribute("morphNormal"+A)!==d[T]&&u.setAttribute("morphNormal"+A,d[T]),a[A]=w,b+=w):(p&&u.hasAttribute("morphTarget"+A)===!0&&u.deleteAttribute("morphTarget"+A),d&&u.hasAttribute("morphNormal"+A)===!0&&u.deleteAttribute("morphNormal"+A),a[A]=0)}const S=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(i,"morphTargetBaseInfluence",S),f.getUniforms().setValue(i,"morphTargetInfluences",a)}}return{update:l}}function Uh(i,e,t,n){let a=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(a.get(f)!==c&&(e.update(f),a.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;a.get(h)!==c&&(h.update(),a.set(h,c))}return f}function s(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}class Os extends Rt{constructor(e,t,n,a,r,s,o,l,c,u){if(u=u!==void 0?u:Ai,u!==Ai&&u!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ai&&(n=li),n===void 0&&u===Qi&&(n=bi),super(null,a,r,s,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:St,this.minFilter=l!==void 0?l:St,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Bs=new Rt,zs=new Os(1,1);zs.compareFunction=Es;const Hs=new Ts,Gs=new vc,Vs=new Us,Io=[],Uo=[],No=new Float32Array(16),Fo=new Float32Array(9),Oo=new Float32Array(4);function an(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let r=Io[a];if(r===void 0&&(r=new Float32Array(a),Io[a]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(r,o)}return r}function ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function st(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oa(i,e){let t=Uo[e];t===void 0&&(t=new Int32Array(e),Uo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Nh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Fh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2fv(this.addr,e),st(t,e)}}function Oh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;i.uniform3fv(this.addr,e),st(t,e)}}function Bh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4fv(this.addr,e),st(t,e)}}function zh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),st(t,e)}else{if(ot(t,n))return;Oo.set(n),i.uniformMatrix2fv(this.addr,!1,Oo),st(t,n)}}function Hh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),st(t,e)}else{if(ot(t,n))return;Fo.set(n),i.uniformMatrix3fv(this.addr,!1,Fo),st(t,n)}}function Gh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),st(t,e)}else{if(ot(t,n))return;No.set(n),i.uniformMatrix4fv(this.addr,!1,No),st(t,n)}}function Vh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function kh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2iv(this.addr,e),st(t,e)}}function Wh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3iv(this.addr,e),st(t,e)}}function Xh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4iv(this.addr,e),st(t,e)}}function qh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Yh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2uiv(this.addr,e),st(t,e)}}function $h(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3uiv(this.addr,e),st(t,e)}}function jh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4uiv(this.addr,e),st(t,e)}}function Kh(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);const r=this.type===i.SAMPLER_2D_SHADOW?zs:Bs;t.setTexture2D(e||r,a)}function Jh(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||Gs,a)}function Zh(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||Vs,a)}function Qh(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||Hs,a)}function ef(i){switch(i){case 5126:return Nh;case 35664:return Fh;case 35665:return Oh;case 35666:return Bh;case 35674:return zh;case 35675:return Hh;case 35676:return Gh;case 5124:case 35670:return Vh;case 35667:case 35671:return kh;case 35668:case 35672:return Wh;case 35669:case 35673:return Xh;case 5125:return qh;case 36294:return Yh;case 36295:return $h;case 36296:return jh;case 35678:case 36198:case 36298:case 36306:case 35682:return Kh;case 35679:case 36299:case 36307:return Jh;case 35680:case 36300:case 36308:case 36293:return Zh;case 36289:case 36303:case 36311:case 36292:return Qh}}function tf(i,e){i.uniform1fv(this.addr,e)}function nf(i,e){const t=an(e,this.size,2);i.uniform2fv(this.addr,t)}function af(i,e){const t=an(e,this.size,3);i.uniform3fv(this.addr,t)}function rf(i,e){const t=an(e,this.size,4);i.uniform4fv(this.addr,t)}function of(i,e){const t=an(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sf(i,e){const t=an(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lf(i,e){const t=an(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cf(i,e){i.uniform1iv(this.addr,e)}function df(i,e){i.uniform2iv(this.addr,e)}function uf(i,e){i.uniform3iv(this.addr,e)}function hf(i,e){i.uniform4iv(this.addr,e)}function ff(i,e){i.uniform1uiv(this.addr,e)}function pf(i,e){i.uniform2uiv(this.addr,e)}function mf(i,e){i.uniform3uiv(this.addr,e)}function gf(i,e){i.uniform4uiv(this.addr,e)}function _f(i,e,t){const n=this.cache,a=e.length,r=oa(t,a);ot(n,r)||(i.uniform1iv(this.addr,r),st(n,r));for(let s=0;s!==a;++s)t.setTexture2D(e[s]||Bs,r[s])}function vf(i,e,t){const n=this.cache,a=e.length,r=oa(t,a);ot(n,r)||(i.uniform1iv(this.addr,r),st(n,r));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||Gs,r[s])}function xf(i,e,t){const n=this.cache,a=e.length,r=oa(t,a);ot(n,r)||(i.uniform1iv(this.addr,r),st(n,r));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||Vs,r[s])}function Sf(i,e,t){const n=this.cache,a=e.length,r=oa(t,a);ot(n,r)||(i.uniform1iv(this.addr,r),st(n,r));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||Hs,r[s])}function Mf(i){switch(i){case 5126:return tf;case 35664:return nf;case 35665:return af;case 35666:return rf;case 35674:return of;case 35675:return sf;case 35676:return lf;case 5124:case 35670:return cf;case 35667:case 35671:return df;case 35668:case 35672:return uf;case 35669:case 35673:return hf;case 5125:return ff;case 36294:return pf;case 36295:return mf;case 36296:return gf;case 35678:case 36198:case 36298:case 36306:case 35682:return _f;case 35679:case 36299:case 36307:return vf;case 35680:case 36300:case 36308:case 36293:return xf;case 36289:case 36303:case 36311:case 36292:return Sf}}class Ef{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ef(t.type)}}class yf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mf(t.type)}}class bf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,t[o.id],n)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function Bo(i,e){i.seq.push(e),i.map[e.id]=e}function Af(i,e,t){const n=i.name,a=n.length;for(Ga.lastIndex=0;;){const r=Ga.exec(n),s=Ga.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){Bo(t,c===void 0?new Ef(o,i,e):new yf(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new bf(o),Bo(t,f)),t=f}}}class $n{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const r=e.getActiveUniform(t,a),s=e.getUniformLocation(t,r.name);Af(r,s,this)}}setValue(e,t,n,a){const r=this.map[t];r!==void 0&&r.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in t&&n.push(s)}return n}}function zo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Tf=37297;let wf=0;function Cf(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=a;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function Rf(i){const e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(i);let n;switch(e===t?n="":e===Zn&&t===Jn?n="LinearDisplayP3ToLinearSRGB":e===Jn&&t===Zn&&(n="LinearSRGBToLinearDisplayP3"),i){case ti:case aa:return[n,"LinearTransferOETF"];case ht:case dr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ho(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+Cf(i.getShaderSource(e),s)}else return a}function Lf(i,e){const t=Rf(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Pf(i,e){let t;switch(e){case Gl:t="Linear";break;case Vl:t="Reinhard";break;case kl:t="OptimizedCineon";break;case Wl:t="ACESFilmic";break;case ql:t="AgX";break;case Xl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Df(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yi).join(`
`)}function If(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Yi).join(`
`)}function Uf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Nf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const r=i.getActiveAttrib(e,a),s=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Yi(i){return i!==""}function Go(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ff=/^[ \t]*#include +<([\w\d./]+)>/gm;function ar(i){return i.replace(Ff,Bf)}const Of=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Bf(i,e){let t=De[e];if(t===void 0){const n=Of.get(e);if(n!==void 0)t=De[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ar(t)}const zf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ko(i){return i.replace(zf,Hf)}function Hf(i,e,t,n){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Wo(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ds?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ml?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zt&&(e="SHADOWMAP_TYPE_VSM"),e}function Vf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ji:case Zi:e="ENVMAP_TYPE_CUBE";break;case na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zi:e="ENVMAP_MODE_REFRACTION";break}return e}function Wf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case us:e="ENVMAP_BLENDING_MULTIPLY";break;case zl:e="ENVMAP_BLENDING_MIX";break;case Hl:e="ENVMAP_BLENDING_ADD";break}return e}function Xf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function qf(i,e,t,n){const a=i.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Gf(t),c=Vf(t),u=kf(t),f=Wf(t),h=Xf(t),m=t.isWebGL2?"":Df(t),g=If(t),_=Uf(r),p=a.createProgram();let d,b,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Yi).join(`
`),d.length>0&&(d+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Yi).join(`
`),b.length>0&&(b+=`
`)):(d=[Wo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),b=[m,Wo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?De.tonemapping_pars_fragment:"",t.toneMapping!==ui?Pf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Lf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yi).join(`
`)),s=ar(s),s=Go(s,t),s=Vo(s,t),o=ar(o),o=Go(o,t),o=Vo(o,t),s=ko(s),o=ko(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===so?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===so?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const A=S+d+s,P=S+b+o,T=zo(a,a.VERTEX_SHADER,A),w=zo(a,a.FRAGMENT_SHADER,P);a.attachShader(p,T),a.attachShader(p,w),t.index0AttributeName!==void 0?a.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(p,0,"position"),a.linkProgram(p);function Y(W){if(i.debug.checkShaderErrors){const te=a.getProgramInfoLog(p).trim(),R=a.getShaderInfoLog(T).trim(),O=a.getShaderInfoLog(w).trim();let G=!0,q=!0;if(a.getProgramParameter(p,a.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,p,T,w);else{const z=Ho(a,T,"vertex"),V=Ho(a,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(p,a.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+z+`
`+V)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(R===""||O==="")&&(q=!1);q&&(W.diagnostics={runnable:G,programLog:te,vertexShader:{log:R,prefix:d},fragmentShader:{log:O,prefix:b}})}a.deleteShader(T),a.deleteShader(w),M=new $n(a,p),y=Nf(a,p)}let M;this.getUniforms=function(){return M===void 0&&Y(this),M};let y;this.getAttributes=function(){return y===void 0&&Y(this),y};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=a.getProgramParameter(p,Tf)),k},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wf++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=w,this}let Yf=0;class $f{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jf(e),t.set(e,n)),n}}class jf{constructor(e){this.id=Yf++,this.code=e,this.usedTimes=0}}function Kf(i,e,t,n,a,r,s){const o=new ws,l=new $f,c=[],u=a.isWebGL2,f=a.logarithmicDepthBuffer,h=a.vertexTextures;let m=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,y,k,W,te){const R=W.fog,O=te.geometry,G=M.isMeshStandardMaterial?W.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),z=q&&q.mapping===na?q.image.height:null,V=g[M.type];M.precision!==null&&(m=a.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const X=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ee=X!==void 0?X.length:0;let Z=0;O.morphAttributes.position!==void 0&&(Z=1),O.morphAttributes.normal!==void 0&&(Z=2),O.morphAttributes.color!==void 0&&(Z=3);let H,$,se,fe;if(V){const _t=Wt[V];H=_t.vertexShader,$=_t.fragmentShader}else H=M.vertexShader,$=M.fragmentShader,l.update(M),se=l.getVertexShaderID(M),fe=l.getFragmentShaderID(M);const ge=i.getRenderTarget(),Ce=te.isInstancedMesh===!0,Le=te.isBatchedMesh===!0,Ee=!!M.map,ke=!!M.matcap,I=!!q,gt=!!M.aoMap,ve=!!M.lightMap,Te=!!M.bumpMap,he=!!M.normalMap,Qe=!!M.displacementMap,Ie=!!M.emissiveMap,E=!!M.metalnessMap,v=!!M.roughnessMap,N=M.anisotropy>0,J=M.clearcoat>0,K=M.iridescence>0,Q=M.sheen>0,pe=M.transmission>0,oe=N&&!!M.anisotropyMap,ce=J&&!!M.clearcoatMap,Me=J&&!!M.clearcoatNormalMap,Ue=J&&!!M.clearcoatRoughnessMap,j=K&&!!M.iridescenceMap,qe=K&&!!M.iridescenceThicknessMap,He=Q&&!!M.sheenColorMap,Ae=Q&&!!M.sheenRoughnessMap,_e=!!M.specularMap,de=!!M.specularColorMap,Pe=!!M.specularIntensityMap,Xe=pe&&!!M.transmissionMap,tt=pe&&!!M.thicknessMap,Oe=!!M.gradientMap,ie=!!M.alphaMap,C=M.alphaTest>0,ae=!!M.alphaHash,re=!!M.extensions,ye=!!O.attributes.uv1,xe=!!O.attributes.uv2,$e=!!O.attributes.uv3;let je=ui;return M.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(je=i.toneMapping),{isWebGL2:u,shaderID:V,shaderType:M.type,shaderName:M.name,vertexShader:H,fragmentShader:$,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Le,instancing:Ce,instancingColor:Ce&&te.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:ti,map:Ee,matcap:ke,envMap:I,envMapMode:I&&q.mapping,envMapCubeUVHeight:z,aoMap:gt,lightMap:ve,bumpMap:Te,normalMap:he,displacementMap:h&&Qe,emissiveMap:Ie,normalMapObjectSpace:he&&M.normalMapType===ac,normalMapTangentSpace:he&&M.normalMapType===Ms,metalnessMap:E,roughnessMap:v,anisotropy:N,anisotropyMap:oe,clearcoat:J,clearcoatMap:ce,clearcoatNormalMap:Me,clearcoatRoughnessMap:Ue,iridescence:K,iridescenceMap:j,iridescenceThicknessMap:qe,sheen:Q,sheenColorMap:He,sheenRoughnessMap:Ae,specularMap:_e,specularColorMap:de,specularIntensityMap:Pe,transmission:pe,transmissionMap:Xe,thicknessMap:tt,gradientMap:Oe,opaque:M.transparent===!1&&M.blending===$i,alphaMap:ie,alphaTest:C,alphaHash:ae,combine:M.combine,mapUv:Ee&&_(M.map.channel),aoMapUv:gt&&_(M.aoMap.channel),lightMapUv:ve&&_(M.lightMap.channel),bumpMapUv:Te&&_(M.bumpMap.channel),normalMapUv:he&&_(M.normalMap.channel),displacementMapUv:Qe&&_(M.displacementMap.channel),emissiveMapUv:Ie&&_(M.emissiveMap.channel),metalnessMapUv:E&&_(M.metalnessMap.channel),roughnessMapUv:v&&_(M.roughnessMap.channel),anisotropyMapUv:oe&&_(M.anisotropyMap.channel),clearcoatMapUv:ce&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Me&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:He&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&_(M.sheenRoughnessMap.channel),specularMapUv:_e&&_(M.specularMap.channel),specularColorMapUv:de&&_(M.specularColorMap.channel),specularIntensityMapUv:Pe&&_(M.specularIntensityMap.channel),transmissionMapUv:Xe&&_(M.transmissionMap.channel),thicknessMapUv:tt&&_(M.thicknessMap.channel),alphaMapUv:ie&&_(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(he||N),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:ye,vertexUv2s:xe,vertexUv3s:$e,pointsUvs:te.isPoints===!0&&!!O.attributes.uv&&(Ee||ie),fog:!!R,useFog:M.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:te.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Z,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:je,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ee&&M.map.isVideoTexture===!0&&Ye.getTransfer(M.map.colorSpace)===Je,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Qt,flipSided:M.side===bt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:re&&M.extensions.derivatives===!0,extensionFragDepth:re&&M.extensions.fragDepth===!0,extensionDrawBuffers:re&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:re&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const k in M.defines)y.push(k),y.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(b(y,M),S(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function b(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function S(M,y){o.disableAll(),y.isWebGL2&&o.enable(0),y.supportsVertexTextures&&o.enable(1),y.instancing&&o.enable(2),y.instancingColor&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function A(M){const y=g[M.type];let k;if(y){const W=Wt[y];k=Pc.clone(W.uniforms)}else k=M.uniforms;return k}function P(M,y){let k;for(let W=0,te=c.length;W<te;W++){const R=c[W];if(R.cacheKey===y){k=R,++k.usedTimes;break}}return k===void 0&&(k=new qf(i,y,M,r),c.push(k)),k}function T(M){if(--M.usedTimes===0){const y=c.indexOf(M);c[y]=c[c.length-1],c.pop(),M.destroy()}}function w(M){l.remove(M)}function Y(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:A,acquireProgram:P,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:Y}}function Jf(){let i=new WeakMap;function e(r){let s=i.get(r);return s===void 0&&(s={},i.set(r,s)),s}function t(r){i.delete(r)}function n(r,s,o){i.get(r)[s]=o}function a(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:a}}function Zf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qo(){const i=[];let e=0;const t=[],n=[],a=[];function r(){e=0,t.length=0,n.length=0,a.length=0}function s(f,h,m,g,_,p){let d=i[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},i[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=p),e++,d}function o(f,h,m,g,_,p){const d=s(f,h,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?a.push(d):t.push(d)}function l(f,h,m,g,_,p){const d=s(f,h,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?a.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||Zf),n.length>1&&n.sort(h||Xo),a.length>1&&a.sort(h||Xo)}function u(){for(let f=e,h=i.length;f<h;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:a,init:r,push:o,unshift:l,finish:u,sort:c}}function Qf(){let i=new WeakMap;function e(n,a){const r=i.get(n);let s;return r===void 0?(s=new qo,i.set(n,[s])):a>=r.length?(s=new qo,r.push(s)):s=r[a],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function ep(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Fe};break;case"SpotLight":t={position:new L,direction:new L,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function tp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ip=0;function np(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ap(i,e){const t=new ep,n=tp(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)a.probe.push(new L);const r=new L,s=new nt,o=new nt;function l(u,f){let h=0,m=0,g=0;for(let W=0;W<9;W++)a.probe[W].set(0,0,0);let _=0,p=0,d=0,b=0,S=0,A=0,P=0,T=0,w=0,Y=0,M=0;u.sort(np);const y=f===!0?Math.PI:1;for(let W=0,te=u.length;W<te;W++){const R=u[W],O=R.color,G=R.intensity,q=R.distance,z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=O.r*G*y,m+=O.g*G*y,g+=O.b*G*y;else if(R.isLightProbe){for(let V=0;V<9;V++)a.probe[V].addScaledVector(R.sh.coefficients[V],G);M++}else if(R.isDirectionalLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity*y),R.castShadow){const X=R.shadow,ee=n.get(R);ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,a.directionalShadow[_]=ee,a.directionalShadowMap[_]=z,a.directionalShadowMatrix[_]=R.shadow.matrix,A++}a.directional[_]=V,_++}else if(R.isSpotLight){const V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(O).multiplyScalar(G*y),V.distance=q,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,a.spot[d]=V;const X=R.shadow;if(R.map&&(a.spotLightMap[w]=R.map,w++,X.updateMatrices(R),R.castShadow&&Y++),a.spotLightMatrix[d]=X.matrix,R.castShadow){const ee=n.get(R);ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,a.spotShadow[d]=ee,a.spotShadowMap[d]=z,T++}d++}else if(R.isRectAreaLight){const V=t.get(R);V.color.copy(O).multiplyScalar(G),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),a.rectArea[b]=V,b++}else if(R.isPointLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity*y),V.distance=R.distance,V.decay=R.decay,R.castShadow){const X=R.shadow,ee=n.get(R);ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,ee.shadowCameraNear=X.camera.near,ee.shadowCameraFar=X.camera.far,a.pointShadow[p]=ee,a.pointShadowMap[p]=z,a.pointShadowMatrix[p]=R.shadow.matrix,P++}a.point[p]=V,p++}else if(R.isHemisphereLight){const V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(G*y),V.groundColor.copy(R.groundColor).multiplyScalar(G*y),a.hemi[S]=V,S++}}b>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ne.LTC_FLOAT_1,a.rectAreaLTC2=ne.LTC_FLOAT_2):(a.rectAreaLTC1=ne.LTC_HALF_1,a.rectAreaLTC2=ne.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ne.LTC_FLOAT_1,a.rectAreaLTC2=ne.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=ne.LTC_HALF_1,a.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=h,a.ambient[1]=m,a.ambient[2]=g;const k=a.hash;(k.directionalLength!==_||k.pointLength!==p||k.spotLength!==d||k.rectAreaLength!==b||k.hemiLength!==S||k.numDirectionalShadows!==A||k.numPointShadows!==P||k.numSpotShadows!==T||k.numSpotMaps!==w||k.numLightProbes!==M)&&(a.directional.length=_,a.spot.length=d,a.rectArea.length=b,a.point.length=p,a.hemi.length=S,a.directionalShadow.length=A,a.directionalShadowMap.length=A,a.pointShadow.length=P,a.pointShadowMap.length=P,a.spotShadow.length=T,a.spotShadowMap.length=T,a.directionalShadowMatrix.length=A,a.pointShadowMatrix.length=P,a.spotLightMatrix.length=T+w-Y,a.spotLightMap.length=w,a.numSpotLightShadowsWithMaps=Y,a.numLightProbes=M,k.directionalLength=_,k.pointLength=p,k.spotLength=d,k.rectAreaLength=b,k.hemiLength=S,k.numDirectionalShadows=A,k.numPointShadows=P,k.numSpotShadows=T,k.numSpotMaps=w,k.numLightProbes=M,a.version=ip++)}function c(u,f){let h=0,m=0,g=0,_=0,p=0;const d=f.matrixWorldInverse;for(let b=0,S=u.length;b<S;b++){const A=u[b];if(A.isDirectionalLight){const P=a.directional[h];P.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),h++}else if(A.isSpotLight){const P=a.spot[g];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),g++}else if(A.isRectAreaLight){const P=a.rectArea[_];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(d),o.identity(),s.copy(A.matrixWorld),s.premultiply(d),o.extractRotation(s),P.halfWidth.set(A.width*.5,0,0),P.halfHeight.set(0,A.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){const P=a.point[m];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(d),m++}else if(A.isHemisphereLight){const P=a.hemi[p];P.direction.setFromMatrixPosition(A.matrixWorld),P.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:a}}function Yo(i,e){const t=new ap(i,e),n=[],a=[];function r(){n.length=0,a.length=0}function s(f){n.push(f)}function o(f){a.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:a,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function rp(i,e){let t=new WeakMap;function n(r,s=0){const o=t.get(r);let l;return o===void 0?(l=new Yo(i,e),t.set(r,[l])):s>=o.length?(l=new Yo(i,e),o.push(l)):l=o[s],l}function a(){t=new WeakMap}return{get:n,dispose:a}}class op extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ic,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sp extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dp(i,e,t){let n=new hr;const a=new We,r=new We,s=new Ze,o=new op({depthPacking:nc}),l=new sp,c={},u=t.maxTextureSize,f={[fi]:bt,[bt]:fi,[Qt]:Qt},h=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:lp,fragmentShader:cp}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ft;g.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ds;let d=this.type;this.render=function(T,w,Y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),W=i.state;W.setBlending(di),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const te=d!==Zt&&this.type===Zt,R=d===Zt&&this.type!==Zt;for(let O=0,G=T.length;O<G;O++){const q=T[O],z=q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const V=z.getFrameExtents();if(a.multiply(V),r.copy(z.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(r.x=Math.floor(u/V.x),a.x=r.x*V.x,z.mapSize.x=r.x),a.y>u&&(r.y=Math.floor(u/V.y),a.y=r.y*V.y,z.mapSize.y=r.y)),z.map===null||te===!0||R===!0){const ee=this.type!==Zt?{minFilter:St,magFilter:St}:{};z.map!==null&&z.map.dispose(),z.map=new wi(a.x,a.y,ee),z.map.texture.name=q.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const X=z.getViewportCount();for(let ee=0;ee<X;ee++){const Z=z.getViewport(ee);s.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),W.viewport(s),z.updateMatrices(q,ee),n=z.getFrustum(),A(w,Y,z.camera,q,this.type)}z.isPointLightShadow!==!0&&this.type===Zt&&b(z,Y),z.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(M,y,k)};function b(T,w){const Y=e.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new wi(a.x,a.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,Y,h,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,Y,m,_,null)}function S(T,w,Y,M){let y=null;const k=Y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(k!==void 0)y=k;else if(y=Y.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=y.uuid,te=w.uuid;let R=c[W];R===void 0&&(R={},c[W]=R);let O=R[te];O===void 0&&(O=y.clone(),R[te]=O,w.addEventListener("dispose",P)),y=O}if(y.visible=w.visible,y.wireframe=w.wireframe,M===Zt?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:f[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,Y.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const W=i.properties.get(y);W.light=Y}return y}function A(T,w,Y,M,y){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Zt)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld);const te=e.update(T),R=T.material;if(Array.isArray(R)){const O=te.groups;for(let G=0,q=O.length;G<q;G++){const z=O[G],V=R[z.materialIndex];if(V&&V.visible){const X=S(T,V,M,y);T.onBeforeShadow(i,T,w,Y,te,X,z),i.renderBufferDirect(Y,null,te,X,T,z),T.onAfterShadow(i,T,w,Y,te,X,z)}}}else if(R.visible){const O=S(T,R,M,y);T.onBeforeShadow(i,T,w,Y,te,O,null),i.renderBufferDirect(Y,null,te,O,T,null),T.onAfterShadow(i,T,w,Y,te,O,null)}}const W=T.children;for(let te=0,R=W.length;te<R;te++)A(W[te],w,Y,M,y)}function P(T){T.target.removeEventListener("dispose",P);for(const Y in c){const M=c[Y],y=T.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}function up(i,e,t){const n=t.isWebGL2;function a(){let C=!1;const ae=new Ze;let re=null;const ye=new Ze(0,0,0,0);return{setMask:function(xe){re!==xe&&!C&&(i.colorMask(xe,xe,xe,xe),re=xe)},setLocked:function(xe){C=xe},setClear:function(xe,$e,je,lt,_t){_t===!0&&(xe*=lt,$e*=lt,je*=lt),ae.set(xe,$e,je,lt),ye.equals(ae)===!1&&(i.clearColor(xe,$e,je,lt),ye.copy(ae))},reset:function(){C=!1,re=null,ye.set(-1,0,0,0)}}}function r(){let C=!1,ae=null,re=null,ye=null;return{setTest:function(xe){xe?Le(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(xe){ae!==xe&&!C&&(i.depthMask(xe),ae=xe)},setFunc:function(xe){if(re!==xe){switch(xe){case Dl:i.depthFunc(i.NEVER);break;case Il:i.depthFunc(i.ALWAYS);break;case Ul:i.depthFunc(i.LESS);break;case jn:i.depthFunc(i.LEQUAL);break;case Nl:i.depthFunc(i.EQUAL);break;case Fl:i.depthFunc(i.GEQUAL);break;case Ol:i.depthFunc(i.GREATER);break;case Bl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=xe}},setLocked:function(xe){C=xe},setClear:function(xe){ye!==xe&&(i.clearDepth(xe),ye=xe)},reset:function(){C=!1,ae=null,re=null,ye=null}}}function s(){let C=!1,ae=null,re=null,ye=null,xe=null,$e=null,je=null,lt=null,_t=null;return{setTest:function(Ke){C||(Ke?Le(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(Ke){ae!==Ke&&!C&&(i.stencilMask(Ke),ae=Ke)},setFunc:function(Ke,vt,kt){(re!==Ke||ye!==vt||xe!==kt)&&(i.stencilFunc(Ke,vt,kt),re=Ke,ye=vt,xe=kt)},setOp:function(Ke,vt,kt){($e!==Ke||je!==vt||lt!==kt)&&(i.stencilOp(Ke,vt,kt),$e=Ke,je=vt,lt=kt)},setLocked:function(Ke){C=Ke},setClear:function(Ke){_t!==Ke&&(i.clearStencil(Ke),_t=Ke)},reset:function(){C=!1,ae=null,re=null,ye=null,xe=null,$e=null,je=null,lt=null,_t=null}}}const o=new a,l=new r,c=new s,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,_=[],p=null,d=!1,b=null,S=null,A=null,P=null,T=null,w=null,Y=null,M=new Fe(0,0,0),y=0,k=!1,W=null,te=null,R=null,O=null,G=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,V=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=V>=1):X.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=V>=2);let ee=null,Z={};const H=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),se=new Ze().fromArray(H),fe=new Ze().fromArray($);function ge(C,ae,re,ye){const xe=new Uint8Array(4),$e=i.createTexture();i.bindTexture(C,$e),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<re;je++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(ae,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(ae+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return $e}const Ce={};Ce[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),Ce[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ce[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ce[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(i.DEPTH_TEST),l.setFunc(jn),Ie(!1),E(Cr),Le(i.CULL_FACE),he(di);function Le(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function Ee(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function ke(C,ae){return m[C]!==ae?(i.bindFramebuffer(C,ae),m[C]=ae,n&&(C===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ae),C===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ae)),!0):!1}function I(C,ae){let re=_,ye=!1;if(C)if(re=g.get(ae),re===void 0&&(re=[],g.set(ae,re)),C.isWebGLMultipleRenderTargets){const xe=C.texture;if(re.length!==xe.length||re[0]!==i.COLOR_ATTACHMENT0){for(let $e=0,je=xe.length;$e<je;$e++)re[$e]=i.COLOR_ATTACHMENT0+$e;re.length=xe.length,ye=!0}}else re[0]!==i.COLOR_ATTACHMENT0&&(re[0]=i.COLOR_ATTACHMENT0,ye=!0);else re[0]!==i.BACK&&(re[0]=i.BACK,ye=!0);ye&&(t.isWebGL2?i.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function gt(C){return p!==C?(i.useProgram(C),p=C,!0):!1}const ve={[Ei]:i.FUNC_ADD,[_l]:i.FUNC_SUBTRACT,[vl]:i.FUNC_REVERSE_SUBTRACT};if(n)ve[Pr]=i.MIN,ve[Dr]=i.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(ve[Pr]=C.MIN_EXT,ve[Dr]=C.MAX_EXT)}const Te={[xl]:i.ZERO,[Sl]:i.ONE,[Ml]:i.SRC_COLOR,[ja]:i.SRC_ALPHA,[wl]:i.SRC_ALPHA_SATURATE,[Al]:i.DST_COLOR,[yl]:i.DST_ALPHA,[El]:i.ONE_MINUS_SRC_COLOR,[Ka]:i.ONE_MINUS_SRC_ALPHA,[Tl]:i.ONE_MINUS_DST_COLOR,[bl]:i.ONE_MINUS_DST_ALPHA,[Cl]:i.CONSTANT_COLOR,[Rl]:i.ONE_MINUS_CONSTANT_COLOR,[Ll]:i.CONSTANT_ALPHA,[Pl]:i.ONE_MINUS_CONSTANT_ALPHA};function he(C,ae,re,ye,xe,$e,je,lt,_t,Ke){if(C===di){d===!0&&(Ee(i.BLEND),d=!1);return}if(d===!1&&(Le(i.BLEND),d=!0),C!==gl){if(C!==b||Ke!==k){if((S!==Ei||T!==Ei)&&(i.blendEquation(i.FUNC_ADD),S=Ei,T=Ei),Ke)switch(C){case $i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $a:i.blendFunc(i.ONE,i.ONE);break;case Rr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lr:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $a:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Rr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lr:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}A=null,P=null,w=null,Y=null,M.set(0,0,0),y=0,b=C,k=Ke}return}xe=xe||ae,$e=$e||re,je=je||ye,(ae!==S||xe!==T)&&(i.blendEquationSeparate(ve[ae],ve[xe]),S=ae,T=xe),(re!==A||ye!==P||$e!==w||je!==Y)&&(i.blendFuncSeparate(Te[re],Te[ye],Te[$e],Te[je]),A=re,P=ye,w=$e,Y=je),(lt.equals(M)===!1||_t!==y)&&(i.blendColor(lt.r,lt.g,lt.b,_t),M.copy(lt),y=_t),b=C,k=!1}function Qe(C,ae){C.side===Qt?Ee(i.CULL_FACE):Le(i.CULL_FACE);let re=C.side===bt;ae&&(re=!re),Ie(re),C.blending===$i&&C.transparent===!1?he(di):he(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);const ye=C.stencilWrite;c.setTest(ye),ye&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),N(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Le(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(C){W!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),W=C)}function E(C){C!==fl?(Le(i.CULL_FACE),C!==te&&(C===Cr?i.cullFace(i.BACK):C===pl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),te=C}function v(C){C!==R&&(z&&i.lineWidth(C),R=C)}function N(C,ae,re){C?(Le(i.POLYGON_OFFSET_FILL),(O!==ae||G!==re)&&(i.polygonOffset(ae,re),O=ae,G=re)):Ee(i.POLYGON_OFFSET_FILL)}function J(C){C?Le(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function K(C){C===void 0&&(C=i.TEXTURE0+q-1),ee!==C&&(i.activeTexture(C),ee=C)}function Q(C,ae,re){re===void 0&&(ee===null?re=i.TEXTURE0+q-1:re=ee);let ye=Z[re];ye===void 0&&(ye={type:void 0,texture:void 0},Z[re]=ye),(ye.type!==C||ye.texture!==ae)&&(ee!==re&&(i.activeTexture(re),ee=re),i.bindTexture(C,ae||Ce[C]),ye.type=C,ye.texture=ae)}function pe(){const C=Z[ee];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ce(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Me(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ue(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function qe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function He(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Pe(C){se.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),se.copy(C))}function Xe(C){fe.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),fe.copy(C))}function tt(C,ae){let re=f.get(ae);re===void 0&&(re=new WeakMap,f.set(ae,re));let ye=re.get(C);ye===void 0&&(ye=i.getUniformBlockIndex(ae,C.name),re.set(C,ye))}function Oe(C,ae){const ye=f.get(ae).get(C);u.get(ae)!==ye&&(i.uniformBlockBinding(ae,ye,C.__bindingPointIndex),u.set(ae,ye))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ee=null,Z={},m={},g=new WeakMap,_=[],p=null,d=!1,b=null,S=null,A=null,P=null,T=null,w=null,Y=null,M=new Fe(0,0,0),y=0,k=!1,W=null,te=null,R=null,O=null,G=null,se.set(0,0,i.canvas.width,i.canvas.height),fe.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Le,disable:Ee,bindFramebuffer:ke,drawBuffers:I,useProgram:gt,setBlending:he,setMaterial:Qe,setFlipSided:Ie,setCullFace:E,setLineWidth:v,setPolygonOffset:N,setScissorTest:J,activeTexture:K,bindTexture:Q,unbindTexture:pe,compressedTexImage2D:oe,compressedTexImage3D:ce,texImage2D:_e,texImage3D:de,updateUBOMapping:tt,uniformBlockBinding:Oe,texStorage2D:He,texStorage3D:Ae,texSubImage2D:Me,texSubImage3D:Ue,compressedTexSubImage2D:j,compressedTexSubImage3D:qe,scissor:Pe,viewport:Xe,reset:ie}}function hp(i,e,t,n,a,r,s){const o=a.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return m?new OffscreenCanvas(E,v):ea("canvas")}function _(E,v,N,J){let K=1;if((E.width>J||E.height>J)&&(K=J/Math.max(E.width,E.height)),K<1||v===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const Q=v?nr:Math.floor,pe=Q(K*E.width),oe=Q(K*E.height);f===void 0&&(f=g(pe,oe));const ce=N?g(pe,oe):f;return ce.width=pe,ce.height=oe,ce.getContext("2d").drawImage(E,0,0,pe,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+pe+"x"+oe+")."),ce}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function p(E){return lo(E.width)&&lo(E.height)}function d(E){return o?!1:E.wrapS!==Gt||E.wrapT!==Gt||E.minFilter!==St&&E.minFilter!==It}function b(E,v){return E.generateMipmaps&&v&&E.minFilter!==St&&E.minFilter!==It}function S(E){i.generateMipmap(E)}function A(E,v,N,J,K=!1){if(o===!1)return v;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Q=v;if(v===i.RED&&(N===i.FLOAT&&(Q=i.R32F),N===i.HALF_FLOAT&&(Q=i.R16F),N===i.UNSIGNED_BYTE&&(Q=i.R8)),v===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(Q=i.R8UI),N===i.UNSIGNED_SHORT&&(Q=i.R16UI),N===i.UNSIGNED_INT&&(Q=i.R32UI),N===i.BYTE&&(Q=i.R8I),N===i.SHORT&&(Q=i.R16I),N===i.INT&&(Q=i.R32I)),v===i.RG&&(N===i.FLOAT&&(Q=i.RG32F),N===i.HALF_FLOAT&&(Q=i.RG16F),N===i.UNSIGNED_BYTE&&(Q=i.RG8)),v===i.RGBA){const pe=K?Kn:Ye.getTransfer(J);N===i.FLOAT&&(Q=i.RGBA32F),N===i.HALF_FLOAT&&(Q=i.RGBA16F),N===i.UNSIGNED_BYTE&&(Q=pe===Je?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function P(E,v,N){return b(E,N)===!0||E.isFramebufferTexture&&E.minFilter!==St&&E.minFilter!==It?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function T(E){return E===St||E===Ir||E===ha?i.NEAREST:i.LINEAR}function w(E){const v=E.target;v.removeEventListener("dispose",w),M(v),v.isVideoTexture&&u.delete(v)}function Y(E){const v=E.target;v.removeEventListener("dispose",Y),k(v)}function M(E){const v=n.get(E);if(v.__webglInit===void 0)return;const N=E.source,J=h.get(N);if(J){const K=J[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(E),Object.keys(J).length===0&&h.delete(N)}n.remove(E)}function y(E){const v=n.get(E);i.deleteTexture(v.__webglTexture);const N=E.source,J=h.get(N);delete J[v.__cacheKey],s.memory.textures--}function k(E){const v=E.texture,N=n.get(E),J=n.get(v);if(J.__webglTexture!==void 0&&(i.deleteTexture(J.__webglTexture),s.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(N.__webglFramebuffer[K]))for(let Q=0;Q<N.__webglFramebuffer[K].length;Q++)i.deleteFramebuffer(N.__webglFramebuffer[K][Q]);else i.deleteFramebuffer(N.__webglFramebuffer[K]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[K])}else{if(Array.isArray(N.__webglFramebuffer))for(let K=0;K<N.__webglFramebuffer.length;K++)i.deleteFramebuffer(N.__webglFramebuffer[K]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let K=0;K<N.__webglColorRenderbuffer.length;K++)N.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[K]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let K=0,Q=v.length;K<Q;K++){const pe=n.get(v[K]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),s.memory.textures--),n.remove(v[K])}n.remove(v),n.remove(E)}let W=0;function te(){W=0}function R(){const E=W;return E>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+a.maxTextures),W+=1,E}function O(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function G(E,v){const N=n.get(E);if(E.isVideoTexture&&Qe(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){const J=E.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(N,E,v);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+v)}function q(E,v){const N=n.get(E);if(E.version>0&&N.__version!==E.version){se(N,E,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+v)}function z(E,v){const N=n.get(E);if(E.version>0&&N.__version!==E.version){se(N,E,v);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+v)}function V(E,v){const N=n.get(E);if(E.version>0&&N.__version!==E.version){fe(N,E,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+v)}const X={[Qa]:i.REPEAT,[Gt]:i.CLAMP_TO_EDGE,[er]:i.MIRRORED_REPEAT},ee={[St]:i.NEAREST,[Ir]:i.NEAREST_MIPMAP_NEAREST,[ha]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[Yl]:i.LINEAR_MIPMAP_NEAREST,[pn]:i.LINEAR_MIPMAP_LINEAR},Z={[rc]:i.NEVER,[uc]:i.ALWAYS,[oc]:i.LESS,[Es]:i.LEQUAL,[sc]:i.EQUAL,[dc]:i.GEQUAL,[lc]:i.GREATER,[cc]:i.NOTEQUAL};function H(E,v,N){if(N?(i.texParameteri(E,i.TEXTURE_WRAP_S,X[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,X[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,X[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ee[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ee[v.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==Gt||v.wrapT!==Gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,T(v.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,T(v.minFilter)),v.minFilter!==St&&v.minFilter!==It&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Z[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===St||v.minFilter!==ha&&v.minFilter!==pn||v.type===ci&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===mn&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(E,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,a.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function $(E,v){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",w));const J=v.source;let K=h.get(J);K===void 0&&(K={},h.set(J,K));const Q=O(v);if(Q!==E.__cacheKey){K[Q]===void 0&&(K[Q]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,N=!0),K[Q].usedTimes++;const pe=K[E.__cacheKey];pe!==void 0&&(K[E.__cacheKey].usedTimes--,pe.usedTimes===0&&y(v)),E.__cacheKey=Q,E.__webglTexture=K[Q].texture}return N}function se(E,v,N){let J=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=i.TEXTURE_3D);const K=$(E,v),Q=v.source;t.bindTexture(J,E.__webglTexture,i.TEXTURE0+N);const pe=n.get(Q);if(Q.version!==pe.__version||K===!0){t.activeTexture(i.TEXTURE0+N);const oe=Ye.getPrimaries(Ye.workingColorSpace),ce=v.colorSpace===Ut?null:Ye.getPrimaries(v.colorSpace),Me=v.colorSpace===Ut||oe===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ue=d(v)&&p(v.image)===!1;let j=_(v.image,Ue,!1,a.maxTextureSize);j=Ie(v,j);const qe=p(j)||o,He=r.convert(v.format,v.colorSpace);let Ae=r.convert(v.type),_e=A(v.internalFormat,He,Ae,v.colorSpace,v.isVideoTexture);H(J,v,qe);let de;const Pe=v.mipmaps,Xe=o&&v.isVideoTexture!==!0&&_e!==xs,tt=pe.__version===void 0||K===!0,Oe=P(v,j,qe);if(v.isDepthTexture)_e=i.DEPTH_COMPONENT,o?v.type===ci?_e=i.DEPTH_COMPONENT32F:v.type===li?_e=i.DEPTH_COMPONENT24:v.type===bi?_e=i.DEPTH24_STENCIL8:_e=i.DEPTH_COMPONENT16:v.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Ai&&_e===i.DEPTH_COMPONENT&&v.type!==cr&&v.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=li,Ae=r.convert(v.type)),v.format===Qi&&_e===i.DEPTH_COMPONENT&&(_e=i.DEPTH_STENCIL,v.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=bi,Ae=r.convert(v.type))),tt&&(Xe?t.texStorage2D(i.TEXTURE_2D,1,_e,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,_e,j.width,j.height,0,He,Ae,null));else if(v.isDataTexture)if(Pe.length>0&&qe){Xe&&tt&&t.texStorage2D(i.TEXTURE_2D,Oe,_e,Pe[0].width,Pe[0].height);for(let ie=0,C=Pe.length;ie<C;ie++)de=Pe[ie],Xe?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,de.width,de.height,He,Ae,de.data):t.texImage2D(i.TEXTURE_2D,ie,_e,de.width,de.height,0,He,Ae,de.data);v.generateMipmaps=!1}else Xe?(tt&&t.texStorage2D(i.TEXTURE_2D,Oe,_e,j.width,j.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,He,Ae,j.data)):t.texImage2D(i.TEXTURE_2D,0,_e,j.width,j.height,0,He,Ae,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Xe&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,_e,Pe[0].width,Pe[0].height,j.depth);for(let ie=0,C=Pe.length;ie<C;ie++)de=Pe[ie],v.format!==Vt?He!==null?Xe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,j.depth,He,de.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,_e,de.width,de.height,j.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,j.depth,He,Ae,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,_e,de.width,de.height,j.depth,0,He,Ae,de.data)}else{Xe&&tt&&t.texStorage2D(i.TEXTURE_2D,Oe,_e,Pe[0].width,Pe[0].height);for(let ie=0,C=Pe.length;ie<C;ie++)de=Pe[ie],v.format!==Vt?He!==null?Xe?t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,de.width,de.height,He,de.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,_e,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,de.width,de.height,He,Ae,de.data):t.texImage2D(i.TEXTURE_2D,ie,_e,de.width,de.height,0,He,Ae,de.data)}else if(v.isDataArrayTexture)Xe?(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,_e,j.width,j.height,j.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,He,Ae,j.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,j.width,j.height,j.depth,0,He,Ae,j.data);else if(v.isData3DTexture)Xe?(tt&&t.texStorage3D(i.TEXTURE_3D,Oe,_e,j.width,j.height,j.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,He,Ae,j.data)):t.texImage3D(i.TEXTURE_3D,0,_e,j.width,j.height,j.depth,0,He,Ae,j.data);else if(v.isFramebufferTexture){if(tt)if(Xe)t.texStorage2D(i.TEXTURE_2D,Oe,_e,j.width,j.height);else{let ie=j.width,C=j.height;for(let ae=0;ae<Oe;ae++)t.texImage2D(i.TEXTURE_2D,ae,_e,ie,C,0,He,Ae,null),ie>>=1,C>>=1}}else if(Pe.length>0&&qe){Xe&&tt&&t.texStorage2D(i.TEXTURE_2D,Oe,_e,Pe[0].width,Pe[0].height);for(let ie=0,C=Pe.length;ie<C;ie++)de=Pe[ie],Xe?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,He,Ae,de):t.texImage2D(i.TEXTURE_2D,ie,_e,He,Ae,de);v.generateMipmaps=!1}else Xe?(tt&&t.texStorage2D(i.TEXTURE_2D,Oe,_e,j.width,j.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,He,Ae,j)):t.texImage2D(i.TEXTURE_2D,0,_e,He,Ae,j);b(v,qe)&&S(J),pe.__version=Q.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function fe(E,v,N){if(v.image.length!==6)return;const J=$(E,v),K=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+N);const Q=n.get(K);if(K.version!==Q.__version||J===!0){t.activeTexture(i.TEXTURE0+N);const pe=Ye.getPrimaries(Ye.workingColorSpace),oe=v.colorSpace===Ut?null:Ye.getPrimaries(v.colorSpace),ce=v.colorSpace===Ut||pe===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Me=v.isCompressedTexture||v.image[0].isCompressedTexture,Ue=v.image[0]&&v.image[0].isDataTexture,j=[];for(let ie=0;ie<6;ie++)!Me&&!Ue?j[ie]=_(v.image[ie],!1,!0,a.maxCubemapSize):j[ie]=Ue?v.image[ie].image:v.image[ie],j[ie]=Ie(v,j[ie]);const qe=j[0],He=p(qe)||o,Ae=r.convert(v.format,v.colorSpace),_e=r.convert(v.type),de=A(v.internalFormat,Ae,_e,v.colorSpace),Pe=o&&v.isVideoTexture!==!0,Xe=Q.__version===void 0||J===!0;let tt=P(v,qe,He);H(i.TEXTURE_CUBE_MAP,v,He);let Oe;if(Me){Pe&&Xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,tt,de,qe.width,qe.height);for(let ie=0;ie<6;ie++){Oe=j[ie].mipmaps;for(let C=0;C<Oe.length;C++){const ae=Oe[C];v.format!==Vt?Ae!==null?Pe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C,0,0,ae.width,ae.height,Ae,ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C,de,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C,0,0,ae.width,ae.height,Ae,_e,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C,de,ae.width,ae.height,0,Ae,_e,ae.data)}}}else{Oe=v.mipmaps,Pe&&Xe&&(Oe.length>0&&tt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,tt,de,j[0].width,j[0].height));for(let ie=0;ie<6;ie++)if(Ue){Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,j[ie].width,j[ie].height,Ae,_e,j[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,de,j[ie].width,j[ie].height,0,Ae,_e,j[ie].data);for(let C=0;C<Oe.length;C++){const re=Oe[C].image[ie].image;Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C+1,0,0,re.width,re.height,Ae,_e,re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C+1,de,re.width,re.height,0,Ae,_e,re.data)}}else{Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ae,_e,j[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,de,Ae,_e,j[ie]);for(let C=0;C<Oe.length;C++){const ae=Oe[C];Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C+1,0,0,Ae,_e,ae.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C+1,de,Ae,_e,ae.image[ie])}}}b(v,He)&&S(i.TEXTURE_CUBE_MAP),Q.__version=K.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ge(E,v,N,J,K,Q){const pe=r.convert(N.format,N.colorSpace),oe=r.convert(N.type),ce=A(N.internalFormat,pe,oe,N.colorSpace);if(!n.get(v).__hasExternalTextures){const Ue=Math.max(1,v.width>>Q),j=Math.max(1,v.height>>Q);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,Q,ce,Ue,j,v.depth,0,pe,oe,null):t.texImage2D(K,Q,ce,Ue,j,0,pe,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),he(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,K,n.get(N).__webglTexture,0,Te(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,K,n.get(N).__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(E,v,N){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer&&!v.stencilBuffer){let J=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(N||he(v)){const K=v.depthTexture;K&&K.isDepthTexture&&(K.type===ci?J=i.DEPTH_COMPONENT32F:K.type===li&&(J=i.DEPTH_COMPONENT24));const Q=Te(v);he(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,J,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,J,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,J,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(v.depthBuffer&&v.stencilBuffer){const J=Te(v);N&&he(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,v.width,v.height):he(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{const J=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let K=0;K<J.length;K++){const Q=J[K],pe=r.convert(Q.format,Q.colorSpace),oe=r.convert(Q.type),ce=A(Q.internalFormat,pe,oe,Q.colorSpace),Me=Te(v);N&&he(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,ce,v.width,v.height):he(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,ce,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ce,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);const J=n.get(v.depthTexture).__webglTexture,K=Te(v);if(v.depthTexture.format===Ai)he(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(v.depthTexture.format===Qi)he(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ee(E){const v=n.get(E),N=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Le(v.__webglFramebuffer,E)}else if(N){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]=i.createRenderbuffer(),Ce(v.__webglDepthbuffer[J],E,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Ce(v.__webglDepthbuffer,E,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(E,v,N){const J=n.get(E);v!==void 0&&ge(J.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Ee(E)}function I(E){const v=E.texture,N=n.get(E),J=n.get(v);E.addEventListener("dispose",Y),E.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=v.version,s.memory.textures++);const K=E.isWebGLCubeRenderTarget===!0,Q=E.isWebGLMultipleRenderTargets===!0,pe=p(E)||o;if(K){N.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(o&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[oe]=[];for(let ce=0;ce<v.mipmaps.length;ce++)N.__webglFramebuffer[oe][ce]=i.createFramebuffer()}else N.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)N.__webglFramebuffer[oe]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Q)if(a.drawBuffers){const oe=E.texture;for(let ce=0,Me=oe.length;ce<Me;ce++){const Ue=n.get(oe[ce]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&he(E)===!1){const oe=Q?v:[v];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ce=0;ce<oe.length;ce++){const Me=oe[ce];N.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ce]);const Ue=r.convert(Me.format,Me.colorSpace),j=r.convert(Me.type),qe=A(Me.internalFormat,Ue,j,Me.colorSpace,E.isXRRenderTarget===!0),He=Te(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,qe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,N.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Ce(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),H(i.TEXTURE_CUBE_MAP,v,pe);for(let oe=0;oe<6;oe++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let ce=0;ce<v.mipmaps.length;ce++)ge(N.__webglFramebuffer[oe][ce],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ce);else ge(N.__webglFramebuffer[oe],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);b(v,pe)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){const oe=E.texture;for(let ce=0,Me=oe.length;ce<Me;ce++){const Ue=oe[ce],j=n.get(Ue);t.bindTexture(i.TEXTURE_2D,j.__webglTexture),H(i.TEXTURE_2D,Ue,pe),ge(N.__webglFramebuffer,E,Ue,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),b(Ue,pe)&&S(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?oe=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,J.__webglTexture),H(oe,v,pe),o&&v.mipmaps&&v.mipmaps.length>0)for(let ce=0;ce<v.mipmaps.length;ce++)ge(N.__webglFramebuffer[ce],E,v,i.COLOR_ATTACHMENT0,oe,ce);else ge(N.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,oe,0);b(v,pe)&&S(oe),t.unbindTexture()}E.depthBuffer&&Ee(E)}function gt(E){const v=p(E)||o,N=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let J=0,K=N.length;J<K;J++){const Q=N[J];if(b(Q,v)){const pe=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,oe=n.get(Q).__webglTexture;t.bindTexture(pe,oe),S(pe),t.unbindTexture()}}}function ve(E){if(o&&E.samples>0&&he(E)===!1){const v=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],N=E.width,J=E.height;let K=i.COLOR_BUFFER_BIT;const Q=[],pe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(E),ce=E.isWebGLMultipleRenderTargets===!0;if(ce)for(let Me=0;Me<v.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Me=0;Me<v.length;Me++){Q.push(i.COLOR_ATTACHMENT0+Me),E.depthBuffer&&Q.push(pe);const Ue=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Ue===!1&&(E.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ce&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[Me]),Ue===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[pe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[pe])),ce){const j=n.get(v[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,N,J,0,0,N,J,K,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Me=0;Me<v.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,oe.__webglColorRenderbuffer[Me]);const Ue=n.get(v[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Te(E){return Math.min(a.maxSamples,E.samples)}function he(E){const v=n.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Qe(E){const v=s.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function Ie(E,v){const N=E.colorSpace,J=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===tr||N!==ti&&N!==Ut&&(Ye.getTransfer(N)===Je?o===!1?e.has("EXT_sRGB")===!0&&J===Vt?(E.format=tr,E.minFilter=It,E.generateMipmaps=!1):v=bs.sRGBToLinear(v):(J!==Vt||K!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}this.allocateTextureUnit=R,this.resetTextureUnits=te,this.setTexture2D=G,this.setTexture2DArray=q,this.setTexture3D=z,this.setTextureCube=V,this.rebindTextures=ke,this.setupRenderTarget=I,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=he}function fp(i,e,t){const n=t.isWebGL2;function a(r,s=Ut){let o;const l=Ye.getTransfer(s);if(r===hi)return i.UNSIGNED_BYTE;if(r===ps)return i.UNSIGNED_SHORT_4_4_4_4;if(r===ms)return i.UNSIGNED_SHORT_5_5_5_1;if(r===$l)return i.BYTE;if(r===jl)return i.SHORT;if(r===cr)return i.UNSIGNED_SHORT;if(r===fs)return i.INT;if(r===li)return i.UNSIGNED_INT;if(r===ci)return i.FLOAT;if(r===mn)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Kl)return i.ALPHA;if(r===Vt)return i.RGBA;if(r===Jl)return i.LUMINANCE;if(r===Zl)return i.LUMINANCE_ALPHA;if(r===Ai)return i.DEPTH_COMPONENT;if(r===Qi)return i.DEPTH_STENCIL;if(r===tr)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Ql)return i.RED;if(r===gs)return i.RED_INTEGER;if(r===ec)return i.RG;if(r===_s)return i.RG_INTEGER;if(r===vs)return i.RGBA_INTEGER;if(r===fa||r===pa||r===ma||r===ga)if(l===Je)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===fa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===pa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ma)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===fa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===pa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ma)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ga)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ur||r===Nr||r===Fr||r===Or)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ur)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Or)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xs)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Br||r===zr)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Br)return l===Je?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===zr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Hr||r===Gr||r===Vr||r===kr||r===Wr||r===Xr||r===qr||r===Yr||r===$r||r===jr||r===Kr||r===Jr||r===Zr||r===Qr)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Hr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Gr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===kr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Wr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Xr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Yr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$r)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Kr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Qr)return l===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_a||r===eo||r===to)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===_a)return l===Je?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===eo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===to)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===tc||r===io||r===no||r===ao)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===_a)return o.COMPRESSED_RED_RGTC1_EXT;if(r===io)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===no)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ao)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bi?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:a}}class pp extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hn extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mp={type:"move"};class Va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mp)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class gp extends tn{constructor(e,t){super();const n=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,g=null;const _=t.getContextAttributes();let p=null,d=null;const b=[],S=[],A=new We;let P=null;const T=new Ct;T.layers.enable(1),T.viewport=new Ze;const w=new Ct;w.layers.enable(2),w.viewport=new Ze;const Y=[T,w],M=new pp;M.layers.enable(1),M.layers.enable(2);let y=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let $=b[H];return $===void 0&&($=new Va,b[H]=$),$.getTargetRaySpace()},this.getControllerGrip=function(H){let $=b[H];return $===void 0&&($=new Va,b[H]=$),$.getGripSpace()},this.getHand=function(H){let $=b[H];return $===void 0&&($=new Va,b[H]=$),$.getHandSpace()};function W(H){const $=S.indexOf(H.inputSource);if($===-1)return;const se=b[$];se!==void 0&&(se.update(H.inputSource,H.frame,c||s),se.dispatchEvent({type:H.type,data:H.inputSource}))}function te(){a.removeEventListener("select",W),a.removeEventListener("selectstart",W),a.removeEventListener("selectend",W),a.removeEventListener("squeeze",W),a.removeEventListener("squeezestart",W),a.removeEventListener("squeezeend",W),a.removeEventListener("end",te),a.removeEventListener("inputsourceschange",R);for(let H=0;H<b.length;H++){const $=S[H];$!==null&&(S[H]=null,b[H].disconnect($))}y=null,k=null,e.setRenderTarget(p),m=null,h=null,f=null,a=null,d=null,Z.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(H){if(a=H,a!==null){if(p=e.getRenderTarget(),a.addEventListener("select",W),a.addEventListener("selectstart",W),a.addEventListener("selectend",W),a.addEventListener("squeeze",W),a.addEventListener("squeezestart",W),a.addEventListener("squeezeend",W),a.addEventListener("end",te),a.addEventListener("inputsourceschange",R),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(A),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:a.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(a,t,$),a.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new wi(m.framebufferWidth,m.framebufferHeight,{format:Vt,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,se=null,fe=null;_.depth&&(fe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=_.stencil?Qi:Ai,se=_.stencil?bi:li);const ge={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};f=new XRWebGLBinding(a,t),h=f.createProjectionLayer(ge),a.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),d=new wi(h.textureWidth,h.textureHeight,{format:Vt,type:hi,depthTexture:new Os(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ce=e.properties.get(d);Ce.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),Z.setContext(a),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function R(H){for(let $=0;$<H.removed.length;$++){const se=H.removed[$],fe=S.indexOf(se);fe>=0&&(S[fe]=null,b[fe].disconnect(se))}for(let $=0;$<H.added.length;$++){const se=H.added[$];let fe=S.indexOf(se);if(fe===-1){for(let Ce=0;Ce<b.length;Ce++)if(Ce>=S.length){S.push(se),fe=Ce;break}else if(S[Ce]===null){S[Ce]=se,fe=Ce;break}if(fe===-1)break}const ge=b[fe];ge&&ge.connect(se)}}const O=new L,G=new L;function q(H,$,se){O.setFromMatrixPosition($.matrixWorld),G.setFromMatrixPosition(se.matrixWorld);const fe=O.distanceTo(G),ge=$.projectionMatrix.elements,Ce=se.projectionMatrix.elements,Le=ge[14]/(ge[10]-1),Ee=ge[14]/(ge[10]+1),ke=(ge[9]+1)/ge[5],I=(ge[9]-1)/ge[5],gt=(ge[8]-1)/ge[0],ve=(Ce[8]+1)/Ce[0],Te=Le*gt,he=Le*ve,Qe=fe/(-gt+ve),Ie=Qe*-gt;$.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ie),H.translateZ(Qe),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const E=Le+Qe,v=Ee+Qe,N=Te-Ie,J=he+(fe-Ie),K=ke*Ee/v*E,Q=I*Ee/v*E;H.projectionMatrix.makePerspective(N,J,K,Q,E,v),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function z(H,$){$===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices($.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(a===null)return;M.near=w.near=T.near=H.near,M.far=w.far=T.far=H.far,(y!==M.near||k!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),y=M.near,k=M.far);const $=H.parent,se=M.cameras;z(M,$);for(let fe=0;fe<se.length;fe++)z(se[fe],$);se.length===2?q(M,T,w):M.projectionMatrix.copy(T.projectionMatrix),V(H,M,$)};function V(H,$,se){se===null?H.matrix.copy($.matrixWorld):(H.matrix.copy(se.matrixWorld),H.matrix.invert(),H.matrix.multiply($.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=ir*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let X=null;function ee(H,$){if(u=$.getViewerPose(c||s),g=$,u!==null){const se=u.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let fe=!1;se.length!==M.cameras.length&&(M.cameras.length=0,fe=!0);for(let ge=0;ge<se.length;ge++){const Ce=se[ge];let Le=null;if(m!==null)Le=m.getViewport(Ce);else{const ke=f.getViewSubImage(h,Ce);Le=ke.viewport,ge===0&&(e.setRenderTargetTextures(d,ke.colorTexture,h.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(d))}let Ee=Y[ge];Ee===void 0&&(Ee=new Ct,Ee.layers.enable(ge),Ee.viewport=new Ze,Y[ge]=Ee),Ee.matrix.fromArray(Ce.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(Ce.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Le.x,Le.y,Le.width,Le.height),ge===0&&(M.matrix.copy(Ee.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),fe===!0&&M.cameras.push(Ee)}}for(let se=0;se<b.length;se++){const fe=S[se],ge=b[se];fe!==null&&ge!==void 0&&ge.update(fe,$,c||s)}X&&X(H,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const Z=new Ns;Z.setAnimationLoop(ee),this.setAnimationLoop=function(H){X=H},this.dispose=function(){}}}function _p(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Ds(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function a(p,d,b,S,A){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d)):d.isMeshStandardMaterial?(r(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,A)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),_(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,b,S):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===bt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===bt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const b=e.get(d).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const S=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*S,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,b,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*b,p.scale.value=S*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,b){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===bt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const b=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function vp(i,e,t,n){let a={},r={},s=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,S){const A=S.program;n.uniformBlockBinding(b,A)}function c(b,S){let A=a[b.id];A===void 0&&(g(b),A=u(b),a[b.id]=A,b.addEventListener("dispose",p));const P=S.program;n.updateUBOMapping(b,P);const T=e.render.frame;r[b.id]!==T&&(h(b),r[b.id]=T)}function u(b){const S=f();b.__bindingPointIndex=S;const A=i.createBuffer(),P=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,P,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,A),A}function f(){for(let b=0;b<o;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const S=a[b.id],A=b.uniforms,P=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,w=A.length;T<w;T++){const Y=Array.isArray(A[T])?A[T]:[A[T]];for(let M=0,y=Y.length;M<y;M++){const k=Y[M];if(m(k,T,M,P)===!0){const W=k.__offset,te=Array.isArray(k.value)?k.value:[k.value];let R=0;for(let O=0;O<te.length;O++){const G=te[O],q=_(G);typeof G=="number"||typeof G=="boolean"?(k.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,W+R,k.__data)):G.isMatrix3?(k.__data[0]=G.elements[0],k.__data[1]=G.elements[1],k.__data[2]=G.elements[2],k.__data[3]=0,k.__data[4]=G.elements[3],k.__data[5]=G.elements[4],k.__data[6]=G.elements[5],k.__data[7]=0,k.__data[8]=G.elements[6],k.__data[9]=G.elements[7],k.__data[10]=G.elements[8],k.__data[11]=0):(G.toArray(k.__data,R),R+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,S,A,P){const T=b.value,w=S+"_"+A;if(P[w]===void 0)return typeof T=="number"||typeof T=="boolean"?P[w]=T:P[w]=T.clone(),!0;{const Y=P[w];if(typeof T=="number"||typeof T=="boolean"){if(Y!==T)return P[w]=T,!0}else if(Y.equals(T)===!1)return Y.copy(T),!0}return!1}function g(b){const S=b.uniforms;let A=0;const P=16;for(let w=0,Y=S.length;w<Y;w++){const M=Array.isArray(S[w])?S[w]:[S[w]];for(let y=0,k=M.length;y<k;y++){const W=M[y],te=Array.isArray(W.value)?W.value:[W.value];for(let R=0,O=te.length;R<O;R++){const G=te[R],q=_(G),z=A%P;z!==0&&P-z<q.boundary&&(A+=P-z),W.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=A,A+=q.storage}}}const T=A%P;return T>0&&(A+=P-T),b.__size=A,b.__cache={},this}function _(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function p(b){const S=b.target;S.removeEventListener("dispose",p);const A=s.indexOf(S.__bindingPointIndex);s.splice(A,1),i.deleteBuffer(a[S.id]),delete a[S.id],delete r[S.id]}function d(){for(const b in a)i.deleteBuffer(a[b]);s=[],a={},r={}}return{bind:l,update:c,dispose:d}}class ks{constructor(e={}){const{canvas:t=fc(),context:n=null,depth:a=!0,stencil:r=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=s;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const d=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ht,this._useLegacyLights=!1,this.toneMapping=ui,this.toneMappingExposure=1;const S=this;let A=!1,P=0,T=0,w=null,Y=-1,M=null;const y=new Ze,k=new Ze;let W=null;const te=new Fe(0);let R=0,O=t.width,G=t.height,q=1,z=null,V=null;const X=new Ze(0,0,O,G),ee=new Ze(0,0,O,G);let Z=!1;const H=new hr;let $=!1,se=!1,fe=null;const ge=new nt,Ce=new We,Le=new L,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return w===null?q:1}let I=n;function gt(x,D){for(let F=0;F<x.length;F++){const B=x[F],U=t.getContext(B,D);if(U!==null)return U}return null}try{const x={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lr}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",ae,!1),I===null){const D=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&D.shift(),I=gt(D,x),I===null)throw gt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let ve,Te,he,Qe,Ie,E,v,N,J,K,Q,pe,oe,ce,Me,Ue,j,qe,He,Ae,_e,de,Pe,Xe;function tt(){ve=new wh(I),Te=new Mh(I,ve,e),ve.init(Te),de=new fp(I,ve,Te),he=new up(I,ve,Te),Qe=new Lh(I),Ie=new Jf,E=new hp(I,ve,he,Ie,Te,de,Qe),v=new yh(S),N=new Th(S),J=new Bc(I,Te),Pe=new xh(I,ve,J,Te),K=new Ch(I,J,Qe,Pe),Q=new Uh(I,K,J,Qe),He=new Ih(I,Te,E),Ue=new Eh(Ie),pe=new Kf(S,v,N,ve,Te,Pe,Ue),oe=new _p(S,Ie),ce=new Qf,Me=new rp(ve,Te),qe=new vh(S,v,N,he,Q,h,l),j=new dp(S,Q,Te),Xe=new vp(I,Qe,Te,he),Ae=new Sh(I,ve,Qe,Te),_e=new Rh(I,ve,Qe,Te),Qe.programs=pe.programs,S.capabilities=Te,S.extensions=ve,S.properties=Ie,S.renderLists=ce,S.shadowMap=j,S.state=he,S.info=Qe}tt();const Oe=new gp(S,I);this.xr=Oe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const x=ve.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ve.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(x){x!==void 0&&(q=x,this.setSize(O,G,!1))},this.getSize=function(x){return x.set(O,G)},this.setSize=function(x,D,F=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=x,G=D,t.width=Math.floor(x*q),t.height=Math.floor(D*q),F===!0&&(t.style.width=x+"px",t.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(O*q,G*q).floor()},this.setDrawingBufferSize=function(x,D,F){O=x,G=D,q=F,t.width=Math.floor(x*F),t.height=Math.floor(D*F),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(y)},this.getViewport=function(x){return x.copy(X)},this.setViewport=function(x,D,F,B){x.isVector4?X.set(x.x,x.y,x.z,x.w):X.set(x,D,F,B),he.viewport(y.copy(X).multiplyScalar(q).floor())},this.getScissor=function(x){return x.copy(ee)},this.setScissor=function(x,D,F,B){x.isVector4?ee.set(x.x,x.y,x.z,x.w):ee.set(x,D,F,B),he.scissor(k.copy(ee).multiplyScalar(q).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(x){he.setScissorTest(Z=x)},this.setOpaqueSort=function(x){z=x},this.setTransparentSort=function(x){V=x},this.getClearColor=function(x){return x.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(x=!0,D=!0,F=!0){let B=0;if(x){let U=!1;if(w!==null){const le=w.texture.format;U=le===vs||le===_s||le===gs}if(U){const le=w.texture.type,me=le===hi||le===li||le===cr||le===bi||le===ps||le===ms,Se=qe.getClearColor(),be=qe.getClearAlpha(),Ne=Se.r,we=Se.g,Re=Se.b;me?(m[0]=Ne,m[1]=we,m[2]=Re,m[3]=be,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=Ne,g[1]=we,g[2]=Re,g[3]=be,I.clearBufferiv(I.COLOR,0,g))}else B|=I.COLOR_BUFFER_BIT}D&&(B|=I.DEPTH_BUFFER_BIT),F&&(B|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ce.dispose(),Me.dispose(),Ie.dispose(),v.dispose(),N.dispose(),Q.dispose(),Pe.dispose(),Xe.dispose(),pe.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",_t),Oe.removeEventListener("sessionend",Ke),fe&&(fe.dispose(),fe=null),vt.stop()};function ie(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const x=Qe.autoReset,D=j.enabled,F=j.autoUpdate,B=j.needsUpdate,U=j.type;tt(),Qe.autoReset=x,j.enabled=D,j.autoUpdate=F,j.needsUpdate=B,j.type=U}function ae(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function re(x){const D=x.target;D.removeEventListener("dispose",re),ye(D)}function ye(x){xe(x),Ie.remove(x)}function xe(x){const D=Ie.get(x).programs;D!==void 0&&(D.forEach(function(F){pe.releaseProgram(F)}),x.isShaderMaterial&&pe.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,F,B,U,le){D===null&&(D=Ee);const me=U.isMesh&&U.matrixWorld.determinant()<0,Se=el(x,D,F,B,U);he.setMaterial(B,me);let be=F.index,Ne=1;if(B.wireframe===!0){if(be=K.getWireframeAttribute(F),be===void 0)return;Ne=2}const we=F.drawRange,Re=F.attributes.position;let at=we.start*Ne,At=(we.start+we.count)*Ne;le!==null&&(at=Math.max(at,le.start*Ne),At=Math.min(At,(le.start+le.count)*Ne)),be!==null?(at=Math.max(at,0),At=Math.min(At,be.count)):Re!=null&&(at=Math.max(at,0),At=Math.min(At,Re.count));const ct=At-at;if(ct<0||ct===1/0)return;Pe.setup(U,B,Se,F,be);let qt,et=Ae;if(be!==null&&(qt=J.get(be),et=_e,et.setIndex(qt)),U.isMesh)B.wireframe===!0?(he.setLineWidth(B.wireframeLinewidth*ke()),et.setMode(I.LINES)):et.setMode(I.TRIANGLES);else if(U.isLine){let Be=B.linewidth;Be===void 0&&(Be=1),he.setLineWidth(Be*ke()),U.isLineSegments?et.setMode(I.LINES):U.isLineLoop?et.setMode(I.LINE_LOOP):et.setMode(I.LINE_STRIP)}else U.isPoints?et.setMode(I.POINTS):U.isSprite&&et.setMode(I.TRIANGLES);if(U.isBatchedMesh)et.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)et.renderInstances(at,ct,U.count);else if(F.isInstancedBufferGeometry){const Be=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,la=Math.min(F.instanceCount,Be);et.renderInstances(at,ct,la)}else et.render(at,ct)};function $e(x,D,F){x.transparent===!0&&x.side===Qt&&x.forceSinglePass===!1?(x.side=bt,x.needsUpdate=!0,Mn(x,D,F),x.side=fi,x.needsUpdate=!0,Mn(x,D,F),x.side=Qt):Mn(x,D,F)}this.compile=function(x,D,F=null){F===null&&(F=x),p=Me.get(F),p.init(),b.push(p),F.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),x!==F&&x.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights(S._useLegacyLights);const B=new Set;return x.traverse(function(U){const le=U.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){const Se=le[me];$e(Se,F,U),B.add(Se)}else $e(le,F,U),B.add(le)}),b.pop(),p=null,B},this.compileAsync=function(x,D,F=null){const B=this.compile(x,D,F);return new Promise(U=>{function le(){if(B.forEach(function(me){Ie.get(me).currentProgram.isReady()&&B.delete(me)}),B.size===0){U(x);return}setTimeout(le,10)}ve.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let je=null;function lt(x){je&&je(x)}function _t(){vt.stop()}function Ke(){vt.start()}const vt=new Ns;vt.setAnimationLoop(lt),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(x){je=x,Oe.setAnimationLoop(x),x===null?vt.stop():vt.start()},Oe.addEventListener("sessionstart",_t),Oe.addEventListener("sessionend",Ke),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(D),D=Oe.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,D,w),p=Me.get(x,b.length),p.init(),b.push(p),ge.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),H.setFromProjectionMatrix(ge),se=this.localClippingEnabled,$=Ue.init(this.clippingPlanes,se),_=ce.get(x,d.length),_.init(),d.push(_),kt(x,D,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(z,V),this.info.render.frame++,$===!0&&Ue.beginShadows();const F=p.state.shadowsArray;if(j.render(F,x,D),$===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),qe.render(_,x),p.setupLights(S._useLegacyLights),D.isArrayCamera){const B=D.cameras;for(let U=0,le=B.length;U<le;U++){const me=B[U];Er(_,x,me,me.viewport)}}else Er(_,x,D);w!==null&&(E.updateMultisampleRenderTarget(w),E.updateRenderTargetMipmap(w)),x.isScene===!0&&x.onAfterRender(S,x,D),Pe.resetDefaultState(),Y=-1,M=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function kt(x,D,F,B){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||H.intersectsSprite(x)){B&&Le.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ge);const me=Q.update(x),Se=x.material;Se.visible&&_.push(x,me,Se,F,Le.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||H.intersectsObject(x))){const me=Q.update(x),Se=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Le.copy(x.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Le.copy(me.boundingSphere.center)),Le.applyMatrix4(x.matrixWorld).applyMatrix4(ge)),Array.isArray(Se)){const be=me.groups;for(let Ne=0,we=be.length;Ne<we;Ne++){const Re=be[Ne],at=Se[Re.materialIndex];at&&at.visible&&_.push(x,me,at,F,Le.z,Re)}}else Se.visible&&_.push(x,me,Se,F,Le.z,null)}}const le=x.children;for(let me=0,Se=le.length;me<Se;me++)kt(le[me],D,F,B)}function Er(x,D,F,B){const U=x.opaque,le=x.transmissive,me=x.transparent;p.setupLightsView(F),$===!0&&Ue.setGlobalState(S.clippingPlanes,F),le.length>0&&Qs(U,le,D,F),B&&he.viewport(y.copy(B)),U.length>0&&Sn(U,D,F),le.length>0&&Sn(le,D,F),me.length>0&&Sn(me,D,F),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Qs(x,D,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const le=Te.isWebGL2;fe===null&&(fe=new wi(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?mn:hi,minFilter:pn,samples:le?4:0})),S.getDrawingBufferSize(Ce),le?fe.setSize(Ce.x,Ce.y):fe.setSize(nr(Ce.x),nr(Ce.y));const me=S.getRenderTarget();S.setRenderTarget(fe),S.getClearColor(te),R=S.getClearAlpha(),R<1&&S.setClearColor(16777215,.5),S.clear();const Se=S.toneMapping;S.toneMapping=ui,Sn(x,F,B),E.updateMultisampleRenderTarget(fe),E.updateRenderTargetMipmap(fe);let be=!1;for(let Ne=0,we=D.length;Ne<we;Ne++){const Re=D[Ne],at=Re.object,At=Re.geometry,ct=Re.material,qt=Re.group;if(ct.side===Qt&&at.layers.test(B.layers)){const et=ct.side;ct.side=bt,ct.needsUpdate=!0,yr(at,F,B,At,ct,qt),ct.side=et,ct.needsUpdate=!0,be=!0}}be===!0&&(E.updateMultisampleRenderTarget(fe),E.updateRenderTargetMipmap(fe)),S.setRenderTarget(me),S.setClearColor(te,R),S.toneMapping=Se}function Sn(x,D,F){const B=D.isScene===!0?D.overrideMaterial:null;for(let U=0,le=x.length;U<le;U++){const me=x[U],Se=me.object,be=me.geometry,Ne=B===null?me.material:B,we=me.group;Se.layers.test(F.layers)&&yr(Se,D,F,be,Ne,we)}}function yr(x,D,F,B,U,le){x.onBeforeRender(S,D,F,B,U,le),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),U.onBeforeRender(S,D,F,B,x,le),U.transparent===!0&&U.side===Qt&&U.forceSinglePass===!1?(U.side=bt,U.needsUpdate=!0,S.renderBufferDirect(F,D,B,U,x,le),U.side=fi,U.needsUpdate=!0,S.renderBufferDirect(F,D,B,U,x,le),U.side=Qt):S.renderBufferDirect(F,D,B,U,x,le),x.onAfterRender(S,D,F,B,U,le)}function Mn(x,D,F){D.isScene!==!0&&(D=Ee);const B=Ie.get(x),U=p.state.lights,le=p.state.shadowsArray,me=U.state.version,Se=pe.getParameters(x,U.state,le,D,F),be=pe.getProgramCacheKey(Se);let Ne=B.programs;B.environment=x.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(x.isMeshStandardMaterial?N:v).get(x.envMap||B.environment),Ne===void 0&&(x.addEventListener("dispose",re),Ne=new Map,B.programs=Ne);let we=Ne.get(be);if(we!==void 0){if(B.currentProgram===we&&B.lightsStateVersion===me)return Ar(x,Se),we}else Se.uniforms=pe.getUniforms(x),x.onBuild(F,Se,S),x.onBeforeCompile(Se,S),we=pe.acquireProgram(Se,be),Ne.set(be,we),B.uniforms=Se.uniforms;const Re=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Re.clippingPlanes=Ue.uniform),Ar(x,Se),B.needsLights=il(x),B.lightsStateVersion=me,B.needsLights&&(Re.ambientLightColor.value=U.state.ambient,Re.lightProbe.value=U.state.probe,Re.directionalLights.value=U.state.directional,Re.directionalLightShadows.value=U.state.directionalShadow,Re.spotLights.value=U.state.spot,Re.spotLightShadows.value=U.state.spotShadow,Re.rectAreaLights.value=U.state.rectArea,Re.ltc_1.value=U.state.rectAreaLTC1,Re.ltc_2.value=U.state.rectAreaLTC2,Re.pointLights.value=U.state.point,Re.pointLightShadows.value=U.state.pointShadow,Re.hemisphereLights.value=U.state.hemi,Re.directionalShadowMap.value=U.state.directionalShadowMap,Re.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Re.spotShadowMap.value=U.state.spotShadowMap,Re.spotLightMatrix.value=U.state.spotLightMatrix,Re.spotLightMap.value=U.state.spotLightMap,Re.pointShadowMap.value=U.state.pointShadowMap,Re.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=we,B.uniformsList=null,we}function br(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=$n.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function Ar(x,D){const F=Ie.get(x);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function el(x,D,F,B,U){D.isScene!==!0&&(D=Ee),E.resetTextureUnits();const le=D.fog,me=B.isMeshStandardMaterial?D.environment:null,Se=w===null?S.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ti,be=(B.isMeshStandardMaterial?N:v).get(B.envMap||me),Ne=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,we=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Re=!!F.morphAttributes.position,at=!!F.morphAttributes.normal,At=!!F.morphAttributes.color;let ct=ui;B.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ct=S.toneMapping);const qt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,et=qt!==void 0?qt.length:0,Be=Ie.get(B),la=p.state.lights;if($===!0&&(se===!0||x!==M)){const Pt=x===M&&B.id===Y;Ue.setState(B,x,Pt)}let it=!1;B.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==la.state.version||Be.outputColorSpace!==Se||U.isBatchedMesh&&Be.batching===!1||!U.isBatchedMesh&&Be.batching===!0||U.isInstancedMesh&&Be.instancing===!1||!U.isInstancedMesh&&Be.instancing===!0||U.isSkinnedMesh&&Be.skinning===!1||!U.isSkinnedMesh&&Be.skinning===!0||U.isInstancedMesh&&Be.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Be.instancingColor===!1&&U.instanceColor!==null||Be.envMap!==be||B.fog===!0&&Be.fog!==le||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Ue.numPlanes||Be.numIntersection!==Ue.numIntersection)||Be.vertexAlphas!==Ne||Be.vertexTangents!==we||Be.morphTargets!==Re||Be.morphNormals!==at||Be.morphColors!==At||Be.toneMapping!==ct||Te.isWebGL2===!0&&Be.morphTargetsCount!==et)&&(it=!0):(it=!0,Be.__version=B.version);let pi=Be.currentProgram;it===!0&&(pi=Mn(B,D,U));let Tr=!1,rn=!1,ca=!1;const ft=pi.getUniforms(),mi=Be.uniforms;if(he.useProgram(pi.program)&&(Tr=!0,rn=!0,ca=!0),B.id!==Y&&(Y=B.id,rn=!0),Tr||M!==x){ft.setValue(I,"projectionMatrix",x.projectionMatrix),ft.setValue(I,"viewMatrix",x.matrixWorldInverse);const Pt=ft.map.cameraPosition;Pt!==void 0&&Pt.setValue(I,Le.setFromMatrixPosition(x.matrixWorld)),Te.logarithmicDepthBuffer&&ft.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ft.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,rn=!0,ca=!0)}if(U.isSkinnedMesh){ft.setOptional(I,U,"bindMatrix"),ft.setOptional(I,U,"bindMatrixInverse");const Pt=U.skeleton;Pt&&(Te.floatVertexTextures?(Pt.boneTexture===null&&Pt.computeBoneTexture(),ft.setValue(I,"boneTexture",Pt.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}U.isBatchedMesh&&(ft.setOptional(I,U,"batchingTexture"),ft.setValue(I,"batchingTexture",U._matricesTexture,E));const da=F.morphAttributes;if((da.position!==void 0||da.normal!==void 0||da.color!==void 0&&Te.isWebGL2===!0)&&He.update(U,F,pi),(rn||Be.receiveShadow!==U.receiveShadow)&&(Be.receiveShadow=U.receiveShadow,ft.setValue(I,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(mi.envMap.value=be,mi.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),rn&&(ft.setValue(I,"toneMappingExposure",S.toneMappingExposure),Be.needsLights&&tl(mi,ca),le&&B.fog===!0&&oe.refreshFogUniforms(mi,le),oe.refreshMaterialUniforms(mi,B,q,G,fe),$n.upload(I,br(Be),mi,E)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&($n.upload(I,br(Be),mi,E),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ft.setValue(I,"center",U.center),ft.setValue(I,"modelViewMatrix",U.modelViewMatrix),ft.setValue(I,"normalMatrix",U.normalMatrix),ft.setValue(I,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Pt=B.uniformsGroups;for(let ua=0,nl=Pt.length;ua<nl;ua++)if(Te.isWebGL2){const wr=Pt[ua];Xe.update(wr,pi),Xe.bind(wr,pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pi}function tl(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function il(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(x,D,F){Ie.get(x.texture).__webglTexture=D,Ie.get(x.depthTexture).__webglTexture=F;const B=Ie.get(x);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,D){const F=Ie.get(x);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,F=0){w=x,P=D,T=F;let B=!0,U=null,le=!1,me=!1;if(x){const be=Ie.get(x);be.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(I.FRAMEBUFFER,null),B=!1):be.__webglFramebuffer===void 0?E.setupRenderTarget(x):be.__hasExternalTextures&&E.rebindTextures(x,Ie.get(x.texture).__webglTexture,Ie.get(x.depthTexture).__webglTexture);const Ne=x.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(me=!0);const we=Ie.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(we[D])?U=we[D][F]:U=we[D],le=!0):Te.isWebGL2&&x.samples>0&&E.useMultisampledRTT(x)===!1?U=Ie.get(x).__webglMultisampledFramebuffer:Array.isArray(we)?U=we[F]:U=we,y.copy(x.viewport),k.copy(x.scissor),W=x.scissorTest}else y.copy(X).multiplyScalar(q).floor(),k.copy(ee).multiplyScalar(q).floor(),W=Z;if(he.bindFramebuffer(I.FRAMEBUFFER,U)&&Te.drawBuffers&&B&&he.drawBuffers(x,U),he.viewport(y),he.scissor(k),he.setScissorTest(W),le){const be=Ie.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,be.__webglTexture,F)}else if(me){const be=Ie.get(x.texture),Ne=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.__webglTexture,F||0,Ne)}Y=-1},this.readRenderTargetPixels=function(x,D,F,B,U,le,me){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ie.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se){he.bindFramebuffer(I.FRAMEBUFFER,Se);try{const be=x.texture,Ne=be.format,we=be.type;if(Ne!==Vt&&de.convert(Ne)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=we===mn&&(ve.has("EXT_color_buffer_half_float")||Te.isWebGL2&&ve.has("EXT_color_buffer_float"));if(we!==hi&&de.convert(we)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(we===ci&&(Te.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-B&&F>=0&&F<=x.height-U&&I.readPixels(D,F,B,U,de.convert(Ne),de.convert(we),le)}finally{const be=w!==null?Ie.get(w).__webglFramebuffer:null;he.bindFramebuffer(I.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(x,D,F=0){const B=Math.pow(2,-F),U=Math.floor(D.image.width*B),le=Math.floor(D.image.height*B);E.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,F,0,0,x.x,x.y,U,le),he.unbindTexture()},this.copyTextureToTexture=function(x,D,F,B=0){const U=D.image.width,le=D.image.height,me=de.convert(F.format),Se=de.convert(F.type);E.setTexture2D(F,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment),D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,B,x.x,x.y,U,le,me,Se,D.image.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,B,x.x,x.y,D.mipmaps[0].width,D.mipmaps[0].height,me,D.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,B,x.x,x.y,me,Se,D.image),B===0&&F.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(x,D,F,B,U=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=x.max.x-x.min.x+1,me=x.max.y-x.min.y+1,Se=x.max.z-x.min.z+1,be=de.convert(B.format),Ne=de.convert(B.type);let we;if(B.isData3DTexture)E.setTexture3D(B,0),we=I.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)E.setTexture2DArray(B,0),we=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const Re=I.getParameter(I.UNPACK_ROW_LENGTH),at=I.getParameter(I.UNPACK_IMAGE_HEIGHT),At=I.getParameter(I.UNPACK_SKIP_PIXELS),ct=I.getParameter(I.UNPACK_SKIP_ROWS),qt=I.getParameter(I.UNPACK_SKIP_IMAGES),et=F.isCompressedTexture?F.mipmaps[U]:F.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,et.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,et.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,x.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,x.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,x.min.z),F.isDataTexture||F.isData3DTexture?I.texSubImage3D(we,U,D.x,D.y,D.z,le,me,Se,be,Ne,et.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(we,U,D.x,D.y,D.z,le,me,Se,be,et.data)):I.texSubImage3D(we,U,D.x,D.y,D.z,le,me,Se,be,Ne,et),I.pixelStorei(I.UNPACK_ROW_LENGTH,Re),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,at),I.pixelStorei(I.UNPACK_SKIP_PIXELS,At),I.pixelStorei(I.UNPACK_SKIP_ROWS,ct),I.pixelStorei(I.UNPACK_SKIP_IMAGES,qt),U===0&&B.generateMipmaps&&I.generateMipmap(we),he.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?E.setTextureCube(x,0):x.isData3DTexture?E.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?E.setTexture2DArray(x,0):E.setTexture2D(x,0),he.unbindTexture()},this.resetState=function(){P=0,T=0,w=null,he.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===dr?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===aa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ht?Ti:Ss}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ti?ht:ti}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class xp extends ks{}xp.prototype.isWebGL1Renderer=!0;class mr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Fe(e),this.density=t}clone(){return new mr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Sp extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class rr extends Ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $o=new L,jo=new L,Ko=new nt,ka=new ur,Wn=new xn;class Mp extends ut{constructor(e=new Ft,t=new rr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let a=1,r=t.count;a<r;a++)$o.fromBufferAttribute(t,a-1),jo.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=$o.distanceTo(jo);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wn.copy(n.boundingSphere),Wn.applyMatrix4(a),Wn.radius+=r,e.ray.intersectsSphere(Wn)===!1)return;Ko.copy(a).invert(),ka.copy(e.ray).applyMatrix4(Ko);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,u=new L,f=new L,h=new L,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const d=Math.max(0,s.start),b=Math.min(g.count,s.start+s.count);for(let S=d,A=b-1;S<A;S+=m){const P=g.getX(S),T=g.getX(S+1);if(c.fromBufferAttribute(p,P),u.fromBufferAttribute(p,T),ka.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const Y=e.ray.origin.distanceTo(h);Y<e.near||Y>e.far||t.push({distance:Y,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,s.start),b=Math.min(p.count,s.start+s.count);for(let S=d,A=b-1;S<A;S+=m){if(c.fromBufferAttribute(p,S),u.fromBufferAttribute(p,S+1),ka.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||t.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Jo=new L,Zo=new L;class Ep extends Mp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let a=0,r=t.count;a<r;a+=2)Jo.fromBufferAttribute(t,a),Zo.fromBufferAttribute(t,a+1),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+Jo.distanceTo(Zo);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ws extends Ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qo=new nt,or=new ur,Xn=new xn,qn=new L;class yp extends ut{constructor(e=new Ft,t=new Ws){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xn.copy(n.boundingSphere),Xn.applyMatrix4(a),Xn.radius+=r,e.ray.intersectsSphere(Xn)===!1)return;Qo.copy(a).invert(),or.copy(e.ray).applyMatrix4(Qo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let g=h,_=m;g<_;g++){const p=c.getX(g);qn.fromBufferAttribute(f,p),es(qn,p,l,a,e,t,this)}}else{const h=Math.max(0,s.start),m=Math.min(f.count,s.start+s.count);for(let g=h,_=m;g<_;g++)qn.fromBufferAttribute(f,g),es(qn,g,l,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function es(i,e,t,n,a,r,s){const o=or.distanceSqToPoint(i);if(o<t){const l=new L;or.closestPointToPoint(i,l),l.applyMatrix4(n);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class gr extends Ft{constructor(e=1,t=.4,n=12,a=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:a,arc:r},n=Math.floor(n),a=Math.floor(a);const s=[],o=[],l=[],c=[],u=new L,f=new L,h=new L;for(let m=0;m<=n;m++)for(let g=0;g<=a;g++){const _=g/a*r,p=m/n*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(_),f.y=(e+t*Math.cos(p))*Math.sin(_),f.z=t*Math.sin(p),o.push(f.x,f.y,f.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/a),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=a;g++){const _=(a+1)*m+g-1,p=(a+1)*(m-1)+g-1,d=(a+1)*(m-1)+g,b=(a+1)*m+g;s.push(_,p,b),s.push(p,d,b)}this.setIndex(s),this.setAttribute("position",new Lt(o,3)),this.setAttribute("normal",new Lt(l,3)),this.setAttribute("uv",new Lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class bp extends Ft{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,a=new L,r=new L;if(e.index!==null){const s=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const f=l[c],h=f.start,m=f.count;for(let g=h,_=h+m;g<_;g+=3)for(let p=0;p<3;p++){const d=o.getX(g+p),b=o.getX(g+(p+1)%3);a.fromBufferAttribute(s,d),r.fromBufferAttribute(s,b),ts(a,r,n)===!0&&(t.push(a.x,a.y,a.z),t.push(r.x,r.y,r.z))}}}else{const s=e.attributes.position;for(let o=0,l=s.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,f=3*o+(c+1)%3;a.fromBufferAttribute(s,u),r.fromBufferAttribute(s,f),ts(a,r,n)===!0&&(t.push(a.x,a.y,a.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Lt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function ts(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,a=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(a)===!0?!1:(t.add(n),t.add(a),!0)}class Wa extends Ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ms,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _r extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Xa=new nt,is=new L,ns=new L;class Xs{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;is.setFromMatrixPosition(e.matrixWorld),t.position.copy(is),ns.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ns),t.updateMatrixWorld(),Xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const as=new nt,un=new L,qa=new L;class Ap extends Xs{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,a=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),un.setFromMatrixPosition(e.matrixWorld),n.position.copy(un),qa.copy(n.position),qa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(qa),n.updateMatrixWorld(),a.makeTranslation(-un.x,-un.y,-un.z),as.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(as)}}class Tp extends _r{constructor(e,t,n=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=a,this.shadow=new Ap}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wp extends Xs{constructor(){super(new Fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cp extends _r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new wp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Rp extends _r{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lr);function Lp(i="scrubbing-canvas"){const e=document.getElementById(i);if(!e)return null;const t=new ks({canvas:e,antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,2));const n=new Sp;n.background=new Fe(920586),n.fog=new mr(920586,.005);const a=new Ct(50,e.clientWidth/e.clientHeight,.1,500);a.position.set(0,4,18);const r=new Rp(16774630,1.4);n.add(r);const s=new Cp(13938251,3.5);s.position.set(20,30,20),n.add(s);const o=new Tp(16772820,3,100);o.position.set(0,8,0),n.add(o);const l=new nn(2.4,12,2.4),c=new bp(l),u=new Wa({color:2038550,roughness:.2,metalness:.88}),f=new rr({color:13938251,transparent:!0,opacity:.75}),h=new Wa({color:2827292,roughness:.15,metalness:.95}),m=new rr({color:16115128,transparent:!0,opacity:.95}),g=new hn;n.add(g);const _=60;for(let z=0;z<_;z++){const V=z%3===0,X=new Xt(l,V?h:u),ee=new Ep(c,V?m:f);X.add(ee);const Z=z/_*Math.PI*4,H=5.5+z%6*1.8,$=Math.cos(Z)*H,se=Math.sin(Z)*H*1.2,fe=Math.random()*2.5+1.2;X.position.set($,(Math.random()-.5)*2,se),X.scale.set(.9,fe,.9),X.rotation.y=Z+Math.PI/2,g.add(X)}const p=new gr(6.5,.1,16,80),d=new Wa({color:13938251,emissive:9858846,roughness:.15,metalness:.95}),b=[],S=6;for(let z=0;z<S;z++){const V=new Xt(p,d);V.position.set(0,2+(z-2.5)*1.8,0),V.rotation.x=Math.PI/2+z*.1,V.scale.setScalar(1+z*.25),n.add(V),b.push(V)}const A=12e3,P=new Ft,T=new Float32Array(A*3),w=new Float32Array(A*3),Y=[new Fe(13938251),new Fe(16115128),new Fe(11042080),new Fe(16777215)];for(let z=0;z<A;z++){T[z*3+0]=(Math.random()-.5)*50,T[z*3+1]=(Math.random()-.5)*30+3,T[z*3+2]=(Math.random()-.5)*50;const V=Y[Math.floor(Math.random()*Y.length)];w[z*3+0]=V.r,w[z*3+1]=V.g,w[z*3+2]=V.b}P.setAttribute("position",new Nt(T,3)),P.setAttribute("color",new Nt(w,3));const M=new Ws({size:.2,vertexColors:!0,transparent:!0,opacity:.9,blending:$a}),y=new yp(P,M);n.add(y);function k(){if(!e)return;const z=e.clientWidth,V=e.clientHeight;a.aspect=z/V,a.updateProjectionMatrix(),t.setSize(z,V,!1)}window.addEventListener("resize",k),k();let W=0;const te=document.getElementById("jornada");function R(){if(!te)return 0;const z=te.getBoundingClientRect(),V=te.offsetHeight-window.innerHeight;if(V<=0)return 0;const X=-z.top;return Math.max(0,Math.min(1,X/V))}let O,G=0;function q(){O=requestAnimationFrame(q),G+=.015;const z=R();W+=(z-W)*.1;const V=W*Math.PI*2.2+G*.1,X=22+Math.sin(W*Math.PI)*4,ee=4.5+Math.sin(W*Math.PI*3)*2.5;a.position.x=Math.sin(V)*X,a.position.z=Math.cos(V)*X,a.position.y=ee,a.lookAt(0,2,0);for(let Z=0;Z<b.length;Z++)b[Z].rotation.z=G*.3+Z*.35+W*Math.PI,b[Z].rotation.y=G*.15;g.rotation.y=G*.05+W*.8,y.rotation.y=-G*.03,t.render(n,a)}return q(),{destroy:()=>{cancelAnimationFrame(O),window.removeEventListener("resize",k),t.dispose()}}}var rs="1.3.27";function qs(i,e,t){return Math.max(i,Math.min(e,t))}function Pp(i,e,t){return(1-t)*i+t*e}function Dp(i,e,t,n){return Pp(i,e,1-Math.exp(-t*n))}function Ip(i,e){return(i%e+e)%e}var Up=class{constructor(){ue(this,"isRunning",!1);ue(this,"value",0);ue(this,"from",0);ue(this,"to",0);ue(this,"currentTime",0);ue(this,"lerp");ue(this,"duration");ue(this,"easing");ue(this,"onUpdate")}advance(i){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;const n=qs(0,this.currentTime/this.duration,1);e=n>=1;const a=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*a}else this.lerp?(this.value=Dp(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:a,onStart:r,onUpdate:s}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=a,this.currentTime=0,this.isRunning=!0,r==null||r(),this.onUpdate=s}};function Np(i,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,n)},e)}}var Fp=class{constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){ue(this,"width",0);ue(this,"height",0);ue(this,"scrollHeight",0);ue(this,"scrollWidth",0);ue(this,"debouncedResize");ue(this,"wrapperResizeObserver");ue(this,"contentResizeObserver");ue(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});ue(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});ue(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=e,t&&(this.debouncedResize=Np(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,e;(i=this.wrapperResizeObserver)==null||i.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Ys=class{constructor(){ue(this,"events",{})}emit(i,...e){var n;const t=this.events[i]||[];for(let a=0,r=t.length;a<r;a++)(n=t[a])==null||n.call(t,...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}}off(i,e){var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const Op=100/6,si={passive:!1};function os(i,e){return i===1?Op:i===2?e:1}var Bp=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){ue(this,"touchStart",{x:0,y:0});ue(this,"lastDelta",{x:0,y:0});ue(this,"window",{width:0,height:0});ue(this,"emitter",new Ys);ue(this,"onTouchStart",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});ue(this,"onTouchMove",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,a=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:a},this.emitter.emit("scroll",{deltaX:n,deltaY:a,event:i})});ue(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});ue(this,"onWheel",i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i;const a=os(n,this.window.width),r=os(n,this.window.height);e*=a,t*=r,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})});ue(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,si),this.element.addEventListener("touchstart",this.onTouchStart,si),this.element.addEventListener("touchmove",this.onTouchMove,si),this.element.addEventListener("touchend",this.onTouchEnd,si)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,si),this.element.removeEventListener("touchstart",this.onTouchStart,si),this.element.removeEventListener("touchmove",this.onTouchMove,si),this.element.removeEventListener("touchend",this.onTouchEnd,si)}};const ss=i=>Math.min(1,1.001-2**(-10*i));var zp=class{constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:a=!1,syncTouchLerp:r=.075,touchInertiaExponent:s=1.7,duration:o,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h=f==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:p,virtualScroll:d,overscroll:b=!0,autoRaf:S=!1,anchors:A=!1,autoToggle:P=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:Y=w,stopInertiaOnNavigate:M=!1,respectReducedMotion:y=!0}={}){ue(this,"_isScrolling",!1);ue(this,"_isStopped",!1);ue(this,"_isLocked",!1);ue(this,"_preventNextNativeScrollEvent",!1);ue(this,"_resetVelocityTimeout",null);ue(this,"_rafId",null);ue(this,"_isDraggingSelection",!1);ue(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));ue(this,"isTouching");ue(this,"isIos");ue(this,"time",0);ue(this,"userData",{});ue(this,"lastVelocity",0);ue(this,"velocity",0);ue(this,"direction",0);ue(this,"options");ue(this,"targetScroll");ue(this,"animatedScroll");ue(this,"animate",new Up);ue(this,"emitter",new Ys);ue(this,"dimensions");ue(this,"virtualScroll");ue(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});ue(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});ue(this,"onTransitionEnd",i=>{var e;(e=i.propertyName)!=null&&e.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});ue(this,"onClick",i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(a=>t.host===a.host&&t.pathname===a.pathname&&a.hash);if(n){const a=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,a);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});ue(this,"onPointerDown",i=>{i.button===1&&this.reset()});ue(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const a=n.type.includes("touch"),r=n.type.includes("wheel");if(a&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const s=e===0&&t===0;if(this.options.syncTouch&&a&&n.type==="touchstart"&&s&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(s||o)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(g=>{var _,p,d,b,S;return g instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(g))||((_=g.hasAttribute)==null?void 0:_.call(g,"data-lenis-prevent"))||u==="vertical"&&((p=g.hasAttribute)==null?void 0:p.call(g,"data-lenis-prevent-vertical"))||u==="horizontal"&&((d=g.hasAttribute)==null?void 0:d.call(g,"data-lenis-prevent-horizontal"))||a&&((b=g.hasAttribute)==null?void 0:b.call(g,"data-lenis-prevent-touch"))||r&&((S=g.hasAttribute)==null?void 0:S.call(g,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&a||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=a&&this.options.syncTouch,m=a&&n.type==="touchend";m&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...h?{lerp:m?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});ue(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});ue(this,"raf",i=>{const e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=rs,window.lenis||(window.lenis={}),window.lenis.version=rs,f==="horizontal"&&(window.lenis.horizontal=!0),a===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof o=="number"&&typeof l!="function"?l=ss:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:a,syncTouchLerp:r,touchInertiaExponent:s,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:m,wheelMultiplier:g,autoResize:_,prevent:p,virtualScroll:d,overscroll:b,autoRaf:S,anchors:A,autoToggle:P,allowNestedScroll:T,naiveDimensions:Y,stopInertiaOnNavigate:M,respectReducedMotion:y},this.dimensions=new Fp(i,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Bp(t,{touchMultiplier:m,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=i.targetTouches[0]??i.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const a=n[0],r=n[n.length-1],s=40,o=Math.hypot(t.clientX-a.left,t.clientY-a.top)<=s,l=Math.hypot(t.clientX-r.right,t.clientY-r.bottom)<=s;return o||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:a=!0,lerp:r=a?this.options.lerp:void 0,duration:s=a?this.options.duration:void 0,easing:o=a?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if(this.prefersReducedMotion&&(a?t=!0:(r=1,s=void 0,o=void 0)),(this.isStopped||this.isLocked)&&!u)return;let h=i,m=e;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let g=null;if(typeof h=="string"?(g=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),g||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof Element&&(g=h),g){if(this.options.wrapper!==window){const A=this.rootElement.getBoundingClientRect();m-=this.isHorizontal?A.left:A.top}const _=g.getBoundingClientRect(),p=getComputedStyle(g),d=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),b=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(b.scrollPaddingLeft):Number.parseFloat(b.scrollPaddingTop);h=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(d)?0:d)-(Number.isNaN(S)?0:S)}}if(typeof h=="number"){if(h+=m,this.options.infinite){if(a){this.targetScroll=this.animatedScroll=this.scroll;const g=h-this.animatedScroll;g>this.limit/2?h-=this.limit:g<-this.limit/2&&(h+=this.limit)}}else h=qs(0,h,this.limit);if(h===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}a||(this.targetScroll=h),typeof s=="number"&&typeof o!="function"?o=ss:typeof o=="function"&&typeof s!="number"&&(s=1),this.animate.fromTo(this.animatedScroll,h,{duration:s,easing:o,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),a&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){const n=Date.now();i._lenis||(i._lenis={});const a=i._lenis;let r,s,o,l,c,u,f,h,m,g;if(n-(a.time??0)>2e3){a.time=Date.now();const T=window.getComputedStyle(i);if(a.computedStyle=T,r=["auto","overlay","scroll"].includes(T.overflowX),s=["auto","overlay","scroll"].includes(T.overflowY),c=["auto"].includes(T.overscrollBehaviorX),u=["auto"].includes(T.overscrollBehaviorY),a.hasOverflowX=r,a.hasOverflowY=s,!(r||s))return!1;f=i.scrollWidth,h=i.scrollHeight,m=i.clientWidth,g=i.clientHeight,o=f>m,l=h>g,a.isScrollableX=o,a.isScrollableY=l,a.scrollWidth=f,a.scrollHeight=h,a.clientWidth=m,a.clientHeight=g,a.hasOverscrollBehaviorX=c,a.hasOverscrollBehaviorY=u}else o=a.isScrollableX,l=a.isScrollableY,r=a.hasOverflowX,s=a.hasOverflowY,f=a.scrollWidth,h=a.scrollHeight,m=a.clientWidth,g=a.clientHeight,c=a.hasOverscrollBehaviorX,u=a.hasOverscrollBehaviorY;if(!(r&&o||s&&l))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let p,d,b,S,A,P;if(_==="horizontal")p=Math.round(i.scrollLeft),d=f-m,b=e,S=r,A=o,P=c;else if(_==="vertical")p=Math.round(i.scrollTop),d=h-g,b=t,S=s,A=l,P=u;else return!1;return!P&&(p>=d||p<=0)?!0:(b>0?p<d:p>0)&&S&&A}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?Ip(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(const i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};const Ya={pt:{pageTitle:"KMY Prime | Ativos Imobiliários de Alto Padrão",navSegmentos:"Segmentos",navJornada:"Track Record",navCatalogo:"Catálogo",navDecoracao:"Decoração",navSobre:"Quem Somos",navContato:"Contato",heroBadge:"Planejamento Imobiliário & Ativos",heroTitleHtml:'Aquisição & Gestão de <span class="text-gold-gradient">Ativos de Alto Valor</span>',heroDesc:"Intermediação qualificada, sigilosa e estratégica em Galpões Logísticos, Prédios Corporativos, Hotéis, Pousadas, Hospitais, Lajes Corporativas, Lojas Comerciais, Lotes MCMV e Shoppings com atuação nacional e internacional.",heroSearchLabel:"Segmento de Interesse",heroSearchBtn:"Explorar Portfólio",heroOptTodos:"Todos os Ativos (18)",heroOptGalpoes:"Galpões Logísticos (4)",heroOptPredios:"Prédios Corporativos (4)",heroOptHoteis:"Hotéis & Resorts (2)",heroOptPousadas:"Pousadas (2)",heroOptHospitais:"Hospitais & Clínicas (1)",heroOptLajes:"Lajes Corporativas (2)",heroOptLojas:"Lojas & Varejo (1)",heroOptMcmv:"Aptos MCMV (1)",heroOptShopping:"Shoppings & Malls (1)",metricVal1:"Prime",metricLbl1:"Governança Sólida",metricVal2:"Global",metricLbl2:"Atuação Nacional e Internacional",metricVal3:"Executivo",metricLbl3:"Head de Novos Negócios",corpVideoBadge:"Apresentação Institucional",corpVideoTitle:"Vídeo Corporativo KMY Prime",corpVideoSub:"Conheça nossa estrutura, governança e atuação estratégica em ativos imobiliários de alto valor no Brasil e no exterior.",catBadge:"Especialidades & Portfólio",catTitle:"Segmentos de Atuação Especializada",catSub:"Soluções imobiliárias sob medida para investidores institucionais, redes hoteleiras e family offices.",assetSingle:"ativo disponível",assetPlural:"ativos disponíveis",scrubBadge1:"Fase 01 · Prospecção",scrubTitle1:"Curadoria Rigorosa & Off-Market",scrubText1:"Acesso a ativos estratégicos que não chegam ao mercado aberto. Mapeamento de oportunidades de alta rentabilidade com total sigilo comercial.",scrubBadge2:"Fase 02 · Due Diligence",scrubTitle2:"Auditoria Jurídica & Valoração",scrubText2:"Análise minuciosa de certidões, regularidade fundiária, laudos de engenharia, capacidade de cap rate e mitigação integral de riscos.",scrubBadge3:"Fase 03 · Estruturação",scrubTitle3:"Engenharia Financeira & Contratual",scrubText3:"Modelagem de contratos atípicos, arrendamentos comerciais de longo prazo, Built to Suit (BTS) e Sale & Leaseback (SLB).",scrubBadge4:"Fase 04 · Concretização",scrubTitle4:"Governança, Entrega & Sucesso",scrubText4:"Fechamento sob assessoria executiva especializada, assegurando segurança jurídica, satisfação e perenidade patrimonial a cada transação.",catalogBadge:"Catálogo Executivo",catalogTitle:"Ativos Imobiliários Disponíveis",catalogSub:"Consulte a ficha técnica de cada oportunidade e entre em contato direto pelo WhatsApp com o anúncio vinculado.",noAssetsFound:"Nenhum ativo encontrado nesta categoria no momento.",suitesLabel:"suítes",vagasLabel:"vagas",cardClassLabel:"Classificação",cardHeightLabel:"Pé-direito",cardFloorLabel:"Piso",cardDeliveryLabel:"Entrega",cardPartLabel:"Participação",btnDetail:"Ficha Técnica",waCardTitle:"Conversar no WhatsApp",modalCloseAria:"Fechar modal",modalInvestLabel:"Valor do Investimento",modalTotalArea:"Área Total:",modalBuiltArea:"Área Construída:",modalAbl:"Área Bruta Locável:",modalClass:"Classificação:",modalHeight:"Pé-direito:",modalFloor:"Capacidade do Piso:",modalDelivery:"Entrega Prevista:",modalPart:"Participação:",modalConfig:"Configuração:",modalSuites:"Suítes:",modalParking:"Vagas:",modalDescHeading:"Descrição do Empreendimento",modalHighlightsHeading:"Destaques & Diferenciais KMY",modalCeoRole:"Marta A. Soriano — Decoradora & CEO Novos Negócios",modalCeoSub:"Atendimento Executivo Exclusivo KMY Prime",modalWaBtn:"Solicitar Informações no WhatsApp",decorBadge:"Design & Sofisticação",decorTitle:"Decoração de Interiores KMY Prime",decorP1:"Além da compra e venda de ativos, a KMY Prime desenvolve projetos completos de arquitetura de interiores para hotéis, pousadas de charme, lajes executivas e residências de alto padrão em todo o Brasil e no exterior.",decorP2:"Do primeiro briefing à pós-entrega, coordenamos cada detalhe com rigor estético, fornecedores nobres e gestão técnica total do cronograma.",decorCta:"Agendar Briefing de Decoração",decorMethodTitle:"Metodologia em 7 Etapas",decorMethodSub:"Processo estruturado que garante previsibilidade, conformidade orçamentária e acabamento impecável.",aboutBadge:"História & Propósito",aboutTitle:"KMY Prime Planejamento Imobiliário",aboutP1Html:"A <strong>KMY PRIME PLANEJAMENTO IMOBILIÁRIO LTDA</strong> atua com excelência na estruturação, compra e venda de Ativos de alto valor no mercado imobiliário, locação estratégica e arrendamento comercial com presença nacional e internacional.",aboutP2:"Com governança corporativa de alto padrão, a KMY consolidou uma sólida rede de relacionamento que inclui proprietários de grandes ativos, grupos de hospitalidade, incorporadores e fundos imobiliários, assegurando transações ágeis, sigilosas e respaldadas juridicamente.",aboutRole:"Decoradora & CEO Novos Negócios",aboutCard1Title:"Atuação Nacional e Internacional",aboutCard1Text:"Estrutura ágil para negociações em capitais financeiras, polos litorâneos turísticos, eixos de agronegócio e mercados internacionais.",aboutCard2Title:"Especialização em Hospitalidade & Varejo",aboutCard2Text:"Expertise comprovada na avaliação, comercialização e arrendamento de Hotéis, Pousadas e Shoppings Centers.",aboutCard3Title:"Segurança & Confidencialidade",aboutCard3Text:"Termos de sigilo (NDA) e acompanhamento próximo em todas as fases da transação imobiliária.",contactBadge:"Atendimento Personalizado",contactTitle:"Inicie Sua Próxima Operação",contactDesc:"Deseja adquirir um ativo, colocar seu hotel/imóvel à venda com discrição, ou solicitar um projeto de interiores? Envie sua mensagem e receba retorno direto da nossa diretoria.",contactWaLabel:"WhatsApp Direto",contactEmailLabel:"E-mails Oficiais",contactPortalLabel:"Portal & Redes",formNameLabel:"Seu Nome / Razão Social *",formNamePlaceholder:"Ex: Roberto Silveira / Grupo Hotelier",formPhoneLabel:"WhatsApp com DDD *",formPhonePlaceholder:"Ex: (11) 99999-9999",formInterestLabel:"Principal Interesse *",formOptGalpoes:"Galpões Logísticos (Venda / Locação)",formOptPredios:"Prédios Corporativos (Venda / Locação)",formOpt1:"Comprar Ativo Imobiliário",formOpt2:"Vender Imóvel / Hotel (Off-Market)",formOpt3:"Arrendamento de Pousada ou Hotel",formOpt4:"Locação de Laje Corporativa ou Loja",formOpt5:"Investir em Lote MCMV",formOpt6:"Projeto de Decoração de Interiores",formOpt7:"Outro assunto",formMsgLabel:"Mensagem / Observações",formMsgPlaceholder:"Descreva brevemente sua demanda ou o código do imóvel de interesse...",formSubmitBtn:"Enviar via WhatsApp Oficial",footerBrandDescHtml:"KMY PRIME PLANEJAMENTO IMOBILIÁRIO LTDA<br>Intermediação de compra, venda, locação e arrendamento de Ativos Imobiliários com atuação nacional e internacional e Decoração de Interiores de alto luxo.",footerRole:"Decoradora & CEO Novos Negócios",footerColSegments:"Segmentos",footerSegGalpoes:"Galpões Logísticos",footerSegPredios:"Prédios Corporativos",footerSeg1:"Hotéis & Resorts",footerSeg2:"Pousadas",footerSeg3:"Hospitais & Clínicas",footerSeg4:"Lajes Corporativas",footerSeg5:"Lojas & Varejo",footerSeg6:"Aptos MCMV",footerSeg7:"Shoppings",footerColInst:"Institucional",footerInst1:"Quem Somos",footerInst2:"Track Record",footerInst3:"Decoração de Interiores",footerInst4:"Fale com a Diretoria",footerColContact:"Contato",footerCorpHeading:"INFORMAÇÕES CORPORATIVAS",footerRights:"© 2026 KMY PRIME PLANEJAMENTO IMOBILIÁRIO LTDA. Todos os direitos reservados.",footerDevBy:"Desenvolvido por"},en:{pageTitle:"KMY Prime | High-Value Real Estate Assets",navSegmentos:"Segments",navJornada:"Track Record",navCatalogo:"Portfolio",navDecoracao:"Interior Design",navSobre:"About Us",navContato:"Contact",heroBadge:"Real Estate Planning & Assets",heroTitleHtml:'Acquisition & Management of <span class="text-gold-gradient">High-Value Assets</span>',heroDesc:"Qualified, confidential, and strategic intermediation in Logistic Warehouses, Corporate Buildings, Hotels, Boutique Inns, Hospitals, Corporate Floors, Retail Stores, Residential Lots, and Shopping Malls with national and international reach.",heroSearchLabel:"Segment of Interest",heroSearchBtn:"Explore Portfolio",heroOptTodos:"All Assets (18)",heroOptGalpoes:"Logistic Warehouses (4)",heroOptPredios:"Corporate Buildings (4)",heroOptHoteis:"Hotels & Resorts (2)",heroOptPousadas:"Boutique Inns (2)",heroOptHospitais:"Hospitals & Clinics (1)",heroOptLajes:"Corporate Floors (2)",heroOptLojas:"Retail Stores (1)",heroOptMcmv:"Residential Lots (1)",heroOptShopping:"Shopping Malls (1)",metricVal1:"Prime",metricLbl1:"Solid Governance",metricVal2:"Global",metricLbl2:"National & International Reach",metricVal3:"Executive",metricLbl3:"Head of New Business",corpVideoBadge:"Corporate Presentation",corpVideoTitle:"KMY Prime Corporate Video",corpVideoSub:"Discover our structure, governance, and strategic operations in high-value real estate assets across Brazil and internationally.",catBadge:"Specialties & Portfolio",catTitle:"Specialized Market Segments",catSub:"Tailor-made real estate solutions for institutional investors, hotel chains, and family offices.",assetSingle:"available asset",assetPlural:"available assets",scrubBadge1:"Phase 01 · Sourcing",scrubTitle1:"Rigorous & Off-Market Curation",scrubText1:"Access to strategic assets that never reach the open market. Mapping high-yield opportunities under strict commercial confidentiality.",scrubBadge2:"Phase 02 · Due Diligence",scrubTitle2:"Legal Audit & Valuation",scrubText2:"Thorough analysis of certificates, land compliance, engineering reports, cap rate capacity, and comprehensive risk mitigation.",scrubBadge3:"Phase 03 · Structuring",scrubTitle3:"Financial & Contractual Engineering",scrubText3:"Modeling of atypical contracts, long-term commercial leases, Built to Suit (BTS), and Sale & Leaseback (SLB).",scrubBadge4:"Phase 04 · Closing",scrubTitle4:"Governance, Delivery & Success",scrubText4:"Closing under specialized executive advisory, ensuring legal security, satisfaction, and long-term asset preservation in every transaction.",catalogBadge:"Executive Portfolio",catalogTitle:"Available Real Estate Assets",catalogSub:"Review the technical fact sheet of each opportunity and contact us directly via WhatsApp with the linked listing.",noAssetsFound:"No assets found in this category at the moment.",suitesLabel:"suites",vagasLabel:"parking spaces",cardClassLabel:"Class",cardHeightLabel:"Clear Height",cardFloorLabel:"Floor Load",cardDeliveryLabel:"Delivery",cardPartLabel:"Ownership",btnDetail:"Fact Sheet",waCardTitle:"Chat on WhatsApp",modalCloseAria:"Close modal",modalInvestLabel:"Investment Value",modalTotalArea:"Total Area:",modalBuiltArea:"Built Area:",modalAbl:"Gross Leasable Area:",modalClass:"Classification:",modalHeight:"Clear Height:",modalFloor:"Floor Load Capacity:",modalDelivery:"Expected Delivery:",modalPart:"Ownership:",modalConfig:"Configuration:",modalSuites:"Suites:",modalParking:"Parking Spaces:",modalDescHeading:"Property Description",modalHighlightsHeading:"KMY Highlights & Features",modalCeoRole:"Marta A. Soriano — Interior Designer & CEO of New Business",modalCeoSub:"KMY Prime Exclusive Executive Advisory",modalWaBtn:"Request Information on WhatsApp",decorBadge:"Design & Sophistication",decorTitle:"KMY Prime Interior Design",decorP1:"Beyond asset acquisition and sales, KMY Prime develops full-scale interior architecture projects for hotels, boutique inns, executive floors, and luxury residences across Brazil and internationally.",decorP2:"From initial briefing to post-delivery, we coordinate every detail with aesthetic rigor, noble suppliers, and complete technical schedule management.",decorCta:"Schedule a Design Briefing",decorMethodTitle:"7-Step Methodology",decorMethodSub:"Structured process ensuring predictability, budget compliance, and flawless finishing.",aboutBadge:"History & Purpose",aboutTitle:"KMY Prime Real Estate Planning",aboutP1Html:"<strong>KMY PRIME PLANEJAMENTO IMOBILIÁRIO LTDA</strong> excels in structuring, buying, and selling high-value real estate assets, strategic leasing, and commercial operations with national and international presence.",aboutP2:"With top-tier corporate governance, KMY has built a solid relationship network including major asset owners, hospitality groups, developers, and real estate funds, ensuring agile, confidential, and legally backed transactions.",aboutRole:"Interior Designer & CEO of New Business",aboutCard1Title:"National & International Reach",aboutCard1Text:"Agile structure for negotiations in financial capitals, coastal tourist hubs, agribusiness corridors, and international markets.",aboutCard2Title:"Hospitality & Retail Expertise",aboutCard2Text:"Proven track record in valuation, brokerage, and commercial leasing of Hotels, Boutique Inns, and Shopping Centers.",aboutCard3Title:"Security & Confidentiality",aboutCard3Text:"Non-disclosure agreements (NDA) and dedicated executive oversight throughout every stage of the real estate transaction.",contactBadge:"Personalized Advisory",contactTitle:"Start Your Next Transaction",contactDesc:"Looking to acquire an asset, list your hotel or property confidentially, or request an interior design project? Send your message and receive direct feedback from our board.",contactWaLabel:"Direct WhatsApp",contactEmailLabel:"Official E-mails",contactPortalLabel:"Website & Social",formNameLabel:"Your Name / Company Name *",formNamePlaceholder:"E.g.: John Smith / Hotelier Group",formPhoneLabel:"WhatsApp / Phone Number *",formPhonePlaceholder:"E.g.: +55 (11) 99999-9999",formInterestLabel:"Primary Interest *",formOptGalpoes:"Logistic Warehouses (Sale / Lease)",formOptPredios:"Corporate Buildings (Sale / Lease)",formOpt1:"Acquire Real Estate Asset",formOpt2:"Sell Property / Hotel (Off-Market)",formOpt3:"Lease Boutique Inn or Hotel",formOpt4:"Lease Corporate Floor or Retail Store",formOpt5:"Invest in Residential Lot (MCMV)",formOpt6:"Interior Design Project",formOpt7:"Other Inquiry",formMsgLabel:"Message / Notes",formMsgPlaceholder:"Briefly describe your inquiry or the asset code of interest...",formSubmitBtn:"Send via Official WhatsApp",footerBrandDescHtml:"KMY PRIME PLANEJAMENTO IMOBILIÁRIO LTDA<br>Intermediation of purchase, sale, leasing, and management of High-Value Real Estate Assets nationally and internationally, plus Luxury Interior Design.",footerRole:"Interior Designer & CEO of New Business",footerColSegments:"Segments",footerSegGalpoes:"Logistic Warehouses",footerSegPredios:"Corporate Buildings",footerSeg1:"Hotels & Resorts",footerSeg2:"Boutique Inns",footerSeg3:"Hospitals & Clinics",footerSeg4:"Corporate Floors",footerSeg5:"Retail Stores",footerSeg6:"Residential Lots",footerSeg7:"Shopping Malls",footerColInst:"Corporate",footerInst1:"About Us",footerInst2:"Track Record",footerInst3:"Interior Design",footerInst4:"Speak with the Board",footerColContact:"Contact",footerCorpHeading:"CORPORATE INFORMATION",footerRights:"© 2026 KMY PRIME PLANEJAMENTO IMOBILIÁRIO LTDA. All rights reserved.",footerDevBy:"Developed by"}};let Mt="pt";try{const i=localStorage.getItem("kmy_lang");(i==="en"||i==="pt")&&(Mt=i)}catch{}function $s(){return Mt==="en"?dl:sl}function js(){return Mt==="en"?ul:ll}function Hp(){return Mt==="en"?hl:cl}function Ve(i){return Ya[Mt]&&Ya[Mt][i]||Ya.pt[i]||""}function vr(i=document){i.querySelectorAll("img").forEach(e=>{e.dataset.fallbackBound||(e.dataset.fallbackBound="1",e.addEventListener("error",function(){const n=e.getAttribute("src")||"";if(n.includes("assets/images/")&&!n.includes("public/assets/images/")){const a=n.split("assets/images/").pop();e.src=`./public/assets/images/${a}`}},{once:!0}))})}let ta=null;try{let i=function(e){ta.raf(e),requestAnimationFrame(i)};var Kp=i;ta=new zp({duration:1.2,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),smoothWheel:!0}),requestAnimationFrame(i)}catch(i){console.warn("Lenis smooth scroll fallback:",i)}function Ks(i){i&&(ta?ta.scrollTo(i,{offset:-60}):i.scrollIntoView({behavior:"smooth"}))}function Gp(){const i=document.getElementById("categories-container");if(!i)return;const e=js();i.innerHTML=e.map(t=>`
    <div class="category-card ${t.id===sa?"active":""}" data-cat-id="${t.id}">
      <div class="category-icon">
        <i class="icon-${t.icone}">✦</i>
      </div>
      <div class="category-title">${t.nome}</div>
      <div class="category-count">${t.total} ${t.total===1?Ve("assetSingle"):Ve("assetPlural")}</div>
    </div>
  `).join(""),i.querySelectorAll(".category-card").forEach(t=>{t.addEventListener("click",()=>{const n=t.getAttribute("data-cat-id");xr(n);const a=document.getElementById("catalogo");Ks(a)})})}function Vp(){const i=document.getElementById("catalog-filter-pills");if(!i)return;const e=js();i.innerHTML=e.map(t=>`
    <button class="filter-pill ${t.id===sa?"active":""}" data-filter="${t.id}">
      ${t.nome} (${t.total})
    </button>
  `).join(""),i.querySelectorAll(".filter-pill").forEach(t=>{t.addEventListener("click",()=>{const n=t.getAttribute("data-filter");xr(n)})})}let sa="todos";function xr(i){sa=i,document.querySelectorAll(".filter-pill").forEach(a=>{a.classList.toggle("active",a.getAttribute("data-filter")===i)}),document.querySelectorAll(".category-card").forEach(a=>{a.classList.toggle("active",a.getAttribute("data-cat-id")===i)});const e=document.getElementById("catalog-grid");if(!e)return;const t=Array.from(e.querySelectorAll(".property-card")),n=new Map;t.forEach(a=>{n.set(a,a.getBoundingClientRect())}),Zs(i),requestAnimationFrame(()=>{Array.from(e.querySelectorAll(".property-card")).forEach(r=>{const s=n.get(r);if(s){const o=r.getBoundingClientRect(),l=s.left-o.left,c=s.top-o.top;(l!==0||c!==0)&&(r.style.transform=`translate(${l}px, ${c}px)`,r.style.transition="none",requestAnimationFrame(()=>{r.style.transition="transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",r.style.transform=""}))}else r.style.opacity="0",r.style.transform="scale(0.92) translateY(20px)",requestAnimationFrame(()=>{r.style.transition="all 0.45s cubic-bezier(0.16, 1, 0.3, 1)",r.style.opacity="1",r.style.transform="scale(1) translateY(0)"})})})}function Js(i){const e=window.location.origin+window.location.pathname+"#imovel-"+i.id,t=Mt==="en"?`Hello, KMY Prime!
I am interested in the following portfolio asset:

🏷️ *Code:* ${i.id}
🏛️ *Asset:* ${i.titulo}
📂 *Category:* ${i.categoriaNome} (${i.finalidadeNome})
📍 *Location:* ${i.localizacao}
💰 *Value:* ${i.precoFormatado}

🔗 *Listing Link:* ${e}

I would like to schedule an executive presentation and receive the investment memorandum for this asset.`:`Olá, KMY Prime!
Tenho interesse no seguinte ativo do portfólio:

🏷️ *Código:* ${i.id}
🏛️ *Imóvel:* ${i.titulo}
📂 *Categoria:* ${i.categoriaNome} (${i.finalidadeNome})
📍 *Localização:* ${i.localizacao}
💰 *Valor:* ${i.precoFormatado}

🔗 *Link do Anúncio:* ${e}

Gostaria de agendar uma reunião de apresentação e receber o memorando executivo de investimento deste ativo.`;return`https://wa.me/${cs.telefoneWhatsApp}?text=${encodeURIComponent(t)}`}function Zs(i="todos"){const e=document.getElementById("catalog-grid");if(!e)return;const t=$s(),n=i==="todos"?t:t.filter(a=>a.categoria===i);if(n.length===0){e.innerHTML=`
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <p style="font-size: 1.2rem; color: var(--text-secondary);">${Ve("noAssetsFound")}</p>
      </div>
    `;return}e.innerHTML=n.map(a=>{const r=Js(a);return`
      <article class="property-card luxury-card" id="card-${a.id}" data-id="${a.id}">
        <div class="prop-img-box">
          <img src="${a.imagem}" alt="${a.titulo}" class="prop-img" loading="lazy" />
          <span class="prop-badge-status">${a.status}</span>
          <span class="prop-code-badge">${a.id}</span>
        </div>
        <div class="prop-body">
          <div class="prop-meta-top">
            <span class="prop-category-label">${a.categoriaNome}</span>
            <span class="prop-location">📍 ${a.cidade}/${a.uf}</span>
          </div>
          <h3 class="prop-title">${a.titulo}</h3>
          
          <div class="prop-features" style="flex-wrap: wrap;">
            <div class="feature-item">📐 <span>${a.areaConstruida||a.areaTotal}</span></div>
            ${a.classificacao?`<div class="feature-item">🏅 <span>${Ve("cardClassLabel")} ${a.classificacao}</span></div>`:""}
            ${a.peDireito?`<div class="feature-item">⬆️ <span>${Ve("cardHeightLabel")} ${a.peDireito}</span></div>`:""}
            ${a.capacidadePiso?`<div class="feature-item">🏗️ <span>${Ve("cardFloorLabel")} ${a.capacidadePiso}</span></div>`:""}
            ${a.entregaPrevista?`<div class="feature-item">📅 <span>${Ve("cardDeliveryLabel")} ${a.entregaPrevista}</span></div>`:""}
            ${a.participacao?`<div class="feature-item">📊 <span>${Ve("cardPartLabel")} ${a.participacao}</span></div>`:""}
            ${a.configuracao?`<div class="feature-item">🏢 <span>${a.configuracao}</span></div>`:""}
            ${a.suites?`<div class="feature-item">🛏️ <span>${a.suites} ${Ve("suitesLabel")}</span></div>`:""}
            ${a.vagas?`<div class="feature-item">🚗 <span>${a.vagas} ${Ve("vagasLabel")}</span></div>`:""}
          </div>

          <div class="prop-footer">
            <div class="prop-price-box">
              <span class="prop-price-label">${a.finalidadeNome}</span>
              <span class="prop-price">${a.precoFormatado}</span>
            </div>
            <div class="prop-actions">
              <button class="btn-detail open-modal-btn" data-id="${a.id}">
                ${Ve("btnDetail")}
              </button>
              <a href="${r}" target="_blank" rel="noopener noreferrer" class="btn-prop-wa" title="${Ve("waCardTitle")}">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </article>
    `}).join(""),vr(e),e.querySelectorAll(".open-modal-btn").forEach(a=>{a.addEventListener("click",()=>{const r=a.getAttribute("data-id");Sr(r)})})}let Ki=null,Yn=null,ia=null;function Sr(i){Ki=document.getElementById("property-modal-overlay"),Yn=document.getElementById("property-modal-container");const t=$s().find(r=>r.id===i);if(!t||!Ki||!Yn)return;ia=i;const n=Js(t);Yn.innerHTML=`
    <button class="modal-close-btn" id="modal-close-btn" aria-label="${Ve("modalCloseAria")}">✕</button>
    <img src="${t.imagem}" alt="${t.titulo}" class="modal-header-image" />
    <div class="modal-content-inner">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; margin-bottom: 20px;">
        <div>
          <div class="subtitle-badge">${t.id} · ${t.categoriaNome} · ${t.finalidadeNome}</div>
          <h2 style="font-size: 2.1rem; line-height: 1.25; margin-bottom: 8px;">${t.titulo}</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem;">📍 ${t.localizacao}</p>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">${Ve("modalInvestLabel")}</div>
          <div style="font-family: var(--font-serif); font-size: 2.2rem; font-weight: 700; color: var(--gold-700);">${t.precoFormatado}</div>
          ${t.precoInfo?`<div style="font-size: 0.82rem; color: var(--text-gold);">${t.precoInfo}</div>`:""}
        </div>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 20px; padding: 18px 0; border-top: 1px solid var(--border-light); border-bottom: 1px solid var(--border-light); margin-bottom: 24px; font-weight: 600;">
        ${t.abl?`<div>${Ve("modalAbl")} <span style="color: var(--gold-700);">${t.abl}</span></div>`:`<div>${Ve("modalTotalArea")} <span style="color: var(--gold-700);">${t.areaTotal}</span></div>`}
        ${t.classificacao?`<div>${Ve("modalClass")} <span style="color: var(--gold-700);">${t.classificacao}</span></div>`:t.abl?"":`<div>${Ve("modalBuiltArea")} <span style="color: var(--gold-700);">${t.areaConstruida}</span></div>`}
        ${t.peDireito?`<div>${Ve("modalHeight")} <span style="color: var(--gold-700);">${t.peDireito}</span></div>`:""}
        ${t.capacidadePiso?`<div>${Ve("modalFloor")} <span style="color: var(--gold-700);">${t.capacidadePiso}</span></div>`:""}
        ${t.entregaPrevista?`<div>${Ve("modalDelivery")} <span style="color: var(--gold-700);">${t.entregaPrevista}</span></div>`:""}
        ${t.participacao?`<div>${Ve("modalPart")} <span style="color: var(--gold-700);">${t.participacao}</span></div>`:""}
        ${t.configuracao?`<div>${Ve("modalConfig")} <span style="color: var(--gold-700);">${t.configuracao}</span></div>`:""}
        ${t.suites?`<div>${Ve("modalSuites")} <span style="color: var(--gold-700);">${t.suites}</span></div>`:""}
        ${t.vagas?`<div>${Ve("modalParking")} <span style="color: var(--gold-700);">${t.vagas}</span></div>`:""}
      </div>

      <h4 style="font-size: 1.15rem; margin-bottom: 12px;">${Ve("modalDescHeading")}</h4>
      <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 28px;">${t.descricao}</p>

      <h4 style="font-size: 1.15rem; margin-bottom: 16px;">${Ve("modalHighlightsHeading")}</h4>
      <div class="modal-highlights-grid">
        ${t.destaques.map(r=>`
          <div class="highlight-box">
            <i>✦</i>
            <span style="font-size: 0.88rem; font-weight: 600;">${r}</span>
          </div>
        `).join("")}
      </div>

      <div style="margin-top: 36px; padding-top: 24px; border-top: 1px solid var(--border-light); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
        <div>
          <div style="font-weight: 700; color: var(--text-primary);">${Ve("modalCeoRole")}</div>
          <div style="font-size: 0.85rem; color: var(--text-muted);">${Ve("modalCeoSub")}</div>
        </div>
        <a href="${n}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="padding: 16px 36px; font-size: 1rem;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          ${Ve("modalWaBtn")}
        </a>
      </div>
    </div>
  `,vr(Yn),Ki.classList.add("active"),document.body.style.overflow="hidden";const a=document.getElementById("modal-close-btn");a&&(a.onclick=Mr)}function Mr(){Ki=document.getElementById("property-modal-overlay"),Ki&&(Ki.classList.remove("active"),document.body.style.overflow="",ia=null)}window.addEventListener("keydown",i=>{i.key==="Escape"&&Mr()});function kp(){const i=window.location.hash;if(i&&i.startsWith("#imovel-")){const e=i.replace("#imovel-","");Sr(e)}}function Wp(){const i=document.getElementById("decor-steps-container");if(!i)return;const e=Hp();i.innerHTML=e.map(t=>`
    <div class="step-card">
      <div class="step-number">${t.num}</div>
      <h3 class="step-title">${t.titulo}</h3>
      <p class="step-desc">${t.desc}</p>
    </div>
  `).join("")}function Xp(){const i=document.getElementById("lead-contact-form");i&&i.addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("lead-nome").value.trim(),n=document.getElementById("lead-telefone").value.trim(),a=document.getElementById("lead-interesse").value,r=document.getElementById("lead-mensagem").value.trim(),s=Mt==="en"?`Hello, KMY Prime!
I filled out the inquiry form on the website regarding real estate assets:

👤 *Name:* ${t}
📱 *Phone/WhatsApp:* ${n}
💼 *Primary Interest:* ${a}
📝 *Message:* ${r||"I would like to explore the available portfolio for my investment profile."}

Looking forward to scheduling a conversation.`:`Olá, KMY Prime!
Preenchi o formulário de captação no site com interesse em ativos:

👤 *Nome:* ${t}
📱 *Telefone/WhatsApp:* ${n}
💼 *Interesse Principal:* ${a}
📝 *Mensagem:* ${r||"Gostaria de conhecer o portfólio disponível para meu perfil de investimento."}

Aguardo contato para agendamento.`,o=`https://wa.me/${cs.telefoneWhatsApp}?text=${encodeURIComponent(s)}`;window.open(o,"_blank")})}function qp(){const i=document.getElementById("hero-search-btn"),e=document.getElementById("hero-search-category");!i||!e||i.addEventListener("click",()=>{const t=e.value;xr(t);const n=document.getElementById("catalogo");Ks(n)})}function Yp(){const i=document.querySelector(".site-header");i&&window.addEventListener("scroll",()=>{window.scrollY>40?i.classList.add("scrolled"):i.classList.remove("scrolled")},{passive:!0})}function sr(i){Mt=i==="en"?"en":"pt";try{localStorage.setItem("kmy_lang",Mt)}catch{}document.documentElement.lang=Mt==="en"?"en":"pt-BR",document.title=Ve("pageTitle"),document.querySelectorAll(".lang-switch-btn .lang-opt").forEach(e=>{e.classList.toggle("active",e.getAttribute("data-lang")===Mt)}),document.querySelectorAll("[data-i18n]").forEach(e=>{const t=e.getAttribute("data-i18n"),n=Ve(t);n&&(e.textContent=n)}),document.querySelectorAll("[data-i18n-html]").forEach(e=>{const t=e.getAttribute("data-i18n-html"),n=Ve(t);n&&(e.innerHTML=n)}),document.querySelectorAll("[data-i18n-placeholder]").forEach(e=>{const t=e.getAttribute("data-i18n-placeholder"),n=Ve(t);n&&e.setAttribute("placeholder",n)}),Gp(),Vp(),Zs(sa),Wp(),ia&&Sr(ia)}function $p(){const i=document.getElementById("lang-switch-btn");i&&i.addEventListener("click",e=>{const t=e.target.closest(".lang-opt");if(t){const n=t.getAttribute("data-lang");if(n&&n!==Mt){sr(n);return}}sr(Mt==="pt"?"en":"pt")})}function ls(){if(window.__KMY_INITIALIZED__)return;window.__KMY_INITIALIZED__=!0,vr(document);const i=document.getElementById("property-modal-overlay");i&&i.addEventListener("click",t=>{t.target===i&&Mr()}),$p(),sr(Mt),Xp(),qp(),Yp(),kp();const e=document.querySelector(".hero-bg-video");e&&(e.muted=!0,e.addEventListener("timeupdate",()=>{e.currentTime>=7.1&&(e.currentTime=0,e.play().catch(()=>{}))}),e.play().catch(()=>{})),Lp("scrubbing-canvas")}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",ls):ls();
