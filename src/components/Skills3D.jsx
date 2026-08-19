import React, { useState } from 'react';
import { 
  Brain, Terminal, Code, Layers, Box, Cpu, Database, Server, 
  Sparkles, CheckCircle2, ArrowUpRight, ShieldCheck
} from 'lucide-react';

export default function Skills3D() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeModalSkill, setActiveModalSkill] = useState(null);

  const categories = [
    { id: 'all', label: 'All Skills', icon: Sparkles, count: 10 },
    { id: 'aiml', label: 'AI & Machine Learning', icon: Brain, count: 4 },
    { id: 'languages', label: 'Programming Languages', icon: Terminal, count: 3 },
    { id: 'web', label: 'Web & Frameworks', icon: Layers, count: 2 },
    { id: 'tools', label: 'Tools & APIs', icon: Box, count: 2 }
  ];

  const skillData = [
    { 
      id: 'python',
      name: 'Python & Data Science', 
      category: 'languages', 
      level: 95, 
      icon: Terminal, 
      color: '#06b6d4',
      desc: 'Primary language for ML modeling, data structures, Flask backends, NumPy/Pandas pipelines, and prompt engineering.',
      highlights: ['Pandas & NumPy', 'Async Asyncio', 'Data Pipelines', 'Algorithms']
    },
    { 
      id: 'rag',
      name: 'RAG & Vector Search (FAISS)', 
      category: 'aiml', 
      level: 92, 
      icon: Brain, 
      color: '#10b981',
      desc: 'Retrieval-Augmented Generation, vector embeddings, FAISS indexing, and semantic context retrieval pipelines.',
      highlights: ['FAISS Indexing', 'Embedding Models', 'Semantic Search', 'LangChain']
    },
    { 
      id: 'llms',
      name: 'Large Language Models (LLMs)', 
      category: 'aiml', 
      level: 90, 
      icon: Brain, 
      color: '#3b82f6',
      desc: 'Integration with Ollama local LLMs, structured prompt design, document summarization engines, and AI workflow automation.',
      highlights: ['Ollama LLMs', 'Prompt Engineering', 'AI Agents', 'Context Windows']
    },
    { 
      id: 'pytorch',
      name: 'PyTorch & Transformers', 
      category: 'aiml', 
      level: 88, 
      icon: Cpu, 
      color: '#a855f7',
      desc: 'Deep learning model fine-tuning, Hugging Face Transformers, ONNX Runtime optimization, and vision classification pipelines.',
      highlights: ['PyTorch', 'HuggingFace', 'ONNX Runtime', 'Vision Models']
    },
    { 
      id: 'java',
      name: 'Java & Data Structures', 
      category: 'languages', 
      level: 88, 
      icon: Code, 
      color: '#ec4899',
      desc: 'Solid foundation in Java programming, object-oriented design, algorithms, graph/tree structures, and DSA problem solving.',
      highlights: ['OOP Design', 'Trees & Graphs', 'System Design', 'Algorithms']
    },
    { 
      id: 'flask',
      name: 'Flask & REST APIs', 
      category: 'web', 
      level: 90, 
      icon: Server, 
      color: '#8b5cf6',
      desc: 'Lightweight Python web microservices, JWT authentication, Google API integration, CORS middleware, and JSON endpoints.',
      highlights: ['REST APIs', 'JWT Auth', 'CORS Middleware', 'Microservices']
    },
    { 
      id: 'chrome',
      name: 'Chrome Extension APIs', 
      category: 'tools', 
      level: 88, 
      icon: Box, 
      color: '#6366f1',
      desc: 'Browser side panel UI development, service workers, DOM manipulation, and background script state syncing for AlgoSolveo.',
      highlights: ['Manifest v3', 'Side Panel API', 'DOM Injection', 'Background Script']
    },
    { 
      id: 'react',
      name: 'React.js & Web Tech', 
      category: 'web', 
      level: 86, 
      icon: Layers, 
      color: '#38bdf8',
      desc: 'Modern interactive frontend UIs, HTML5, CSS3, JavaScript component architecture, and responsive glassmorphic styling.',
      highlights: ['React 18', 'HTML5 & CSS3', 'JavaScript ES6+', 'State Hooks']
    },
    { 
      id: 'sql',
      name: 'SQL & Database Design', 
      category: 'languages', 
      level: 85, 
      icon: Database, 
      color: '#f59e0b',
      desc: 'Relational database schema modeling, query optimization, indexing strategies, and structured data storage.',
      highlights: ['Schema Design', 'PostgreSQL/MySQL', 'Query Optimization', 'Index Tuning']
    },
    { 
      id: 'git',
      name: 'Git & GitHub', 
      category: 'tools', 
      level: 92, 
      icon: Terminal, 
      color: '#10b981',
      desc: 'Version control, open-source collaboration, feature branching, code reviews, and automated deployment pipelines.',
      highlights: ['Git Flow', 'GitHub Actions', 'Vite & NPM', 'GH-Pages Deploy']
    }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillData
    : skillData.filter(s => s.category === activeCategory);

  // Smooth 3D tilt perspective interaction on card hover
  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = (y - centerY) / 14;
    const tiltY = (centerX - x) / 14;

    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
  };

  return (
    <section id="skills" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        
        {/* SECTION HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <div className="section-tag">
            <ShieldCheck size={15} /> Technical Stack & Expertise
          </div>
          <h2 className="section-title">
            Specialized in <span className="gradient-text">AI, RAG & Machine Learning</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            A comprehensive technical toolkit spanning AI models, Large Language Models, PyTorch, FAISS vector search, and full-stack web applications.
          </p>
        </div>

        {/* CLEAN CATEGORY FILTER PILLS */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`skill-pill ${isActive ? 'active' : ''}`}
                style={{ padding: '10px 22px' }}
              >
                <IconComp size={16} />
                <span>{cat.label}</span>
                <span className="badge">{cat.count}</span>
              </button>
            );
          })}
        </div>

        {/* CLEAN 3D GLASS SKILL CARDS GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: '22px' }}>
          {filteredSkills.map((skill) => {
            const IconComponent = skill.icon;

            return (
              <div key={skill.id} className="skill-card-3d-wrapper">
                <div
                  className="skill-card-3d"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                  onClick={() => setActiveModalSkill(skill)}
                  style={{ 
                    cursor: 'pointer',
                    padding: '24px',
                    borderRadius: '16px',
                    background: 'var(--bg-glass-card)',
                    border: '1px solid var(--border-glass)',
                    transition: 'all 0.25s ease-out'
                  }}
                >
                  
                  {/* Card Header with Icon Box & Skill Name */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: `${skill.color}15`,
                        border: `1px solid ${skill.color}40`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: skill.color,
                        boxShadow: `0 0 16px ${skill.color}20`
                      }}>
                        <IconComponent size={22} />
                      </div>

                      <h3 style={{ fontSize: '1.12rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                        {skill.name}
                      </h3>
                    </div>

                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-dim)'
                    }}>
                      <ArrowUpRight size={14} />
                    </div>
                  </div>

                  {/* Skill Description */}
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '18px', minHeight: '52px' }}>
                    {skill.desc}
                  </p>

                  {/* Key Highlight Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {skill.highlights.map((tag, i) => (
                      <span key={i} className="skill-tag">
                        <CheckCircle2 size={10} /> {tag}
                      </span>
                    ))}
                  </div>

                  {/* Clean Proficiency Bar */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-dim)', marginBottom: '8px' }}>
                      <span>Proficiency</span>
                      <span style={{ color: skill.color, fontFamily: 'var(--font-mono)' }}>{skill.level}%</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div
                        style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          background: `linear-gradient(90deg, ${skill.color} 0%, #38bdf8 100%)`,
                          borderRadius: '3px',
                          boxShadow: `0 0 10px ${skill.color}80`
                        }}
                      />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* QUICK DETAIL MODAL */}
      {activeModalSkill && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(9, 13, 22, 0.85)',
          backdropFilter: 'blur(16px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}
        onClick={() => setActiveModalSkill(null)}
        >
          <div 
            className="glass-panel"
            style={{
              maxWidth: '500px',
              width: '100%',
              padding: '30px',
              borderRadius: '20px',
              border: `1px solid ${activeModalSkill.color}60`,
              boxShadow: `0 0 30px ${activeModalSkill.color}30`,
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: `${activeModalSkill.color}20`,
                border: `1px solid ${activeModalSkill.color}50`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: activeModalSkill.color
              }}>
                {React.createElement(activeModalSkill.icon, { size: 24 })}
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>{activeModalSkill.name}</h3>
                <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: activeModalSkill.color, fontWeight: 600 }}>
                  Proficiency: {activeModalSkill.level}%
                </span>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '22px', fontSize: '0.92rem' }}>
              {activeModalSkill.desc}
            </p>

            <h4 style={{ fontSize: '0.88rem', color: 'var(--text-main)', marginBottom: '10px', fontWeight: 700 }}>
              Key Technical Concepts & Tools:
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '26px' }}>
              {activeModalSkill.highlights.map((h, idx) => (
                <span key={idx} style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: `1px solid ${activeModalSkill.color}40`,
                  color: 'var(--text-main)',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)'
                }}>
                  #{h}
                </span>
              ))}
            </div>

            <button
              onClick={() => setActiveModalSkill(null)}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
