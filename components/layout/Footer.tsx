import Link from "next/link";

import { company } from "@/data/company";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#08111d]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="font-display text-2xl text-ivory">{company.name}</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-mist">{company.positioning}</p>
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">Office Address</p>
            <p className="mt-3 text-sm leading-7 text-ivory/88">{company.address}</p>
            <a
              href={`https://${company.website}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm text-emerald-light transition-colors hover:text-ivory"
            >
              {company.website}
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Quick Links</p>
          <div className="mt-5 grid gap-3">
            {company.quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-mist transition-colors hover:text-ivory"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-gold">Phone Numbers</p>
          <div className="mt-5 grid gap-3">
            {company.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replaceAll("-", "")}`}
                className="text-sm text-mist transition-colors hover:text-ivory"
              >
                {phone}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Package Links</p>
          <div className="mt-5 grid gap-3">
            {company.packageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-mist transition-colors hover:text-ivory"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-8 rounded-3xl border border-gold/20 bg-gold/8 p-5">
            <p className="text-sm font-semibold text-ivory">Package details subject to confirmation</p>
            <p className="mt-3 text-sm leading-7 text-mist">
              Prices, timings, hotel names, and operational details are displayed as shared and should
              be confirmed at the time of booking.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8 px-4 py-4 text-center text-xs uppercase tracking-[0.24em] text-mist sm:px-6 lg:px-8">
        Bait Us Salam Pvt Ltd • Hajj and Umrah journeys from Karachi
      </div>
    </footer>
  );
}
