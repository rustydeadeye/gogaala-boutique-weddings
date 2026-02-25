"use client";

import { useEffect, useRef } from "react";
import { ensureGsap } from "@/lib/gsap";

type CounterTickProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

export default function CounterTick({ value, suffix = "", prefix = "", className = "" }: CounterTickProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!ref.current) return;
    if (prefersReduced) {
      ref.current.textContent = `${prefix}${value}${suffix}`;
      return;
    }

    const gsap = ensureGsap();
    const state = { count: 0 };
    const ctx = gsap.context(() => {
      gsap.to(state, {
        count: value,
        duration: window.innerWidth < 768 ? 0.7 : 1,
        ease: "power2.out",
        roundProps: "count",
        onUpdate: () => {
          if (!ref.current) return;
          ref.current.textContent = `${prefix}${Math.round(state.count)}${suffix}`;
        },
        scrollTrigger: {
          trigger: ref.current,
          start: "top 88%",
          once: true
        }
      });
    }, ref);

    return () => ctx.revert();
  }, [prefix, suffix, value]);

  return <span ref={ref} className={className} />;
}

