import {
  imoveis,
  categoriasList,
  decoracaoEtapas,
  institucionalDados,
  imoveisEn,
  categoriasListEn,
  decoracaoEtapasEn
} from './data/imoveis.js';
import { initScrollScrubbing } from './gl/scrollScrubbing.js';
import Lenis from 'lenis';

// Dicionário de tradução da interface (PT-BR / EN)
const i18nStrings = {
  pt: {
    pageTitle: 'KMY Prime | Ativos Imobiliários de Alto Padrão',
    navSegmentos: 'Segmentos',
    navJornada: 'Track Record',
    navCatalogo: 'Catálogo',
    navDecoracao: 'Decoração',
    navSobre: 'Quem Somos',
    navContato: 'Contato',
    heroBadge: 'Planejamento Imobiliário & Ativos',
    heroTitleHtml: 'Aquisição & Gestão de <span class="text-gold-gradient">Ativos de Alto Valor</span>',
    heroDesc: 'Intermediação qualificada, sigilosa e estratégica em Galpões Logísticos, Prédios Corporativos, Hotéis, Pousadas, Hospitais, Lajes Corporativas, Lojas Comerciais, Lotes MCMV e Shoppings com atuação nacional e internacional.',
    heroSearchLabel: 'Segmento de Interesse',
    heroSearchBtn: 'Explorar Portfólio',
    heroOptTodos: 'Todos os Ativos (18)',
    heroOptGalpoes: 'Galpões Logísticos (4)',
    heroOptPredios: 'Prédios Corporativos (4)',
    heroOptHoteis: 'Hotéis & Resorts (2)',
    heroOptPousadas: 'Pousadas (2)',
    heroOptHospitais: 'Hospitais & Clínicas (1)',
    heroOptLajes: 'Lajes Corporativas (2)',
    heroOptLojas: 'Lojas & Varejo (1)',
    heroOptMcmv: 'Aptos MCMV (1)',
    heroOptShopping: 'Shoppings & Malls (1)',
    metricVal1: 'Prime',
    metricLbl1: 'Governança Sólida',
    metricVal2: 'Global',
    metricLbl2: 'Atuação Nacional e Internacional',
    metricVal3: 'Executivo',
    metricLbl3: 'Head de Novos Negócios',
    corpVideoBadge: 'Apresentação Institucional',
    corpVideoTitle: 'Vídeo Corporativo KMY Prime',
    corpVideoSub: 'Conheça nossa estrutura, governança e atuação estratégica em ativos imobiliários de alto valor no Brasil e no exterior.',
    catBadge: 'Especialidades & Portfólio',
    catTitle: 'Segmentos de Atuação Especializada',
    catSub: 'Soluções imobiliárias sob medida para investidores institucionais, redes hoteleiras e family offices.',
    assetSingle: 'ativo disponível',
    assetPlural: 'ativos disponíveis',
    scrubBadge1: 'Fase 01 · Prospecção',
    scrubTitle1: 'Curadoria Rigorosa & Off-Market',
    scrubText1: 'Acesso a ativos estratégicos que não chegam ao mercado aberto. Mapeamento de oportunidades de alta rentabilidade com total sigilo comercial.',
    scrubBadge2: 'Fase 02 · Due Diligence',
    scrubTitle2: 'Auditoria Jurídica & Valoração',
    scrubText2: 'Análise minuciosa de certidões, regularidade fundiária, laudos de engenharia, capacidade de cap rate e mitigação integral de riscos.',
    scrubBadge3: 'Fase 03 · Estruturação',
    scrubTitle3: 'Engenharia Financeira & Contratual',
    scrubText3: 'Modelagem de contratos atípicos, arrendamentos comerciais de longo prazo, Built to Suit (BTS) e Sale & Leaseback (SLB).',
    scrubBadge4: 'Fase 04 · Concretização',
    scrubTitle4: 'Governança, Entrega & Sucesso',
    scrubText4: 'Fechamento sob assessoria executiva especializada, assegurando segurança jurídica, satisfação e perenidade patrimonial a cada transação.',
    catalogBadge: 'Catálogo Executivo',
    catalogTitle: 'Ativos Imobiliários Disponíveis',
    catalogSub: 'Consulte a ficha técnica de cada oportunidade e entre em contato direto pelo WhatsApp com o anúncio vinculado.',
    noAssetsFound: 'Nenhum ativo encontrado nesta categoria no momento.',
    suitesLabel: 'suítes',
    vagasLabel: 'vagas',
    cardClassLabel: 'Classificação',
    cardHeightLabel: 'Pé-direito',
    cardFloorLabel: 'Piso',
    cardDeliveryLabel: 'Entrega',
    cardPartLabel: 'Participação',
    btnDetail: 'Ficha Técnica',
    waCardTitle: 'Conversar no WhatsApp',
    modalCloseAria: 'Fechar modal',
    modalInvestLabel: 'Valor do Investimento',
    modalTotalArea: 'Área Total:',
    modalBuiltArea: 'Área Construída:',
    modalAbl: 'Área Bruta Locável:',
    modalClass: 'Classificação:',
    modalHeight: 'Pé-direito:',
    modalFloor: 'Capacidade do Piso:',
    modalDelivery: 'Entrega Prevista:',
    modalPart: 'Participação:',
    modalConfig: 'Configuração:',
    modalSuites: 'Suítes:',
    modalParking: 'Vagas:',
    modalDescHeading: 'Descrição do Empreendimento',
    modalHighlightsHeading: 'Destaques & Diferenciais KMY',
    modalCeoRole: 'Marta A. Soriano — Decoradora & CEO Novos Negócios',
    modalCeoSub: 'Atendimento Executivo Exclusivo KMY Prime',
    modalWaBtn: 'Solicitar Informações no WhatsApp',
    decorBadge: 'Design & Sofisticação',
    decorTitle: 'Decoração de Interiores KMY Prime',
    decorP1: 'Além da compra e venda de ativos, a KMY Prime desenvolve projetos completos de arquitetura de interiores para hotéis, pousadas de charme, lajes executivas e residências de alto padrão em todo o Brasil e no exterior.',
    decorP2: 'Do primeiro briefing à pós-entrega, coordenamos cada detalhe com rigor estético, fornecedores nobres e gestão técnica total do cronograma.',
    decorCta: 'Agendar Briefing de Decoração',
    decorMethodTitle: 'Metodologia em 7 Etapas',
    decorMethodSub: 'Processo estruturado que garante previsibilidade, conformidade orçamentária e acabamento impecável.',
    aboutBadge: 'História & Propósito',
    aboutTitle: 'KMY Prime Planejamento Imobiliário',
    aboutP1Html: 'A <strong>KMY PRIME PLANEJAMENTO IMOBILIÁRIO LTDA</strong> atua com excelência na estruturação, compra e venda de Ativos de alto valor no mercado imobiliário, locação estratégica e arrendamento comercial com presença nacional e internacional.',
    aboutP2: 'Com governança corporativa de alto padrão, a KMY consolidou uma sólida rede de relacionamento que inclui proprietários de grandes ativos, grupos de hospitalidade, incorporadores e fundos imobiliários, assegurando transações ágeis, sigilosas e respaldadas juridicamente.',
    aboutRole: 'Decoradora & CEO Novos Negócios',
    aboutCard1Title: 'Atuação Nacional e Internacional',
    aboutCard1Text: 'Estrutura ágil para negociações em capitais financeiras, polos litorâneos turísticos, eixos de agronegócio e mercados internacionais.',
    aboutCard2Title: 'Especialização em Hospitalidade & Varejo',
    aboutCard2Text: 'Expertise comprovada na avaliação, comercialização e arrendamento de Hotéis, Pousadas e Shoppings Centers.',
    aboutCard3Title: 'Segurança & Confidencialidade',
    aboutCard3Text: 'Termos de sigilo (NDA) e acompanhamento próximo em todas as fases da transação imobiliária.',
    contactBadge: 'Atendimento Personalizado',
    contactTitle: 'Inicie Sua Próxima Operação',
    contactDesc: 'Deseja adquirir um ativo, colocar seu hotel/imóvel à venda com discrição, ou solicitar um projeto de interiores? Envie sua mensagem e receba retorno direto da nossa diretoria.',
    contactWaLabel: 'WhatsApp Direto',
    contactEmailLabel: 'E-mails Oficiais',
    contactPortalLabel: 'Portal & Redes',
    formNameLabel: 'Seu Nome / Razão Social *',
    formNamePlaceholder: 'Ex: Roberto Silveira / Grupo Hotelier',
    formPhoneLabel: 'WhatsApp com DDD *',
    formPhonePlaceholder: 'Ex: (11) 99999-9999',
    formInterestLabel: 'Principal Interesse *',
    formOptGalpoes: 'Galpões Logísticos (Venda / Locação)',
    formOptPredios: 'Prédios Corporativos (Venda / Locação)',
    formOpt1: 'Comprar Ativo Imobiliário',
    formOpt2: 'Vender Imóvel / Hotel (Off-Market)',
    formOpt3: 'Arrendamento de Pousada ou Hotel',
    formOpt4: 'Locação de Laje Corporativa ou Loja',
    formOpt5: 'Investir em Lote MCMV',
    formOpt6: 'Projeto de Decoração de Interiores',
    formOpt7: 'Outro assunto',
    formMsgLabel: 'Mensagem / Observações',
    formMsgPlaceholder: 'Descreva brevemente sua demanda ou o código do imóvel de interesse...',
    formSubmitBtn: 'Enviar via WhatsApp Oficial',
    footerBrandDescHtml: 'KMY PRIME PLANEJAMENTO IMOBILIÁRIO LTDA<br>Intermediação de compra, venda, locação e arrendamento de Ativos Imobiliários com atuação nacional e internacional e Decoração de Interiores de alto luxo.',
    footerRole: 'Decoradora & CEO Novos Negócios',
    footerColSegments: 'Segmentos',
    footerSegGalpoes: 'Galpões Logísticos',
    footerSegPredios: 'Prédios Corporativos',
    footerSeg1: 'Hotéis & Resorts',
    footerSeg2: 'Pousadas',
    footerSeg3: 'Hospitais & Clínicas',
    footerSeg4: 'Lajes Corporativas',
    footerSeg5: 'Lojas & Varejo',
    footerSeg6: 'Aptos MCMV',
    footerSeg7: 'Shoppings',
    footerColInst: 'Institucional',
    footerInst1: 'Quem Somos',
    footerInst2: 'Track Record',
    footerInst3: 'Decoração de Interiores',
    footerInst4: 'Fale com a Diretoria',
    footerColContact: 'Contato',
    footerCorpHeading: 'INFORMAÇÕES CORPORATIVAS',
    footerRights: '© 2026 KMY PRIME PLANEJAMENTO IMOBILIÁRIO LTDA. Todos os direitos reservados.',
    footerDevBy: 'Desenvolvido por'
  },
  en: {
    pageTitle: 'KMY Prime | High-Value Real Estate Assets',
    navSegmentos: 'Segments',
    navJornada: 'Track Record',
    navCatalogo: 'Portfolio',
    navDecoracao: 'Interior Design',
    navSobre: 'About Us',
    navContato: 'Contact',
    heroBadge: 'Real Estate Planning & Assets',
    heroTitleHtml: 'Acquisition & Management of <span class="text-gold-gradient">High-Value Assets</span>',
    heroDesc: 'Qualified, confidential, and strategic intermediation in Logistic Warehouses, Corporate Buildings, Hotels, Boutique Inns, Hospitals, Corporate Floors, Retail Stores, Residential Lots, and Shopping Malls with national and international reach.',
    heroSearchLabel: 'Segment of Interest',
    heroSearchBtn: 'Explore Portfolio',
    heroOptTodos: 'All Assets (18)',
    heroOptGalpoes: 'Logistic Warehouses (4)',
    heroOptPredios: 'Corporate Buildings (4)',
    heroOptHoteis: 'Hotels & Resorts (2)',
    heroOptPousadas: 'Boutique Inns (2)',
    heroOptHospitais: 'Hospitals & Clinics (1)',
    heroOptLajes: 'Corporate Floors (2)',
    heroOptLojas: 'Retail Stores (1)',
    heroOptMcmv: 'Residential Lots (1)',
    heroOptShopping: 'Shopping Malls (1)',
    metricVal1: 'Prime',
    metricLbl1: 'Solid Governance',
    metricVal2: 'Global',
    metricLbl2: 'National & International Reach',
    metricVal3: 'Executive',
    metricLbl3: 'Head of New Business',
    corpVideoBadge: 'Corporate Presentation',
    corpVideoTitle: 'KMY Prime Corporate Video',
    corpVideoSub: 'Discover our structure, governance, and strategic operations in high-value real estate assets across Brazil and internationally.',
    catBadge: 'Specialties & Portfolio',
    catTitle: 'Specialized Market Segments',
    catSub: 'Tailor-made real estate solutions for institutional investors, hotel chains, and family offices.',
    assetSingle: 'available asset',
    assetPlural: 'available assets',
    scrubBadge1: 'Phase 01 · Sourcing',
    scrubTitle1: 'Rigorous & Off-Market Curation',
    scrubText1: 'Access to strategic assets that never reach the open market. Mapping high-yield opportunities under strict commercial confidentiality.',
    scrubBadge2: 'Phase 02 · Due Diligence',
    scrubTitle2: 'Legal Audit & Valuation',
    scrubText2: 'Thorough analysis of certificates, land compliance, engineering reports, cap rate capacity, and comprehensive risk mitigation.',
    scrubBadge3: 'Phase 03 · Structuring',
    scrubTitle3: 'Financial & Contractual Engineering',
    scrubText3: 'Modeling of atypical contracts, long-term commercial leases, Built to Suit (BTS), and Sale & Leaseback (SLB).',
    scrubBadge4: 'Phase 04 · Closing',
    scrubTitle4: 'Governance, Delivery & Success',
    scrubText4: 'Closing under specialized executive advisory, ensuring legal security, satisfaction, and long-term asset preservation in every transaction.',
    catalogBadge: 'Executive Portfolio',
    catalogTitle: 'Available Real Estate Assets',
    catalogSub: 'Review the technical fact sheet of each opportunity and contact us directly via WhatsApp with the linked listing.',
    noAssetsFound: 'No assets found in this category at the moment.',
    suitesLabel: 'suites',
    vagasLabel: 'parking spaces',
    cardClassLabel: 'Class',
    cardHeightLabel: 'Clear Height',
    cardFloorLabel: 'Floor Load',
    cardDeliveryLabel: 'Delivery',
    cardPartLabel: 'Ownership',
    btnDetail: 'Fact Sheet',
    waCardTitle: 'Chat on WhatsApp',
    modalCloseAria: 'Close modal',
    modalInvestLabel: 'Investment Value',
    modalTotalArea: 'Total Area:',
    modalBuiltArea: 'Built Area:',
    modalAbl: 'Gross Leasable Area:',
    modalClass: 'Classification:',
    modalHeight: 'Clear Height:',
    modalFloor: 'Floor Load Capacity:',
    modalDelivery: 'Expected Delivery:',
    modalPart: 'Ownership:',
    modalConfig: 'Configuration:',
    modalSuites: 'Suites:',
    modalParking: 'Parking Spaces:',
    modalDescHeading: 'Property Description',
    modalHighlightsHeading: 'KMY Highlights & Features',
    modalCeoRole: 'Marta A. Soriano — Interior Designer & CEO of New Business',
    modalCeoSub: 'KMY Prime Exclusive Executive Advisory',
    modalWaBtn: 'Request Information on WhatsApp',
    decorBadge: 'Design & Sophistication',
    decorTitle: 'KMY Prime Interior Design',
    decorP1: 'Beyond asset acquisition and sales, KMY Prime develops full-scale interior architecture projects for hotels, boutique inns, executive floors, and luxury residences across Brazil and internationally.',
    decorP2: 'From initial briefing to post-delivery, we coordinate every detail with aesthetic rigor, noble suppliers, and complete technical schedule management.',
    decorCta: 'Schedule a Design Briefing',
    decorMethodTitle: '7-Step Methodology',
    decorMethodSub: 'Structured process ensuring predictability, budget compliance, and flawless finishing.',
    aboutBadge: 'History & Purpose',
    aboutTitle: 'KMY Prime Real Estate Planning',
    aboutP1Html: '<strong>KMY PRIME PLANEJAMENTO IMOBILIÁRIO LTDA</strong> excels in structuring, buying, and selling high-value real estate assets, strategic leasing, and commercial operations with national and international presence.',
    aboutP2: 'With top-tier corporate governance, KMY has built a solid relationship network including major asset owners, hospitality groups, developers, and real estate funds, ensuring agile, confidential, and legally backed transactions.',
    aboutRole: 'Interior Designer & CEO of New Business',
    aboutCard1Title: 'National & International Reach',
    aboutCard1Text: 'Agile structure for negotiations in financial capitals, coastal tourist hubs, agribusiness corridors, and international markets.',
    aboutCard2Title: 'Hospitality & Retail Expertise',
    aboutCard2Text: 'Proven track record in valuation, brokerage, and commercial leasing of Hotels, Boutique Inns, and Shopping Centers.',
    aboutCard3Title: 'Security & Confidentiality',
    aboutCard3Text: 'Non-disclosure agreements (NDA) and dedicated executive oversight throughout every stage of the real estate transaction.',
    contactBadge: 'Personalized Advisory',
    contactTitle: 'Start Your Next Transaction',
    contactDesc: 'Looking to acquire an asset, list your hotel or property confidentially, or request an interior design project? Send your message and receive direct feedback from our board.',
    contactWaLabel: 'Direct WhatsApp',
    contactEmailLabel: 'Official E-mails',
    contactPortalLabel: 'Website & Social',
    formNameLabel: 'Your Name / Company Name *',
    formNamePlaceholder: 'E.g.: John Smith / Hotelier Group',
    formPhoneLabel: 'WhatsApp / Phone Number *',
    formPhonePlaceholder: 'E.g.: +55 (11) 99999-9999',
    formInterestLabel: 'Primary Interest *',
    formOptGalpoes: 'Logistic Warehouses (Sale / Lease)',
    formOptPredios: 'Corporate Buildings (Sale / Lease)',
    formOpt1: 'Acquire Real Estate Asset',
    formOpt2: 'Sell Property / Hotel (Off-Market)',
    formOpt3: 'Lease Boutique Inn or Hotel',
    formOpt4: 'Lease Corporate Floor or Retail Store',
    formOpt5: 'Invest in Residential Lot (MCMV)',
    formOpt6: 'Interior Design Project',
    formOpt7: 'Other Inquiry',
    formMsgLabel: 'Message / Notes',
    formMsgPlaceholder: 'Briefly describe your inquiry or the asset code of interest...',
    formSubmitBtn: 'Send via Official WhatsApp',
    footerBrandDescHtml: 'KMY PRIME PLANEJAMENTO IMOBILIÁRIO LTDA<br>Intermediation of purchase, sale, leasing, and management of High-Value Real Estate Assets nationally and internationally, plus Luxury Interior Design.',
    footerRole: 'Interior Designer & CEO of New Business',
    footerColSegments: 'Segments',
    footerSegGalpoes: 'Logistic Warehouses',
    footerSegPredios: 'Corporate Buildings',
    footerSeg1: 'Hotels & Resorts',
    footerSeg2: 'Boutique Inns',
    footerSeg3: 'Hospitals & Clinics',
    footerSeg4: 'Corporate Floors',
    footerSeg5: 'Retail Stores',
    footerSeg6: 'Residential Lots',
    footerSeg7: 'Shopping Malls',
    footerColInst: 'Corporate',
    footerInst1: 'About Us',
    footerInst2: 'Track Record',
    footerInst3: 'Interior Design',
    footerInst4: 'Speak with the Board',
    footerColContact: 'Contact',
    footerCorpHeading: 'CORPORATE INFORMATION',
    footerRights: '© 2026 KMY PRIME PLANEJAMENTO IMOBILIÁRIO LTDA. All rights reserved.',
    footerDevBy: 'Developed by'
  }
};

