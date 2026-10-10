import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { VideoScrubProps } from '../types';

gsap.registerPlugin(ScrollTrigger);

export const VideoScrub: React.FC<VideoScrubProps> = ({
  src,
  scrollHeight = '480vh',
  chapters,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;

    const ctx = gsap.context(() => {
      const initTrigger = () => {
        const dur = video.duration;
        if (!dur || !isFinite(dur)) return;

        let rafId: number | null = null;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrap,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.6,
            onUpdate(self) {
              if (rafId) cancelAnimationFrame(rafId);
              rafId = requestAnimationFrame(() => {
                const targetTime = self.progress * dur;
                if (isFinite(targetTime) && Math.abs(video.currentTime - targetTime) > 0.03) {
                  video.currentTime = targetTime;
                }
              });
            },
          },
        });

        chapters.forEach((ch, i) => {
          const el = wrap.querySelector(`.flow-chapter-${i}`);
          if (!el) return;

          if (i === 0) {
            tl.fromTo(
              el,
              { y: 0, opacity: 1, filter: 'blur(0px)' },
              { y: -100, opacity: 0, filter: 'blur(6px)', ease: 'power1.in', duration: 0.1 },
              0.08
            );
          } else if (i === chapters.length - 1) {
            tl.fromTo(
              el,
              { y: 100, opacity: 0, filter: 'blur(6px)' },
              { y: 0, opacity: 1, filter: 'blur(0px)', ease: 'power1.out', duration: 0.12 },
              ch.progress - 0.1
            );
          } else {
            tl.fromTo(
              el,
              { y: 100, opacity: 0, filter: 'blur(6px)' },
              { y: 0, opacity: 1, filter: 'blur(0px)', ease: 'power1.out', duration: 0.1 },
              ch.progress - 0.1
            ).to(
              el,
              { y: -100, opacity: 0, filter: 'blur(6px)', ease: 'power1.in', duration: 0.1 },
              ch.progress + 0.04
            );
          }
        });
        ScrollTrigger.refresh();
      };

      if (video.readyState >= 1) {
        initTrigger();
      } else {
        video.addEventListener('loadedmetadata', initTrigger, { once: true });
      }
    }, wrap);

    return () => ctx.revert();
  }, [src, chapters]);

  return (
    <div ref={wrapRef} style={{ height: scrollHeight, position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          preload="auto"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'linear-gradient(to top, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.1) 40%, rgba(10,10,10,0.4) 100%)',
          }}
        />

        {chapters.map((ch, i) => {
          const side = ch.side ?? 'left';
          return (
            <div
              key={i}
              className={`flow-chapter-${i}`}
              style={{
                position: 'absolute',
                top: '48%',
                transform: 'translateY(-50%)',
                left: side === 'left' ? 'clamp(24px, 6vw, 96px)' : undefined,
                right: side === 'right' ? 'clamp(24px, 6vw, 96px)' : undefined,
                textAlign: side === 'right' ? 'right' : 'left',
                maxWidth: '85vw',
                pointerEvents: 'none',
                opacity: i === 0 ? 1 : 0,
                willChange: 'transform, opacity, filter',
              }}
            >
              <p
                className="label"
                style={{
                  color: 'rgba(240,236,228,0.5)',
                  marginBottom: 14,
                  letterSpacing: '0.2em',
                }}
              >
                {String(i + 1).padStart(2, '0')} // {String(chapters.length).padStart(2, '0')}
              </p>
              <h2
                className="heading-xl"
                style={{
                  fontSize: 'clamp(52px, 9.5vw, 116px)',
                  color: '#f0ece4',
                  lineHeight: 0.88,
                }}
              >
                {ch.line1}
              </h2>
              {ch.line2 && (
                <h2
                  className="heading-xl"
                  style={{
                    fontSize: 'clamp(52px, 9.5vw, 116px)',
                    color: 'rgba(240,236,228,0.3)',
                    lineHeight: 0.88,
                  }}
                >
                  {ch.line2}
                </h2>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
