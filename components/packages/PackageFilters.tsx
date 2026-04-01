'use client';

import { Search } from "lucide-react";

import { cn } from "@/lib/utils";

type PackageFiltersProps = {
  durations: string[];
  airlines: string[];
  selectedDuration: string;
  selectedAirline: string;
  search: string;
  onDurationChange: (value: string) => void;
  onAirlineChange: (value: string) => void;
  onSearchChange: (value: string) => void;
  resultCount: number;
};

export function PackageFilters({
  durations,
  airlines,
  selectedDuration,
  selectedAirline,
  search,
  onDurationChange,
  onAirlineChange,
  onSearchChange,
  resultCount,
}: PackageFiltersProps) {
  const chipClassName =
    "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200";

  return (
    <div className="dark-card p-5 sm:p-6">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">Filter packages</p>
            <p className="mt-2 text-sm text-mist">
              {resultCount} package set{resultCount === 1 ? "" : "s"} matching your current filters
            </p>
          </div>
          <label className="relative block w-full max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" />
            <input
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search by hotel name"
              className="w-full rounded-full border border-white/10 bg-white/6 py-3 pl-11 pr-4 text-sm text-ivory placeholder:text-mist"
            />
          </label>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-mist">Duration</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["All", ...durations].map((duration) => {
                const active = selectedDuration === duration;
                return (
                  <button
                    key={duration}
                    type="button"
                    onClick={() => onDurationChange(duration)}
                    className={cn(
                      chipClassName,
                      active
                        ? "border-gold/40 bg-gold/10 text-gold"
                        : "border-white/10 bg-white/5 text-mist hover:border-white/20 hover:text-ivory",
                    )}
                  >
                    {duration}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-mist">Airline</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["All", ...airlines].map((airline) => {
                const active = selectedAirline === airline;
                return (
                  <button
                    key={airline}
                    type="button"
                    onClick={() => onAirlineChange(airline)}
                    className={cn(
                      chipClassName,
                      active
                        ? "border-emerald/40 bg-emerald/10 text-emerald-light"
                        : "border-white/10 bg-white/5 text-mist hover:border-white/20 hover:text-ivory",
                    )}
                  >
                    {airline}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
