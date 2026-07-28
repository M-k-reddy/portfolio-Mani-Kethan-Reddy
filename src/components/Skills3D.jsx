import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Cpu, Layers, Server, Box, Terminal, Database, Code, Brain } from 'lucide-react';

export default function Skills3D() {
  const [activeCategory, setActiveCategory] = useState('all');
  const canvasRef = useRef(null);

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'aiml', label: 'AI & Machine Learning' },
    { id: 'languages', label: 'Programming Languages' },
    { id: 'web', label: 'Web & Frameworks' },
    { id: 'tools', label: 'Tools & APIs' }
  ];

  const skillData = [
    { name: 'Python & Data Science', category: 'languages', level: 95, icon: Terminal, exp: 'Core', desc: 'Primary language for ML modeling, data structures, Flask backends, and prompt engineering pipelines.' },
    { name: 'RAG & Vector Search (FAISS)', category: 'aiml', level: 92, icon: Brain, exp: 'Advanced', desc: 'Retrieval-Augmented Generation, vector embeddings, FAISS indexing, and semantic context retrieval.' },
    { name: 'PyTorch & ONNX Runtime', category: 'aiml', level: 88, icon: Cpu, exp: 'Advanced', desc: 'Deep learning model inference, Hugging Face Transformers, vision classification pipelines.' },
    { name: 'Large Language Models (LLMs)', category: 'aiml', level: 90, icon: Brain, exp: 'Advanced', desc: 'Integration with Ollama LLMs, prompt engineering, document summarization engines.' },
    { name: 'Java & Data Structures', category: 'languages', level: 88, icon: Code, exp: 'Core', desc: 'Strong foundation in Java programming, object-oriented design, algorithms, and DSA problem solving.' },
    { name: 'SQL & Database Design', category: 'languages', level: 85, icon: Database, exp: 'Core', desc: 'Relational database schemas, query optimization, structured data storage.' },
    { name: 'React.js & Web Tech', category: 'web', level: 86, icon: Layers, exp: 'Web', desc: 'Interactive frontend interfaces, HTML5, CSS3, JavaScript component design.' },
    { name: 'Flask & REST APIs', category: 'web', level: 90, icon: Server, exp: 'Web', desc: 'Python lightweight web services, Google API integrations, JSON endpoints.' },
    { name: 'Chrome Extension APIs', category: 'tools', level: 88, icon: Box, exp: 'Tools', desc: 'Browser side panel UI development, background scripts, DOM manipulation for AlgoSolveo.' },
    { name: 'Git & GitHub', category: 'tools', level: 92, icon: Terminal, exp: 'Tools', desc: 'Version control, open-source collaboration, feature branching, code reviews.' }
  ];

  // Embedded Three.js 3D Neural Skill Constellation Cluster
  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    container.innerHTML = '';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const clusterGroup = new THREE.Group();
    scene.add(clusterGroup);

    // Core Tech Skill Nodes for 3D Neural Network
    const nodes = [
      { name: 'Python', color: 0x06b6d4, pos: [0, 0, 0], radius: 0.45 },
      { name: 'PyTorch', color: 0xa855f7, pos: [-1.6, 0.9, -0.4], radius: 0.35 },
      { name: 'RAG / FAISS', color: 0x10b981, pos: [1.6, 0.8, -0.2], radius: 0.38 },
      { name: 'Ollama LLM', color: 0x3b82f6, pos: [1.4, -0.9, -0.5], radius: 0.32 },
      { name: 'SQL', color: 0xf59e0b, pos: [-1.4, -0.8, -0.3], radius: 0.33 },
      { name: 'Java', color: 0xec4899, pos: [0, 1.6, -0.6], radius: 0.32 },
      { name: 'Flask APIs', color: 0x8b5cf6, pos: [0, -1.5, -0.4], radius: 0.32 }
    ];

    const nodeMeshes = [];

    // Create 3D Nodes
    nodes.forEach((node) => {
      const geom = new THREE.IcosahedronGeometry(node.radius, 2);
      const mat = new THREE.MeshStandardMaterial({
        color: node.color,
        roughness: 0.2,
        metalness: 0.8,
        emissive: node.color,
        emissiveIntensity: 0.5,
        wireframe: false
      });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(...node.pos);
      
      // Wireframe Outer Shell
      const wireGeom = new THREE.IcosahedronGeometry(node.radius * 1.25, 1);
      const wireMat = new THREE.MeshBasicMaterial({
        color: node.color,
        wireframe: true,
        transparent: true,
        opacity: 0.4
      });
      const wireMesh = new THREE.Mesh(wireGeom, wireMat);
      mesh.add(wireMesh);

      clusterGroup.add(mesh);
      nodeMeshes.push({ mesh, wireMesh, data: node });
    });

    // Create Neural Connection Laser Beams between nodes
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.4
    });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const p1 = new THREE.Vector3(...nodes[i].pos);
        const p2 = new THREE.Vector3(...nodes[j].pos);
        const dist = p1.distanceTo(p2);
        if (dist < 2.8) {
          const lineGeom = new THREE.BufferGeometry().setFromPoints([p1, p2]);
          const line = new THREE.Line(lineGeom, lineMat);
          clusterGroup.add(line);
        }
      }
    }

    const light1 = new THREE.PointLight(0xffffff, 3.5, 12);
    light1.position.set(2, 3, 4);
    scene.add(light1);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      clusterGroup.rotation.y = elapsedTime * 0.25;
      clusterGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.1;

      nodeMeshes.forEach((n, idx) => {
        n.mesh.rotation.x = elapsedTime * 0.3;
        n.mesh.rotation.y = elapsedTime * 0.4;
        n.wireMesh.rotation.z = elapsedTime * -0.5;

        // Pulse scale
        const s = 1 + Math.sin(elapsedTime * 3 + idx) * 0.05;
        n.mesh.scale.setScalar(s);
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const filteredSkills = activeCategory === 'all'
    ? skillData
    : skillData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-tag">
            <Brain size={16} /> Technical Stack & Skills
          </div>
          <h2 className="section-title">
            Specialized in <span className="gradient-text">AI, RAG & Machine Learning</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            A comprehensive technical toolkit spanning AI models, Large Language Models, PyTorch, FAISS vector search, and full-stack web applications.
          </p>
        </div>

        {/* 3D Neural Skill Graph Visualizer & Category Navigation */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'center', marginBottom: '40px' }}>
          
          {/* Left Category Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="glass-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 24px',
                  cursor: 'pointer',
                  borderColor: activeCategory === cat.id ? 'var(--accent-primary)' : 'var(--border-glass)',
                  background: activeCategory === cat.id ? 'rgba(6,182,212,0.12)' : 'var(--bg-glass-card)',
                  color: activeCategory === cat.id ? 'var(--accent-primary)' : 'var(--text-main)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textAlign: 'left'
                }}
              >
                <span>{cat.label}</span>
                {activeCategory === cat.id && (
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-primary)', boxShadow: 'var(--shadow-glow)' }} />
                )}
              </button>
            ))}
          </div>

          {/* Right 3D Interactive Neural Skill Graph Box */}
          <div className="glass-panel" style={{ height: '280px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div ref={canvasRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} />
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {filteredSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div key={index} className="glass-card" style={{ padding: '24px', position: 'relative', overflow: 'hidden' }}>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(6, 182, 212, 0.1)',
                    border: '1px solid var(--accent-glow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)'
                  }}>
                    <IconComponent size={22} />
                  </div>
                  <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', padding: '4px 10px', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-full)' }}>
                    {skill.exp}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>{skill.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '20px' }}>
                  {skill.desc}
                </p>

                {/* Progress bar */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-dim)', marginBottom: '6px' }}>
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div
                      style={{
                        width: `${skill.level}%`,
                        height: '100%',
                        background: 'var(--accent-gradient)',
                        borderRadius: '3px',
                        transition: 'width 1s ease-out'
                      }}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
