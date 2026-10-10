import React from 'react';
import { VideoScrub } from './components/VideoScrub';
import { AutoPlayVideo } from './components/AutoPlayVideo';
import { RevealText } from './components/RevealText';
import { BodyText } from './components/BodyText';
import { Stat } from './components/Stat';
import { Rule } from './components/Rule';
import { HERO_CHAPTERS, STATS_DATA } from './data';
import './index.css';

export default function App() {
  return (
    <main style={{ background: '#0a0a0a' }}>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '0 clamp(24px, 5vw, 72px) clamp(48px, 7vh, 80px)',
        }}
      >
        <p
          className="label"
          style={{
            color: 'rgba(240,236,228,0.28)',
            marginBottom: 24,
            letterSpacing: '0.22em',
          }}
        >
          Scroll
        </p>
        <h1
          className="heading-xl"
          style={{
            fontSize: 'clamp(80px, 17vw, 220px)',
            color: '#f0ece4',
            lineHeight: 0.84,
          }}
        >
          Formula<br />
          <span
            style={{
              color: 'rgba(240,236,228,0.15)',
              WebkitTextStroke: '1px rgba(240,236,228,0.2)',
            }}
          >
            One.
          </span>
        </h1>
      </div>

      <VideoScrub
        src="/videos/hero-f1.mp4"
        scrollHeight="480vh"
        chapters={HERO_CHAPTERS}
      />

      <div style={{ padding: 'clamp(64px, 10vw, 120px) clamp(24px, 5vw, 72px)' }}>
        <RevealText text="Not a car. An argument with physics." size="lg" />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(32px, 5vw, 80px)',
            marginTop: 'clamp(40px, 7vw, 96px)',
          }}
        >
          <BodyText text="Every millimetre of carbon is placed to win a fight with the air. The front wing alone generates more downforce than the weight of a small motorcycle." />
          <BodyText text="The tyres are the only four contact patches between a billion-dollar machine and the road. Each one the size of a laptop, running at 110 degrees." />
        </div>
      </div>

      <Rule />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          padding: 'clamp(48px, 7vw, 88px) clamp(24px, 5vw, 72px)',
          gap: 'clamp(24px, 4vw, 48px)',
        }}
      >
        {STATS_DATA.map((item, idx) => (
          <Stat key={idx} value={item.value} label={item.label} />
        ))}
      </div>

      <Rule />

      <div
        style={{
          padding: 'clamp(80px, 13vw, 160px) clamp(24px, 10vw, 140px)',
          textAlign: 'center',
        }}
      >
        <RevealText
          text="When you find the limit, you are already past it."
          size="md"
          align="center"
          color="rgba(240,236,228,0.88)"
        />
      </div>

      <Rule />

      <div
        style={{
          padding: 'clamp(64px, 10vw, 120px) clamp(24px, 5vw, 72px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          textAlign: 'right',
        }}
      >
        <RevealText text="Monza never forgives a mistake." size="lg" align="right" />
        <div style={{ marginTop: 'clamp(28px, 4vw, 56px)' }}>
          <BodyText
            text="Six kilometres of flat-out tarmac. The cars trimmed as lean as possible. Slipstreaming is a weapon and one error ends a race."
            align="right"
          />
        </div>
      </div>

      <AutoPlayVideo
        src="/videos/pyramids-f1.mp4"
        tag="TRACK CINEMATICS"
        title="PYRAMIDS // FULL SPEED APEX"
        subtitle="4K ON-TRACK ACTION"
      />

      <div style={{ padding: 'clamp(64px, 10vw, 120px) clamp(24px, 5vw, 72px)' }}>
        <RevealText text="Ten percent talent. Ninety percent nerve." size="lg" />
        <div style={{ marginTop: 'clamp(28px, 4vw, 56px)' }}>
          <BodyText text="Braking at 340 km/h with 200 bar of force through the left foot. Threading a corner that takes 0.4 seconds to exit. The body survives. The mind decides." />
        </div>
      </div>

      <Rule />

      <div
        style={{
          height: '75vh',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '0 clamp(24px, 5vw, 72px) clamp(48px, 7vh, 80px)',
        }}
      >
        <h2
          className="heading-xl"
          style={{
            fontSize: 'clamp(64px, 13vw, 180px)',
            lineHeight: 0.86,
            color: 'rgba(240,236,228,0.08)',
            WebkitTextStroke: '1px rgba(240,236,228,0.12)',
          }}
        >
          Nothing<br />
          <span style={{ color: '#f0ece4', WebkitTextStroke: 'none' }}>else</span><br />
          matters.
        </h2>
      </div>
    </main>
  );
}
