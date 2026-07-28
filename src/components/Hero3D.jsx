import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ArrowRight, Code, Brain, Mail, Sparkles, FileText } from 'lucide-react';

export default function Hero3D() {
  const mountRef = useRef(null);
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  const roles = [
    "Computer Science (AI & ML) Engineer",
    "LLM & RAG Systems Architect",
    "Full-Stack AI Application Developer",
    "Machine Learning & PyTorch Specialist"
  ];

  const getAssetPath = (filename) => {
    return import.meta.env.BASE_URL + filename;
  };

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, []);

  // Three.js 3D Disperse & Compress Physics Canvas
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    container.innerHTML = '';

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x090d16, 0.015);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0.5, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const cyanPointLight = new THREE.PointLight(0x06b6d4, 8, 35);
    cyanPointLight.position.set(4, 4, 5);
    scene.add(cyanPointLight);

    const purplePointLight = new THREE.PointLight(0xa855f7, 8, 35);
    purplePointLight.position.set(-3, -3, 3);
    scene.add(purplePointLight);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. PROMINENT TOP-RIGHT 3D HOLOGRAPHIC AI CORE
    const aiCoreGroup = new THREE.Group();
    aiCoreGroup.position.set(4.8, 1.8, -1.5);
    mainGroup.add(aiCoreGroup);

    const innerGeom = new THREE.IcosahedronGeometry(1.2, 2);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.65,
      wireframe: false
    });
    const innerMesh = new THREE.Mesh(innerGeom, innerMat);
    aiCoreGroup.add(innerMesh);

    const cageGeom = new THREE.IcosahedronGeometry(1.6, 1);
    const cageMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      emissive: 0xa855f7,
      emissiveIntensity: 0.35,
      roughness: 0.1,
      metalness: 0.8,
      transmission: 0.9,
      opacity: 0.75,
      transparent: true,
      wireframe: true
    });
    const cageMesh = new THREE.Mesh(cageGeom, cageMat);
    aiCoreGroup.add(cageMesh);

    const ring1Geom = new THREE.TorusGeometry(2.3, 0.04, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.9,
      roughness: 0.2
    });
    const ring1Mesh = new THREE.Mesh(ring1Geom, ring1Mat);
    ring1Mesh.rotation.x = Math.PI / 3;
    aiCoreGroup.add(ring1Mesh);

    const ring2Geom = new THREE.TorusGeometry(2.8, 0.035, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0xa855f7,
      emissiveIntensity: 0.9,
      roughness: 0.2
    });
    const ring2Mesh = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2Mesh.rotation.y = Math.PI / 4;
    aiCoreGroup.add(ring2Mesh);

    // 2. 3D CYBER HORIZON GRID PLANE
    const gridHelper = new THREE.GridHelper(50, 50, 0x06b6d4, 0x1f293d);
    gridHelper.position.y = -3.2;
    gridHelper.material.opacity = 0.45;
    gridHelper.material.transparent = true;
    mainGroup.add(gridHelper);

    // 3. 3D DISPERSE & COMPRESS PARTICLE SYSTEM
    const particleCount = 1200;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const origPositions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      const x = (Math.random() - 0.5) * 24;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 16;

      positions[idx] = x;
      positions[idx + 1] = y;
      positions[idx + 2] = z;

      origPositions[idx] = x;
      origPositions[idx + 1] = y;
      origPositions[idx + 2] = z;

      velocities[idx] = 0;
      velocities[idx + 1] = 0;
      velocities[idx + 2] = 0;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.09,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    const raycaster = new THREE.Raycaster();
    const mouse2D = new THREE.Vector2(-999, -999);
    const planeZ0 = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const cursor3D = new THREE.Vector3(-999, -999, 0);

    const handleWindowMouseMove = (event) => {
      mouse2D.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse2D.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse2D, camera);
      raycaster.ray.intersectPlane(planeZ0, cursor3D);
    };

    window.addEventListener('mousemove', handleWindowMouseMove);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    const repulsionRadius = 4.2;
    const repulsionForce = 0.55;
    const springReturnForce = 0.08;
    const damping = 0.84;

    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      const posAttr = particleSystem.geometry.attributes.position;
      const posArray = posAttr.array;

      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        const px = posArray[idx];
        const py = posArray[idx + 1];
        const pz = posArray[idx + 2];

        const ox = origPositions[idx];
        const oy = origPositions[idx + 1];
        const oz = origPositions[idx + 2];

        const dx = px - cursor3D.x;
        const dy = py - cursor3D.y;
        const dz = pz - cursor3D.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < repulsionRadius && dist > 0.001) {
          const force = (1 - dist / repulsionRadius) * repulsionForce;
          velocities[idx] += (dx / dist) * force;
          velocities[idx + 1] += (dy / dist) * force;
          velocities[idx + 2] += (dz / dist) * force;
        }

        const rx = ox - px;
        const ry = oy - py;
        const rz = oz - pz;

        velocities[idx] += rx * springReturnForce;
        velocities[idx + 1] += ry * springReturnForce;
        velocities[idx + 2] += rz * springReturnForce;

        velocities[idx] *= damping;
        velocities[idx + 1] *= damping;
        velocities[idx + 2] *= damping;

        posArray[idx] += velocities[idx];
        posArray[idx + 1] += velocities[idx + 1];
        posArray[idx + 2] += velocities[idx + 2];
      }

      posAttr.needsUpdate = true;

      innerMesh.rotation.x = elapsedTime * 0.4;
      innerMesh.rotation.y = elapsedTime * 0.5;
      cageMesh.rotation.x = elapsedTime * -0.2;
      cageMesh.rotation.y = elapsedTime * -0.3;

      ring1Mesh.rotation.z = elapsedTime * 0.6;
      ring2Mesh.rotation.z = elapsedTime * -0.5;

      const pulseScale = 1 + Math.sin(elapsedTime * 2.5) * 0.07;
      innerMesh.scale.setScalar(pulseScale);

      gridHelper.position.z = (elapsedTime * 0.8) % 1.0;

      cyanPointLight.position.x = Math.sin(elapsedTime * 0.8) * 6;
      cyanPointLight.position.y = Math.cos(elapsedTime * 0.5) * 6;

      purplePointLight.position.x = Math.cos(elapsedTime * 0.6) * 6;
      purplePointLight.position.y = Math.sin(elapsedTime * 0.7) * 6;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px', paddingBottom: '60px', overflow: 'hidden' }}>
      
      {/* 3D WebGL Canvas Layer */}
      <div 
        ref={mountRef} 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none'
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* CodeBucks Signature 2-Column Hero Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
          
          {/* Left Column: CodeBucks Signature Profile Image Frame */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '280px', height: '280px' }}>
              
              {/* Spinning/Glowing Cyber Border Ring */}
              <div style={{
                position: 'absolute',
                top: '-8px',
                left: '-8px',
                right: '-8px',
                bottom: '-8px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent-primary), #a855f7, #10b981)',
                boxShadow: '0 0 35px var(--accent-glow)',
                animation: 'spin 12s linear infinite',
                opacity: 0.85
              }} />

              {/* Profile Image Circle */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid var(--bg-primary)',
                background: 'var(--bg-glass-card)'
              }}>
                <img
                  src={getAssetPath('profile.jpg')}
                  alt="Mani Kethan Reddy Challa"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>

              {/* Floating Badge Tag */}
              <div
                className="glass-card"
                style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  padding: '6px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#10b981',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.6)',
                  border: '1px solid rgba(16,185,129,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Sparkles size={14} /> Open to AI/ML Roles
              </div>

            </div>
          </div>

          {/* Right Column: CodeBucks Signature Headlines & Call to Actions */}
          <div>
            
            <div className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Brain size={16} /> Computer Science (AI & ML) Engineer
            </div>

            <h1 style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '20px' }}>
              Turning Vision Into Reality With <span className="gradient-text">AI & Code.</span>
            </h1>

            {/* Dynamic Role Rotator */}
            <div style={{ minHeight: '44px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1.1rem',
                color: 'var(--accent-primary)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 18px',
                background: 'rgba(6, 182, 212, 0.08)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-glass)'
              }}>
                <Code size={18} />
                <span>{roles[activeRoleIndex]}</span>
              </div>
            </div>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '32px', maxWidth: '580px' }}>
              As a dedicated AI & Machine Learning Specialist, I transform ideas into intelligent web applications, Retrieval-Augmented Generation (RAG) models, and high-performance algorithms.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '44px', alignItems: 'center' }}>
              <a
                href={getAssetPath('Mani_Kethan_Reddy_Resume.pdf')}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ padding: '12px 26px', fontSize: '0.95rem' }}
              >
                Resume <FileText size={18} />
              </a>
              <a
                href="#contact"
                className="btn-secondary"
                style={{ padding: '12px 26px', fontSize: '0.95rem' }}
              >
                Contact Me <Mail size={18} />
              </a>
              <a
                href="#projects"
                className="btn-secondary"
                style={{ padding: '12px 26px', fontSize: '0.95rem' }}
              >
                Explore Projects <ArrowRight size={18} />
              </a>
            </div>

            {/* Key Accomplishments Badges */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', maxWidth: '520px' }}>
              <div className="glass-card" style={{ padding: '14px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.7rem', fontWeight: 800, color: 'var(--accent-primary)' }}>4+</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '2px' }}>AI Projects</div>
              </div>
              <div className="glass-card" style={{ padding: '14px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.7rem', fontWeight: 800, color: 'var(--accent-primary)' }}>2x</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '2px' }}>Hackathon Finalist</div>
              </div>
              <div className="glass-card" style={{ padding: '14px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.7rem', fontWeight: 800, color: 'var(--accent-primary)' }}>1</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '2px' }}>IJERT Publication</div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* CodeBucks Signature Rotating "HIRE ME" Badge in Corner */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <a
          href="#contact"
          style={{
            position: 'relative',
            width: '84px',
            height: '84px',
            borderRadius: '50%',
            background: 'var(--bg-glass-panel)',
            border: '1px solid var(--accent-glow)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            color: '#fff',
            boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <div style={{
            fontSize: '0.75rem',
            fontWeight: 800,
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent-primary)',
            textAlign: 'center'
          }}>
            HIRE ME
          </div>
        </a>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