let currentLang = 'pt';
try {
  const saved = localStorage.getItem('kmy_lang');
  if (saved === 'en' || saved === 'pt') currentLang = saved;
} catch (e) {}

function getActiveImoveis() {
  return currentLang === 'en' ? imoveisEn : imoveis;
}

function getActiveCategorias() {
  return currentLang === 'en' ? categoriasListEn : categoriasList;
}

function getActiveDecoracao() {
  return currentLang === 'en' ? decoracaoEtapasEn : decoracaoEtapas;
}

function t(key) {
  return (i18nStrings[currentLang] && i18nStrings[currentLang][key]) || i18nStrings.pt[key] || '';
}

// Fallback automático de caminho de imagem quando aberto diretamente pelo index.html na raiz (sem Vite build)
function attachImageFallback(root = document) {
  root.querySelectorAll('img').forEach(img => {
    if (img.dataset.fallbackBound) return;
    img.dataset.fallbackBound = '1';
    img.addEventListener('error', function onImgErr() {
      const src = img.getAttribute('src') || '';
      if (src.includes('assets/images/') && !src.includes('public/assets/images/')) {
        const fileName = src.split('assets/images/').pop();
        img.src = `./public/assets/images/${fileName}`;
      }
    }, { once: true });
  });
}

// 1. Inicializar Smooth Scroll com Lenis
let lenis = null;
try {
  lenis = new Lenis({
    duration: 1.2,
    easing: (val) => Math.min(1, 1.001 - Math.pow(2, -10 * val)),
    smoothWheel: true
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
} catch (err) {
  console.warn('Lenis smooth scroll fallback:', err);
}

function smoothScrollTo(targetEl) {
  if (!targetEl) return;
  if (lenis) {
    lenis.scrollTo(targetEl, { offset: -60 });
  } else {
    targetEl.scrollIntoView({ behavior: 'smooth' });
  }
}

// 2. Renderizar Categorias no Grid Superior
function renderCategories() {
  const container = document.getElementById('categories-container');
  if (!container) return;

  const list = getActiveCategorias();
  container.innerHTML = list.map(cat => `
    <div class="category-card ${cat.id === currentFilter ? 'active' : ''}" data-cat-id="${cat.id}">
      <div class="category-icon">
        <i class="icon-${cat.icone}">✦</i>
      </div>
      <div class="category-title">${cat.nome}</div>
      <div class="category-count">${cat.total} ${cat.total === 1 ? t('assetSingle') : t('assetPlural')}</div>
    </div>
  `).join('');

  container.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const catId = card.getAttribute('data-cat-id');
      setActiveFilter(catId);
      const catalogEl = document.getElementById('catalogo');
      smoothScrollTo(catalogEl);
    });
  });
}

