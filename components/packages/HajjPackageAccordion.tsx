'use client';

import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Bus,
  ChevronDown,
  Gift,
  Hotel,
  Landmark,
  ShieldCheck,
  Ticket,
  TrainFront,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { type HajjPackage } from "@/data/types";
import { cn, formatPkr } from "@/lib/utils";

import { PricingGrid } from "./PricingGrid";

type HajjPackageAccordionProps = {
  packages: HajjPackage[];
};

const includeIcons: Record<string, LucideIcon> = {
  Hotel,
  Ziyarat: Landmark,
  Transportation: Bus,
  "Train (Med to Makkah)": TrainFront,
  Ticket,
  Food: UtensilsCrossed,
  Assistance: ShieldCheck,
  "Training programs": BookOpen,
  Gifts: Gift,
};

export function HajjPackageAccordion({ packages }: HajjPackageAccordionProps) {
  const [activeId, setActiveId] = useState(
    packages.find((item) => item.recommended)?.id ?? packages[0]?.id,
  );

  return (
    <div className="grid gap-5">
      {packages.map((item) => {
        const isOpen = item.id === activeId;
        const pricingItems = item.roomPrices.map((price) => ({
          label: price.label,
          value: formatPkr(price.pkr),
          meta: [price.note, price.sar, price.usd].filter(Boolean).join(" • "),
        }));

        return (
          <div key={item.id} className="dark-card overflow-hidden">
            <button
              type="button"
              onClick={() => setActiveId((current) => (current === item.id ? "" : item.id))}
              className="flex w-full flex-col gap-4 px-5 py-5 text-left sm:px-6 lg:flex-row lg:items-center lg:justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                    Maktab {item.maktab}
                  </span>
                  <span className="rounded-full border border-emerald/25 bg-emerald/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-light">
                    Zone {item.zone}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-3xl text-ivory">
                  {item.headingLabel ?? item.name}
                </h3>
                <p className="mt-2 text-sm text-mist">
                  {item.duration} • Starting from {formatPkr(item.startingPrice)}
                </p>
              </div>
              <ChevronDown
                className={cn("h-5 w-5 shrink-0 text-gold transition-transform", isOpen && "rotate-180")}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="grid gap-8 border-t border-white/10 px-5 py-6 sm:px-6">
                    <section className="grid gap-4">
                      <h4 className="text-lg font-semibold text-ivory">Room Prices</h4>
                      <PricingGrid items={pricingItems} />
                    </section>

                    <section className="grid gap-4">
                      <h4 className="text-lg font-semibold text-ivory">Package Includes</h4>
                      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                        {item.includes.map((include) => {
                          const Icon = includeIcons[include] ?? ShieldCheck;

                          return (
                            <div
                              key={include}
                              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                            >
                              <Icon className="h-5 w-5 text-gold" />
                              <p className="mt-3 text-sm font-medium text-ivory">{include}</p>
                            </div>
                          );
                        })}
                      </div>
                    </section>

                    <section className="grid gap-4">
                      <h4 className="text-lg font-semibold text-ivory">Add-on Facilities</h4>
                      <div className="grid gap-4 xl:grid-cols-3">
                        {item.addOns.map((group) => (
                          <div key={group.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <p className="text-sm font-semibold text-ivory">{group.title}</p>
                            <ul className="mt-3 grid gap-2 text-sm leading-7 text-mist">
                              {group.items.map((detail) => (
                                <li key={detail}>• {detail}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section className="grid gap-4">
                      <h4 className="text-lg font-semibold text-ivory">Hotel Details</h4>
                      <div className="grid gap-4 lg:grid-cols-3">
                        {item.hotels.map((hotel) => (
                          <div key={hotel.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <p className="text-sm font-semibold text-ivory">{hotel.title}</p>
                            <ul className="mt-3 grid gap-2 text-sm leading-7 text-mist">
                              {hotel.details.map((detail) => (
                                <li key={detail}>• {detail}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section className="grid gap-4">
                      <h4 className="text-lg font-semibold text-ivory">Tentative Schedule</h4>
                      <div className="grid gap-4">
                        {item.schedule.map((entry, index) => (
                          <div key={entry} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/12 text-sm font-semibold text-gold">
                              {index + 1}
                            </div>
                            <p className="text-sm leading-7 text-mist">{entry}</p>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section className="grid gap-4">
                      <h4 className="text-lg font-semibold text-ivory">Important Notes</h4>
                      <div className="rounded-2xl border border-gold/20 bg-gold/8 p-5">
                        <ul className="grid gap-3 text-sm leading-7 text-mist">
                          {item.notes.map((note) => (
                            <li key={note}>• {note}</li>
                          ))}
                        </ul>
                      </div>
                    </section>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={`/contact?travelType=Hajj&package=${encodeURIComponent(item.name)}`}
                        className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-surface-dark transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#d7b84f]"
                      >
                        Inquire Now
                      </Link>
                      <button
                        type="button"
                        onClick={() => setActiveId("")}
                        className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/6 px-5 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-white/10"
                      >
                        Collapse
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
