"use client";

import { useEffect, useRef } from "react";
import { ensureGsap } from "@/lib/gsap";

type BodyFadeLiftProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  start?: string;
};

export default function BodyFadeLift({ children, className = "", delay = 0, start = "top 88%" }: BodyFadeLiftProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !ref.current) return;

    const gsap = ensureGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y: 14, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: window.innerWidth < 768 ? 0.32 : 0.56,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start,
            once: true
          }
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [delay, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

