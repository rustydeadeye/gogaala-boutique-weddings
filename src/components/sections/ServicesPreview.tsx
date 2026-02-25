"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ensureGsap } from "@/lib/gsap";
import SplitLineReveal from "@/components/animations/SplitLineReveal";
import BodyFadeLift from "@/components/animations/BodyFadeLift";

const entries = [
  {
    index: "01",
    title: "Planning Governance",
    body: "Family stakeholder mapping, budget architecture, and milestone approvals before creative production begins."
  },
  {
    index: "02",
    title: "Design Direction",
    body: "A restrained visual language translated into venue zoning, hospitality choreography, and technical drawings."
  },
  {
    index: "03",
    title: "Execution Control",
    body: "Real-time command over run sheets, vendor dependencies, and guest movement across every event touchpoint."
  }
];

export default function ServicesPreview() {
  const root = useRef<HTMLElement>(null);
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const gsap = ensureGsap();
    const ctx = gsap.context(() => {
      const rail = root.current?.querySelector("[data-rail-fill]");
      const cards = gsap.utils.toArray<HTMLElement>("[data-service-card]");

      cards.forEach((card) => {
        const setActive = () => {
          cards.forEach((entry) => entry.classList.remove("service-card-active"));
          card.classList.add("service-card-active");
          const nextIndex = Number(card.getAttribute("data-service-index") || "0");
          setActiveChapter(nextIndex);
        };

        gsap.fromTo(
          card,
          { y: 20, opacity: 0.35 },
          {
            y: 0,
            opacity: 1,
            duration: prefersReduced ? 0.2 : window.innerWidth < 768 ? 0.36 : 0.72,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 84%",
              onEnter: setActive,
              onEnterBack: setActive,
              once: prefersReduced
            }
          }
        );
      });

      if (rail && root.current && !prefersReduced) {
        gsap.fromTo(
          rail,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top top",
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top 70%",
              end: "bottom 35%",
              scrub: true
            }
          }
        );
      }

    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="section-shell py-16 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div data-services-manifesto className="lg:sticky lg:top-28 lg:h-fit lg:self-start lg:pr-6">
          <p className="kicker">Method</p>
          <SplitLineReveal
            as="h2"
            className="display-xl mt-3 max-w-md"
            lines={["Luxury is a feeling.", "We engineer the system that protects it."]}
          />
          <BodyFadeLift className="ink-muted mt-5 max-w-sm">
            Our practice is built as a studio command model, combining creative precision with layered operational
            discipline.
          </BodyFadeLift>
          <Link href="/services" className="mt-8 inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-charcoal">
            Explore Services
          </Link>
          <div className="mt-8 hidden items-start gap-4 lg:flex">
            <div className="relative h-28 w-px bg-charcoal/14">
              <div data-rail-fill className="absolute inset-x-0 top-0 h-full bg-champagne" />
            </div>
            <div className="pt-1">
              <p className="text-[11px] uppercase tracking-[0.14em] text-taupe">Process Progress</p>
              <p className="mt-2 text-xs uppercase tracking-[0.12em] text-charcoal/72">
                Chapter {activeChapter + 1}: {entries[activeChapter].title}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          {entries.map((entry, idx) => (
            <article
              key={entry.index}
              data-service-card
              data-service-index={idx}
              className={`service-card rounded-card border border-charcoal/12 bg-white px-6 py-8 md:px-9 md:py-10 ${
                idx === 0 ? "service-card-active" : ""
              }`}
            >
              <p className="text-[64px] leading-none text-charcoal/10 md:text-[84px]">{entry.index}</p>
              <h3 className="display-lg mt-2 max-w-xl">{entry.title}</h3>
              <p className="ink-muted mt-4 max-w-xl">{entry.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
