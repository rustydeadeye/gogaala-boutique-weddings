"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import AnimatedButton from "@/components/layout/AnimatedButton";
import { ensureGsap } from "@/lib/gsap";
import SplitLineReveal from "@/components/animations/SplitLineReveal";
import BodyFadeLift from "@/components/animations/BodyFadeLift";
import CounterTick from "@/components/animations/CounterTick";
import { primaryHeroAsset } from "@/lib/heroAssets";

export default function HeroSection() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const gsap = ensureGsap();
    const ctx = gsap.context(() => {
      const image = root.current?.querySelector("[data-hero-image]");
      const copy = gsap.utils.toArray<HTMLElement>("[data-hero-copy]");
      const proof = gsap.utils.toArray<HTMLElement>("[data-hero-proof]");

      gsap.fromTo(
        copy,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: window.innerWidth < 768 ? 0.35 : 0.66,
          ease: "power2.out",
          delay: 0.24,
          stagger: 0.08
        }
      );

      gsap.fromTo(
        proof,
        { y: 14, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: window.innerWidth < 768 ? 0.32 : 0.58,
          ease: "power2.out",
          delay: 0.42,
          stagger: 0.08
        }
      );

      if (image) {
        gsap.fromTo(image, { scale: 1.06 }, { scale: 1, duration: 1.05, ease: "power3.out", delay: 0.08 });

        if (window.innerWidth >= 1024) {
          gsap.to(image, {
            yPercent: -7,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.85
            }
          });
        }
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative -mt-24 min-h-[88svh] overflow-hidden pb-14 pt-24 md:-mt-28 md:min-h-[94svh] md:pb-20 md:pt-28"
    >
      <div className="absolute inset-0">
        <Image
          data-hero-image
          src={primaryHeroAsset.src}
          alt={primaryHeroAsset.alt}
          fill
          priority
          className="editorial-image-dark object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(31,31,31,0.68) 0%, rgba(31,31,31,0.44) 40%, rgba(31,31,31,0.24) 64%, rgba(31,31,31,0.08) 100%)"
          }}
        />
        <div
          className="absolute inset-y-0 right-0 hidden w-[44%] lg:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(31,31,31,0.02) 0%, rgba(31,31,31,0.28) 48%, rgba(31,31,31,0.56) 100%)"
          }}
        />
      </div>

      <div className="section-shell relative z-10 flex min-h-[88svh] items-center py-10 md:min-h-[94svh] md:py-14">
        <div className="w-full">
          <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-end lg:gap-10">
            <div className="max-w-3xl">
              <p data-hero-copy className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/82">
                Mumbai Boutique Wedding Planner
              </p>
              <SplitLineReveal
                as="h1"
                className="mt-4 max-w-[18ch] text-[clamp(2.6rem,5.45vw,4.8rem)] leading-[0.94] text-ivory"
                start="top 92%"
                lines={["Quiet luxury.", "Surgical execution."]}
              />
              <BodyFadeLift className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/90 md:text-[17px]" start="top 92%">
                Founder-led command for INR 50L to 1Cr+ celebrations, engineered with timeline discipline and calm family
                confidence.
              </BodyFadeLift>
              <div data-hero-copy className="mt-7">
                <AnimatedButton href="/inquiry" label="Book Consultation" />
              </div>
            </div>

            <div className="hidden rounded-md border border-white/44 bg-charcoal/68 p-5 shadow-[0_24px_56px_rgba(0,0,0,0.44)] backdrop-blur-[6px] lg:block">
              <div data-hero-proof className="grid grid-cols-[1fr_auto] gap-3 border-b border-white/30 pb-4">
                <p className="text-[11px] uppercase tracking-[0.14em] text-white/90">Celebrations Delivered</p>
                <p className="text-[28px] leading-none text-ivory">
                  <CounterTick value={120} suffix="+" />
                </p>
              </div>
              <div data-hero-proof className="mt-4 grid grid-cols-[1fr_auto] gap-3 border-b border-white/30 pb-4">
                <p className="text-[11px] uppercase tracking-[0.14em] text-white/90">Largest Budget Managed</p>
                <p className="text-[28px] leading-none text-ivory">INR 1Cr+</p>
              </div>
              <div data-hero-proof className="mt-4 grid grid-cols-[1fr_auto] gap-3">
                <p className="text-[11px] uppercase tracking-[0.14em] text-white/90">Mumbai Vendor Depth</p>
                <p className="text-[28px] leading-none text-ivory">
                  <CounterTick value={14} suffix="y" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
