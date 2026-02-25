import Reveal from "@/components/animations/Reveal";
import SignatureRule from "@/components/animations/SignatureRule";
import SplitLineReveal from "@/components/animations/SplitLineReveal";
import BodyFadeLift from "@/components/animations/BodyFadeLift";
import CounterTick from "@/components/animations/CounterTick";

const metrics = [
  { value: "120+", label: "Celebrations Delivered" },
  { value: "INR 1Cr+", label: "Largest Budget Managed" },
  { value: "14", label: "Years Mumbai Vendor Depth" }
];

export default function AuthoritySection() {
  return (
    <section className="section-shell py-14 md:py-24">
      <Reveal>
        <div className="py-8 md:py-10">
          <SignatureRule />
          <p className="kicker">Authority</p>
          <SplitLineReveal
            as="h2"
            className="display-xl mt-3 max-w-4xl"
            lines={["Built for families who require", "certainty before celebration begins."]}
          />
          <BodyFadeLift className="ink-muted mt-5 max-w-3xl text-[17px]">
            We run each wedding through planning gates, budget controls, and execution protocols so every visual
            decision remains operationally stable.
          </BodyFadeLift>
          <SignatureRule className="mt-8" />
        </div>
      </Reveal>

      <Reveal delay={0.04}>
        <div className="mt-7 divide-y divide-charcoal/12 border-y border-charcoal/12">
          {metrics.map((metric) => (
            <div key={metric.label} className="grid gap-2 py-4 md:grid-cols-[220px_1fr] md:items-end">
              <p className="text-[38px] leading-none">
                {metric.value === "120+" ? (
                  <CounterTick value={120} suffix="+" />
                ) : metric.value === "14" ? (
                  <CounterTick value={14} />
                ) : (
                  metric.value
                )}
              </p>
              <p className="text-[11px] uppercase tracking-[0.14em] text-taupe">{metric.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.08} className="mt-6 border-l-2 border-champagne pl-5 md:pl-7">
        <p className="max-w-4xl text-[23px] leading-[1.26] md:text-[30px]">
          "They gave us complete calm. Every detail felt intentional and every transition felt controlled."
        </p>
        <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-taupe">Client Feedback, South Mumbai</p>
      </Reveal>
    </section>
  );
}
