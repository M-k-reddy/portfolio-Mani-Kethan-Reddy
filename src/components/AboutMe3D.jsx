import React from 'react';
import { User, Brain, Award, Sparkles, Code, MapPin, Mail, BookOpen } from 'lucide-react';
import profileImg from '../../public/profile.jpg';

export default function AboutMe3D() {
  return (
    <section id="about" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
          
          {/* Left Column: Large Prominent 3D Glassmorphic Photo Portrait Frame */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="glass-panel"
              style={{
                position: 'relative',
                maxWidth: '380px',
                width: '100%',
                padding: '16px',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(20px)'
              }}
            >
              {/* Photo Container */}
              <div style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '2px solid var(--accent-primary)',
                boxShadow: '0 0 35px var(--accent-glow)'
              }}>
                <img
                  src={profileImg}
                  alt="Mani Kethan Reddy Challa"
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                
                {/* Gradient Overlay & Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '24px 20px 20px',
                  background: 'linear-gradient(to top, rgba(10, 15, 26, 0.95) 0%, transparent 100%)'
                }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                    Mani Kethan Reddy
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--accent-primary)', fontWeight: 600, marginTop: '4px' }}>
                    AI & Machine Learning Engineer
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div
                className="glass-card animate-float"
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  padding: '10px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#10b981',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.6)'
                }}
              >
                <Sparkles size={16} /> Open for AI/ML Roles
              </div>

              {/* Floating Badge 2 */}
              <div
                className="glass-card"
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  left: '-15px',
                  padding: '10px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#c084fc',
                  border: '1px solid rgba(192, 132, 252, 0.4)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.6)'
                }}
              >
                <Award size={16} /> Salesforce Certified
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Technical Summary */}
          <div>
            <div className="section-tag">
              <User size={16} /> About Me
            </div>

            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Passionate About <span className="gradient-text">AI Innovation & LLM Systems</span>
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '24px' }}>
              I am a Computer Science (AI & ML) graduate from CMR Technical Campus with hands-on research and industry experience. My work spans building Retrieval-Augmented Generation (RAG) pipelines, deep learning computer vision classifiers, and LLM-assisted applications.
            </p>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '32px' }}>
              During my internship at **DRDO (Research Centre Imarat)**, I gained disciplined engineering experience in defense testing systems. I am also an **IJERT published research author** and **Salesforce Certified Agentforce Specialist**.
            </p>

            {/* Quick Highlights Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '36px' }}>
              <div className="glass-card" style={{ padding: '18px' }}>
                <div style={{ color: 'var(--accent-primary)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '4px' }}>
                  Degree
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-main)' }}>
                  B.Tech in CS (AI & ML)
                </div>
              </div>

              <div className="glass-card" style={{ padding: '18px' }}>
                <div style={{ color: 'var(--accent-primary)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '4px' }}>
                  Experience
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-main)' }}>
                  DRDO (RCI) Research Intern
                </div>
              </div>

              <div className="glass-card" style={{ padding: '18px' }}>
                <div style={{ color: 'var(--accent-primary)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '4px' }}>
                  Research
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-main)' }}>
                  IJERT Published Author
                </div>
              </div>

              <div className="glass-card" style={{ padding: '18px' }}>
                <div style={{ color: 'var(--accent-primary)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '4px' }}>
                  Certification
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-main)' }}>
                  Salesforce Agentforce
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#contact" className="btn-primary">
                Contact Me <Mail size={16} />
              </a>
              <a href="#certificates" className="btn-secondary">
                View Credentials <BookOpen size={16} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
