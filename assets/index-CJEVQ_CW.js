var rl=Object.defineProperty;var sl=(i,e,t)=>e in i?rl(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ue=(i,e,t)=>sl(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();const ll=typeof document<"u"&&!!document.querySelector('link[href*="src/styles/main.css"]')&&!document.querySelector('script[src*="@vite"]'),He=ll?"./public/":"./",cl=[{id:"KMY-011",titulo:"Aratu — Condomínio Logístico Triple A",subtitulo:"Primeiro galpão logístico do Brasil com certificação EDGE concedida pelo IFC",categoria:"galpoes",categoriaNome:"Galpões Logísticos",finalidade:"venda",finalidadeNome:"Catálogo Executivo",cidade:"Simões Filho",uf:"BA",localizacao:"Via Centro, CIA Sul — Simões Filho, Bahia - BA (Região Metropolitana de Salvador)",preco:0,precoFormatado:"Sob Consulta",precoInfo:"Classificação AAA · Pé-direito 12 m · Capacidade do Piso 6 T/m²",areaTotal:"102.530 m²",areaConstruida:"102.530 m² ABL",abl:"102.530 m²",classificacao:"AAA",peDireito:"12 m",capacidadePiso:"6 T/m²",suites:0,vagas:0,destaques:["Área Bruta Locável (ABL): 102.530 m² composta por dois galpões modulares","Classificação AAA · Pé-direito de 12 m · Capacidade do Piso de 6 T/m²","Primeiro galpão logístico do Brasil a receber a certificação EDGE para empreendimentos verdes, concedida pelo IFC","Infraestrutura completa com restaurante, refeitório, auditório e salas de reunião","Localizado em Simões Filho (Via Centro, CIA Sul), com acesso direto às principais rodovias da região e distante apenas 20 km do centro de Salvador"],descricao:"Adquirido em junho de 2021, o condomínio logístico é composto por dois galpões modulares e possui mais de 100 mil m² de ABL (102.530 m²). Possui restaurante, refeitório, auditório e salas de reunião. Localizado em Simões Filho (Via Centro, CIA Sul), na região metropolitana de Salvador, o ativo possui acesso direto às principais rodovias da região e distância de apenas 20 km do centro da cidade de Salvador. O ativo Aratu é o primeiro galpão logístico do Brasil a receber a certificação EDGE para empreendimentos verdes, concedida pelo IFC.",imagem:`${He}assets/images/imovel_11_aratu.webp`,status:"Catálogo Executivo · AAA",tags:["ABL 102.530 m²","Classificação AAA","Pé-direito 12 m","Piso 6 T/m²","Certificação EDGE (IFC)"]},{id:"KMY-012",titulo:"Cajamar — Condomínio Logístico Triple A",subtitulo:"Galpão com certificação LEED GOLD inserido no maior polo logístico do país",categoria:"galpoes",categoriaNome:"Galpões Logísticos",finalidade:"venda",finalidadeNome:"Catálogo Executivo",cidade:"Cajamar",uf:"SP",localizacao:"Rodovia Anhanguera, km 43 — Cajamar, São Paulo - SP (Raio 30 km de São Paulo)",preco:0,precoFormatado:"Sob Consulta",precoInfo:"Classificação AAA · Pé-direito 12 m · Capacidade do Piso 6 T/m²",areaTotal:"35.690 m²",areaConstruida:"35.690 m² ABL",abl:"35.690 m²",classificacao:"AAA",peDireito:"12 m",capacidadePiso:"6 T/m²",suites:0,vagas:0,destaques:["Área Bruta Locável (ABL): 35.690 m², podendo ser dividido em 4 diferentes módulos","Classificação AAA · Pé-direito de 12 m · Capacidade do Piso de 6 T/m²","Galpão com certificação internacional LEED GOLD inserido em condomínio logístico","Infraestrutura com restaurante, refeitório, auditório e salas de reunião","Localizado no raio de 30 km de SP, no maior polo logístico do país, em frente à Rodovia Anhanguera (km 43) com acesso exclusivo"],descricao:"Adquirido pelo Fundo em agosto de 2021, é um galpão com certificação LEED GOLD que está inserido em um condomínio logístico com mais dois outros galpões. Possui 35 mil m² de ABL (35.690 m²), podendo ser dividido em 4 diferentes módulos. Além disso, tem restaurante, refeitório, auditório e salas de reunião. Localizado no raio de 30 km de SP, está localizado no maior polo logístico do país, frente a Rodovia Anhanguera (km 43) e acesso exclusivo em frente ao empreendimento.",imagem:`${He}assets/images/imovel_12_cajamar.webp`,status:"Catálogo Executivo · AAA",tags:["ABL 35.690 m²","Classificação AAA","Pé-direito 12 m","Piso 6 T/m²","LEED GOLD"]},{id:"KMY-013",titulo:"DCC — Condomínio Logístico Cajamar",subtitulo:"Complexo logístico com três blocos de galpões e usina de energia solar de 2,5 MW",categoria:"galpoes",categoriaNome:"Galpões Logísticos",finalidade:"venda",finalidadeNome:"Catálogo Executivo",cidade:"Cajamar",uf:"SP",localizacao:"Rodovia Anhanguera, Km 31.775 — Cidade de Cajamar, São Paulo - SP (Grande São Paulo)",preco:0,precoFormatado:"Sob Consulta",precoInfo:"Classificação AA · Pé-direito 12 m · Capacidade do Piso 6 T/m²",areaTotal:"102.708 m²",areaConstruida:"102.708 m² ABL",abl:"102.708 m²",classificacao:"AA",peDireito:"12 m",capacidadePiso:"6 T/m²",suites:0,vagas:0,destaques:["Área Locável Total (ABL): 102.708 m² compostos por três blocos de galpões","Classificação AA · Pé-direito de 12 m · Capacidade do Piso de 6 T/m²","Usina de energia solar própria com capacidade de geração de 2,5 MW","Rede de sprinklers, segurança 24h, sistema de CFTV e portaria blindada e armada","Auditório, salas de reunião, área de recreação, bicicletário e acesso direto à Rodovia Anhanguera (Km 31.775), próximo à Bandeirantes e Rodoanel"],descricao:"Adquirido pelo fundo em 2023, o ativo é composto por três blocos de galpões e totaliza mais de 102 mil m² de área bruta locável (102.708 m²). O condomínio, que está localizado na Grande São Paulo (município de Cajamar), possui acesso direto à Rodovia Anhanguera e está próximo a outros importantes eixos como a Rodovia Bandeirantes e ao trecho norte do Rodoanel em conclusão. Um dos diferenciais deste conjunto logístico é a usina de energia solar, com capacidade de geração de 2,5 MW. Possui rede de sprinklers, segurança 24h, sistema de CFTV, portaria blindada e armada, auditório, salas de reunião, área de recreação, bicicletário e usina solar com 2,5 MW de capacidade de geração.",imagem:`${He}assets/images/imovel_13_dcc.webp`,status:"Catálogo Executivo · AA",tags:["ABL 102.708 m²","Classificação AA","Pé-direito 12 m","Piso 6 T/m²","Usina Solar 2,5 MW"]},{id:"KMY-014",titulo:"HGLG Betim BTS – Meli",subtitulo:"Ativo Triple A Built to Suit produzido sob medida para grande empresa de e-commerce",categoria:"galpoes",categoriaNome:"Galpões Logísticos",finalidade:"venda",finalidadeNome:"Catálogo Executivo",cidade:"Betim",uf:"MG",localizacao:"Rua Sucupira S/N, Quadra 24, 25 e 27 — Betim, Minas Gerais - MG",preco:0,precoFormatado:"Sob Consulta",precoInfo:"Classificação AAA · Pé-direito 12 m · Capacidade do Piso 6 T/m²",areaTotal:"95.730 m²",areaConstruida:"95.730 m² ABL",abl:"95.730 m²",classificacao:"AAA",peDireito:"12 m",capacidadePiso:"6 T/m²",suites:0,vagas:0,destaques:["Área Locável Total (ABL): 95.730 m² em operação Built to Suit (BTS)","Classificação AAA · Pé-direito de 12 m · Capacidade do Piso de 6 T/m²","Built to Suit produzido sob medida para uma grande empresa do setor de e-commerce","Acesso direto à Rodovia Costa e Silva e próximo à Rodovia Fernão Dias","Localizado em Betim (MG), conectando estrategicamente Contagem e Belo Horizonte"],descricao:"Adquirido em 2022, o ativo está localizado na cidade de Betim (MG) e é vizinho de outro ativo do fundo, o HGLG Betim. É classificado como AAA e foi um built to suit produzido sob medida para uma grande empresa do setor de e-commerce. Assim como o galpão vizinho, possui acesso direto à Rodovia Costa e Silva e está próximo à Fernão Dias, que o conecta a Contagem e Belo Horizonte.",imagem:`${He}assets/images/imovel_14_betim.webp`,status:"Catálogo Executivo · AAA",tags:["ABL 95.730 m²","Classificação AAA","Pé-direito 12 m","Piso 6 T/m²","Built to Suit (BTS)"]},{id:"KMY-015",titulo:"Quantum — Edifício Corporativo Itaim Bibi",subtitulo:"Eficiência com inovação: estrutura cúbica, lajes lineares de 950 m² e varandas 360°",categoria:"predios",categoriaNome:"Prédios Corporativos",finalidade:"venda",finalidadeNome:"Catálogo Executivo",cidade:"São Paulo",uf:"SP",localizacao:"R. Joaquim Floriano, 973 - Itaim Bibi, São Paulo - SP, Brasil",preco:0,precoFormatado:"Sob Consulta",precoInfo:"Entrega Prevista 2026 · Participação 100% · 9 andares + rooftop",areaTotal:"10.230 m²",areaConstruida:"10.230 m² Locável",abl:"10.230 m²",entregaPrevista:"2026",participacao:"100%",configuracao:"9 andares mais rooftop. Lajes de 950 m²",suites:0,vagas:0,destaques:["Área Locável: 10.230 m² · Participação: 100% · Entrega Prevista: 2026","Configuração: 9 andares mais rooftop com lajes lineares de 950 m²","No 6º andar, onde há a união entre os blocos, conta com laje diferenciada e varandas 360°","Estrutura cúbica que oferece máxima flexibilidade de ocupação e layout","Localizado na esquina da Rua Joaquim Floriano com a Clodomiro Amazonas, a poucos passos da Avenida Faria Lima (Itaim Bibi)"],descricao:"Une eficiência com inovação, propondo novas formas de ocupação. No 6º andar, onde há a união entre os blocos, contamos com uma laje diferenciada, com varandas 360°. Com estrutura cúbica e lajes lineares de 950 m², oferece máxima flexibilidade de layout. O edifício se localiza na esquina da Rua Joaquim Floriano com a Clodomiro Amazonas (R. Joaquim Floriano, 973 - Itaim Bibi), a poucos passos da Avenida Faria Lima, uma das regiões mais movimentadas de São Paulo.",imagem:`${He}assets/images/imovel_15_quantum.png`,status:"Catálogo Executivo · 2026",tags:["Área Locável 10.230 m²","Entrega 2026","9 Andares + Rooftop","Lajes de 950 m²","Itaim Bibi"]},{id:"KMY-016",titulo:"Citadel — Edifício Corporativo Paulista",subtitulo:"Retrofit completo em conceito open space a 50 metros da Avenida Paulista",categoria:"predios",categoriaNome:"Prédios Corporativos",finalidade:"venda",finalidadeNome:"Catálogo Executivo",cidade:"São Paulo",uf:"SP",localizacao:"R. Bela Cintra, 986 - Consolação, São Paulo - SP, 01415-002, Brasil",preco:0,precoFormatado:"Sob Consulta",precoInfo:"15 pavimentos · Lajes de 852 m² · Retrofit Completo",areaTotal:"12.780 m²",areaConstruida:"12.780 m² Locável",abl:"12.780 m²",configuracao:"15 pavimentos. Lajes 852 m²",suites:0,vagas:0,destaques:["Área Locável: 12.780 m² · Configuração: 15 pavimentos com lajes de 852 m²","Retrofit com lajes em conceito open space, novos banheiros, elevadores e ar-condicionado totalmente renovados","Lobby ampliado e modernizado e entrada com área de drop-off e paisagismo","Fachada com renovação completa e nova pele de vidro","Localizado na Rua Bela Cintra, 986, a 50 metros da Avenida Paulista e ao lado do metrô"],descricao:"O retrofit contempla lajes em conceito open space com novos banheiros, além de elevadores e sistema de ar-condicionado totalmente renovados. O lobby será ampliado e modernizado, a entrada contará com uma área de drop-off com paisagismo, e a fachada passará por renovação completa com nova pele de vidro. Na Rua Bela Cintra (nº 986 - Consolação), a 50 metros da Avenida Paulista e ao lado do metrô, o Citadel está em uma das regiões corporativas mais dinâmicas de São Paulo.",imagem:`${He}assets/images/imovel_16_citadel.jpg`,status:"Catálogo Executivo · Retrofit",tags:["Área Locável 12.780 m²","15 Pavimentos","Lajes 852 m²","Open Space","Região Paulista"]},{id:"KMY-017",titulo:"Pinheiros One — Complexo Corporativo",subtitulo:"Estrutura de serviços e utilidades completa com vista panorâmica e acesso direto à Marginal Pinheiros",categoria:"predios",categoriaNome:"Prédios Corporativos",finalidade:"venda",finalidadeNome:"Catálogo Executivo",cidade:"São Paulo",uf:"SP",localizacao:"R. Lemos Monteiro, 120 - Butantã, São Paulo - SP, 05501-050, Brasil",preco:0,precoFormatado:"Sob Consulta",precoInfo:"Participação 50% · 18 andares · Lajes de até 1.710 m²",areaTotal:"33.358 m²",areaConstruida:"33.358 m² Locável",abl:"33.358 m²",participacao:"50%",configuracao:"18 andares. Lajes de até 1.710 m²",suites:0,vagas:0,destaques:["Área Locável: 33.358 m² · Participação: 50% · Configuração: 18 andares com lajes de até 1.710 m²","18 andares de escritórios com lajes amplas, vista panorâmica e dois andares de terraço preparado para eventos","Estrutura completa de serviços: restaurante, café, padaria, auditório, cabeleireiro e foodtrucks","Bicicletários com vestiários e estação lava-rápido","Acesso direto à Marginal Pinheiros e Avenida Francisco Morato (R. Lemos Monteiro, 120 - Butantã)"],descricao:"São 18 andares de escritórios, com lajes de 1.600 m² a 1.710 m² e vista panorâmica, dois andares de terraço (preparado para eventos), restaurante, café, padaria, auditório, cabeleireiro, bicicletários com vestiários, estação lava-rápido, foodtrucks e mais. Com acesso direto à Marginal Pinheiros e Avenida Francisco Morato (R. Lemos Monteiro, 120 - Butantã), está localizado em uma região estratégica que vem se consolidando como um polo corporativo.",imagem:`${He}assets/images/imovel_17_pinheiros_one.jpg`,status:"Catálogo Executivo · Triple A",tags:["Área Locável 33.358 m²","Participação 50%","18 Andares","Lajes até 1.710 m²","Marginal Pinheiros"]},{id:"KMY-018",titulo:"Thera Corporate — Edifício Corporativo Berrini",subtitulo:"Espaços que promovem conforto e equilíbrio no eixo Luís Carlos Berrini e Bandeirantes",categoria:"predios",categoriaNome:"Prédios Corporativos",finalidade:"venda",finalidadeNome:"Catálogo Executivo",cidade:"São Paulo",uf:"SP",localizacao:"Av. Engenheiro Luís Carlos Berrini, 105 - Brooklin, São Paulo - SP, 04571-010, Brasil",preco:0,precoFormatado:"Sob Consulta",precoInfo:"Participação 66% · 15 andares · Lajes a partir de 1.032 m²",areaTotal:"21.047 m²",areaConstruida:"21.047 m² Locável",abl:"21.047 m²",participacao:"66%",configuracao:"15 andares. Lajes com unidades a partir de 1.032 m²",suites:0,vagas:0,destaques:["Área Locável: 21.047 m² · Participação: 66% · Configuração: 15 andares com lajes a partir de 1.032 m²","Espaços que promovem conforto e equilíbrio com área externa, restaurante e café interno","Auditório, bicicletário para condôminos e visitantes, foodtrucks rotativos e serviços exclusivos","Acesso direto às avenidas Luís Carlos Berrini e Bandeirantes (Brooklin)","Localizado a poucos minutos do Aeroporto de Congonhas e cercado de opções de comércio e serviço"],descricao:"O Thera possui área externa com restaurante, café interno, auditório, bicicletário para condôminos e visitantes, foodtrucks rotativos e mais serviços exclusivos em espaços que promovem conforto e equilíbrio. Conta com 21.047 m² de área locável distribuídos em 15 andares (lajes com unidades a partir de 1.032 m²). Possui acesso direto às avenidas Luís Carlos Berrini (nº 105 - Brooklin) e Bandeirantes, além de estar a poucos minutos do aeroporto de Congonhas e cercado de opções de comércio e serviço.",imagem:`${He}assets/images/imovel_18_thera.png`,status:"Catálogo Executivo · Triple A",tags:["Área Locável 21.047 m²","Participação 66%","15 Andares","Lajes 1.032+ m²","Eixo Berrini"]},{id:"KMY-001",titulo:"Hotel Boutique Frente ao Mar — 48 Suítes Luxo",subtitulo:"Operação hoteleira consolidada com alta rentabilidade",categoria:"hoteis",categoriaNome:"Hotéis & Resorts",finalidade:"venda",finalidadeNome:"Venda de Ativo",cidade:"São Sebastião",uf:"SP",localizacao:"Praia de Juquehy, Litoral Norte — SP",preco:385e5,precoFormatado:"R$ 38.500.000",areaTotal:"6.200 m²",areaConstruida:"3.800 m²",suites:48,vagas:60,destaques:["Piscina de borda infinita debruçada sobre o mar","Restaurante gastronômico contemporâneo e bar de praia","Spa completo com saunas seca e úmida","Taxa média de ocupação anual: 78%","EBITDA anual auditado e governança estruturada"],descricao:"Excepcional oportunidade de investimento em hospitalidade de alto luxo no litoral mais valorizado de São Paulo. O complexo hoteleiro conta com 48 suítes decoradas em padrão internacional, gastronomia de autor e infraestrutura completa para casamentos corporativos e turismo premium de alto poder aquisitivo.",imagem:`${He}assets/images/imovel_1_hotel.jpg`,status:"Exclusividade KMY Prime",tags:["Pé na areia","Boutique","Alta Rentabilidade","Spa"]},{id:"KMY-002",titulo:"Resort Eco-Luxo Frente Mar — 110 Bangalôs Privativos",subtitulo:"Complexo paradisíaco integrado à natureza com heliponto",categoria:"hoteis",categoriaNome:"Hotéis & Resorts",finalidade:"venda",finalidadeNome:"Venda ou Arrendamento",cidade:"Porto Seguro / Trancoso",uf:"BA",localizacao:"Costa do Descobrimento — Trancoso / BA",preco:95e6,precoFormatado:"R$ 95.000.000",areaTotal:"85.000 m²",areaConstruida:"14.200 m²",suites:110,vagas:150,destaques:["Faixa de 400m de praia semi-exclusiva","Parque aquático com piscinas orgânicas interconectadas","Heliponto homologado para pousos diurnos e noturnos","Centro de eventos e convenções para até 500 pessoas","Arrendamento disponível sob análise de grupo hoteleiro"],descricao:"Um dos ativos hoteleiros mais icônicos do Brasil. Estrutura eco-friendly com certificação verde, autossuficiência hídrica parcial, spa de renome internacional e ampla cartela de clientes fidelizados de altíssimo padrão nacional e internacional.",imagem:`${He}assets/images/imovel_2_resort.jpg`,status:"Ativo Triple A",tags:["Heliponto","Trancoso","Eco-Luxo","Arrendamento Disponível"]},{id:"KMY-003",titulo:"Pousada Alpina Exclusiva — 18 Chalés Suíços com Lareira",subtitulo:"Charme da serra com bosque de araucárias nativas",categoria:"pousadas",categoriaNome:"Pousadas",finalidade:"arrendamento",finalidadeNome:"Arrendamento Comercial",cidade:"Campos do Jordão",uf:"SP",localizacao:"Alto do Capivari — Campos do Jordão / SP",preco:65e3,precoFormatado:"R$ 65.000 / mês",precoInfo:"Contrato de arrendamento de 10 anos",areaTotal:"12.000 m²",areaConstruida:"1.950 m²",suites:18,vagas:25,destaques:["Chalés térmicos com piso aquecido e banheira de hidromassagem","Adega subterrânea climatizada para 1.500 garrafas","Restaurante de fondue premiado e bistrô bistrô de montanha","Totalmente mobiliada e operando a pleno vapor","Reputação 9.8 nas principais plataformas de reserva"],descricao:"Arrendamento de pousada boutique tradicional no ponto mais nobre de Campos do Jordão. Empreendimento 100% equipado, com alta margem líquida durante as temporadas de inverno e turismo de casais ao longo do ano.",imagem:`${He}assets/images/imovel_3_pousada.jpg`,status:"Oportunidade de Arrendamento",tags:["Serra da Mantiqueira","Lareira & Hidro","Adega Climatizada"]},{id:"KMY-004",titulo:"Pousada Colonial Histórica — Centro de Paraty",subtitulo:"Patrimônio arquitetônico restaurado com spa e piscina de pedra",categoria:"pousadas",categoriaNome:"Pousadas",finalidade:"venda",finalidadeNome:"Venda de Ativo",cidade:"Paraty",uf:"RJ",localizacao:"Centro Histórico Tombado — Paraty / RJ",preco:22e6,precoFormatado:"R$ 22.000.000",areaTotal:"2.400 m²",areaConstruida:"1.750 m²",suites:22,vagas:0,destaques:["Casarão secular restaurado com rigor histórico e conforto moderno","Pátio interno ajardinado com piscina de pedra natural iluminada","Acervo de mobiliário de época e obras de arte integradas","Fluxo constante de turistas qualificados da FLIP e festivais","Possibilidade de expansão com imóvel anexo"],descricao:"Verdadeira jóia no centro histórico de Paraty. Combina o charme barroco e a elegância colonial com suítes climatizadas de padrão internacional. Perfeito para investidores que prezam por patrimônios culturais de valor perene.",imagem:`${He}assets/images/imovel_4_pousada.jpg`,status:"Patrimônio Tombado",tags:["Centro Histórico","Jóia Colonial","Alta Visibilidade"]},{id:"KMY-019",titulo:"Hospital Madre de Dio (HMD) — 304 Leitos",subtitulo:"Complexo hospitalar moderno com 16.000 m² e capacidade operacional de até 304 leitos às margens da BR-277",categoria:"hospitais",categoriaNome:"Hospitais & Clínicas",finalidade:"venda",finalidadeNome:"Catálogo Executivo",cidade:"São Miguel do Iguaçu",uf:"PR",localizacao:"Às margens da BR-277 — São Miguel do Iguaçu, Paraná - PR",preco:0,precoFormatado:"Sob Consulta",precoInfo:"Capacidade de até 304 Leitos · 16.000 m² · Pronto-Socorro 24h & UTI",areaTotal:"16.000 m²",areaConstruida:"16.000 m²",leitos:304,configuracao:"Até 304 Leitos · 22 Consultórios · Pronto-Socorro 24h",suites:0,vagas:0,destaques:["Capacidade operacional de até 304 leitos em infraestrutura moderna de 16.000 m²","Centro Médico e Odontológico com 22 consultórios, Pronto-Socorro 24 horas, salas cirúrgicas e UTI pediátrica","Laboratório próprio de análises clínicas e parque de diagnóstico por imagem (Ressonância Magnética e Raio-X)","Abrangência regional: atende pacientes particulares, convênios e SUS no Oeste/Sudoeste do PR, SC, MS e tríplice fronteira (Paraguai e Argentina)","Administrado pelo Instituto Madre de Dio (IMADI), com localização estratégica às margens da BR-277 em São Miguel do Iguaçu (PR)"],descricao:"O Hospital Madre de Dio (HMD) é um complexo hospitalar moderno localizado em São Miguel do Iguaçu (PR), às margens da BR-277. Construído em uma área de 16.000 m², possui infraestrutura completa com capacidade operacional para até 304 leitos. Conta com Centro Médico e Odontológico (22 consultórios), pronto-socorro 24 horas, salas cirúrgicas, UTI pediátrica, laboratório próprio de análises clínicas e parque de diagnóstico por imagem (incluindo ressonância magnética e raio-X). Administrado pelo Instituto Madre de Dio (IMADI), atende pacientes particulares, convênios e usuários do SUS de dezenas de municípios do Oeste e Sudoeste do Paraná, além de Santa Catarina, Mato Grosso do Sul e áreas de fronteira (Paraguai e Argentina).",imagem:`${He}assets/images/imovel_19_hospital_madre_de_dio.jpg`,status:"Catálogo Executivo · 304 Leitos",tags:["304 Leitos","16.000 m²","Pronto-Socorro 24h","Centro Cirúrgico & UTI","BR-277 / PR"]},{id:"KMY-005",titulo:"Hospital Geral e Centro Cirúrgico Especializado",subtitulo:"Edificação hospitalar Triple A com 12 salas cirúrgicas",categoria:"hospitais",categoriaNome:"Hospitais & Centros Médicos",finalidade:"venda",finalidadeNome:"Venda de Ativo Hospitalar",cidade:"Campinas / Valinhos",uf:"SP",localizacao:"Eixo Rodoviário D. Pedro / Anhanguera — SP",preco:145e6,precoFormatado:"R$ 145.000.000",areaTotal:"18.500 m²",areaConstruida:"16.800 m²",suites:90,vagas:220,destaques:["12 salas cirúrgicas inteligentes com fluxo laminar","90 leitos de internação sendo 24 de UTI geral e coronariana","Central de imagem completa (Ressonância, Tomografia, Hemodinâmica)","Heliponto para transporte aeromédico homologado","Normas ANVISA RDC-50 100% atendidas"],descricao:"Estrutura hospitalar moderna, concebida para atender operadoras de saúde, redes de medicina diagnóstica ou fundos imobiliários com contratos atípicos (SLB - Sale & Leaseback). Pronto para operação imediata.",imagem:`${He}assets/images/imovel_5_hospital.jpg`,status:"Ativo Institucional de Saúde",tags:["Centro Cirúrgico","UTI Completa","ANVISA RDC-50","Sale & Leaseback"]},{id:"KMY-006",titulo:"Laje Corporativa Triple A — 1.250 m² na Av. Faria Lima",subtitulo:"Andar inteiro de altíssimo padrão no epicentro financeiro",categoria:"lajes",categoriaNome:"Lajes Corporativas",finalidade:"venda",finalidadeNome:"Venda ou Locação",cidade:"São Paulo",uf:"SP",localizacao:"Av. Brigadeiro Faria Lima, Itaim Bibi — São Paulo / SP",preco:52e6,precoFormatado:"R$ 52.000.000",precoInfo:"Opção de locação: R$ 380/m²",areaTotal:"1.250 m² privativos",areaConstruida:"1.250 m²",suites:0,vagas:38,destaques:["Certificação LEED Platinum e Well Health-Safety","Pé-direito livre de 3,10m com piso elevado de alta capacidade","Fachada unitizada com vidros de controle solar térmico e acústico","Gerador com atendimento para 100% da área privativa","Elevadores inteligentes com chamada antecipada"],descricao:"Espaço corporativo de prestígio no endereço mais valorizado da América Latina. Configuração em vão livre propícia para sedes de bancos de investimento, private equity, fintechs e multinacionais que exigem máxima representatividade institucional.",imagem:`${He}assets/images/imovel_6_laje.jpg`,status:"Triple A — Faria Lima",tags:["LEED Platinum","Faria Lima","Vão Livre","Edifício Ícone"]},{id:"KMY-007",titulo:"Andar Corporativo Panorâmico — 720 m² em Alphaville",subtitulo:"Espaço pronto com vista privilegiada para o verde",categoria:"lajes",categoriaNome:"Lajes Corporativas",finalidade:"locacao",finalidadeNome:"Locação Corporativa",cidade:"Barueri / Alphaville",uf:"SP",localizacao:"Alameda Rio Negro, Alphaville — Barueri / SP",preco:68e3,precoFormatado:"R$ 68.000 / mês",precoInfo:"Condomínio e IPTU sob consulta",areaTotal:"720 m²",areaConstruida:"720 m²",suites:0,vagas:24,destaques:["Totalmente cabeado com ar-condicionado VRF inverter","4 salas de reunião privativas em vidro acústico e auditório no térreo","Copa executiva e lounge de descanso mobiliados","Próximo ao Shopping Iguatemi Alphaville e centro comercial","Fácil acesso pela Rodovia Castello Branco"],descricao:"Laje corporativa pronta para ocupação imediata (plug & play). Design moderno com forro acústico amadeirado, piso vinílico de alta densidade e vista panorâmica para o horizonte e a área verde de Alphaville.",imagem:`${He}assets/images/imovel_7_laje.jpg`,status:"Pronto para Ocupação (Plug & Play)",tags:["Alphaville","Plug & Play","VRF Inverter","Vista Panorâmica"]},{id:"KMY-008",titulo:"Flagship Store de Luxo — 380 m² na Rua Oscar Freire",subtitulo:"Ponto comercial de esquina mais cobiçado dos Jardins",categoria:"lojas",categoriaNome:"Lojas & Pontos Comerciais",finalidade:"venda",finalidadeNome:"Venda do Ponto / Imóvel",cidade:"São Paulo",uf:"SP",localizacao:"Rua Oscar Freire, Jardins — São Paulo / SP",preco:28e6,precoFormatado:"R$ 28.000.000",precoInfo:"Disponível também para locação: R$ 130.000/mês",areaTotal:"380 m²",areaConstruida:"380 m² em 2 pavimentos",suites:0,vagas:4,destaques:["Testada com 14 metros de vitrine em vidro temperado e moldura dourada","Piso em mármore travertino romano e iluminação cênica integrada","Fluxo de pedestres de altíssimo ticket médio dos Jardins","Subsolo preparado para estoque seguro e sala de atendimento VIP","Imóvel desocupado para implantação de marca premium"],descricao:"Endereço lendário no quadrilátero do luxo paulistano. Perfeito para joalherias, grifes de alta costura, galerias de arte ou marcas globais que buscam fixar presença na rua mais charmosa do país.",imagem:`${He}assets/images/imovel_8_loja.jpg`,status:"Ponto Comercial Ícone",tags:["Oscar Freire","Jardins","Vitrine 14m","Travertino Romano"]},{id:"KMY-009",titulo:"Residencial Parque das Acácias — Lote com 48 Aptos MCMV",subtitulo:"Portfólio de unidades residenciais prontas para locação",categoria:"mcmv",categoriaNome:"Aptos MCMV (Investidor)",finalidade:"venda",finalidadeNome:"Venda em Bloco (Investidor)",cidade:"São Paulo",uf:"SP",localizacao:"São Mateus / Itaquera, Zona Leste — São Paulo / SP",preco:108e5,precoFormatado:"R$ 10.800.000",precoInfo:"Equivalente a R$ 225.000 por unidade",areaTotal:"2.800 m² privativos totais",areaConstruida:"3.400 m²",suites:0,vagas:48,destaques:["48 apartamentos de 2 dormitórios (48 m² a 52 m²) com varanda","Condomínio com portaria 24h, quadra, playground e salão gourmet","Yield estimado de locação: 0,68% a.m. livre de vacância","Localizado a 800m de futura estação de monotrilho","Documentação e habite-se 100% aprovados na CEF"],descricao:"Excelente oportunidade para fundos de renda residencial, incorporadores ou investidores patrimoniais. Aquisição em bloco de unidades prontas dentro do programa Minha Casa Minha Vida (Faixa 2/3), garantindo liquidez e retorno locativo constante.",imagem:`${He}assets/images/imovel_9_mcmv.jpg`,status:"Venda em Lote para Investidor",tags:["MCMV Faixa 3","Alta Liquidez","Renda Locativa","Habite-se CEF"]},{id:"KMY-010",titulo:"Shopping Center — Lojas e Cinema",subtitulo:"Ativo de varejo consolidado com 32.500 m² de ABL, 180 lojas e 5 âncoras",categoria:"shopping",categoriaNome:"Shoppings & Malls",finalidade:"venda",finalidadeNome:"Venda de Ativo de Varejo",cidade:"São Paulo",uf:"SP",localizacao:"São Paulo — SP",preco:39e7,precoFormatado:"R$ 390.000.000,00",precoInfo:"ABL 32.500 m² · 180 Lojas · 5 Âncoras · 1.900 Vagas",areaTotal:"32.500 m² ABL",areaConstruida:"32.500 m² ABL",abl:"32.500 m²",configuracao:"180 Lojas · 5 Âncoras",suites:0,vagas:1900,destaques:["Área Bruta Locável (ABL): 32.500 m²","Mix comercial consolidado com 180 lojas e 5 lojas âncoras","Complexo de cinema moderno e ampla praça de alimentação e serviços","Estacionamento estruturado com 1.900 vagas","Localização estratégica em São Paulo (SP), com contratos de locação de garantia sólida"],descricao:"Ativo institucional de renda de primeira linha localizado em São Paulo (SP). Shopping Center consolidado com 32.500 m² de Área Bruta Locável (ABL), composto por 180 lojas, 5 lojas âncoras, complexo de cinema e amplo estacionamento para 1.900 vagas, proporcionando distribuição de proventos estável e elevado fluxo de visitantes.",imagem:`${He}assets/images/imovel_10_shopping.jpg`,status:"Ativo Institucional de Renda",tags:["ABL 32.500 m²","180 Lojas","5 Âncoras","1.900 Vagas","São Paulo"]}],dl=[{id:"todos",nome:"Todos os Ativos",icone:"layout-grid",total:19},{id:"galpoes",nome:"Galpões Logísticos",icone:"warehouse",total:4},{id:"predios",nome:"Prédios Corporativos",icone:"building",total:4},{id:"hoteis",nome:"Hotéis & Resorts",icone:"hotel",total:2},{id:"pousadas",nome:"Pousadas",icone:"palmtree",total:2},{id:"hospitais",nome:"Hospitais & Clínicas",icone:"stethoscope",total:2},{id:"lajes",nome:"Lajes Corporativas",icone:"building-2",total:2},{id:"lojas",nome:"Lojas & Varejo",icone:"store",total:1},{id:"mcmv",nome:"Aptos MCMV",icone:"home",total:1},{id:"shopping",nome:"Shoppings & Malls",icone:"shopping-bag",total:1}],ul=[{num:"01",titulo:"Briefing do Projeto",desc:"Alinhamento aprofundado dos desejos, rotina, estilo de vida e metas de investimento do cliente."},{num:"02",titulo:"Estudo Conceitual",desc:"Criação dos primeiros croquis, moodboard de sensações, paleta cromática e layout espacial."},{num:"03",titulo:"Anteprojeto & Executivo",desc:"Plantas de demolição/construção, elétrica, iluminação cênica, gesso, hidráulica e marcenaria detalhada."},{num:"04",titulo:"Orçamento & Memorial",desc:"Planilha orçamentária rigorosa, especificação técnica de revestimentos, mármores e louças premium."},{num:"05",titulo:"Acompanhamento da Obra",desc:"Supervisão técnica contínua no canteiro, assegurando conformidade de cronograma e acabamentos."},{num:"06",titulo:"Produção & Montagem",desc:"Curadoria de arte, escolha de mobiliário assinado, tapetes, cortinas, iluminação e adornos exclusivos."},{num:"07",titulo:"Pós-Entrega & Garantia",desc:"Checklist final de entrega das chaves em clima de celebração com suporte técnico pós-ocupação."}],us={telefoneWhatsApp:"5511941978333"},co=[{id:"KMY-011",titulo:"Aratu — Triple A Logistics Park",subtitulo:"First logistics warehouse in Brazil awarded EDGE green certification by IFC",categoria:"galpoes",categoriaNome:"Logistic Warehouses",finalidade:"venda",finalidadeNome:"Executive Portfolio",cidade:"Simões Filho",uf:"BA",localizacao:"Via Centro, CIA Sul — Simões Filho, Bahia - BA (Greater Salvador Metropolitan Area)",preco:0,precoFormatado:"Upon Request",precoInfo:"AAA Rating · 12 m Clear Height · 6 T/m² Floor Load",areaTotal:"102,530 m²",areaConstruida:"102,530 m² GLA",abl:"102,530 m²",classificacao:"AAA",peDireito:"12 m",capacidadePiso:"6 T/m²",suites:0,vagas:0,destaques:["Gross Leasable Area (GLA): 102,530 m² across two modular warehouses","AAA Classification · 12 m Clear Ceiling Height · 6 T/m² Floor Load Capacity","First logistics warehouse in Brazil to receive EDGE green building certification granted by IFC","Full corporate infrastructure including restaurant, cafeteria, auditorium, and meeting rooms","Located in Simões Filho (Via Centro, CIA Sul) with direct highway access and only 20 km from downtown Salvador"],descricao:"Acquired in June 2021, this logistics park comprises two modular warehouses with over 100,000 m² of GLA (102,530 m²). It features a restaurant, cafeteria, auditorium, and meeting rooms. Located in Simões Filho (Via Centro, CIA Sul) in the Greater Salvador Metropolitan Area, the asset offers direct access to major regional highways and is just 20 km from downtown Salvador. Aratu is the first logistics warehouse in Brazil to receive EDGE green building certification from the IFC.",imagem:`${He}assets/images/imovel_11_aratu.webp`,status:"Executive Portfolio · AAA",tags:["GLA 102,530 m²","AAA Rating","12 m Height","6 T/m² Floor","EDGE Certified (IFC)"]},{id:"KMY-012",titulo:"Cajamar — Triple A Logistics Park",subtitulo:"LEED GOLD certified warehouse located in Brazil's premier logistics hub",categoria:"galpoes",categoriaNome:"Logistic Warehouses",finalidade:"venda",finalidadeNome:"Executive Portfolio",cidade:"Cajamar",uf:"SP",localizacao:"Rodovia Anhanguera, km 43 — Cajamar, São Paulo - SP (Within 30 km of São Paulo)",preco:0,precoFormatado:"Upon Request",precoInfo:"AAA Rating · 12 m Clear Height · 6 T/m² Floor Load",areaTotal:"35,690 m²",areaConstruida:"35,690 m² GLA",abl:"35,690 m²",classificacao:"AAA",peDireito:"12 m",capacidadePiso:"6 T/m²",suites:0,vagas:0,destaques:["Gross Leasable Area (GLA): 35,690 m², divisible into up to 4 modules","AAA Classification · 12 m Clear Ceiling Height · 6 T/m² Floor Load Capacity","LEED GOLD certified warehouse within a prime logistics park","Full corporate infrastructure with restaurant, cafeteria, auditorium, and meeting rooms","Located within the 30 km radius of São Paulo (Rodovia Anhanguera, km 43), in the country's largest logistics hub with exclusive access"],descricao:"Acquired in August 2021, this LEED GOLD certified warehouse is part of a prime logistics park alongside two other warehouses. It features over 35,000 m² of GLA (35,690 m²) divisible into 4 modules, complete with restaurant, cafeteria, auditorium, and meeting rooms. Situated within the 30 km radius of São Paulo in the country's largest logistics hub, facing the Anhanguera Highway (km 43) with dedicated access directly in front of the property.",imagem:`${He}assets/images/imovel_12_cajamar.webp`,status:"Executive Portfolio · AAA",tags:["GLA 35,690 m²","AAA Rating","12 m Height","6 T/m² Floor","LEED GOLD"]},{id:"KMY-013",titulo:"DCC — Cajamar Logistics Park",subtitulo:"Three-block logistics complex featuring a 2.5 MW solar power plant",categoria:"galpoes",categoriaNome:"Logistic Warehouses",finalidade:"venda",finalidadeNome:"Executive Portfolio",cidade:"Cajamar",uf:"SP",localizacao:"Rodovia Anhanguera, Km 31.775 — Cajamar, São Paulo - SP (Greater São Paulo)",preco:0,precoFormatado:"Upon Request",precoInfo:"AA Rating · 12 m Clear Height · 6 T/m² Floor Load",areaTotal:"102,708 m²",areaConstruida:"102,708 m² GLA",abl:"102,708 m²",classificacao:"AA",peDireito:"12 m",capacidadePiso:"6 T/m²",suites:0,vagas:0,destaques:["Total Leasable Area (GLA): 102,708 m² across three warehouse blocks","AA Classification · 12 m Clear Ceiling Height · 6 T/m² Floor Load Capacity","On-site solar power plant with 2.5 MW generation capacity","Sprinkler network, 24/7 security, CCTV monitoring, and armored/armed gatehouse","Auditorium, meeting rooms, recreation area, bike rack, and direct access to Anhanguera Highway (Km 31.775), near Bandeirantes Highway and Rodoanel"],descricao:"Acquired in 2023, the asset comprises three warehouse blocks totaling over 102,000 m² of gross leasable area (102,708 m²). Located in Greater São Paulo (Cajamar), the complex offers direct access to the Anhanguera Highway and proximity to major logistics corridors including the Bandeirantes Highway and the northern section of the Rodoanel ring road. A key highlight is its on-site solar power plant with 2.5 MW generation capacity, alongside full sprinkler coverage, 24/7 security, CCTV, armored gatehouse, auditorium, meeting rooms, recreation area, and bike storage.",imagem:`${He}assets/images/imovel_13_dcc.webp`,status:"Executive Portfolio · AA",tags:["GLA 102,708 m²","AA Rating","12 m Height","6 T/m² Floor","2.5 MW Solar Plant"]},{id:"KMY-014",titulo:"HGLG Betim BTS – Meli",subtitulo:"Triple A Built to Suit logistics asset custom-built for a leading e-commerce company",categoria:"galpoes",categoriaNome:"Logistic Warehouses",finalidade:"venda",finalidadeNome:"Executive Portfolio",cidade:"Betim",uf:"MG",localizacao:"Rua Sucupira S/N, Quadra 24, 25 e 27 — Betim, Minas Gerais - MG",preco:0,precoFormatado:"Upon Request",precoInfo:"AAA Rating · 12 m Clear Height · 6 T/m² Floor Load",areaTotal:"95,730 m²",areaConstruida:"95,730 m² GLA",abl:"95,730 m²",classificacao:"AAA",peDireito:"12 m",capacidadePiso:"6 T/m²",suites:0,vagas:0,destaques:["Total Leasable Area (GLA): 95,730 m² in a Built to Suit (BTS) operation","AAA Classification · 12 m Clear Ceiling Height · 6 T/m² Floor Load Capacity","Custom-built (Built to Suit) for a major e-commerce leader","Direct access to Costa e Silva Highway and close proximity to Fernão Dias Highway","Strategically located in Betim (MG), connecting Contagem and Belo Horizonte"],descricao:"Acquired in 2022, this asset is located in Betim (MG) adjacent to the fund's HGLG Betim property. Rated AAA, it was developed as a custom Built to Suit (BTS) project for a major e-commerce company. Like its neighboring warehouse, it offers direct access to the Costa e Silva Highway and is close to the Fernão Dias Highway, connecting Contagem and Belo Horizonte.",imagem:`${He}assets/images/imovel_14_betim.webp`,status:"Executive Portfolio · AAA",tags:["GLA 95,730 m²","AAA Rating","12 m Height","6 T/m² Floor","Built to Suit (BTS)"]},{id:"KMY-015",titulo:"Quantum — Itaim Bibi Corporate Building",subtitulo:"Efficiency meets innovation: cubic structure, 950 m² linear floor plates, and 360° terraces",categoria:"predios",categoriaNome:"Corporate Buildings",finalidade:"venda",finalidadeNome:"Executive Portfolio",cidade:"São Paulo",uf:"SP",localizacao:"R. Joaquim Floriano, 973 - Itaim Bibi, São Paulo - SP, Brazil",preco:0,precoFormatado:"Upon Request",precoInfo:"Expected Delivery 2026 · 100% Ownership · 9 Floors + Rooftop",areaTotal:"10,230 m²",areaConstruida:"10,230 m² Leasable",abl:"10,230 m²",entregaPrevista:"2026",participacao:"100%",configuracao:"9 floors plus rooftop. 950 m² floor plates",suites:0,vagas:0,destaques:["Leasable Area: 10,230 m² · Ownership: 100% · Expected Delivery: 2026","Configuration: 9 floors plus rooftop with 950 m² linear floor plates","Distinctive 6th-floor connecting slab featuring 360° wraparound terraces","Cubic architectural structure offering maximum layout flexibility","Located at the corner of Rua Joaquim Floriano and Clodomiro Amazonas, steps from Faria Lima Ave. (Itaim Bibi)"],descricao:"Combining efficiency with innovation to propose new ways of occupancy. On the 6th floor, where the blocks connect, a distinctive floor plate offers 360° wraparound terraces. With a cubic structure and 950 m² linear floor plates, it provides maximum layout flexibility. Located at the corner of Rua Joaquim Floriano and Clodomiro Amazonas (R. Joaquim Floriano, 973 - Itaim Bibi), just steps from Faria Lima Avenue in one of São Paulo's most vibrant districts.",imagem:`${He}assets/images/imovel_15_quantum.png`,status:"Executive Portfolio · 2026",tags:["Leasable 10,230 m²","Delivery 2026","9 Floors + Rooftop","950 m² Floors","Itaim Bibi"]},{id:"KMY-016",titulo:"Citadel — Paulista Corporate Building",subtitulo:"Full open-space retrofit located 50 meters from Paulista Avenue",categoria:"predios",categoriaNome:"Corporate Buildings",finalidade:"venda",finalidadeNome:"Executive Portfolio",cidade:"São Paulo",uf:"SP",localizacao:"R. Bela Cintra, 986 - Consolação, São Paulo - SP, 01415-002, Brazil",preco:0,precoFormatado:"Upon Request",precoInfo:"15 Floors · 852 m² Floor Plates · Full Retrofit",areaTotal:"12,780 m²",areaConstruida:"12,780 m² Leasable",abl:"12,780 m²",configuracao:"15 floors. 852 m² floor plates",suites:0,vagas:0,destaques:["Leasable Area: 12,780 m² · Configuration: 15 floors with 852 m² floor plates","Full retrofit featuring open-space floor plates, new restrooms, and fully upgraded elevators and HVAC systems","Expanded and modernized lobby with landscaped drop-off entrance","Complete facade renovation with a new glass curtain wall","Located on Rua Bela Cintra, 986, just 50 meters from Paulista Avenue and next to the subway station"],descricao:"The retrofit features open-space floor plates with new restrooms, alongside fully upgraded elevators and air-conditioning systems. The lobby will be expanded and modernized, the entrance will include a landscaped drop-off area, and the facade will undergo a complete renovation with a new glass curtain wall. Situated on Rua Bela Cintra (No. 986 - Consolação), 50 meters from Paulista Avenue and right next to the subway, Citadel stands in one of São Paulo's most dynamic corporate districts.",imagem:`${He}assets/images/imovel_16_citadel.jpg`,status:"Executive Portfolio · Retrofit",tags:["Leasable 12,780 m²","15 Floors","852 m² Floors","Open Space","Paulista District"]},{id:"KMY-017",titulo:"Pinheiros One — Corporate Complex",subtitulo:"Complete amenities and utility infrastructure with panoramic views and direct access to Marginal Pinheiros",categoria:"predios",categoriaNome:"Corporate Buildings",finalidade:"venda",finalidadeNome:"Executive Portfolio",cidade:"São Paulo",uf:"SP",localizacao:"R. Lemos Monteiro, 120 - Butantã, São Paulo - SP, 05501-050, Brazil",preco:0,precoFormatado:"Upon Request",precoInfo:"50% Ownership · 18 Floors · Floor Plates up to 1,710 m²",areaTotal:"33,358 m²",areaConstruida:"33,358 m² Leasable",abl:"33,358 m²",participacao:"50%",configuracao:"18 floors. Floor plates up to 1,710 m²",suites:0,vagas:0,destaques:["Leasable Area: 33,358 m² · Ownership: 50% · Configuration: 18 floors with floor plates up to 1,710 m²","18 office floors featuring panoramic views and a two-level event-ready terrace","Complete service infrastructure: restaurant, café, bakery, auditorium, hair salon, and food trucks","Bike racks with locker rooms and car wash station","Direct access to Marginal Pinheiros and Francisco Morato Ave. (R. Lemos Monteiro, 120 - Butantã)"],descricao:"Featuring 18 office floors with 1,600 m² to 1,710 m² floor plates and panoramic views, two terrace levels (event-ready), restaurant, café, bakery, auditorium, hair salon, bike racks with locker rooms, car wash station, food trucks, and more. With direct access to Marginal Pinheiros and Francisco Morato Avenue (R. Lemos Monteiro, 120 - Butantã), it sits in a strategic district rapidly consolidating as a major corporate hub.",imagem:`${He}assets/images/imovel_17_pinheiros_one.jpg`,status:"Executive Portfolio · Triple A",tags:["Leasable 33,358 m²","50% Ownership","18 Floors","Up to 1,710 m² Floors","Marginal Pinheiros"]},{id:"KMY-018",titulo:"Thera Corporate — Berrini Corporate Building",subtitulo:"Spaces designed for comfort and balance along the Luís Carlos Berrini and Bandeirantes corridor",categoria:"predios",categoriaNome:"Corporate Buildings",finalidade:"venda",finalidadeNome:"Executive Portfolio",cidade:"São Paulo",uf:"SP",localizacao:"Av. Engenheiro Luís Carlos Berrini, 105 - Brooklin, São Paulo - SP, 04571-010, Brazil",preco:0,precoFormatado:"Upon Request",precoInfo:"66% Ownership · 15 Floors · Units starting at 1,032 m²",areaTotal:"21,047 m²",areaConstruida:"21,047 m² Leasable",abl:"21,047 m²",participacao:"66%",configuracao:"15 floors. Floor plates with units starting at 1,032 m²",suites:0,vagas:0,destaques:["Leasable Area: 21,047 m² · Ownership: 66% · Configuration: 15 floors with units starting at 1,032 m²","Spaces promoting comfort and balance featuring an outdoor area with restaurant and indoor café","Auditorium, bike racks for tenants and visitors, rotating food trucks, and exclusive services","Direct access to Luís Carlos Berrini and Bandeirantes Avenues (Brooklin)","Minutes from Congonhas Airport and surrounded by premier retail and service amenities"],descricao:"Thera features an outdoor plaza with restaurant, indoor café, auditorium, bike racks for tenants and visitors, rotating food trucks, and exclusive services in spaces designed for comfort and balance. It offers 21,047 m² of leasable area across 15 floors (with units starting at 1,032 m²). With direct access to Luís Carlos Berrini (No. 105 - Brooklin) and Bandeirantes Avenues, it is just minutes from Congonhas Airport and surrounded by retail and service options.",imagem:`${He}assets/images/imovel_18_thera.png`,status:"Executive Portfolio · Triple A",tags:["Leasable 21,047 m²","66% Ownership","15 Floors","1,032+ m² Units","Berrini Corridor"]},{id:"KMY-001",titulo:"Oceanfront Boutique Hotel — 48 Luxury Suites",subtitulo:"Established hotel operation with high profitability",categoria:"hoteis",categoriaNome:"Hotels & Resorts",finalidade:"venda",finalidadeNome:"Asset Sale",cidade:"São Sebastião",uf:"SP",localizacao:"Juquehy Beach, North Coast — SP, Brazil",preco:385e5,precoFormatado:"R$ 38,500,000",areaTotal:"6,200 m²",areaConstruida:"3,800 m²",suites:48,vagas:60,destaques:["Infinity pool overlooking the ocean","Contemporary fine dining restaurant and beach bar","Full-service spa with dry and steam saunas","Average annual occupancy rate: 78%","Audited annual EBITDA and structured corporate governance"],descricao:"Exceptional luxury hospitality investment opportunity on the most prestigious coastline of São Paulo. The hotel complex features 48 suites designed to international standards, signature gastronomy, and full infrastructure for corporate destination events and high-net-worth tourism.",imagem:`${He}assets/images/imovel_1_hotel.jpg`,status:"KMY Prime Exclusive",tags:["Beachfront","Boutique","High Yield","Spa"]},{id:"KMY-002",titulo:"Oceanfront Eco-Luxury Resort — 110 Private Bungalows",subtitulo:"Paradise complex integrated into nature with private helipad",categoria:"hoteis",categoriaNome:"Hotels & Resorts",finalidade:"venda",finalidadeNome:"Sale or Commercial Lease",cidade:"Porto Seguro / Trancoso",uf:"BA",localizacao:"Discovery Coast — Trancoso / BA, Brazil",preco:95e6,precoFormatado:"R$ 95,000,000",areaTotal:"85,000 m²",areaConstruida:"14,200 m²",suites:110,vagas:150,destaques:["400m stretch of semi-private beach","Water park with interconnected organic pools","Certified helipad for day and night landings","Convention and events center for up to 500 guests","Commercial lease available subject to hotel group approval"],descricao:"One of Brazil's most iconic hospitality assets. Eco-friendly structure with green certification, partial water self-sufficiency, internationally renowned spa, and an established clientele of ultra-high-net-worth domestic and international guests.",imagem:`${He}assets/images/imovel_2_resort.jpg`,status:"Triple A Asset",tags:["Helipad","Trancoso","Eco-Luxury","Lease Available"]},{id:"KMY-003",titulo:"Exclusive Alpine Boutique Inn — 18 Swiss Chalets with Fireplace",subtitulo:"Mountain charm surrounded by native Araucaria forest",categoria:"pousadas",categoriaNome:"Boutique Inns",finalidade:"arrendamento",finalidadeNome:"Commercial Lease",cidade:"Campos do Jordão",uf:"SP",localizacao:"Alto do Capivari — Campos do Jordão / SP, Brazil",preco:65e3,precoFormatado:"R$ 65,000 / month",precoInfo:"10-year commercial lease agreement",areaTotal:"12,000 m²",areaConstruida:"1,950 m²",suites:18,vagas:25,destaques:["Thermal chalets with heated floors and whirlpool tubs","Climate-controlled underground wine cellar for 1,500 bottles","Award-winning fondue restaurant and mountain bistro","Fully furnished and operating at full capacity","9.8 guest rating across major booking platforms"],descricao:"Commercial lease of a traditional boutique inn in the prime district of Campos do Jordão. 100% equipped turnkey operation with high net margins during winter peak seasons and year-round romantic tourism.",imagem:`${He}assets/images/imovel_3_pousada.jpg`,status:"Lease Opportunity",tags:["Mantiqueira Mountains","Fireplace & Spa","Wine Cellar"]},{id:"KMY-004",titulo:"Historic Colonial Boutique Inn — Downtown Paraty",subtitulo:"Restored architectural heritage with spa and natural stone pool",categoria:"pousadas",categoriaNome:"Boutique Inns",finalidade:"venda",finalidadeNome:"Asset Sale",cidade:"Paraty",uf:"RJ",localizacao:"Historic Landmark Center — Paraty / RJ, Brazil",preco:22e6,precoFormatado:"R$ 22,000,000",areaTotal:"2,400 m²",areaConstruida:"1,750 m²",suites:22,vagas:0,destaques:["Centuries-old mansion restored with historical rigor and modern comfort","Landscaped inner courtyard with illuminated natural stone pool","Collection of period furniture and integrated fine artworks","Steady stream of international tourists from FLIP and cultural festivals","Expansion potential with adjacent property"],descricao:"A true gem in the UNESCO historic center of Paraty. Combines Baroque charm and colonial elegance with air-conditioned international-standard suites. Ideal for investors seeking enduring cultural heritage assets.",imagem:`${He}assets/images/imovel_4_pousada.jpg`,status:"Heritage Asset",tags:["Historic Center","Colonial Gem","High Visibility"]},{id:"KMY-019",titulo:"Hospital Madre de Dio (HMD) — 304 Beds",subtitulo:"Modern 16,000 m² hospital complex with operational capacity for up to 304 beds along Highway BR-277",categoria:"hospitais",categoriaNome:"Hospitals & Clinics",finalidade:"venda",finalidadeNome:"Executive Portfolio",cidade:"São Miguel do Iguaçu",uf:"PR",localizacao:"Along Highway BR-277 — São Miguel do Iguaçu, Paraná - PR, Brazil",preco:0,precoFormatado:"Upon Request",precoInfo:"Up to 304 Beds · 16,000 m² · 24/7 ER & ICU",areaTotal:"16,000 m²",areaConstruida:"16,000 m²",leitos:304,configuracao:"Up to 304 Beds · 22 Medical Offices · 24/7 ER",suites:0,vagas:0,destaques:["Operational capacity of up to 304 beds across a modern 16,000 m² facility","Medical and Dental Center with 22 offices, 24/7 Emergency Room, operating rooms, and pediatric ICU","In-house clinical analysis laboratory and diagnostic imaging center (MRI and X-Ray)","Regional reach serving private patients, health insurance plans, and SUS across Western/Southwestern Paraná, SC, MS, and the Tri-Border area (Paraguay & Argentina)","Managed by Instituto Madre de Dio (IMADI), strategically located along Highway BR-277 in São Miguel do Iguaçu (PR)"],descricao:"Hospital Madre de Dio (HMD) is a modern hospital complex located in São Miguel do Iguaçu (PR), along Highway BR-277. Built across 16,000 m², it features modern infrastructure with an operational capacity of up to 304 beds. It includes a Medical & Dental Center (22 offices), 24-hour emergency room, operating rooms, pediatric ICU, in-house clinical laboratory, and diagnostic imaging center (MRI and X-ray). Managed by Instituto Madre de Dio (IMADI), it serves private, insured, and public healthcare (SUS) patients across dozens of municipalities in Paraná, Santa Catarina, Mato Grosso do Sul, and the Tri-Border region (Paraguay and Argentina).",imagem:`${He}assets/images/imovel_19_hospital_madre_de_dio.jpg`,status:"Executive Portfolio · 304 Beds",tags:["304 Beds","16,000 m²","24/7 Emergency","Surgical Center & ICU","BR-277 / PR"]},{id:"KMY-005",titulo:"General Hospital & Specialized Surgical Center",subtitulo:"Triple A healthcare facility with 12 smart operating rooms",categoria:"hospitais",categoriaNome:"Hospitals & Clinics",finalidade:"venda",finalidadeNome:"Healthcare Asset Sale",cidade:"Campinas / Valinhos",uf:"SP",localizacao:"D. Pedro / Anhanguera Highway Corridor — SP, Brazil",preco:145e6,precoFormatado:"R$ 145,000,000",areaTotal:"18,500 m²",areaConstruida:"16,800 m²",suites:90,vagas:220,destaques:["12 smart operating rooms with laminar airflow","90 inpatient beds including 24 general and coronary ICU beds","Complete diagnostic imaging center (MRI, CT, Hemodynamics)","Certified aeromedical transport helipad","100% compliant with ANVISA RDC-50 healthcare standards"],descricao:"Modern hospital complex designed for healthcare operators, diagnostic medicine networks, or real estate investment trusts via Sale & Leaseback (SLB) contracts. Turnkey and ready for immediate operation.",imagem:`${He}assets/images/imovel_5_hospital.jpg`,status:"Institutional Healthcare Asset",tags:["Surgical Center","Full ICU","ANVISA RDC-50","Sale & Leaseback"]},{id:"KMY-006",titulo:"Triple A Corporate Floor — 1,250 m² on Faria Lima Ave.",subtitulo:"Full-floor trophy office in the heart of the financial district",categoria:"lajes",categoriaNome:"Corporate Floors",finalidade:"venda",finalidadeNome:"Sale or Lease",cidade:"São Paulo",uf:"SP",localizacao:"Brigadeiro Faria Lima Ave., Itaim Bibi — São Paulo / SP",preco:52e6,precoFormatado:"R$ 52,000,000",precoInfo:"Lease option available: R$ 380/m²",areaTotal:"1,250 m² private area",areaConstruida:"1,250 m²",suites:0,vagas:38,destaques:["LEED Platinum and WELL Health-Safety certifications","3.10m clear ceiling height with heavy-duty raised flooring","Unitized curtain wall with thermal and acoustic solar control glass","Full backup power generator covering 100% of private area","Smart destination-dispatch elevator system"],descricao:"Prestigious corporate space at Latin America's most sought-after business address. Open-plan layout ideal for investment banks, private equity firms, fintechs, and multinationals demanding top institutional representation.",imagem:`${He}assets/images/imovel_6_laje.jpg`,status:"Triple A — Faria Lima",tags:["LEED Platinum","Faria Lima","Open Plan","Trophy Building"]},{id:"KMY-007",titulo:"Panoramic Corporate Floor — 720 m² in Alphaville",subtitulo:"Turnkey office space overlooking preserved green area",categoria:"lajes",categoriaNome:"Corporate Floors",finalidade:"locacao",finalidadeNome:"Corporate Lease",cidade:"Barueri / Alphaville",uf:"SP",localizacao:"Alameda Rio Negro, Alphaville — Barueri / SP, Brazil",preco:68e3,precoFormatado:"R$ 68,000 / month",precoInfo:"Condo fee and property tax upon request",areaTotal:"720 m²",areaConstruida:"720 m²",suites:0,vagas:24,destaques:["Fully cabled with VRF inverter air conditioning","4 private acoustic glass meeting rooms and ground-floor auditorium","Furnished executive pantry and breakout lounge","Adjacent to Iguatemi Alphaville Mall and business hub","Direct access via Castello Branco Highway"],descricao:"Plug & play corporate floor ready for immediate occupancy. Contemporary design featuring wooden acoustic ceilings, high-density vinyl flooring, and panoramic views of the Alphaville skyline.",imagem:`${He}assets/images/imovel_7_laje.jpg`,status:"Ready for Occupancy (Plug & Play)",tags:["Alphaville","Plug & Play","VRF Inverter","Panoramic View"]},{id:"KMY-008",titulo:"Luxury Flagship Store — 380 m² on Oscar Freire St.",subtitulo:"Most coveted corner retail property in Jardins",categoria:"lojas",categoriaNome:"Retail Stores",finalidade:"venda",finalidadeNome:"Property / Retail Sale",cidade:"São Paulo",uf:"SP",localizacao:"Rua Oscar Freire, Jardins — São Paulo / SP, Brazil",preco:28e6,precoFormatado:"R$ 28,000,000",precoInfo:"Also available for lease: R$ 130,000/month",areaTotal:"380 m²",areaConstruida:"380 m² across 2 levels",suites:0,vagas:4,destaques:["14-meter storefront window in tempered glass and gold framing","Roman travertine marble flooring and integrated architectural lighting","High-ticket pedestrian foot traffic in the heart of Jardins","Lower level equipped for secure vault storage and VIP lounge","Vacant property ready for luxury brand flagship deployment"],descricao:"Legendary address in São Paulo's luxury district. Ideal for fine jewelry houses, haute couture labels, art galleries, or global brands looking to establish a flagship presence on Brazil's most iconic street.",imagem:`${He}assets/images/imovel_8_loja.jpg`,status:"Iconic Retail Corner",tags:["Oscar Freire","Jardins","14m Storefront","Roman Travertine"]},{id:"KMY-009",titulo:"Parque das Acácias Residential — Block of 48 MCMV Units",subtitulo:"Portfolio of turnkey residential apartments for rental income",categoria:"mcmv",categoriaNome:"Residential Lots (MCMV)",finalidade:"venda",finalidadeNome:"Block Sale (Investor)",cidade:"São Paulo",uf:"SP",localizacao:"São Mateus / Itaquera, East Zone — São Paulo / SP",preco:108e5,precoFormatado:"R$ 10,800,000",precoInfo:"Equivalent to R$ 225,000 per unit",areaTotal:"2,800 m² total private area",areaConstruida:"3,400 m²",suites:0,vagas:48,destaques:["48 two-bedroom apartments (48 m² to 52 m²) with balcony","Gated community with 24/7 security, sports court, playground & gourmet lounge","Estimated rental yield: 0.68% p.m. net of vacancy","Located 800m from future monorail station","100% approved documentation and occupancy permit (CEF)"],descricao:"Outstanding opportunity for residential income funds, developers, or patrimonial investors. Block acquisition of ready-to-rent units under the MCMV housing program, ensuring high liquidity and steady rental cash flow.",imagem:`${He}assets/images/imovel_9_mcmv.jpg`,status:"Investor Block Sale",tags:["MCMV Tier 3","High Liquidity","Rental Income","Turnkey"]},{id:"KMY-010",titulo:"Shopping Center — Stores & Cinema",subtitulo:"Consolidated retail asset with 32,500 m² of GLA, 180 stores, and 5 anchor stores",categoria:"shopping",categoriaNome:"Shopping Malls",finalidade:"venda",finalidadeNome:"Retail Asset Sale",cidade:"São Paulo",uf:"SP",localizacao:"São Paulo — SP, Brazil",preco:39e7,precoFormatado:"R$ 390,000,000.00",precoInfo:"GLA 32,500 m² · 180 Stores · 5 Anchors · 1,900 Parking Spaces",areaTotal:"32,500 m² GLA",areaConstruida:"32,500 m² GLA",abl:"32,500 m²",configuracao:"180 Stores · 5 Anchor Stores",suites:0,vagas:1900,destaques:["Gross Leasable Area (GLA): 32,500 m²","Consolidated tenant mix featuring 180 stores and 5 anchor stores","Modern cinema complex and extensive food court and service operations","Structured parking facility with 1,900 parking spaces","Strategic location in São Paulo (SP) with solid lease agreements"],descricao:"Prime institutional income-generating asset located in São Paulo (SP). Consolidated Shopping Center featuring 32,500 m² of Gross Leasable Area (GLA), comprising 180 stores, 5 anchor stores, a cinema complex, and 1,900 parking spaces, delivering stable yield distribution and strong visitor footfall.",imagem:`${He}assets/images/imovel_10_shopping.jpg`,status:"Institutional Income Asset",tags:["GLA 32,500 m²","180 Stores","5 Anchors","1,900 Parking Spaces","São Paulo"]}],hl=[{id:"todos",nome:"All Assets",icone:"layout-grid",total:19},{id:"galpoes",nome:"Logistic Warehouses",icone:"warehouse",total:4},{id:"predios",nome:"Corporate Buildings",icone:"building",total:4},{id:"hoteis",nome:"Hotels & Resorts",icone:"hotel",total:2},{id:"pousadas",nome:"Boutique Inns",icone:"palmtree",total:2},{id:"hospitais",nome:"Hospitals & Clinics",icone:"stethoscope",total:2},{id:"lajes",nome:"Corporate Floors",icone:"building-2",total:2},{id:"lojas",nome:"Retail Stores",icone:"store",total:1},{id:"mcmv",nome:"Residential Lots",icone:"home",total:1},{id:"shopping",nome:"Shopping Malls",icone:"shopping-bag",total:1}],fl=[{num:"01",titulo:"Project Briefing",desc:"In-depth alignment of the client's desires, routine, lifestyle, and investment goals."},{num:"02",titulo:"Conceptual Study",desc:"Creation of initial sketches, sensory moodboard, color palette, and spatial layout."},{num:"03",titulo:"Preliminary & Executive Design",desc:"Detailed plans for construction, electrical, architectural lighting, ceiling, plumbing, and custom millwork."},{num:"04",titulo:"Budgeting & Specifications",desc:"Rigorous cost planning and technical specification of premium finishes, marbles, and fixtures."},{num:"05",titulo:"Site Supervision",desc:"Continuous technical oversight on site, ensuring strict schedule compliance and flawless finishes."},{num:"06",titulo:"Styling & Assembly",desc:"Fine art curation, selection of designer furniture, rugs, drapery, lighting, and exclusive decor pieces."},{num:"07",titulo:"Handover & Warranty",desc:"Final inspection checklist and celebratory key handover with dedicated post-occupancy technical support."}],pl=[{id:"todos",nome:"全部资产",icone:"layout-grid",total:19},{id:"galpoes",nome:"物流仓储",icone:"warehouse",total:4},{id:"predios",nome:"企业写字楼",icone:"building",total:4},{id:"hoteis",nome:"酒店与度假村",icone:"hotel",total:2},{id:"pousadas",nome:"精品旅馆",icone:"palmtree",total:2},{id:"hospitais",nome:"医院与诊所",icone:"stethoscope",total:2},{id:"lajes",nome:"企业整层办公",icone:"building-2",total:2},{id:"lojas",nome:"商业商铺",icone:"store",total:1},{id:"mcmv",nome:"住宅批次 (MCMV)",icone:"home",total:1},{id:"shopping",nome:"购物中心",icone:"shopping-bag",total:1}],ml=[{num:"01",titulo:"项目需求简报",desc:"深入对齐客户的愿景、生活方式、运营需求及投资目标。"},{num:"02",titulo:"概念设计研究",desc:"创作初步草图、感官情绪板、色彩搭配及空间布局规划。"},{num:"03",titulo:"初步与施工图设计",desc:"制定土建改造、电气、艺术照明、吊顶、给排水及定制木作详图。"},{num:"04",titulo:"预算与技术规范",desc:"严格的成本预算表，以及高端石材、饰面与卫浴洁具的技术规范。"},{num:"05",titulo:"施工现场监理",desc:"持续的现场技术督导，确保施工进度与极致工艺品质。"},{num:"06",titulo:"软装陈设与布置",desc:"艺术品策展、设计师家具、地毯、窗帘、灯具及专属饰品配置。"},{num:"07",titulo:"交付与售后保障",desc:"最终验收清单与钥匙交付仪式，并提供入住后专属技术支持。"}],gl=[{id:"todos",nome:"جميع الأصول",icone:"layout-grid",total:19},{id:"galpoes",nome:"المستودعات اللوجستية",icone:"warehouse",total:4},{id:"predios",nome:"المباني المؤسسية",icone:"building",total:4},{id:"hoteis",nome:"الفنادق والمنتجعات",icone:"hotel",total:2},{id:"pousadas",nome:"النُزُل الفاخرة",icone:"palmtree",total:2},{id:"hospitais",nome:"المستشفيات والعيادات",icone:"stethoscope",total:2},{id:"lajes",nome:"الطوابق المكتبية",icone:"building-2",total:2},{id:"lojas",nome:"المتاجر والمعارض",icone:"store",total:1},{id:"mcmv",nome:"المجمعات السكنية",icone:"home",total:1},{id:"shopping",nome:"مراكز التسوق",icone:"shopping-bag",total:1}],_l=[{num:"01",titulo:"ملخص المشروع",desc:"مواءمة شاملة لرغبات العميل وأسلوب حياته وأهدافه الاستثمارية."},{num:"02",titulo:"الدراسة المفاهيمية",desc:"إعداد المخططات الأولية ولوحة الإلهام وتنسيق الألوان والتوزيع المكاني."},{num:"03",titulo:"التصميم الأولي والتنفيذي",desc:"مخططات تفصيلية للبناء والكهرباء والإضاءة المعمارية والأسقف والأعمال الخشبية الفاخرة."},{num:"04",titulo:"الميزانية والمواصفات",desc:"تخطيط دقيق للتكاليف وتحديد المواصفات الفنية للرخام والتشطيبات الفاخرة."},{num:"05",titulo:"الإشراف الميداني",desc:"متابعة هندسية مستمرة في الموقع لضمان الالتزام بالجدول الزمني وجودة التنفيذ."},{num:"06",titulo:"التأثيث والتجهيز",desc:"انتقاء الأعمال الفنية والأثاث الفاخر والسجاد والستائر والإضاءة."},{num:"07",titulo:"التسليم والضمان",desc:"فحص نهائي شامل وتسليم المفاتيح مع دعم فني متخصص ما بعد التسليم."}],vl={"KMY-011":{titulo:"Aratu — AAA级现代物流园区",subtitulo:"巴西首个获得IFC颁发EDGE绿色建筑认证的物流仓储园区",categoriaNome:"物流仓储",finalidadeNome:"高管专属目录",precoFormatado:"价格面议",precoInfo:"AAA级评级 · 12米净高 · 地面承重 6吨/m²",status:"高管专属目录 · AAA",destaques:["总可租面积 (ABL)：102,530 m²，由两座模块化仓库组成","AAA级标准 · 室内净高 12米 · 地面承重能力 6吨/m²","巴西首个获得国际金融公司 (IFC) 颁发的 EDGE 绿色建筑认证的物流园","完善的配套设施：餐厅、员工食堂、礼堂及多功能会议室","位于萨尔瓦多大都会区 Simões Filho，直通主要高速公路，距萨尔瓦多市中心仅20公里"],descricao:"该物流园区于2021年6月收购，由两座模块化高标仓组成，总可租面积 (ABL) 超过10万平方米 (102,530 m²)。园区内设餐厅、食堂、礼堂和会议室。位于巴伊亚州萨尔瓦多大都会区的 Simões Filho，直通区域主要高速公路，距萨尔瓦多市中心仅20公里。Aratu 是巴西首个获得 IFC 颁发的 EDGE 绿色建筑认证的物流资产。"},"KMY-012":{titulo:"Cajamar — AAA级现代物流园区",subtitulo:"获得 LEED GOLD 金级认证，坐落于巴西最大的物流核心枢纽",categoriaNome:"物流仓储",finalidadeNome:"高管专属目录",precoFormatado:"价格面议",precoInfo:"AAA级评级 · 12米净高 · 地面承重 6吨/m²",status:"高管专属目录 · AAA",destaques:["总可租面积 (ABL)：35,690 m²，可灵活划分为4个独立单元","AAA级标准 · 室内净高 12米 · 地面承重能力 6吨/m²","国际 LEED GOLD 金级绿色认证高标仓","配套餐厅、食堂、礼堂及商务会议室","位于圣保罗30公里半径圈内 (Anhanguera公路43公里处)，拥有园区专属出入口"],descricao:"于2021年8月收购，是一座获得 LEED GOLD 认证的高标准物流仓库，总可租面积 35,690 m²，可划分为4个独立模块，配备餐厅、食堂、礼堂及会议室。位于距离圣保罗30公里半径内的全国最大物流枢纽 Cajamar，正对 Anhanguera 高速公路 (km 43)，设有独立出入口。"},"KMY-013":{titulo:"DCC — Cajamar 综合物流园区",subtitulo:"由三栋仓储大楼组成，配备 2.5 MW 太阳能发电站",categoriaNome:"物流仓储",finalidadeNome:"高管专属目录",precoFormatado:"价格面议",precoInfo:"AA级评级 · 12米净高 · 地面承重 6吨/m²",status:"高管专属目录 · AA",destaques:["总可租面积 (ABL)：102,708 m²，分布于三栋仓储建筑","AA级标准 · 室内净高 12米 · 地面承重能力 6吨/m²","自有太阳能光伏电站，发电装机容量达 2.5 MW","自动喷淋系统、24小时安保、闭路监控及防弹武装门岗","配备礼堂、会议室、休闲区、自行车库，直通 Anhanguera 高速公路 (Km 31.775)"],descricao:"于2023年收购，由三栋物流仓库组成，总可租面积超过10.2万平方米 (102,708 m²)。位于大圣保罗地区 Cajamar，直通 Anhanguera 高速公路，毗邻 Bandeirantes 高速及北环城高速。园区亮点包括 2.5 MW 太阳能发电站、24小时武装安保、防弹门岗、自动喷淋、礼堂、会议室及休闲设施。"},"KMY-014":{titulo:"HGLG Betim BTS – Meli 定制物流中心",subtitulo:"为大型电商龙头量身定制 (Built to Suit) 的 AAA 级旗舰物流中心",categoriaNome:"物流仓储",finalidadeNome:"高管专属目录",precoFormatado:"价格面议",precoInfo:"AAA级评级 · 12米净高 · 地面承重 6吨/m²",status:"高管专属目录 · AAA",destaques:["总可租面积 (ABL)：95,730 m²，定制化建设 (Built to Suit)","AAA级标准 · 室内净高 12米 · 地面承重能力 6吨/m²","专为头部电子商务巨头量身打造的旗舰物流履约中心","直通 Costa e Silva 公路，毗邻 Fernão Dias 高速公路","战略坐落于米纳斯吉拉斯州 Betim，高效连接 Contagem 与贝洛奥里藏特"],descricao:"于2022年收购，位于米纳斯吉拉斯州 Betim 市，为 AAA 级定制化 (Built to Suit) 旗舰物流资产，专为大型电商龙头企业建造。直通 Costa e Silva 公路并紧邻 Fernão Dias 高速公路，快速连接 Contagem 及州首府贝洛奥里藏特。"},"KMY-015":{titulo:"Quantum — Itaim Bibi 企业写字楼",subtitulo:"效率与创新兼备：立方体建筑结构、950 m² 标准层与 360° 全景露台",categoriaNome:"企业写字楼",finalidadeNome:"高管专属目录",precoFormatado:"价格面议",precoInfo:"预计交付 2026年 · 100% 产权 · 9层 + 屋顶露台",configuracao:"9层加屋顶露台 · 单层面积 950 m²",status:"高管专属目录 · 2026",destaques:["可租面积：10,230 m² · 产权比例：100% · 预计交付：2026年","建筑配置：9个办公楼层加屋顶露台，标准层面积 950 m²","6层连廊设有独特的 360° 全景环绕露台","立方体建筑形态，提供极致的办公空间布局灵活性","位于圣保罗核心金融区 Itaim Bibi，紧邻 Faria Lima 大道"],descricao:"融合效率与创新，打造全新现代办公体验。6层连通处设有独特的 360° 全景环绕露台；立方体结构与 950 m² 线性大平层提供极佳的布局灵活性。坐落于圣保罗 Itaim Bibi 核心区 (R. Joaquim Floriano, 973)，距 Faria Lima 金融大道仅数步之遥。"},"KMY-016":{titulo:"Citadel — 保利斯塔企业写字楼",subtitulo:"距圣保罗保利斯塔大道仅50米的全面现代化改造 (Retrofit) 写字楼",categoriaNome:"企业写字楼",finalidadeNome:"高管专属目录",precoFormatado:"价格面议",precoInfo:"15层 · 单层面积 852 m² · 全面现代化升级",configuracao:"15个楼层 · 单层面积 852 m²",status:"高管专属目录 · 翻新升级",destaques:["可租面积：12,780 m² · 建筑配置：15个楼层，标准层 852 m²","全面改造涵盖开放式办公空间 (Open Space)、全新卫浴、电梯及中央空调系统","扩建现代化大堂，入口处设有景观落客区 (Drop-off)","建筑外立面全面换新，采用现代高性能玻璃幕墙","位于 Rua Bela Cintra, 986，距保利斯塔金融大道仅50米，紧邻地铁站"],descricao:"全面现代化改造项目，打造开放式大平层办公空间，配备全新升级的电梯与空调系统。大堂扩建升级并设景观落客区，外立面采用全新玻璃幕墙。位于圣保罗 Bela Cintra 街 986 号，距保利斯塔大道仅50米，毗邻地铁站。"},"KMY-017":{titulo:"Pinheiros One — 综合企业办公中心",subtitulo:"配套服务设施完善，坐拥全景视野并直通 Marginal Pinheiros 快速路",categoriaNome:"企业写字楼",finalidadeNome:"高管专属目录",precoFormatado:"价格面议",precoInfo:"50% 产权 · 18层 · 单层最高达 1,710 m²",configuracao:"18个楼层 · 单层面积最高达 1,710 m²",status:"高管专属目录 · Triple A",destaques:["可租面积：33,358 m² · 产权比例：50% · 18个楼层，单层最高达 1,710 m²","18层全景办公空间，设有两层可供举办活动的观景露台","完善商业配套：餐厅、咖啡厅、烘焙坊、礼堂、美发沙龙及美食餐车","配备带淋浴更衣室的自行车库及快速洗车站","直通 Marginal Pinheiros 与 Francisco Morato 大道 (圣保罗新兴商务核心区)"],descricao:"拥有18层高标准办公楼层，单层面积 1,600 m² 至 1,710 m²，享全景视野；设两层活动露台、餐厅、咖啡厅、烘焙店、礼堂、更衣室自行车库及洗车中心。直通 Marginal Pinheiros 快速路 (R. Lemos Monteiro, 120)，坐落于圣保罗快速发展的战略商务区。"},"KMY-018":{titulo:"Thera Corporate — Berrini 企业写字楼",subtitulo:"位于 Berrini 与 Bandeirantes 金融走廊，兼顾舒适与商务效率",categoriaNome:"企业写字楼",finalidadeNome:"高管专属目录",precoFormatado:"价格面议",precoInfo:"66% 产权 · 15层 · 单元面积 1,032 m² 起",configuracao:"15个楼层 · 标准层单元 1,032 m² 起",status:"高管专属目录 · Triple A",destaques:["可租面积：21,047 m² · 产权比例：66% · 15个楼层，单元面积 1,032 m² 起","推崇舒适与平衡的办公空间，设户外广场餐厅与室内精品咖啡厅","配备礼堂、租户与访客自行车库、轮换美食餐车及专属礼宾服务","直通 Luís Carlos Berrini 大道与 Bandeirantes 大道 (Brooklin区)","距孔戈尼亚斯机场 (Congonhas) 仅数分钟车程，周边商业配套极其成熟"],descricao:"Thera 拥有户外餐厅广场、室内咖啡馆、礼堂、自行车库及专属配套服务。总可租面积 21,047 m²，共15层（单元面积 1,032 m² 起）。直通圣保罗 Berrini 大道 (105号) 与 Bandeirantes 大道，距孔戈尼亚斯机场仅数分钟路程。"},"KMY-019":{titulo:"Madre de Dio 综合医院 (HMD) — 304张床位",subtitulo:"建筑面积 16,000 m² 的现代化综合医院，最高运营容量达 304 张床位",categoriaNome:"医院与诊所",finalidadeNome:"高管专属目录",precoFormatado:"价格面议",precoInfo:"最高 304 张床位 · 16,000 m² · 24小时急诊与重症监护 (ICU)",configuracao:"最高 304 张床位 · 22 间诊室 · 24小时急诊中心",status:"高管专属目录 · 304张床位",destaques:["16,000 m² 现代化医疗建筑，最高运营容量达 304 张住院床位","医疗与牙科中心（22间诊室）、24小时急诊室、手术中心及儿科 ICU","自有临床检验实验室及医学影像诊断中心（核磁共振 MRI 与 X光）","辐射巴拉那州西部/西南部、圣卡塔琳娜、南马托格罗索及三国边境（巴拉圭与阿根廷）","由 IMADI 协会管理，战略位置紧邻 BR-277 高速公路"],descricao:"Madre de Dio 医院 (HMD) 位于巴拉那州 São Miguel do Iguaçu，紧邻 BR-277 高速公路。建筑面积 16,000 m²，可容纳多达 304 张床位，配备22间诊室的医疗中心、24小时急诊、手术室、儿科 ICU、临床实验室及核磁共振影像中心，辐射巴拉那州及三国边境地区。"},"KMY-001":{titulo:"海滨精品奢华酒店 — 48间豪华套房",categoriaNome:"酒店与度假村",finalidadeNome:"资产出售",precoFormatado:"R$ 38.500.000",status:"KMY Prime 独家代理",destaques:["面朝大海的无边际泳池","当代高级餐厅与海滩酒吧","配备干湿桑拿的全方位水疗中心 (Spa)","年均入住率高达 78%","经审计的年度 EBITDA 与完善的企业治理结构"],descricao:"位于圣保罗北岸最负盛名的 Juquehy 海滩，拥有48间国际标准豪华套房、特色美食餐厅及高端企业活动与度假配套设施。"},"KMY-002":{titulo:"海滨生态奢华度假村 — 110栋私密别墅",categoriaNome:"酒店与度假村",finalidadeNome:"出售或商业租赁",precoFormatado:"R$ 95.000.000",status:"Triple A 级资产",destaques:["400米半私密海滩海岸线","互联生态泳池水上乐园","认证日夜起降私人直升机停机坪","可容纳500人的会议与活动中心","支持面向国际酒店集团的长期商业租赁"],descricao:"巴西最具代表性的奢华酒店资产之一，位于巴伊亚州 Trancoso，获绿色环保认证，配备国际级 Spa 与直升机坪，客群涵盖全球高净值人士。"},"KMY-003":{titulo:"高山精品瑞士木屋旅馆 — 18间壁炉套房",categoriaNome:"精品旅馆",finalidadeNome:"商业租赁",precoFormatado:"R$ 65.000 / 月",precoInfo:"10年期商业租赁合同",status:"租赁投资良机",destaques:["配备地暖与按摩浴缸的恒温木屋套房","可藏酒1,500瓶的地下恒温酒窖","屡获殊荣的芝士火锅餐厅与高山小酒馆","全套精装家具，满负荷成熟运营","主流预订平台评分高达 9.8 分"],descricao:"位于圣保罗州 Campos do Jordão 核心高尚区 Alto do Capivari，100% 拎包运营，冬季旺季与全年浪漫旅游利润率极高。"},"KMY-004":{titulo:"帕拉蒂历史中心殖民风格精品旅馆",categoriaNome:"精品旅馆",finalidadeNome:"资产出售",precoFormatado:"R$ 22.000.000",status:"历史文化遗产资产",destaques:["百年历史宅邸修复，兼具历史韵味与现代舒适","景观内庭院与天然石材灯光泳池","馆藏古董家具与艺术珍品","FLIP国际文学节及文化节庆带来稳定的国际客流","毗邻地块具备扩建潜力"],descricao:"坐落于联合国教科文组织世界遗产帕拉蒂 (Paraty) 历史中心，巴洛克与殖民时期建筑美学与22间国际标准空调套房完美融合。"},"KMY-005":{titulo:"综合医院与专科手术中心",categoriaNome:"医院与诊所",finalidadeNome:"医疗资产出售",precoFormatado:"R$ 145.000.000",status:"机构级医疗资产",destaques:["12间配备层流净化系统的智能手术室","90张住院病床，含24张综合与冠心病重症监护 (ICU) 床位","完备的医学影像中心（核磁共振、CT、血流动力学）","认证航空医疗救援直升机停机坪","100% 符合巴西国家卫生监督局 ANVISA RDC-50 标准"],descricao:"现代化大型医院综合体，适合医疗集团、诊断医疗网络或房地产信托基金通过售后回租 (Sale & Leaseback) 模式收购，即刻可投入运营。"},"KMY-006":{titulo:"Faria Lima 大道 Triple A 级企业整层 — 1,250 m²",categoriaNome:"企业整层办公",finalidadeNome:"出售或租赁",precoFormatado:"R$ 52.000.000",precoInfo:"可租赁：R$ 380/m²",status:"Triple A — Faria Lima",destaques:["LEED Platinum 铂金级与 WELL 健康安全双认证","3.10米净高，配备高承重架空地板","单元式隔热隔音太阳能控制玻璃幕墙","100% 覆盖私有区域的备用发电机组","智能目的楼层派梯系统"],descricao:"位于拉丁美洲最炙手可热的圣保罗 Faria Lima 金融大道核心地段，开放式格局，是投资银行、私募基金及跨国企业总部的理想之选。"},"KMY-007":{titulo:"Alphaville 全景企业整层办公 — 720 m²",categoriaNome:"企业整层办公",finalidadeNome:"企业租赁",precoFormatado:"R$ 68.000 / 月",precoInfo:"物业费与税费另计",status:"即刻入驻 (Plug & Play)",destaques:["全套网络布线与 VRF 变频中央空调","4间声学玻璃独立会议室及底层礼堂","精装行政茶水间与休闲酒廊","紧邻 Iguatemi Alphaville 购物中心与商务核心","直通 Castello Branco 高速公路"],descricao:"拎包入驻 (Plug & Play) 的现代化企业整层，采用木质声学吊顶与高密度地板，尽享 Alphaville 城市天际线与绿地全景。"},"KMY-008":{titulo:"Oscar Freire 大街奢华旗舰店商铺 — 380 m²",categoriaNome:"商业商铺",finalidadeNome:"产权出售 / 商业零售",precoFormatado:"R$ 28.000.000",precoInfo:"亦可租赁：R$ 130.000/月",status:"地标级街角旗舰店",destaques:["14米长钢化玻璃与金色边框展示橱窗","罗马洞石地面与一体化建筑艺术照明","圣保罗 Jardins 高端街区高客单价人流中心","下层配备高安全金库存储区与 VIP 贵宾室","空置状态，随时可供国际奢侈品牌进驻打造旗舰店"],descricao:"圣保罗奢华街区 Oscar Freire 最具代表性的街角物业，适合高级珠宝、高定成衣、艺术画廊或国际奢侈品牌开设巴西旗舰店。"},"KMY-009":{titulo:"Parque das Acácias 住宅项目 — 48套 MCMV 公寓整售",categoriaNome:"住宅批次 (MCMV)",finalidadeNome:"投资人整批出售",precoFormatado:"R$ 10.800.000",precoInfo:"折合每套 R$ 225.000",status:"投资人整批出售",destaques:["48套两居室带阳台公寓（48 m² 至 52 m²）","封闭式社区，配24小时安保、运动场、游乐区及美食会所","预计净租金收益率：0.68% / 月","距未来单轨电车站仅800米","100% 手续齐全并已获联邦储蓄银行 (CEF) 竣工入住许可"],descricao:"面向长租公寓基金、开发商或家族财富投资人的高流动性住宅资产包，提供稳定持续的租金现金流。"},"KMY-010":{titulo:"大型购物中心 — 180间商铺与电影院",subtitulo:"成熟零售商业综合体，拥有 32,500 m² 可租面积、180间商铺与5大主力店",categoriaNome:"购物中心",finalidadeNome:"商业零售资产出售",precoFormatado:"R$ 390.000.000,00",precoInfo:"可租面积 (ABL) 32,500 m² · 180间商铺 · 5大主力店 · 1,900个车位",configuracao:"180间商铺 · 5大主力店",status:"机构级收益型资产",destaques:["总可租面积 (ABL)：32,500 m²","成熟的商业租户组合，涵盖 180 间商铺与 5 家大型主力店","现代化多厅影院、大型美食广场及综合服务配套","大型停车场，提供 1,900 个停车位","位于圣保罗 (SP) 战略要地，租约稳固且收益可观"],descricao:"位于圣保罗 (SP) 的一线机构级收益型商业资产。成熟大型购物中心，总可租面积 (ABL) 达 32,500 m²，汇聚 180 间商铺、5 家主力店、现代化影院及 1,900 个停车位，客流充沛，提供长期稳定的租金分红回报。"}},xl={"KMY-011":{titulo:"أراتو (Aratu) — مجمع لوجستي بمعيار AAA",subtitulo:"أول مستودع لوجستي في البرازيل يحصل على شهادة EDGE للمباني الخضراء من مؤسسة التمويل الدولية (IFC)",categoriaNome:"المستودعات اللوجستية",finalidadeNome:"المحفظة التنفيذية",precoFormatado:"عند الطلب",precoInfo:"تصنيف AAA · ارتفاع السقف 12 م · قدرة تحمل الأرضية 6 طن/م²",status:"المحفظة التنفيذية · AAA",destaques:["إجمالي المساحة القابلة للتأجير (ABL): 102,530 م² موزعة على مستودعين معياريين","تصنيف AAA · ارتفاع سقف صافي 12 م · قدرة تحمل الأرضية 6 طن/م²","أول مستودع لوجستي في البرازيل ينال شهادة EDGE للمشاريع الخضراء من IFC","بنية تحتية متكاملة تشمل مطعماً وكافيتريا ومسرحاً وقاعات اجتماعات","يقع في سيمويس فيلهو (ضواحي سلفادور الكبرى) مع اتصال مباشر بالطرق السريعة وعلى بعد 20 كم فقط من وسط مدينة سلفادور"],descricao:"تم الاستحواذ عليه في يونيو 2021، ويتكون هذا المجمع اللوجستي من مستودعين معياريين بمساحة إجمالية قابلة للتأجير تتجاوز 100 ألف م² (102,530 م²). يضم مطعماً وكافيتريا ومسرحاً وقاعات اجتماعات. يقع في منطقة سلفادور الكبرى بولاية باهيا على بعد 20 كم من وسط المدينة، ويُعد أول مستودع لوجستي في البرازيل يحصل على شهادة EDGE للاستدامة من مؤسسة التمويل الدولية (IFC)."},"KMY-012":{titulo:"كاجامار (Cajamar) — مجمع لوجستي بمعيار AAA",subtitulo:"مستودع حاصل على شهادة LEED GOLD في أكبر مركز لوجستي في البرازيل",categoriaNome:"المستودعات اللوجستية",finalidadeNome:"المحفظة التنفيذية",precoFormatado:"عند الطلب",precoInfo:"تصنيف AAA · ارتفاع السقف 12 م · قدرة تحمل الأرضية 6 طن/م²",status:"المحفظة التنفيذية · AAA",destaques:["إجمالي المساحة القابلة للتأجير (ABL): 35,690 م² قابلة للتقسيم إلى 4 وحدات مستقلة","تصنيف AAA · ارتفاع سقف صافي 12 م · قدرة تحمل الأرضية 6 طن/م²","مستودع حاصل على شهادة الاستدامة العالمية LEED GOLD","بنية تحتية متكاملة تشمل مطعماً وكافيتريا ومسرحاً وقاعات اجتماعات","يقع ضمن نطاق 30 كم من ساو باولو على طريق Anhanguera السريع (كم 43) مع مدخل حصري"],descricao:"تم الاستحواذ عليه في أغسطس 2021، وهو مستودع حاصل على شهادة LEED GOLD ضمن مجمع لوجستي متميز. يوفر مساحة قابلة للتأجير تبلغ 35,690 م² قابلة للتقسيم إلى 4 وحدات، مع مطعم وكافيتريا ومسرح وقاعات اجتماعات. يقع في كاجامار ضمن نطاق 30 كم من ساو باولو، في أكبر قطب لوجستي في البلاد مع مدخل مباشر من طريق Anhanguera السريع."},"KMY-013":{titulo:"مجمع DCC اللوجستي — كاجامار",subtitulo:"مجمع لوجستي من ثلاثة مبانٍ مزود بمحطة طاقة شمسية بقدرة 2.5 ميجاواط",categoriaNome:"المستودعات اللوجستية",finalidadeNome:"المحفظة التنفيذية",precoFormatado:"عند الطلب",precoInfo:"تصنيف AA · ارتفاع السقف 12 م · قدرة تحمل الأرضية 6 طن/م²",status:"المحفظة التنفيذية · AA",destaques:["إجمالي المساحة القابلة للتأجير (ABL): 102,708 م² موزعة على ثلاثة مبانٍ لوجستية","تصنيف AA · ارتفاع سقف صافي 12 م · قدرة تحمل الأرضية 6 طن/م²","محطة طاقة شمسية خاصة بقدرة توليد 2.5 ميجاواط","شبكة إطفاء تلقائي (Sprinklers)، حراسة أمنية على مدار الساعة، كاميرات مراقبة وبوابة مصفحة","مسرح وقاعات اجتماعات ومنطقة ترفيهية واتصال مباشر بطريق Anhanguera السريع (كم 31.775)"],descricao:"تم الاستحواذ عليه في عام 2023، ويتألف من ثلاثة مبانٍ لوجستية بإجمالي مساحة قابلة للتأجير تبلغ 102,708 م² في منطقة ساو باولو الكبرى (كاجامار). يتميز بمحطة طاقة شمسية بقدرة 2.5 ميجاواط، وحراسة أمنية على مدار الساعة وبوابة مصفحة ومسرح وقاعات اجتماعات مع اتصال مباشر بطريق Anhanguera السريع."},"KMY-014":{titulo:"HGLG Betim BTS – Meli",subtitulo:"أصل لوجستي بمعيار AAA مصمم خصيصاً (Built to Suit) لشركة رائدة في التجارة الإلكترونية",categoriaNome:"المستودعات اللوجستية",finalidadeNome:"المحفظة التنفيذية",precoFormatado:"عند الطلب",precoInfo:"تصنيف AAA · ارتفاع السقف 12 م · قدرة تحمل الأرضية 6 طن/م²",status:"المحفظة التنفيذية · AAA",destaques:["إجمالي المساحة القابلة للتأجير (ABL): 95,730 م² بنظام البناء حسب الطلب (Built to Suit)","تصنيف AAA · ارتفاع سقف صافي 12 م · قدرة تحمل الأرضية 6 طن/م²","مشروع مصمم خصيصاً لإحدى كبرى شركات التجارة الإلكترونية","اتصال مباشر بطريق Costa e Silva السريع وبالقرب من طريق Fernão Dias","موقع استراتيجي في مدينة بيتيم (MG) يربط كونتاجم وبيلو هوريزونتي"],descricao:"تم الاستحواذ عليه في عام 2022 في مدينة بيتيم بولاية ميناس جيرايس، وهو مصنف بفئة AAA وتم تطويره بنظام البناء المخصص (Built to Suit) لصالح شركة كبرى في قطاع التجارة الإلكترونية، مع وصول مباشر إلى المحاور السريعة المؤدية إلى بيلو هوريزونتي."},"KMY-015":{titulo:"كوانتوم (Quantum) — مبنى مؤسسي في إيتايم بيبي",subtitulo:"كفاءة وابتكار: تصميم مكعب وطوابق بمساحة 950 م² وشرفات بانورامية 360 درجة",categoriaNome:"المباني المؤسسية",finalidadeNome:"المحفظة التنفيذية",precoFormatado:"عند الطلب",precoInfo:"التسليم المتوقع 2026 · ملكية 100% · 9 طوابق + سطح (Rooftop)",configuracao:"9 طوابق بالإضافة إلى السطح · مساحة الطابق 950 م²",status:"المحفظة التنفيذية · 2026",destaques:["المساحة القابلة للتأجير: 10,230 م² · نسبة الملكية: 100% · التسليم المتوقع: 2026","التكوين: 9 طوابق بالإضافة إلى سطح علوي مع طوابق بمساحة 950 م²","يتميز الطابق السادس بشرفات بانورامية محيطية بزاوية 360 درجة","هيكل معماري مكعب يوفر أقصى درجات المرونة في التصميم الداخلي","يقع في تقاطع شارع Joaquim Floriano مع Clodomiro Amazonas على بُعد خطوات من شارع Faria Lima"],descricao:"يجمع بين الكفاءة والابتكار لتقديم مفهوم جديد للمساحات المكتبية. يضم الطابق السادس شرفات بانورامية بزاوية 360 درجة، وتوفر الطوابق الخطية بمساحة 950 م² مرونة قصوى. يقع في حي إيتايم بيبي الراقي بمدينة ساو باولو على بُعد خطوات من شارع Faria Lima المالي."},"KMY-016":{titulo:"سيتاديل (Citadel) — مبنى مؤسسي في باوليستا",subtitulo:"تحديث شامل (Retrofit) بمفهوم المساحات المفتوحة على بُعد 50 متراً من شارع باوليستا",categoriaNome:"المباني المؤسسية",finalidadeNome:"المحفظة التنفيذية",precoFormatado:"عند الطلب",precoInfo:"15 طابقاً · مساحة الطابق 852 م² · تحديث شامل",configuracao:"15 طابقاً · مساحة الطابق 852 م²",status:"المحفظة التنفيذية · تحديث شامل",destaques:["المساحة القابلة للتأجير: 12,780 م² · التكوين: 15 طابقاً بمساحة 852 م² للطابق","تحديث شامل يضم طوابق مفتوحة ومصاعد وأنظمة تكييف مجددة بالكامل","بهو رئيسي موسع وعصري مع منطقة نزول سيارات (Drop-off) منسقة طبيعياً","تجديد كامل للواجهة الخارجية بكسوة زجاجية حديثة","يقع في شارع Bela Cintra, 986 على بُعد 50 متراً من شارع باوليستا وبجوار محطة المترو"],descricao:"يشمل مشروع التحديث الشامل طوابق مكتبية مفتوحة ومصاعد وأنظمة تكييف حديثة وبهواً فاخراً وواجهة زجاجية جديدة بالكامل. يقع على بُعد 50 متراً فقط من شارع باوليستا الشهير وبجوار المترو في قلب ساو باولو."},"KMY-017":{titulo:"بينيروس وان (Pinheiros One) — مجمع أعمال متكامل",subtitulo:"بنية متكاملة من الخدمات والمرافق مع إطلالة بانورامية ووصول مباشر إلى طريق Marginal Pinheiros",categoriaNome:"المباني المؤسسية",finalidadeNome:"المحفظة التنفيذية",precoFormatado:"عند الطلب",precoInfo:"ملكية 50% · 18 طابقاً · طوابق تصل إلى 1,710 م²",configuracao:"18 طابقاً · طوابق تصل إلى 1,710 م²",status:"المحفظة التنفيذية · Triple A",destaques:["المساحة القابلة للتأجير: 33,358 م² · نسبة الملكية: 50% · 18 طابقاً بمساحات تصل إلى 1,710 م²","18 طابقاً مكتبياً بإطلالة بانورامية وطابقين من الشرفات المجهزة للفعاليات","مرافق خدمية متكاملة: مطعم، مقهى، مخبز، مسرح، صالون تجميل وعربات طعام","مواقف دراجات مع غرف تبديل ملابس ومحطة غسيل سيارات","اتصال مباشر بطريق Marginal Pinheiros وشارع Francisco Morato في ساو باولو"],descricao:"يتكون من 18 طابقاً مكتبياً بمساحات تتراوح بين 1,600 و1,710 م² وإطلالة بانورامية، مع طابقين من الشرفات للفعاليات ومطعم ومقهى ومسرح ومرافق خدمية شاملة، مع وصول مباشر إلى محور Marginal Pinheiros في ساو باولو."},"KMY-018":{titulo:"ثيرا كوربوريت (Thera Corporate) — مبنى مؤسسي في بيريني",subtitulo:"مساحات تعزز الراحة والتوازن على محور Berrini و Bandeirantes",categoriaNome:"المباني المؤسسية",finalidadeNome:"المحفظة التنفيذية",precoFormatado:"عند الطلب",precoInfo:"ملكية 66% · 15 طابقاً · وحدات تبدأ من 1,032 م²",configuracao:"15 طابقاً · طوابق بوحدات تبدأ من 1,032 م²",status:"المحفظة التنفيذية · Triple A",destaques:["المساحة القابلة للتأجير: 21,047 م² · نسبة الملكية: 66% · 15 طابقاً بوحدات تبدأ من 1,032 م²","منطقة خارجية تضم مطعماً ومقهى داخلياً ومسرحاً للمؤتمرات","مواقف دراجات للمستأجرين والزوار وخدمات حصرية متكاملة","وصول مباشر إلى شارعي Luís Carlos Berrini و Bandeirantes في حي بروكلين","على بُعد دقائق معدودة من مطار كونغونهاس (Congonhas) ومحاط بأرقى الخدمات"],descricao:"يوفر مبنى Thera Corporate مساحة خارجية بمطعم ومقهى داخلي ومسرح ومرافق متكاملة تعزز بيئة العمل المتوازنة، بإجمالي مساحة قابلة للتأجير 21,047 م² موزعة على 15 طابقاً، وعلى بُعد دقائق من مطار كونغونهاس في ساو باولو."},"KMY-019":{titulo:"مستشفى مادري دي ديو (HMD) — 304 أسرّة",subtitulo:"مجمع مستشفيات حديث بمساحة 16,000 م² وسعة تشغيلية تصل إلى 304 أسرّة على طريق BR-277",categoriaNome:"المستشفيات والعيادات",finalidadeNome:"المحفظة التنفيذية",precoFormatado:"عند الطلب",precoInfo:"سعة تصل إلى 304 أسرّة · 16,000 م² · طوارئ 24 ساعة وعناية مركزة",configuracao:"حتى 304 أسرّة · 22 عيادة طبية · طوارئ 24 ساعة",status:"المحفظة التنفيذية · 304 أسرّة",destaques:["سعة تشغيلية تصل إلى 304 أسرّة في منشأة حديثة بمساحة 16,000 م²","مركز طبي وطب أسنان (22 عيادة)، طوارئ على مدار الساعة، غرف عمليات وعناية مركزة للأطفال","مختبر تحاليل طبية متكامل ومركز تشخيص إشعاعي (رنين مغناطيسي وأشعة سينية)","تغطية إقليمية واسعة تخدم المرضى من القطاع الخاص والتأمين والقطاع الحكومي ومنطقة الحدود الثلاثية","موقع استراتيجي على طريق BR-277 في ساو ميغيل دو إيغواسو (بارانا)"],descricao:"مجمع مستشفيات حديث في ساو ميغيل دو إيغواسو بولاية بارانا على طريق BR-277، مشيد على مساحة 16,000 م² بسعة تشغيلية تصل إلى 304 أسرّة، ويضم 22 عيادة وقسم طوارئ 24 ساعة وغرف عمليات وعناية مركزة ومركز أشعة ورنين مغناطيسي."},"KMY-001":{titulo:"فندق بوتيك فاخر بإطلالة بحرية — 48 جناحاً فاخراً",categoriaNome:"الفنادق والمنتجعات",finalidadeNome:"بيع أصل فندقي",precoFormatado:"R$ 38,500,000",status:"حصري لدى KMY Prime",destaques:["مسبح لا متناهي (Infinity) مطل على المحيط","مطعم راقٍ للمأكولات المعاصرة وبار شاطئي","منتجع صحي (Spa) متكامل الخدمات","متوسط نسبة إشغال سنوي: 78%","أرباح EBITDA سنوية مدققة وحوكمة مؤسسية راسخة"],descricao:"فرصة استثمارية استثنائية في قطاع الضيافة الفاخرة على أرقى سواحل ساو باولو، يضم الفندق 48 جناحاً بمعايير عالمية وبنية متكاملة للفعاليات والسياحة الفاخرة."},"KMY-002":{titulo:"منتجع بيئي فاخر على البحر — 110 فلل خاصة",categoriaNome:"الفنادق والمنتجعات",finalidadeNome:"بيع أو إيجار استثماري",precoFormatado:"R$ 95,000,000",status:"أصل بمعيار Triple A",destaques:["واجهة شاطئية شبه خاصة بطول 400 متر","منتزه مائي بمسابح عضوية متصلة","مهبط طائرات هليكوبتر معتمد للإقلاع الليلي والنهاري","مركز مؤتمرات وفعاليات يتسع لـ 500 ضيف","متاح للتأجير التجاري طويل الأمد للمجموعات الفندقية"],descricao:"أحد أبرز الأصول الفندقية في البرازيل في منطقة ترانكوسو (باهيا)، حاصل على شهادات الاستدامة البيئية مع منتجع صحي عالمي ومهبط مروحيات خاص."},"KMY-003":{titulo:"نُزُل بوتيك جبلي فاخر — 18 شاليه سويسري",categoriaNome:"النُزُل الفاخرة",finalidadeNome:"تأجير تجاري طويل الأمد",precoFormatado:"R$ 65,000 / شهرياً",precoInfo:"عقد إيجار تجاري لمدة 10 سنوات",status:"فرصة استثمارية للتأجير",destaques:["شاليهات مدفأة بالكامل مع أحواض جاكوزي ومواقد نار","قبو نبيذ تحت الأرض يتسع لـ 1,500 زجاجة","مطعم حائز على جوائز","مؤثث بالكامل ويعمل بكامل طاقته التشغيلية","تقييم 9.8 على منصات الحجز العالمية"],descricao:"تأجير تجاري لنُزُل جبلي عريق في أرقى أحياء كامبوس دو جورداو (ساو باولو)، جاهز للتشغيل الفوري بهوامش ربحية مرتفعة على مدار العام."},"KMY-004":{titulo:"نُزُل تاريخي فاخر — وسط باراتي التاريخي",categoriaNome:"النُزُل الفاخرة",finalidadeNome:"بيع أصل سياحي",precoFormatado:"R$ 22,000,000",status:"أصل تراثي مصنف",destaques:["قصر تاريخي مرمم بعناية فائقة مع أحدث وسائل الراحة","فناء داخلي منسق مع مسبح من الحجر الطبيعي","مجموعة من الأثاث العتيق والأعمال الفنية","تدفق مستمر للسياح الدوليين","إمكانية التوسع مع العقار المجاور"],descricao:"جوهرة معمارية في المركز التاريخي لمدينة باراتي المدرجة في قائمة اليونسكو، تجمع بين الأصالة التاريخية و22 جناحاً فاخراً."},"KMY-005":{titulo:"مستشفى عام ومركز جراحي متخصص",categoriaNome:"المستشفيات والعيادات",finalidadeNome:"بيع أصل طبي",precoFormatado:"R$ 145,000,000",status:"أصل طبي مؤسسي",destaques:["12 غرفة عمليات ذكية بنظام تدفق الهواء النقي","90 سريراً داخلياً تشمل 24 سرير عناية مركزة (ICU)","مركز تصوير تشخيصي متكامل (رنين مغناطيسي، أشعة مقطعية، قسطرة)","مهبط مروحيات معتمد للإسعاف الجوي","مطابق بنسبة 100% لمعايير هيئة ANVISA RDC-50"],descricao:"مجمع مستشفيات حديث مصمم لمشغلي الرعاية الصحية أو صناديق الاستثمار العقاري عبر عقود البيع وإعادة التأجير (Sale & Leaseback)، جاهز للتشغيل الفوري."},"KMY-006":{titulo:"طابق مكتبي Triple A — 1,250 م² في شارع Faria Lima",categoriaNome:"الطوابق المكتبية",finalidadeNome:"بيع أو إيجار",precoFormatado:"R$ 52,000,000",precoInfo:"خيار الإيجار متاح: R$ 380/م²",status:"Triple A — Faria Lima",destaques:["شهادتا LEED Platinum و WELL Health-Safety العالميتان","ارتفاع سقف صافي 3.10 م مع أرضيات مرتفعة عالية التحمل","واجهة زجاجية عازلة للحرارة والصوت","مولد طاقة احتياطي يغطي 100% من المساحة الخاصة","نظام مصاعد ذكي"],descricao:"مساحة مؤسسية مرموقة في أهم عنوان مالي في أمريكا اللاتينية بشارع Faria Lima في ساو باولو، مثالية للبنوك الاستثمارية والشركات متعددة الجنسيات."},"KMY-007":{titulo:"طابق مكتبي بانورامي — 720 م² في ألفافيل (Alphaville)",categoriaNome:"الطوابق المكتبية",finalidadeNome:"تأجير مؤسسي",precoFormatado:"R$ 68,000 / شهرياً",precoInfo:"رسوم المجمع والضرائب عند الطلب",status:"جاهز للإشغال الفوري (Plug & Play)",destaques:["مجهز بالكامل بالكابلات ونظام تكييف VRF Inverter","4 قاعات اجتماعات زجاجية عازلة للصوت ومسرح في الطابق الأرضي","استراحة تنفيذية مجهزة بالكامل","بجوار مركز تسوق Iguatemi Alphaville","وصول مباشر عبر طريق Castello Branco السريع"],descricao:"طابق مكتبي جاهز للتشغيل الفوري (Plug & Play) بتصميم عصري وإطلالة بانورامية على منطقة ألفافيل في ساو باولو."},"KMY-008":{titulo:"متجر رئيسي فاخر (Flagship) — 380 م² في شارع Oscar Freire",categoriaNome:"المتاجر والمعارض",finalidadeNome:"بيع عقار تجاري",precoFormatado:"R$ 28,000,000",precoInfo:"متاح أيضاً للإيجار: R$ 130,000/شهرياً",status:"زاوية تجارية أيقونية",destaques:["واجهة عرض زجاجية بطول 14 متراً بإطارات ذهبية","أرضيات من رخام الترافرتين الروماني وإضاءة معمارية متكاملة","حركة مشاة عالية القوة الشرائية في قلب حي Jardins","طابق سفلي مجهز بخزنة محصنة وصالة لكبار الشخصيات (VIP)","جاهز لتدشين المتجر الرئيسي لأرقى العلامات التجارية العالمية"],descricao:"عنوان أسطوري في منطقة التسوق الفاخر بمدينة ساو باولو، مثالي لدور المجوهرات والأزياء الراقية والعلامات العالمية."},"KMY-009":{titulo:"مجمع Parque das Acácias السكني — حزمة من 48 وحدة سكنية",categoriaNome:"المجمعات السكنية",finalidadeNome:"بيع بالكامل للمستثمرين",precoFormatado:"R$ 10,800,000",precoInfo:"ما يعادل R$ 225,000 لكل وحدة",status:"بيع حزمة استثمارية",destaques:["48 شقة بغرفتي نوم (48 م² إلى 52 م²) مع شرفة","مجمع مغلق بحراسة 24 ساعة وملعب رياضي وصالة مناسبات","عائد إيجاري صافٍ متوقع: 0.68% شهرياً","على بُعد 800 متر من محطة القطار الأحادي المستقبلية","وثائق وتراخيص إشغال معتمدة بنسبة 100%"],descricao:"فرصة متميزة لصناديق الدخل العقاري والمستثمرين للاستحواذ على حزمة وحدات سكنية جاهزة للتأجير بسيولة عالية وتدفق نقدي مستقر."},"KMY-010":{titulo:"مركز تسوق (Shopping Center) — متاجر وسينما",subtitulo:"أصل تجاري راسخ بمساحة قابلة للتأجير 32,500 م² و180 متجراً و5 متاجر رئيسية",categoriaNome:"مراكز التسوق",finalidadeNome:"بيع أصل تجاري",precoFormatado:"R$ 390,000,000.00",precoInfo:"المساحة القابلة للتأجير 32,500 م² · 180 متجراً · 5 متاجر كبرى · 1,900 موقف سيارة",configuracao:"180 متجراً · 5 متاجر رئيسية (Anchors)",status:"أصل دخل مؤسسي",destaques:["إجمالي المساحة القابلة للتأجير (ABL): 32,500 م²","مزيج تجاري متكامل يضم 180 متجراً و5 متاجر رئيسية كبرى","مجمع سينما حديث وساحة مطاعم وخدمات واسعة","مواقف سيارات منظمة تتسع لـ 1,900 سيارة","موقع استراتيجي في ساو باولو (SP) بعقود إيجار مضمونة وطويلة الأجل"],descricao:"أصل استثماري مدر للدخل من الدرجة الأولى في مدينة ساو باولو (SP). مركز تسوق متكامل بمساحة قابلة للتأجير تبلغ 32,500 م²، يضم 180 متجراً و5 متاجر رئيسية ومجمع سينما و1,900 موقف للسيارات، مما يوفر عوائد مستقرة وكثافة زوار عالية."}},Sl=co.map(i=>({...i,...vl[i.id]||{}})),Ml=co.map(i=>({...i,...xl[i.id]||{}}));/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uo="160",El=0,Po=1,yl=2,hs=1,Al=2,Zt=3,fi=0,At=1,Qt=2,di=0,$i=1,ja=2,Io=3,Do=4,bl=5,Ei=100,Tl=101,Cl=102,No=103,Uo=104,wl=200,Rl=201,Ll=202,Pl=203,Ka=204,Ja=205,Il=206,Dl=207,Nl=208,Ul=209,Fl=210,Ol=211,Bl=212,zl=213,Hl=214,Gl=0,Vl=1,kl=2,Kn=3,Wl=4,ql=5,Xl=6,Yl=7,fs=0,$l=1,jl=2,ui=0,Kl=1,Jl=2,Zl=3,Ql=4,ec=5,tc=6,ps=300,Ji=301,Zi=302,Za=303,Qa=304,aa=306,eo=1e3,Gt=1001,to=1002,Mt=1003,Fo=1004,fa=1005,Dt=1006,ic=1007,mn=1008,hi=1009,nc=1010,ac=1011,ho=1012,ms=1013,li=1014,ci=1015,gn=1016,gs=1017,_s=1018,Ai=1020,oc=1021,Vt=1023,rc=1024,sc=1025,bi=1026,Qi=1027,lc=1028,vs=1029,cc=1030,xs=1031,Ss=1033,pa=33776,ma=33777,ga=33778,_a=33779,Oo=35840,Bo=35841,zo=35842,Ho=35843,Ms=36196,Go=37492,Vo=37496,ko=37808,Wo=37809,qo=37810,Xo=37811,Yo=37812,$o=37813,jo=37814,Ko=37815,Jo=37816,Zo=37817,Qo=37818,er=37819,tr=37820,ir=37821,va=36492,nr=36494,ar=36495,dc=36283,or=36284,rr=36285,sr=36286,Es=3e3,Ti=3001,uc=3200,hc=3201,ys=0,fc=1,Nt="",ft="srgb",ti="srgb-linear",fo="display-p3",oa="display-p3-linear",Jn="linear",Je="srgb",Zn="rec709",Qn="p3",Li=7680,lr=519,pc=512,mc=513,gc=514,As=515,_c=516,vc=517,xc=518,Sc=519,cr=35044,dr="300 es",io=1035,ei=2e3,ea=2001;class tn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let o=0,s=a.length;o<s;o++)a[o].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xa=Math.PI/180,no=180/Math.PI;function _n(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]).toLowerCase()}function yt(i,e,t){return Math.max(e,Math.min(t,i))}function Mc(i,e){return(i%e+e)%e}function Sa(i,e,t){return(1-t)*i+t*e}function ur(i){return(i&i-1)===0&&i!==0}function ao(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*a+e.x,this.y=o*a+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,a,o,s,r,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,s,r,l,c)}set(e,t,n,a,o,s,r,l,c){const u=this.elements;return u[0]=e,u[1]=a,u[2]=r,u[3]=t,u[4]=o,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,s=n[0],r=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],m=n[5],g=n[8],_=a[0],p=a[3],d=a[6],A=a[1],S=a[4],b=a[7],P=a[2],T=a[5],C=a[8];return o[0]=s*_+r*A+l*P,o[3]=s*p+r*S+l*T,o[6]=s*d+r*b+l*C,o[1]=c*_+u*A+f*P,o[4]=c*p+u*S+f*T,o[7]=c*d+u*b+f*C,o[2]=h*_+m*A+g*P,o[5]=h*p+m*S+g*T,o[8]=h*d+m*b+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],s=e[4],r=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*r*c-n*o*u+n*r*l+a*o*c-a*s*l}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],s=e[4],r=e[5],l=e[6],c=e[7],u=e[8],f=u*s-r*c,h=r*l-u*o,m=c*o-s*l,g=t*f+n*h+a*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(a*c-u*n)*_,e[2]=(r*n-a*s)*_,e[3]=h*_,e[4]=(u*t-a*l)*_,e[5]=(a*o-r*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(s*t-n*o)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,o,s,r){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*r)+s+e,-a*c,a*l,-a*(-c*s+l*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(Ma.makeScale(e,t)),this}rotate(e){return this.premultiply(Ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ma=new Ge;function bs(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ta(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ec(){const i=ta("canvas");return i.style.display="block",i}const hr={};function fn(i){i in hr||(hr[i]=!0,console.warn(i))}const fr=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pr=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yn={[ti]:{transfer:Jn,primaries:Zn,toReference:i=>i,fromReference:i=>i},[ft]:{transfer:Je,primaries:Zn,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[oa]:{transfer:Jn,primaries:Qn,toReference:i=>i.applyMatrix3(pr),fromReference:i=>i.applyMatrix3(fr)},[fo]:{transfer:Je,primaries:Qn,toReference:i=>i.convertSRGBToLinear().applyMatrix3(pr),fromReference:i=>i.applyMatrix3(fr).convertLinearToSRGB()}},yc=new Set([ti,oa]),Ye={enabled:!0,_workingColorSpace:ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!yc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=yn[e].toReference,a=yn[t].fromReference;return a(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return yn[i].primaries},getTransfer:function(i){return i===Nt?Jn:yn[i].transfer}};function ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ea(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Pi;class Ts{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pi===void 0&&(Pi=ta("canvas")),Pi.width=e.width,Pi.height=e.height;const n=Pi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ta("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),o=a.data;for(let s=0;s<o.length;s++)o[s]=ji(o[s]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ji(t[n]/255)*255):t[n]=ji(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ac=0;class Cs{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=_n(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let s=0,r=a.length;s<r;s++)a[s].isDataTexture?o.push(ya(a[s].image)):o.push(ya(a[s]))}else o=ya(a);n.url=o}return t||(e.images[this.uuid]=n),n}}function ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ts.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bc=0;class Rt extends tn{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Gt,a=Gt,o=Dt,s=mn,r=Vt,l=hi,c=Rt.DEFAULT_ANISOTROPY,u=Nt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=_n(),this.name="",this.source=new Cs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(fn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ti?ft:Nt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ps)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eo:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case to:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eo:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case to:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ft?Ti:Es}set encoding(e){fn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ti?ft:Nt}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=ps;Rt.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,n=0,a=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*a+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*a+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*a+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,o;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,b=(m+1)/2,P=(d+1)/2,T=(u+h)/4,C=(f+_)/4,Y=(g+p)/4;return S>b&&S>P?S<.01?(n=0,a=.707106781,o=.707106781):(n=Math.sqrt(S),a=T/n,o=C/n):b>P?b<.01?(n=.707106781,a=0,o=.707106781):(a=Math.sqrt(b),n=T/a,o=Y/a):P<.01?(n=.707106781,a=.707106781,o=0):(o=Math.sqrt(P),n=C/o,a=Y/o),this.set(n,a,o,t),this}let A=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(p-g)/A,this.y=(f-_)/A,this.z=(h-u)/A,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tc extends tn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const a={width:e,height:t,depth:1};n.encoding!==void 0&&(fn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ti?ft:Nt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Rt(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends Tc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ws extends Rt{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cc extends Rt{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vn{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,o,s,r){let l=n[a+0],c=n[a+1],u=n[a+2],f=n[a+3];const h=o[s+0],m=o[s+1],g=o[s+2],_=o[s+3];if(r===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(r===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==m||u!==g){let p=1-r;const d=l*h+c*m+u*g+f*_,A=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const P=Math.sqrt(S),T=Math.atan2(P,d*A);p=Math.sin(p*T)/P,r=Math.sin(r*T)/P}const b=r*A;if(l=l*p+h*b,c=c*p+m*b,u=u*p+g*b,f=f*p+_*b,p===1-r){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,a,o,s){const r=n[a],l=n[a+1],c=n[a+2],u=n[a+3],f=o[s],h=o[s+1],m=o[s+2],g=o[s+3];return e[t]=r*g+u*f+l*m-c*h,e[t+1]=l*g+u*h+c*f-r*m,e[t+2]=c*g+u*m+r*h-l*f,e[t+3]=u*g-r*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,o=e._z,s=e._order,r=Math.cos,l=Math.sin,c=r(n/2),u=r(a/2),f=r(o/2),h=l(n/2),m=l(a/2),g=l(o/2);switch(s){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],o=t[8],s=t[1],r=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+r+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(o-c)*m,this._z=(s-a)*m}else if(n>r&&n>f){const m=2*Math.sqrt(1+n-r-f);this._w=(u-l)/m,this._x=.25*m,this._y=(a+s)/m,this._z=(o+c)/m}else if(r>f){const m=2*Math.sqrt(1+r-n-f);this._w=(o-c)/m,this._x=(a+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-r);this._w=(s-a)/m,this._x=(o+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,o=e._z,s=e._w,r=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*r+a*c-o*l,this._y=a*u+s*l+o*r-n*c,this._z=o*u+s*c+n*l-a*r,this._w=s*u-n*r-a*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,a=this._y,o=this._z,s=this._w;let r=s*e._w+n*e._x+a*e._y+o*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=s,this._x=n,this._y=a,this._z=o,this;const l=1-r*r;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*a+t*this._y,this._z=m*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,r),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=s*f+this._w*h,this._x=n*f+this._x*h,this._y=a*f+this._y*h,this._z=o*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),a=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(a),n*Math.sin(o),n*Math.cos(o),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*a,this.y=o[1]*t+o[4]*n+o[7]*a,this.z=o[2]*t+o[5]*n+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*a+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*a+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*a+o[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,o=e.x,s=e.y,r=e.z,l=e.w,c=2*(s*a-r*n),u=2*(r*t-o*a),f=2*(o*n-s*t);return this.x=t+l*c+s*f-r*u,this.y=n+l*u+r*c-o*f,this.z=a+l*f+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*a,this.y=o[1]*t+o[5]*n+o[9]*a,this.z=o[2]*t+o[6]*n+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,o=e.z,s=t.x,r=t.y,l=t.z;return this.x=a*l-o*r,this.y=o*s-n*l,this.z=n*r-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Aa.copy(this).projectOnVector(e),this.sub(Aa)}reflect(e){return this.sub(Aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Aa=new L,mr=new vn;class xn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ot.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ot.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ot.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,r=o.count;s<r;s++)e.isMesh===!0?e.getVertexPosition(s,Ot):Ot.fromBufferAttribute(o,s),Ot.applyMatrix4(e.matrixWorld),this.expandByPoint(Ot);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),An.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),An.copy(n.boundingBox)),An.applyMatrix4(e.matrixWorld),this.union(An)}const a=e.children;for(let o=0,s=a.length;o<s;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ot),Ot.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sn),bn.subVectors(this.max,sn),Ii.subVectors(e.a,sn),Di.subVectors(e.b,sn),Ni.subVectors(e.c,sn),ii.subVectors(Di,Ii),ni.subVectors(Ni,Di),gi.subVectors(Ii,Ni);let t=[0,-ii.z,ii.y,0,-ni.z,ni.y,0,-gi.z,gi.y,ii.z,0,-ii.x,ni.z,0,-ni.x,gi.z,0,-gi.x,-ii.y,ii.x,0,-ni.y,ni.x,0,-gi.y,gi.x,0];return!ba(t,Ii,Di,Ni,bn)||(t=[1,0,0,0,1,0,0,0,1],!ba(t,Ii,Di,Ni,bn))?!1:(Tn.crossVectors(ii,ni),t=[Tn.x,Tn.y,Tn.z],ba(t,Ii,Di,Ni,bn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ot).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ot).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yt=[new L,new L,new L,new L,new L,new L,new L,new L],Ot=new L,An=new xn,Ii=new L,Di=new L,Ni=new L,ii=new L,ni=new L,gi=new L,sn=new L,bn=new L,Tn=new L,_i=new L;function ba(i,e,t,n,a){for(let o=0,s=i.length-3;o<=s;o+=3){_i.fromArray(i,o);const r=a.x*Math.abs(_i.x)+a.y*Math.abs(_i.y)+a.z*Math.abs(_i.z),l=e.dot(_i),c=t.dot(_i),u=n.dot(_i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>r)return!1}return!0}const wc=new xn,ln=new L,Ta=new L;class Sn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wc.setFromPoints(e).getCenter(n);let a=0;for(let o=0,s=e.length;o<s;o++)a=Math.max(a,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ln.subVectors(e,this.center);const t=ln.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(ln,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ln.copy(e.center).add(Ta)),this.expandByPoint(ln.copy(e.center).sub(Ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $t=new L,Ca=new L,Cn=new L,ai=new L,wa=new L,wn=new L,Ra=new L;class po{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$t)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$t.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($t.copy(this.origin).addScaledVector(this.direction,t),$t.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){Ca.copy(e).add(t).multiplyScalar(.5),Cn.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(Ca);const o=e.distanceTo(t)*.5,s=-this.direction.dot(Cn),r=ai.dot(this.direction),l=-ai.dot(Cn),c=ai.lengthSq(),u=Math.abs(1-s*s);let f,h,m,g;if(u>0)if(f=s*l-r,h=s*r-l,g=o*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,m=f*(f+s*h+2*r)+h*(s*f+h+2*l)+c}else h=o,f=Math.max(0,-(s*h+r)),m=-f*f+h*(h+2*l)+c;else h=-o,f=Math.max(0,-(s*h+r)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-s*o+r)),h=f>0?-o:Math.min(Math.max(-o,-l),o),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-o,-l),o),m=h*(h+2*l)+c):(f=Math.max(0,-(s*o+r)),h=f>0?o:Math.min(Math.max(-o,-l),o),m=-f*f+h*(h+2*l)+c);else h=s>0?-o:o,f=Math.max(0,-(s*h+r)),m=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),a&&a.copy(Ca).addScaledVector(Cn,h),m}intersectSphere(e,t){$t.subVectors(e.center,this.origin);const n=$t.dot(this.direction),a=$t.dot($t)-n*n,o=e.radius*e.radius;if(a>o)return null;const s=Math.sqrt(o-a),r=n-s,l=n+s;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,o,s,r,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,a=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,a=(e.min.x-h.x)*c),u>=0?(o=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(o=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),n>s||o>a||((o>n||isNaN(n))&&(n=o),(s<a||isNaN(a))&&(a=s),f>=0?(r=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(r=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||r>a)||((r>n||n!==n)&&(n=r),(l<a||a!==a)&&(a=l),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,$t)!==null}intersectTriangle(e,t,n,a,o){wa.subVectors(t,e),wn.subVectors(n,e),Ra.crossVectors(wa,wn);let s=this.direction.dot(Ra),r;if(s>0){if(a)return null;r=1}else if(s<0)r=-1,s=-s;else return null;ai.subVectors(this.origin,e);const l=r*this.direction.dot(wn.crossVectors(ai,wn));if(l<0)return null;const c=r*this.direction.dot(wa.cross(ai));if(c<0||l+c>s)return null;const u=-r*ai.dot(Ra);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,a,o,s,r,l,c,u,f,h,m,g,_,p){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,s,r,l,c,u,f,h,m,g,_,p)}set(e,t,n,a,o,s,r,l,c,u,f,h,m,g,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=a,d[1]=o,d[5]=s,d[9]=r,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,a=1/Ui.setFromMatrixColumn(e,0).length(),o=1/Ui.setFromMatrixColumn(e,1).length(),s=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,o=e.z,s=Math.cos(n),r=Math.sin(n),l=Math.cos(a),c=Math.sin(a),u=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const h=s*u,m=s*f,g=r*u,_=r*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-_*c,t[9]=-r*l,t[2]=_-h*c,t[6]=g+m*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,_=c*f;t[0]=h+_*r,t[4]=g*r-m,t[8]=s*c,t[1]=s*f,t[5]=s*u,t[9]=-r,t[2]=m*r-g,t[6]=_+h*r,t[10]=s*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,_=c*f;t[0]=h-_*r,t[4]=-s*f,t[8]=g+m*r,t[1]=m+g*r,t[5]=s*u,t[9]=_-h*r,t[2]=-s*c,t[6]=r,t[10]=s*l}else if(e.order==="ZYX"){const h=s*u,m=s*f,g=r*u,_=r*f;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=m*c-g,t[2]=-c,t[6]=r*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,m=s*c,g=r*l,_=r*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+m,t[1]=f,t[5]=s*u,t[9]=-r*u,t[2]=-c*u,t[6]=m*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=s*l,m=s*c,g=r*l,_=r*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=s*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=r*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rc,e,Lc)}lookAt(e,t,n){const a=this.elements;return Tt.subVectors(e,t),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),oi.crossVectors(n,Tt),oi.lengthSq()===0&&(Math.abs(n.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),oi.crossVectors(n,Tt)),oi.normalize(),Rn.crossVectors(Tt,oi),a[0]=oi.x,a[4]=Rn.x,a[8]=Tt.x,a[1]=oi.y,a[5]=Rn.y,a[9]=Tt.y,a[2]=oi.z,a[6]=Rn.z,a[10]=Tt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,s=n[0],r=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],A=n[3],S=n[7],b=n[11],P=n[15],T=a[0],C=a[4],Y=a[8],M=a[12],y=a[1],k=a[5],W=a[9],te=a[13],R=a[2],O=a[6],G=a[10],X=a[14],z=a[3],V=a[7],q=a[11],ee=a[15];return o[0]=s*T+r*y+l*R+c*z,o[4]=s*C+r*k+l*O+c*V,o[8]=s*Y+r*W+l*G+c*q,o[12]=s*M+r*te+l*X+c*ee,o[1]=u*T+f*y+h*R+m*z,o[5]=u*C+f*k+h*O+m*V,o[9]=u*Y+f*W+h*G+m*q,o[13]=u*M+f*te+h*X+m*ee,o[2]=g*T+_*y+p*R+d*z,o[6]=g*C+_*k+p*O+d*V,o[10]=g*Y+_*W+p*G+d*q,o[14]=g*M+_*te+p*X+d*ee,o[3]=A*T+S*y+b*R+P*z,o[7]=A*C+S*k+b*O+P*V,o[11]=A*Y+S*W+b*G+P*q,o[15]=A*M+S*te+b*X+P*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],o=e[12],s=e[1],r=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],_=e[7],p=e[11],d=e[15];return g*(+o*l*f-a*c*f-o*r*h+n*c*h+a*r*m-n*l*m)+_*(+t*l*m-t*c*h+o*s*h-a*s*m+a*c*u-o*l*u)+p*(+t*c*f-t*r*m-o*s*f+n*s*m+o*r*u-n*c*u)+d*(-a*r*u-t*l*f+t*r*h+a*s*f-n*s*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],s=e[4],r=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],_=e[13],p=e[14],d=e[15],A=f*p*c-_*h*c+_*l*m-r*p*m-f*l*d+r*h*d,S=g*h*c-u*p*c-g*l*m+s*p*m+u*l*d-s*h*d,b=u*_*c-g*f*c+g*r*m-s*_*m-u*r*d+s*f*d,P=g*f*l-u*_*l-g*r*h+s*_*h+u*r*p-s*f*p,T=t*A+n*S+a*b+o*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=A*C,e[1]=(_*h*o-f*p*o-_*a*m+n*p*m+f*a*d-n*h*d)*C,e[2]=(r*p*o-_*l*o+_*a*c-n*p*c-r*a*d+n*l*d)*C,e[3]=(f*l*o-r*h*o-f*a*c+n*h*c+r*a*m-n*l*m)*C,e[4]=S*C,e[5]=(u*p*o-g*h*o+g*a*m-t*p*m-u*a*d+t*h*d)*C,e[6]=(g*l*o-s*p*o-g*a*c+t*p*c+s*a*d-t*l*d)*C,e[7]=(s*h*o-u*l*o+u*a*c-t*h*c-s*a*m+t*l*m)*C,e[8]=b*C,e[9]=(g*f*o-u*_*o-g*n*m+t*_*m+u*n*d-t*f*d)*C,e[10]=(s*_*o-g*r*o+g*n*c-t*_*c-s*n*d+t*r*d)*C,e[11]=(u*r*o-s*f*o-u*n*c+t*f*c+s*n*m-t*r*m)*C,e[12]=P*C,e[13]=(u*_*a-g*f*a+g*n*h-t*_*h-u*n*p+t*f*p)*C,e[14]=(g*r*a-s*_*a-g*n*l+t*_*l+s*n*p-t*r*p)*C,e[15]=(s*f*a-u*r*a+u*n*l-t*f*l-s*n*h+t*r*h)*C,this}scale(e){const t=this.elements,n=e.x,a=e.y,o=e.z;return t[0]*=n,t[4]*=a,t[8]*=o,t[1]*=n,t[5]*=a,t[9]*=o,t[2]*=n,t[6]*=a,t[10]*=o,t[3]*=n,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),o=1-n,s=e.x,r=e.y,l=e.z,c=o*s,u=o*r;return this.set(c*s+n,c*r-a*l,c*l+a*r,0,c*r+a*l,u*r+n,u*l-a*s,0,c*l-a*r,u*l+a*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,o,s){return this.set(1,n,o,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,o=t._x,s=t._y,r=t._z,l=t._w,c=o+o,u=s+s,f=r+r,h=o*c,m=o*u,g=o*f,_=s*u,p=s*f,d=r*f,A=l*c,S=l*u,b=l*f,P=n.x,T=n.y,C=n.z;return a[0]=(1-(_+d))*P,a[1]=(m+b)*P,a[2]=(g-S)*P,a[3]=0,a[4]=(m-b)*T,a[5]=(1-(h+d))*T,a[6]=(p+A)*T,a[7]=0,a[8]=(g+S)*C,a[9]=(p-A)*C,a[10]=(1-(h+_))*C,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;let o=Ui.set(a[0],a[1],a[2]).length();const s=Ui.set(a[4],a[5],a[6]).length(),r=Ui.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),e.x=a[12],e.y=a[13],e.z=a[14],Bt.copy(this);const c=1/o,u=1/s,f=1/r;return Bt.elements[0]*=c,Bt.elements[1]*=c,Bt.elements[2]*=c,Bt.elements[4]*=u,Bt.elements[5]*=u,Bt.elements[6]*=u,Bt.elements[8]*=f,Bt.elements[9]*=f,Bt.elements[10]*=f,t.setFromRotationMatrix(Bt),n.x=o,n.y=s,n.z=r,this}makePerspective(e,t,n,a,o,s,r=ei){const l=this.elements,c=2*o/(t-e),u=2*o/(n-a),f=(t+e)/(t-e),h=(n+a)/(n-a);let m,g;if(r===ei)m=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(r===ea)m=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,a,o,s,r=ei){const l=this.elements,c=1/(t-e),u=1/(n-a),f=1/(s-o),h=(t+e)*c,m=(n+a)*u;let g,_;if(r===ei)g=(s+o)*f,_=-2*f;else if(r===ea)g=o*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ui=new L,Bt=new at,Rc=new L(0,0,0),Lc=new L(1,1,1),oi=new L,Rn=new L,Tt=new L,gr=new at,_r=new vn;class ra{constructor(e=0,t=0,n=0,a=ra.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,o=a[0],s=a[4],r=a[8],l=a[1],c=a[5],u=a[9],f=a[2],h=a[6],m=a[10];switch(t){case"XYZ":this._y=Math.asin(yt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-yt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _r.setFromEuler(this),this.setFromQuaternion(_r,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ra.DEFAULT_ORDER="XYZ";class Rs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pc=0;const vr=new L,Fi=new vn,jt=new at,Ln=new L,cn=new L,Ic=new L,Dc=new vn,xr=new L(1,0,0),Sr=new L(0,1,0),Mr=new L(0,0,1),Nc={type:"added"},Uc={type:"removed"};class ht extends tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new L,t=new ra,n=new vn,a=new L(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new at},normalMatrix:{value:new Ge}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(xr,e)}rotateY(e){return this.rotateOnAxis(Sr,e)}rotateZ(e){return this.rotateOnAxis(Mr,e)}translateOnAxis(e,t){return vr.copy(e).applyQuaternion(this.quaternion),this.position.add(vr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xr,e)}translateY(e){return this.translateOnAxis(Sr,e)}translateZ(e){return this.translateOnAxis(Mr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ln.copy(e):Ln.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),cn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jt.lookAt(cn,Ln,this.up):jt.lookAt(Ln,cn,this.up),this.quaternion.setFromRotationMatrix(jt),a&&(jt.extractRotation(a.matrixWorld),Fi.setFromRotationMatrix(jt),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Nc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Uc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(jt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let o=0,s=a.length;o<s;o++)a[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cn,e,Ic),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cn,Dc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++){const o=t[n];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let o=0,s=a.length;o<s;o++){const r=a[o];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function o(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(o(e.materials,this.material[l]));a.material=r}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let r=0;r<this.children.length;r++)a.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];a.animations.push(o(e.animations,l))}}if(t){const r=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),f=s(e.shapes),h=s(e.skeletons),m=s(e.animations),g=s(e.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=a,n;function s(r){const l=[];for(const c in r){const u=r[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}ht.DEFAULT_UP=new L(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zt=new L,Kt=new L,La=new L,Jt=new L,Oi=new L,Bi=new L,Er=new L,Pa=new L,Ia=new L,Da=new L;let Pn=!1;class Ht{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),zt.subVectors(e,t),a.cross(zt);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,n,a,o){zt.subVectors(a,t),Kt.subVectors(n,t),La.subVectors(e,t);const s=zt.dot(zt),r=zt.dot(Kt),l=zt.dot(La),c=Kt.dot(Kt),u=Kt.dot(La),f=s*c-r*r;if(f===0)return o.set(0,0,0),null;const h=1/f,m=(c*l-r*u)*h,g=(s*u-r*l)*h;return o.set(1-m-g,g,m)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,Jt)===null?!1:Jt.x>=0&&Jt.y>=0&&Jt.x+Jt.y<=1}static getUV(e,t,n,a,o,s,r,l){return Pn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Pn=!0),this.getInterpolation(e,t,n,a,o,s,r,l)}static getInterpolation(e,t,n,a,o,s,r,l){return this.getBarycoord(e,t,n,a,Jt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Jt.x),l.addScaledVector(s,Jt.y),l.addScaledVector(r,Jt.z),l)}static isFrontFacing(e,t,n,a){return zt.subVectors(n,t),Kt.subVectors(e,t),zt.cross(Kt).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zt.subVectors(this.c,this.b),Kt.subVectors(this.a,this.b),zt.cross(Kt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,a,o){return Pn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Pn=!0),Ht.getInterpolation(e,this.a,this.b,this.c,t,n,a,o)}getInterpolation(e,t,n,a,o){return Ht.getInterpolation(e,this.a,this.b,this.c,t,n,a,o)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,o=this.c;let s,r;Oi.subVectors(a,n),Bi.subVectors(o,n),Pa.subVectors(e,n);const l=Oi.dot(Pa),c=Bi.dot(Pa);if(l<=0&&c<=0)return t.copy(n);Ia.subVectors(e,a);const u=Oi.dot(Ia),f=Bi.dot(Ia);if(u>=0&&f<=u)return t.copy(a);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Oi,s);Da.subVectors(e,o);const m=Oi.dot(Da),g=Bi.dot(Da);if(g>=0&&m<=g)return t.copy(o);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return r=c/(c-g),t.copy(n).addScaledVector(Bi,r);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return Er.subVectors(o,a),r=(f-u)/(f-u+(m-g)),t.copy(a).addScaledVector(Er,r);const d=1/(p+_+h);return s=_*d,r=h*d,t.copy(n).addScaledVector(Oi,s).addScaledVector(Bi,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ls={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},In={h:0,s:0,l:0};function Na(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,a=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,a),this}setHSL(e,t,n,a=Ye.workingColorSpace){if(e=Mc(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=Na(s,o,e+1/3),this.g=Na(s,o,e),this.b=Na(s,o,e-1/3)}return Ye.toWorkingColorSpace(this,a),this}setStyle(e,t=ft){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=a[1],r=a[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){const n=Ls[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=Ea(e.r),this.g=Ea(e.g),this.b=Ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return Ye.fromWorkingColorSpace(gt.copy(this),e),Math.round(yt(gt.r*255,0,255))*65536+Math.round(yt(gt.g*255,0,255))*256+Math.round(yt(gt.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(gt.copy(this),t);const n=gt.r,a=gt.g,o=gt.b,s=Math.max(n,a,o),r=Math.min(n,a,o);let l,c;const u=(r+s)/2;if(r===s)l=0,c=0;else{const f=s-r;switch(c=u<=.5?f/(s+r):f/(2-s-r),s){case n:l=(a-o)/f+(a<o?6:0);break;case a:l=(o-n)/f+2;break;case o:l=(n-a)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=ft){Ye.fromWorkingColorSpace(gt.copy(this),e);const t=gt.r,n=gt.g,a=gt.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(In);const n=Sa(ri.h,In.h,t),a=Sa(ri.s,In.s,t),o=Sa(ri.l,In.l,t);return this.setHSL(n,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*a,this.g=o[1]*t+o[4]*n+o[7]*a,this.b=o[2]*t+o[5]*n+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gt=new Fe;Fe.NAMES=Ls;let Fc=0;class Ri extends tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=_n(),this.name="",this.type="Material",this.blending=$i,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=Ja,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Kn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ka&&(n.blendSrc=this.blendSrc),this.blendDst!==Ja&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Kn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(o){const s=[];for(const r in o){const l=o[r];delete l.metadata,s.push(l)}return s}if(t){const o=a(e.textures),s=a(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let o=0;o!==a;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ps extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new L,Dn=new We;class Ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix3(e),this.setXY(t,Dn.x,Dn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),a=Et(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,o){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),a=Et(a,this.array),o=Et(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cr&&(e.usage=this.usage),e}}class Is extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ds extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lt extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Oc=0;const It=new at,Ua=new ht,zi=new L,Ct=new xn,dn=new xn,ut=new L;class Ft extends tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bs(e)?Ds:Is)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Ge().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return It.makeRotationFromQuaternion(e),this.applyMatrix4(It),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,n){return It.makeTranslation(e,t,n),this.applyMatrix4(It),this}scale(e,t,n){return It.makeScale(e,t,n),this.applyMatrix4(It),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=[];for(let n=0,a=e.length;n<a;n++){const o=e[n];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const o=t[n];Ct.setFromBufferAttribute(o),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const r=t[o];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(ut.addVectors(Ct.min,dn.min),Ct.expandByPoint(ut),ut.addVectors(Ct.max,dn.max),Ct.expandByPoint(ut)):(Ct.expandByPoint(dn.min),Ct.expandByPoint(dn.max))}Ct.getCenter(n);let a=0;for(let o=0,s=e.count;o<s;o++)ut.fromBufferAttribute(e,o),a=Math.max(a,n.distanceToSquared(ut));if(t)for(let o=0,s=t.length;o<s;o++){const r=t[o],l=this.morphTargetsRelative;for(let c=0,u=r.count;c<u;c++)ut.fromBufferAttribute(r,c),l&&(zi.fromBufferAttribute(e,c),ut.add(zi)),a=Math.max(a,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,a=t.position.array,o=t.normal.array,s=t.uv.array,r=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*r),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let y=0;y<r;y++)c[y]=new L,u[y]=new L;const f=new L,h=new L,m=new L,g=new We,_=new We,p=new We,d=new L,A=new L;function S(y,k,W){f.fromArray(a,y*3),h.fromArray(a,k*3),m.fromArray(a,W*3),g.fromArray(s,y*2),_.fromArray(s,k*2),p.fromArray(s,W*2),h.sub(f),m.sub(f),_.sub(g),p.sub(g);const te=1/(_.x*p.y-p.x*_.y);isFinite(te)&&(d.copy(h).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(te),A.copy(m).multiplyScalar(_.x).addScaledVector(h,-p.x).multiplyScalar(te),c[y].add(d),c[k].add(d),c[W].add(d),u[y].add(A),u[k].add(A),u[W].add(A))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let y=0,k=b.length;y<k;++y){const W=b[y],te=W.start,R=W.count;for(let O=te,G=te+R;O<G;O+=3)S(n[O+0],n[O+1],n[O+2])}const P=new L,T=new L,C=new L,Y=new L;function M(y){C.fromArray(o,y*3),Y.copy(C);const k=c[y];P.copy(k),P.sub(C.multiplyScalar(C.dot(k))).normalize(),T.crossVectors(Y,k);const te=T.dot(u[y])<0?-1:1;l[y*4]=P.x,l[y*4+1]=P.y,l[y*4+2]=P.z,l[y*4+3]=te}for(let y=0,k=b.length;y<k;++y){const W=b[y],te=W.start,R=W.count;for(let O=te,G=te+R;O<G;O+=3)M(n[O+0]),M(n[O+1]),M(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const a=new L,o=new L,s=new L,r=new L,l=new L,c=new L,u=new L,f=new L;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);a.fromBufferAttribute(t,g),o.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),u.subVectors(s,o),f.subVectors(a,o),u.cross(f),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),r.add(u),l.add(u),c.add(u),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)a.fromBufferAttribute(t,h+0),o.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,o),f.subVectors(a,o),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(r,l){const c=r.array,u=r.itemSize,f=r.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){r.isInterleavedBufferAttribute?m=l[_]*r.data.stride+r.offset:m=l[_]*u;for(let d=0;d<u;d++)h[g++]=c[m++]}return new Ut(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,n=this.index.array,a=this.attributes;for(const r in a){const l=a[r],c=e(l,n);t.setAttribute(r,c)}const o=this.morphAttributes;for(const r in o){const l=[],c=o[r];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let r=0,l=s.length;r<l;r++){const c=s[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(a[l]=u,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const a=e.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(t))}const o=e.morphAttributes;for(const c in o){const u=[],f=o[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yr=new at,vi=new po,Nn=new Sn,Ar=new L,Hi=new L,Gi=new L,Vi=new L,Fa=new L,Un=new L,Fn=new We,On=new We,Bn=new We,br=new L,Tr=new L,Cr=new L,zn=new L,Hn=new L;class qt extends ht{constructor(e=new Ft,t=new Ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=a.length;o<s;o++){const r=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const r=this.morphTargetInfluences;if(o&&r){Un.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=r[l],f=o[l];u!==0&&(Fa.fromBufferAttribute(f,e),s?Un.addScaledVector(Fa,u):Un.addScaledVector(Fa.sub(t),u))}t.add(Un)}return t}raycast(e,t){const n=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nn.copy(n.boundingSphere),Nn.applyMatrix4(o),vi.copy(e.ray).recast(e.near),!(Nn.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Nn,Ar)===null||vi.origin.distanceToSquared(Ar)>(e.far-e.near)**2))&&(yr.copy(o).invert(),vi.copy(e.ray).applyMatrix4(yr),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let a;const o=this.geometry,s=this.material,r=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,f=o.attributes.normal,h=o.groups,m=o.drawRange;if(r!==null)if(Array.isArray(s))for(let g=0,_=h.length;g<_;g++){const p=h[g],d=s[p.materialIndex],A=Math.max(p.start,m.start),S=Math.min(r.count,Math.min(p.start+p.count,m.start+m.count));for(let b=A,P=S;b<P;b+=3){const T=r.getX(b),C=r.getX(b+1),Y=r.getX(b+2);a=Gn(this,d,e,n,c,u,f,T,C,Y),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const g=Math.max(0,m.start),_=Math.min(r.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const A=r.getX(p),S=r.getX(p+1),b=r.getX(p+2);a=Gn(this,s,e,n,c,u,f,A,S,b),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=h.length;g<_;g++){const p=h[g],d=s[p.materialIndex],A=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=A,P=S;b<P;b+=3){const T=b,C=b+1,Y=b+2;a=Gn(this,d,e,n,c,u,f,T,C,Y),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const A=p,S=p+1,b=p+2;a=Gn(this,s,e,n,c,u,f,A,S,b),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function Bc(i,e,t,n,a,o,s,r){let l;if(e.side===At?l=n.intersectTriangle(s,o,a,!0,r):l=n.intersectTriangle(a,o,s,e.side===fi,r),l===null)return null;Hn.copy(r),Hn.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Hn);return c<t.near||c>t.far?null:{distance:c,point:Hn.clone(),object:i}}function Gn(i,e,t,n,a,o,s,r,l,c){i.getVertexPosition(r,Hi),i.getVertexPosition(l,Gi),i.getVertexPosition(c,Vi);const u=Bc(i,e,t,n,Hi,Gi,Vi,zn);if(u){a&&(Fn.fromBufferAttribute(a,r),On.fromBufferAttribute(a,l),Bn.fromBufferAttribute(a,c),u.uv=Ht.getInterpolation(zn,Hi,Gi,Vi,Fn,On,Bn,new We)),o&&(Fn.fromBufferAttribute(o,r),On.fromBufferAttribute(o,l),Bn.fromBufferAttribute(o,c),u.uv1=Ht.getInterpolation(zn,Hi,Gi,Vi,Fn,On,Bn,new We),u.uv2=u.uv1),s&&(br.fromBufferAttribute(s,r),Tr.fromBufferAttribute(s,l),Cr.fromBufferAttribute(s,c),u.normal=Ht.getInterpolation(zn,Hi,Gi,Vi,br,Tr,Cr,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:r,b:l,c,normal:new L,materialIndex:0};Ht.getNormal(Hi,Gi,Vi,f.normal),u.face=f}return u}class nn extends Ft{constructor(e=1,t=1,n=1,a=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:o,depthSegments:s};const r=this;a=Math.floor(a),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,s,o,0),g("z","y","x",1,-1,n,t,-e,s,o,1),g("x","z","y",1,1,e,n,t,a,s,2),g("x","z","y",1,-1,e,n,-t,a,s,3),g("x","y","z",1,-1,e,t,n,a,o,4),g("x","y","z",-1,-1,e,t,-n,a,o,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(f,2));function g(_,p,d,A,S,b,P,T,C,Y,M){const y=b/C,k=P/Y,W=b/2,te=P/2,R=T/2,O=C+1,G=Y+1;let X=0,z=0;const V=new L;for(let q=0;q<G;q++){const ee=q*k-te;for(let Z=0;Z<O;Z++){const H=Z*y-W;V[_]=H*A,V[p]=ee*S,V[d]=R,c.push(V.x,V.y,V.z),V[_]=0,V[p]=0,V[d]=T>0?1:-1,u.push(V.x,V.y,V.z),f.push(Z/C),f.push(1-q/Y),X+=1}}for(let q=0;q<Y;q++)for(let ee=0;ee<C;ee++){const Z=h+ee+O*q,H=h+ee+O*(q+1),$=h+(ee+1)+O*(q+1),se=h+(ee+1)+O*q;l.push(Z,H,se),l.push(H,$,se),z+=6}r.addGroup(m,z,M),m+=z,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function en(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function St(i){const e={};for(let t=0;t<i.length;t++){const n=en(i[t]);for(const a in n)e[a]=n[a]}return e}function zc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ns(i){return i.getRenderTarget()===null?i.outputColorSpace:Ye.workingColorSpace}const Hc={clone:en,merge:St};var Gc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gc,this.fragmentShader=Vc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=en(e.uniforms),this.uniformsGroups=zc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Us extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wt extends Us{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=no*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return no*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,a,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xa*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,o=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*a/l,t-=s.offsetY*n/c,a*=s.width/l,n*=s.height/c}const r=this.filmOffset;r!==0&&(o+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ki=-90,Wi=1;class kc extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new wt(ki,Wi,e,t);a.layers=this.layers,this.add(a);const o=new wt(ki,Wi,e,t);o.layers=this.layers,this.add(o);const s=new wt(ki,Wi,e,t);s.layers=this.layers,this.add(s);const r=new wt(ki,Wi,e,t);r.layers=this.layers,this.add(r);const l=new wt(ki,Wi,e,t);l.layers=this.layers,this.add(l);const c=new wt(ki,Wi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,o,s,r,l]=t;for(const c of t)this.remove(c);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,r,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,a),e.render(t,o),e.setRenderTarget(n,1,a),e.render(t,s),e.setRenderTarget(n,2,a),e.render(t,r),e.setRenderTarget(n,3,a),e.render(t,l),e.setRenderTarget(n,4,a),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,a),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Fs extends Rt{constructor(e,t,n,a,o,s,r,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ji,super(e,t,n,a,o,s,r,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wc extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];t.encoding!==void 0&&(fn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ti?ft:Nt),this.texture=new Fs(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new nn(5,5,5),o=new wi({name:"CubemapFromEquirect",uniforms:en(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:At,blending:di});o.uniforms.tEquirect.value=t;const s=new qt(a,o),r=t.minFilter;return t.minFilter===mn&&(t.minFilter=Dt),new kc(1,10,this).update(e,s),t.minFilter=r,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,a){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,a);e.setRenderTarget(o)}}const Oa=new L,qc=new L,Xc=new Ge;class Si{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=Oa.subVectors(n,t).cross(qc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Oa),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Xc.getNormalMatrix(e),a=this.coplanarPoint(Oa).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Sn,Vn=new L;class mo{constructor(e=new Si,t=new Si,n=new Si,a=new Si,o=new Si,s=new Si){this.planes=[e,t,n,a,o,s]}set(e,t,n,a,o,s){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(a),r[4].copy(o),r[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei){const n=this.planes,a=e.elements,o=a[0],s=a[1],r=a[2],l=a[3],c=a[4],u=a[5],f=a[6],h=a[7],m=a[8],g=a[9],_=a[10],p=a[11],d=a[12],A=a[13],S=a[14],b=a[15];if(n[0].setComponents(l-o,h-c,p-m,b-d).normalize(),n[1].setComponents(l+o,h+c,p+m,b+d).normalize(),n[2].setComponents(l+s,h+u,p+g,b+A).normalize(),n[3].setComponents(l-s,h-u,p-g,b-A).normalize(),n[4].setComponents(l-r,h-f,p-_,b-S).normalize(),t===ei)n[5].setComponents(l+r,h+f,p+_,b+S).normalize();else if(t===ea)n[5].setComponents(r,f,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(Vn.x=a.normal.x>0?e.max.x:e.min.x,Vn.y=a.normal.y>0?e.max.y:e.min.y,Vn.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Vn)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Os(){let i=null,e=!1,t=null,n=null;function a(o,s){t(o,s),n=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Yc(i,e){const t=e.isWebGL2,n=new WeakMap;function a(c,u){const f=c.array,h=c.usage,m=f.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=i.SHORT;else if(f instanceof Uint32Array)_=i.UNSIGNED_INT;else if(f instanceof Int32Array)_=i.INT;else if(f instanceof Int8Array)_=i.BYTE;else if(f instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function o(c,u,f){const h=u.array,m=u._updateRange,g=u.updateRanges;if(i.bindBuffer(f,c),m.count===-1&&g.length===0&&i.bufferSubData(f,0,h),g.length!==0){for(let _=0,p=g.length;_<p;_++){const d=g[_];t?i.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):i.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,a(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(f.buffer,c,u),f.version=c.version}}return{get:s,remove:r,update:l}}class go extends Ft{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const o=e/2,s=t/2,r=Math.floor(n),l=Math.floor(a),c=r+1,u=l+1,f=e/r,h=t/l,m=[],g=[],_=[],p=[];for(let d=0;d<u;d++){const A=d*h-s;for(let S=0;S<c;S++){const b=S*f-o;g.push(b,-A,0),_.push(0,0,1),p.push(S/r),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<r;A++){const S=A+c*d,b=A+c*(d+1),P=A+1+c*(d+1),T=A+1+c*d;m.push(S,b,T),m.push(b,P,T)}this.setIndex(m),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.widthSegments,e.heightSegments)}}var $c=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jc=`#ifdef USE_ALPHAHASH
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
#endif`,Kc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Qc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ed=`#ifdef USE_AOMAP
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
#endif`,td=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,id=`#ifdef USE_BATCHING
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
#endif`,nd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sd=`#ifdef USE_IRIDESCENCE
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
#endif`,ld=`#ifdef USE_BUMPMAP
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
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_d=`#define PI 3.141592653589793
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
} // validated`,vd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xd=`vec3 transformedNormal = objectNormal;
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
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",bd=`
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
}`,Td=`#ifdef USE_ENVMAP
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
#endif`,Cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wd=`#ifdef USE_ENVMAP
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
#endif`,Rd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
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
#endif`,Pd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Id=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ud=`#ifdef USE_GRADIENTMAP
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
}`,Fd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Od=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hd=`uniform bool receiveShadow;
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
#endif`,Gd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xd=`PhysicalMaterial material;
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
#endif`,Yd=`struct PhysicalMaterial {
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
}`,$d=`
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
#endif`,jd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,eu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,au=`#if defined( USE_POINTS_UV )
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
#endif`,ou=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ru=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,su=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lu=`#ifdef USE_MORPHNORMALS
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
#endif`,cu=`#ifdef USE_MORPHTARGETS
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
#endif`,du=`#ifdef USE_MORPHTARGETS
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
#endif`,uu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gu=`#ifdef USE_NORMALMAP
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
#endif`,_u=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Su=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Au=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ru=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Iu=`float getShadowMask() {
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
}`,Du=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nu=`#ifdef USE_SKINNING
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
#endif`,Uu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fu=`#ifdef USE_SKINNING
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
#endif`,Ou=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gu=`#ifdef USE_TRANSMISSION
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
#endif`,Vu=`#ifdef USE_TRANSMISSION
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
#endif`,ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$u=`uniform sampler2D t2D;
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
}`,ju=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ku=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ju=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qu=`#include <common>
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
}`,eh=`#if DEPTH_PACKING == 3200
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
}`,th=`#define DISTANCE
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
}`,ih=`#define DISTANCE
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
}`,nh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ah=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oh=`uniform float scale;
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
}`,rh=`uniform vec3 diffuse;
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
}`,sh=`#include <common>
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
}`,lh=`uniform vec3 diffuse;
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
}`,ch=`#define LAMBERT
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
}`,dh=`#define LAMBERT
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
}`,uh=`#define MATCAP
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
}`,hh=`#define MATCAP
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
}`,fh=`#define NORMAL
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
}`,ph=`#define NORMAL
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
}`,mh=`#define PHONG
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
}`,gh=`#define PHONG
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
}`,_h=`#define STANDARD
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
}`,vh=`#define STANDARD
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
}`,xh=`#define TOON
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
}`,Sh=`#define TOON
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
}`,Mh=`uniform float size;
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
}`,Eh=`uniform vec3 diffuse;
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
}`,yh=`#include <common>
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
}`,Ah=`uniform vec3 color;
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
}`,bh=`uniform float rotation;
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
}`,Th=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:$c,alphahash_pars_fragment:jc,alphamap_fragment:Kc,alphamap_pars_fragment:Jc,alphatest_fragment:Zc,alphatest_pars_fragment:Qc,aomap_fragment:ed,aomap_pars_fragment:td,batching_pars_vertex:id,batching_vertex:nd,begin_vertex:ad,beginnormal_vertex:od,bsdfs:rd,iridescence_fragment:sd,bumpmap_pars_fragment:ld,clipping_planes_fragment:cd,clipping_planes_pars_fragment:dd,clipping_planes_pars_vertex:ud,clipping_planes_vertex:hd,color_fragment:fd,color_pars_fragment:pd,color_pars_vertex:md,color_vertex:gd,common:_d,cube_uv_reflection_fragment:vd,defaultnormal_vertex:xd,displacementmap_pars_vertex:Sd,displacementmap_vertex:Md,emissivemap_fragment:Ed,emissivemap_pars_fragment:yd,colorspace_fragment:Ad,colorspace_pars_fragment:bd,envmap_fragment:Td,envmap_common_pars_fragment:Cd,envmap_pars_fragment:wd,envmap_pars_vertex:Rd,envmap_physical_pars_fragment:Gd,envmap_vertex:Ld,fog_vertex:Pd,fog_pars_vertex:Id,fog_fragment:Dd,fog_pars_fragment:Nd,gradientmap_pars_fragment:Ud,lightmap_fragment:Fd,lightmap_pars_fragment:Od,lights_lambert_fragment:Bd,lights_lambert_pars_fragment:zd,lights_pars_begin:Hd,lights_toon_fragment:Vd,lights_toon_pars_fragment:kd,lights_phong_fragment:Wd,lights_phong_pars_fragment:qd,lights_physical_fragment:Xd,lights_physical_pars_fragment:Yd,lights_fragment_begin:$d,lights_fragment_maps:jd,lights_fragment_end:Kd,logdepthbuf_fragment:Jd,logdepthbuf_pars_fragment:Zd,logdepthbuf_pars_vertex:Qd,logdepthbuf_vertex:eu,map_fragment:tu,map_pars_fragment:iu,map_particle_fragment:nu,map_particle_pars_fragment:au,metalnessmap_fragment:ou,metalnessmap_pars_fragment:ru,morphcolor_vertex:su,morphnormal_vertex:lu,morphtarget_pars_vertex:cu,morphtarget_vertex:du,normal_fragment_begin:uu,normal_fragment_maps:hu,normal_pars_fragment:fu,normal_pars_vertex:pu,normal_vertex:mu,normalmap_pars_fragment:gu,clearcoat_normal_fragment_begin:_u,clearcoat_normal_fragment_maps:vu,clearcoat_pars_fragment:xu,iridescence_pars_fragment:Su,opaque_fragment:Mu,packing:Eu,premultiplied_alpha_fragment:yu,project_vertex:Au,dithering_fragment:bu,dithering_pars_fragment:Tu,roughnessmap_fragment:Cu,roughnessmap_pars_fragment:wu,shadowmap_pars_fragment:Ru,shadowmap_pars_vertex:Lu,shadowmap_vertex:Pu,shadowmask_pars_fragment:Iu,skinbase_vertex:Du,skinning_pars_vertex:Nu,skinning_vertex:Uu,skinnormal_vertex:Fu,specularmap_fragment:Ou,specularmap_pars_fragment:Bu,tonemapping_fragment:zu,tonemapping_pars_fragment:Hu,transmission_fragment:Gu,transmission_pars_fragment:Vu,uv_pars_fragment:ku,uv_pars_vertex:Wu,uv_vertex:qu,worldpos_vertex:Xu,background_vert:Yu,background_frag:$u,backgroundCube_vert:ju,backgroundCube_frag:Ku,cube_vert:Ju,cube_frag:Zu,depth_vert:Qu,depth_frag:eh,distanceRGBA_vert:th,distanceRGBA_frag:ih,equirect_vert:nh,equirect_frag:ah,linedashed_vert:oh,linedashed_frag:rh,meshbasic_vert:sh,meshbasic_frag:lh,meshlambert_vert:ch,meshlambert_frag:dh,meshmatcap_vert:uh,meshmatcap_frag:hh,meshnormal_vert:fh,meshnormal_frag:ph,meshphong_vert:mh,meshphong_frag:gh,meshphysical_vert:_h,meshphysical_frag:vh,meshtoon_vert:xh,meshtoon_frag:Sh,points_vert:Mh,points_frag:Eh,shadow_vert:yh,shadow_frag:Ah,sprite_vert:bh,sprite_frag:Th},ne={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Wt={basic:{uniforms:St([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:St([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:St([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:St([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:St([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:St([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:St([ne.points,ne.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:St([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:St([ne.common,ne.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:St([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:St([ne.sprite,ne.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:St([ne.common,ne.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:St([ne.lights,ne.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Wt.physical={uniforms:St([Wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const kn={r:0,b:0,g:0};function Ch(i,e,t,n,a,o,s){const r=new Fe(0);let l=o===!0?0:1,c,u,f=null,h=0,m=null;function g(p,d){let A=!1,S=d.isScene===!0?d.background:null;S&&S.isTexture&&(S=(d.backgroundBlurriness>0?t:e).get(S)),S===null?_(r,l):S&&S.isColor&&(_(S,1),A=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||A)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),S&&(S.isCubeTexture||S.mapping===aa)?(u===void 0&&(u=new qt(new nn(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:en(Wt.backgroundCube.uniforms),vertexShader:Wt.backgroundCube.vertexShader,fragmentShader:Wt.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Ye.getTransfer(S.colorSpace)!==Je,(f!==S||h!==S.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new qt(new go(2,2),new wi({name:"BackgroundMaterial",uniforms:en(Wt.background.uniforms),vertexShader:Wt.background.vertexShader,fragmentShader:Wt.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(S.colorSpace)!==Je,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,d){p.getRGB(kn,Ns(i)),n.buffers.color.setClear(kn.r,kn.g,kn.b,d,s)}return{getClearColor:function(){return r},setClearColor:function(p,d=1){r.set(p),l=d,_(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(r,l)},render:g}}function wh(i,e,t,n){const a=i.getParameter(i.MAX_VERTEX_ATTRIBS),o=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||o!==null,r={},l=p(null);let c=l,u=!1;function f(R,O,G,X,z){let V=!1;if(s){const q=_(X,G,O);c!==q&&(c=q,m(c.object)),V=d(R,X,G,z),V&&A(R,X,G,z)}else{const q=O.wireframe===!0;(c.geometry!==X.id||c.program!==G.id||c.wireframe!==q)&&(c.geometry=X.id,c.program=G.id,c.wireframe=q,V=!0)}z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(V||u)&&(u=!1,Y(R,O,G,X),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function h(){return n.isWebGL2?i.createVertexArray():o.createVertexArrayOES()}function m(R){return n.isWebGL2?i.bindVertexArray(R):o.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?i.deleteVertexArray(R):o.deleteVertexArrayOES(R)}function _(R,O,G){const X=G.wireframe===!0;let z=r[R.id];z===void 0&&(z={},r[R.id]=z);let V=z[O.id];V===void 0&&(V={},z[O.id]=V);let q=V[X];return q===void 0&&(q=p(h()),V[X]=q),q}function p(R){const O=[],G=[],X=[];for(let z=0;z<a;z++)O[z]=0,G[z]=0,X[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:X,object:R,attributes:{},index:null}}function d(R,O,G,X){const z=c.attributes,V=O.attributes;let q=0;const ee=G.getAttributes();for(const Z in ee)if(ee[Z].location>=0){const $=z[Z];let se=V[Z];if(se===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(se=R.instanceColor)),$===void 0||$.attribute!==se||se&&$.data!==se.data)return!0;q++}return c.attributesNum!==q||c.index!==X}function A(R,O,G,X){const z={},V=O.attributes;let q=0;const ee=G.getAttributes();for(const Z in ee)if(ee[Z].location>=0){let $=V[Z];$===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&($=R.instanceColor));const se={};se.attribute=$,$&&$.data&&(se.data=$.data),z[Z]=se,q++}c.attributes=z,c.attributesNum=q,c.index=X}function S(){const R=c.newAttributes;for(let O=0,G=R.length;O<G;O++)R[O]=0}function b(R){P(R,0)}function P(R,O){const G=c.newAttributes,X=c.enabledAttributes,z=c.attributeDivisors;G[R]=1,X[R]===0&&(i.enableVertexAttribArray(R),X[R]=1),z[R]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,O),z[R]=O)}function T(){const R=c.newAttributes,O=c.enabledAttributes;for(let G=0,X=O.length;G<X;G++)O[G]!==R[G]&&(i.disableVertexAttribArray(G),O[G]=0)}function C(R,O,G,X,z,V,q){q===!0?i.vertexAttribIPointer(R,O,G,z,V):i.vertexAttribPointer(R,O,G,X,z,V)}function Y(R,O,G,X){if(n.isWebGL2===!1&&(R.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const z=X.attributes,V=G.getAttributes(),q=O.defaultAttributeValues;for(const ee in V){const Z=V[ee];if(Z.location>=0){let H=z[ee];if(H===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(H=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(H=R.instanceColor)),H!==void 0){const $=H.normalized,se=H.itemSize,fe=t.get(H);if(fe===void 0)continue;const ge=fe.buffer,we=fe.type,Le=fe.bytesPerElement,Ee=n.isWebGL2===!0&&(we===i.INT||we===i.UNSIGNED_INT||H.gpuType===ms);if(H.isInterleavedBufferAttribute){const ke=H.data,D=ke.stride,_t=H.offset;if(ke.isInstancedInterleavedBuffer){for(let ve=0;ve<Z.locationSize;ve++)P(Z.location+ve,ke.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let ve=0;ve<Z.locationSize;ve++)b(Z.location+ve);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let ve=0;ve<Z.locationSize;ve++)C(Z.location+ve,se/Z.locationSize,we,$,D*Le,(_t+se/Z.locationSize*ve)*Le,Ee)}else{if(H.isInstancedBufferAttribute){for(let ke=0;ke<Z.locationSize;ke++)P(Z.location+ke,H.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ke=0;ke<Z.locationSize;ke++)b(Z.location+ke);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let ke=0;ke<Z.locationSize;ke++)C(Z.location+ke,se/Z.locationSize,we,$,se*Le,se/Z.locationSize*ke*Le,Ee)}}else if(q!==void 0){const $=q[ee];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(Z.location,$);break;case 3:i.vertexAttrib3fv(Z.location,$);break;case 4:i.vertexAttrib4fv(Z.location,$);break;default:i.vertexAttrib1fv(Z.location,$)}}}}T()}function M(){W();for(const R in r){const O=r[R];for(const G in O){const X=O[G];for(const z in X)g(X[z].object),delete X[z];delete O[G]}delete r[R]}}function y(R){if(r[R.id]===void 0)return;const O=r[R.id];for(const G in O){const X=O[G];for(const z in X)g(X[z].object),delete X[z];delete O[G]}delete r[R.id]}function k(R){for(const O in r){const G=r[O];if(G[R.id]===void 0)continue;const X=G[R.id];for(const z in X)g(X[z].object),delete X[z];delete G[R.id]}}function W(){te(),u=!0,c!==l&&(c=l,m(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:W,resetDefaultState:te,dispose:M,releaseStatesOfGeometry:y,releaseStatesOfProgram:k,initAttributes:S,enableAttribute:b,disableUnusedAttributes:T}}function Rh(i,e,t,n){const a=n.isWebGL2;let o;function s(u){o=u}function r(u,f){i.drawArrays(o,u,f),t.update(f,o,1)}function l(u,f,h){if(h===0)return;let m,g;if(a)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](o,u,f,h),t.update(f,o,h)}function c(u,f,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{m.multiDrawArraysWEBGL(o,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=f[_];t.update(g,o,1)}}this.setMode=s,this.render=r,this.renderInstances=l,this.renderMultiDraw=c}function Lh(i,e,t){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let r=t.precision!==void 0?t.precision:"highp";const l=o(r);l!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",l,"instead."),r=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=h>0,b=s||e.has("OES_texture_float"),P=S&&b,T=s?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:a,getMaxPrecision:o,precision:r,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:A,vertexTextures:S,floatFragmentTextures:b,floatVertexTextures:P,maxSamples:T}}function Ph(i){const e=this;let t=null,n=0,a=!1,o=!1;const s=new Si,r=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||n!==0||a;return a=h,n=f.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!a||g===null||g.length===0||o&&!p)o?u(null):c();else{const A=o?0:n,S=A*4;let b=d.clippingState||null;l.value=b,b=u(g,h,S,m);for(let P=0;P!==S;++P)b[P]=t[P];d.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,m,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,A=h.matrixWorldInverse;r.getNormalMatrix(A),(p===null||p.length<d)&&(p=new Float32Array(d));for(let S=0,b=m;S!==_;++S,b+=4)s.copy(f[S]).applyMatrix4(A,r),s.normal.toArray(p,b),p[b+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Ih(i){let e=new WeakMap;function t(s,r){return r===Za?s.mapping=Ji:r===Qa&&(s.mapping=Zi),s}function n(s){if(s&&s.isTexture){const r=s.mapping;if(r===Za||r===Qa)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Wc(l.height/2);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",a),t(c.texture,s.mapping)}else return null}}return s}function a(s){const r=s.target;r.removeEventListener("dispose",a);const l=e.get(r);l!==void 0&&(e.delete(r),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class Bs extends Us{constructor(e=-1,t=1,n=1,a=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=n-e,s=n+e,r=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,r-=u*this.view.offsetY,l=r-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xi=4,wr=[.125,.215,.35,.446,.526,.582],yi=20,Ba=new Bs,Rr=new Fe;let za=null,Ha=0,Ga=0;const Mi=(1+Math.sqrt(5))/2,qi=1/Mi,Lr=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Mi,qi),new L(0,Mi,-qi),new L(qi,0,Mi),new L(-qi,0,Mi),new L(Mi,qi,0),new L(-Mi,qi,0)];class Pr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,a=100){za=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,a,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(za,Ha,Ga),e.scissorTest=!1,Wn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),za=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:gn,format:Vt,colorSpace:ti,depthBuffer:!1},a=Ir(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ir(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dh(o)),this._blurMaterial=Nh(o,e,t)}return a}_compileMaterial(e){const t=new qt(this._lodPlanes[0],e);this._renderer.compile(t,Ba)}_sceneToCubeUV(e,t,n,a){const r=new wt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Rr),u.toneMapping=ui,u.autoClear=!1;const m=new Ps({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),g=new qt(new nn,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Rr),_=!0);for(let d=0;d<6;d++){const A=d%3;A===0?(r.up.set(0,l[d],0),r.lookAt(c[d],0,0)):A===1?(r.up.set(0,0,l[d]),r.lookAt(0,c[d],0)):(r.up.set(0,l[d],0),r.lookAt(0,0,c[d]));const S=this._cubeSize;Wn(a,A*S,d>2?S:0,S,S),u.setRenderTarget(a),_&&u.render(g,r),u.render(e,r)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===Ji||e.mapping===Zi;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nr()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dr());const o=a?this._cubemapMaterial:this._equirectMaterial,s=new qt(this._lodPlanes[0],o),r=o.uniforms;r.envMap.value=e;const l=this._cubeSize;Wn(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Ba)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=Lr[(a-1)%Lr.length];this._blur(e,a-1,a,o,s)}t.autoClear=n}_blur(e,t,n,a,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,a,"latitudinal",o),this._halfBlur(s,e,n,n,a,"longitudinal",o)}_halfBlur(e,t,n,a,o,s,r){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new qt(this._lodPlanes[a],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*yi-1),_=o/g,p=isFinite(o)?1+Math.floor(u*_):yi;p>yi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${yi}`);const d=[];let A=0;for(let C=0;C<yi;++C){const Y=C/_,M=Math.exp(-Y*Y/2);d.push(M),C===0?A+=M:C<p&&(A+=2*M)}for(let C=0;C<d.length;C++)d[C]=d[C]/A;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=s==="latitudinal",r&&(h.poleAxis.value=r);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-n;const b=this._sizeLods[a],P=3*b*(a>S-Xi?a-S+Xi:0),T=4*(this._cubeSize-b);Wn(t,P,T,3*b,2*b),l.setRenderTarget(t),l.render(f,Ba)}}function Dh(i){const e=[],t=[],n=[];let a=i;const o=i-Xi+1+wr.length;for(let s=0;s<o;s++){const r=Math.pow(2,a);t.push(r);let l=1/r;s>i-Xi?l=wr[s-i+Xi-1]:s===0&&(l=0),n.push(l);const c=1/(r-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,_=3,p=2,d=1,A=new Float32Array(_*g*m),S=new Float32Array(p*g*m),b=new Float32Array(d*g*m);for(let T=0;T<m;T++){const C=T%3*2/3-1,Y=T>2?0:-1,M=[C,Y,0,C+2/3,Y,0,C+2/3,Y+1,0,C,Y,0,C+2/3,Y+1,0,C,Y+1,0];A.set(M,_*g*T),S.set(h,p*g*T);const y=[T,T,T,T,T,T];b.set(y,d*g*T)}const P=new Ft;P.setAttribute("position",new Ut(A,_)),P.setAttribute("uv",new Ut(S,p)),P.setAttribute("faceIndex",new Ut(b,d)),e.push(P),a>Xi&&a--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ir(i,e,t){const n=new Ci(i,e,t);return n.texture.mapping=aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wn(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function Nh(i,e,t){const n=new Float32Array(yi),a=new L(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:_o(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Dr(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_o(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Nr(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function _o(){return`

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
	`}function Uh(i){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===Za||l===Qa,u=l===Ji||l===Zi;if(c||u)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let f=e.get(r);return t===null&&(t=new Pr(i)),f=c?t.fromEquirectangular(r,f):t.fromCubemap(r,f),e.set(r,f),f.texture}else{if(e.has(r))return e.get(r).texture;{const f=r.image;if(c&&f&&f.height>0||u&&f&&a(f)){t===null&&(t=new Pr(i));const h=c?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,h),r.addEventListener("dispose",o),h.texture}else return null}}}return r}function a(r){let l=0;const c=6;for(let u=0;u<c;u++)r[u]!==void 0&&l++;return l===c}function o(r){const l=r.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function Fh(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const a=t(n);return a===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function Oh(i,e,t,n){const a={},o=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)e.remove(_[p])}h.removeEventListener("dispose",s),delete a[h.id];const m=o.get(h);m&&(e.remove(m),o.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function r(f,h){return a[h.id]===!0||(h.addEventListener("dispose",s),a[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const _=m[g];for(let p=0,d=_.length;p<d;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let _=0;if(m!==null){const A=m.array;_=m.version;for(let S=0,b=A.length;S<b;S+=3){const P=A[S+0],T=A[S+1],C=A[S+2];h.push(P,T,T,C,C,P)}}else if(g!==void 0){const A=g.array;_=g.version;for(let S=0,b=A.length/3-1;S<b;S+=3){const P=S+0,T=S+1,C=S+2;h.push(P,T,T,C,C,P)}}else return;const p=new(bs(h)?Ds:Is)(h,1);p.version=_;const d=o.get(f);d&&e.remove(d),o.set(f,p)}function u(f){const h=o.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return o.get(f)}return{get:r,update:l,getWireframeAttribute:u}}function Bh(i,e,t,n){const a=n.isWebGL2;let o;function s(m){o=m}let r,l;function c(m){r=m.type,l=m.bytesPerElement}function u(m,g){i.drawElements(o,g,r,m*l),t.update(g,o,1)}function f(m,g,_){if(_===0)return;let p,d;if(a)p=i,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](o,g,r,m*l,_),t.update(g,o,_)}function h(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<_;d++)this.render(m[d]/l,g[d]);else{p.multiDrawElementsWEBGL(o,g,0,r,m,0,_);let d=0;for(let A=0;A<_;A++)d+=g[A];t.update(d,o,1)}}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function zh(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,r){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=r*(o/3);break;case i.LINES:t.lines+=r*(o/2);break;case i.LINE_STRIP:t.lines+=r*(o-1);break;case i.LINE_LOOP:t.lines+=r*o;break;case i.POINTS:t.points+=r*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function Hh(i,e){return i[0]-e[0]}function Gh(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Vh(i,e,t){const n={},a=new Float32Array(8),o=new WeakMap,s=new Ze,r=[];for(let c=0;c<8;c++)r[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=o.get(u);if(p===void 0||p.count!==_){let O=function(){te.dispose(),o.delete(u),u.removeEventListener("dispose",O)};var m=O;p!==void 0&&p.texture.dispose();const S=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],Y=u.morphAttributes.color||[];let M=0;S===!0&&(M=1),b===!0&&(M=2),P===!0&&(M=3);let y=u.attributes.position.count*M,k=1;y>e.maxTextureSize&&(k=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const W=new Float32Array(y*k*4*_),te=new ws(W,y,k,_);te.type=ci,te.needsUpdate=!0;const R=M*4;for(let G=0;G<_;G++){const X=T[G],z=C[G],V=Y[G],q=y*k*4*G;for(let ee=0;ee<X.count;ee++){const Z=ee*R;S===!0&&(s.fromBufferAttribute(X,ee),W[q+Z+0]=s.x,W[q+Z+1]=s.y,W[q+Z+2]=s.z,W[q+Z+3]=0),b===!0&&(s.fromBufferAttribute(z,ee),W[q+Z+4]=s.x,W[q+Z+5]=s.y,W[q+Z+6]=s.z,W[q+Z+7]=0),P===!0&&(s.fromBufferAttribute(V,ee),W[q+Z+8]=s.x,W[q+Z+9]=s.y,W[q+Z+10]=s.z,W[q+Z+11]=V.itemSize===4?s.w:1)}}p={count:_,texture:te,size:new We(y,k)},o.set(u,p),u.addEventListener("dispose",O)}let d=0;for(let S=0;S<h.length;S++)d+=h[S];const A=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(i,"morphTargetBaseInfluence",A),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=h===void 0?0:h.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let b=0;b<g;b++)_[b]=[b,0];n[u.id]=_}for(let b=0;b<g;b++){const P=_[b];P[0]=b,P[1]=h[b]}_.sort(Gh);for(let b=0;b<8;b++)b<g&&_[b][1]?(r[b][0]=_[b][0],r[b][1]=_[b][1]):(r[b][0]=Number.MAX_SAFE_INTEGER,r[b][1]=0);r.sort(Hh);const p=u.morphAttributes.position,d=u.morphAttributes.normal;let A=0;for(let b=0;b<8;b++){const P=r[b],T=P[0],C=P[1];T!==Number.MAX_SAFE_INTEGER&&C?(p&&u.getAttribute("morphTarget"+b)!==p[T]&&u.setAttribute("morphTarget"+b,p[T]),d&&u.getAttribute("morphNormal"+b)!==d[T]&&u.setAttribute("morphNormal"+b,d[T]),a[b]=C,A+=C):(p&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),d&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),a[b]=0)}const S=u.morphTargetsRelative?1:1-A;f.getUniforms().setValue(i,"morphTargetBaseInfluence",S),f.getUniforms().setValue(i,"morphTargetInfluences",a)}}return{update:l}}function kh(i,e,t,n){let a=new WeakMap;function o(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(a.get(f)!==c&&(e.update(f),a.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),a.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;a.get(h)!==c&&(h.update(),a.set(h,c))}return f}function s(){a=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}class zs extends Rt{constructor(e,t,n,a,o,s,r,l,c,u){if(u=u!==void 0?u:bi,u!==bi&&u!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===bi&&(n=li),n===void 0&&u===Qi&&(n=Ai),super(null,a,o,s,r,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:Mt,this.minFilter=l!==void 0?l:Mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Hs=new Rt,Gs=new zs(1,1);Gs.compareFunction=As;const Vs=new ws,ks=new Cc,Ws=new Fs,Ur=[],Fr=[],Or=new Float32Array(16),Br=new Float32Array(9),zr=new Float32Array(4);function an(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let o=Ur[a];if(o===void 0&&(o=new Float32Array(a),Ur[a]=o),e!==0){n.toArray(o,0);for(let s=1,r=0;s!==e;++s)r+=t,i[s].toArray(o,r)}return o}function st(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sa(i,e){let t=Fr[e];t===void 0&&(t=new Int32Array(e),Fr[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Wh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function qh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2fv(this.addr,e),lt(t,e)}}function Xh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;i.uniform3fv(this.addr,e),lt(t,e)}}function Yh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4fv(this.addr,e),lt(t,e)}}function $h(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(st(t,n))return;zr.set(n),i.uniformMatrix2fv(this.addr,!1,zr),lt(t,n)}}function jh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(st(t,n))return;Br.set(n),i.uniformMatrix3fv(this.addr,!1,Br),lt(t,n)}}function Kh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(st(t,n))return;Or.set(n),i.uniformMatrix4fv(this.addr,!1,Or),lt(t,n)}}function Jh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2iv(this.addr,e),lt(t,e)}}function Qh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;i.uniform3iv(this.addr,e),lt(t,e)}}function ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4iv(this.addr,e),lt(t,e)}}function tf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function nf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2uiv(this.addr,e),lt(t,e)}}function af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;i.uniform3uiv(this.addr,e),lt(t,e)}}function of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4uiv(this.addr,e),lt(t,e)}}function rf(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);const o=this.type===i.SAMPLER_2D_SHADOW?Gs:Hs;t.setTexture2D(e||o,a)}function sf(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||ks,a)}function lf(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||Ws,a)}function cf(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||Vs,a)}function df(i){switch(i){case 5126:return Wh;case 35664:return qh;case 35665:return Xh;case 35666:return Yh;case 35674:return $h;case 35675:return jh;case 35676:return Kh;case 5124:case 35670:return Jh;case 35667:case 35671:return Zh;case 35668:case 35672:return Qh;case 35669:case 35673:return ef;case 5125:return tf;case 36294:return nf;case 36295:return af;case 36296:return of;case 35678:case 36198:case 36298:case 36306:case 35682:return rf;case 35679:case 36299:case 36307:return sf;case 35680:case 36300:case 36308:case 36293:return lf;case 36289:case 36303:case 36311:case 36292:return cf}}function uf(i,e){i.uniform1fv(this.addr,e)}function hf(i,e){const t=an(e,this.size,2);i.uniform2fv(this.addr,t)}function ff(i,e){const t=an(e,this.size,3);i.uniform3fv(this.addr,t)}function pf(i,e){const t=an(e,this.size,4);i.uniform4fv(this.addr,t)}function mf(i,e){const t=an(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function gf(i,e){const t=an(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function _f(i,e){const t=an(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function vf(i,e){i.uniform1iv(this.addr,e)}function xf(i,e){i.uniform2iv(this.addr,e)}function Sf(i,e){i.uniform3iv(this.addr,e)}function Mf(i,e){i.uniform4iv(this.addr,e)}function Ef(i,e){i.uniform1uiv(this.addr,e)}function yf(i,e){i.uniform2uiv(this.addr,e)}function Af(i,e){i.uniform3uiv(this.addr,e)}function bf(i,e){i.uniform4uiv(this.addr,e)}function Tf(i,e,t){const n=this.cache,a=e.length,o=sa(t,a);st(n,o)||(i.uniform1iv(this.addr,o),lt(n,o));for(let s=0;s!==a;++s)t.setTexture2D(e[s]||Hs,o[s])}function Cf(i,e,t){const n=this.cache,a=e.length,o=sa(t,a);st(n,o)||(i.uniform1iv(this.addr,o),lt(n,o));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||ks,o[s])}function wf(i,e,t){const n=this.cache,a=e.length,o=sa(t,a);st(n,o)||(i.uniform1iv(this.addr,o),lt(n,o));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||Ws,o[s])}function Rf(i,e,t){const n=this.cache,a=e.length,o=sa(t,a);st(n,o)||(i.uniform1iv(this.addr,o),lt(n,o));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||Vs,o[s])}function Lf(i){switch(i){case 5126:return uf;case 35664:return hf;case 35665:return ff;case 35666:return pf;case 35674:return mf;case 35675:return gf;case 35676:return _f;case 5124:case 35670:return vf;case 35667:case 35671:return xf;case 35668:case 35672:return Sf;case 35669:case 35673:return Mf;case 5125:return Ef;case 36294:return yf;case 36295:return Af;case 36296:return bf;case 35678:case 36198:case 36298:case 36306:case 35682:return Tf;case 35679:case 36299:case 36307:return Cf;case 35680:case 36300:case 36308:case 36293:return wf;case 36289:case 36303:case 36311:case 36292:return Rf}}class Pf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=df(t.type)}}class If{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lf(t.type)}}class Df{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let o=0,s=a.length;o!==s;++o){const r=a[o];r.setValue(e,t[r.id],n)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function Hr(i,e){i.seq.push(e),i.map[e.id]=e}function Nf(i,e,t){const n=i.name,a=n.length;for(Va.lastIndex=0;;){const o=Va.exec(n),s=Va.lastIndex;let r=o[1];const l=o[2]==="]",c=o[3];if(l&&(r=r|0),c===void 0||c==="["&&s+2===a){Hr(t,c===void 0?new Pf(r,i,e):new If(r,i,e));break}else{let f=t.map[r];f===void 0&&(f=new Df(r),Hr(t,f)),t=f}}}class jn{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),s=e.getUniformLocation(t,o.name);Nf(o,s,this)}}setValue(e,t,n,a){const o=this.map[t];o!==void 0&&o.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let o=0,s=t.length;o!==s;++o){const r=t[o],l=n[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,o=e.length;a!==o;++a){const s=e[a];s.id in t&&n.push(s)}return n}}function Gr(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Uf=37297;let Ff=0;function Of(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=a;s<o;s++){const r=s+1;n.push(`${r===e?">":" "} ${r}: ${t[s]}`)}return n.join(`
`)}function Bf(i){const e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(i);let n;switch(e===t?n="":e===Qn&&t===Zn?n="LinearDisplayP3ToLinearSRGB":e===Zn&&t===Qn&&(n="LinearSRGBToLinearDisplayP3"),i){case ti:case oa:return[n,"LinearTransferOETF"];case ft:case fo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Vr(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(n&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+Of(i.getShaderSource(e),s)}else return a}function zf(i,e){const t=Bf(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Hf(i,e){let t;switch(e){case Kl:t="Linear";break;case Jl:t="Reinhard";break;case Zl:t="OptimizedCineon";break;case Ql:t="ACESFilmic";break;case tc:t="AgX";break;case ec:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Gf(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yi).join(`
`)}function Vf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Yi).join(`
`)}function kf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const o=i.getActiveAttrib(e,a),s=o.name;let r=1;o.type===i.FLOAT_MAT2&&(r=2),o.type===i.FLOAT_MAT3&&(r=3),o.type===i.FLOAT_MAT4&&(r=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:r}}return t}function Yi(i){return i!==""}function kr(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wr(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qf=/^[ \t]*#include +<([\w\d./]+)>/gm;function oo(i){return i.replace(qf,Yf)}const Xf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Yf(i,e){let t=Ie[e];if(t===void 0){const n=Xf.get(e);if(n!==void 0)t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return oo(t)}const $f=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qr(i){return i.replace($f,jf)}function jf(i,e,t,n){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function Xr(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Kf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hs?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Al?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zt&&(e="SHADOWMAP_TYPE_VSM"),e}function Jf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ji:case Zi:e="ENVMAP_TYPE_CUBE";break;case aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zi:e="ENVMAP_MODE_REFRACTION";break}return e}function Qf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fs:e="ENVMAP_BLENDING_MULTIPLY";break;case $l:e="ENVMAP_BLENDING_MIX";break;case jl:e="ENVMAP_BLENDING_ADD";break}return e}function ep(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function tp(i,e,t,n){const a=i.getContext(),o=t.defines;let s=t.vertexShader,r=t.fragmentShader;const l=Kf(t),c=Jf(t),u=Zf(t),f=Qf(t),h=ep(t),m=t.isWebGL2?"":Gf(t),g=Vf(t),_=kf(o),p=a.createProgram();let d,A,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Yi).join(`
`),d.length>0&&(d+=`
`),A=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Yi).join(`
`),A.length>0&&(A+=`
`)):(d=[Xr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),A=[m,Xr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?Ie.tonemapping_pars_fragment:"",t.toneMapping!==ui?Hf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,zf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yi).join(`
`)),s=oo(s),s=kr(s,t),s=Wr(s,t),r=oo(r),r=kr(r,t),r=Wr(r,t),s=qr(s),r=qr(r),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,A=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===dr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const b=S+d+s,P=S+A+r,T=Gr(a,a.VERTEX_SHADER,b),C=Gr(a,a.FRAGMENT_SHADER,P);a.attachShader(p,T),a.attachShader(p,C),t.index0AttributeName!==void 0?a.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(p,0,"position"),a.linkProgram(p);function Y(W){if(i.debug.checkShaderErrors){const te=a.getProgramInfoLog(p).trim(),R=a.getShaderInfoLog(T).trim(),O=a.getShaderInfoLog(C).trim();let G=!0,X=!0;if(a.getProgramParameter(p,a.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,p,T,C);else{const z=Vr(a,T,"vertex"),V=Vr(a,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(p,a.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+z+`
`+V)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(R===""||O==="")&&(X=!1);X&&(W.diagnostics={runnable:G,programLog:te,vertexShader:{log:R,prefix:d},fragmentShader:{log:O,prefix:A}})}a.deleteShader(T),a.deleteShader(C),M=new jn(a,p),y=Wf(a,p)}let M;this.getUniforms=function(){return M===void 0&&Y(this),M};let y;this.getAttributes=function(){return y===void 0&&Y(this),y};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=a.getProgramParameter(p,Uf)),k},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ff++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=C,this}let ip=0;class np{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ap(e),t.set(e,n)),n}}class ap{constructor(e){this.id=ip++,this.code=e,this.usedTimes=0}}function op(i,e,t,n,a,o,s){const r=new Rs,l=new np,c=[],u=a.isWebGL2,f=a.logarithmicDepthBuffer,h=a.vertexTextures;let m=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,y,k,W,te){const R=W.fog,O=te.geometry,G=M.isMeshStandardMaterial?W.environment:null,X=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),z=X&&X.mapping===aa?X.image.height:null,V=g[M.type];M.precision!==null&&(m=a.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ee=q!==void 0?q.length:0;let Z=0;O.morphAttributes.position!==void 0&&(Z=1),O.morphAttributes.normal!==void 0&&(Z=2),O.morphAttributes.color!==void 0&&(Z=3);let H,$,se,fe;if(V){const vt=Wt[V];H=vt.vertexShader,$=vt.fragmentShader}else H=M.vertexShader,$=M.fragmentShader,l.update(M),se=l.getVertexShaderID(M),fe=l.getFragmentShaderID(M);const ge=i.getRenderTarget(),we=te.isInstancedMesh===!0,Le=te.isBatchedMesh===!0,Ee=!!M.map,ke=!!M.matcap,D=!!X,_t=!!M.aoMap,ve=!!M.lightMap,Te=!!M.bumpMap,he=!!M.normalMap,Qe=!!M.displacementMap,De=!!M.emissiveMap,E=!!M.metalnessMap,v=!!M.roughnessMap,U=M.anisotropy>0,J=M.clearcoat>0,K=M.iridescence>0,Q=M.sheen>0,pe=M.transmission>0,re=U&&!!M.anisotropyMap,ce=J&&!!M.clearcoatMap,Me=J&&!!M.clearcoatNormalMap,Ne=J&&!!M.clearcoatRoughnessMap,j=K&&!!M.iridescenceMap,Xe=K&&!!M.iridescenceThicknessMap,Ve=Q&&!!M.sheenColorMap,be=Q&&!!M.sheenRoughnessMap,_e=!!M.specularMap,de=!!M.specularColorMap,Pe=!!M.specularIntensityMap,qe=pe&&!!M.transmissionMap,tt=pe&&!!M.thicknessMap,Oe=!!M.gradientMap,ie=!!M.alphaMap,w=M.alphaTest>0,ae=!!M.alphaHash,oe=!!M.extensions,ye=!!O.attributes.uv1,xe=!!O.attributes.uv2,$e=!!O.attributes.uv3;let je=ui;return M.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(je=i.toneMapping),{isWebGL2:u,shaderID:V,shaderType:M.type,shaderName:M.name,vertexShader:H,fragmentShader:$,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Le,instancing:we,instancingColor:we&&te.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:ti,map:Ee,matcap:ke,envMap:D,envMapMode:D&&X.mapping,envMapCubeUVHeight:z,aoMap:_t,lightMap:ve,bumpMap:Te,normalMap:he,displacementMap:h&&Qe,emissiveMap:De,normalMapObjectSpace:he&&M.normalMapType===fc,normalMapTangentSpace:he&&M.normalMapType===ys,metalnessMap:E,roughnessMap:v,anisotropy:U,anisotropyMap:re,clearcoat:J,clearcoatMap:ce,clearcoatNormalMap:Me,clearcoatRoughnessMap:Ne,iridescence:K,iridescenceMap:j,iridescenceThicknessMap:Xe,sheen:Q,sheenColorMap:Ve,sheenRoughnessMap:be,specularMap:_e,specularColorMap:de,specularIntensityMap:Pe,transmission:pe,transmissionMap:qe,thicknessMap:tt,gradientMap:Oe,opaque:M.transparent===!1&&M.blending===$i,alphaMap:ie,alphaTest:w,alphaHash:ae,combine:M.combine,mapUv:Ee&&_(M.map.channel),aoMapUv:_t&&_(M.aoMap.channel),lightMapUv:ve&&_(M.lightMap.channel),bumpMapUv:Te&&_(M.bumpMap.channel),normalMapUv:he&&_(M.normalMap.channel),displacementMapUv:Qe&&_(M.displacementMap.channel),emissiveMapUv:De&&_(M.emissiveMap.channel),metalnessMapUv:E&&_(M.metalnessMap.channel),roughnessMapUv:v&&_(M.roughnessMap.channel),anisotropyMapUv:re&&_(M.anisotropyMap.channel),clearcoatMapUv:ce&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Me&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(M.sheenRoughnessMap.channel),specularMapUv:_e&&_(M.specularMap.channel),specularColorMapUv:de&&_(M.specularColorMap.channel),specularIntensityMapUv:Pe&&_(M.specularIntensityMap.channel),transmissionMapUv:qe&&_(M.transmissionMap.channel),thicknessMapUv:tt&&_(M.thicknessMap.channel),alphaMapUv:ie&&_(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(he||U),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:ye,vertexUv2s:xe,vertexUv3s:$e,pointsUvs:te.isPoints===!0&&!!O.attributes.uv&&(Ee||ie),fog:!!R,useFog:M.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:te.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Z,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:je,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ee&&M.map.isVideoTexture===!0&&Ye.getTransfer(M.map.colorSpace)===Je,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Qt,flipSided:M.side===At,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:oe&&M.extensions.derivatives===!0,extensionFragDepth:oe&&M.extensions.fragDepth===!0,extensionDrawBuffers:oe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const k in M.defines)y.push(k),y.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(A(y,M),S(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function A(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function S(M,y){r.disableAll(),y.isWebGL2&&r.enable(0),y.supportsVertexTextures&&r.enable(1),y.instancing&&r.enable(2),y.instancingColor&&r.enable(3),y.matcap&&r.enable(4),y.envMap&&r.enable(5),y.normalMapObjectSpace&&r.enable(6),y.normalMapTangentSpace&&r.enable(7),y.clearcoat&&r.enable(8),y.iridescence&&r.enable(9),y.alphaTest&&r.enable(10),y.vertexColors&&r.enable(11),y.vertexAlphas&&r.enable(12),y.vertexUv1s&&r.enable(13),y.vertexUv2s&&r.enable(14),y.vertexUv3s&&r.enable(15),y.vertexTangents&&r.enable(16),y.anisotropy&&r.enable(17),y.alphaHash&&r.enable(18),y.batching&&r.enable(19),M.push(r.mask),r.disableAll(),y.fog&&r.enable(0),y.useFog&&r.enable(1),y.flatShading&&r.enable(2),y.logarithmicDepthBuffer&&r.enable(3),y.skinning&&r.enable(4),y.morphTargets&&r.enable(5),y.morphNormals&&r.enable(6),y.morphColors&&r.enable(7),y.premultipliedAlpha&&r.enable(8),y.shadowMapEnabled&&r.enable(9),y.useLegacyLights&&r.enable(10),y.doubleSided&&r.enable(11),y.flipSided&&r.enable(12),y.useDepthPacking&&r.enable(13),y.dithering&&r.enable(14),y.transmission&&r.enable(15),y.sheen&&r.enable(16),y.opaque&&r.enable(17),y.pointsUvs&&r.enable(18),y.decodeVideoTexture&&r.enable(19),M.push(r.mask)}function b(M){const y=g[M.type];let k;if(y){const W=Wt[y];k=Hc.clone(W.uniforms)}else k=M.uniforms;return k}function P(M,y){let k;for(let W=0,te=c.length;W<te;W++){const R=c[W];if(R.cacheKey===y){k=R,++k.usedTimes;break}}return k===void 0&&(k=new tp(i,y,M,o),c.push(k)),k}function T(M){if(--M.usedTimes===0){const y=c.indexOf(M);c[y]=c[c.length-1],c.pop(),M.destroy()}}function C(M){l.remove(M)}function Y(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:b,acquireProgram:P,releaseProgram:T,releaseShaderCache:C,programs:c,dispose:Y}}function rp(){let i=new WeakMap;function e(o){let s=i.get(o);return s===void 0&&(s={},i.set(o,s)),s}function t(o){i.delete(o)}function n(o,s,r){i.get(o)[s]=r}function a(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:a}}function sp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Yr(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function $r(){const i=[];let e=0;const t=[],n=[],a=[];function o(){e=0,t.length=0,n.length=0,a.length=0}function s(f,h,m,g,_,p){let d=i[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},i[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=p),e++,d}function r(f,h,m,g,_,p){const d=s(f,h,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?a.push(d):t.push(d)}function l(f,h,m,g,_,p){const d=s(f,h,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?a.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||sp),n.length>1&&n.sort(h||Yr),a.length>1&&a.sort(h||Yr)}function u(){for(let f=e,h=i.length;f<h;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:a,init:o,push:r,unshift:l,finish:u,sort:c}}function lp(){let i=new WeakMap;function e(n,a){const o=i.get(n);let s;return o===void 0?(s=new $r,i.set(n,[s])):a>=o.length?(s=new $r,o.push(s)):s=o[a],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function cp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Fe};break;case"SpotLight":t={position:new L,direction:new L,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function dp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let up=0;function hp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function fp(i,e){const t=new cp,n=dp(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)a.probe.push(new L);const o=new L,s=new at,r=new at;function l(u,f){let h=0,m=0,g=0;for(let W=0;W<9;W++)a.probe[W].set(0,0,0);let _=0,p=0,d=0,A=0,S=0,b=0,P=0,T=0,C=0,Y=0,M=0;u.sort(hp);const y=f===!0?Math.PI:1;for(let W=0,te=u.length;W<te;W++){const R=u[W],O=R.color,G=R.intensity,X=R.distance,z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=O.r*G*y,m+=O.g*G*y,g+=O.b*G*y;else if(R.isLightProbe){for(let V=0;V<9;V++)a.probe[V].addScaledVector(R.sh.coefficients[V],G);M++}else if(R.isDirectionalLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity*y),R.castShadow){const q=R.shadow,ee=n.get(R);ee.shadowBias=q.bias,ee.shadowNormalBias=q.normalBias,ee.shadowRadius=q.radius,ee.shadowMapSize=q.mapSize,a.directionalShadow[_]=ee,a.directionalShadowMap[_]=z,a.directionalShadowMatrix[_]=R.shadow.matrix,b++}a.directional[_]=V,_++}else if(R.isSpotLight){const V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(O).multiplyScalar(G*y),V.distance=X,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,a.spot[d]=V;const q=R.shadow;if(R.map&&(a.spotLightMap[C]=R.map,C++,q.updateMatrices(R),R.castShadow&&Y++),a.spotLightMatrix[d]=q.matrix,R.castShadow){const ee=n.get(R);ee.shadowBias=q.bias,ee.shadowNormalBias=q.normalBias,ee.shadowRadius=q.radius,ee.shadowMapSize=q.mapSize,a.spotShadow[d]=ee,a.spotShadowMap[d]=z,T++}d++}else if(R.isRectAreaLight){const V=t.get(R);V.color.copy(O).multiplyScalar(G),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),a.rectArea[A]=V,A++}else if(R.isPointLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity*y),V.distance=R.distance,V.decay=R.decay,R.castShadow){const q=R.shadow,ee=n.get(R);ee.shadowBias=q.bias,ee.shadowNormalBias=q.normalBias,ee.shadowRadius=q.radius,ee.shadowMapSize=q.mapSize,ee.shadowCameraNear=q.camera.near,ee.shadowCameraFar=q.camera.far,a.pointShadow[p]=ee,a.pointShadowMap[p]=z,a.pointShadowMatrix[p]=R.shadow.matrix,P++}a.point[p]=V,p++}else if(R.isHemisphereLight){const V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(G*y),V.groundColor.copy(R.groundColor).multiplyScalar(G*y),a.hemi[S]=V,S++}}A>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ne.LTC_FLOAT_1,a.rectAreaLTC2=ne.LTC_FLOAT_2):(a.rectAreaLTC1=ne.LTC_HALF_1,a.rectAreaLTC2=ne.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ne.LTC_FLOAT_1,a.rectAreaLTC2=ne.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=ne.LTC_HALF_1,a.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=h,a.ambient[1]=m,a.ambient[2]=g;const k=a.hash;(k.directionalLength!==_||k.pointLength!==p||k.spotLength!==d||k.rectAreaLength!==A||k.hemiLength!==S||k.numDirectionalShadows!==b||k.numPointShadows!==P||k.numSpotShadows!==T||k.numSpotMaps!==C||k.numLightProbes!==M)&&(a.directional.length=_,a.spot.length=d,a.rectArea.length=A,a.point.length=p,a.hemi.length=S,a.directionalShadow.length=b,a.directionalShadowMap.length=b,a.pointShadow.length=P,a.pointShadowMap.length=P,a.spotShadow.length=T,a.spotShadowMap.length=T,a.directionalShadowMatrix.length=b,a.pointShadowMatrix.length=P,a.spotLightMatrix.length=T+C-Y,a.spotLightMap.length=C,a.numSpotLightShadowsWithMaps=Y,a.numLightProbes=M,k.directionalLength=_,k.pointLength=p,k.spotLength=d,k.rectAreaLength=A,k.hemiLength=S,k.numDirectionalShadows=b,k.numPointShadows=P,k.numSpotShadows=T,k.numSpotMaps=C,k.numLightProbes=M,a.version=up++)}function c(u,f){let h=0,m=0,g=0,_=0,p=0;const d=f.matrixWorldInverse;for(let A=0,S=u.length;A<S;A++){const b=u[A];if(b.isDirectionalLight){const P=a.directional[h];P.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(d),h++}else if(b.isSpotLight){const P=a.spot[g];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(d),g++}else if(b.isRectAreaLight){const P=a.rectArea[_];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(d),r.identity(),s.copy(b.matrixWorld),s.premultiply(d),r.extractRotation(s),P.halfWidth.set(b.width*.5,0,0),P.halfHeight.set(0,b.height*.5,0),P.halfWidth.applyMatrix4(r),P.halfHeight.applyMatrix4(r),_++}else if(b.isPointLight){const P=a.point[m];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(d),m++}else if(b.isHemisphereLight){const P=a.hemi[p];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:a}}function jr(i,e){const t=new fp(i,e),n=[],a=[];function o(){n.length=0,a.length=0}function s(f){n.push(f)}function r(f){a.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:o,state:{lightsArray:n,shadowsArray:a,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:r}}function pp(i,e){let t=new WeakMap;function n(o,s=0){const r=t.get(o);let l;return r===void 0?(l=new jr(i,e),t.set(o,[l])):s>=r.length?(l=new jr(i,e),r.push(l)):l=r[s],l}function a(){t=new WeakMap}return{get:n,dispose:a}}class mp extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gp extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _p=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vp=`uniform sampler2D shadow_pass;
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
}`;function xp(i,e,t){let n=new mo;const a=new We,o=new We,s=new Ze,r=new mp({depthPacking:hc}),l=new gp,c={},u=t.maxTextureSize,f={[fi]:At,[At]:fi,[Qt]:Qt},h=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:_p,fragmentShader:vp}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ft;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new qt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hs;let d=this.type;this.render=function(T,C,Y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),W=i.state;W.setBlending(di),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const te=d!==Zt&&this.type===Zt,R=d===Zt&&this.type!==Zt;for(let O=0,G=T.length;O<G;O++){const X=T[O],z=X.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const V=z.getFrameExtents();if(a.multiply(V),o.copy(z.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(o.x=Math.floor(u/V.x),a.x=o.x*V.x,z.mapSize.x=o.x),a.y>u&&(o.y=Math.floor(u/V.y),a.y=o.y*V.y,z.mapSize.y=o.y)),z.map===null||te===!0||R===!0){const ee=this.type!==Zt?{minFilter:Mt,magFilter:Mt}:{};z.map!==null&&z.map.dispose(),z.map=new Ci(a.x,a.y,ee),z.map.texture.name=X.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const q=z.getViewportCount();for(let ee=0;ee<q;ee++){const Z=z.getViewport(ee);s.set(o.x*Z.x,o.y*Z.y,o.x*Z.z,o.y*Z.w),W.viewport(s),z.updateMatrices(X,ee),n=z.getFrustum(),b(C,Y,z.camera,X,this.type)}z.isPointLightShadow!==!0&&this.type===Zt&&A(z,Y),z.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(M,y,k)};function A(T,C){const Y=e.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ci(a.x,a.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,Y,h,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,Y,m,_,null)}function S(T,C,Y,M){let y=null;const k=Y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(k!==void 0)y=k;else if(y=Y.isPointLight===!0?l:r,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const W=y.uuid,te=C.uuid;let R=c[W];R===void 0&&(R={},c[W]=R);let O=R[te];O===void 0&&(O=y.clone(),R[te]=O,C.addEventListener("dispose",P)),y=O}if(y.visible=C.visible,y.wireframe=C.wireframe,M===Zt?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:f[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,Y.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const W=i.properties.get(y);W.light=Y}return y}function b(T,C,Y,M,y){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Zt)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld);const te=e.update(T),R=T.material;if(Array.isArray(R)){const O=te.groups;for(let G=0,X=O.length;G<X;G++){const z=O[G],V=R[z.materialIndex];if(V&&V.visible){const q=S(T,V,M,y);T.onBeforeShadow(i,T,C,Y,te,q,z),i.renderBufferDirect(Y,null,te,q,T,z),T.onAfterShadow(i,T,C,Y,te,q,z)}}}else if(R.visible){const O=S(T,R,M,y);T.onBeforeShadow(i,T,C,Y,te,O,null),i.renderBufferDirect(Y,null,te,O,T,null),T.onAfterShadow(i,T,C,Y,te,O,null)}}const W=T.children;for(let te=0,R=W.length;te<R;te++)b(W[te],C,Y,M,y)}function P(T){T.target.removeEventListener("dispose",P);for(const Y in c){const M=c[Y],y=T.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}function Sp(i,e,t){const n=t.isWebGL2;function a(){let w=!1;const ae=new Ze;let oe=null;const ye=new Ze(0,0,0,0);return{setMask:function(xe){oe!==xe&&!w&&(i.colorMask(xe,xe,xe,xe),oe=xe)},setLocked:function(xe){w=xe},setClear:function(xe,$e,je,ct,vt){vt===!0&&(xe*=ct,$e*=ct,je*=ct),ae.set(xe,$e,je,ct),ye.equals(ae)===!1&&(i.clearColor(xe,$e,je,ct),ye.copy(ae))},reset:function(){w=!1,oe=null,ye.set(-1,0,0,0)}}}function o(){let w=!1,ae=null,oe=null,ye=null;return{setTest:function(xe){xe?Le(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(xe){ae!==xe&&!w&&(i.depthMask(xe),ae=xe)},setFunc:function(xe){if(oe!==xe){switch(xe){case Gl:i.depthFunc(i.NEVER);break;case Vl:i.depthFunc(i.ALWAYS);break;case kl:i.depthFunc(i.LESS);break;case Kn:i.depthFunc(i.LEQUAL);break;case Wl:i.depthFunc(i.EQUAL);break;case ql:i.depthFunc(i.GEQUAL);break;case Xl:i.depthFunc(i.GREATER);break;case Yl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=xe}},setLocked:function(xe){w=xe},setClear:function(xe){ye!==xe&&(i.clearDepth(xe),ye=xe)},reset:function(){w=!1,ae=null,oe=null,ye=null}}}function s(){let w=!1,ae=null,oe=null,ye=null,xe=null,$e=null,je=null,ct=null,vt=null;return{setTest:function(Ke){w||(Ke?Le(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(Ke){ae!==Ke&&!w&&(i.stencilMask(Ke),ae=Ke)},setFunc:function(Ke,xt,kt){(oe!==Ke||ye!==xt||xe!==kt)&&(i.stencilFunc(Ke,xt,kt),oe=Ke,ye=xt,xe=kt)},setOp:function(Ke,xt,kt){($e!==Ke||je!==xt||ct!==kt)&&(i.stencilOp(Ke,xt,kt),$e=Ke,je=xt,ct=kt)},setLocked:function(Ke){w=Ke},setClear:function(Ke){vt!==Ke&&(i.clearStencil(Ke),vt=Ke)},reset:function(){w=!1,ae=null,oe=null,ye=null,xe=null,$e=null,je=null,ct=null,vt=null}}}const r=new a,l=new o,c=new s,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,_=[],p=null,d=!1,A=null,S=null,b=null,P=null,T=null,C=null,Y=null,M=new Fe(0,0,0),y=0,k=!1,W=null,te=null,R=null,O=null,G=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,V=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=V>=1):q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=V>=2);let ee=null,Z={};const H=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),se=new Ze().fromArray(H),fe=new Ze().fromArray($);function ge(w,ae,oe,ye){const xe=new Uint8Array(4),$e=i.createTexture();i.bindTexture(w,$e),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<oe;je++)n&&(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)?i.texImage3D(ae,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(ae+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return $e}const we={};we[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),we[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(we[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),we[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(i.DEPTH_TEST),l.setFunc(Kn),De(!1),E(Po),Le(i.CULL_FACE),he(di);function Le(w){h[w]!==!0&&(i.enable(w),h[w]=!0)}function Ee(w){h[w]!==!1&&(i.disable(w),h[w]=!1)}function ke(w,ae){return m[w]!==ae?(i.bindFramebuffer(w,ae),m[w]=ae,n&&(w===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ae),w===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ae)),!0):!1}function D(w,ae){let oe=_,ye=!1;if(w)if(oe=g.get(ae),oe===void 0&&(oe=[],g.set(ae,oe)),w.isWebGLMultipleRenderTargets){const xe=w.texture;if(oe.length!==xe.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let $e=0,je=xe.length;$e<je;$e++)oe[$e]=i.COLOR_ATTACHMENT0+$e;oe.length=xe.length,ye=!0}}else oe[0]!==i.COLOR_ATTACHMENT0&&(oe[0]=i.COLOR_ATTACHMENT0,ye=!0);else oe[0]!==i.BACK&&(oe[0]=i.BACK,ye=!0);ye&&(t.isWebGL2?i.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function _t(w){return p!==w?(i.useProgram(w),p=w,!0):!1}const ve={[Ei]:i.FUNC_ADD,[Tl]:i.FUNC_SUBTRACT,[Cl]:i.FUNC_REVERSE_SUBTRACT};if(n)ve[No]=i.MIN,ve[Uo]=i.MAX;else{const w=e.get("EXT_blend_minmax");w!==null&&(ve[No]=w.MIN_EXT,ve[Uo]=w.MAX_EXT)}const Te={[wl]:i.ZERO,[Rl]:i.ONE,[Ll]:i.SRC_COLOR,[Ka]:i.SRC_ALPHA,[Fl]:i.SRC_ALPHA_SATURATE,[Nl]:i.DST_COLOR,[Il]:i.DST_ALPHA,[Pl]:i.ONE_MINUS_SRC_COLOR,[Ja]:i.ONE_MINUS_SRC_ALPHA,[Ul]:i.ONE_MINUS_DST_COLOR,[Dl]:i.ONE_MINUS_DST_ALPHA,[Ol]:i.CONSTANT_COLOR,[Bl]:i.ONE_MINUS_CONSTANT_COLOR,[zl]:i.CONSTANT_ALPHA,[Hl]:i.ONE_MINUS_CONSTANT_ALPHA};function he(w,ae,oe,ye,xe,$e,je,ct,vt,Ke){if(w===di){d===!0&&(Ee(i.BLEND),d=!1);return}if(d===!1&&(Le(i.BLEND),d=!0),w!==bl){if(w!==A||Ke!==k){if((S!==Ei||T!==Ei)&&(i.blendEquation(i.FUNC_ADD),S=Ei,T=Ei),Ke)switch(w){case $i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ja:i.blendFunc(i.ONE,i.ONE);break;case Io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Do:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ja:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Do:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}b=null,P=null,C=null,Y=null,M.set(0,0,0),y=0,A=w,k=Ke}return}xe=xe||ae,$e=$e||oe,je=je||ye,(ae!==S||xe!==T)&&(i.blendEquationSeparate(ve[ae],ve[xe]),S=ae,T=xe),(oe!==b||ye!==P||$e!==C||je!==Y)&&(i.blendFuncSeparate(Te[oe],Te[ye],Te[$e],Te[je]),b=oe,P=ye,C=$e,Y=je),(ct.equals(M)===!1||vt!==y)&&(i.blendColor(ct.r,ct.g,ct.b,vt),M.copy(ct),y=vt),A=w,k=!1}function Qe(w,ae){w.side===Qt?Ee(i.CULL_FACE):Le(i.CULL_FACE);let oe=w.side===At;ae&&(oe=!oe),De(oe),w.blending===$i&&w.transparent===!1?he(di):he(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),l.setFunc(w.depthFunc),l.setTest(w.depthTest),l.setMask(w.depthWrite),r.setMask(w.colorWrite);const ye=w.stencilWrite;c.setTest(ye),ye&&(c.setMask(w.stencilWriteMask),c.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),c.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),U(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?Le(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(w){W!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),W=w)}function E(w){w!==El?(Le(i.CULL_FACE),w!==te&&(w===Po?i.cullFace(i.BACK):w===yl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),te=w}function v(w){w!==R&&(z&&i.lineWidth(w),R=w)}function U(w,ae,oe){w?(Le(i.POLYGON_OFFSET_FILL),(O!==ae||G!==oe)&&(i.polygonOffset(ae,oe),O=ae,G=oe)):Ee(i.POLYGON_OFFSET_FILL)}function J(w){w?Le(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function K(w){w===void 0&&(w=i.TEXTURE0+X-1),ee!==w&&(i.activeTexture(w),ee=w)}function Q(w,ae,oe){oe===void 0&&(ee===null?oe=i.TEXTURE0+X-1:oe=ee);let ye=Z[oe];ye===void 0&&(ye={type:void 0,texture:void 0},Z[oe]=ye),(ye.type!==w||ye.texture!==ae)&&(ee!==oe&&(i.activeTexture(oe),ee=oe),i.bindTexture(w,ae||we[w]),ye.type=w,ye.texture=ae)}function pe(){const w=Z[ee];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ce(){try{i.compressedTexImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Me(){try{i.texSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ne(){try{i.texSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function j(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ve(){try{i.texStorage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function be(){try{i.texStorage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function de(){try{i.texImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Pe(w){se.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),se.copy(w))}function qe(w){fe.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),fe.copy(w))}function tt(w,ae){let oe=f.get(ae);oe===void 0&&(oe=new WeakMap,f.set(ae,oe));let ye=oe.get(w);ye===void 0&&(ye=i.getUniformBlockIndex(ae,w.name),oe.set(w,ye))}function Oe(w,ae){const ye=f.get(ae).get(w);u.get(ae)!==ye&&(i.uniformBlockBinding(ae,ye,w.__bindingPointIndex),u.set(ae,ye))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ee=null,Z={},m={},g=new WeakMap,_=[],p=null,d=!1,A=null,S=null,b=null,P=null,T=null,C=null,Y=null,M=new Fe(0,0,0),y=0,k=!1,W=null,te=null,R=null,O=null,G=null,se.set(0,0,i.canvas.width,i.canvas.height),fe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),l.reset(),c.reset()}return{buffers:{color:r,depth:l,stencil:c},enable:Le,disable:Ee,bindFramebuffer:ke,drawBuffers:D,useProgram:_t,setBlending:he,setMaterial:Qe,setFlipSided:De,setCullFace:E,setLineWidth:v,setPolygonOffset:U,setScissorTest:J,activeTexture:K,bindTexture:Q,unbindTexture:pe,compressedTexImage2D:re,compressedTexImage3D:ce,texImage2D:_e,texImage3D:de,updateUBOMapping:tt,uniformBlockBinding:Oe,texStorage2D:Ve,texStorage3D:be,texSubImage2D:Me,texSubImage3D:Ne,compressedTexSubImage2D:j,compressedTexSubImage3D:Xe,scissor:Pe,viewport:qe,reset:ie}}function Mp(i,e,t,n,a,o,s){const r=a.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return m?new OffscreenCanvas(E,v):ta("canvas")}function _(E,v,U,J){let K=1;if((E.width>J||E.height>J)&&(K=J/Math.max(E.width,E.height)),K<1||v===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const Q=v?ao:Math.floor,pe=Q(K*E.width),re=Q(K*E.height);f===void 0&&(f=g(pe,re));const ce=U?g(pe,re):f;return ce.width=pe,ce.height=re,ce.getContext("2d").drawImage(E,0,0,pe,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+pe+"x"+re+")."),ce}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function p(E){return ur(E.width)&&ur(E.height)}function d(E){return r?!1:E.wrapS!==Gt||E.wrapT!==Gt||E.minFilter!==Mt&&E.minFilter!==Dt}function A(E,v){return E.generateMipmaps&&v&&E.minFilter!==Mt&&E.minFilter!==Dt}function S(E){i.generateMipmap(E)}function b(E,v,U,J,K=!1){if(r===!1)return v;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Q=v;if(v===i.RED&&(U===i.FLOAT&&(Q=i.R32F),U===i.HALF_FLOAT&&(Q=i.R16F),U===i.UNSIGNED_BYTE&&(Q=i.R8)),v===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(Q=i.R8UI),U===i.UNSIGNED_SHORT&&(Q=i.R16UI),U===i.UNSIGNED_INT&&(Q=i.R32UI),U===i.BYTE&&(Q=i.R8I),U===i.SHORT&&(Q=i.R16I),U===i.INT&&(Q=i.R32I)),v===i.RG&&(U===i.FLOAT&&(Q=i.RG32F),U===i.HALF_FLOAT&&(Q=i.RG16F),U===i.UNSIGNED_BYTE&&(Q=i.RG8)),v===i.RGBA){const pe=K?Jn:Ye.getTransfer(J);U===i.FLOAT&&(Q=i.RGBA32F),U===i.HALF_FLOAT&&(Q=i.RGBA16F),U===i.UNSIGNED_BYTE&&(Q=pe===Je?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function P(E,v,U){return A(E,U)===!0||E.isFramebufferTexture&&E.minFilter!==Mt&&E.minFilter!==Dt?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function T(E){return E===Mt||E===Fo||E===fa?i.NEAREST:i.LINEAR}function C(E){const v=E.target;v.removeEventListener("dispose",C),M(v),v.isVideoTexture&&u.delete(v)}function Y(E){const v=E.target;v.removeEventListener("dispose",Y),k(v)}function M(E){const v=n.get(E);if(v.__webglInit===void 0)return;const U=E.source,J=h.get(U);if(J){const K=J[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(E),Object.keys(J).length===0&&h.delete(U)}n.remove(E)}function y(E){const v=n.get(E);i.deleteTexture(v.__webglTexture);const U=E.source,J=h.get(U);delete J[v.__cacheKey],s.memory.textures--}function k(E){const v=E.texture,U=n.get(E),J=n.get(v);if(J.__webglTexture!==void 0&&(i.deleteTexture(J.__webglTexture),s.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(U.__webglFramebuffer[K]))for(let Q=0;Q<U.__webglFramebuffer[K].length;Q++)i.deleteFramebuffer(U.__webglFramebuffer[K][Q]);else i.deleteFramebuffer(U.__webglFramebuffer[K]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[K])}else{if(Array.isArray(U.__webglFramebuffer))for(let K=0;K<U.__webglFramebuffer.length;K++)i.deleteFramebuffer(U.__webglFramebuffer[K]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let K=0;K<U.__webglColorRenderbuffer.length;K++)U.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[K]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let K=0,Q=v.length;K<Q;K++){const pe=n.get(v[K]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),s.memory.textures--),n.remove(v[K])}n.remove(v),n.remove(E)}let W=0;function te(){W=0}function R(){const E=W;return E>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+a.maxTextures),W+=1,E}function O(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function G(E,v){const U=n.get(E);if(E.isVideoTexture&&Qe(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){const J=E.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(U,E,v);return}}t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+v)}function X(E,v){const U=n.get(E);if(E.version>0&&U.__version!==E.version){se(U,E,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+v)}function z(E,v){const U=n.get(E);if(E.version>0&&U.__version!==E.version){se(U,E,v);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+v)}function V(E,v){const U=n.get(E);if(E.version>0&&U.__version!==E.version){fe(U,E,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+v)}const q={[eo]:i.REPEAT,[Gt]:i.CLAMP_TO_EDGE,[to]:i.MIRRORED_REPEAT},ee={[Mt]:i.NEAREST,[Fo]:i.NEAREST_MIPMAP_NEAREST,[fa]:i.NEAREST_MIPMAP_LINEAR,[Dt]:i.LINEAR,[ic]:i.LINEAR_MIPMAP_NEAREST,[mn]:i.LINEAR_MIPMAP_LINEAR},Z={[pc]:i.NEVER,[Sc]:i.ALWAYS,[mc]:i.LESS,[As]:i.LEQUAL,[gc]:i.EQUAL,[xc]:i.GEQUAL,[_c]:i.GREATER,[vc]:i.NOTEQUAL};function H(E,v,U){if(U?(i.texParameteri(E,i.TEXTURE_WRAP_S,q[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,q[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,q[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ee[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ee[v.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==Gt||v.wrapT!==Gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,T(v.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,T(v.minFilter)),v.minFilter!==Mt&&v.minFilter!==Dt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Z[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Mt||v.minFilter!==fa&&v.minFilter!==mn||v.type===ci&&e.has("OES_texture_float_linear")===!1||r===!1&&v.type===gn&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(E,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,a.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function $(E,v){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",C));const J=v.source;let K=h.get(J);K===void 0&&(K={},h.set(J,K));const Q=O(v);if(Q!==E.__cacheKey){K[Q]===void 0&&(K[Q]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,U=!0),K[Q].usedTimes++;const pe=K[E.__cacheKey];pe!==void 0&&(K[E.__cacheKey].usedTimes--,pe.usedTimes===0&&y(v)),E.__cacheKey=Q,E.__webglTexture=K[Q].texture}return U}function se(E,v,U){let J=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=i.TEXTURE_3D);const K=$(E,v),Q=v.source;t.bindTexture(J,E.__webglTexture,i.TEXTURE0+U);const pe=n.get(Q);if(Q.version!==pe.__version||K===!0){t.activeTexture(i.TEXTURE0+U);const re=Ye.getPrimaries(Ye.workingColorSpace),ce=v.colorSpace===Nt?null:Ye.getPrimaries(v.colorSpace),Me=v.colorSpace===Nt||re===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ne=d(v)&&p(v.image)===!1;let j=_(v.image,Ne,!1,a.maxTextureSize);j=De(v,j);const Xe=p(j)||r,Ve=o.convert(v.format,v.colorSpace);let be=o.convert(v.type),_e=b(v.internalFormat,Ve,be,v.colorSpace,v.isVideoTexture);H(J,v,Xe);let de;const Pe=v.mipmaps,qe=r&&v.isVideoTexture!==!0&&_e!==Ms,tt=pe.__version===void 0||K===!0,Oe=P(v,j,Xe);if(v.isDepthTexture)_e=i.DEPTH_COMPONENT,r?v.type===ci?_e=i.DEPTH_COMPONENT32F:v.type===li?_e=i.DEPTH_COMPONENT24:v.type===Ai?_e=i.DEPTH24_STENCIL8:_e=i.DEPTH_COMPONENT16:v.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===bi&&_e===i.DEPTH_COMPONENT&&v.type!==ho&&v.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=li,be=o.convert(v.type)),v.format===Qi&&_e===i.DEPTH_COMPONENT&&(_e=i.DEPTH_STENCIL,v.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Ai,be=o.convert(v.type))),tt&&(qe?t.texStorage2D(i.TEXTURE_2D,1,_e,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,_e,j.width,j.height,0,Ve,be,null));else if(v.isDataTexture)if(Pe.length>0&&Xe){qe&&tt&&t.texStorage2D(i.TEXTURE_2D,Oe,_e,Pe[0].width,Pe[0].height);for(let ie=0,w=Pe.length;ie<w;ie++)de=Pe[ie],qe?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,de.width,de.height,Ve,be,de.data):t.texImage2D(i.TEXTURE_2D,ie,_e,de.width,de.height,0,Ve,be,de.data);v.generateMipmaps=!1}else qe?(tt&&t.texStorage2D(i.TEXTURE_2D,Oe,_e,j.width,j.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,Ve,be,j.data)):t.texImage2D(i.TEXTURE_2D,0,_e,j.width,j.height,0,Ve,be,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){qe&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,_e,Pe[0].width,Pe[0].height,j.depth);for(let ie=0,w=Pe.length;ie<w;ie++)de=Pe[ie],v.format!==Vt?Ve!==null?qe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,j.depth,Ve,de.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,_e,de.width,de.height,j.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,j.depth,Ve,be,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,_e,de.width,de.height,j.depth,0,Ve,be,de.data)}else{qe&&tt&&t.texStorage2D(i.TEXTURE_2D,Oe,_e,Pe[0].width,Pe[0].height);for(let ie=0,w=Pe.length;ie<w;ie++)de=Pe[ie],v.format!==Vt?Ve!==null?qe?t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,de.width,de.height,Ve,de.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,_e,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,de.width,de.height,Ve,be,de.data):t.texImage2D(i.TEXTURE_2D,ie,_e,de.width,de.height,0,Ve,be,de.data)}else if(v.isDataArrayTexture)qe?(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,_e,j.width,j.height,j.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Ve,be,j.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,j.width,j.height,j.depth,0,Ve,be,j.data);else if(v.isData3DTexture)qe?(tt&&t.texStorage3D(i.TEXTURE_3D,Oe,_e,j.width,j.height,j.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Ve,be,j.data)):t.texImage3D(i.TEXTURE_3D,0,_e,j.width,j.height,j.depth,0,Ve,be,j.data);else if(v.isFramebufferTexture){if(tt)if(qe)t.texStorage2D(i.TEXTURE_2D,Oe,_e,j.width,j.height);else{let ie=j.width,w=j.height;for(let ae=0;ae<Oe;ae++)t.texImage2D(i.TEXTURE_2D,ae,_e,ie,w,0,Ve,be,null),ie>>=1,w>>=1}}else if(Pe.length>0&&Xe){qe&&tt&&t.texStorage2D(i.TEXTURE_2D,Oe,_e,Pe[0].width,Pe[0].height);for(let ie=0,w=Pe.length;ie<w;ie++)de=Pe[ie],qe?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Ve,be,de):t.texImage2D(i.TEXTURE_2D,ie,_e,Ve,be,de);v.generateMipmaps=!1}else qe?(tt&&t.texStorage2D(i.TEXTURE_2D,Oe,_e,j.width,j.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ve,be,j)):t.texImage2D(i.TEXTURE_2D,0,_e,Ve,be,j);A(v,Xe)&&S(J),pe.__version=Q.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function fe(E,v,U){if(v.image.length!==6)return;const J=$(E,v),K=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+U);const Q=n.get(K);if(K.version!==Q.__version||J===!0){t.activeTexture(i.TEXTURE0+U);const pe=Ye.getPrimaries(Ye.workingColorSpace),re=v.colorSpace===Nt?null:Ye.getPrimaries(v.colorSpace),ce=v.colorSpace===Nt||pe===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Me=v.isCompressedTexture||v.image[0].isCompressedTexture,Ne=v.image[0]&&v.image[0].isDataTexture,j=[];for(let ie=0;ie<6;ie++)!Me&&!Ne?j[ie]=_(v.image[ie],!1,!0,a.maxCubemapSize):j[ie]=Ne?v.image[ie].image:v.image[ie],j[ie]=De(v,j[ie]);const Xe=j[0],Ve=p(Xe)||r,be=o.convert(v.format,v.colorSpace),_e=o.convert(v.type),de=b(v.internalFormat,be,_e,v.colorSpace),Pe=r&&v.isVideoTexture!==!0,qe=Q.__version===void 0||J===!0;let tt=P(v,Xe,Ve);H(i.TEXTURE_CUBE_MAP,v,Ve);let Oe;if(Me){Pe&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,tt,de,Xe.width,Xe.height);for(let ie=0;ie<6;ie++){Oe=j[ie].mipmaps;for(let w=0;w<Oe.length;w++){const ae=Oe[w];v.format!==Vt?be!==null?Pe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,w,0,0,ae.width,ae.height,be,ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,w,de,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,w,0,0,ae.width,ae.height,be,_e,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,w,de,ae.width,ae.height,0,be,_e,ae.data)}}}else{Oe=v.mipmaps,Pe&&qe&&(Oe.length>0&&tt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,tt,de,j[0].width,j[0].height));for(let ie=0;ie<6;ie++)if(Ne){Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,j[ie].width,j[ie].height,be,_e,j[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,de,j[ie].width,j[ie].height,0,be,_e,j[ie].data);for(let w=0;w<Oe.length;w++){const oe=Oe[w].image[ie].image;Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,w+1,0,0,oe.width,oe.height,be,_e,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,w+1,de,oe.width,oe.height,0,be,_e,oe.data)}}else{Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,be,_e,j[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,de,be,_e,j[ie]);for(let w=0;w<Oe.length;w++){const ae=Oe[w];Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,w+1,0,0,be,_e,ae.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,w+1,de,be,_e,ae.image[ie])}}}A(v,Ve)&&S(i.TEXTURE_CUBE_MAP),Q.__version=K.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ge(E,v,U,J,K,Q){const pe=o.convert(U.format,U.colorSpace),re=o.convert(U.type),ce=b(U.internalFormat,pe,re,U.colorSpace);if(!n.get(v).__hasExternalTextures){const Ne=Math.max(1,v.width>>Q),j=Math.max(1,v.height>>Q);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,Q,ce,Ne,j,v.depth,0,pe,re,null):t.texImage2D(K,Q,ce,Ne,j,0,pe,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),he(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,K,n.get(U).__webglTexture,0,Te(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,K,n.get(U).__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(E,v,U){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer&&!v.stencilBuffer){let J=r===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(U||he(v)){const K=v.depthTexture;K&&K.isDepthTexture&&(K.type===ci?J=i.DEPTH_COMPONENT32F:K.type===li&&(J=i.DEPTH_COMPONENT24));const Q=Te(v);he(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,J,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,J,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,J,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(v.depthBuffer&&v.stencilBuffer){const J=Te(v);U&&he(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,v.width,v.height):he(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{const J=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let K=0;K<J.length;K++){const Q=J[K],pe=o.convert(Q.format,Q.colorSpace),re=o.convert(Q.type),ce=b(Q.internalFormat,pe,re,Q.colorSpace),Me=Te(v);U&&he(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,ce,v.width,v.height):he(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,ce,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ce,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);const J=n.get(v.depthTexture).__webglTexture,K=Te(v);if(v.depthTexture.format===bi)he(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(v.depthTexture.format===Qi)he(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ee(E){const v=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Le(v.__webglFramebuffer,E)}else if(U){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]=i.createRenderbuffer(),we(v.__webglDepthbuffer[J],E,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),we(v.__webglDepthbuffer,E,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(E,v,U){const J=n.get(E);v!==void 0&&ge(J.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Ee(E)}function D(E){const v=E.texture,U=n.get(E),J=n.get(v);E.addEventListener("dispose",Y),E.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=v.version,s.memory.textures++);const K=E.isWebGLCubeRenderTarget===!0,Q=E.isWebGLMultipleRenderTargets===!0,pe=p(E)||r;if(K){U.__webglFramebuffer=[];for(let re=0;re<6;re++)if(r&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[re]=[];for(let ce=0;ce<v.mipmaps.length;ce++)U.__webglFramebuffer[re][ce]=i.createFramebuffer()}else U.__webglFramebuffer[re]=i.createFramebuffer()}else{if(r&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)U.__webglFramebuffer[re]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(Q)if(a.drawBuffers){const re=E.texture;for(let ce=0,Me=re.length;ce<Me;ce++){const Ne=n.get(re[ce]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&E.samples>0&&he(E)===!1){const re=Q?v:[v];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ce=0;ce<re.length;ce++){const Me=re[ce];U.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[ce]);const Ne=o.convert(Me.format,Me.colorSpace),j=o.convert(Me.type),Xe=b(Me.internalFormat,Ne,j,Me.colorSpace,E.isXRRenderTarget===!0),Ve=Te(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Xe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,U.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),we(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),H(i.TEXTURE_CUBE_MAP,v,pe);for(let re=0;re<6;re++)if(r&&v.mipmaps&&v.mipmaps.length>0)for(let ce=0;ce<v.mipmaps.length;ce++)ge(U.__webglFramebuffer[re][ce],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce);else ge(U.__webglFramebuffer[re],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);A(v,pe)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){const re=E.texture;for(let ce=0,Me=re.length;ce<Me;ce++){const Ne=re[ce],j=n.get(Ne);t.bindTexture(i.TEXTURE_2D,j.__webglTexture),H(i.TEXTURE_2D,Ne,pe),ge(U.__webglFramebuffer,E,Ne,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),A(Ne,pe)&&S(i.TEXTURE_2D)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(r?re=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,J.__webglTexture),H(re,v,pe),r&&v.mipmaps&&v.mipmaps.length>0)for(let ce=0;ce<v.mipmaps.length;ce++)ge(U.__webglFramebuffer[ce],E,v,i.COLOR_ATTACHMENT0,re,ce);else ge(U.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,re,0);A(v,pe)&&S(re),t.unbindTexture()}E.depthBuffer&&Ee(E)}function _t(E){const v=p(E)||r,U=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let J=0,K=U.length;J<K;J++){const Q=U[J];if(A(Q,v)){const pe=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,re=n.get(Q).__webglTexture;t.bindTexture(pe,re),S(pe),t.unbindTexture()}}}function ve(E){if(r&&E.samples>0&&he(E)===!1){const v=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],U=E.width,J=E.height;let K=i.COLOR_BUFFER_BIT;const Q=[],pe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(E),ce=E.isWebGLMultipleRenderTargets===!0;if(ce)for(let Me=0;Me<v.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let Me=0;Me<v.length;Me++){Q.push(i.COLOR_ATTACHMENT0+Me),E.depthBuffer&&Q.push(pe);const Ne=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(Ne===!1&&(E.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ce&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[Me]),Ne===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[pe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[pe])),ce){const j=n.get(v[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,U,J,0,0,U,J,K,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Me=0;Me<v.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,re.__webglColorRenderbuffer[Me]);const Ne=n.get(v[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function Te(E){return Math.min(a.maxSamples,E.samples)}function he(E){const v=n.get(E);return r&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Qe(E){const v=s.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function De(E,v){const U=E.colorSpace,J=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===io||U!==ti&&U!==Nt&&(Ye.getTransfer(U)===Je?r===!1?e.has("EXT_sRGB")===!0&&J===Vt?(E.format=io,E.minFilter=Dt,E.generateMipmaps=!1):v=Ts.sRGBToLinear(v):(J!==Vt||K!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}this.allocateTextureUnit=R,this.resetTextureUnits=te,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=z,this.setTextureCube=V,this.rebindTextures=ke,this.setupRenderTarget=D,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=he}function Ep(i,e,t){const n=t.isWebGL2;function a(o,s=Nt){let r;const l=Ye.getTransfer(s);if(o===hi)return i.UNSIGNED_BYTE;if(o===gs)return i.UNSIGNED_SHORT_4_4_4_4;if(o===_s)return i.UNSIGNED_SHORT_5_5_5_1;if(o===nc)return i.BYTE;if(o===ac)return i.SHORT;if(o===ho)return i.UNSIGNED_SHORT;if(o===ms)return i.INT;if(o===li)return i.UNSIGNED_INT;if(o===ci)return i.FLOAT;if(o===gn)return n?i.HALF_FLOAT:(r=e.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(o===oc)return i.ALPHA;if(o===Vt)return i.RGBA;if(o===rc)return i.LUMINANCE;if(o===sc)return i.LUMINANCE_ALPHA;if(o===bi)return i.DEPTH_COMPONENT;if(o===Qi)return i.DEPTH_STENCIL;if(o===io)return r=e.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(o===lc)return i.RED;if(o===vs)return i.RED_INTEGER;if(o===cc)return i.RG;if(o===xs)return i.RG_INTEGER;if(o===Ss)return i.RGBA_INTEGER;if(o===pa||o===ma||o===ga||o===_a)if(l===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(o===pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(o===pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===_a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Oo||o===Bo||o===zo||o===Ho)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(o===Oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===zo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Ms)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Go||o===Vo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(o===Go)return l===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(o===Vo)return l===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===ko||o===Wo||o===qo||o===Xo||o===Yo||o===$o||o===jo||o===Ko||o===Jo||o===Zo||o===Qo||o===er||o===tr||o===ir)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(o===ko)return l===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Wo)return l===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===qo)return l===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Xo)return l===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Yo)return l===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===$o)return l===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===jo)return l===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Ko)return l===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Jo)return l===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Zo)return l===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Qo)return l===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===er)return l===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===tr)return l===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===ir)return l===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===va||o===nr||o===ar)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(o===va)return l===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===nr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===ar)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===dc||o===or||o===rr||o===sr)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(o===va)return r.COMPRESSED_RED_RGTC1_EXT;if(o===or)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===rr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===sr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Ai?n?i.UNSIGNED_INT_24_8:(r=e.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):i[o]!==void 0?i[o]:null}return{convert:a}}class yp extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hn extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ap={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,o=null,s=null;const r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&o!==null&&(a=o),a!==null&&(r.matrix.fromArray(a.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,a.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(a.linearVelocity)):r.hasLinearVelocity=!1,a.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(a.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Ap)))}return r!==null&&(r.visible=a!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class bp extends tn{constructor(e,t){super();const n=this;let a=null,o=1,s=null,r="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,g=null;const _=t.getContextAttributes();let p=null,d=null;const A=[],S=[],b=new We;let P=null;const T=new wt;T.layers.enable(1),T.viewport=new Ze;const C=new wt;C.layers.enable(2),C.viewport=new Ze;const Y=[T,C],M=new yp;M.layers.enable(1),M.layers.enable(2);let y=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let $=A[H];return $===void 0&&($=new ka,A[H]=$),$.getTargetRaySpace()},this.getControllerGrip=function(H){let $=A[H];return $===void 0&&($=new ka,A[H]=$),$.getGripSpace()},this.getHand=function(H){let $=A[H];return $===void 0&&($=new ka,A[H]=$),$.getHandSpace()};function W(H){const $=S.indexOf(H.inputSource);if($===-1)return;const se=A[$];se!==void 0&&(se.update(H.inputSource,H.frame,c||s),se.dispatchEvent({type:H.type,data:H.inputSource}))}function te(){a.removeEventListener("select",W),a.removeEventListener("selectstart",W),a.removeEventListener("selectend",W),a.removeEventListener("squeeze",W),a.removeEventListener("squeezestart",W),a.removeEventListener("squeezeend",W),a.removeEventListener("end",te),a.removeEventListener("inputsourceschange",R);for(let H=0;H<A.length;H++){const $=S[H];$!==null&&(S[H]=null,A[H].disconnect($))}y=null,k=null,e.setRenderTarget(p),m=null,h=null,f=null,a=null,d=null,Z.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(H){if(a=H,a!==null){if(p=e.getRenderTarget(),a.addEventListener("select",W),a.addEventListener("selectstart",W),a.addEventListener("selectend",W),a.addEventListener("squeeze",W),a.addEventListener("squeezestart",W),a.addEventListener("squeezeend",W),a.addEventListener("end",te),a.addEventListener("inputsourceschange",R),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(b),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:a.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(a,t,$),a.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Ci(m.framebufferWidth,m.framebufferHeight,{format:Vt,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,se=null,fe=null;_.depth&&(fe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=_.stencil?Qi:bi,se=_.stencil?Ai:li);const ge={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:o};f=new XRWebGLBinding(a,t),h=f.createProjectionLayer(ge),a.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),d=new Ci(h.textureWidth,h.textureHeight,{format:Vt,type:hi,depthTexture:new zs(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const we=e.properties.get(d);we.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(r),Z.setContext(a),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function R(H){for(let $=0;$<H.removed.length;$++){const se=H.removed[$],fe=S.indexOf(se);fe>=0&&(S[fe]=null,A[fe].disconnect(se))}for(let $=0;$<H.added.length;$++){const se=H.added[$];let fe=S.indexOf(se);if(fe===-1){for(let we=0;we<A.length;we++)if(we>=S.length){S.push(se),fe=we;break}else if(S[we]===null){S[we]=se,fe=we;break}if(fe===-1)break}const ge=A[fe];ge&&ge.connect(se)}}const O=new L,G=new L;function X(H,$,se){O.setFromMatrixPosition($.matrixWorld),G.setFromMatrixPosition(se.matrixWorld);const fe=O.distanceTo(G),ge=$.projectionMatrix.elements,we=se.projectionMatrix.elements,Le=ge[14]/(ge[10]-1),Ee=ge[14]/(ge[10]+1),ke=(ge[9]+1)/ge[5],D=(ge[9]-1)/ge[5],_t=(ge[8]-1)/ge[0],ve=(we[8]+1)/we[0],Te=Le*_t,he=Le*ve,Qe=fe/(-_t+ve),De=Qe*-_t;$.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(De),H.translateZ(Qe),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const E=Le+Qe,v=Ee+Qe,U=Te-De,J=he+(fe-De),K=ke*Ee/v*E,Q=D*Ee/v*E;H.projectionMatrix.makePerspective(U,J,K,Q,E,v),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function z(H,$){$===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices($.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(a===null)return;M.near=C.near=T.near=H.near,M.far=C.far=T.far=H.far,(y!==M.near||k!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),y=M.near,k=M.far);const $=H.parent,se=M.cameras;z(M,$);for(let fe=0;fe<se.length;fe++)z(se[fe],$);se.length===2?X(M,T,C):M.projectionMatrix.copy(T.projectionMatrix),V(H,M,$)};function V(H,$,se){se===null?H.matrix.copy($.matrixWorld):(H.matrix.copy(se.matrixWorld),H.matrix.invert(),H.matrix.multiply($.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=no*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let q=null;function ee(H,$){if(u=$.getViewerPose(c||s),g=$,u!==null){const se=u.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let fe=!1;se.length!==M.cameras.length&&(M.cameras.length=0,fe=!0);for(let ge=0;ge<se.length;ge++){const we=se[ge];let Le=null;if(m!==null)Le=m.getViewport(we);else{const ke=f.getViewSubImage(h,we);Le=ke.viewport,ge===0&&(e.setRenderTargetTextures(d,ke.colorTexture,h.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(d))}let Ee=Y[ge];Ee===void 0&&(Ee=new wt,Ee.layers.enable(ge),Ee.viewport=new Ze,Y[ge]=Ee),Ee.matrix.fromArray(we.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(we.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Le.x,Le.y,Le.width,Le.height),ge===0&&(M.matrix.copy(Ee.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),fe===!0&&M.cameras.push(Ee)}}for(let se=0;se<A.length;se++){const fe=S[se],ge=A[se];fe!==null&&ge!==void 0&&ge.update(fe,$,c||s)}q&&q(H,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const Z=new Os;Z.setAnimationLoop(ee),this.setAnimationLoop=function(H){q=H},this.dispose=function(){}}}function Tp(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Ns(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function a(p,d,A,S,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(p,d):d.isMeshToonMaterial?(o(p,d),f(p,d)):d.isMeshPhongMaterial?(o(p,d),u(p,d)):d.isMeshStandardMaterial?(o(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,b)):d.isMeshMatcapMaterial?(o(p,d),g(p,d)):d.isMeshDepthMaterial?o(p,d):d.isMeshDistanceMaterial?(o(p,d),_(p,d)):d.isMeshNormalMaterial?o(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&r(p,d)):d.isPointsMaterial?l(p,d,A,S):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===At&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===At&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const A=e.get(d).envMap;if(A&&(p.envMap.value=A,p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const S=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*S,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function r(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,A,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*A,p.scale.value=S*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,A){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===At&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const A=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function Cp(i,e,t,n){let a={},o={},s=[];const r=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(A,S){const b=S.program;n.uniformBlockBinding(A,b)}function c(A,S){let b=a[A.id];b===void 0&&(g(A),b=u(A),a[A.id]=b,A.addEventListener("dispose",p));const P=S.program;n.updateUBOMapping(A,P);const T=e.render.frame;o[A.id]!==T&&(h(A),o[A.id]=T)}function u(A){const S=f();A.__bindingPointIndex=S;const b=i.createBuffer(),P=A.__size,T=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,P,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function f(){for(let A=0;A<r;A++)if(s.indexOf(A)===-1)return s.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const S=a[A.id],b=A.uniforms,P=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,C=b.length;T<C;T++){const Y=Array.isArray(b[T])?b[T]:[b[T]];for(let M=0,y=Y.length;M<y;M++){const k=Y[M];if(m(k,T,M,P)===!0){const W=k.__offset,te=Array.isArray(k.value)?k.value:[k.value];let R=0;for(let O=0;O<te.length;O++){const G=te[O],X=_(G);typeof G=="number"||typeof G=="boolean"?(k.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,W+R,k.__data)):G.isMatrix3?(k.__data[0]=G.elements[0],k.__data[1]=G.elements[1],k.__data[2]=G.elements[2],k.__data[3]=0,k.__data[4]=G.elements[3],k.__data[5]=G.elements[4],k.__data[6]=G.elements[5],k.__data[7]=0,k.__data[8]=G.elements[6],k.__data[9]=G.elements[7],k.__data[10]=G.elements[8],k.__data[11]=0):(G.toArray(k.__data,R),R+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,S,b,P){const T=A.value,C=S+"_"+b;if(P[C]===void 0)return typeof T=="number"||typeof T=="boolean"?P[C]=T:P[C]=T.clone(),!0;{const Y=P[C];if(typeof T=="number"||typeof T=="boolean"){if(Y!==T)return P[C]=T,!0}else if(Y.equals(T)===!1)return Y.copy(T),!0}return!1}function g(A){const S=A.uniforms;let b=0;const P=16;for(let C=0,Y=S.length;C<Y;C++){const M=Array.isArray(S[C])?S[C]:[S[C]];for(let y=0,k=M.length;y<k;y++){const W=M[y],te=Array.isArray(W.value)?W.value:[W.value];for(let R=0,O=te.length;R<O;R++){const G=te[R],X=_(G),z=b%P;z!==0&&P-z<X.boundary&&(b+=P-z),W.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=X.storage}}}const T=b%P;return T>0&&(b+=P-T),A.__size=b,A.__cache={},this}function _(A){const S={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(S.boundary=4,S.storage=4):A.isVector2?(S.boundary=8,S.storage=8):A.isVector3||A.isColor?(S.boundary=16,S.storage=12):A.isVector4?(S.boundary=16,S.storage=16):A.isMatrix3?(S.boundary=48,S.storage=48):A.isMatrix4?(S.boundary=64,S.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),S}function p(A){const S=A.target;S.removeEventListener("dispose",p);const b=s.indexOf(S.__bindingPointIndex);s.splice(b,1),i.deleteBuffer(a[S.id]),delete a[S.id],delete o[S.id]}function d(){for(const A in a)i.deleteBuffer(a[A]);s=[],a={},o={}}return{bind:l,update:c,dispose:d}}class qs{constructor(e={}){const{canvas:t=Ec(),context:n=null,depth:a=!0,stencil:o=!0,alpha:s=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=s;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const d=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ft,this._useLegacyLights=!1,this.toneMapping=ui,this.toneMappingExposure=1;const S=this;let b=!1,P=0,T=0,C=null,Y=-1,M=null;const y=new Ze,k=new Ze;let W=null;const te=new Fe(0);let R=0,O=t.width,G=t.height,X=1,z=null,V=null;const q=new Ze(0,0,O,G),ee=new Ze(0,0,O,G);let Z=!1;const H=new mo;let $=!1,se=!1,fe=null;const ge=new at,we=new We,Le=new L,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return C===null?X:1}let D=n;function _t(x,I){for(let F=0;F<x.length;F++){const B=x[F],N=t.getContext(B,I);if(N!==null)return N}return null}try{const x={alpha:!0,depth:a,stencil:o,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uo}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",w,!1),t.addEventListener("webglcontextcreationerror",ae,!1),D===null){const I=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&I.shift(),D=_t(I,x),D===null)throw _t(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let ve,Te,he,Qe,De,E,v,U,J,K,Q,pe,re,ce,Me,Ne,j,Xe,Ve,be,_e,de,Pe,qe;function tt(){ve=new Fh(D),Te=new Lh(D,ve,e),ve.init(Te),de=new Ep(D,ve,Te),he=new Sp(D,ve,Te),Qe=new zh(D),De=new rp,E=new Mp(D,ve,he,De,Te,de,Qe),v=new Ih(S),U=new Uh(S),J=new Yc(D,Te),Pe=new wh(D,ve,J,Te),K=new Oh(D,J,Qe,Pe),Q=new kh(D,K,J,Qe),Ve=new Vh(D,Te,E),Ne=new Ph(De),pe=new op(S,v,U,ve,Te,Pe,Ne),re=new Tp(S,De),ce=new lp,Me=new pp(ve,Te),Xe=new Ch(S,v,U,he,Q,h,l),j=new xp(S,Q,Te),qe=new Cp(D,Qe,Te,he),be=new Rh(D,ve,Qe,Te),_e=new Bh(D,ve,Qe,Te),Qe.programs=pe.programs,S.capabilities=Te,S.extensions=ve,S.properties=De,S.renderLists=ce,S.shadowMap=j,S.state=he,S.info=Qe}tt();const Oe=new bp(S,D);this.xr=Oe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const x=ve.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ve.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(x){x!==void 0&&(X=x,this.setSize(O,G,!1))},this.getSize=function(x){return x.set(O,G)},this.setSize=function(x,I,F=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=x,G=I,t.width=Math.floor(x*X),t.height=Math.floor(I*X),F===!0&&(t.style.width=x+"px",t.style.height=I+"px"),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(O*X,G*X).floor()},this.setDrawingBufferSize=function(x,I,F){O=x,G=I,X=F,t.width=Math.floor(x*F),t.height=Math.floor(I*F),this.setViewport(0,0,x,I)},this.getCurrentViewport=function(x){return x.copy(y)},this.getViewport=function(x){return x.copy(q)},this.setViewport=function(x,I,F,B){x.isVector4?q.set(x.x,x.y,x.z,x.w):q.set(x,I,F,B),he.viewport(y.copy(q).multiplyScalar(X).floor())},this.getScissor=function(x){return x.copy(ee)},this.setScissor=function(x,I,F,B){x.isVector4?ee.set(x.x,x.y,x.z,x.w):ee.set(x,I,F,B),he.scissor(k.copy(ee).multiplyScalar(X).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(x){he.setScissorTest(Z=x)},this.setOpaqueSort=function(x){z=x},this.setTransparentSort=function(x){V=x},this.getClearColor=function(x){return x.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(x=!0,I=!0,F=!0){let B=0;if(x){let N=!1;if(C!==null){const le=C.texture.format;N=le===Ss||le===xs||le===vs}if(N){const le=C.texture.type,me=le===hi||le===li||le===ho||le===Ai||le===gs||le===_s,Se=Xe.getClearColor(),Ae=Xe.getClearAlpha(),Ue=Se.r,Ce=Se.g,Re=Se.b;me?(m[0]=Ue,m[1]=Ce,m[2]=Re,m[3]=Ae,D.clearBufferuiv(D.COLOR,0,m)):(g[0]=Ue,g[1]=Ce,g[2]=Re,g[3]=Ae,D.clearBufferiv(D.COLOR,0,g))}else B|=D.COLOR_BUFFER_BIT}I&&(B|=D.DEPTH_BUFFER_BIT),F&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",w,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ce.dispose(),Me.dispose(),De.dispose(),v.dispose(),U.dispose(),Q.dispose(),Pe.dispose(),qe.dispose(),pe.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",vt),Oe.removeEventListener("sessionend",Ke),fe&&(fe.dispose(),fe=null),xt.stop()};function ie(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function w(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const x=Qe.autoReset,I=j.enabled,F=j.autoUpdate,B=j.needsUpdate,N=j.type;tt(),Qe.autoReset=x,j.enabled=I,j.autoUpdate=F,j.needsUpdate=B,j.type=N}function ae(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function oe(x){const I=x.target;I.removeEventListener("dispose",oe),ye(I)}function ye(x){xe(x),De.remove(x)}function xe(x){const I=De.get(x).programs;I!==void 0&&(I.forEach(function(F){pe.releaseProgram(F)}),x.isShaderMaterial&&pe.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,F,B,N,le){I===null&&(I=Ee);const me=N.isMesh&&N.matrixWorld.determinant()<0,Se=il(x,I,F,B,N);he.setMaterial(B,me);let Ae=F.index,Ue=1;if(B.wireframe===!0){if(Ae=K.getWireframeAttribute(F),Ae===void 0)return;Ue=2}const Ce=F.drawRange,Re=F.attributes.position;let ot=Ce.start*Ue,bt=(Ce.start+Ce.count)*Ue;le!==null&&(ot=Math.max(ot,le.start*Ue),bt=Math.min(bt,(le.start+le.count)*Ue)),Ae!==null?(ot=Math.max(ot,0),bt=Math.min(bt,Ae.count)):Re!=null&&(ot=Math.max(ot,0),bt=Math.min(bt,Re.count));const dt=bt-ot;if(dt<0||dt===1/0)return;Pe.setup(N,B,Se,F,Ae);let Xt,et=be;if(Ae!==null&&(Xt=J.get(Ae),et=_e,et.setIndex(Xt)),N.isMesh)B.wireframe===!0?(he.setLineWidth(B.wireframeLinewidth*ke()),et.setMode(D.LINES)):et.setMode(D.TRIANGLES);else if(N.isLine){let Be=B.linewidth;Be===void 0&&(Be=1),he.setLineWidth(Be*ke()),N.isLineSegments?et.setMode(D.LINES):N.isLineLoop?et.setMode(D.LINE_LOOP):et.setMode(D.LINE_STRIP)}else N.isPoints?et.setMode(D.POINTS):N.isSprite&&et.setMode(D.TRIANGLES);if(N.isBatchedMesh)et.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)et.renderInstances(ot,dt,N.count);else if(F.isInstancedBufferGeometry){const Be=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,ca=Math.min(F.instanceCount,Be);et.renderInstances(ot,dt,ca)}else et.render(ot,dt)};function $e(x,I,F){x.transparent===!0&&x.side===Qt&&x.forceSinglePass===!1?(x.side=At,x.needsUpdate=!0,En(x,I,F),x.side=fi,x.needsUpdate=!0,En(x,I,F),x.side=Qt):En(x,I,F)}this.compile=function(x,I,F=null){F===null&&(F=x),p=Me.get(F),p.init(),A.push(p),F.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),x!==F&&x.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(S._useLegacyLights);const B=new Set;return x.traverse(function(N){const le=N.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){const Se=le[me];$e(Se,F,N),B.add(Se)}else $e(le,F,N),B.add(le)}),A.pop(),p=null,B},this.compileAsync=function(x,I,F=null){const B=this.compile(x,I,F);return new Promise(N=>{function le(){if(B.forEach(function(me){De.get(me).currentProgram.isReady()&&B.delete(me)}),B.size===0){N(x);return}setTimeout(le,10)}ve.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let je=null;function ct(x){je&&je(x)}function vt(){xt.stop()}function Ke(){xt.start()}const xt=new Os;xt.setAnimationLoop(ct),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(x){je=x,Oe.setAnimationLoop(x),x===null?xt.stop():xt.start()},Oe.addEventListener("sessionstart",vt),Oe.addEventListener("sessionend",Ke),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(I),I=Oe.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,I,C),p=Me.get(x,A.length),p.init(),A.push(p),ge.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),H.setFromProjectionMatrix(ge),se=this.localClippingEnabled,$=Ne.init(this.clippingPlanes,se),_=ce.get(x,d.length),_.init(),d.push(_),kt(x,I,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(z,V),this.info.render.frame++,$===!0&&Ne.beginShadows();const F=p.state.shadowsArray;if(j.render(F,x,I),$===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xe.render(_,x),p.setupLights(S._useLegacyLights),I.isArrayCamera){const B=I.cameras;for(let N=0,le=B.length;N<le;N++){const me=B[N];bo(_,x,me,me.viewport)}}else bo(_,x,I);C!==null&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),x.isScene===!0&&x.onAfterRender(S,x,I),Pe.resetDefaultState(),Y=-1,M=null,A.pop(),A.length>0?p=A[A.length-1]:p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function kt(x,I,F,B){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||H.intersectsSprite(x)){B&&Le.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ge);const me=Q.update(x),Se=x.material;Se.visible&&_.push(x,me,Se,F,Le.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||H.intersectsObject(x))){const me=Q.update(x),Se=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Le.copy(x.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Le.copy(me.boundingSphere.center)),Le.applyMatrix4(x.matrixWorld).applyMatrix4(ge)),Array.isArray(Se)){const Ae=me.groups;for(let Ue=0,Ce=Ae.length;Ue<Ce;Ue++){const Re=Ae[Ue],ot=Se[Re.materialIndex];ot&&ot.visible&&_.push(x,me,ot,F,Le.z,Re)}}else Se.visible&&_.push(x,me,Se,F,Le.z,null)}}const le=x.children;for(let me=0,Se=le.length;me<Se;me++)kt(le[me],I,F,B)}function bo(x,I,F,B){const N=x.opaque,le=x.transmissive,me=x.transparent;p.setupLightsView(F),$===!0&&Ne.setGlobalState(S.clippingPlanes,F),le.length>0&&tl(N,le,I,F),B&&he.viewport(y.copy(B)),N.length>0&&Mn(N,I,F),le.length>0&&Mn(le,I,F),me.length>0&&Mn(me,I,F),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function tl(x,I,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const le=Te.isWebGL2;fe===null&&(fe=new Ci(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?gn:hi,minFilter:mn,samples:le?4:0})),S.getDrawingBufferSize(we),le?fe.setSize(we.x,we.y):fe.setSize(ao(we.x),ao(we.y));const me=S.getRenderTarget();S.setRenderTarget(fe),S.getClearColor(te),R=S.getClearAlpha(),R<1&&S.setClearColor(16777215,.5),S.clear();const Se=S.toneMapping;S.toneMapping=ui,Mn(x,F,B),E.updateMultisampleRenderTarget(fe),E.updateRenderTargetMipmap(fe);let Ae=!1;for(let Ue=0,Ce=I.length;Ue<Ce;Ue++){const Re=I[Ue],ot=Re.object,bt=Re.geometry,dt=Re.material,Xt=Re.group;if(dt.side===Qt&&ot.layers.test(B.layers)){const et=dt.side;dt.side=At,dt.needsUpdate=!0,To(ot,F,B,bt,dt,Xt),dt.side=et,dt.needsUpdate=!0,Ae=!0}}Ae===!0&&(E.updateMultisampleRenderTarget(fe),E.updateRenderTargetMipmap(fe)),S.setRenderTarget(me),S.setClearColor(te,R),S.toneMapping=Se}function Mn(x,I,F){const B=I.isScene===!0?I.overrideMaterial:null;for(let N=0,le=x.length;N<le;N++){const me=x[N],Se=me.object,Ae=me.geometry,Ue=B===null?me.material:B,Ce=me.group;Se.layers.test(F.layers)&&To(Se,I,F,Ae,Ue,Ce)}}function To(x,I,F,B,N,le){x.onBeforeRender(S,I,F,B,N,le),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(S,I,F,B,x,le),N.transparent===!0&&N.side===Qt&&N.forceSinglePass===!1?(N.side=At,N.needsUpdate=!0,S.renderBufferDirect(F,I,B,N,x,le),N.side=fi,N.needsUpdate=!0,S.renderBufferDirect(F,I,B,N,x,le),N.side=Qt):S.renderBufferDirect(F,I,B,N,x,le),x.onAfterRender(S,I,F,B,N,le)}function En(x,I,F){I.isScene!==!0&&(I=Ee);const B=De.get(x),N=p.state.lights,le=p.state.shadowsArray,me=N.state.version,Se=pe.getParameters(x,N.state,le,I,F),Ae=pe.getProgramCacheKey(Se);let Ue=B.programs;B.environment=x.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(x.isMeshStandardMaterial?U:v).get(x.envMap||B.environment),Ue===void 0&&(x.addEventListener("dispose",oe),Ue=new Map,B.programs=Ue);let Ce=Ue.get(Ae);if(Ce!==void 0){if(B.currentProgram===Ce&&B.lightsStateVersion===me)return wo(x,Se),Ce}else Se.uniforms=pe.getUniforms(x),x.onBuild(F,Se,S),x.onBeforeCompile(Se,S),Ce=pe.acquireProgram(Se,Ae),Ue.set(Ae,Ce),B.uniforms=Se.uniforms;const Re=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Re.clippingPlanes=Ne.uniform),wo(x,Se),B.needsLights=al(x),B.lightsStateVersion=me,B.needsLights&&(Re.ambientLightColor.value=N.state.ambient,Re.lightProbe.value=N.state.probe,Re.directionalLights.value=N.state.directional,Re.directionalLightShadows.value=N.state.directionalShadow,Re.spotLights.value=N.state.spot,Re.spotLightShadows.value=N.state.spotShadow,Re.rectAreaLights.value=N.state.rectArea,Re.ltc_1.value=N.state.rectAreaLTC1,Re.ltc_2.value=N.state.rectAreaLTC2,Re.pointLights.value=N.state.point,Re.pointLightShadows.value=N.state.pointShadow,Re.hemisphereLights.value=N.state.hemi,Re.directionalShadowMap.value=N.state.directionalShadowMap,Re.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Re.spotShadowMap.value=N.state.spotShadowMap,Re.spotLightMatrix.value=N.state.spotLightMatrix,Re.spotLightMap.value=N.state.spotLightMap,Re.pointShadowMap.value=N.state.pointShadowMap,Re.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Ce,B.uniformsList=null,Ce}function Co(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=jn.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function wo(x,I){const F=De.get(x);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function il(x,I,F,B,N){I.isScene!==!0&&(I=Ee),E.resetTextureUnits();const le=I.fog,me=B.isMeshStandardMaterial?I.environment:null,Se=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ti,Ae=(B.isMeshStandardMaterial?U:v).get(B.envMap||me),Ue=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ce=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Re=!!F.morphAttributes.position,ot=!!F.morphAttributes.normal,bt=!!F.morphAttributes.color;let dt=ui;B.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(dt=S.toneMapping);const Xt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,et=Xt!==void 0?Xt.length:0,Be=De.get(B),ca=p.state.lights;if($===!0&&(se===!0||x!==M)){const Pt=x===M&&B.id===Y;Ne.setState(B,x,Pt)}let it=!1;B.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==ca.state.version||Be.outputColorSpace!==Se||N.isBatchedMesh&&Be.batching===!1||!N.isBatchedMesh&&Be.batching===!0||N.isInstancedMesh&&Be.instancing===!1||!N.isInstancedMesh&&Be.instancing===!0||N.isSkinnedMesh&&Be.skinning===!1||!N.isSkinnedMesh&&Be.skinning===!0||N.isInstancedMesh&&Be.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Be.instancingColor===!1&&N.instanceColor!==null||Be.envMap!==Ae||B.fog===!0&&Be.fog!==le||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Ne.numPlanes||Be.numIntersection!==Ne.numIntersection)||Be.vertexAlphas!==Ue||Be.vertexTangents!==Ce||Be.morphTargets!==Re||Be.morphNormals!==ot||Be.morphColors!==bt||Be.toneMapping!==dt||Te.isWebGL2===!0&&Be.morphTargetsCount!==et)&&(it=!0):(it=!0,Be.__version=B.version);let pi=Be.currentProgram;it===!0&&(pi=En(B,I,N));let Ro=!1,on=!1,da=!1;const pt=pi.getUniforms(),mi=Be.uniforms;if(he.useProgram(pi.program)&&(Ro=!0,on=!0,da=!0),B.id!==Y&&(Y=B.id,on=!0),Ro||M!==x){pt.setValue(D,"projectionMatrix",x.projectionMatrix),pt.setValue(D,"viewMatrix",x.matrixWorldInverse);const Pt=pt.map.cameraPosition;Pt!==void 0&&Pt.setValue(D,Le.setFromMatrixPosition(x.matrixWorld)),Te.logarithmicDepthBuffer&&pt.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&pt.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,on=!0,da=!0)}if(N.isSkinnedMesh){pt.setOptional(D,N,"bindMatrix"),pt.setOptional(D,N,"bindMatrixInverse");const Pt=N.skeleton;Pt&&(Te.floatVertexTextures?(Pt.boneTexture===null&&Pt.computeBoneTexture(),pt.setValue(D,"boneTexture",Pt.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(pt.setOptional(D,N,"batchingTexture"),pt.setValue(D,"batchingTexture",N._matricesTexture,E));const ua=F.morphAttributes;if((ua.position!==void 0||ua.normal!==void 0||ua.color!==void 0&&Te.isWebGL2===!0)&&Ve.update(N,F,pi),(on||Be.receiveShadow!==N.receiveShadow)&&(Be.receiveShadow=N.receiveShadow,pt.setValue(D,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(mi.envMap.value=Ae,mi.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),on&&(pt.setValue(D,"toneMappingExposure",S.toneMappingExposure),Be.needsLights&&nl(mi,da),le&&B.fog===!0&&re.refreshFogUniforms(mi,le),re.refreshMaterialUniforms(mi,B,X,G,fe),jn.upload(D,Co(Be),mi,E)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(jn.upload(D,Co(Be),mi,E),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&pt.setValue(D,"center",N.center),pt.setValue(D,"modelViewMatrix",N.modelViewMatrix),pt.setValue(D,"normalMatrix",N.normalMatrix),pt.setValue(D,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Pt=B.uniformsGroups;for(let ha=0,ol=Pt.length;ha<ol;ha++)if(Te.isWebGL2){const Lo=Pt[ha];qe.update(Lo,pi),qe.bind(Lo,pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pi}function nl(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function al(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(x,I,F){De.get(x.texture).__webglTexture=I,De.get(x.depthTexture).__webglTexture=F;const B=De.get(x);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,I){const F=De.get(x);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(x,I=0,F=0){C=x,P=I,T=F;let B=!0,N=null,le=!1,me=!1;if(x){const Ae=De.get(x);Ae.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(D.FRAMEBUFFER,null),B=!1):Ae.__webglFramebuffer===void 0?E.setupRenderTarget(x):Ae.__hasExternalTextures&&E.rebindTextures(x,De.get(x.texture).__webglTexture,De.get(x.depthTexture).__webglTexture);const Ue=x.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(me=!0);const Ce=De.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ce[I])?N=Ce[I][F]:N=Ce[I],le=!0):Te.isWebGL2&&x.samples>0&&E.useMultisampledRTT(x)===!1?N=De.get(x).__webglMultisampledFramebuffer:Array.isArray(Ce)?N=Ce[F]:N=Ce,y.copy(x.viewport),k.copy(x.scissor),W=x.scissorTest}else y.copy(q).multiplyScalar(X).floor(),k.copy(ee).multiplyScalar(X).floor(),W=Z;if(he.bindFramebuffer(D.FRAMEBUFFER,N)&&Te.drawBuffers&&B&&he.drawBuffers(x,N),he.viewport(y),he.scissor(k),he.setScissorTest(W),le){const Ae=De.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ae.__webglTexture,F)}else if(me){const Ae=De.get(x.texture),Ue=I||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.__webglTexture,F||0,Ue)}Y=-1},this.readRenderTargetPixels=function(x,I,F,B,N,le,me){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=De.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se){he.bindFramebuffer(D.FRAMEBUFFER,Se);try{const Ae=x.texture,Ue=Ae.format,Ce=Ae.type;if(Ue!==Vt&&de.convert(Ue)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Ce===gn&&(ve.has("EXT_color_buffer_half_float")||Te.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ce!==hi&&de.convert(Ce)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ce===ci&&(Te.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-B&&F>=0&&F<=x.height-N&&D.readPixels(I,F,B,N,de.convert(Ue),de.convert(Ce),le)}finally{const Ae=C!==null?De.get(C).__webglFramebuffer:null;he.bindFramebuffer(D.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(x,I,F=0){const B=Math.pow(2,-F),N=Math.floor(I.image.width*B),le=Math.floor(I.image.height*B);E.setTexture2D(I,0),D.copyTexSubImage2D(D.TEXTURE_2D,F,0,0,x.x,x.y,N,le),he.unbindTexture()},this.copyTextureToTexture=function(x,I,F,B=0){const N=I.image.width,le=I.image.height,me=de.convert(F.format),Se=de.convert(F.type);E.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment),I.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,x.x,x.y,N,le,me,Se,I.image.data):I.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,x.x,x.y,I.mipmaps[0].width,I.mipmaps[0].height,me,I.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,B,x.x,x.y,me,Se,I.image),B===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(x,I,F,B,N=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=x.max.x-x.min.x+1,me=x.max.y-x.min.y+1,Se=x.max.z-x.min.z+1,Ae=de.convert(B.format),Ue=de.convert(B.type);let Ce;if(B.isData3DTexture)E.setTexture3D(B,0),Ce=D.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)E.setTexture2DArray(B,0),Ce=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const Re=D.getParameter(D.UNPACK_ROW_LENGTH),ot=D.getParameter(D.UNPACK_IMAGE_HEIGHT),bt=D.getParameter(D.UNPACK_SKIP_PIXELS),dt=D.getParameter(D.UNPACK_SKIP_ROWS),Xt=D.getParameter(D.UNPACK_SKIP_IMAGES),et=F.isCompressedTexture?F.mipmaps[N]:F.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,et.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,et.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,x.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,x.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,x.min.z),F.isDataTexture||F.isData3DTexture?D.texSubImage3D(Ce,N,I.x,I.y,I.z,le,me,Se,Ae,Ue,et.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Ce,N,I.x,I.y,I.z,le,me,Se,Ae,et.data)):D.texSubImage3D(Ce,N,I.x,I.y,I.z,le,me,Se,Ae,Ue,et),D.pixelStorei(D.UNPACK_ROW_LENGTH,Re),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ot),D.pixelStorei(D.UNPACK_SKIP_PIXELS,bt),D.pixelStorei(D.UNPACK_SKIP_ROWS,dt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xt),N===0&&B.generateMipmaps&&D.generateMipmap(Ce),he.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?E.setTextureCube(x,0):x.isData3DTexture?E.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?E.setTexture2DArray(x,0):E.setTexture2D(x,0),he.unbindTexture()},this.resetState=function(){P=0,T=0,C=null,he.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===fo?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===oa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ft?Ti:Es}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ti?ft:ti}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class wp extends qs{}wp.prototype.isWebGL1Renderer=!0;class vo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Fe(e),this.density=t}clone(){return new vo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Rp extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ro extends Ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Kr=new L,Jr=new L,Zr=new at,Wa=new po,qn=new Sn;class Lp extends ht{constructor(e=new Ft,t=new ro){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let a=1,o=t.count;a<o;a++)Kr.fromBufferAttribute(t,a-1),Jr.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=Kr.distanceTo(Jr);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qn.copy(n.boundingSphere),qn.applyMatrix4(a),qn.radius+=o,e.ray.intersectsSphere(qn)===!1)return;Zr.copy(a).invert(),Wa.copy(e.ray).applyMatrix4(Zr);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=new L,u=new L,f=new L,h=new L,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const d=Math.max(0,s.start),A=Math.min(g.count,s.start+s.count);for(let S=d,b=A-1;S<b;S+=m){const P=g.getX(S),T=g.getX(S+1);if(c.fromBufferAttribute(p,P),u.fromBufferAttribute(p,T),Wa.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const Y=e.ray.origin.distanceTo(h);Y<e.near||Y>e.far||t.push({distance:Y,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,s.start),A=Math.min(p.count,s.start+s.count);for(let S=d,b=A-1;S<b;S+=m){if(c.fromBufferAttribute(p,S),u.fromBufferAttribute(p,S+1),Wa.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||t.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=a.length;o<s;o++){const r=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}const Qr=new L,es=new L;class Pp extends Lp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let a=0,o=t.count;a<o;a+=2)Qr.fromBufferAttribute(t,a),es.fromBufferAttribute(t,a+1),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+Qr.distanceTo(es);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xs extends Ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ts=new at,so=new po,Xn=new Sn,Yn=new L;class Ip extends ht{constructor(e=new Ft,t=new Xs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,o=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xn.copy(n.boundingSphere),Xn.applyMatrix4(a),Xn.radius+=o,e.ray.intersectsSphere(Xn)===!1)return;ts.copy(a).invert(),so.copy(e.ray).applyMatrix4(ts);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let g=h,_=m;g<_;g++){const p=c.getX(g);Yn.fromBufferAttribute(f,p),is(Yn,p,l,a,e,t,this)}}else{const h=Math.max(0,s.start),m=Math.min(f.count,s.start+s.count);for(let g=h,_=m;g<_;g++)Yn.fromBufferAttribute(f,g),is(Yn,g,l,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=a.length;o<s;o++){const r=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}function is(i,e,t,n,a,o,s){const r=so.distanceSqToPoint(i);if(r<t){const l=new L;so.closestPointToPoint(i,l),l.applyMatrix4(n);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;o.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:e,face:null,object:s})}}class xo extends Ft{constructor(e=1,t=.4,n=12,a=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:a,arc:o},n=Math.floor(n),a=Math.floor(a);const s=[],r=[],l=[],c=[],u=new L,f=new L,h=new L;for(let m=0;m<=n;m++)for(let g=0;g<=a;g++){const _=g/a*o,p=m/n*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(_),f.y=(e+t*Math.cos(p))*Math.sin(_),f.z=t*Math.sin(p),r.push(f.x,f.y,f.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/a),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=a;g++){const _=(a+1)*m+g-1,p=(a+1)*(m-1)+g-1,d=(a+1)*(m-1)+g,A=(a+1)*m+g;s.push(_,p,A),s.push(p,d,A)}this.setIndex(s),this.setAttribute("position",new Lt(r,3)),this.setAttribute("normal",new Lt(l,3)),this.setAttribute("uv",new Lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Dp extends Ft{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,a=new L,o=new L;if(e.index!==null){const s=e.attributes.position,r=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:r.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const f=l[c],h=f.start,m=f.count;for(let g=h,_=h+m;g<_;g+=3)for(let p=0;p<3;p++){const d=r.getX(g+p),A=r.getX(g+(p+1)%3);a.fromBufferAttribute(s,d),o.fromBufferAttribute(s,A),ns(a,o,n)===!0&&(t.push(a.x,a.y,a.z),t.push(o.x,o.y,o.z))}}}else{const s=e.attributes.position;for(let r=0,l=s.count/3;r<l;r++)for(let c=0;c<3;c++){const u=3*r+c,f=3*r+(c+1)%3;a.fromBufferAttribute(s,u),o.fromBufferAttribute(s,f),ns(a,o,n)===!0&&(t.push(a.x,a.y,a.z),t.push(o.x,o.y,o.z))}}this.setAttribute("position",new Lt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function ns(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,a=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(a)===!0?!1:(t.add(n),t.add(a),!0)}class qa extends Ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ys,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class So extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Xa=new at,as=new L,os=new L;class Ys{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mo,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;as.setFromMatrixPosition(e.matrixWorld),t.position.copy(as),os.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(os),t.updateMatrixWorld(),Xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const rs=new at,un=new L,Ya=new L;class Np extends Ys{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,a=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),un.setFromMatrixPosition(e.matrixWorld),n.position.copy(un),Ya.copy(n.position),Ya.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ya),n.updateMatrixWorld(),a.makeTranslation(-un.x,-un.y,-un.z),rs.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rs)}}class Up extends So{constructor(e,t,n=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=a,this.shadow=new Np}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Fp extends Ys{constructor(){super(new Bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Op extends So{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new Fp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Bp extends So{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uo);function zp(i="scrubbing-canvas"){const e=document.getElementById(i);if(!e)return null;const t=new qs({canvas:e,antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,2));const n=new Rp;n.background=new Fe(920586),n.fog=new vo(920586,.005);const a=new wt(50,e.clientWidth/e.clientHeight,.1,500);a.position.set(0,4,18);const o=new Bp(16774630,1.4);n.add(o);const s=new Op(13938251,3.5);s.position.set(20,30,20),n.add(s);const r=new Up(16772820,3,100);r.position.set(0,8,0),n.add(r);const l=new nn(2.4,12,2.4),c=new Dp(l),u=new qa({color:2038550,roughness:.2,metalness:.88}),f=new ro({color:13938251,transparent:!0,opacity:.75}),h=new qa({color:2827292,roughness:.15,metalness:.95}),m=new ro({color:16115128,transparent:!0,opacity:.95}),g=new hn;n.add(g);const _=60;for(let z=0;z<_;z++){const V=z%3===0,q=new qt(l,V?h:u),ee=new Pp(c,V?m:f);q.add(ee);const Z=z/_*Math.PI*4,H=5.5+z%6*1.8,$=Math.cos(Z)*H,se=Math.sin(Z)*H*1.2,fe=Math.random()*2.5+1.2;q.position.set($,(Math.random()-.5)*2,se),q.scale.set(.9,fe,.9),q.rotation.y=Z+Math.PI/2,g.add(q)}const p=new xo(6.5,.1,16,80),d=new qa({color:13938251,emissive:9858846,roughness:.15,metalness:.95}),A=[],S=6;for(let z=0;z<S;z++){const V=new qt(p,d);V.position.set(0,2+(z-2.5)*1.8,0),V.rotation.x=Math.PI/2+z*.1,V.scale.setScalar(1+z*.25),n.add(V),A.push(V)}const b=12e3,P=new Ft,T=new Float32Array(b*3),C=new Float32Array(b*3),Y=[new Fe(13938251),new Fe(16115128),new Fe(11042080),new Fe(16777215)];for(let z=0;z<b;z++){T[z*3+0]=(Math.random()-.5)*50,T[z*3+1]=(Math.random()-.5)*30+3,T[z*3+2]=(Math.random()-.5)*50;const V=Y[Math.floor(Math.random()*Y.length)];C[z*3+0]=V.r,C[z*3+1]=V.g,C[z*3+2]=V.b}P.setAttribute("position",new Ut(T,3)),P.setAttribute("color",new Ut(C,3));const M=new Xs({size:.2,vertexColors:!0,transparent:!0,opacity:.9,blending:ja}),y=new Ip(P,M);n.add(y);function k(){if(!e)return;const z=e.clientWidth,V=e.clientHeight;a.aspect=z/V,a.updateProjectionMatrix(),t.setSize(z,V,!1)}window.addEventListener("resize",k),k();let W=0;const te=document.getElementById("jornada");function R(){if(!te)return 0;const z=te.getBoundingClientRect(),V=te.offsetHeight-window.innerHeight;if(V<=0)return 0;const q=-z.top;return Math.max(0,Math.min(1,q/V))}let O,G=0;function X(){O=requestAnimationFrame(X),G+=.015;const z=R();W+=(z-W)*.1;const V=W*Math.PI*2.2+G*.1,q=22+Math.sin(W*Math.PI)*4,ee=4.5+Math.sin(W*Math.PI*3)*2.5;a.position.x=Math.sin(V)*q,a.position.z=Math.cos(V)*q,a.position.y=ee,a.lookAt(0,2,0);for(let Z=0;Z<A.length;Z++)A[Z].rotation.z=G*.3+Z*.35+W*Math.PI,A[Z].rotation.y=G*.15;g.rotation.y=G*.05+W*.8,y.rotation.y=-G*.03,t.render(n,a)}return X(),{destroy:()=>{cancelAnimationFrame(O),window.removeEventListener("resize",k),t.dispose()}}}var ss="1.3.27";function $s(i,e,t){return Math.max(i,Math.min(e,t))}function Hp(i,e,t){return(1-t)*i+t*e}function Gp(i,e,t,n){return Hp(i,e,1-Math.exp(-t*n))}function Vp(i,e){return(i%e+e)%e}var kp=class{constructor(){ue(this,"isRunning",!1);ue(this,"value",0);ue(this,"from",0);ue(this,"to",0);ue(this,"currentTime",0);ue(this,"lerp");ue(this,"duration");ue(this,"easing");ue(this,"onUpdate")}advance(i){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;const n=$s(0,this.currentTime/this.duration,1);e=n>=1;const a=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*a}else this.lerp?(this.value=Gp(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:a,onStart:o,onUpdate:s}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=a,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=s}};function Wp(i,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,n)},e)}}var qp=class{constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){ue(this,"width",0);ue(this,"height",0);ue(this,"scrollHeight",0);ue(this,"scrollWidth",0);ue(this,"debouncedResize");ue(this,"wrapperResizeObserver");ue(this,"contentResizeObserver");ue(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});ue(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});ue(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=e,t&&(this.debouncedResize=Wp(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,e;(i=this.wrapperResizeObserver)==null||i.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},js=class{constructor(){ue(this,"events",{})}emit(i,...e){var n;const t=this.events[i]||[];for(let a=0,o=t.length;a<o;a++)(n=t[a])==null||n.call(t,...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}}off(i,e){var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const Xp=100/6,si={passive:!1};function ls(i,e){return i===1?Xp:i===2?e:1}var Yp=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){ue(this,"touchStart",{x:0,y:0});ue(this,"lastDelta",{x:0,y:0});ue(this,"window",{width:0,height:0});ue(this,"emitter",new js);ue(this,"onTouchStart",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});ue(this,"onTouchMove",i=>{const{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,a=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:a},this.emitter.emit("scroll",{deltaX:n,deltaY:a,event:i})});ue(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});ue(this,"onWheel",i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i;const a=ls(n,this.window.width),o=ls(n,this.window.height);e*=a,t*=o,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})});ue(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,si),this.element.addEventListener("touchstart",this.onTouchStart,si),this.element.addEventListener("touchmove",this.onTouchMove,si),this.element.addEventListener("touchend",this.onTouchEnd,si)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,si),this.element.removeEventListener("touchstart",this.onTouchStart,si),this.element.removeEventListener("touchmove",this.onTouchMove,si),this.element.removeEventListener("touchend",this.onTouchEnd,si)}};const cs=i=>Math.min(1,1.001-2**(-10*i));var $p=class{constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:a=!1,syncTouchLerp:o=.075,touchInertiaExponent:s=1.7,duration:r,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h=f==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:p,virtualScroll:d,overscroll:A=!0,autoRaf:S=!1,anchors:b=!1,autoToggle:P=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:C=!1,naiveDimensions:Y=C,stopInertiaOnNavigate:M=!1,respectReducedMotion:y=!0}={}){ue(this,"_isScrolling",!1);ue(this,"_isStopped",!1);ue(this,"_isLocked",!1);ue(this,"_preventNextNativeScrollEvent",!1);ue(this,"_resetVelocityTimeout",null);ue(this,"_rafId",null);ue(this,"_isDraggingSelection",!1);ue(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));ue(this,"isTouching");ue(this,"isIos");ue(this,"time",0);ue(this,"userData",{});ue(this,"lastVelocity",0);ue(this,"velocity",0);ue(this,"direction",0);ue(this,"options");ue(this,"targetScroll");ue(this,"animatedScroll");ue(this,"animate",new kp);ue(this,"emitter",new js);ue(this,"dimensions");ue(this,"virtualScroll");ue(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});ue(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});ue(this,"onTransitionEnd",i=>{var e;(e=i.propertyName)!=null&&e.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});ue(this,"onClick",i=>{const e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(a=>t.host===a.host&&t.pathname===a.pathname&&a.hash);if(n){const a=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=decodeURIComponent(n.hash);this.scrollTo(o,a);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});ue(this,"onPointerDown",i=>{i.button===1&&this.reset()});ue(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const a=n.type.includes("touch"),o=n.type.includes("wheel");if(a&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const s=e===0&&t===0;if(this.options.syncTouch&&a&&n.type==="touchstart"&&s&&!this.isStopped&&!this.isLocked){this.reset();return}const r=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(s||r)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(g=>{var _,p,d,A,S;return g instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(g))||((_=g.hasAttribute)==null?void 0:_.call(g,"data-lenis-prevent"))||u==="vertical"&&((p=g.hasAttribute)==null?void 0:p.call(g,"data-lenis-prevent-vertical"))||u==="horizontal"&&((d=g.hasAttribute)==null?void 0:d.call(g,"data-lenis-prevent-horizontal"))||a&&((A=g.hasAttribute)==null?void 0:A.call(g,"data-lenis-prevent-touch"))||o&&((S=g.hasAttribute)==null?void 0:S.call(g,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&a||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=a&&this.options.syncTouch,m=a&&n.type==="touchend";m&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...h?{lerp:m?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});ue(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});ue(this,"raf",i=>{const e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=ss,window.lenis||(window.lenis={}),window.lenis.version=ss,f==="horizontal"&&(window.lenis.horizontal=!0),a===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof r=="number"&&typeof l!="function"?l=cs:typeof l=="function"&&typeof r!="number"&&(r=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:a,syncTouchLerp:o,touchInertiaExponent:s,duration:r,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:m,wheelMultiplier:g,autoResize:_,prevent:p,virtualScroll:d,overscroll:A,autoRaf:S,anchors:b,autoToggle:P,allowNestedScroll:T,naiveDimensions:Y,stopInertiaOnNavigate:M,respectReducedMotion:y},this.dimensions=new qp(i,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Yp(t,{touchMultiplier:m,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=i.targetTouches[0]??i.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const a=n[0],o=n[n.length-1],s=40,r=Math.hypot(t.clientX-a.left,t.clientY-a.top)<=s,l=Math.hypot(t.clientX-o.right,t.clientY-o.bottom)<=s;return r||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:a=!0,lerp:o=a?this.options.lerp:void 0,duration:s=a?this.options.duration:void 0,easing:r=a?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if(this.prefersReducedMotion&&(a?t=!0:(o=1,s=void 0,r=void 0)),(this.isStopped||this.isLocked)&&!u)return;let h=i,m=e;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let g=null;if(typeof h=="string"?(g=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),g||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof Element&&(g=h),g){if(this.options.wrapper!==window){const b=this.rootElement.getBoundingClientRect();m-=this.isHorizontal?b.left:b.top}const _=g.getBoundingClientRect(),p=getComputedStyle(g),d=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),A=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(A.scrollPaddingLeft):Number.parseFloat(A.scrollPaddingTop);h=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(d)?0:d)-(Number.isNaN(S)?0:S)}}if(typeof h=="number"){if(h+=m,this.options.infinite){if(a){this.targetScroll=this.animatedScroll=this.scroll;const g=h-this.animatedScroll;g>this.limit/2?h-=this.limit:g<-this.limit/2&&(h+=this.limit)}}else h=$s(0,h,this.limit);if(h===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}a||(this.targetScroll=h),typeof s=="number"&&typeof r!="function"?r=cs:typeof r=="function"&&typeof s!="number"&&(s=1),this.animate.fromTo(this.animatedScroll,h,{duration:s,easing:r,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),a&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){const n=Date.now();i._lenis||(i._lenis={});const a=i._lenis;let o,s,r,l,c,u,f,h,m,g;if(n-(a.time??0)>2e3){a.time=Date.now();const T=window.getComputedStyle(i);if(a.computedStyle=T,o=["auto","overlay","scroll"].includes(T.overflowX),s=["auto","overlay","scroll"].includes(T.overflowY),c=["auto"].includes(T.overscrollBehaviorX),u=["auto"].includes(T.overscrollBehaviorY),a.hasOverflowX=o,a.hasOverflowY=s,!(o||s))return!1;f=i.scrollWidth,h=i.scrollHeight,m=i.clientWidth,g=i.clientHeight,r=f>m,l=h>g,a.isScrollableX=r,a.isScrollableY=l,a.scrollWidth=f,a.scrollHeight=h,a.clientWidth=m,a.clientHeight=g,a.hasOverscrollBehaviorX=c,a.hasOverscrollBehaviorY=u}else r=a.isScrollableX,l=a.isScrollableY,o=a.hasOverflowX,s=a.hasOverflowY,f=a.scrollWidth,h=a.scrollHeight,m=a.clientWidth,g=a.clientHeight,c=a.hasOverscrollBehaviorX,u=a.hasOverscrollBehaviorY;if(!(o&&r||s&&l))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let p,d,A,S,b,P;if(_==="horizontal")p=Math.round(i.scrollLeft),d=f-m,A=e,S=o,b=r,P=c;else if(_==="vertical")p=Math.round(i.scrollTop),d=h-g,A=t,S=s,b=l,P=u;else return!1;return!P&&(p>=d||p<=0)?!0:(A>0?p<d:p>0)&&S&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?Vp(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(const i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};const $a={pt:{pageTitle:"KMY Prime | Ativos Imobiliários de Alto Padrão",navSegmentos:"Segmentos",navJornada:"Track Record",navCatalogo:"Catálogo",navDecoracao:"Decoração",navSobre:"Quem Somos",navContato:"Contato",heroBadge:"Planejamento Imobiliário & Ativos",heroTitleHtml:'Aquisição & Gestão de <span class="text-gold-gradient">Ativos de Alto Valor</span>',heroDesc:"Intermediação qualificada, sigilosa e estratégica em Galpões Logísticos, Prédios Corporativos, Hotéis, Pousadas, Hospitais, Lajes Corporativas, Lojas Comerciais, Lotes MCMV e Shoppings com atuação nacional e internacional.",heroSearchLabel:"Segmento de Interesse",heroSearchBtn:"Explorar Portfólio",heroOptTodos:"Todos os Ativos (19)",heroOptGalpoes:"Galpões Logísticos (4)",heroOptPredios:"Prédios Corporativos (4)",heroOptHoteis:"Hotéis & Resorts (2)",heroOptPousadas:"Pousadas (2)",heroOptHospitais:"Hospitais & Clínicas (2)",heroOptLajes:"Lajes Corporativas (2)",heroOptLojas:"Lojas & Varejo (1)",heroOptMcmv:"Aptos MCMV (1)",heroOptShopping:"Shoppings & Malls (1)",metricVal1:"Prime",metricLbl1:"Governança Sólida",metricVal2:"Global",metricLbl2:"Atuação Nacional e Internacional",metricVal3:"Executivo",metricLbl3:"Head de Novos Negócios",heroBankingBadge:"✦ Aceitamos SBCL e DLC · LOI Bancarizada",corpVideoBadge:"Apresentação Institucional",corpVideoTitle:"Vídeo Corporativo KMY Prime",corpVideoSub:"Conheça nossa estrutura, governança e atuação estratégica em ativos imobiliários de alto valor no Brasil e no exterior.",catBadge:"Especialidades & Portfólio",catTitle:"Segmentos de Atuação Especializada",catSub:"Soluções imobiliárias sob medida para investidores institucionais, redes hoteleiras e family offices.",assetSingle:"ativo disponível",assetPlural:"ativos disponíveis",scrubBadge1:"Fase 01 · Prospecção",scrubTitle1:"Curadoria Rigorosa & Off-Market",scrubText1:"Acesso a ativos estratégicos que não chegam ao mercado aberto. Mapeamento de oportunidades de alta rentabilidade com total sigilo comercial.",scrubBadge2:"Fase 02 · Due Diligence",scrubTitle2:"Auditoria Jurídica & Valoração",scrubText2:"Análise minuciosa de certidões, regularidade fundiária, laudos de engenharia, capacidade de cap rate e mitigação integral de riscos.",scrubBadge3:"Fase 03 · Estruturação",scrubTitle3:"Engenharia Financeira & Contratual",scrubText3:"Modelagem de contratos atípicos, arrendamentos comerciais de longo prazo, Built to Suit (BTS) e Sale & Leaseback (SLB). Aceitamos SBCL e DLC · LOI Bancarizada.",scrubBadge4:"Fase 04 · Concretização",scrubTitle4:"Governança, Entrega & Sucesso",scrubText4:"Fechamento sob assessoria executiva especializada, assegurando segurança jurídica, satisfação e perenidade patrimonial a cada transação.",catalogBadge:"Catálogo Executivo",catalogTitle:"Ativos Imobiliários Disponíveis",catalogSub:"Consulte a ficha técnica de cada oportunidade e entre em contato direto pelo WhatsApp com o anúncio vinculado.",noAssetsFound:"Nenhum ativo encontrado nesta categoria no momento.",suitesLabel:"suítes",leitosLabel:"leitos",vagasLabel:"vagas",cardClassLabel:"Classificação",cardHeightLabel:"Pé-direito",cardFloorLabel:"Piso",cardDeliveryLabel:"Entrega",cardPartLabel:"Participação",btnDetail:"Ficha Técnica",waCardTitle:"Conversar no WhatsApp",modalCloseAria:"Fechar modal",modalInvestLabel:"Valor do Investimento",modalTotalArea:"Área Total:",modalBuiltArea:"Área Construída:",modalAbl:"Área Bruta Locável:",modalClass:"Classificação:",modalHeight:"Pé-direito:",modalFloor:"Capacidade do Piso:",modalDelivery:"Entrega Prevista:",modalPart:"Participação:",modalConfig:"Configuração:",modalBeds:"Capacidade Operacional:",modalSuites:"Suítes:",modalParking:"Vagas:",modalDescHeading:"Descrição do Empreendimento",modalHighlightsHeading:"Destaques & Diferenciais KMY",modalCeoRole:"Marta A. Soriano — Decoradora & CEO Novos Negócios",modalCeoSub:"Atendimento Executivo Exclusivo KMY Prime",modalWaBtn:"Solicitar Informações no WhatsApp",decorBadge:"Design & Sofisticação",decorTitle:"Decoração de Interiores KMY Prime",decorP1:"Além da compra e venda de ativos, a KMY Prime desenvolve projetos completos de arquitetura de interiores para hotéis, pousadas de charme, lajes executivas e residências de alto padrão em todo o Brasil e no exterior.",decorP2:"Do primeiro briefing à pós-entrega, coordenamos cada detalhe com rigor estético, fornecedores nobres e gestão técnica total do cronograma.",decorCta:"Agendar Briefing de Decoração",decorMethodTitle:"Metodologia em 7 Etapas",decorMethodSub:"Processo estruturado que garante previsibilidade, conformidade orçamentária e acabamento impecável.",aboutBadge:"História & Propósito",aboutTitle:"KMY Prime Planejamento Imobiliário",aboutP1Html:"A <strong>KMY PRIME PLANEJAMENTO IMOBILIÁRIO LTDA</strong> atua com excelência na estruturação, compra e venda de Ativos de alto valor no mercado imobiliário, locação estratégica e arrendamento comercial com presença nacional e internacional.",aboutP2:"Com governança corporativa de alto padrão, a KMY consolidou uma sólida rede de relacionamento que inclui proprietários de grandes ativos, grupos de hospitalidade, incorporadores e fundos imobiliários, assegurando transações ágeis, sigilosas e respaldadas juridicamente.",aboutRole:"Decoradora & CEO Novos Negócios",aboutCard1Title:"Atuação Nacional e Internacional",aboutCard1Text:"Estrutura ágil para negociações em capitais financeiras, polos litorâneos turísticos, eixos de agronegócio e mercados internacionais.",aboutCard2Title:"Especialização em Hospitalidade & Varejo",aboutCard2Text:"Expertise comprovada na avaliação, comercialização e arrendamento de Hotéis, Pousadas e Shoppings Centers.",aboutCard3Title:"Segurança & Confidencialidade",aboutCard3Text:"Termos de sigilo (NDA) e acompanhamento próximo em todas as fases da transação imobiliária.",aboutCard4Title:"Garantias & Operações Bancarizadas",aboutCard4Text:"Aceitamos SBCL e DLC · LOI Bancarizada para operações estruturadas nacionais e internacionais.",contactBadge:"Atendimento Personalizado",contactTitle:"Inicie Sua Próxima Operação",contactDesc:"Deseja adquirir um ativo, colocar seu hotel/imóvel à venda com discrição, ou solicitar um projeto de interiores? Envie sua mensagem e receba retorno direto da nossa diretoria.",contactWaLabel:"WhatsApp Direto",contactEmailLabel:"E-mails Oficiais",contactPortalLabel:"Portal & Redes",formNameLabel:"Seu Nome / Razão Social *",formNamePlaceholder:"Ex: Roberto Silveira / Grupo Hotelier",formPhoneLabel:"WhatsApp com DDD *",formPhonePlaceholder:"Ex: (11) 99999-9999",formInterestLabel:"Principal Interesse *",formOptGalpoes:"Galpões Logísticos (Venda / Locação)",formOptPredios:"Prédios Corporativos (Venda / Locação)",formOpt1:"Comprar Ativo Imobiliário",formOpt2:"Vender Imóvel / Hotel (Off-Market)",formOpt3:"Arrendamento de Pousada ou Hotel",formOpt4:"Locação de Laje Corporativa ou Loja",formOpt5:"Investir em Lote MCMV",formOpt6:"Projeto de Decoração de Interiores",formOpt7:"Outro assunto",formMsgLabel:"Mensagem / Observações",formMsgPlaceholder:"Descreva brevemente sua demanda ou o código do imóvel de interesse...",formSubmitBtn:"Enviar via WhatsApp Oficial",footerBrandDescHtml:"KMY PRIME PLANEJAMENTO IMOBILIÁRIO LTDA<br>Intermediação de compra, venda, locação e arrendamento de Ativos Imobiliários com atuação nacional e internacional e Decoração de Interiores de alto luxo.",footerRole:"Decoradora & CEO Novos Negócios",footerColSegments:"Segmentos",footerSegGalpoes:"Galpões Logísticos",footerSegPredios:"Prédios Corporativos",footerSeg1:"Hotéis & Resorts",footerSeg2:"Pousadas",footerSeg3:"Hospitais & Clínicas",footerSeg4:"Lajes Corporativas",footerSeg5:"Lojas & Varejo",footerSeg6:"Aptos MCMV",footerSeg7:"Shoppings",footerColInst:"Institucional",footerInst1:"Quem Somos",footerInst2:"Track Record",footerInst3:"Decoração de Interiores",footerInst4:"Fale com a Diretoria",footerColContact:"Contato",footerCorpHeading:"INFORMAÇÕES CORPORATIVAS",footerRights:"© 2026 KMY PRIME PLANEJAMENTO IMOBILIÁRIO LTDA. Todos os direitos reservados.",footerDevBy:"Desenvolvido por"},en:{pageTitle:"KMY Prime | High-Value Real Estate Assets",navSegmentos:"Segments",navJornada:"Track Record",navCatalogo:"Portfolio",navDecoracao:"Interior Design",navSobre:"About Us",navContato:"Contact",heroBadge:"Real Estate Planning & Assets",heroTitleHtml:'Acquisition & Management of <span class="text-gold-gradient">High-Value Assets</span>',heroDesc:"Qualified, confidential, and strategic intermediation in Logistic Warehouses, Corporate Buildings, Hotels, Boutique Inns, Hospitals, Corporate Floors, Retail Stores, Residential Lots, and Shopping Malls with national and international reach.",heroSearchLabel:"Segment of Interest",heroSearchBtn:"Explore Portfolio",heroOptTodos:"All Assets (19)",heroOptGalpoes:"Logistic Warehouses (4)",heroOptPredios:"Corporate Buildings (4)",heroOptHoteis:"Hotels & Resorts (2)",heroOptPousadas:"Boutique Inns (2)",heroOptHospitais:"Hospitals & Clinics (2)",heroOptLajes:"Corporate Floors (2)",heroOptLojas:"Retail Stores (1)",heroOptMcmv:"Residential Lots (1)",heroOptShopping:"Shopping Malls (1)",metricVal1:"Prime",metricLbl1:"Solid Governance",metricVal2:"Global",metricLbl2:"National & International Reach",metricVal3:"Executive",metricLbl3:"Head of New Business",heroBankingBadge:"✦ We Accept SBCL / SBLC & DLC · Bank-Endorsed LOI",corpVideoBadge:"Corporate Presentation",corpVideoTitle:"KMY Prime Corporate Video",corpVideoSub:"Discover our structure, governance, and strategic operations in high-value real estate assets across Brazil and internationally.",catBadge:"Specialties & Portfolio",catTitle:"Specialized Market Segments",catSub:"Tailor-made real estate solutions for institutional investors, hotel chains, and family offices.",assetSingle:"available asset",assetPlural:"available assets",scrubBadge1:"Phase 01 · Sourcing",scrubTitle1:"Rigorous & Off-Market Curation",scrubText1:"Access to strategic assets that never reach the open market. Mapping high-yield opportunities under strict commercial confidentiality.",scrubBadge2:"Phase 02 · Due Diligence",scrubTitle2:"Legal Audit & Valuation",scrubText2:"Thorough analysis of certificates, land compliance, engineering reports, cap rate capacity, and comprehensive risk mitigation.",scrubBadge3:"Phase 03 · Structuring",scrubTitle3:"Financial & Contractual Engineering",scrubText3:"Modeling of atypical contracts, long-term commercial leases, Built to Suit (BTS), and Sale & Leaseback (SLB). We accept SBCL / SBLC & DLC · Bank-Endorsed LOI.",scrubBadge4:"Phase 04 · Closing",scrubTitle4:"Governance, Delivery & Success",scrubText4:"Closing under specialized executive advisory, ensuring legal security, satisfaction, and long-term asset preservation in every transaction.",catalogBadge:"Executive Portfolio",catalogTitle:"Available Real Estate Assets",catalogSub:"Review the technical fact sheet of each opportunity and contact us directly via WhatsApp with the linked listing.",noAssetsFound:"No assets found in this category at the moment.",suitesLabel:"suites",leitosLabel:"beds",vagasLabel:"parking spaces",cardClassLabel:"Class",cardHeightLabel:"Clear Height",cardFloorLabel:"Floor Load",cardDeliveryLabel:"Delivery",cardPartLabel:"Ownership",btnDetail:"Fact Sheet",waCardTitle:"Chat on WhatsApp",modalCloseAria:"Close modal",modalInvestLabel:"Investment Value",modalTotalArea:"Total Area:",modalBuiltArea:"Built Area:",modalAbl:"Gross Leasable Area:",modalClass:"Classification:",modalHeight:"Clear Height:",modalFloor:"Floor Load Capacity:",modalDelivery:"Expected Delivery:",modalPart:"Ownership:",modalConfig:"Configuration:",modalBeds:"Operational Capacity:",modalSuites:"Suites:",modalParking:"Parking Spaces:",modalDescHeading:"Property Description",modalHighlightsHeading:"KMY Highlights & Features",modalCeoRole:"Marta A. Soriano — Interior Designer & CEO of New Business",modalCeoSub:"KMY Prime Exclusive Executive Advisory",modalWaBtn:"Request Information on WhatsApp",decorBadge:"Design & Sophistication",decorTitle:"KMY Prime Interior Design",decorP1:"Beyond asset acquisition and sales, KMY Prime develops full-scale interior architecture projects for hotels, boutique inns, executive floors, and luxury residences across Brazil and internationally.",decorP2:"From initial briefing to post-delivery, we coordinate every detail with aesthetic rigor, noble suppliers, and complete technical schedule management.",decorCta:"Schedule a Design Briefing",decorMethodTitle:"7-Step Methodology",decorMethodSub:"Structured process ensuring predictability, budget compliance, and flawless finishing.",aboutBadge:"History & Purpose",aboutTitle:"KMY Prime Real Estate Planning",aboutP1Html:"<strong>KMY PRIME PLANEJAMENTO IMOBILIÁRIO LTDA</strong> excels in structuring, buying, and selling high-value real estate assets, strategic leasing, and commercial operations with national and international presence.",aboutP2:"With top-tier corporate governance, KMY has built a solid relationship network including major asset owners, hospitality groups, developers, and real estate funds, ensuring agile, confidential, and legally backed transactions.",aboutRole:"Interior Designer & CEO of New Business",aboutCard1Title:"National & International Reach",aboutCard1Text:"Agile structure for negotiations in financial capitals, coastal tourist hubs, agribusiness corridors, and international markets.",aboutCard2Title:"Hospitality & Retail Expertise",aboutCard2Text:"Proven track record in valuation, brokerage, and commercial leasing of Hotels, Boutique Inns, and Shopping Centers.",aboutCard3Title:"Security & Confidentiality",aboutCard3Text:"Non-disclosure agreements (NDA) and dedicated executive oversight throughout every stage of the real estate transaction.",aboutCard4Title:"Bank Guarantees & Structured Finance",aboutCard4Text:"We accept SBCL / SBLC and DLC · Bank-Endorsed LOI for domestic and international structured transactions.",contactBadge:"Personalized Advisory",contactTitle:"Start Your Next Transaction",contactDesc:"Looking to acquire an asset, list your hotel or property confidentially, or request an interior design project? Send your message and receive direct feedback from our board.",contactWaLabel:"Direct WhatsApp",contactEmailLabel:"Official E-mails",contactPortalLabel:"Website & Social",formNameLabel:"Your Name / Company Name *",formNamePlaceholder:"E.g.: John Smith / Hotelier Group",formPhoneLabel:"WhatsApp / Phone Number *",formPhonePlaceholder:"E.g.: +55 (11) 99999-9999",formInterestLabel:"Primary Interest *",formOptGalpoes:"Logistic Warehouses (Sale / Lease)",formOptPredios:"Corporate Buildings (Sale / Lease)",formOpt1:"Acquire Real Estate Asset",formOpt2:"Sell Property / Hotel (Off-Market)",formOpt3:"Lease Boutique Inn or Hotel",formOpt4:"Lease Corporate Floor or Retail Store",formOpt5:"Invest in Residential Lot (MCMV)",formOpt6:"Interior Design Project",formOpt7:"Other Inquiry",formMsgLabel:"Message / Notes",formMsgPlaceholder:"Briefly describe your inquiry or the asset code of interest...",formSubmitBtn:"Send via Official WhatsApp",footerBrandDescHtml:"KMY PRIME PLANEJAMENTO IMOBILIÁRIO LTDA<br>Intermediation of purchase, sale, leasing, and management of High-Value Real Estate Assets nationally and internationally, plus Luxury Interior Design.",footerRole:"Interior Designer & CEO of New Business",footerColSegments:"Segments",footerSegGalpoes:"Logistic Warehouses",footerSegPredios:"Corporate Buildings",footerSeg1:"Hotels & Resorts",footerSeg2:"Boutique Inns",footerSeg3:"Hospitals & Clinics",footerSeg4:"Corporate Floors",footerSeg5:"Retail Stores",footerSeg6:"Residential Lots",footerSeg7:"Shopping Malls",footerColInst:"Corporate",footerInst1:"About Us",footerInst2:"Track Record",footerInst3:"Interior Design",footerInst4:"Speak with the Board",footerColContact:"Contact",footerCorpHeading:"CORPORATE INFORMATION",footerRights:"© 2026 KMY PRIME PLANEJAMENTO IMOBILIÁRIO LTDA. All rights reserved.",footerDevBy:"Developed by"},zh:{pageTitle:"KMY Prime | 高端商业与机构级房地产资产",navSegmentos:"业务板块",navJornada:"往绩记录",navCatalogo:"资产目录",navDecoracao:"室内设计",navSobre:"关于我们",navContato:"联系我们",heroBadge:"房地产规划与高价值资产管理",heroTitleHtml:'高价值商业地产的 <span class="text-gold-gradient">收购与资产管理</span>',heroDesc:"专注于物流仓储、企业写字楼、酒店度假村、精品旅馆、综合医院、企业整层办公、商业名店、住宅批次 (MCMV) 及购物中心的专业、保密与战略性投资中介服务，业务覆盖巴西全国及国际市场。",heroSearchLabel:"投资意向板块",heroSearchBtn:"浏览资产组合",heroOptTodos:"全部资产 (19)",heroOptGalpoes:"物流仓储 (4)",heroOptPredios:"企业写字楼 (4)",heroOptHoteis:"酒店与度假村 (2)",heroOptPousadas:"精品旅馆 (2)",heroOptHospitais:"医院与诊所 (2)",heroOptLajes:"企业整层办公 (2)",heroOptLojas:"商业商铺 (1)",heroOptMcmv:"住宅批次 MCMV (1)",heroOptShopping:"购物中心 (1)",metricVal1:"Prime",metricLbl1:"稳健企业治理",metricVal2:"Global",metricLbl2:"巴西及国际业务布局",metricVal3:"Executive",metricLbl3:"新业务拓展总监",heroBankingBadge:"✦ 接受 SBCL / SBLC 与 DLC 信用证 · 银行背书意向书 (LOI)",corpVideoBadge:"企业形象展示",corpVideoTitle:"KMY Prime 企业宣传片",corpVideoSub:"了解我们在巴西及国际高价值房地产资产领域的组织架构、企业治理与战略运营。",catBadge:"专业领域与投资组合",catTitle:"专业化细分市场板块",catSub:"为机构投资者、国际酒店集团及家族办公室量身定制房地产投资解决方案。",assetSingle:"项可用资产",assetPlural:"项可用资产",scrubBadge1:"第一阶段 · 资产甄选",scrubTitle1:"严格甄选与场外保密资产 (Off-Market)",scrubText1:"直达未在公开市场挂牌的战略性核心资产，在高度商业保密前提下锁定高回报投资机会。",scrubBadge2:"第二阶段 · 尽职调查",scrubTitle2:"法律审计与资产估值",scrubText2:"全面审查产权证明、土地合规性、工程评估报告、资本化率 (Cap Rate) 潜力并进行全方位风险控制。",scrubBadge3:"第三阶段 · 交易架构",scrubTitle3:"金融与合同工程设计",scrubText3:"定制非典型租赁合同、长期商业租约、定制开发 (BTS) 及售后回租 (SLB)。接受 SBCL / SBLC 与 DLC · 银行背书意向书 (LOI)。",scrubBadge4:"第四阶段 · 交易交割",scrubTitle4:"企业治理、交付与圆满成功",scrubText4:"在专业高管团队护航下完成交割，确保每一笔交易的法律安全、客户满意与家族财富长久增值。",catalogBadge:"高管专属目录",catalogTitle:"可投资房地产资产组合",catalogSub:"查阅各项投资机会的技术参数表，并通过绑定房源的 WhatsApp 直接与我们取得联系。",noAssetsFound:"当前分类暂无可用资产。",suitesLabel:"间套房",leitosLabel:"张床位",vagasLabel:"个车位",cardClassLabel:"评级",cardHeightLabel:"净高",cardFloorLabel:"地面承重",cardDeliveryLabel:"预计交付",cardPartLabel:"产权比例",btnDetail:"技术参数表",waCardTitle:"通过 WhatsApp 咨询",modalCloseAria:"关闭窗口",modalInvestLabel:"投资价值",modalTotalArea:"总面积：",modalBuiltArea:"建筑面积：",modalAbl:"总可租面积 (ABL)：",modalClass:"资产评级：",modalHeight:"室内净高：",modalFloor:"地面承重：",modalDelivery:"预计交付：",modalPart:"产权比例：",modalConfig:"建筑配置：",modalBeds:"运营容量：",modalSuites:"套房数量：",modalParking:"停车位：",modalDescHeading:"项目详细介绍",modalHighlightsHeading:"KMY 核心亮点与优势",modalCeoRole:"Marta A. Soriano — 室内设计师兼新业务首席执行官 (CEO)",modalCeoSub:"KMY Prime 专属高管级投资顾问服务",modalWaBtn:"通过 WhatsApp 索取完整投资备忘录",decorBadge:"设计与奢华美学",decorTitle:"KMY Prime 高端室内设计",decorP1:"除大宗资产收购与出售外，KMY Prime 还为巴西及海外的酒店、精品旅馆、行政办公楼层及奢华私宅开发全方位室内建筑设计项目。",decorP2:"从初次需求沟通到售后交付，我们以严苛的美学标准、顶级供应商资源及全周期进度管理协调每一个细节。",decorCta:"预约室内设计简报会议",decorMethodTitle:"七步法标准流程",decorMethodSub:"结构化流程管理，确保进度可预期、预算严格受控及极致工艺品质。",aboutBadge:"发展历程与使命",aboutTitle:"KMY Prime 房地产投资规划",aboutP1Html:"<strong>KMY PRIME PLANEJAMENTO IMOBILIÁRIO LTDA</strong> 致力于高价值房地产资产的架构设计、收购与出售、战略性租赁及商业运营，业务遍及巴西全国与国际市场。",aboutP2:"凭借高标准的企业治理，KMY 建立了深厚的关系网络，涵盖大型资产业主、国际酒店集团、开发商及房地产投资基金，确保交易敏捷、保密且具备完备的法律保障。",aboutRole:"室内设计师兼新业务首席执行官 (CEO)",aboutCard1Title:"巴西全国及国际业务布局",aboutCard1Text:"敏捷的交易架构，覆盖金融首府、海滨旅游胜地、农业综合企业走廊及全球国际市场。",aboutCard2Title:"酒店与商业零售领域专长",aboutCard2Text:"在酒店、精品旅馆及大型购物中心的估值、经纪与商业租赁方面拥有丰富成功经验。",aboutCard3Title:"安全保障与高度保密",aboutCard3Text:"签署保密协议 (NDA)，并在房地产交易的每一个阶段提供高管团队贴身督导。",aboutCard4Title:"国际银行担保与结构化金融",aboutCard4Text:"接受 SBCL / SBLC 备用信用证与 DLC 跟单信用证 · 接受银行背书购买意向书 (LOI Bancarizada)。",contactBadge:"专属定制顾问服务",contactTitle:"开启您的下一笔资产交易",contactDesc:"希望收购优质资产、以保密方式出售您的酒店/物业，或委托高端室内设计项目？请发送您的信息，我们的董事会将直接与您联系。",contactWaLabel:"官方 WhatsApp 专线",contactEmailLabel:"官方电子邮箱",contactPortalLabel:"官方网站与社交媒体",formNameLabel:"您的姓名 / 公司名称 *",formNamePlaceholder:"例如：王先生 / 国际投资集团",formPhoneLabel:"WhatsApp / 联系电话 *",formPhonePlaceholder:"例如：+86 138 0000 0000 / +55 (11) 99999-9999",formInterestLabel:"主要投资意向 *",formOptGalpoes:"物流仓储（收购 / 租赁）",formOptPredios:"企业写字楼（收购 / 租赁）",formOpt1:"收购商业房地产资产",formOpt2:"出售物业 / 酒店（场外保密交易 Off-Market）",formOpt3:"精品旅馆或酒店商业租赁",formOpt4:"企业整层办公或商业商铺租赁",formOpt5:"投资住宅批次项目 (MCMV)",formOpt6:"高端室内建筑设计项目",formOpt7:"其他咨询事项",formMsgLabel:"留言 / 备注信息",formMsgPlaceholder:"请简要描述您的投资需求或感兴趣的资产编号...",formSubmitBtn:"通过官方 WhatsApp 发送",footerBrandDescHtml:"KMY PRIME PLANEJAMENTO IMOBILIÁRIO LTDA<br>高价值房地产资产收购、出售、租赁与商业管理（覆盖巴西与国际市场）及顶奢室内设计。",footerRole:"室内设计师兼新业务首席执行官 (CEO)",footerColSegments:"核心板块",footerSegGalpoes:"物流仓储",footerSegPredios:"企业写字楼",footerSeg1:"酒店与度假村",footerSeg2:"精品旅馆",footerSeg3:"医院与诊所",footerSeg4:"企业整层办公",footerSeg5:"商业商铺",footerSeg6:"住宅批次 MCMV",footerSeg7:"购物中心",footerColInst:"关于企业",footerInst1:"关于我们",footerInst2:"往绩记录",footerInst3:"室内设计",footerInst4:"联系董事会",footerColContact:"联系方式",footerCorpHeading:"企业注册信息",footerRights:"© 2026 KMY PRIME PLANEJAMENTO IMOBILIÁRIO LTDA. 保留所有权利。",footerDevBy:"技术开发："},ar:{pageTitle:"KMY Prime | أصول عقارية استثمارية رفيعة المستوى (دبي وأبوظبي)",navSegmentos:"القطاعات",navJornada:"سجل الإنجازات",navCatalogo:"المحفظة العقارية",navDecoracao:"التصميم الداخلي",navSobre:"من نحن",navContato:"اتصل بنا",heroBadge:"التخطيط العقاري وإدارة الأصول",heroTitleHtml:'الاستحواذ وإدارة <span class="text-gold-gradient">الأصول العقارية عالية القيمة</span>',heroDesc:"وساطة استراتيجية ومؤهلة وسرية للغاية في المستودعات اللوجستية، المباني المؤسسية، الفنادق والمنتجعات، المستشفيات، الطوابق المكتبية، المتاجر الفاخرة، المجمعات السكنية ومراكز التسوق بحضور وطني ودولي (البرازيل، دبي، أبوظبي والأسواق العالمية).",heroSearchLabel:"قطاع الاستثمار المطلوب",heroSearchBtn:"استكشاف المحفظة",heroOptTodos:"جميع الأصول (19)",heroOptGalpoes:"المستودعات اللوجستية (4)",heroOptPredios:"المباني المؤسسية (4)",heroOptHoteis:"الفنادق والمنتجعات (2)",heroOptPousadas:"النُزُل الفاخرة (2)",heroOptHospitais:"المستشفيات والعيادات (2)",heroOptLajes:"الطوابق المكتبية (2)",heroOptLojas:"المتاجر والمعارض (1)",heroOptMcmv:"المجمعات السكنية (1)",heroOptShopping:"مراكز التسوق (1)",metricVal1:"Prime",metricLbl1:"حوكمة مؤسسية راسخة",metricVal2:"Global",metricLbl2:"حضور وطني ودولي (دبي / أبوظبي)",metricVal3:"Executive",metricLbl3:"إدارة الأعمال الجديدة",heroBankingBadge:"✦ نقبل اعتمادات SBCL / SBLC و DLC · خطاب نوايا بنكي (LOI Bancarizada)",corpVideoBadge:"العرض المؤسسي",corpVideoTitle:"الفيديو المؤسسي لشركة KMY Prime",corpVideoSub:"تعرف على هيكلتنا وحوكمتنا وعملياتنا الاستراتيجية في الأصول العقارية عالية القيمة في البرازيل ودولياً.",catBadge:"التخصصات والمحفظة الاستثمارية",catTitle:"قطاعات الاستثمار المتخصصة",catSub:"حلول عقارية مصممة خصيصاً للمستثمرين المؤسسيين، الصناديق السيادية، السلاسل الفندقية والمكاتب العائلية في الخليج والعالم.",assetSingle:"أصل متاح",assetPlural:"أصول متاحة",scrubBadge1:"المرحلة 01 · الاستقطاب",scrubTitle1:"انتقاء دقيق وفرص خارج السوق (Off-Market)",scrubText1:"الوصول إلى أصول استراتيجية لا تُعرض في السوق المفتوح، وتحديد فرص ذات عوائد مرتفعة بسرية تجارية تامة.",scrubBadge2:"المرحلة 02 · الفحص النافي للجهالة",scrubTitle2:"التدقيق القانوني وتقييم الأصول",scrubText2:"تحليل شامل للشهادات والامتثال العقاري والتقارير الهندسية وقدرة العائد الرأسمالي (Cap Rate) وتخفيف المخاطر.",scrubBadge3:"المرحلة 03 · الهيكلة المالية",scrubTitle3:"الهندسة المالية والتعاقدية",scrubText3:"صياغة العقود الاستثمارية طويلة الأجل، البناء حسب الطلب (BTS) والبيع وإعادة التأجير (SLB). نقبل SBCL / SBLC و DLC · خطاب نوايا بنكي (LOI).",scrubBadge4:"المرحلة 04 · الإغلاق والتسليم",scrubTitle4:"الحوكمة والتسليم والنجاح المستدام",scrubText4:"إتمام الصفقات تحت إشراف استشاري تنفيذي متخصص يضمن الأمان القانوني والحفاظ على الثروة العقارية.",catalogBadge:"المحفظة التنفيذية",catalogTitle:"الأصول العقارية المتاحة للاستثمار",catalogSub:"اطلع على البطاقة الفنية لكل فرصة استثمارية وتواصل معنا مباشرة عبر واتساب المرتبط بالإعلان.",noAssetsFound:"لا توجد أصول متاحة في هذه الفئة حالياً.",suitesLabel:"أجنحة",leitosLabel:" سرير",vagasLabel:"موقف سيارة",cardClassLabel:"التصنيف",cardHeightLabel:"الارتفاع",cardFloorLabel:"تحمل الأرضية",cardDeliveryLabel:"التسليم",cardPartLabel:"الملكية",btnDetail:"البطاقة الفنية",waCardTitle:"تحدث عبر واتساب",modalCloseAria:"إغلاق النافذة",modalInvestLabel:"قيمة الاستثمار",modalTotalArea:"المساحة الإجمالية:",modalBuiltArea:"المساحة المبنية:",modalAbl:"المساحة القابلة للتأجير (ABL):",modalClass:"التصنيف:",modalHeight:"ارتفاع السقف:",modalFloor:"قدرة تحمل الأرضية:",modalDelivery:"التسليم المتوقع:",modalPart:"نسبة الملكية:",modalConfig:"التكوين:",modalBeds:"السعة التشغيلية:",modalSuites:"الأجنحة:",modalParking:"مواقف السيارات:",modalDescHeading:"وصف المشروع العقاري",modalHighlightsHeading:"أبرز المزايا والمواصفات (KMY)",modalCeoRole:"مارتا سورينو (Marta A. Soriano) — مصممة ديكور والمديرة التنفيذية للأعمال الجديدة",modalCeoSub:"استشارات تنفيذية حصرية من KMY Prime",modalWaBtn:"طلب المذكرة الاستثمارية عبر واتساب",decorBadge:"التصميم والفخامة",decorTitle:"التصميم الداخلي الفاخر KMY Prime",decorP1:"إلى جانب بيع وشراء الأصول العقارية، تطور KMY Prime مشاريع متكاملة للهندسة المعمارية الداخلية للفنادق، النُزُل الفاخرة، المكاتب التنفيذية والقصور السكنية في البرازيل والخارج.",decorP2:"من الملخص الأولي وحتى ما بعد التسليم، ننسق كل التفاصيل بمعايير جمالية صارمة وأرقى الموردين.",decorCta:"حجز استشارة تصميم داخلي",decorMethodTitle:"منهجية العمل من 7 مراحل",decorMethodSub:"عملية منظمة تضمن الدقة والالتزام بالميزانية والتشطيبات المتقنة.",aboutBadge:"التاريخ والرسالة",aboutTitle:"KMY Prime للتخطيط العقاري",aboutP1Html:"تتميز شركة <strong>KMY PRIME PLANEJAMENTO IMOBILIÁRIO LTDA</strong> في هيكلة وشراء وبيع الأصول العقارية عالية القيمة، والتأجير الاستراتيجي والعمليات التجارية بحضور وطني ودولي.",aboutP2:"بفضل الحوكمة المؤسسية رفيعة المستوى، بنت KMY شبكة علاقات راسخة تضم كبار ملاك الأصول والمجموعات الفندقية والمطورين وصناديق الاستثمار العقاري.",aboutRole:"مصممة ديكور والمديرة التنفيذية للأعمال الجديدة (CEO)",aboutCard1Title:"حضور وطني ودولي (البرازيل، دبي وأبوظبي)",aboutCard1Text:"هيكل مرن للمفاوضات في العواصم المالية والمراكز السياحية الساحلية والأسواق الدولية في الشرق الأوسط وآسيا.",aboutCard2Title:"خبرة في الضيافة والتجزئة واللوجستيات",aboutCard2Text:"سجل حافل في تقييم وتسويق وتأجير الفنادق والمستودعات اللوجستية ومراكز التسوق.",aboutCard3Title:"الأمان والسرية التامة",aboutCard3Text:"اتفاقيات عدم إفصاح (NDA) ومتابعة تنفيذية دقيقة في جميع مراحل الصفقة العقارية.",aboutCard4Title:"الضمانات البنكية والعمليات المصرفية الدولية",aboutCard4Text:"نقبل اعتمادات SBCL / SBLC و DLC · خطاب نوايا بنكي موثق (LOI Bancarizada) للصفقات المهيكلة محلياً ودولياً.",contactBadge:"خدمة استشارية مخصصة",contactTitle:"ابدأ صفقتك الاستثمارية القادمة",contactDesc:"هل ترغب في الاستحواذ على أصل عقاري، أو عرض عقارك للبيع بسرية تامة، أو طلب مشروع تصميم داخلي؟ أرسل رسالتك وسيتواصل معك مجلس الإدارة مباشرة.",contactWaLabel:"واتساب مباشر",contactEmailLabel:"البريد الإلكتروني الرسمي",contactPortalLabel:"الموقع والشبكات",formNameLabel:"الاسم الكامل / اسم الشركة *",formNamePlaceholder:"مثال: مجموعة استثمارية / مكتب عائلي",formPhoneLabel:"رقم واتساب / الهاتف الدولي *",formPhonePlaceholder:"مثال: +971 50 000 0000 / +55 (11) 99999-9999",formInterestLabel:"الاهتمام الرئيسي *",formOptGalpoes:"المستودعات اللوجستية (شراء / إيجار)",formOptPredios:"المباني المؤسسية (شراء / إيجار)",formOpt1:"شراء أصل عقاري استثماري",formOpt2:"بيع عقار / فندق (خارج السوق Off-Market)",formOpt3:"استئجار فندق أو نُزُل سياحي",formOpt4:"إيجار طابق مكتبي أو متجر تجاري",formOpt5:"الاستثمار في مجمعات سكنية (MCMV)",formOpt6:"مشروع تصميم داخلي فاخر",formOpt7:"استفسار آخر",formMsgLabel:"الرسالة / الملاحظات",formMsgPlaceholder:"يرجى وصف طلبك باختصار أو ذكر رمز العقار المطلوب...",formSubmitBtn:"إرسال عبر واتساب الرسمي",footerBrandDescHtml:"KMY PRIME PLANEJAMENTO IMOBILIÁRIO LTDA<br>وساطة في شراء وبيع وتأجير وإدارة الأصول العقارية عالية القيمة محلياً ودولياً، والتصميم الداخلي الفاخر.",footerRole:"مصممة ديكور والمديرة التنفيذية للأعمال الجديدة (CEO)",footerColSegments:"القطاعات",footerSegGalpoes:"المستودعات اللوجستية",footerSegPredios:"المباني المؤسسية",footerSeg1:"الفنادق والمنتجعات",footerSeg2:"النُزُل الفاخرة",footerSeg3:"المستشفيات والعيادات",footerSeg4:"الطوابق المكتبية",footerSeg5:"المتاجر والمعارض",footerSeg6:"المجمعات السكنية",footerSeg7:"مراكز التسوق",footerColInst:"المؤسسة",footerInst1:"من نحن",footerInst2:"سجل الإنجازات",footerInst3:"التصميم الداخلي",footerInst4:"تحدث مع الإدارة",footerColContact:"التواصل",footerCorpHeading:"المعلومات المؤسسية",footerRights:"© 2026 KMY PRIME PLANEJAMENTO IMOBILIÁRIO LTDA. جميع الحقوق محفوظة.",footerDevBy:"تطوير:"}},pn=["pt","en","zh","ar"];let nt="pt";try{const i=localStorage.getItem("kmy_lang");pn.includes(i)&&(nt=i)}catch{}function Ks(){return nt==="en"?co:nt==="zh"?Sl:nt==="ar"?Ml:cl}function Js(){return nt==="en"?hl:nt==="zh"?pl:nt==="ar"?gl:dl}function jp(){return nt==="en"?fl:nt==="zh"?ml:nt==="ar"?_l:ul}function ze(i){return $a[nt]&&$a[nt][i]||$a.pt[i]||""}function Mo(i=document){i.querySelectorAll("img").forEach(e=>{e.dataset.fallbackBound||(e.dataset.fallbackBound="1",e.addEventListener("error",function(){const n=e.getAttribute("src")||"";if(n.includes("assets/images/")&&!n.includes("public/assets/images/")){const a=n.split("assets/images/").pop();e.src=`./public/assets/images/${a}`}},{once:!0}))})}let ia=null;try{let i=function(e){ia.raf(e),requestAnimationFrame(i)};var om=i;ia=new $p({duration:1.2,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),smoothWheel:!0}),requestAnimationFrame(i)}catch(i){console.warn("Lenis smooth scroll fallback:",i)}function Zs(i){i&&(ia?ia.scrollTo(i,{offset:-60}):i.scrollIntoView({behavior:"smooth"}))}function Kp(){const i=document.getElementById("categories-container");if(!i)return;const e=Js();i.innerHTML=e.map(t=>`
    <div class="category-card ${t.id===la?"active":""}" data-cat-id="${t.id}">
      <div class="category-icon">
        <i class="icon-${t.icone}">✦</i>
      </div>
      <div class="category-title">${t.nome}</div>
      <div class="category-count">${t.total} ${t.total===1?ze("assetSingle"):ze("assetPlural")}</div>
    </div>
  `).join(""),i.querySelectorAll(".category-card").forEach(t=>{t.addEventListener("click",()=>{const n=t.getAttribute("data-cat-id");Eo(n);const a=document.getElementById("catalogo");Zs(a)})})}function Jp(){const i=document.getElementById("catalog-filter-pills");if(!i)return;const e=Js();i.innerHTML=e.map(t=>`
    <button class="filter-pill ${t.id===la?"active":""}" data-filter="${t.id}">
      ${t.nome} (${t.total})
    </button>
  `).join(""),i.querySelectorAll(".filter-pill").forEach(t=>{t.addEventListener("click",()=>{const n=t.getAttribute("data-filter");Eo(n)})})}let la="todos";function Eo(i){la=i,document.querySelectorAll(".filter-pill").forEach(a=>{a.classList.toggle("active",a.getAttribute("data-filter")===i)}),document.querySelectorAll(".category-card").forEach(a=>{a.classList.toggle("active",a.getAttribute("data-cat-id")===i)});const e=document.getElementById("catalog-grid");if(!e)return;const t=Array.from(e.querySelectorAll(".property-card")),n=new Map;t.forEach(a=>{n.set(a,a.getBoundingClientRect())}),el(i),requestAnimationFrame(()=>{Array.from(e.querySelectorAll(".property-card")).forEach(o=>{const s=n.get(o);if(s){const r=o.getBoundingClientRect(),l=s.left-r.left,c=s.top-r.top;(l!==0||c!==0)&&(o.style.transform=`translate(${l}px, ${c}px)`,o.style.transition="none",requestAnimationFrame(()=>{o.style.transition="transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",o.style.transform=""}))}else o.style.opacity="0",o.style.transform="scale(0.92) translateY(20px)",requestAnimationFrame(()=>{o.style.transition="all 0.45s cubic-bezier(0.16, 1, 0.3, 1)",o.style.opacity="1",o.style.transform="scale(1) translateY(0)"})})})}function Qs(i){const e=window.location.origin+window.location.pathname+"#imovel-"+i.id,t=nt==="en"?`Hello, KMY Prime!
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

Gostaria de agendar uma reunião de apresentação e receber o memorando executivo de investimento deste ativo.`;return`https://wa.me/${us.telefoneWhatsApp}?text=${encodeURIComponent(t)}`}function el(i="todos"){const e=document.getElementById("catalog-grid");if(!e)return;const t=Ks(),n=i==="todos"?t:t.filter(a=>a.categoria===i);if(n.length===0){e.innerHTML=`
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <p style="font-size: 1.2rem; color: var(--text-secondary);">${ze("noAssetsFound")}</p>
      </div>
    `;return}e.innerHTML=n.map(a=>{const o=Qs(a);return`
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
            ${a.classificacao?`<div class="feature-item">🏅 <span>${ze("cardClassLabel")} ${a.classificacao}</span></div>`:""}
            ${a.peDireito?`<div class="feature-item">⬆️ <span>${ze("cardHeightLabel")} ${a.peDireito}</span></div>`:""}
            ${a.capacidadePiso?`<div class="feature-item">🏗️ <span>${ze("cardFloorLabel")} ${a.capacidadePiso}</span></div>`:""}
            ${a.entregaPrevista?`<div class="feature-item">📅 <span>${ze("cardDeliveryLabel")} ${a.entregaPrevista}</span></div>`:""}
            ${a.participacao?`<div class="feature-item">📊 <span>${ze("cardPartLabel")} ${a.participacao}</span></div>`:""}
            ${a.configuracao?`<div class="feature-item">🏢 <span>${a.configuracao}</span></div>`:""}
            ${a.leitos?`<div class="feature-item">🏥 <span>${a.leitos} ${ze("leitosLabel")}</span></div>`:""}
            ${a.suites?`<div class="feature-item">🛏️ <span>${a.suites} ${ze("suitesLabel")}</span></div>`:""}
            ${a.vagas?`<div class="feature-item">🚗 <span>${a.vagas} ${ze("vagasLabel")}</span></div>`:""}
          </div>

          <div class="prop-footer">
            <div class="prop-price-box">
              <span class="prop-price-label">${a.finalidadeNome}</span>
              <span class="prop-price">${a.precoFormatado}</span>
            </div>
            <div class="prop-actions">
              <button class="btn-detail open-modal-btn" data-id="${a.id}">
                ${ze("btnDetail")}
              </button>
              <a href="${o}" target="_blank" rel="noopener noreferrer" class="btn-prop-wa" title="${ze("waCardTitle")}">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </article>
    `}).join(""),Mo(e),e.querySelectorAll(".open-modal-btn").forEach(a=>{a.addEventListener("click",()=>{const o=a.getAttribute("data-id");yo(o)})})}let Ki=null,$n=null,na=null;function yo(i){Ki=document.getElementById("property-modal-overlay"),$n=document.getElementById("property-modal-container");const t=Ks().find(o=>o.id===i);if(!t||!Ki||!$n)return;na=i;const n=Qs(t);$n.innerHTML=`
    <button class="modal-close-btn" id="modal-close-btn" aria-label="${ze("modalCloseAria")}">✕</button>
    <img src="${t.imagem}" alt="${t.titulo}" class="modal-header-image" />
    <div class="modal-content-inner">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; margin-bottom: 20px;">
        <div>
          <div class="subtitle-badge">${t.id} · ${t.categoriaNome} · ${t.finalidadeNome}</div>
          <h2 style="font-size: 2.1rem; line-height: 1.25; margin-bottom: 8px;">${t.titulo}</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem;">📍 ${t.localizacao}</p>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">${ze("modalInvestLabel")}</div>
          <div style="font-family: var(--font-serif); font-size: 2.2rem; font-weight: 700; color: var(--gold-700);">${t.precoFormatado}</div>
          ${t.precoInfo?`<div style="font-size: 0.82rem; color: var(--text-gold);">${t.precoInfo}</div>`:""}
          <div style="margin-top: 8px; display: inline-block; padding: 5px 14px; border-radius: 999px; background: var(--gold-100); border: 1px solid var(--border-gold); font-size: 0.76rem; font-weight: 700; color: var(--gold-700);">${ze("heroBankingBadge")}</div>
        </div>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 20px; padding: 18px 0; border-top: 1px solid var(--border-light); border-bottom: 1px solid var(--border-light); margin-bottom: 24px; font-weight: 600;">
        ${t.abl?`<div>${ze("modalAbl")} <span style="color: var(--gold-700);">${t.abl}</span></div>`:`<div>${ze("modalTotalArea")} <span style="color: var(--gold-700);">${t.areaTotal}</span></div>`}
        ${t.classificacao?`<div>${ze("modalClass")} <span style="color: var(--gold-700);">${t.classificacao}</span></div>`:t.abl?"":`<div>${ze("modalBuiltArea")} <span style="color: var(--gold-700);">${t.areaConstruida}</span></div>`}
        ${t.peDireito?`<div>${ze("modalHeight")} <span style="color: var(--gold-700);">${t.peDireito}</span></div>`:""}
        ${t.capacidadePiso?`<div>${ze("modalFloor")} <span style="color: var(--gold-700);">${t.capacidadePiso}</span></div>`:""}
        ${t.entregaPrevista?`<div>${ze("modalDelivery")} <span style="color: var(--gold-700);">${t.entregaPrevista}</span></div>`:""}
        ${t.participacao?`<div>${ze("modalPart")} <span style="color: var(--gold-700);">${t.participacao}</span></div>`:""}
        ${t.configuracao?`<div>${ze("modalConfig")} <span style="color: var(--gold-700);">${t.configuracao}</span></div>`:""}
        ${t.leitos?`<div>${ze("modalBeds")} <span style="color: var(--gold-700);">${t.leitos} ${ze("leitosLabel")}</span></div>`:""}
        ${t.suites?`<div>${ze("modalSuites")} <span style="color: var(--gold-700);">${t.suites}</span></div>`:""}
        ${t.vagas?`<div>${ze("modalParking")} <span style="color: var(--gold-700);">${t.vagas}</span></div>`:""}
      </div>

      <h4 style="font-size: 1.15rem; margin-bottom: 12px;">${ze("modalDescHeading")}</h4>
      <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 28px;">${t.descricao}</p>

      <h4 style="font-size: 1.15rem; margin-bottom: 16px;">${ze("modalHighlightsHeading")}</h4>
      <div class="modal-highlights-grid">
        ${t.destaques.map(o=>`
          <div class="highlight-box">
            <i>✦</i>
            <span style="font-size: 0.88rem; font-weight: 600;">${o}</span>
          </div>
        `).join("")}
      </div>

      <div style="margin-top: 36px; padding-top: 24px; border-top: 1px solid var(--border-light); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
        <div>
          <div style="font-weight: 700; color: var(--text-primary);">${ze("modalCeoRole")}</div>
          <div style="font-size: 0.85rem; color: var(--text-muted);">${ze("modalCeoSub")}</div>
        </div>
        <a href="${n}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="padding: 16px 36px; font-size: 1rem;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          ${ze("modalWaBtn")}
        </a>
      </div>
    </div>
  `,Mo($n),Ki.classList.add("active"),document.body.style.overflow="hidden";const a=document.getElementById("modal-close-btn");a&&(a.onclick=Ao)}function Ao(){Ki=document.getElementById("property-modal-overlay"),Ki&&(Ki.classList.remove("active"),document.body.style.overflow="",na=null)}window.addEventListener("keydown",i=>{i.key==="Escape"&&Ao()});function Zp(){const i=window.location.hash;if(i&&i.startsWith("#imovel-")){const e=i.replace("#imovel-","");yo(e)}}function Qp(){const i=document.getElementById("decor-steps-container");if(!i)return;const e=jp();i.innerHTML=e.map(t=>`
    <div class="step-card">
      <div class="step-number">${t.num}</div>
      <h3 class="step-title">${t.titulo}</h3>
      <p class="step-desc">${t.desc}</p>
    </div>
  `).join("")}function em(){const i=document.getElementById("lead-contact-form");i&&i.addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("lead-nome").value.trim(),n=document.getElementById("lead-telefone").value.trim(),a=document.getElementById("lead-interesse").value,o=document.getElementById("lead-mensagem").value.trim(),s=nt==="en"?`Hello, KMY Prime!
I filled out the inquiry form on the website regarding real estate assets:

👤 *Name:* ${t}
📱 *Phone/WhatsApp:* ${n}
💼 *Primary Interest:* ${a}
📝 *Message:* ${o||"I would like to explore the available portfolio for my investment profile."}

Looking forward to scheduling a conversation.`:`Olá, KMY Prime!
Preenchi o formulário de captação no site com interesse em ativos:

👤 *Nome:* ${t}
📱 *Telefone/WhatsApp:* ${n}
💼 *Interesse Principal:* ${a}
📝 *Mensagem:* ${o||"Gostaria de conhecer o portfólio disponível para meu perfil de investimento."}

Aguardo contato para agendamento.`,r=`https://wa.me/${us.telefoneWhatsApp}?text=${encodeURIComponent(s)}`;window.open(r,"_blank")})}function tm(){const i=document.getElementById("hero-search-btn"),e=document.getElementById("hero-search-category");!i||!e||i.addEventListener("click",()=>{const t=e.value;Eo(t);const n=document.getElementById("catalogo");Zs(n)})}function im(){const i=document.querySelector(".site-header");i&&window.addEventListener("scroll",()=>{window.scrollY>40?i.classList.add("scrolled"):i.classList.remove("scrolled")},{passive:!0})}function lo(i){nt=pn.includes(i)?i:"pt";try{localStorage.setItem("kmy_lang",nt)}catch{}const e={pt:"pt-BR",en:"en",zh:"zh-CN",ar:"ar-AE"};document.documentElement.lang=e[nt]||"pt-BR",document.documentElement.dir=nt==="ar"?"rtl":"ltr",document.title=ze("pageTitle"),document.querySelectorAll(".lang-switch-btn .lang-opt").forEach(t=>{t.classList.toggle("active",t.getAttribute("data-lang")===nt)}),document.querySelectorAll("[data-i18n]").forEach(t=>{const n=t.getAttribute("data-i18n"),a=ze(n);a&&(t.textContent=a)}),document.querySelectorAll("[data-i18n-html]").forEach(t=>{const n=t.getAttribute("data-i18n-html"),a=ze(n);a&&(t.innerHTML=a)}),document.querySelectorAll("[data-i18n-placeholder]").forEach(t=>{const n=t.getAttribute("data-i18n-placeholder"),a=ze(n);a&&t.setAttribute("placeholder",a)}),Kp(),Jp(),el(la),Qp(),na&&yo(na)}function nm(){const i=document.getElementById("lang-switch-btn");i&&i.addEventListener("click",e=>{const t=e.target.closest(".lang-opt");if(t){const a=t.getAttribute("data-lang");if(a&&a!==nt){lo(a);return}}const n=(pn.indexOf(nt)+1)%pn.length;lo(pn[n])})}function ds(){if(window.__KMY_INITIALIZED__)return;window.__KMY_INITIALIZED__=!0,Mo(document);const i=document.getElementById("property-modal-overlay");i&&i.addEventListener("click",t=>{t.target===i&&Ao()}),nm(),lo(nt),em(),tm(),im(),Zp();const e=document.querySelector(".hero-bg-video");e&&(e.muted=!0,e.addEventListener("timeupdate",()=>{e.currentTime>=7.1&&(e.currentTime=0,e.play().catch(()=>{}))}),e.play().catch(()=>{})),zp("scrubbing-canvas")}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",ds):ds();