// 3. Renderizar Filtros do Catálogo
function renderCatalogFilters() {
  const container = document.getElementById('catalog-filter-pills');
  if (!container) return;

  const list = getActiveCategorias();
  container.innerHTML = list.map(cat => `
    <button class="filter-pill ${cat.id === currentFilter ? 'active' : ''}" data-filter="${cat.id}">
      ${cat.nome} (${cat.total})
    </button>
  `).join('');

  container.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const catId = btn.getAttribute('data-filter');
      setActiveFilter(catId);
    });
  });
}

// 4. Mecanismo de Filtro com FLIP Animation
let currentFilter = 'todos';

function setActiveFilter(catId) {
  currentFilter = catId;

  // Atualizar botões
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === catId);
  });
  document.querySelectorAll('.category-card').forEach(card => {
    card.classList.toggle('active', card.getAttribute('data-cat-id') === catId);
  });

  // Executar FLIP manual rápido e robusto
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll('.property-card'));
  const firstPositions = new Map();

  cards.forEach(card => {
    firstPositions.set(card, card.getBoundingClientRect());
  });

  // Re-render
  renderProperties(catId);

  // Invert & Play
  requestAnimationFrame(() => {
    const newCards = Array.from(grid.querySelectorAll('.property-card'));
    newCards.forEach(card => {
      const first = firstPositions.get(card);
      if (first) {
        const last = card.getBoundingClientRect();
        const deltaX = first.left - last.left;
        const deltaY = first.top - last.top;

        if (deltaX !== 0 || deltaY !== 0) {
          card.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
          card.style.transition = 'none';

          requestAnimationFrame(() => {
            card.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
            card.style.transform = '';
          });
        }
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.92) translateY(20px)';
        requestAnimationFrame(() => {
          card.style.transition = 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
          card.style.opacity = '1';
          card.style.transform = 'scale(1) translateY(0)';
        });
      }
    });
  });
}

