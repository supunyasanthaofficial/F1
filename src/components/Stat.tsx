import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StatProps } from '../types';

gsap.registerPlugin(ScrollTrigger);

export const Stat: React.FC<StatProps> = ({ value, label }) => {
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={statRef} style={{ opacity: 0, position: 'relative' }}>
      <div
        style={{
          width: 16,
          height: 2,
          background: '#ff1801',
          marginBottom: 10,
          boxShadow: '0 0 10px rgba(255,24,1,0.6)',
        }}
      />
      <p
        className="heading-xl"
        style={{
          fontSize: 'clamp(36px, 5vw, 64px)',
          color: '#ffffff',
          textShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
        }}
      >
        {value}
      </p>
      <p
        className="label"
        style={{
          color: '#9aa5b5',
          marginTop: 8,
          letterSpacing: '0.2em',
        }}
      >
        {label}
      </p>
    </div>
  );
};
