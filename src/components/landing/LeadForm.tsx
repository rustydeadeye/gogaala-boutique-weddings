"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

type LeadFormProps = {
  leadSource?: string;
  submitLabel?: string;
};

export default function LeadForm({ leadSource = "mumbai_wedding_planner_lp", submitLabel = "Book Consultation" }: LeadFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;

    setLoading(true);
    const form = new FormData(event.currentTarget);

    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "lead_form_submit",
        lead_source: leadSource,
        budget: form.get("budget"),
        month: form.get("month")
      });
    }

    router.push("/lp/thank-you");
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
      <label className="text-sm font-medium text-charcoal">
        Full Name
        <input
          name="name"
          required
          type="text"
          className="focus-ring mt-2 w-full rounded-md border border-charcoal/20 bg-white px-4 py-3 text-[16px]"
          placeholder="Your name"
        />
      </label>

      <label className="text-sm font-medium text-charcoal">
        Phone Number
        <input
          name="phone"
          required
          type="tel"
          className="focus-ring mt-2 w-full rounded-md border border-charcoal/20 bg-white px-4 py-3 text-[16px]"
          placeholder="+91"
        />
      </label>

      <label className="text-sm font-medium text-charcoal">
        Email
        <input
          name="email"
          required
          type="email"
          className="focus-ring mt-2 w-full rounded-md border border-charcoal/20 bg-white px-4 py-3 text-[16px]"
          placeholder="you@example.com"
        />
      </label>

      <label className="text-sm font-medium text-charcoal">
        Wedding Month
        <input
          name="month"
          required
          type="month"
          className="focus-ring mt-2 w-full rounded-md border border-charcoal/20 bg-white px-4 py-3 text-[16px]"
        />
      </label>

      <label className="text-sm font-medium text-charcoal md:col-span-2">
        Budget Range
        <select
          name="budget"
          required
          className="focus-ring mt-2 w-full rounded-md border border-charcoal/20 bg-white px-4 py-3 text-[16px]"
        >
          <option value="">Select budget</option>
          <option>INR 25L - 50L</option>
          <option>INR 50L - 1Cr</option>
          <option>INR 1Cr+</option>
        </select>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="focus-ring inline-flex w-full items-center justify-center rounded-md bg-champagne px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-charcoal disabled:opacity-60 md:w-fit"
      >
        {loading ? "Submitting..." : submitLabel}
      </button>
    </form>
  );
}
