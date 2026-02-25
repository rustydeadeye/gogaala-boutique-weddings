import { notFound } from "next/navigation";
import Reveal from "@/components/animations/Reveal";
import SignatureRule from "@/components/animations/SignatureRule";
import { blogPosts } from "@/lib/blog";

type BlogArticleProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogArticlePage({ params }: BlogArticleProps) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="section-shell py-10 md:py-14">
      <Reveal>
        <SignatureRule />
        <h1 className="max-w-3xl text-[46px] leading-[1.06] md:text-[60px]">{post.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-charcoal/85">{post.content}</p>
      </Reveal>
    </section>
  );
}
