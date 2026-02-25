"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getWhatsAppHref } from "@/lib/whatsapp";

export default function MobileLeadBar() {
  const pathname = usePathname();
  const isLanding = pathname?.startsWith("/lp/");

  // Keep the main website premium and uncluttered on mobile.
  // Mobile lead bar is only enabled on dedicated landing pages.
  if (!isLanding) return null;

  const whatsappHref = getWhatsAppHref();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-charcoal/15 bg-ivory/98 px-4 py-3 backdrop-blur-sm md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <Link
          href="/inquiry"
          className="inline-flex items-center justify-center rounded-md bg-champagne px-4 py-3 text-xs font-semibold uppercase tracking-[0.11em] text-charcoal"
        >
          Book Call
        </Link>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-charcoal/20 px-4 py-3 text-xs font-semibold uppercase tracking-[0.11em] text-charcoal"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-[#25D366]">
            <path d="M12 2a10 10 0 0 0-8.66 15l-1.2 4.4 4.52-1.18A10 10 0 1 0 12 2Zm5.64 14.35c-.23.64-1.34 1.2-1.86 1.27-.48.07-1.1.1-1.77-.13-.4-.14-.91-.3-1.57-.58-2.76-1.2-4.56-4-4.7-4.2-.14-.2-1.12-1.49-1.12-2.84 0-1.34.71-2 1-2.27.29-.28.64-.35.86-.35h.62c.2 0 .47-.07.73.56.27.64.92 2.2 1 2.35.08.15.13.32.02.52-.11.2-.17.33-.33.5-.17.18-.35.4-.5.53-.17.15-.34.3-.15.6.2.3.86 1.4 1.84 2.27 1.27 1.12 2.34 1.47 2.67 1.64.33.17.52.14.71-.08.2-.22.84-.98 1.06-1.32.23-.33.45-.28.76-.17.32.1 1.98.93 2.32 1.1.34.17.56.26.64.4.08.14.08.81-.15 1.45Z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
}
