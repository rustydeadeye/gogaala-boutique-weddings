# Gogaala Weddings - Premium Boutique Planner Website

A modern, editorial-style wedding planner website built with Next.js App Router, TailwindCSS, and GSAP.

## Tech Stack

- Next.js (App Router)
- TailwindCSS
- GSAP + ScrollTrigger
- TypeScript

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Project Structure

```text
src/
  app/
    about/
    blog/
    case-study/
    inquiry/
    portfolio/
    services/
    globals.css
    layout.tsx
    page.tsx
  components/
    animations/
    layout/
    sections/
  lib/
    gsap.ts
```

## GSAP Notes

- `src/lib/gsap.ts`: single plugin registration helper.
- `src/components/animations/Reveal.tsx`: section reveal animation with `ScrollTrigger`.
- `src/components/animations/HeroIntro.tsx`: staggered hero text reveal.
- `src/components/animations/ParallaxHero.tsx`: subtle desktop-only hero parallax.
- `src/components/layout/AnimatedButton.tsx`: restrained hover scale and color interaction.

## Performance Considerations

- Next `Image` for optimized responsive images.
- Lazy loading for below-the-fold imagery.
- Mobile animation durations reduced for responsiveness.
- Restrained animation movement to keep rendering smooth.
