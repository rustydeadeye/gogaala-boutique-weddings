"use client";

import { useEffect, useRef } from "react";
import { ensureGsap } from "@/lib/gsap";

type HeroIntroProps = {
  children: React.ReactNode;
};

export default function HeroIntro({ children }: HeroIntroProps) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const gsap = ensureGsap();
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-hero-item]");
      if (!items.length) return;

      gsap.fromTo(
        items,
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: window.innerWidth < 768 ? 0.36 : 0.72,
          ease: "power3.out",
          stagger: window.innerWidth < 768 ? 0.08 : 0.14
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return <div ref={root}>{children}</div>;
}
