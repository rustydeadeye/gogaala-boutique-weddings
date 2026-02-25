"use client";

import { useEffect, useRef } from "react";
import { ensureGsap, ScrollTrigger } from "@/lib/gsap";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const gsap = ensureGsap();
    const ctx = gsap.context(() => {
      if (!ref.current) return;

      // Luxury motion: short distance, restrained opacity, no overshoot.
      gsap.fromTo(
        ref.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: window.innerWidth < 768 ? 0.38 : 0.72,
          ease: "power2.out",
          delay,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
            once: true
          }
        }
      );
    }, ref);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
