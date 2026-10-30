import * as THREE from 'three';
import { KMY_COIN_DATA_URI } from './kmyCoinTextureData.js';

export function initHeroWebGL(canvasId = 'hero-webgl-canvas') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return null;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
  } catch (err) {
    console.warn('WebGL fallback:', err);
    return null;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  if ('outputColorSpace' in renderer && THREE.SRGBColorSpace) {
    renderer.outputColorSpace = THREE.SRGBColorSpace;
  }

  const scene = new THREE.Scene();
  const widthInit = canvas.clientWidth || window.innerWidth;
  const heightInit = canvas.clientHeight || window.innerHeight;
  const camera = new THREE.PerspectiveCamera(45, widthInit / heightInit, 0.1, 100);
  camera.position.set(0, 0, 8.5);

  // Mouse interactivity
  const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  const onMouseMove = (e) => {
    mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
  };
  window.addEventListener('mousemove', onMouseMove, { passive: true });

  // 1. MOEDA 3D KMY PRIME (Adaptada diretamente da arte oficial kmy_3d.jpg)
  const medallionGroup = new THREE.Group();
  scene.add(medallionGroup);
  medallionGroup.position.set(2.55, 0.18, 0);

  const coinRadius = 1.92;
  const coinThickness = 0.24;

  // Carregar textura circular extraída de kmy_3d.jpg (Data URI garante carregamento instantâneo e sem bloqueio CORS em file://)
  const coinTexture = new THREE.Texture();
  if ('colorSpace' in coinTexture && THREE.SRGBColorSpace) {
    coinTexture.colorSpace = THREE.SRGBColorSpace;
  }
  coinTexture.anisotropy = renderer.capabilities.getMaxAnisotropy ? renderer.capabilities.getMaxAnisotropy() : 4;

  const coinImage = new Image();
  coinImage.crossOrigin = 'anonymous';
  coinImage.onload = () => {
    coinTexture.image = coinImage;
    coinTexture.needsUpdate = true;
  };
  coinImage.src = KMY_COIN_DATA_URI;

  // Shader customizado para a face da moeda kmy_3d.jpg:
  // Preserva fielmente o ouro escovado e o monograma prateado 3D da imagem original
  // e adiciona reflexo especular dinâmico que reage à inclinação 3D e ao mouse
  const coinFaceMat = new THREE.ShaderMaterial({
    transparent: true,
    uniforms: {
      uMap: { value: coinTexture },
      uTime: { value: 0 },
      uTilt: { value: new THREE.Vector2(0, 0) }
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormal;
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D uMap;
      uniform float uTime;
      uniform vec2 uTilt;
      varying vec2 vUv;
      varying vec3 vNormal;

      void main() {
        vec2 centered = vUv - vec2(0.5);
        float dist = length(centered);
        if (dist > 0.498) discard;

        vec4 texColor = texture2D(uMap, vUv);

        // Detectar áreas prateadas do emblema central "K/X" vs fundo de ouro escovado
        float lum = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));
        float goldWarmth = texColor.r - texColor.b;
        float isSilverEmblem = smoothstep(0.14, 0.03, goldWarmth) * smoothstep(0.35, 0.65, lum);

        // Feixe de luz especular dinâmico que percorre a moeda conforme o movimento 3D
        float sweepPos = sin(uTime * 0.85) * 0.45 + uTilt.x * 0.55;
        float sweepCoord = (centered.x * 0.82 - centered.y * 0.57) - sweepPos;
        float sheen = exp(-sweepCoord * sweepCoord * 22.0);

        // Reflexo mais intenso no monograma cromado e brilho quente no ouro escovado
        vec3 silverSpec = vec3(1.0, 0.99, 0.96) * sheen * (0.18 + isSilverEmblem * 0.28);
        vec3 goldSpec = vec3(1.0, 0.86, 0.52) * sheen * (1.0 - isSilverEmblem) * 0.14;

        // Realce sutil na borda chanfrada externa
        float rimGlow = smoothstep(0.455, 0.495, dist) * (0.18 + 0.12 * sin(uTime * 1.5 + atan(centered.y, centered.x) * 2.0));
        vec3 rimColor = vec3(0.96, 0.84, 0.52) * rimGlow;

        vec3 finalRgb = texColor.rgb * 1.05 + silverSpec + goldSpec + rimColor;

        // Suavização anti-aliasing na borda circular
        float edgeAlpha = smoothstep(0.498, 0.490, dist) * texColor.a;
        gl_FragColor = vec4(finalRgb, edgeAlpha);
      }
    `
  });

  // Face frontal da moeda com a imagem kmy_3d.jpg adaptada
  const faceGeo = new THREE.CircleGeometry(coinRadius, 96);
  const frontFace = new THREE.Mesh(faceGeo, coinFaceMat);
  frontFace.position.z = coinThickness * 0.5 + 0.004;
  medallionGroup.add(frontFace);

  // Face traseira da moeda (caso haja rotação acentuada)
  const backFace = new THREE.Mesh(faceGeo, coinFaceMat);
  backFace.rotation.y = Math.PI;
  backFace.position.z = -(coinThickness * 0.5 + 0.004);
  medallionGroup.add(backFace);

  // Lateral cilíndrica 3D em ouro escovado luminoso (espessura física da moeda)
  const sideGeo = new THREE.CylinderGeometry(coinRadius * 0.992, coinRadius * 0.992, coinThickness, 96, 1, true);
  sideGeo.rotateX(Math.PI / 2);
  const goldEdgeMat = new THREE.MeshStandardMaterial({
    color: 0xd4ae4b,
    emissive: 0x5a4214,
    emissiveIntensity: 0.55,
    metalness: 0.45,
    roughness: 0.28
  });
  const sideMesh = new THREE.Mesh(sideGeo, goldEdgeMat);
  medallionGroup.add(sideMesh);

  // Anéis chanfrados de acabamento em ouro polido (frontal e traseiro)
  const bezelGeo = new THREE.TorusGeometry(coinRadius * 0.988, 0.038, 20, 120);
  const goldBezelMat = new THREE.MeshStandardMaterial({
    color: 0xf5e5b8,
    emissive: 0x7a5713,
    emissiveIntensity: 0.45,
    metalness: 0.5,
    roughness: 0.18
  });

  const frontBezel = new THREE.Mesh(bezelGeo, goldBezelMat);
  frontBezel.position.z = coinThickness * 0.46;
  medallionGroup.add(frontBezel);

  const backBezel = new THREE.Mesh(bezelGeo, goldBezelMat);
  backBezel.position.z = -coinThickness * 0.46;
  medallionGroup.add(backBezel);

  // Halo dourado sutil ao redor da moeda para destacar do fundo marfim
  const haloGeo = new THREE.RingGeometry(coinRadius * 0.98, coinRadius * 1.14, 96);
  const haloMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    uniforms: {
      uTime: { value: 0 }
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      void main() {
        vec2 c = vUv - vec2(0.5);
        float r = length(c) * 2.0;
        float alpha = smoothstep(1.0, 0.86, r) * smoothstep(0.82, 0.90, r) * 0.28;
        gl_FragColor = vec4(0.83, 0.68, 0.29, alpha);
      }
    `
  });
  const haloMesh = new THREE.Mesh(haloGeo, haloMat);
  haloMesh.position.z = -coinThickness * 0.55;
  medallionGroup.add(haloMesh);

  // Iluminação de estúdio para a borda 3D da moeda
  const keyLight = new THREE.DirectionalLight(0xfff7e6, 3.2);
  keyLight.position.set(5, 6, 6);
  scene.add(keyLight);

  const goldFillLight = new THREE.DirectionalLight(0xd4ae4b, 2.2);
  goldFillLight.position.set(-6, -3, 4);
  scene.add(goldFillLight);

  const ambLight = new THREE.AmbientLight(0xfffaf0, 1.8);
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
    let px = (Math.random() - 0.5) * 20;
    let py = (Math.random() - 0.5) * 14;
    let pz = (Math.random() - 0.5) * 8;

    // Evitar que partículas fiquem na frente da face da moeda ofuscando o logo kmy_3d
    const dx = px - 2.55;
    const dy = py - 0.18;
    if (dx * dx + dy * dy < 4.6 && pz > -0.6) {
      pz = -0.8 - Math.random() * 3.5;
    }

    positions[i * 3 + 0] = px;
    positions[i * 3 + 1] = py;
    positions[i * 3 + 2] = pz;

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
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);

    if (width < 900) {
      medallionGroup.position.set(0, 0.8, -1.0);
      medallionGroup.scale.setScalar(0.72);
    } else if (width < 1280) {
      medallionGroup.position.set(2.35, 0.18, 0);
      medallionGroup.scale.setScalar(0.88);
    } else {
      medallionGroup.position.set(2.55, 0.18, 0);
      medallionGroup.scale.setScalar(1.0);
    }
  }
  window.addEventListener('resize', onResize);
  onResize();

  // Animation Loop
  const clock = new THREE.Clock();
  let animId;

  function animate() {
    animId = requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Lerp mouse
    mouse.x += (mouse.targetX - mouse.x) * 0.06;
    mouse.y += (mouse.targetY - mouse.y) * 0.06;

    particleMat.uniforms.uTime.value = elapsedTime;
    particleMat.uniforms.uMouse.value.set(mouse.x, mouse.y);

    // Oscilação 3D nobre e interativa: mantém a face principal da moeda kmy_3d sempre visível
    // exibindo o relevo lateral dourado e respondendo suavemente ao cursor
    const rotY = Math.sin(elapsedTime * 0.65) * 0.34 + mouse.x * 0.42;
    const rotX = Math.cos(elapsedTime * 0.5) * 0.14 - mouse.y * 0.28;
    const rotZ = Math.sin(elapsedTime * 0.4) * 0.035;

    medallionGroup.rotation.set(rotX, rotY, rotZ);

    coinFaceMat.uniforms.uTime.value = elapsedTime;
    coinFaceMat.uniforms.uTilt.value.set(rotY, rotX);

    // Leve flutuação vertical no espaço
    const baseY = (canvas.clientWidth || window.innerWidth) < 900 ? 0.8 : 0.18;
    medallionGroup.position.y = baseY + Math.sin(elapsedTime * 1.2) * 0.14;

    renderer.render(scene, camera);
  }

  animate();

  return {
    destroy: () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      renderer.dispose();
    }
  };
}