// 5. Gerar Link do WhatsApp estruturado com os dados do anúncio
function buildWhatsAppUrl(imovel) {
  const currentUrl = window.location.origin + window.location.pathname + '#imovel-' + imovel.id;
  const texto = currentLang === 'en'
    ? `Hello, KMY Prime!
I am interested in the following portfolio asset:

🏷️ *Code:* ${imovel.id}
🏛️ *Asset:* ${imovel.titulo}
📂 *Category:* ${imovel.categoriaNome} (${imovel.finalidadeNome})
📍 *Location:* ${imovel.localizacao}
💰 *Value:* ${imovel.precoFormatado}

🔗 *Listing Link:* ${currentUrl}

I would like to schedule an executive presentation and receive the investment memorandum for this asset.`
    : `Olá, KMY Prime!
Tenho interesse no seguinte ativo do portfólio:

🏷️ *Código:* ${imovel.id}
🏛️ *Imóvel:* ${imovel.titulo}
📂 *Categoria:* ${imovel.categoriaNome} (${imovel.finalidadeNome})
📍 *Localização:* ${imovel.localizacao}
💰 *Valor:* ${imovel.precoFormatado}

🔗 *Link do Anúncio:* ${currentUrl}

Gostaria de agendar uma reunião de apresentação e receber o memorando executivo de investimento deste ativo.`;

  return `https://wa.me/${institucionalDados.telefoneWhatsApp}?text=${encodeURIComponent(texto)}`;
}

