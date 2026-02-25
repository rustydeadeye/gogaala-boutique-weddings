"use client";

import { useEffect, useRef } from "react";
import { ensureGsap } from "@/lib/gsap";

const trackItems = [
  "Mumbai Wedding Command Studio",
  "Guest Journey Systems",
  "Discreet Family Coordination",
  "Budget Governance",
  "Production Accuracy"
];

export default function MotionBand() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = ensureGsap();
    const ctx = gsap.context(() => {
      const track = ref.current?.querySelector("[data-track]");
      if (!track) return;

      gsap.to(track, {
        xPercent: -50,
        duration: window.innerWidth < 768 ? 22 : 30,
        repeat: -1,
        ease: "none"
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section className="overflow-hidden border-y border-charcoal/12 bg-white/65 py-4 md:py-5">
      <div ref={ref} className="relative">
        <div data-track className="flex w-[200%] min-w-[1200px] items-center gap-8 px-6 md:px-10">
          {[...trackItems, ...trackItems].map((item, index) => (
            <div key={`${item}-${index}`} className="flex shrink-0 items-center gap-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-charcoal/78">{item}</p>
              <span className="block h-1 w-1 rounded-full bg-champagne" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
