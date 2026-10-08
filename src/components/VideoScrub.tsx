import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Chapter, VideoScrubProps } from '../types';

gsap.registerPlugin(ScrollTrigger);

export const VideoScrub: React.FC<VideoScrubProps> = ({
  src,
  scrollHeight = '450vh',
  chapters,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;

    const ctx = gsap.context(() => {
      const initTrigger = () => {
        const dur = video.duration;
        if (!dur || !isFinite(dur)) return;

        ScrollTrigger.create({
          trigger: wrap,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          onUpdate(self) {
            const targetTime = self.progress * dur;
            if (isFinite(targetTime)) {
              video.currentTime = targetTime;
            }

            let currentActive: number | null = null;
            for (let i = 0; i < chapters.length; i++) {
              const currentProgress = chapters[i].progress;
              const nextProgress = chapters[i + 1]?.progress ?? 1;
              if (self.progress >= currentProgress && self.progress < nextProgress) {
                currentActive = i;
                break;
              }
            }
            setActiveIdx(currentActive);
          },
        });
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
              'linear-gradient(to top, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.1) 38%, transparent 60%)',
          }}
        />

        {chapters.map((ch, i) => {
          const side = ch.side ?? 'left';
          const isActive = activeIdx === i;
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                bottom: 'clamp(40px, 6vh, 80px)',
                left: side === 'left' ? 'clamp(24px, 5vw, 72px)' : undefined,
                right: side === 'right' ? 'clamp(24px, 5vw, 72px)' : undefined,
                textAlign: side === 'right' ? 'right' : 'left',
                maxWidth: '80vw',
                pointerEvents: 'none',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <p
                className="label"
                style={{ color: 'rgba(240,236,228,0.45)', marginBottom: 12 }}
              >
                {String(i + 1).padStart(2, '0')} / {String(chapters.length).padStart(2, '0')}
              </p>
              <h2
                className="heading-xl"
                style={{
                  fontSize: 'clamp(48px, 8.5vw, 104px)',
                  color: '#f0ece4',
                  lineHeight: 0.9,
                }}
              >
                {ch.line1}
              </h2>
              {ch.line2 && (
                <h2
                  className="heading-xl"
                  style={{
                    fontSize: 'clamp(48px, 8.5vw, 104px)',
                    color: 'rgba(240,236,228,0.35)',
                    lineHeight: 0.9,
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
