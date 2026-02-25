"use client";

import { useEffect, useRef } from "react";
import { ensureGsap, ScrollTrigger } from "@/lib/gsap";

const chapters = [
  {
    step: "01",
    title: "Brief and Decision Design",
    body: "We establish constraints and stakeholder approval pathways before creative discussions begin."
  },
  {
    step: "02",
    title: "Venue and Design Calibration",
    body: "Spatial design is developed only after technical realities and hospitality movement are validated."
  },
  {
    step: "03",
    title: "Production and Rehearsal Grid",
    body: "Every handoff is mapped as a timed dependency with responsible owners and escalation routing."
  },
  {
    step: "04",
    title: "Live Event Command",
    body: "On-ground operations are executed from a control matrix that keeps family and guests friction-free."
  }
];

export default function EditorialTimeline() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = ensureGsap();

    const ctx = gsap.context(() => {
      if (!root.current) return;

      const cards = gsap.utils.toArray<HTMLElement>("[data-chapter]");
      const rail = root.current.querySelector("[data-rail]") as HTMLDivElement | null;

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 20, opacity: 0.35 },
          {
            y: 0,
            opacity: 1,
            duration: window.innerWidth < 768 ? 0.36 : 0.72,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              onEnter: () => {
                cards.forEach((c) => c.classList.remove("border-champagne"));
                card.classList.add("border-champagne");

                if (rail) {
                  gsap.to(rail, {
                    height: `${((index + 1) / cards.length) * 100}%`,
                    duration: 0.6,
                    ease: "power2.out"
                  });
                }
              }
            }
          }
        );
      });

      if (window.innerWidth >= 1024) {
        ScrollTrigger.create({
          trigger: root.current,
          start: "top 16%",
          end: "bottom bottom",
          pin: "[data-pin]",
          pinSpacing: false
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-shell py-16 md:py-24">
      <div ref={root} className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div data-pin className="lg:pb-28">
          <p className="kicker">Process</p>
          <h2 className="display-xl mt-3 max-w-sm">Calm outcomes are engineered, not improvised.</h2>
          <p className="ink-muted mt-5 max-w-sm text-[15px]">
            A four-layer methodology that keeps aesthetics ambitious and execution predictable.
          </p>
          <div className="relative mt-10 hidden h-52 w-px bg-charcoal/15 lg:block">
            <div data-rail className="absolute inset-x-0 top-0 h-0 bg-champagne" />
          </div>
        </div>

        <div className="space-y-4">
          {chapters.map((chapter) => (
            <article
              key={chapter.step}
              data-chapter
              className="rounded-card border border-charcoal/12 bg-white px-6 py-8 transition-colors md:px-8"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-taupe">Step {chapter.step}</p>
              <h3 className="display-lg mt-2">{chapter.title}</h3>
              <p className="ink-muted mt-3 max-w-lg">{chapter.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
