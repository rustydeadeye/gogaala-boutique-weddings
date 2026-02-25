"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ensureGsap } from "@/lib/gsap";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/case-study", label: "Case Study" },
  { href: "/inquiry", label: "Inquiry" }
];

export default function Navbar() {
  const pathname = usePathname();
  const isLandingPath = pathname?.startsWith("/lp/");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    const gsap = ensureGsap();
    const nav = document.getElementById("site-nav");

    if (nav) {
      gsap.fromTo(nav, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.72, ease: "power2.out" });
    }

    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const gsap = ensureGsap();
    if (!panelRef.current) return;

    if (menuOpen) {
      gsap.fromTo(
        panelRef.current,
        { autoAlpha: 0, y: -12 },
        { autoAlpha: 1, y: 0, duration: 0.46, ease: "power2.out" }
      );
      gsap.fromTo(
        menuItemsRef.current,
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.4, ease: "power2.out", stagger: 0.06, delay: 0.04 }
      );
    } else {
      gsap.set(panelRef.current, { autoAlpha: 0 });
    }
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  if (isLandingPath) {
    return null;
  }

  const ctaClass = scrolled
    ? "hidden rounded-md border border-champagne/55 bg-champagne/16 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.11em] text-charcoal md:inline-flex"
    : "hidden rounded-md border border-charcoal/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.11em] text-charcoal md:inline-flex";

  return (
    <header
      id="site-nav"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ivory/95 py-4 backdrop-blur-sm" : "bg-transparent py-4"
      }`}
    >
      <div className="section-shell">
        <div className="flex min-h-[52px] items-center justify-between border-b border-charcoal/12">
          <div className="flex items-end gap-3">
            <Link href="/" className="text-[1.2rem] font-semibold tracking-[0.06em] text-charcoal [font-family:var(--font-playfair)]">
              GOGAALA
            </Link>
            <span className="hidden text-[10px] uppercase tracking-[0.16em] text-taupe md:block">Mumbai | Founder-led</span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm uppercase transition-all duration-200 ${
                  pathname === link.href
                    ? "tracking-[0.11em] text-charcoal"
                    : "tracking-[0.08em] text-charcoal/78 hover:tracking-[0.1em] hover:text-charcoal"
                }`}
              >
                <span>{link.label}</span>
                {pathname === link.href && <span className="absolute -bottom-2 left-0 h-px w-full bg-champagne" />}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/inquiry"
              className={ctaClass}
            >
              Book Consultation
            </Link>

            <button
              type="button"
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-charcoal/20 md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className={`block h-px w-4 bg-charcoal transition-all ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`absolute block h-px w-4 bg-charcoal transition-all ${menuOpen ? "-translate-y-[3px] -rotate-45" : "translate-y-1.5"}`} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={panelRef}
        className="invisible fixed inset-0 z-[70] bg-ivory px-6 pb-10 pt-24 md:hidden"
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-md border border-charcoal/20 text-charcoal"
        >
          <span className="absolute block h-px w-4 rotate-45 bg-charcoal" />
          <span className="absolute block h-px w-4 -rotate-45 bg-charcoal" />
        </button>
        <nav className="flex h-full flex-col">
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              ref={(el) => {
                if (el) menuItemsRef.current[index] = el;
              }}
              className={`border-b border-charcoal/10 py-5 text-[15px] uppercase tracking-[0.11em] ${
                pathname === link.href ? "text-charcoal" : "text-charcoal/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/inquiry"
            className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-charcoal/20 bg-champagne px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.11em] text-charcoal"
          >
            Book Consultation
          </Link>
          <p className="mt-auto pt-8 text-[11px] uppercase tracking-[0.14em] text-taupe">Mumbai | Founder-led Studio</p>
        </nav>
      </div>
    </header>
  );
}
