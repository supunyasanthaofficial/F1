import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RevealTextProps } from '../types';

gsap.registerPlugin(ScrollTrigger);

export const RevealText: React.FC<RevealTextProps> = ({
  text,
  size = 'lg',
  color = '#f0ece4',
  align = 'left',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const spans = el.querySelectorAll('.reveal-word');
      gsap.fromTo(
        spans,
        { y: '110%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          stagger: 0.06,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const sizeStyles = {
    sm: 'clamp(20px, 2.5vw, 32px)',
    md: 'clamp(28px, 3.8vw, 48px)',
    lg: 'clamp(40px, 6vw, 76px)',
  };

  const words = text.split(' ');

  return (
    <div ref={containerRef} style={{ textAlign: align }}>
      <h2
        className="heading-xl"
        style={{
          fontSize: sizeStyles[size],
          color,
          lineHeight: 1.0,
          overflow: 'hidden',
        }}
      >
        {words.map((word, idx) => (
          <span
            key={idx}
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              marginRight: '0.22em',
              verticalAlign: 'top',
            }}
          >
            <span className="reveal-word" style={{ display: 'inline-block' }}>
              {word}
            </span>
          </span>
        ))}
      </h2>
    </div>
  );
};
