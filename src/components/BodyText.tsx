import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BodyTextProps } from '../types';

gsap.registerPlugin(ScrollTrigger);

export const BodyText: React.FC<BodyTextProps> = ({ text, align = 'left' }) => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <p
      ref={textRef}
      style={{
        fontSize: 'clamp(15px, 1.4vw, 18px)',
        lineHeight: 1.82,
        color: '#b8c2d1',
        maxWidth: 420,
        fontWeight: 300,
        textAlign: align,
        marginLeft: align === 'right' ? 'auto' : align === 'center' ? 'auto' : 0,
        marginRight: align === 'center' ? 'auto' : 0,
        opacity: 0,
      }}
    >
      {text}
    </p>
  );
};