// 6. Renderizar Cards do Catálogo
function renderProperties(filter = 'todos') {
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;

  const list = getActiveImoveis();
  const filtered = filter === 'todos'
    ? list
    : list.filter(item => item.categoria === filter);

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <p style="font-size: 1.2rem; color: var(--text-secondary);">${t('noAssetsFound')}</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const waUrl = buildWhatsAppUrl(item);

    return `
      <article class="property-card luxury-card" id="card-${item.id}" data-id="${item.id}">
        <div class="prop-img-box">
          <img src="${item.imagem}" alt="${item.titulo}" class="prop-img" loading="lazy" />
          <span class="prop-badge-status">${item.status}</span>
          <span class="prop-code-badge">${item.id}</span>
        </div>
        <div class="prop-body">
          <div class="prop-meta-top">
            <span class="prop-category-label">${item.categoriaNome}</span>
            <span class="prop-location">📍 ${item.cidade}/${item.uf}</span>
          </div>
          <h3 class="prop-title">${item.titulo}</h3>
          
          <div class="prop-features" style="flex-wrap: wrap;">
            <div class="feature-item">📐 <span>${item.areaConstruida || item.areaTotal}</span></div>
            ${item.classificacao ? `<div class="feature-item">🏅 <span>${t('cardClassLabel')} ${item.classificacao}</span></div>` : ''}
            ${item.peDireito ? `<div class="feature-item">⬆️ <span>${t('cardHeightLabel')} ${item.peDireito}</span></div>` : ''}
            ${item.capacidadePiso ? `<div class="feature-item">🏗️ <span>${t('cardFloorLabel')} ${item.capacidadePiso}</span></div>` : ''}
            ${item.entregaPrevista ? `<div class="feature-item">📅 <span>${t('cardDeliveryLabel')} ${item.entregaPrevista}</span></div>` : ''}
            ${item.participacao ? `<div class="feature-item">📊 <span>${t('cardPartLabel')} ${item.participacao}</span></div>` : ''}
            ${item.configuracao ? `<div class="feature-item">🏢 <span>${item.configuracao}</span></div>` : ''}
            ${item.suites ? `<div class="feature-item">🛏️ <span>${item.suites} ${t('suitesLabel')}</span></div>` : ''}
            ${item.vagas ? `<div class="feature-item">🚗 <span>${item.vagas} ${t('vagasLabel')}</span></div>` : ''}
          </div>

          <div class="prop-footer">
            <div class="prop-price-box">
              <span class="prop-price-label">${item.finalidadeNome}</span>
              <span class="prop-price">${item.precoFormatado}</span>
            </div>
            <div class="prop-actions">
              <button class="btn-detail open-modal-btn" data-id="${item.id}">
                ${t('btnDetail')}
              </button>
              <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-prop-wa" title="${t('waCardTitle')}">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  attachImageFallback(grid);

  grid.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      openPropertyModal(id);
    });
  });
}

// 7. Modal de Detalhes com Efeito de Expansão
let modalOverlay = null;
let modalContainer = null;
let currentOpenModalId = null;

function openPropertyModal(id) {
  modalOverlay = document.getElementById('property-modal-overlay');
  modalContainer = document.getElementById('property-modal-container');
  const list = getActiveImoveis();
  const imovel = list.find(item => item.id === id);
  if (!imovel || !modalOverlay || !modalContainer) return;

  currentOpenModalId = id;
  const waUrl = buildWhatsAppUrl(imovel);

  modalContainer.innerHTML = `
    <button class="modal-close-btn" id="modal-close-btn" aria-label="${t('modalCloseAria')}">✕</button>
    <img src="${imovel.imagem}" alt="${imovel.titulo}" class="modal-header-image" />
    <div class="modal-content-inner">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; margin-bottom: 20px;">
        <div>
          <div class="subtitle-badge">${imovel.id} · ${imovel.categoriaNome} · ${imovel.finalidadeNome}</div>
          <h2 style="font-size: 2.1rem; line-height: 1.25; margin-bottom: 8px;">${imovel.titulo}</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem;">📍 ${imovel.localizacao}</p>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">${t('modalInvestLabel')}</div>
          <div style="font-family: var(--font-serif); font-size: 2.2rem; font-weight: 700; color: var(--gold-700);">${imovel.precoFormatado}</div>
          ${imovel.precoInfo ? `<div style="font-size: 0.82rem; color: var(--text-gold);">${imovel.precoInfo}</div>` : ''}
        </div>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 20px; padding: 18px 0; border-top: 1px solid var(--border-light); border-bottom: 1px solid var(--border-light); margin-bottom: 24px; font-weight: 600;">
        ${imovel.abl ? `<div>${t('modalAbl')} <span style="color: var(--gold-700);">${imovel.abl}</span></div>` : `<div>${t('modalTotalArea')} <span style="color: var(--gold-700);">${imovel.areaTotal}</span></div>`}
        ${imovel.classificacao ? `<div>${t('modalClass')} <span style="color: var(--gold-700);">${imovel.classificacao}</span></div>` : (!imovel.abl ? `<div>${t('modalBuiltArea')} <span style="color: var(--gold-700);">${imovel.areaConstruida}</span></div>` : '')}
        ${imovel.peDireito ? `<div>${t('modalHeight')} <span style="color: var(--gold-700);">${imovel.peDireito}</span></div>` : ''}
        ${imovel.capacidadePiso ? `<div>${t('modalFloor')} <span style="color: var(--gold-700);">${imovel.capacidadePiso}</span></div>` : ''}
        ${imovel.entregaPrevista ? `<div>${t('modalDelivery')} <span style="color: var(--gold-700);">${imovel.entregaPrevista}</span></div>` : ''}
        ${imovel.participacao ? `<div>${t('modalPart')} <span style="color: var(--gold-700);">${imovel.participacao}</span></div>` : ''}
        ${imovel.configuracao ? `<div>${t('modalConfig')} <span style="color: var(--gold-700);">${imovel.configuracao}</span></div>` : ''}
        ${imovel.suites ? `<div>${t('modalSuites')} <span style="color: var(--gold-700);">${imovel.suites}</span></div>` : ''}
        ${imovel.vagas ? `<div>${t('modalParking')} <span style="color: var(--gold-700);">${imovel.vagas}</span></div>` : ''}
      </div>

      <h4 style="font-size: 1.15rem; margin-bottom: 12px;">${t('modalDescHeading')}</h4>
      <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 28px;">${imovel.descricao}</p>

      <h4 style="font-size: 1.15rem; margin-bottom: 16px;">${t('modalHighlightsHeading')}</h4>
      <div class="modal-highlights-grid">
        ${imovel.destaques.map(d => `
          <div class="highlight-box">
            <i>✦</i>
            <span style="font-size: 0.88rem; font-weight: 600;">${d}</span>
          </div>
        `).join('')}
      </div>

      <div style="margin-top: 36px; padding-top: 24px; border-top: 1px solid var(--border-light); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
        <div>
          <div style="font-weight: 700; color: var(--text-primary);">${t('modalCeoRole')}</div>
          <div style="font-size: 0.85rem; color: var(--text-muted);">${t('modalCeoSub')}</div>
        </div>
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="padding: 16px 36px; font-size: 1rem;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          ${t('modalWaBtn')}
        </a>
      </div>
    </div>
  `;

  attachImageFallback(modalContainer);

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) closeBtn.onclick = closePropertyModal;
}

function closePropertyModal() {
  modalOverlay = document.getElementById('property-modal-overlay');
  if (!modalOverlay) return;
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
  currentOpenModalId = null;
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePropertyModal();
});

// Checar hash na URL (ex: #imovel-KMY-006)
function checkUrlHash() {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#imovel-')) {
    const id = hash.replace('#imovel-', '');
    openPropertyModal(id);
  }
}

// 8. Renderizar Etapas de Decoração de Interiores
function renderDecoracao() {
  const container = document.getElementById('decor-steps-container');
  if (!container) return;

  const etapas = getActiveDecoracao();
  container.innerHTML = etapas.map(etapa => `
    <div class="step-card">
      <div class="step-number">${etapa.num}</div>
      <h3 class="step-title">${etapa.titulo}</h3>
      <p class="step-desc">${etapa.desc}</p>
    </div>
  `).join('');
}

// 9. Formulário de Captação Direto para WhatsApp
function setupContactForm() {
  const form = document.getElementById('lead-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('lead-nome').value.trim();
    const telefone = document.getElementById('lead-telefone').value.trim();
    const interesse = document.getElementById('lead-interesse').value;
    const mensagem = document.getElementById('lead-mensagem').value.trim();

    const texto = currentLang === 'en'
      ? `Hello, KMY Prime!
I filled out the inquiry form on the website regarding real estate assets:

👤 *Name:* ${nome}
📱 *Phone/WhatsApp:* ${telefone}
💼 *Primary Interest:* ${interesse}
📝 *Message:* ${mensagem || 'I would like to explore the available portfolio for my investment profile.'}

Looking forward to scheduling a conversation.`
      : `Olá, KMY Prime!
Preenchi o formulário de captação no site com interesse em ativos:

👤 *Nome:* ${nome}
📱 *Telefone/WhatsApp:* ${telefone}
💼 *Interesse Principal:* ${interesse}
📝 *Mensagem:* ${mensagem || 'Gostaria de conhecer o portfólio disponível para meu perfil de investimento.'}

Aguardo contato para agendamento.`;

    const url = `https://wa.me/${institucionalDados.telefoneWhatsApp}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  });
}

