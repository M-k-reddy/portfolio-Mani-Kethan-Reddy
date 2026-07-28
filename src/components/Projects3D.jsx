import React, { useState } from 'react';
import { ExternalLink, Github, Code, Sparkles, Layers, Terminal } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects3D() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'algosolveo',
      title: 'AlgoSolveo - LeetCode Tutor Chrome Extension',
      category: 'Browser Extension & AI',
      categoryTag: 'Chrome Extension & AI',
      desc: 'AI-powered Chrome side panel extension providing interactive, guided tutoring for LeetCode & DSA problems across 315 problems and 49 patterns.',
      fullDesc: 'AlgoSolveo is a sophisticated Chrome side panel extension built to provide real-time, step-by-step DSA guidance. It features 3 tutoring modes (Socratic Hinting, Code Debugger, Optimal Solution), 315 curated problems across 49 patterns, and intelligent progress tracking.',
      image: './assets/algosolveo.png',
      tags: ['JavaScript', 'Chrome Extension APIs', 'AI Tutoring', 'DSA Roadmap'],
      highlights: [
        '315 Curated DSA Problems across 49 Core Patterns',
        '3 Tutoring Styles: Socratic Hints, Debugging, Optimal Code',
        'Chrome Side Panel API & Contextual DOM Parsing'
      ],
      githubUrl: 'https://github.com/M-k-reddy/AlgoSolveo',
      liveUrl: 'https://github.com/M-k-reddy/AlgoSolveo'
    },
    {
      id: 'birds-ai',
      title: 'Birds Species Detection',
      category: 'AI & Computer Vision',
      categoryTag: 'AI & Computer Vision',
      desc: 'AI-powered bird species classification web app featuring a two-stage classification pipeline across 525 classes with real-time Wikipedia API info lookup.',
      fullDesc: 'High-accuracy computer vision system that classifies bird species across 525 distinct classes using PyTorch and ONNX Runtime inference. Features a non-bird filter stage and Wikipedia REST API integration for live taxonomy & habitat information.',
      image: './assets/birds-ai.png',
      tags: ['Python', 'PyTorch', 'React.js', 'Flask', 'ONNX Runtime'],
      highlights: [
        '525 Bird Classes + Non-Bird Filtering Stage',
        'ONNX Runtime Inference for High FPS Response',
        'Wikipedia API Integration for Taxonomy & Info'
      ],
      githubUrl: 'https://github.com/M-k-reddy/Birds-Species-Detection',
      liveUrl: 'https://github.com/M-k-reddy/Birds-Species-Detection'
    },
    {
      id: 'rag-summarizer',
      title: 'AI-Based Content Summarization using RAG',
      category: 'RAG & Published Research',
      categoryTag: 'RAG & Published Research',
      desc: 'Published in IJERT Journal. AI document summarization system using Retrieval-Augmented Generation, Ollama LLM, and FAISS vector retrieval.',
      fullDesc: 'Official published research project (IJERT Vol 15, Issue 06). Combines vector embeddings with FAISS vector database and local Ollama LLMs to analyze long-form documents and generate accurate semantic summaries without hallucination.',
      image: './assets/rag-summarizer.png',
      tags: ['Python', 'RAG', 'Ollama LLM', 'FAISS', 'Flask'],
      highlights: [
        'Published in IJERT International Research Journal',
        'FAISS Vector Embedding Database for Semantic Context',
        'Local Ollama LLM Integration for Zero Data Privacy Leakage'
      ],
      githubUrl: 'https://github.com/M-k-reddy/RAG-Summarization',
      liveUrl: 'https://github.com/M-k-reddy/RAG-Summarization'
    },
    {
      id: 'college-chatbot',
      title: 'College ChatBot',
      category: 'NLP & Google API',
      categoryTag: 'NLP & Google API',
      desc: 'Developed at MLRIT Hackathon using Flask, Google API, and prompt engineering to assist students with dynamic college query resolution.',
      fullDesc: 'Interactive query resolution bot built during the MLRIT Hackathon using Flask and Google API. Handles student queries regarding college schedules, syllabus, campus notices, and academic info.',
      image: './assets/college-chatbot.png',
      tags: ['Python', 'Flask', 'Google API', 'HTML/CSS', 'Prompt Engineering'],
      highlights: [
        'MLRIT Hackathon Award-Winning Prototype',
        'Dynamic College Query Dataset & Fast Inference',
        'Google API & Prompt Engineering Strategy'
      ],
      githubUrl: 'https://github.com/M-k-reddy/College-ChatBot',
      liveUrl: 'https://github.com/M-k-reddy/College-ChatBot'
    }
  ];

  return (
    <section id="projects" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-tag">
            <Sparkles size={16} /> Featured Work
          </div>
          <h2 className="section-title">
            Engineered <span className="gradient-text">AI & Full-Stack Projects</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Explore my latest production-ready machine learning systems, browser extensions, and published research.
          </p>
        </div>

        {/* Project Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Card Image Container */}
              <div style={{ position: 'relative', width: '100%', height: '210px', overflow: 'hidden', background: '#000' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                
                {/* Category Tag Overlay */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(9, 13, 22, 0.85)',
                  border: '1px solid var(--accent-glow)',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-primary)',
                  backdropFilter: 'blur(8px)'
                }}>
                  {project.categoryTag}
                </div>
              </div>

              {/* Project Details */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, lineHeight: 1.3 }}>{project.title}</h3>
                  <div style={{ color: 'var(--accent-primary)', opacity: 0.8 }}>
                    <ExternalLink size={18} />
                  </div>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                  {project.desc}
                </p>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--border-glass)',
                        color: 'var(--text-dim)'
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
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
