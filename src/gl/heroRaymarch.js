import * as THREE from 'three';

export function initHeroWebGL(canvasId = 'hero-webgl-canvas') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return null;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
  camera.position.set(0, 0, 8.5);

  // Mouse interactivity
  const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  window.addEventListener('mousemove', (e) => {
    mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  // 1. MEDALHA 3D NATIVA EM THREE.JS (Geometria 3D Real com Materiais PBR Luxuosos)
  // Sem risco de clipping ou corte do plano 2D!
  const medallionGroup = new THREE.Group();
  scene.add(medallionGroup);

  // Posicionar no quadrante nobre à direita do hero no desktop
  medallionGroup.position.set(2.4, 0.2, 0);

  // Cilindro / Moeda de ouro escovado (espessura elegante, raio proporcional)
  const coinRadius = 1.9;
  const coinThickness = 0.28;
  const coinGeo = new THREE.CylinderGeometry(coinRadius, coinRadius, coinThickness, 80);
  coinGeo.rotateX(Math.PI / 2); // Deixar a face frontal voltada para a câmera

  const goldCoinMat = new THREE.MeshStandardMaterial({
    color: 0xc9a24a,
    metalness: 0.92,
    roughness: 0.22,
    envMapIntensity: 1.5
  });

  const coinMesh = new THREE.Mesh(coinGeo, goldCoinMat);
  medallionGroup.add(coinMesh);

  // Borda chanfrada de ouro polido brilhante ao redor da moeda
  const rimGeo = new THREE.TorusGeometry(coinRadius, 0.08, 16, 100);
  const goldRimMat = new THREE.MeshStandardMaterial({
    color: 0xf5e5b8,
    metalness: 0.98,
    roughness: 0.1
  });
  const rimMesh = new THREE.Mesh(rimGeo, goldRimMat);
  medallionGroup.add(rimMesh);

  // Emblema Central "X" em Prata Polida Cromada (idêntico ao logo da KMY Prime)
  const xGroup = new THREE.Group();
  medallionGroup.add(xGroup);
  xGroup.position.z = 0.16; // ligeiramente projetado para a frente da face da moeda

  const barGeo = new THREE.BoxGeometry(0.38, 2.1, 0.18);
  const silverMat = new THREE.MeshStandardMaterial({
    color: 0xd8dade,
    metalness: 0.96,
    roughness: 0.12
  });

  // Haste 1 inclinada a 45 graus
  const bar1 = new THREE.Mesh(barGeo, silverMat);
  bar1.rotation.z = Math.PI / 4;
  xGroup.add(bar1);

  // Haste 2 inclinada a -45 graus
  const bar2 = new THREE.Mesh(barGeo, silverMat);
  bar2.rotation.z = -Math.PI / 4;
  xGroup.add(bar2);

  // Iluminação de estúdio luxuoso para realçar os reflexos metálicos de ouro e prata
  const keyLight = new THREE.DirectionalLight(0xfff7e6, 3.5);
  keyLight.position.set(5, 6, 6);
  scene.add(keyLight);

  const goldFillLight = new THREE.DirectionalLight(0xd4ae4b, 2.2);
  goldFillLight.position.set(-6, -3, 4);
  scene.add(goldFillLight);

  const rimLight = new THREE.DirectionalLight(0xffffff, 2.8);
  rimLight.position.set(0, 5, -4);
  scene.add(rimLight);

  const ambLight = new THREE.AmbientLight(0xf8f6f0, 1.4);
  scene.add(ambLight);

  // 2. SIMULAÇÃO DE PARTÍCULAS INTERATIVAS (28.000 pontos de ouro cintilante)
  const particleCount = 28000;
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const scales = new Float32Array(particleCount);
  const colors = new Float32Array(particleCount * 3);

  const goldPalette = [
    new THREE.Color(0xd4ae4b),
    new THREE.Color(0xf5e5b8),
    new THREE.Color(0xa87d20),
    new THREE.Color(0xffffff)
  ];

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8;

    scales[i] = Math.random() * 2.2 + 0.6;

    const col = goldPalette[Math.floor(Math.random() * goldPalette.length)];
    colors[i * 3 + 0] = col.r;
    colors[i * 3 + 1] = col.g;
    colors[i * 3 + 2] = col.b;
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeo.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));
  particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const particleMat = new THREE.ShaderMaterial({
    vertexColors: true,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) }
    },
    vertexShader: `
      attribute float aScale;
      uniform float uTime;
      uniform vec2 uMouse;
      varying vec3 vColor;
      
      void main() {
        vColor = color;
        vec3 p = position;
        
        // Gentle organic drift
        p.y += sin(uTime * 0.8 + position.x * 1.5) * 0.16;
        p.x += cos(uTime * 0.6 + position.y * 1.2) * 0.14;
        
        // Cursor repulsion
        vec2 m = uMouse * 6.0;
        float dist = distance(p.xy, m);
        if (dist < 3.0) {
          vec2 dir = normalize(p.xy - m);
          float force = (3.0 - dist) / 3.0;
          p.xy += dir * force * 0.7;
        }

        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = aScale * (18.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      void main() {
        float d = distance(gl_PointCoord, vec2(0.5));
        if (d > 0.5) discard;
        float alpha = smoothstep(0.5, 0.05, d) * 0.75;
        gl_FragColor = vec4(vColor, alpha);
      }
    `
  });

  const particlePoints = new THREE.Points(particleGeo, particleMat);
  scene.add(particlePoints);

  // Resize handler responsivo
  function onResize() {
    if (!canvas) return;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);

    // No mobile ou telas estreitas, centraliza a medalha sutilmente atrás do texto
    if (width < 900) {
      medallionGroup.position.set(0, 0.8, -1.0);
      medallionGroup.scale.setScalar(0.75);
    } else {
      medallionGroup.position.set(2.4, 0.2, 0);
      medallionGroup.scale.setScalar(1.0);
    }
  }
  window.addEventListener('resize', onResize);
  onResize();

  // Animation Loop
  let clock = new THREE.Clock();
  let animId;

  function animate() {
    animId = requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Lerp mouse
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    particleMat.uniforms.uTime.value = elapsedTime;
    particleMat.uniforms.uMouse.value.set(mouse.x, mouse.y);

    // Rotação suave e contínua da medalha com inclinação elegante que segue o mouse
    medallionGroup.rotation.y = elapsedTime * 0.35 + mouse.x * 0.5;
    medallionGroup.rotation.x = Math.sin(elapsedTime * 0.5) * 0.12 - mouse.y * 0.3;

    // Leve flutuação vertical no espaço
    medallionGroup.position.y = (canvas.clientWidth < 900 ? 0.8 : 0.2) + Math.sin(elapsedTime * 1.2) * 0.15;

    renderer.render(scene, camera);
  }

  animate();

  return {
    destroy: () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    }
  };
}
