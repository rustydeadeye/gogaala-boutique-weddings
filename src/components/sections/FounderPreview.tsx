import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import SignatureRule from "@/components/animations/SignatureRule";
import SplitLineReveal from "@/components/animations/SplitLineReveal";
import BodyFadeLift from "@/components/animations/BodyFadeLift";

export default function FounderPreview() {
  return (
    <section className="section-shell py-16 md:py-24">
      <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <SignatureRule />
          <p className="kicker">Founder</p>
          <SplitLineReveal
            as="h2"
            className="display-xl mt-3 max-w-md"
            lines={["A founder-led studio for families", "who expect precision without noise."]}
          />
          <BodyFadeLift className="ink-muted mt-5 max-w-md">
            Aisha Goyal personally steers planning architecture, design calibration, and final execution governance.
          </BodyFadeLift>
          <Link href="/about" className="mt-7 inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-charcoal">
            Meet Aisha Goyal
          </Link>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative h-[410px] overflow-hidden rounded-card border border-charcoal/12 md:h-[540px]">
            <Image
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1400&q=80"
              alt="Founder portrait"
              fill
              className="editorial-image-soft object-cover"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 52vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
