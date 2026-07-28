import React from 'react';
import { Video, ExternalLink, Play, Sparkles, Film } from 'lucide-react';

export default function ReelShowcase3D() {
  const reelUrl = 'https://www.instagram.com/reel/DZOdaolpCNa/?igsh=d3dwc3FjdXJhdnBs';
  const embedUrl = 'https://www.instagram.com/reel/DZOdaolpCNa/embed';

  return (
    <section id="reels" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-tag">
            <Film size={16} /> Featured Video Reel
          </div>
          <h2 className="section-title">
            Interactive <span className="gradient-text">Project & Media Reel</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Watch my featured Instagram video reel showcasing AI developments, hackathon moments, and software projects.
          </p>
        </div>

        {/* Embedded Reel Card Container */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            className="glass-panel"
            style={{
              maxWidth: '480px',
              width: '100%',
              padding: '24px',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
              border: '1px solid rgba(255,255,255,0.18)'
            }}
          >
            {/* Header Badge */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff'
                }}>
                  <Video size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800 }}>Mani Kethan Reddy</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Instagram Featured Reel</div>
                </div>
              </div>

              <a
                href={reelUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ padding: '6px 14px', fontSize: '0.8rem' }}
              >
                Open Reel <ExternalLink size={14} />
              </a>
            </div>

            {/* Instagram Embed iframe Frame */}
            <div style={{
              width: '100%',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              background: '#000',
              border: '1px solid var(--border-glass)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              minHeight: '520px'
            }}>
              <iframe
                src={embedUrl}
                title="Mani Kethan Reddy Instagram Reel"
                width="100%"
                height="540"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                style={{ border: 'none', overflow: 'hidden', width: '100%', display: 'block' }}
              />
            </div>

            {/* Reel Footer Tag */}
            <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontFamily: 'var(--font-mono)' }}>
                <Sparkles size={14} /> AI & Software Showcase
              </div>
              <span>@challa-manikethanreddy</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
