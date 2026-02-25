import Reveal from "@/components/animations/Reveal";
import SignatureRule from "@/components/animations/SignatureRule";

const offerings = [
  {
    title: "Full Wedding Planning",
    details: "End-to-end planning, budgeting, design direction, and complete wedding weekend management."
  },
  {
    title: "Design and Production",
    details: "Spatial concepting, visual language, technical drawings, and production coordination."
  },
  {
    title: "Guest and Logistics Command",
    details: "Rooming, transport movement, welcome operations, and hospitality experience control."
  },
  {
    title: "Family Office Support",
    details: "Confidential planning workflows for high-profile families requiring discreet stakeholder management."
  }
];

export default function ServicesPage() {
  return (
    <section className="section-shell py-10 md:py-14">
      <Reveal>
        <SignatureRule />
        <h1 className="max-w-3xl text-[46px] leading-[1.06] md:text-[60px]">Services for weddings where complexity is non-negotiable</h1>
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {offerings.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.04}>
            <article className="card-surface p-8 md:p-10">
              <h2 className="text-[30px] leading-tight">{item.title}</h2>
              <p className="mt-4 text-charcoal/80">{item.details}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
