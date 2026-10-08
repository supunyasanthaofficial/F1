# FORMULA 1 // 4K SCROLL-DRIVEN CINEMATIC EXPERIENCE

A cutting-edge, high-velocity Formula 1 interactive web experience built with the exact requested tech stack.

---

## 🏎️ Tech Stack

```text
Frontend
├── React 19
├── TypeScript
├── Tailwind CSS v4
└── GSAP + ScrollTrigger

3D Interactive
└── Three.js / React Three Fiber (@react-three/fiber & @react-three/drei)

Sound & Kinematics
└── Web Audio API F1 V6 Turbo-Hybrid Synthesizer & Team Radio FX
```

---

## 🎬 Dual 4K Video Scroll Integration

This experience utilizes the two 4K videos provided in the workspace:

1. **Act I: 4K Rendered Aerodynamic Anatomy**
   - Source: `F1 WALLPAPER VIDEO 4K RENDERED [1ogJCcYZfKI].mkv`
   - Remuxed to: `public/videos/hero-f1.webm` (Full 4K resolution preserved with lossless video stream copy and browser-native audio).
   - Driven by: **GSAP ScrollTrigger** pinning the viewport across scroll progress (`0.0` to `1.0`).
   - Features:
     - 5 Synchronized Aerodynamic Chapters:
       - `01. CHASSIS & WING`: Vortex generation & Y250 tunnels
       - `02. VENTURI FLOORS`: Sidepod undercut & underfloor suction
       - `03. POWER UNIT`: 1.6L 90° Turbo-Hybrid & MGU-K / MGU-H
       - `04. REAR DRS WING`: Hydraulic 85mm flap actuation (+22 km/h)
       - `05. WARP LAUNCH`: Top speed trap velocity
     - Real-time vehicle dynamics HUD: Live Tachometer with LED shift lights, Speedometer, Gear, Throttle/Brake pedals trace, and lateral/longitudinal G-forces.
     - Interactive Chapter Jump buttons and Autopilot mode.

2. **Act II: 3D Aerodynamic Wind Tunnel (Three.js / React Three Fiber)**
   - Interactive 3D particle airflow streamlines flowing over an F1 race chassis.
   - Interactive parameters: Tunnel Air Velocity (60 to 360 km/h), Ride Height Ground Clearance (15 to 50 mm), Wireframe / Solid mode, and Orbit controls.
   - Live calculated downforce, drag coefficient (Cd), and aero balance.

3. **Act III: Track Warfare & Apex Dominance**
   - Source: `Pyramids- F1 [4K] [ijGfvd68Qps].mkv`
   - Remuxed to: `public/videos/pyramids-f1.webm` (Full 4K resolution with high-fidelity soundtrack).
   - Driven by: **GSAP ScrollTrigger** with real-time telemetry curve graph.
   - Features:
     - Sector 1: Variante del Rettifilo (-5.4G braking zone)
     - Sector 2: Variante Ascari Entry (Kerb attack & high-speed curve)
     - Sector 3: Curva del Serraglio (Slipstream duel)
     - Sector 4: Curva Alboreto / Parabolica (Full throttle launch)
     - Audio sync with dynamic equalizer visualizer.

4. **Act IV: Tactical Pit Wall Strategy**
   - Pirelli tire compound performance envelope (C5 Soft, C3 Medium, C1 Hard).
   - Stint pace & degradation simulation (1-Stop vs 2-Stop strategy).
   - Live Team Radio comms with authentic radio beep sound effects.

5. **Act V: Driver Telemetry Comparison**
   - Head-to-head telemetry analysis for Verstappen, Hamilton, Norris, and Leclerc.
   - Comparative metrics: Top Speed, Late Braking Aggression, Tire Preservation, and High-G Cornering Grip.

6. **Act VI: Checkered Flag & Podium Celebration**
   - Grand Prix victory celebration with interactive podium confetti cannons (`canvas-confetti`).

---

## 🚀 Running the Project

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Server runs on: **http://localhost:3000**
