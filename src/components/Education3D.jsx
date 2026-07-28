import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

export default function Education3D() {
  const educationList = [
    {
      degree: 'B.Tech — Computer Science and Machine Learning',
      institution: 'CMR Technical Campus',
      period: '08/2023 – 04/2026',
      desc: 'Specialized coursework in Artificial Intelligence, Machine Learning, Deep Learning, Python, Java, Data Structures, and RAG architectures.'
    },
    {
      degree: 'Diploma — Electronics and Communication Engineering',
      institution: 'TKR College Of Engineering and Technology',
      period: '09/2020 – 06/2023',
      desc: 'Core foundation in electronics, circuit analysis, microcontrollers, embedded systems, and communication engineering.'
    },
    {
      degree: 'SSC (Secondary School Certificate)',
      institution: 'Narayana High School',
      period: '06/2019 – 06/2020',
      desc: 'Secondary education with high distinction in mathematics and physical sciences.'
    }
  ];

  return (
    <section id="education" style={{ padding: '100px 0', background: 'rgba(0, 0, 0, 0.25)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-tag">
            <GraduationCap size={16} /> Academic Background
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Academic Qualifications</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Academic qualifications in Computer Science, AI/ML, and Electronics Engineering.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
          {educationList.map((edu, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '28px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(6, 182, 212, 0.1)',
                border: '1px solid var(--accent-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)',
                marginBottom: '16px'
              }}>
                <GraduationCap size={22} />
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '6px' }}>{edu.degree}</h3>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: '8px' }}>
                {edu.institution}
              </div>
              
              <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
                <Calendar size={14} /> {edu.period}
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                {edu.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
