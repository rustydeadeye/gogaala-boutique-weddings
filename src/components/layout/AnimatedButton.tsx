"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ensureGsap } from "@/lib/gsap";

type AnimatedButtonProps = {
  href: string;
  label: string;
  className?: string;
};

export default function AnimatedButton({ href, label, className = "" }: AnimatedButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const gsap = ensureGsap();
    if (!ref.current) return;

    const enter = () => {
      gsap.to(ref.current, {
        scale: 1.02,
        backgroundColor: "#b79a64",
        duration: 0.22,
        ease: "power2.out"
      });
    };

    const leave = () => {
      gsap.to(ref.current, {
        scale: 1,
        backgroundColor: "#c6a972",
        duration: 0.2,
        ease: "power2.out"
      });
    };

    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", leave);

    return () => {
      ref.current?.removeEventListener("mouseenter", enter);
      ref.current?.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <Link
      ref={ref}
      href={href}
      className={`focus-ring inline-flex items-center justify-center rounded-md border border-charcoal/15 bg-champagne px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-charcoal transition-colors ${className}`}
    >
      {label}
    </Link>
  );
}
