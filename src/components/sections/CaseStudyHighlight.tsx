import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import SignatureRule from "@/components/animations/SignatureRule";
import SplitLineReveal from "@/components/animations/SplitLineReveal";
import BodyFadeLift from "@/components/animations/BodyFadeLift";

const stats = [
  { label: "Guest Volume", value: "420" },
  { label: "Venue Transitions", value: "3" },
  { label: "Schedule Drift", value: "0 min" }
];

export default function CaseStudyHighlight() {
  return (
    <section className="section-shell py-16 md:py-24">
      <Reveal>
        <div className="mb-8 py-8">
          <SignatureRule />
          <div className="mt-6 flex items-end justify-between gap-6">
          <div>
            <p className="kicker">Case Study</p>
            <SplitLineReveal
              as="h2"
              className="display-xl mt-3 max-w-3xl"
              lines={["INR 50L South Mumbai wedding", "with full timeline integrity."]}
            />
          </div>
          <Link href="/case-study" className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal">
            View Details
          </Link>
          </div>
          <SignatureRule className="mt-6" />
        </div>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="relative h-[420px] overflow-hidden rounded-card border border-charcoal/12 md:h-[540px]">
            <Image
              src="https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1700&q=80"
              alt="Editorial wedding tablescape detail"
              fill
              className="editorial-image-contrast object-cover"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="rounded-card border border-charcoal/12 bg-charcoal px-7 py-8 text-ivory md:px-9 md:py-10">
            <BodyFadeLift className="text-[17px] leading-relaxed text-white/82">
              Three event formats, complex guest logistics, and multi-vendor dependencies executed through one unified
              command workflow.
            </BodyFadeLift>
            <div className="mt-8 space-y-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-end justify-between border-b border-white/18 pb-3">
                  <p className="text-[11px] uppercase tracking-[0.13em] text-white/64">{stat.label}</p>
                  <p className="text-2xl">{stat.value}</p>
                </div>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
