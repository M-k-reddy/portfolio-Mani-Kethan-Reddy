import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react';

export default function Testimonials3D() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Jenkins',
      title: 'VP of Engineering at CloudScale',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      text: 'Alex delivered an extraordinary 3D WebGL data visualization platform for our team. His technical speed, attention to performance optimization, and UI aesthetic standards are unmatched.'
    },
    {
      name: 'Marcus Vance',
      title: 'Founder & CTO at Quantum AI Labs',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      text: 'Working with Alex was a game changer. He turned our complex AI node model concepts into a seamless, interactive 3D web experience that impressed our investors and boosted our conversion rate.'
    },
    {
      name: 'Elena Rostova',
      title: 'Head of Product at Synthetix Design',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      text: 'Alex bridges the gap between high-end creative 3D design and rock-solid full-stack code architecture. Highly recommended for any ambitious web application project.'
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" style={{ padding: '100px 0', background: 'rgba(0, 0, 0, 0.25)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-tag">
            <MessageSquare size={16} /> Endorsements
          </div>
          <h2 className="section-title">
            Client & Teammate <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            What engineering leaders, CTOs, and product managers say about collaborating together.
          </p>
        </div>

        {/* Carousel Box */}
        <div style={{ maxWidth: '750px', margin: '0 auto', position: 'relative' }}>
          <div className="glass-panel" style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}>
            
            <Quote size={60} style={{ position: 'absolute', top: '20px', right: '30px', opacity: 0.1, color: 'var(--accent-primary)' }} />

            {/* Stars */}
            <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
              {[...Array(activeTestimonial.rating)].map((_, i) => (
                <Star key={i} size={18} fill="var(--accent-primary)" color="var(--accent-primary)" />
              ))}
            </div>

            {/* Text Quote */}
            <p style={{ fontSize: '1.2rem', lineHeight: 1.7, color: 'var(--text-main)', fontStyle: 'italic', marginBottom: '32px' }}>
              "{activeTestimonial.text}"
            </p>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.name}
                  style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-primary)' }}
                />
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{activeTestimonial.name}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{activeTestimonial.title}</p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={handlePrev}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'var(--bg-glass-card)',
                    border: '1px solid var(--border-glass)',
                    color: 'var(--text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={handleNext}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'var(--bg-glass-card)',
                    border: '1px solid var(--border-glass)',
                    color: 'var(--text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
