'use client';

import { startTransition, useDeferredValue, useState } from "react";

import { Badge } from "@/components/shared/Badge";
import { type UmrahPackageSet } from "@/data/types";

import { PackageFilters } from "./PackageFilters";
import { UmrahPackageCard } from "./UmrahPackageCard";

type UmrahPackagesBrowserProps = {
  sets: UmrahPackageSet[];
  initialDuration?: string;
  initialAirline?: string;
  initialSearch?: string;
};

export function UmrahPackagesBrowser({
  sets,
  initialDuration = "All",
  initialAirline = "All",
  initialSearch = "",
}: UmrahPackagesBrowserProps) {
  const [selectedDuration, setSelectedDuration] = useState(initialDuration || "All");
  const [selectedAirline, setSelectedAirline] = useState(initialAirline || "All");
  const [search, setSearch] = useState(initialSearch);
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  const deferredSearch = useDeferredValue(search);
  const normalizedSearch = deferredSearch.trim().toLowerCase();

  const durations = [...new Set(sets.map((item) => item.duration))];
  const airlines = [...new Set(sets.map((item) => item.airline))];

  const filteredSets = sets
    .filter((set) => selectedDuration === "All" || set.duration === selectedDuration)
    .filter((set) => selectedAirline === "All" || set.airline === selectedAirline)
    .map((set) => {
      const packages = set.packages.filter((packageItem) => {
        if (!normalizedSearch) {
          return true;
        }

        return [packageItem.makkahHotel, packageItem.madinahHotel]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);
      });

      return {
        ...set,
        packages,
      };
    })
    .filter((set) => set.packages.length > 0);

  const groupedSets = Object.entries(
    filteredSets.reduce<Record<string, UmrahPackageSet[]>>((accumulator, set) => {
      accumulator[set.duration] = accumulator[set.duration] ? [...accumulator[set.duration], set] : [set];
      return accumulator;
    }, {}),
  );

  return (
    <div className="grid gap-10">
      <PackageFilters
        durations={durations}
        airlines={airlines}
        selectedDuration={selectedDuration}
        selectedAirline={selectedAirline}
        search={search}
        onDurationChange={(value) => startTransition(() => setSelectedDuration(value))}
        onAirlineChange={(value) => startTransition(() => setSelectedAirline(value))}
        onSearchChange={(value) => startTransition(() => setSearch(value))}
        resultCount={filteredSets.length}
      />

      <div className="grid gap-8">
        {groupedSets.map(([duration, durationSets]) => (
          <section key={duration} className="grid gap-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-gold">Duration Group</p>
                <h2 className="mt-3 font-display text-3xl text-ivory">{duration}</h2>
              </div>
              <p className="text-sm text-mist">
                {durationSets.length} trip set{durationSets.length === 1 ? "" : "s"} shown
              </p>
            </div>

            {durationSets.map((set) => (
              <div key={set.id} className="hero-panel overflow-hidden rounded-[32px] p-6 sm:p-8">
                <div className="absolute inset-0 soft-pattern opacity-[0.05]" />
                <div className="relative">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge>{set.airline}</Badge>
                        <Badge tone="emerald">{set.duration}</Badge>
                      </div>
                      <h3 className="mt-4 font-display text-3xl text-ivory">{set.title}</h3>
                      <p className="mt-3 max-w-3xl text-sm leading-7 text-mist">
                        Package details are preserved per trip set so each departure keeps its own
                        outbound and return flight information together with the hotel and room-price
                        combinations shared for that trip.
                      </p>
                    </div>
                    <div className="rounded-3xl border border-gold/20 bg-gold/8 px-5 py-4 text-sm text-mist">
                      Package details subject to final confirmation.
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-gold">Departure Flight</p>
                      <p className="mt-3 text-lg font-semibold text-ivory">
                        {set.departure.code} • {set.departure.date}
                      </p>
                      <p className="mt-2 text-sm text-mist">
                        {set.departure.route} • {set.departure.departureTime} to{" "}
                        {set.departure.arrivalTime}
                      </p>
                      <p className="mt-1 text-sm text-mist">Baggage: {set.departure.baggage}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-gold">Return Flight</p>
                      <p className="mt-3 text-lg font-semibold text-ivory">
                        {set.returnFlight.code} • {set.returnFlight.date}
                      </p>
                      <p className="mt-2 text-sm text-mist">
                        {set.returnFlight.route} • {set.returnFlight.departureTime} to{" "}
                        {set.returnFlight.arrivalTime}
                      </p>
                      <p className="mt-1 text-sm text-mist">Baggage: {set.returnFlight.baggage}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-5 xl:grid-cols-2">
                    {set.packages.map((packageItem) => {
                      const cardKey = `${set.id}-${packageItem.packageNo}`;
                      return (
                        <UmrahPackageCard
                          key={cardKey}
                          set={set}
                          packageItem={packageItem}
                          expanded={expandedKey === cardKey}
                          onToggle={() =>
                            setExpandedKey((current) => (current === cardKey ? null : cardKey))
                          }
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </section>
        ))}

        {!filteredSets.length ? (
          <div className="dark-card p-8 text-center">
            <h3 className="font-display text-3xl text-ivory">No matching packages found</h3>
            <p className="mt-4 text-sm leading-7 text-mist">
              Try clearing one of the filters or search for a different hotel name to view more
              shared package sets.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
