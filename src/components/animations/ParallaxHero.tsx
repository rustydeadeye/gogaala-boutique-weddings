"use client";

import { useEffect, useRef } from "react";
import { ensureGsap } from "@/lib/gsap";

export default function ParallaxHero({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = ensureGsap();
    const ctx = gsap.context(() => {
      if (!ref.current || window.innerWidth < 768) return;

      // Subtle parallax only for desktop to protect mobile performance.
      gsap.to(ref.current, {
        y: 24,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          scrub: 0.8,
          start: "top top",
          end: "bottom top"
        }
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}
