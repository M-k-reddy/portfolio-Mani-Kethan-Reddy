import React, { useState } from 'react';
import { Mail, Send, Copy, Check, Github, Linkedin, MapPin } from 'lucide-react';

export default function Contact3D() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailAddress = 'challamanikethanreddy@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setToastMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setToastMessage('🎉 Thank you! Your message has been sent to Mani Kethan.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setToastMessage(''), 5000);
    }, 1000);
  };

  return (
    <section id="contact" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-tag">
            <Mail size={16} /> Get In Touch
          </div>
          <h2 className="section-title">
            Let's Collaborate on <span className="gradient-text">AI Innovation</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Open to AI/ML engineering roles, research collaborations, hackathons, and software engineering opportunities.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          
          {/* Left Info Column */}
          <div>
            <div className="glass-panel" style={{ padding: '32px', marginBottom: '24px' }}>
              
              {/* Profile Photo Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <img
                  src="/profile.jpg"
                  alt="Mani Kethan Reddy"
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--accent-primary)',
                    boxShadow: '0 0 20px var(--accent-glow)'
                  }}
                />
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Mani Kethan Reddy</h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-primary)' }}>Computer Science (AI & ML) Engineer</div>
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                Passionate about building intelligent RAG systems, PyTorch computer vision applications, and AI-assisted software. Let's discuss engineering opportunities or research projects!
              </p>

              {/* Copy Email Pill */}
              <div
                onClick={handleCopyEmail}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid var(--border-glass)',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  marginBottom: '20px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={18} color="var(--accent-primary)" />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', color: 'var(--text-main)' }}>{emailAddress}</span>
                </div>
                <button style={{ background: 'none', border: 'none', color: 'var(--accent-primary)', cursor: 'pointer' }}>
                  {copiedEmail ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>

              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <MapPin size={18} color="var(--accent-primary)" />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>

            {/* Social Links Panel */}
            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '16px' }}>
                Professional Profiles
              </div>
              <div style={{ display: 'flex', gap: '14px' }}>
                <a
                  href="https://github.com/M-k-reddy"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub Profile"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 18px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border-glass)',
                    color: 'var(--text-main)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 600
                  }}
                >
                  <Github size={20} color="var(--accent-primary)" /> GitHub
                </a>

                <a
                  href="https://linkedin.com/in/challa-manikethanreddy"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn Profile"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 18px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border-glass)',
                    color: 'var(--text-main)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 600
                  }}
                >
                  <Linkedin size={20} color="var(--accent-primary)" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="glass-panel" style={{ padding: '36px', position: 'relative' }}>
            
            {toastMessage && (
              <div style={{
                padding: '14px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(6, 182, 212, 0.15)',
                border: '1px solid var(--accent-glow)',
                color: 'var(--text-main)',
                fontSize: '0.9rem',
                marginBottom: '20px'
              }}>
                {toastMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Recruiter / Collaborator Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid var(--border-glass)',
                    color: 'var(--text-main)',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid var(--border-glass)',
                    color: 'var(--text-main)',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px' }}>
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="AI Engineering Role / Project Discussion"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid var(--border-glass)',
                    color: 'var(--text-main)',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px' }}>
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Your message details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid var(--border-glass)',
                    color: 'var(--text-main)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
