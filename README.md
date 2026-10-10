# FORMULA 1  EDITORIAL SCROLL EXPERIENCE

A human-crafted, editorial, scroll-driven Formula 1 storytelling website inspired by [jjettas.com](https://jjettas.com/). Built with React, TypeScript, Tailwind CSS, and GSAP + ScrollTrigger.

---

## Tech Stack

- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **GSAP + ScrollTrigger**
- **Vite**

---

## Architectural Highlights

### 1. Scroll-Driven Video Scrubbing (`hero-f1.mp4`)
- Re-encoded using All-Intra H.264 (`-g 1 -keyint_min 1 -sc_threshold 0`) for direct 0ms keyframe seek accuracy.
- Scrub-driven timeline synchronization with GSAP `ScrollTrigger`.
- Throttled using `requestAnimationFrame` and threshold distance checking to prevent video decode thread flooding.
- Flowing vertical typography transitions (`flow-chapter-i`) that glide in and out seamlessly as the user scrolls.

### 2. Looping Cinematic Track Section (`pyramids-f1.mp4`)
- Clean in-view autoplay using `IntersectionObserver` with an interactive sound toggle (`SOUND ON / SOUND OFF`).
- Avoids scroll trapping by letting the user scroll past naturally while maintaining an atmospheric presence.

### 3. Editorial Photography & Layout
- Authentic high-resolution editorial photography (aero detail, cockpit halo, sidepod diffuser, braking zone, apex kerb, parabolica launch).
- Minimalist typography paired with Barlow, Barlow Condensed, and IM Fell English SC fonts.
- Pure black editorial theme (`#0a0a0a`) free of clutter, navbars, footers, or artificial dashboard widgets.

---

## Project Structure

```text
src/
├── components/
│   ├── AutoPlayVideo.tsx     # In-view autoplay looping video section with sound toggle
│   ├── BodyText.tsx          # Editorial paragraph block with scroll fade-in
│   ├── EditorialImage.tsx    # High-res photography card with zoom effect & caption
│   ├── RevealText.tsx        # Dynamic editorial headline reveal
│   ├── Rule.tsx              # Minimalist divider rule line
│   ├── Stat.tsx              # Clean metric and technical stat display
│   └── VideoScrub.tsx        # Scroll-driven All-Intra video scrubbing with flowing text
├── data/
│   └── index.ts              # Editorial chapters, subtitles, and telemetry stat records
├── types/
│   └── index.ts              # Centralized TypeScript interfaces
├── App.tsx                   # Top-level editorial page composition
├── index.css                 # Editorial font rules, base resets, minimal scrollbar
└── main.tsx                  # React entry point
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Development server runs on: **http://localhost:3000**
