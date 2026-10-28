import * as THREE from 'three';

export function initScrollScrubbing(canvasId = 'scrubbing-canvas') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return null;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0e0c0a);
  // Sem fog espesso para não esconder os objetos no horizonte
  scene.fog = new THREE.FogExp2(0x0e0c0a, 0.005);

  const camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 500);
  camera.position.set(0, 4, 18);

  // 1. ILUMINAÇÃO DE ALTO PADRÃO
  const ambLight = new THREE.AmbientLight(0xfff5e6, 1.4);
  scene.add(ambLight);

  const dirLight = new THREE.DirectionalLight(0xd4ae4b, 3.5);
  dirLight.position.set(20, 30, 20);
  scene.add(dirLight);

  // Luz fixa central potente
  const centerLight = new THREE.PointLight(0xffeed4, 3.0, 100);
  centerLight.position.set(0, 8, 0);
  scene.add(centerLight);

  // 2. MATERIAIS PARA OS EDIFÍCIOS
  const boxGeo = new THREE.BoxGeometry(2.4, 12, 2.4);
  const wireGeo = new THREE.WireframeGeometry(boxGeo);

  const towerMat = new THREE.MeshStandardMaterial({
    color: 0x1f1b16,
    roughness: 0.2,
    metalness: 0.88
  });

  const wireMatGold = new THREE.LineBasicMaterial({
    color: 0xd4ae4b,
    transparent: true,
    opacity: 0.75
  });

  const towerMatAccent = new THREE.MeshStandardMaterial({
    color: 0x2b241c,
    roughness: 0.15,
    metalness: 0.95
  });

  const wireMatBright = new THREE.LineBasicMaterial({
    color: 0xf5e5b8,
    transparent: true,
    opacity: 0.95
  });

  // 3. CONSTRUÇÃO DA METRÓPOLE 3D CENTRALIZADA
  // Os edifícios estão posicionados ao redor do centro (Z de -25 a +25)
  // O grupo gira e se transforma continuamente e reage ao scroll
  const group = new THREE.Group();
  scene.add(group);

  const towerCount = 60;
  const towers = [];
  for (let i = 0; i < towerCount; i++) {
    const isAccent = (i % 3 === 0);
    const mesh = new THREE.Mesh(boxGeo, isAccent ? towerMatAccent : towerMat);
    const wire = new THREE.LineSegments(wireGeo, isAccent ? wireMatBright : wireMatGold);
    mesh.add(wire);

    // Distribuição em espiral / praça circular ampla
    const angle = (i / towerCount) * Math.PI * 4;
    const radius = 5.5 + (i % 6) * 1.8;
    const xPos = Math.cos(angle) * radius;
    const zPos = Math.sin(angle) * radius * 1.2;
    const yHeight = Math.random() * 2.5 + 1.2;

    mesh.position.set(xPos, (Math.random() - 0.5) * 2, zPos);
    mesh.scale.set(0.9, yHeight, 0.9);
    mesh.rotation.y = angle + Math.PI / 2;

    group.add(mesh);
    towers.push(mesh);
  }

  // 4. ANÉIS DE TRANSIÇÃO DOURADOS
  const ringGeo = new THREE.TorusGeometry(6.5, 0.1, 16, 80);
  const ringMat = new THREE.MeshStandardMaterial({
    color: 0xd4ae4b,
    emissive: 0x966f1e,
    roughness: 0.15,
    metalness: 0.95
  });

  const rings = [];
  const ringCount = 6;
  for (let r = 0; r < ringCount; r++) {
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.set(0, 2 + (r - 2.5) * 1.8, 0);
    ring.rotation.x = Math.PI / 2 + (r * 0.1);
    ring.scale.setScalar(1 + r * 0.25);
    scene.add(ring);
    rings.push(ring);
  }

  // 5. NUVEM DE PARTÍCULAS DOURADAS COBRINDO O ESPAÇO (12.000 pontos)
  const particleCount = 12000;
  const partGeo = new THREE.BufferGeometry();
  const partPos = new Float32Array(particleCount * 3);
  const partCols = new Float32Array(particleCount * 3);

  const goldColors = [
    new THREE.Color(0xd4ae4b),
    new THREE.Color(0xf5e5b8),
    new THREE.Color(0xa87d20),
    new THREE.Color(0xffffff)
  ];

  for (let p = 0; p < particleCount; p++) {
    partPos[p * 3 + 0] = (Math.random() - 0.5) * 50;
    partPos[p * 3 + 1] = (Math.random() - 0.5) * 30 + 3;
    partPos[p * 3 + 2] = (Math.random() - 0.5) * 50;

    const c = goldColors[Math.floor(Math.random() * goldColors.length)];
    partCols[p * 3 + 0] = c.r;
    partCols[p * 3 + 1] = c.g;
    partCols[p * 3 + 2] = c.b;
  }

  partGeo.setAttribute('position', new THREE.BufferAttribute(partPos, 3));
  partGeo.setAttribute('color', new THREE.BufferAttribute(partCols, 3));

  const partMat = new THREE.PointsMaterial({
    size: 0.2,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending
  });

  const particles = new THREE.Points(partGeo, partMat);
  scene.add(particles);

  // REDIMENSIONAMENTO DO CANVAS
  function onResize() {
    if (!canvas) return;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  }
  window.addEventListener('resize', onResize);
  onResize();

  // MÉTODO PARA ATUALIZAR O PROGRESSO DO SCROLL
  let currentScroll = 0;
  const scrubSection = document.getElementById('jornada');

  function calculateProgress() {
    if (!scrubSection) return 0;
    const rect = scrubSection.getBoundingClientRect();
    const totalHeight = scrubSection.offsetHeight - window.innerHeight;
    if (totalHeight <= 0) return 0;
    const current = -rect.top;
    return Math.max(0, Math.min(1, current / totalHeight));
  }

  let animId;
  let time = 0;

  function render() {
    animId = requestAnimationFrame(render);
    time += 0.015;

    const targetProgress = calculateProgress();
    currentScroll += (targetProgress - currentScroll) * 0.1;

    // Câmera orbita suavemente ao redor da metrópole KMY conforme o usuário rola a página
    // Ângulo de órbita viaja 360 graus entre a Fase 01 e a Fase 04!
    const orbitAngle = currentScroll * Math.PI * 2.2 + time * 0.1;
    const radius = 22 + Math.sin(currentScroll * Math.PI) * 4;
    const camY = 4.5 + Math.sin(currentScroll * Math.PI * 3) * 2.5;

    camera.position.x = Math.sin(orbitAngle) * radius;
    camera.position.z = Math.cos(orbitAngle) * radius;
    camera.position.y = camY;

    // Câmera sempre mantém a metrópole 3D perfeitamente enquadrada no centro
    camera.lookAt(0, 2.0, 0);

    // Animação contínua dos anéis
    for (let r = 0; r < rings.length; r++) {
      rings[r].rotation.z = time * 0.3 + r * 0.35 + currentScroll * Math.PI;
      rings[r].rotation.y = time * 0.15;
    }

    // Leve rotação de partículas e metrópole
    group.rotation.y = time * 0.05 + currentScroll * 0.8;
    particles.rotation.y = -time * 0.03;

    renderer.render(scene, camera);
  }

  render();

  return {
    destroy: () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    }
  };
}
