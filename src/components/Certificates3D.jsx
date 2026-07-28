import React, { useState } from 'react';
import { Award, BookOpen, ExternalLink, Download, CheckCircle2, ShieldCheck, X, FileText, Eye } from 'lucide-react';

export default function Certificates3D() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 'salesforce-agentforce',
      title: 'Salesforce Certified Agentforce Specialist',
      issuer: 'Salesforce',
      issueDate: 'May 19, 2025',
      credentialId: '6190190',
      type: 'Professional Certification',
      icon: Award,
      badgeColor: '#00a1e0',
      imagePreview: '/certificates/salesforce-agentforce.png',
      pdfUrl: '/certificates/salesforce-agentforce.pdf',
      verifyUrl: 'https://sforce.co/verifycerts',
      description: 'Official Salesforce certification awarded to Challa Mani Kethan Reddy for successfully completing certification requirements in Agentforce AI tools, autonomous AI agent building, and multi-agent workflows.',
      skills: ['Autonomous AI Agents', 'Agentforce Platform', 'AI Workflow Automation', 'Prompt Engineering']
    },
    {
      id: 'ijert-research',
      title: 'IJERT Research Publication Certificate',
      issuer: 'International Journal of Engineering Research & Technology',
      issueDate: 'June 16, 2026',
      credentialId: 'IJERTV15IS060359',
      type: 'Peer-Reviewed Journal Publication',
      icon: BookOpen,
      badgeColor: '#10b981',
      imagePreview: '/certificates/ijert-research-paper.png',
      pdfUrl: '/certificates/ijert-research-paper.pdf',
      verifyUrl: 'https://www.ijert.org',
      description: 'Official publication certificate awarded to Ch. Mani Kethan Reddy for the peer-reviewed research paper titled "AI based Content Summarization using RAG" published in IJERT, Volume 15, Issue 06.',
      skills: ['RAG Architecture', 'FAISS Vector Indexing', 'Ollama LLMs', 'Semantic Document Summarization']
    }
  ];

  return (
    <section id="certificates" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-tag">
            <Award size={16} /> Certified Credentials
          </div>
          <h2 className="section-title">
            Verified <span className="gradient-text">Certificates & Research</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Official certificate documents, credential IDs, and peer-reviewed research publication certificates.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px', maxWidth: '980px', margin: '0 auto' }}>
          {certificates.map((cert) => {
            const IconComp = cert.icon;
            return (
              <div
                key={cert.id}
                className="glass-card"
                style={{
                  padding: '0',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedCert(cert)}
              >
                {/* Image Certificate Preview Banner */}
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden', borderBottom: '1px solid var(--border-glass)' }}>
                  <img
                    src={cert.imagePreview}
                    alt={cert.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
                    background: 'rgba(0,0,0,0.7)',
                    backdropFilter: 'blur(8px)',
                    color: cert.badgeColor,
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    border: `1px solid ${cert.badgeColor}50`
                  }}>
                    {cert.type}
                  </span>
                </div>

                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '6px' }}>{cert.title}</h3>
                  
                  <div style={{ fontSize: '0.88rem', color: cert.badgeColor, fontWeight: 600, marginBottom: '12px' }}>
                    Issued by {cert.issuer} • {cert.issueDate}
                  </div>

                  <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '16px' }}>
                    ID: <span style={{ color: 'var(--text-main)' }}>{cert.credentialId}</span>
                  </div>

                  {/* Skills tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                    {cert.skills.slice(0, 3).map((sk, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '4px 10px',
                          borderRadius: 'var(--radius-sm)',
                          background: 'rgba(255,255,255,0.05)',
                          color: 'var(--text-muted)'
                        }}
                      >
                        {sk}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCert(cert);
                      }}
                      className="btn-primary"
                      style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                    >
                      <Eye size={16} /> View Certificate
                    </button>
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary"
                      style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FileText size={16} /> PDF
                    </a>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Certificate High-Res Modal Overlay */}
      {selectedCert && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
            background: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="glass-panel"
            style={{
              maxWidth: '820px',
              width: '100%',
              maxHeight: '92vh',
              overflowY: 'auto',
              padding: '32px',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>

            {/* Certificate High-Res Image Banner */}
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '24px', border: '1px solid var(--border-glass)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              <img
                src={selectedCert.imagePreview}
                alt={selectedCert.title}
                style={{ width: '100%', height: 'auto', maxHeight: '420px', objectFit: 'contain', background: '#000' }}
              />
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '16px' }}>
              <div>
                <span className="section-tag" style={{ fontSize: '0.75rem', marginBottom: '4px' }}>
                  Official Verified Credential
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{selectedCert.title}</h3>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <a
                  href={selectedCert.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                >
                  <Download size={16} /> Download Official PDF
                </a>
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                >
                  <ExternalLink size={16} /> Online Verification
                </a>
              </div>
            </div>

            <div style={{ fontSize: '0.95rem', color: selectedCert.badgeColor, fontWeight: 600, marginBottom: '8px' }}>
              Issued by {selectedCert.issuer} — {selectedCert.issueDate}
            </div>

            <div style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '16px' }}>
              Credential ID: <span style={{ color: 'var(--text-main)' }}>{selectedCert.credentialId}</span>
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
              {selectedCert.description}
            </p>

            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
                Validated Competencies:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                {selectedCert.skills.map((sk, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    <CheckCircle2 size={16} color="var(--accent-primary)" /> {sk}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
