'use client';

import { startTransition, useState } from "react";

import { buildInquiryMessage, getWhatsAppHref } from "@/lib/utils";

type ContactFormProps = {
  initialValues?: {
    travelType?: string;
    packageName?: string;
    duration?: string;
    airline?: string;
    roomType?: string;
    month?: string;
  };
};

export function ContactForm({ initialValues }: ContactFormProps) {
  const [status, setStatus] = useState<string>("");

  return (
    <div className="dark-card p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Inquiry Form</p>
      <h2 className="mt-4 font-display text-3xl text-ivory">Share your travel preference</h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-mist">
        This frontend-ready form prepares a WhatsApp inquiry with your entered details so the journey
        from website to conversation feels seamless.
      </p>

      <form
        className="mt-6 grid gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);

          const message = buildInquiryMessage("Assalam o Alaikum, I would like package details.", [
            ["Name", String(formData.get("name") ?? "")],
            ["Phone", String(formData.get("phone") ?? "")],
            ["Email", String(formData.get("email") ?? "")],
            ["Travel Type", String(formData.get("travelType") ?? "")],
            ["Package Interest", String(formData.get("packageName") ?? "")],
            ["Duration", String(formData.get("duration") ?? "")],
            ["Airline", String(formData.get("airline") ?? "")],
            ["Room Type", String(formData.get("roomType") ?? "")],
            ["Preferred Month", String(formData.get("month") ?? "")],
            ["Message", String(formData.get("message") ?? "")],
          ]);

          window.open(getWhatsAppHref(message), "_blank", "noopener,noreferrer");

          startTransition(() => {
            setStatus("WhatsApp opened with your inquiry details.");
          });
        }}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm text-mist">
            Full name
            <input
              required
              name="name"
              className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-ivory"
              placeholder="Your full name"
            />
          </label>
          <label className="grid gap-2 text-sm text-mist">
            Phone number
            <input
              required
              name="phone"
              className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-ivory"
              placeholder="03xx-xxxxxxx"
            />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm text-mist">
            Email address
            <input
              name="email"
              type="email"
              className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-ivory"
              placeholder="name@example.com"
            />
          </label>
          <label className="grid gap-2 text-sm text-mist">
            Travel type
            <select
              name="travelType"
              defaultValue={initialValues?.travelType ?? "Umrah"}
              className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-ivory"
            >
              <option value="Umrah">Umrah</option>
              <option value="Hajj">Hajj</option>
            </select>
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm text-mist">
            Package interest
            <input
              name="packageName"
              defaultValue={initialValues?.packageName ?? ""}
              className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-ivory"
              placeholder="Selected package or preference"
            />
          </label>
          <label className="grid gap-2 text-sm text-mist">
            Duration
            <input
              name="duration"
              defaultValue={initialValues?.duration ?? ""}
              className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-ivory"
              placeholder="e.g. 21 Days"
            />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <label className="grid gap-2 text-sm text-mist">
            Airline
            <input
              name="airline"
              defaultValue={initialValues?.airline ?? ""}
              className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-ivory"
              placeholder="Saudia / Fly Jinnah"
            />
          </label>
          <label className="grid gap-2 text-sm text-mist">
            Room type
            <input
              name="roomType"
              defaultValue={initialValues?.roomType ?? ""}
              className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-ivory"
              placeholder="Quad / Triple / Double"
            />
          </label>
          <label className="grid gap-2 text-sm text-mist">
            Preferred month
            <input
              name="month"
              defaultValue={initialValues?.month ?? ""}
              className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-ivory"
              placeholder="February / March / Dhul Hijjah"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm text-mist">
          Message
          <textarea
            name="message"
            rows={5}
            className="rounded-3xl border border-white/10 bg-white/6 px-4 py-3 text-ivory"
            placeholder="Tell us about your preferred dates, family size, room occupancy, or hotel expectations."
          />
        </label>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-surface-dark transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#d7b84f]"
          >
            Send via WhatsApp
          </button>
          <a
            href="tel:03212550100"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/6 px-5 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-white/10"
          >
            Call Travel Desk
          </a>
        </div>

        {status ? <p className="text-sm text-emerald-light">{status}</p> : null}
      </form>
    </div>
  );
}
