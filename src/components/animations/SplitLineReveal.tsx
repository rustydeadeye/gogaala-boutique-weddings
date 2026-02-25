"use client";

import { ElementType, useEffect, useRef } from "react";
import { ensureGsap } from "@/lib/gsap";

type SplitLineRevealProps = {
  lines: string[];
  as?: ElementType;
  className?: string;
  start?: string;
};

export default function SplitLineReveal({
  lines,
  as: Tag = "h2",
  className = "",
  start = "top 88%"
}: SplitLineRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !ref.current) return;

    const gsap = ensureGsap();
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>("[data-split-word]");
      if (!words.length) return;

      gsap.fromTo(
        words,
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: window.innerWidth < 768 ? 0.36 : 0.7,
          ease: "power3.out",
          stagger: 0.035,
          scrollTrigger: {
            trigger: ref.current,
            start,
            once: true
          }
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [start]);

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line) => (
        <span key={line} className="block overflow-x-visible overflow-y-hidden pb-[0.12em]">
          <span className="block">
            {line.split(" ").map((word) => (
              <span
                key={`${line}-${word}`}
                data-split-word
                className="mr-[0.24em] inline-block px-[0.02em] will-change-transform"
              >
                {word}
              </span>
            ))}
          </span>
        </span>
      ))}
    </Tag>
  );
}
