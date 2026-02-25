"use client";

import { useEffect, useRef } from "react";
import { ensureGsap } from "@/lib/gsap";

type SignatureRuleProps = {
  className?: string;
};

export default function SignatureRule({ className = "" }: SignatureRuleProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = ensureGsap();
    const ctx = gsap.context(() => {
      if (!ref.current) return;
      gsap.fromTo(
        ref.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: window.innerWidth < 768 ? 0.38 : 0.72,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%",
            once: true
          }
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return <div ref={ref} className={`h-px w-full bg-charcoal/14 ${className}`} />;
}

