import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Skills3D from './components/Skills3D';
import Projects3D from './components/Projects3D';
import Experience3D from './components/Experience3D';
import Certificates3D from './components/Certificates3D';
import Education3D from './components/Education3D';
import Contact3D from './components/Contact3D';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [accent, setAccent] = useState('cyan');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent);
  }, [accent]);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-main)' }}>
      <Navbar />
      <main>
        <Hero3D />
        <Skills3D />
        <Projects3D />
        <Experience3D />
        <Certificates3D />
        <Education3D />
        <Contact3D />
      </main>
      <Footer />
    </div>
  );
}
