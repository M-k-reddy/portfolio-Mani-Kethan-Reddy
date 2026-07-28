import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, BookOpen, Trophy } from 'lucide-react';

export default function Experience3D() {
  const experiences = [
    {
      role: 'Intern — DRDO (RCI)',
      company: 'Research Centre Imarat (Government / PSU / Defence)',
      period: '12/2022 – 05/2023',
      location: 'Hyderabad, Telangana, India',
      description: 'Gained hands-on experience in specialized hardware-software validation and quality checks within a real-time defense engineering environment.',
      achievements: [
        'Involved in fabrication and assembly of specialized cable assemblies for defense systems',
        'Participated in rigorous testing procedures, quality control checks, electrical testing, and validation processes',
        'Exposure to high-reliability engineering protocols in real-time defense environments'
      ],
      tags: ['Defense Systems', 'Electrical Testing', 'Quality Assurance', 'Systems Assembly', 'DRDO RCI']
    }
  ];

  const publications = [
    {
      title: 'AI-Based Content Summarization using RAG',
      journal: 'IJERT (International Journal of Engineering Research & Technology)',
      volume: 'Volume 15, Issue 06, June 2026',
      date: '16/06/2026',
      highlights: [
        'Developed an AI-powered content summarization system using Retrieval-Augmented Generation (RAG)',
        'Integrated FAISS vector index and Large Language Models (LLMs) for efficient semantic document retrieval',
        'Built the solution using Python to generate accurate, context-aware summaries'
      ]
    }
  ];

  const achievements = [
    {
      title: 'First Runner-Up — Zeneith-Data Voyage',
      org: 'Scope Club at MLRIT',
      detail: '72-hour National Level Hackathon'
    },
    {
      title: 'First Runner-Up — AI FUSION FEST',
      org: 'AI and Intel Club at CMRTC',
      detail: 'National level 24-hour Virtual Hackathon'
    }
  ];

  return (
    <section id="experience" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Experience Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-tag">
            <Briefcase size={16} /> Industry Experience & Research
          </div>
          <h2 className="section-title">
            Hands-on Defense Internship & <span className="gradient-text">Published Research</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Real-world exposure at DRDO (RCI) and peer-reviewed AI publication in IJERT Journal.
          </p>
        </div>

        {/* DRDO Experience Timeline */}
        <div style={{ maxWidth: '850px', margin: '0 auto 80px', position: 'relative' }}>
          
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '20px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary), transparent)',
              boxShadow: '0 0 12px var(--accent-glow)'
            }}
          />

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                paddingLeft: '60px',
                marginBottom: '48px'
              }}
            >
              {/* Glowing Marker */}
              <div
                style={{
                  position: 'absolute',
                  left: '11px',
                  top: '0',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'var(--accent-gradient)',
                  boxShadow: '0 0 16px var(--accent-glow)',
                  border: '3px solid var(--bg-primary)'
                }}
              />

              {/* Card Content */}
              <div className="glass-card" style={{ padding: '30px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '12px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800 }}>{exp.role}</h3>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent-primary)', marginTop: '2px' }}>
                      {exp.company}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', fontSize: '0.85rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={14} /> {exp.period}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={14} /> {exp.location}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {exp.description}
                </p>

                <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                      <CheckCircle size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(6,182,212,0.1)',
                        color: 'var(--accent-primary)',
                        border: '1px solid var(--accent-glow)'
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

        {/* Publications & Key Achievements Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Publication Card */}
          <div className="glass-panel" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-primary)', marginBottom: '16px' }}>
              <BookOpen size={24} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)' }}>Research Publication</h3>
            </div>

            {publications.map((pub, pIdx) => (
              <div key={pIdx}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>{pub.title}</h4>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', marginBottom: '16px' }}>
                  {pub.journal} • {pub.volume}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                  {pub.highlights.map((h, hIdx) => (
                    <div key={hIdx} style={{ fontSize: '0.88rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <span style={{ color: 'var(--accent-primary)' }}>•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Hackathon Achievements Card */}
          <div className="glass-panel" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-primary)', marginBottom: '16px' }}>
              <Trophy size={24} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)' }}>Hackathons & Awards</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {achievements.map((ach, aIdx) => (
                <div key={aIdx} style={{ padding: '14px 18px', background: 'rgba(0,0,0,0.25)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)' }}>
                  <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-main)' }}>{ach.title}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', marginTop: '2px' }}>{ach.org}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '2px' }}>{ach.detail}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
