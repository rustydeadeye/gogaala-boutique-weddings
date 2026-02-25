import Image from "next/image";
import LeadForm from "@/components/landing/LeadForm";
import SignatureRule from "@/components/animations/SignatureRule";

const fitPoints = [
  "Mumbai wedding budget from INR 50L to 1Cr+",
  "2 to 4 event functions (haldi, sangeet, wedding, reception)",
  "Guest count typically 180 to 500+",
  "Family wants one accountable planning command center"
];

const disqualifyPoints = [
  "Only decor/vendor booking required",
  "Execution-only support needed in the last 2-3 weeks",
  "Low-budget package planning"
];

const faqs = [
  {
    q: "Do you handle multi-function Indian weddings?",
    a: "Yes. We plan and run full wedding weekends across haldi, mehendi, sangeet, wedding and reception formats."
  },
  {
    q: "Do you work only in South Mumbai?",
    a: "No. We execute across Mumbai and destination venues, but Mumbai families remain our core client base."
  },
  {
    q: "Can you work with family-preferred vendors and family stakeholders?",
    a: "Yes. We integrate preferred vendors and run a single decision protocol so approvals stay fast and controlled."
  },
  {
    q: "What happens after I submit the form?",
    a: "Step 1: fit check call. Step 2: planning scope recommendation. Step 3: onboarding if your brief and budget match."
  }
];

const reasons = [
  {
    title: "Budget governance",
    body: "Spend is tracked by event, category and decision stage so costs stay controlled before they become problems."
  },
  {
    title: "Family coordination",
    body: "We run structured approvals across parents, couple and key stakeholders to prevent last-minute confusion."
  },
  {
    title: "Execution command",
    body: "Vendor dependencies, timelines and guest movement are managed through one central operations workflow."
  }
];

const nextSteps = [
  "Submit your details and event month",
  "Receive response within 24 business hours",
  "Attend a 20-minute fit and scope call",
  "Get a clear recommendation on next steps"
];

export default function MumbaiWeddingPlannerAdsLandingPage() {
  return (
    <div className="-mt-24 md:-mt-28">
      <section className="relative min-h-[92svh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2400&q=80"
          alt="Luxury wedding reception setup"
          fill
          priority
          className="editorial-image-dark object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/52" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,31,31,0.72)_0%,rgba(31,31,31,0.42)_48%,rgba(31,31,31,0.22)_100%)]" />

        <div className="section-shell relative z-10 flex min-h-[92svh] items-end pb-12 pt-28 md:pb-16 md:pt-32">
          <div className="max-w-3xl text-ivory">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/76">Mumbai Wedding Planning Studio</p>
            <h1 className="display-hero mt-4 max-w-[15ch]">
              A Mumbai wedding
              <br />
              with calm command.
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/88 md:text-[18px]">
              Founder-led planning architecture for families investing INR 50L to 1Cr+, with elegant design direction,
              disciplined budget governance and precise event-weekend execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.14em] text-white/72">
              <span>Response in 24 hrs</span>
              <span>•</span>
              <span>Limited Annual Capacity</span>
              <span>•</span>
              <span>Founder-led Intake</span>
            </div>
            <p className="mt-4 text-[12px] text-white/74">South Mumbai, Bandra, Juhu, Powai and destination wedding briefs.</p>
            <a
              href="#apply"
              className="focus-ring mt-8 inline-flex rounded-md border border-champagne/30 bg-champagne px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-charcoal"
            >
              Check Date Availability
            </a>
          </div>
        </div>
      </section>

      <section className="section-shell py-10 md:py-14">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-card border border-charcoal/12 bg-white px-6 py-6">
            <p className="text-[34px] leading-none">120+</p>
            <p className="mt-2 text-xs uppercase tracking-[0.13em] text-taupe">Weddings Delivered</p>
          </article>
          <article className="rounded-card border border-charcoal/12 bg-white px-6 py-6">
            <p className="text-[34px] leading-none">INR 1Cr+</p>
            <p className="mt-2 text-xs uppercase tracking-[0.13em] text-taupe">Largest Budget Managed</p>
          </article>
          <article className="rounded-card border border-charcoal/12 bg-white px-6 py-6">
            <p className="text-[34px] leading-none">14 Years</p>
            <p className="mt-2 text-xs uppercase tracking-[0.13em] text-taupe">Mumbai Vendor Network</p>
          </article>
        </div>
      </section>

      <section className="section-shell pb-10 md:pb-14">
        <div className="grid gap-5 md:grid-cols-3">
          {reasons.map((item) => (
            <article key={item.title} className="rounded-card border border-charcoal/12 bg-white px-6 py-7">
              <p className="kicker">Why Families Choose Us</p>
              <h2 className="display-lg mt-3">{item.title}</h2>
              <p className="ink-muted mt-4 text-[16px]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-10 md:pb-14">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-card border border-charcoal/12 bg-white px-6 py-7 md:px-8">
            <p className="kicker">Best Fit</p>
            <h2 className="display-lg mt-3">Who this is for</h2>
            <ul className="mt-5 space-y-3 text-[16px] leading-relaxed text-charcoal/84">
              {fitPoints.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-card border border-charcoal/12 bg-white px-6 py-7 md:px-8">
            <p className="kicker">Not Ideal</p>
            <h2 className="display-lg mt-3">Who we may not suit</h2>
            <ul className="mt-5 space-y-3 text-[16px] leading-relaxed text-charcoal/84">
              {disqualifyPoints.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="apply" className="section-shell pb-10 md:pb-14">
        <div className="rounded-card border border-charcoal/14 bg-white px-7 py-10 md:px-10 md:py-12">
          <SignatureRule />
          <p className="kicker mt-6">Step 1: Qualification Call</p>
          <h2 className="display-xl mt-3 max-w-3xl">Apply for consultation</h2>
          <p className="ink-muted mt-4 max-w-3xl">
            Share your event month, budget bracket and contact details. If the brief is aligned, we schedule a 20-minute
            founder-led call to define feasibility, fit and next steps.
          </p>
          <div className="mt-5 rounded-md border border-charcoal/12 bg-ivory px-5 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-taupe">What Happens Next</p>
            <ul className="mt-3 grid gap-2 text-[15px] text-charcoal/82 md:grid-cols-2">
              {nextSteps.map((step) => (
                <li key={step}>- {step}</li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <LeadForm leadSource="mumbai_wedding_planner_ads_lp" submitLabel="Request Consultation Call" />
          </div>
          <p className="mt-4 text-[12px] text-charcoal/62">No spam. Your information is only used for consultation follow-up.</p>
        </div>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="rounded-card border border-charcoal/12 bg-charcoal px-7 py-9 text-ivory md:px-10 md:py-11">
          <p className="kicker text-white/70">Frequently Asked</p>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            {faqs.map((item) => (
              <article key={item.q} className="border-t border-white/14 pt-4">
                <h3 className="text-[20px] leading-[1.2]">{item.q}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/78">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