// 10. Busca Rápida no Hero
function setupHeroSearch() {
  const searchBtn = document.getElementById('hero-search-btn');
  const catSelect = document.getElementById('hero-search-category');
  if (!searchBtn || !catSelect) return;

  searchBtn.addEventListener('click', () => {
    const selected = catSelect.value;
    setActiveFilter(selected);
    const catalogEl = document.getElementById('catalogo');
    smoothScrollTo(catalogEl);
  });
}

// 11. Header Scroll Effect
function setupHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// 12. Aplicar idioma em todos os elementos da página
function applyLanguage(lang) {
  currentLang = lang === 'en' ? 'en' : 'pt';
  try {
    localStorage.setItem('kmy_lang', currentLang);
  } catch (e) {}

  document.documentElement.lang = currentLang === 'en' ? 'en' : 'pt-BR';
  document.title = t('pageTitle');

  // Atualizar estado visual do botão de idioma
  document.querySelectorAll('.lang-switch-btn .lang-opt').forEach(opt => {
    opt.classList.toggle('active', opt.getAttribute('data-lang') === currentLang);
  });

  // Elementos com atributo data-i18n (texto simples)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) el.textContent = val;
  });

  // Elementos com atributo data-i18n-html (HTML rico)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const val = t(key);
    if (val) el.innerHTML = val;
  });

  // Elementos com atributo data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (val) el.setAttribute('placeholder', val);
  });

  // Re-renderizar componentes dinâmicos
  renderCategories();
  renderCatalogFilters();
  renderProperties(currentFilter);
  renderDecoracao();

  if (currentOpenModalId) {
    openPropertyModal(currentOpenModalId);
  }
}

