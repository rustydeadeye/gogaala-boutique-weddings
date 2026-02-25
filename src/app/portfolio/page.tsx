import Image from "next/image";
import Reveal from "@/components/animations/Reveal";
import SignatureRule from "@/components/animations/SignatureRule";

const works = [
  {
    title: "Sea-facing Mandap Reception",
    place: "Colaba, Mumbai",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "Contemporary Palace Ceremony",
    place: "Udaipur Destination",
    image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "Intimate Heritage Celebration",
    place: "South Mumbai",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1400&q=80"
  }
];

export default function PortfolioPage() {
  return (
    <section className="section-shell py-10 md:py-14">
      <Reveal>
        <SignatureRule />
        <h1 className="max-w-3xl text-[46px] leading-[1.06] md:text-[60px]">Portfolio of design-led celebrations</h1>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {works.map((work, i) => (
          <Reveal key={work.title} delay={i * 0.04}>
            <article className="card-surface overflow-hidden">
              <div className="relative h-[260px]">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  loading="lazy"
                  className="editorial-image-contrast object-cover"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl">{work.title}</h2>
                <p className="mt-2 text-sm uppercase tracking-[0.08em] text-taupe">{work.place}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
