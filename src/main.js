import { imoveis, categoriasList, decoracaoEtapas, institucionalDados } from './data/imoveis.js';
import { initScrollScrubbing } from './gl/scrollScrubbing.js';
import Lenis from 'lenis';

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
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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

  container.innerHTML = categoriasList.map(cat => `
    <div class="category-card ${cat.id === 'todos' ? 'active' : ''}" data-cat-id="${cat.id}">
      <div class="category-icon">
        <i class="icon-${cat.icone}">✦</i>
      </div>
      <div class="category-title">${cat.nome}</div>
      <div class="category-count">${cat.total} ${cat.total === 1 ? 'ativo disponível' : 'ativos disponíveis'}</div>
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

  container.innerHTML = categoriasList.map(cat => `
    <button class="filter-pill ${cat.id === 'todos' ? 'active' : ''}" data-filter="${cat.id}">
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
        // Entrada suave para os novos
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
  const texto = 
`Olá, KMY Prime!
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

  const filtered = filter === 'todos' 
    ? imoveis 
    : imoveis.filter(item => item.categoria === filter);

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <p style="font-size: 1.2rem; color: var(--text-secondary);">Nenhum ativo encontrado nesta categoria no momento.</p>
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
          
          <div class="prop-features">
            <div class="feature-item">📐 <span>${item.areaConstruida || item.areaTotal}</span></div>
            ${item.suites ? `<div class="feature-item">🛏️ <span>${item.suites} suítes</span></div>` : ''}
            ${item.vagas ? `<div class="feature-item">🚗 <span>${item.vagas} vagas</span></div>` : ''}
          </div>

          <div class="prop-footer">
            <div class="prop-price-box">
              <span class="prop-price-label">${item.finalidadeNome}</span>
              <span class="prop-price">${item.precoFormatado}</span>
            </div>
            <div class="prop-actions">
              <button class="btn-detail open-modal-btn" data-id="${item.id}">
                Ficha Técnica
              </button>
              <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-prop-wa" title="Conversar no WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  attachImageFallback(grid);

  // Anexar ouvintes de modal
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

function openPropertyModal(id) {
  modalOverlay = document.getElementById('property-modal-overlay');
  modalContainer = document.getElementById('property-modal-container');
  const imovel = imoveis.find(item => item.id === id);
  if (!imovel || !modalOverlay || !modalContainer) return;

  const waUrl = buildWhatsAppUrl(imovel);

  modalContainer.innerHTML = `
    <button class="modal-close-btn" id="modal-close-btn" aria-label="Fechar modal">✕</button>
    <img src="${imovel.imagem}" alt="${imovel.titulo}" class="modal-header-image" />
    <div class="modal-content-inner">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; margin-bottom: 20px;">
        <div>
          <div class="subtitle-badge">${imovel.id} · ${imovel.categoriaNome} · ${imovel.finalidadeNome}</div>
          <h2 style="font-size: 2.1rem; line-height: 1.25; margin-bottom: 8px;">${imovel.titulo}</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem;">📍 ${imovel.localizacao}</p>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Valor do Investimento</div>
          <div style="font-family: var(--font-serif); font-size: 2.2rem; font-weight: 700; color: var(--gold-700);">${imovel.precoFormatado}</div>
          ${imovel.precoInfo ? `<div style="font-size: 0.82rem; color: var(--text-gold);">${imovel.precoInfo}</div>` : ''}
        </div>
      </div>

      <div style="display: flex; gap: 20px; padding: 18px 0; border-top: 1px solid var(--border-light); border-bottom: 1px solid var(--border-light); margin-bottom: 24px; font-weight: 600;">
        <div>Área Total: <span style="color: var(--gold-700);">${imovel.areaTotal}</span></div>
        <div>Área Construída: <span style="color: var(--gold-700);">${imovel.areaConstruida}</span></div>
        ${imovel.suites ? `<div>Suítes: <span style="color: var(--gold-700);">${imovel.suites}</span></div>` : ''}
        ${imovel.vagas ? `<div>Vagas: <span style="color: var(--gold-700);">${imovel.vagas}</span></div>` : ''}
      </div>

      <h4 style="font-size: 1.15rem; margin-bottom: 12px;">Descrição do Empreendimento</h4>
      <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 28px;">${imovel.descricao}</p>

      <h4 style="font-size: 1.15rem; margin-bottom: 16px;">Destaques & Diferenciais KMY</h4>
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
          <div style="font-weight: 700; color: var(--text-primary);">Marta A. Soriano — Decoradora &amp; CEO Novos Negócios</div>
          <div style="font-size: 0.85rem; color: var(--text-muted);">Atendimento Executivo Exclusivo KMY Prime</div>
        </div>
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="padding: 16px 36px; font-size: 1rem;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          Solicitar Informações no WhatsApp
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

  container.innerHTML = decoracaoEtapas.map(etapa => `
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

    const texto = 
`Olá, KMY Prime!
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

  renderCategories();
  renderCatalogFilters();
  renderProperties();
  renderDecoracao();
  setupContactForm();
  setupHeroSearch();
  setupHeaderScroll();
  checkUrlHash();

  // Garantir reprodução contínua do vídeo de fundo no Hero e iniciar Scroll Scrubbing
  const heroVideo = document.querySelector('.hero-bg-video');
  if (heroVideo) {
    heroVideo.muted = true;
    heroVideo.play().catch(() => {});
  }
  initScrollScrubbing('scrubbing-canvas');
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