function setupLanguageSwitcher() {
  const langBtn = document.getElementById('lang-switch-btn');
  if (!langBtn) return;

  langBtn.addEventListener('click', (e) => {
    const opt = e.target.closest('.lang-opt');
    if (opt) {
      const targetLang = opt.getAttribute('data-lang');
      if (targetLang && targetLang !== currentLang) {
        applyLanguage(targetLang);
        return;
      }
    }
    applyLanguage(currentLang === 'pt' ? 'en' : 'pt');
  });
}

// Inicialização completa (compatível com Vite, GitHub Pages, Live Server e index.html direto)
function initApp() {
  if (window.__KMY_INITIALIZED__) return;
  window.__KMY_INITIALIZED__ = true;

  attachImageFallback(document);

  const overlay = document.getElementById('property-modal-overlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closePropertyModal();
    });
  }

  setupLanguageSwitcher();
  applyLanguage(currentLang);
  setupContactForm();
  setupHeroSearch();
  setupHeaderScroll();
  checkUrlHash();

  // Garantir reprodução contínua do novo vídeo de fundo no Hero (0 a 7.1s) e iniciar Scroll Scrubbing
  const heroVideo = document.querySelector('.hero-bg-video');
  if (heroVideo) {
    heroVideo.muted = true;
    heroVideo.addEventListener('timeupdate', () => {
      if (heroVideo.currentTime >= 7.1) {
        heroVideo.currentTime = 0;
        heroVideo.play().catch(() => {});
      }
    });
    heroVideo.play().catch(() => {});
  }
  initScrollScrubbing('scrubbing-canvas');
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
