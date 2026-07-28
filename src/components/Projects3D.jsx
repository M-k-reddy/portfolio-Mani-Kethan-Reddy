import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Box, ArrowUpRight, BookOpen } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects3D() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [tiltStyle, setTiltStyle] = useState({});

  const projects = [
    {
      id: 'algosolveo',
      title: 'AlgoSolveo - LeetCode Tutor Chrome Extension',
      category: 'tools',
      categoryLabel: 'Browser Extension & AI',
      image: '/assets/algosolveo.png',
      description: 'AI-powered Chrome side panel extension providing interactive, guided tutoring for LeetCode & DSA problems across 315 problems and 49 patterns.',
      fullDescription: 'AlgoSolveo is a sophisticated Chrome side panel extension built to accelerate Data Structures & Algorithms learning. It structures 315 LeetCode problems across 49 patterns, offering 3 interactive tutoring styles that guide students step-by-step from brute-force thoughts to optimal space/time solutions.',
      features: [
        'Built with JavaScript and Chrome Extension APIs for seamless side panel integration',
        'Structured learning roadmap covering 315 DSA problems across 49 patterns',
        'Three tutoring styles providing step-by-step guidance from brute-force to optimized solutions',
        'Interactive AI problem hints without spoiling complete code solutions'
      ],
      tags: ['JavaScript', 'Chrome Extension APIs', 'AI Tutoring', 'DSA Roadmap', 'HTML/CSS'],
      github: 'https://github.com/M-k-reddy'
    },
    {
      id: 'birds-ai',
      title: 'Birds Species Detection',
      category: 'ai',
      categoryLabel: 'AI & Computer Vision',
      image: '/assets/birds-ai.png',
      description: 'AI-powered bird species classification web app featuring a two-stage classification pipeline across 525 classes with real-time Wikipedia API info lookup.',
      fullDescription: 'Built using Python, Flask, React.js, PyTorch, ONNX Runtime, and Hugging Face Transformers. The application employs a two-stage computer vision classification pipeline: Stage 1 rejects non-bird images, while Stage 2 classifies bird species across 525 distinct classes with live Wikipedia metadata fetching.',
      features: [
        'Two-stage classification pipeline to filter out non-bird image uploads',
        'High-accuracy classification across 525 bird species classes',
        'PyTorch model optimization using ONNX Runtime for fast inference',
        'Real-time automated species information retrieval through Wikipedia APIs'
      ],
      tags: ['Python', 'PyTorch', 'React.js', 'Flask', 'ONNX Runtime', 'Hugging Face'],
      github: 'https://github.com/M-k-reddy'
    },
    {
      id: 'rag-summarizer',
      title: 'AI-Based Content Summarization using RAG',
      category: 'rag',
      categoryLabel: 'RAG & Published Research',
      image: '/assets/rag-summarizer.png',
      description: 'Published in IJERT Journal. AI document summarization system using Retrieval-Augmented Generation, Ollama LLM, and FAISS vector retrieval.',
      fullDescription: 'Published research project in the International Journal of Engineering Research & Technology (IJERT, Vol 15, Issue 06, June 2026). Combines vector-based semantic retrieval via FAISS with local Ollama LLMs to summarize long documents efficiently with high contextual accuracy.',
      features: [
        'Published in IJERT Journal (Volume 15, Issue 06, June 2026)',
        'Integrated FAISS vector database and Large Language Models (LLMs)',
        'Efficient semantic document retrieval for long-form context analysis',
        'Generates accurate, concise summaries in real-time without hallucination'
      ],
      tags: ['Python', 'RAG', 'Ollama LLM', 'FAISS', 'Vector Search', 'IJERT Published'],
      github: 'https://github.com/M-k-reddy'
    },
    {
      id: 'college-chatbot',
      title: 'College ChatBot',
      category: 'ai',
      categoryLabel: 'Hackathon Project',
      image: '/assets/college-chatbot.png',
      description: 'AI college assistant bot developed at MLRIT Hackathon using Flask, Google API, custom dataset, and prompt engineering.',
      fullDescription: 'Developed during the MLRIT Hackathon. The College ChatBot assists students with queries regarding courses, campus events, and academic schedules by leveraging a custom dataset, Flask backend, Google API integrations, and prompt engineering.',
      features: [
        'Built at MLRIT Hackathon using Python, HTML, CSS, Flask, and Google API',
        'Assists students with dynamic college queries using custom dataset integration',
        'Utilized prompt engineering techniques for context-aware responses'
      ],
      tags: ['Python', 'Flask', 'Google API', 'Prompt Engineering', 'HTML/CSS'],
      github: 'https://github.com/M-k-reddy'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'rag', label: 'RAG & Research' },
    { id: 'ai', label: 'AI & Vision' },
    { id: 'tools', label: 'Extensions & Tools' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  // 3D Card Hover Tilt Calculation
  const handleMouseMoveCard = (e, id) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTiltStyle(prev => ({
      ...prev,
      [id]: {
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
        transition: 'transform 0.1s ease'
      }
    }));
  };

  const handleMouseLeaveCard = (id) => {
    setTiltStyle(prev => ({
      ...prev,
      [id]: {
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: 'transform 0.5s ease'
      }
    }));
  };

  return (
    <section id="projects" style={{ padding: '100px 0', background: 'rgba(0, 0, 0, 0.2)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-tag">
            <Box size={16} /> Featured AI & Software Projects
          </div>
          <h2 className="section-title">
            Engineered AI Solutions & <span className="gradient-text">Published Research</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Explore my portfolio of AI-powered web apps, RAG vector retrieval engines, Chrome tools, and published research projects.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '50px' }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '10px 24px',
                borderRadius: 'var(--radius-full)',
                background: activeCategory === cat.id ? 'var(--accent-gradient)' : 'var(--bg-glass-card)',
                color: activeCategory === cat.id ? '#ffffff' : 'var(--text-muted)',
                border: '1px solid',
                borderColor: activeCategory === cat.id ? 'transparent' : 'var(--border-glass)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeCategory === cat.id ? 'var(--shadow-glow)' : 'none'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects 3D Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {filteredProjects.map(proj => (
            <div
              key={proj.id}
              className="glass-card"
              style={{
                padding: '0',
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                transformStyle: 'preserve-3d',
                ...tiltStyle[proj.id]
              }}
              onMouseMove={(e) => handleMouseMoveCard(e, proj.id)}
              onMouseLeave={() => handleMouseLeaveCard(proj.id)}
              onClick={() => setSelectedProject(proj)}
            >
              {/* Image Preview Container */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img
                  src={proj.image}
                  alt={proj.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to top, rgba(17, 24, 39, 0.95) 0%, transparent 60%)'
                }} />

                <span style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(8px)',
                  color: 'var(--accent-primary)',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  border: '1px solid var(--accent-glow)'
                }}>
                  {proj.categoryLabel}
                </span>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    {proj.title}
                  </h3>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)',
                    flexShrink: 0
                  }}>
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '20px' }}>
                  {proj.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {proj.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '4px 10px',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-muted)',
                        border: '1px solid rgba(255,255,255,0.05)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
