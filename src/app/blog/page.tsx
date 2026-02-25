import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import SignatureRule from "@/components/animations/SignatureRule";
import { blogPosts } from "@/lib/blog";

export default function BlogPage() {
  return (
    <section className="section-shell py-10 md:py-14">
      <Reveal>
        <SignatureRule />
        <h1 className="max-w-3xl text-[46px] leading-[1.06] md:text-[60px]">Planning Notes</h1>
      </Reveal>
      <div className="mt-10 space-y-5">
        {blogPosts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.04}>
            <article className="card-surface p-7 md:p-8">
              <h2 className="text-[30px] leading-tight">{post.title}</h2>
              <p className="mt-3 max-w-2xl text-charcoal/80">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-flex text-sm font-semibold uppercase tracking-[0.08em] text-charcoal"
              >
                Read Article
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
