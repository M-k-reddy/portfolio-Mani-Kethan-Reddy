import React from 'react';
import { Award, ExternalLink, FileText, CheckCircle, Sparkles } from 'lucide-react';

export default function Certificates3D() {
  const getAssetPath = (filename) => {
    return import.meta.env.BASE_URL + filename;
  };

  const items = [
    {
      id: 'ijert-paper',
      title: 'AI-Based Content Summarization using RAG',
      issuer: 'IJERT Journal (International Journal of Engineering Research & Technology)',
      type: 'Published Journal Paper',
      volume: 'Volume 15, Issue 06, June 2026',
      desc: 'Official research paper publication detailing an AI document summarization system integrating Retrieval-Augmented Generation (RAG), FAISS vector embeddings, and local Ollama LLMs.',
      image: getAssetPath('certificates/ijert-research-paper.png'),
      pdfUrl: getAssetPath('certificates/ijert-research-paper.pdf'),
      badge: 'IJERT International Journal',
      highlights: [
        'Retrieval-Augmented Generation (RAG) Architecture',
        'FAISS Vector Embedding Retrieval Pipeline',
        'Ollama Local LLM Document Summarization'
      ]
    },
    {
      id: 'salesforce-agentforce',
      title: 'Salesforce Certified Agentforce Specialist',
      issuer: 'Salesforce Certification',
      type: 'Official Certification',
      volume: 'Credential ID: SF-AGENTFORCE-2026',
      desc: 'Professional certification validating expertise in building autonomous AI agents, prompt engineering, CRM integrations, and Salesforce Agentforce AI workflows.',
      image: getAssetPath('certificates/salesforce-agentforce.png'),
      pdfUrl: getAssetPath('certificates/salesforce-agentforce.pdf'),
      badge: 'Salesforce Certified',
      highlights: [
        'Autonomous AI Agent Architecture & Workflows',
        'Prompt Engineering & Agentforce Reasoning Engine',
        'CRM Data Integration & Trust Layer Safety'
      ]
    }
  ];

  return (
    <section id="certificates" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-tag">
            <Award size={16} /> Research & Certifications
          </div>
          <h2 className="section-title">
            Published <span className="gradient-text">Journal & Official Credentials</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Verified research paper publication in IJERT and professional AI specialist certification.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {items.map((item) => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Image / Certificate Banner Container */}
              <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden', background: '#000' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />

                {/* Badge Overlay */}
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
                  {item.badge}
                </div>
              </div>

              {/* Details */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                
                <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '6px' }}>
                  {item.type} • {item.volume}
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '10px' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                  {item.desc}
                </p>

                {/* Highlights List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  {item.highlights.map((point, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-main)' }}>
                      <CheckCircle size={14} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Action Link */}
                <a
                  href={item.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '10px 16px', fontSize: '0.88rem' }}
                >
                  View Official Document <FileText size={16} />
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
