import Image from "next/image";
import Reveal from "@/components/animations/Reveal";
import SignatureRule from "@/components/animations/SignatureRule";

export default function AboutPage() {
  return (
    <section className="section-shell py-10 md:py-14">
      <Reveal>
        <SignatureRule />
        <h1 className="max-w-3xl text-[46px] leading-[1.06] md:text-[60px]">Founder-led planning with disciplined execution</h1>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="relative h-[420px] overflow-hidden rounded-card">
            <Image
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1400&q=80"
              alt="Founder"
              fill
              className="editorial-image-soft object-cover"
              sizes="(max-width: 1024px) 100vw, 35vw"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="space-y-6 text-lg leading-relaxed text-charcoal/85">
            <p>
              Gogaala is led by Aisha Goyal, who built her reputation in high-stakes event operations before launching
              a boutique planning studio for weddings in Mumbai.
            </p>
            <p>
              The studio accepts a limited number of weddings annually to maintain strategic oversight across vendor
              negotiations, production schedules, and family stakeholder communication.
            </p>
            <p>
              The approach is simple: fewer promises, stronger delivery, and a celebration that feels effortless to
              guests because the backend is controlled with precision.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
