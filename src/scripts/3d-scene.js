/**
 * Arohan Vyoma Tech - Advanced 3D Hero Scene
 * Premium Three.js animation with particle network, floating code, and interactive effects
 */

import * as THREE from 'three';

export class Scene3D {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.time = 0;
    this.networkGroup = null;
    this.codeSprites = [];
    this.connections = [];
    this.nodePositions = [];
    this.nodeVelocities = [];

    this.init();
    this.createParticleNetwork();
    this.createFloatingCode();
    this.createAmbientParticles();
    this.addLights();
    this.addEventListeners();
    this.animate();
  }

  init() {
    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, 30);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);
  }

  createParticleNetwork() {
    this.networkGroup = new THREE.Group();

    // Create nodes in a sphere distribution
    const nodeCount = 120;
    const sphereRadius = 12;

    const nodeGeometry = new THREE.SphereGeometry(0.08, 8, 8);

    for (let i = 0; i < nodeCount; i++) {
      // Fibonacci sphere distribution for even spacing
      const phi = Math.acos(1 - 2 * (i + 0.5) / nodeCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const x = sphereRadius * Math.sin(phi) * Math.cos(theta);
      const y = sphereRadius * Math.sin(phi) * Math.sin(theta);
      const z = sphereRadius * Math.cos(phi);

      // Add some noise
      const noiseScale = 2.5;
      const pos = new THREE.Vector3(
        x + (Math.random() - 0.5) * noiseScale,
        y + (Math.random() - 0.5) * noiseScale,
        z + (Math.random() - 0.5) * noiseScale
      );

      this.nodePositions.push(pos);
      this.nodeVelocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.005,
        (Math.random() - 0.5) * 0.005,
        (Math.random() - 0.5) * 0.005
      ));

      // Glowing node
      const isBright = Math.random() > 0.7;
      const nodeMaterial = new THREE.MeshBasicMaterial({
        color: isBright ? 0x00d4ff : 0x6366f1,
        transparent: true,
        opacity: isBright ? 0.9 : 0.5
      });

      const node = new THREE.Mesh(
        isBright ? new THREE.SphereGeometry(0.12, 8, 8) : nodeGeometry,
        nodeMaterial
      );
      node.position.copy(pos);
      node.userData = { index: i, isBright, baseOpacity: nodeMaterial.opacity };
      this.networkGroup.add(node);

      // Add glow to bright nodes
      if (isBright) {
        const glowGeometry = new THREE.SphereGeometry(0.4, 8, 8);
        const glowMaterial = new THREE.MeshBasicMaterial({
          color: 0x00d4ff,
          transparent: true,
          opacity: 0.15,
          side: THREE.BackSide
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        glow.position.copy(pos);
        this.networkGroup.add(glow);
      }
    }

    // Create connection lines between nearby nodes
    this.createConnections();

    this.scene.add(this.networkGroup);
  }

  createConnections() {
    const maxDistance = 5;
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending
    });

    for (let i = 0; i < this.nodePositions.length; i++) {
      for (let j = i + 1; j < this.nodePositions.length; j++) {
        const dist = this.nodePositions[i].distanceTo(this.nodePositions[j]);
        if (dist < maxDistance) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            this.nodePositions[i],
            this.nodePositions[j]
          ]);
          const line = new THREE.Line(geometry, lineMaterial.clone());
          line.userData = { i, j, baseDist: dist };
          this.connections.push(line);
          this.networkGroup.add(line);
        }
      }
    }
  }

  createFloatingCode() {
    const codeSnippets = [
      '{ React }', '<Component />', 'async/await',
      'npm deploy', 'git push', '() => {}',
      'const app', 'export', 'import *',
      'API.get()', 'useState', 'render()',
      '<html>', 'Node.js', '.then()',
      'flex: 1', 'grid', 'Docker'
    ];

    codeSnippets.forEach((text, i) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 256;
      canvas.height = 64;

      // Draw text
      ctx.font = 'bold 22px Courier New';
      ctx.fillStyle = i % 3 === 0 ? '#00d4ff' : i % 3 === 1 ? '#a855f7' : '#6366f1';
      ctx.globalAlpha = 0.5;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, 128, 32);

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;

      const spriteMaterial = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending
      });

      const sprite = new THREE.Sprite(spriteMaterial);

      // Position in a wider area around the network
      const angle = (i / codeSnippets.length) * Math.PI * 2;
      const radius = 14 + Math.random() * 8;
      const height = (Math.random() - 0.5) * 16;

      sprite.position.set(
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius
      );

      sprite.scale.set(4, 1, 1);

      sprite.userData = {
        angle: angle,
        radius: radius,
        height: height,
        speed: 0.02 + Math.random() * 0.03,
        floatSpeed: 0.3 + Math.random() * 0.5,
        floatOffset: Math.random() * Math.PI * 2
      };

      this.codeSprites.push(sprite);
      this.scene.add(sprite);
    });
  }

  createAmbientParticles() {
    // Dust particles scattered across the scene
    const count = 500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      // Cyan or purple tint
      if (Math.random() > 0.6) {
        colors[i * 3] = 0;
        colors[i * 3 + 1] = 0.83;
        colors[i * 3 + 2] = 1;
      } else {
        colors[i * 3] = 0.66;
        colors[i * 3 + 1] = 0.33;
        colors[i * 3 + 2] = 0.97;
      }

      sizes[i] = Math.random() * 2 + 0.5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.06,
      transparent: true,
      opacity: 0.4,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    this.ambientParticles = new THREE.Points(geometry, material);
    this.scene.add(this.ambientParticles);
  }

  addLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    this.scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00d4ff, 1.5, 60);
    pointLight1.position.set(15, 10, 15);
    this.scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xa855f7, 1.2, 60);
    pointLight2.position.set(-15, -10, -15);
    this.scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x6366f1, 0.8, 40);
    pointLight3.position.set(0, 15, 0);
    this.scene.add(pointLight3);
  }

  addEventListeners() {
    window.addEventListener('resize', () => this.onResize());
    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    });
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.time += 0.016;

    // Smooth mouse follow
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    // Rotate the entire network slowly
    if (this.networkGroup) {
      this.networkGroup.rotation.y += 0.002;
      this.networkGroup.rotation.x = Math.sin(this.time * 0.1) * 0.1;

      // Mouse influence on rotation
      this.networkGroup.rotation.y += this.mouse.x * 0.003;
      this.networkGroup.rotation.x += this.mouse.y * 0.002;
    }

    // Animate nodes with subtle breathing
    this.networkGroup.children.forEach(child => {
      if (child.userData && child.userData.index !== undefined) {
        const idx = child.userData.index;
        const vel = this.nodeVelocities[idx];

        // Subtle movement
        child.position.x += vel.x;
        child.position.y += vel.y;
        child.position.z += vel.z;

        // Pulse bright nodes
        if (child.userData.isBright && child.material) {
          child.material.opacity = child.userData.baseOpacity +
            Math.sin(this.time * 2 + idx) * 0.2;
        }
      }
    });

    // Update connection lines
    this.connections.forEach(line => {
      const { i, j } = line.userData;
      const nodeA = this.networkGroup.children[i];
      const nodeB = this.networkGroup.children[j];
      if (nodeA && nodeB) {
        const positions = line.geometry.attributes.position;
        if (positions) {
          positions.setXYZ(0, nodeA.position.x, nodeA.position.y, nodeA.position.z);
          positions.setXYZ(1, nodeB.position.x, nodeB.position.y, nodeB.position.z);
          positions.needsUpdate = true;
        }
      }
    });

    // Animate floating code sprites orbiting
    this.codeSprites.forEach(sprite => {
      const data = sprite.userData;
      data.angle += data.speed * 0.01;

      sprite.position.x = Math.cos(data.angle) * data.radius;
      sprite.position.z = Math.sin(data.angle) * data.radius;
      sprite.position.y = data.height + Math.sin(this.time * data.floatSpeed + data.floatOffset) * 0.8;

      // Fade based on z-depth for parallax feel
      const depth = (sprite.position.z + data.radius) / (data.radius * 2);
      sprite.material.opacity = 0.15 + depth * 0.25;
    });

    // Rotate ambient particles
    if (this.ambientParticles) {
      this.ambientParticles.rotation.y += 0.0003;
      this.ambientParticles.rotation.x += 0.0001;
    }

    // Camera parallax
    this.camera.position.x = this.mouse.x * 3;
    this.camera.position.y = this.mouse.y * 2;
    this.camera.lookAt(0, 0, 0);

    this.renderer.render(this.scene, this.camera);
  }
}
