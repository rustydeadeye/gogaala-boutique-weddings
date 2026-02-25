"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/lp/")) {
    return null;
  }

  return (
    <footer className="mt-8 border-t border-charcoal/12 py-14 md:py-16">
      <div className="section-shell grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-taupe">Gogaala Weddings</p>
          <p className="mt-3 max-w-lg text-[30px] leading-[1.14] [font-family:var(--font-playfair)] md:text-[38px]">
            Boutique planning for families who expect elegance with total control.
          </p>
          <p className="mt-5 text-sm uppercase tracking-[0.12em] text-charcoal/70">Mumbai, India</p>
          <p className="mt-2 text-xs uppercase tracking-[0.1em] text-charcoal/48">By appointment only</p>
        </div>

        <div className="flex flex-col gap-5 md:items-end">
          <a href="mailto:hello@gogaalaweddings.com" className="text-sm uppercase tracking-[0.12em] text-charcoal">
            hello@gogaalaweddings.com
          </a>
          <div className="flex gap-5 text-xs uppercase tracking-[0.12em] text-charcoal/70">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/inquiry">Inquiry</Link>
          </div>
          <p className="text-xs uppercase tracking-[0.1em] text-charcoal/50">© 2026 Gogaala Weddings</p>
        </div>
      </div>
    </footer>
  );
}
