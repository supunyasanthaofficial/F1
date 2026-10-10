import React, { useRef, useState, useEffect } from 'react';
import { AutoPlayVideoProps } from '../types';

export const AutoPlayVideo: React.FC<AutoPlayVideoProps> = ({
  src,
  tag = 'TRACK CINEMATICS',
  title = 'PYRAMIDS // APEX WARFARE',
  subtitle = '4K TRACK ACTION',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted) {
      video.play().catch(() => {});
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        margin: 'clamp(48px, 8vw, 96px) 0',
        padding: '0 clamp(24px, 5vw, 72px)',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(400px, 75vh, 760px)',
          borderRadius: 8,
          overflow: 'hidden',
          background: '#0d0f12',
          border: '1px solid rgba(240,236,228,0.12)',
        }}
      >
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'linear-gradient(to top, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.15) 45%, rgba(10,10,10,0.5) 100%)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: 24,
            left: 24,
            right: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#e10600',
                display: 'inline-block',
              }}
            />
            <span
              className="label"
              style={{ color: 'rgba(240,236,228,0.6)', letterSpacing: '0.18em' }}
            >
              {tag}
            </span>
          </div>

          <button
            onClick={toggleSound}
            style={{
              padding: '6px 14px',
              borderRadius: 20,
              background: 'rgba(10,10,10,0.65)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(240,236,228,0.2)',
              color: isMuted ? 'rgba(240,236,228,0.6)' : '#e10600',
              cursor: 'pointer',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 11,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              transition: 'all 0.2s ease',
            }}
          >
            {isMuted ? 'SOUND OFF' : 'SOUND ON'}
          </button>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 32,
            left: 28,
            right: 28,
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          <p
            className="label"
            style={{ color: '#e10600', marginBottom: 6, letterSpacing: '0.18em' }}
          >
            {subtitle}
          </p>
          <h3
            className="heading-xl"
            style={{
              fontSize: 'clamp(36px, 6vw, 76px)',
              color: '#f0ece4',
              lineHeight: 0.92,
            }}
          >
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};
