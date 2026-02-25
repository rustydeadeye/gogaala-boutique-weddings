import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="-mt-24 min-h-screen md:-mt-28">
      <section className="section-shell flex min-h-screen items-center py-16">
        <div className="w-full rounded-card border border-charcoal/14 bg-white px-7 py-12 md:px-12 md:py-16">
          <p className="kicker">Inquiry Received</p>
          <h1 className="display-xl mt-3 max-w-3xl">Thank you. Our team will contact you within 24 hours.</h1>
          <p className="ink-muted mt-5 max-w-2xl">
            If your event timeline is urgent, email us directly at hello@gogaalaweddings.com.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-md border border-charcoal/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-charcoal"
          >
            Back to Website
          </Link>
        </div>
      </section>
    </div>
  );
}

