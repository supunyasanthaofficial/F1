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
    <div ref={statRef} style={{ opacity: 0 }}>
      <p
        className="heading-xl"
        style={{ fontSize: 'clamp(36px, 5vw, 64px)', color: '#f0ece4' }}
      >
        {value}
      </p>
      <p
        className="label"
        style={{ color: 'rgba(240,236,228,0.36)', marginTop: 8 }}
      >
        {label}
      </p>
    </div>
  );
};
