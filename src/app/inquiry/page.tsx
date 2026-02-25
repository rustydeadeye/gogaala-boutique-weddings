import Reveal from "@/components/animations/Reveal";
import SignatureRule from "@/components/animations/SignatureRule";

export default function InquiryPage() {
  return (
    <section className="section-shell py-10 md:py-14">
      <Reveal>
        <SignatureRule />
        <h1 className="max-w-3xl text-[46px] leading-[1.06] md:text-[60px]">Inquiry</h1>
        <p className="mt-4 max-w-2xl text-lg text-charcoal/80">
          Share your event scope, expected guest count, and planning window. We respond within two business days.
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mt-10 card-surface p-7 md:p-10">
        <form className="grid gap-6 md:grid-cols-2">
          <label className="text-sm font-medium text-charcoal">
            Full Name
            <input
              type="text"
              className="focus-ring mt-2 w-full rounded-md border border-charcoal/20 bg-white px-4 py-3 text-[16px]"
              placeholder="Your name"
            />
          </label>
          <label className="text-sm font-medium text-charcoal">
            Email
            <input
              type="email"
              className="focus-ring mt-2 w-full rounded-md border border-charcoal/20 bg-white px-4 py-3 text-[16px]"
              placeholder="you@example.com"
            />
          </label>
          <label className="text-sm font-medium text-charcoal">
            Phone
            <input
              type="tel"
              className="focus-ring mt-2 w-full rounded-md border border-charcoal/20 bg-white px-4 py-3 text-[16px]"
              placeholder="+91"
            />
          </label>
          <label className="text-sm font-medium text-charcoal">
            Estimated Budget
            <select className="focus-ring mt-2 w-full rounded-md border border-charcoal/20 bg-white px-4 py-3 text-[16px]">
              <option>INR 25L - 50L</option>
              <option>INR 50L - 1Cr</option>
              <option>INR 1Cr+</option>
            </select>
          </label>
          <label className="text-sm font-medium text-charcoal md:col-span-2">
            Event Details
            <textarea
              rows={5}
              className="focus-ring mt-2 w-full rounded-md border border-charcoal/20 bg-white px-4 py-3 text-[16px]"
              placeholder="Tell us the event dates, guest count, venues, and planning priorities."
            />
          </label>
          <button
            type="submit"
            className="focus-ring inline-flex w-full items-center justify-center rounded-md bg-champagne px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-charcoal md:w-fit"
          >
            Send Inquiry
          </button>
        </form>
      </Reveal>
    </section>
  );
}
