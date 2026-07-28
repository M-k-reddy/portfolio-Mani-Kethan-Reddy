import React from 'react';
import { X, Github, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          maxWidth: '850px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '36px',
          position: 'relative',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
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
          <X size={20} />
        </button>

        {/* Modal Image Header */}
        <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '28px', border: '1px solid var(--border-glass)' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '340px', objectFit: 'cover' }}
          />
        </div>

        {/* Title & Category */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '16px' }}>
          <div>
            <span className="section-tag" style={{ marginBottom: '8px' }}>
              {project.categoryLabel}
            </span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>{project.title}</h2>
          </div>

          <div>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ padding: '10px 22px', fontSize: '0.9rem' }}
            >
              <Github size={18} /> View GitHub Repository
            </a>
          </div>
        </div>

        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '28px' }}>
          {project.fullDescription}
        </p>

        {/* Key Features */}
        <div style={{ marginBottom: '28px' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={18} color="var(--accent-primary)" /> Technical Architecture & Innovations
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                style={{
                  padding: '14px',
                  background: 'rgba(0, 0, 0, 0.25)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-glass)',
                  fontSize: '0.88rem',
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px'
                }}
              >
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-primary)', marginTop: '6px', flexShrink: 0 }} />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px' }}>Technologies Used</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(6, 182, 212, 0.1)',
                  border: '1px solid var(--accent-glow)',
                  color: 'var(--accent-primary)',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
