import React from 'react';
import { Cpu, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      padding: '40px 0',
      borderTop: '1px solid var(--border-glass)',
      background: 'rgba(5, 8, 16, 0.8)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px'
      }}>
        
        {/* Brand & Copyright */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: 'var(--radius-sm)',
            background: 'var(--accent-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 'bold'
          }}>
            <Cpu size={18} />
          </div>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            © {currentYear} Mani Kethan Reddy Challa. All rights reserved.
          </span>
        </div>

        {/* Quick Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a
            href="https://github.com/M-k-reddy"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--text-dim)', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/challa-manikethanreddy"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--text-dim)', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:challamanikethanreddy@gmail.com"
            style={{ color: 'var(--text-dim)', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}
          >
            <Mail size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
}
