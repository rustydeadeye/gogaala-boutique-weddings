import Image from "next/image";
import SignatureRule from "@/components/animations/SignatureRule";
import LeadForm from "@/components/landing/LeadForm";

export default function MumbaiWeddingPlannerLandingPage() {
  return (
    <div className="-mt-24 md:-mt-28">
      <section className="relative min-h-screen">
        <Image
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2200&q=80"
          alt="Luxury wedding ring detail"
          fill
          priority
          className="editorial-image-dark object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/42" />

        <div className="section-shell relative z-10 flex min-h-screen items-end pb-12 pt-28 md:pb-16 md:pt-32">
          <div className="max-w-3xl text-ivory">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">Mumbai Luxury Wedding Planner</p>
            <h1 className="display-hero mt-4">
              Founder-led planning
              <br />
              for INR 50L+ weddings.
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-white/84">
              We help families run high-stakes celebrations with design clarity, budget control, and seamless execution.
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-white/62">Response within 24 hours</p>
          </div>
        </div>
      </section>

      <section className="section-shell py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-card border border-charcoal/12 bg-white px-6 py-6">
            <p className="text-[34px] leading-none">120+</p>
            <p className="mt-2 text-xs uppercase tracking-[0.13em] text-taupe">Weddings Delivered</p>
          </article>
          <article className="rounded-card border border-charcoal/12 bg-white px-6 py-6">
            <p className="text-[34px] leading-none">INR 1Cr+</p>
            <p className="mt-2 text-xs uppercase tracking-[0.13em] text-taupe">Largest Managed Budget</p>
          </article>
          <article className="rounded-card border border-charcoal/12 bg-white px-6 py-6">
            <p className="text-[34px] leading-none">14 Years</p>
            <p className="mt-2 text-xs uppercase tracking-[0.13em] text-taupe">Mumbai Vendor Network</p>
          </article>
        </div>
      </section>

      <section className="section-shell pb-12 md:pb-16">
        <div className="rounded-card border border-charcoal/14 bg-white px-7 py-10 md:px-10 md:py-12">
          <SignatureRule />
          <p className="kicker mt-6">Consultation Form</p>
          <h2 className="display-xl mt-3 max-w-3xl">Book a 20-minute planning consultation</h2>
          <p className="ink-muted mt-4 max-w-2xl">
            This form is for families planning weddings with budgets from INR 50L to 1Cr+. Share key details and our
            team will contact you within 24 hours.
          </p>
          <div className="mt-8">
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-20">
        <div className="rounded-card border border-charcoal/12 bg-charcoal px-7 py-10 text-ivory md:px-10 md:py-12">
          <p className="kicker text-white/72">Client Voice</p>
          <p className="mt-4 max-w-4xl text-[24px] leading-[1.25] md:text-[30px]">
            "They made our family feel calm through every decision. The weekend ran beautifully because the backend
            was tightly controlled."
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.12em] text-white/62">Shah Family, South Mumbai</p>
        </div>
      </section>
    </div>
  );
}

