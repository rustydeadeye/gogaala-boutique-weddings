import Reveal from "@/components/animations/Reveal";
import SignatureRule from "@/components/animations/SignatureRule";

const milestones = [
  "Project launched with 22-week planning window and hard venue cutoffs.",
  "Integrated cost model locked at INR 50L with weekly variance review.",
  "Three-event sequence mapped across ceremony, dinner, and reception venues.",
  "420-guest movement completed with no transfer delays.",
  "Final day run sheet executed with 11-minute average buffer per segment."
];

export default function CaseStudyPage() {
  return (
    <section className="section-shell py-10 md:py-14">
      <Reveal>
        <SignatureRule />
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-taupe">Case Study</p>
        <h1 className="mt-3 max-w-4xl text-[46px] leading-[1.06] md:text-[60px]">INR 50L wedding execution with full timeline control</h1>
      </Reveal>

      <Reveal delay={0.08} className="mt-10 max-w-3xl text-lg leading-relaxed text-charcoal/85">
        <p>
          This project required multi-venue coordination in South Mumbai under fixed timing constraints and high guest
          expectation. The brief prioritized punctuality, visual cohesion, and smooth family operations.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4">
        {milestones.map((item, i) => (
          <Reveal key={item} delay={i * 0.04}>
            <article className="card-surface p-6 md:p-7">
              <p className="text-charcoal/85">{item}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
