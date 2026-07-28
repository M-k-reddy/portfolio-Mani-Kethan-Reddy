import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

export default function Preloader({ onComplete }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onComplete) onComplete();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#ff2a2a] z-[100000] flex items-center justify-center"
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            background: 'linear-gradient(135deg, #06b6d4, #a855f7, #090d16)',
            zIndex: 100000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          {/* Central Logo & Shutter Loader */}
          <div style={{ textAlign: 'center', color: '#fff' }}>
            <div style={{
              position: 'relative',
              width: '120px',
              height: '120px',
              margin: '0 auto 24px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid rgba(255,255,255,0.8)',
              boxShadow: '0 0 40px rgba(6,182,212,0.8)'
            }}>
              <img
                src={profileImg}
                alt="Mani Kethan Reddy Challa"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <h1 style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '8px' }}>
              MANI KETHAN REDDY <span style={{ color: 'var(--accent-primary)' }}>.</span>
            </h1>
            <p style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)', opacity: 0.9 }}>
              AI & MACHINE LEARNING ENGINEER
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
