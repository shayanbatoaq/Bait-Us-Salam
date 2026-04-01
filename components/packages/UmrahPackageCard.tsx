'use client';

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Plane, PlaneLanding, PlaneTakeoff } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/shared/Badge";
import { type UmrahPackage, type UmrahPackageSet } from "@/data/types";
import { cn, formatOccupancyLabel, formatPkr } from "@/lib/utils";

import { PricingGrid } from "./PricingGrid";

type UmrahPackageCardProps = {
  set: UmrahPackageSet;
  packageItem: UmrahPackage;
  expanded: boolean;
  onToggle: () => void;
};

export function UmrahPackageCard({
  set,
  packageItem,
  expanded,
  onToggle,
}: UmrahPackageCardProps) {
  const occupancyOrder = ["sharing", "quad", "triple", "double"] as const;
  const prices = occupancyOrder
    .map((key) => {
      const amount = packageItem.occupancy[key];

      if (typeof amount !== "number") {
        return null;
      }

      return {
        label: formatOccupancyLabel(key),
        value: formatPkr(amount),
      };
    })
    .filter(Boolean) as Array<{ label: string; value: string }>;

  const fromPrice = prices[0]?.value ?? "PKR 0";

  const inquiryHref = `/contact?travelType=Umrah&package=${encodeURIComponent(
    `${set.title} Package ${packageItem.packageNo}`,
  )}&duration=${encodeURIComponent(set.duration)}&airline=${encodeURIComponent(
    set.airline,
  )}&roomType=${encodeURIComponent(prices[0]?.label ?? "")}`;

  const detailsBlock = (
    <div className="grid gap-4">
      <div className="grid gap-4 lg:grid-cols-[1.3fr_0.95fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-gold">Makkah Hotel</p>
            <p className="mt-2 text-base font-semibold text-ivory">{packageItem.makkahHotel}</p>
            <p className="mt-2 text-sm leading-7 text-mist">{packageItem.makkahNights}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-gold">Madinah Hotel</p>
            <p className="mt-2 text-base font-semibold text-ivory">{packageItem.madinahHotel}</p>
            <p className="mt-2 text-sm leading-7 text-mist">{packageItem.madinahNights}</p>
          </div>
        </div>
        <PricingGrid items={prices} />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-2">
            <PlaneTakeoff className="h-4 w-4 text-gold" />
            <p className="text-xs uppercase tracking-[0.24em] text-gold">Departure</p>
          </div>
          <p className="mt-3 text-base font-semibold text-ivory">
            {set.departure.code} • {set.departure.date}
          </p>
          <p className="mt-2 text-sm text-mist">
            {set.departure.route} • {set.departure.departureTime} to {set.departure.arrivalTime}
          </p>
          <p className="mt-1 text-sm text-mist">Baggage: {set.departure.baggage}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-2">
            <PlaneLanding className="h-4 w-4 text-gold" />
            <p className="text-xs uppercase tracking-[0.24em] text-gold">Return</p>
          </div>
          <p className="mt-3 text-base font-semibold text-ivory">
            {set.returnFlight.code} • {set.returnFlight.date}
          </p>
          <p className="mt-2 text-sm text-mist">
            {set.returnFlight.route} • {set.returnFlight.departureTime} to{" "}
            {set.returnFlight.arrivalTime}
          </p>
          <p className="mt-1 text-sm text-mist">Baggage: {set.returnFlight.baggage}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 pt-1">
        <Link
          href={inquiryHref}
          className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-surface-dark transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#d7b84f]"
        >
          Inquire Now
        </Link>
        <button
          type="button"
          onClick={onToggle}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-white/10"
        >
          {expanded ? "Hide Details" : "View Details"}
          <ChevronDown className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")} />
        </button>
      </div>
    </div>
  );

  return (
    <article className="dark-card overflow-hidden p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Package {packageItem.packageNo}</Badge>
            <Badge tone="emerald">{set.airline}</Badge>
            {packageItem.recommended ? <Badge tone="neutral">Recommended</Badge> : null}
          </div>
          <h3 className="mt-4 font-display text-2xl text-ivory">{set.title}</h3>
          <p className="mt-2 text-sm text-mist">
            {set.duration} • {packageItem.makkahHotel} / {packageItem.madinahHotel}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-[0.24em] text-gold">Starting from</p>
          <p className="mt-2 text-xl font-semibold text-ivory">{fromPrice}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={onToggle}
        className="mt-5 inline-flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left text-sm text-ivory md:hidden"
      >
        <span className="flex items-center gap-2">
          <Plane className="h-4 w-4 text-gold" />
          View package summary
        </span>
        <ChevronDown className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")} />
      </button>

      <div className="mt-5 hidden md:block">{detailsBlock}</div>

      <AnimatePresence initial={false}>
        {expanded ? (
          <motion.div
            className="md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="pt-5">{detailsBlock}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
