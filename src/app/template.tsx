"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ensureGsap } from "@/lib/gsap";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !ref.current) return;

    const gsap = ensureGsap();
    const ctx = gsap.context(() => {
      if (ruleRef.current) {
        gsap.fromTo(
          ruleRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.52, ease: "power2.out" }
        );
      }
      gsap.fromTo(
        ref.current,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.58, ease: "power2.out", delay: 0.08 }
      );
    }, ref);

    return () => ctx.revert();
  }, [pathname]);

  return (
    <div>
      <div ref={ruleRef} className="mx-auto mt-20 h-px w-[min(1240px,calc(100%-3rem))] bg-charcoal/14 md:mt-24" />
      <div ref={ref}>{children}</div>
    </div>
  );
}
