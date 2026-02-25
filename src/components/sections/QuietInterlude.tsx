import Reveal from "@/components/animations/Reveal";

export default function QuietInterlude() {
  return (
    <section className="section-shell py-16 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-3xl border-y border-charcoal/12 py-10 text-center md:py-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-taupe">A Quiet Note</p>
          <p className="mt-4 text-[30px] leading-[1.2] [font-family:var(--font-playfair)] md:text-[38px]">
            The most luxurious weddings are not louder.
            <br />
            They are more intentional.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

