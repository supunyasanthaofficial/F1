import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EditorialImageProps } from '../types';

gsap.registerPlugin(ScrollTrigger);

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  caption,
  aspectRatio = '16 / 10',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    const img = imgRef.current;
    if (!el || !img) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { scale: 1.12, opacity: 0.8 },
        {
          scale: 1.0,
          opacity: 1,
          duration: 1.2,
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
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio,
        overflow: 'hidden',
        borderRadius: 8,
        border: '1px solid rgba(240,236,228,0.12)',
        background: '#0d0f12',
      }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 40%)',
        }}
      />
      {caption && (
        <span
          className="label"
          style={{
            position: 'absolute',
            bottom: 14,
            left: 16,
            color: 'rgba(240,236,228,0.65)',
            letterSpacing: '0.15em',
            fontSize: 10,
          }}
        >
          {caption}
        </span>
      )}
    </div>
  );
};
