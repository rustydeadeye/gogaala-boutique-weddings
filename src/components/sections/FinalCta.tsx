import AnimatedButton from "@/components/layout/AnimatedButton";
import Reveal from "@/components/animations/Reveal";

export default function FinalCta() {
  return (
    <section className="section-shell pb-16 pt-10 md:pb-24 md:pt-14">
      <Reveal>
        <div className="rounded-card border border-charcoal/14 bg-white px-7 py-12 md:px-12 md:py-14">
          <p className="kicker">Inquiry</p>
          <div className="mt-3 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <h2 className="display-xl max-w-3xl">If your wedding is high-investment, begin with a strategic consultation.</h2>
            <div className="lg:justify-self-end">
              <p className="ink-muted max-w-sm text-[15px]">
                Share dates, guest volume, and priorities. We return with fit, feasibility, and scope.
              </p>
              <div className="mt-6">
                <AnimatedButton href="/inquiry" label="Submit Inquiry" />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
