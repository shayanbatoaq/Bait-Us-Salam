import { PlaneTakeoff } from "lucide-react";

import { Badge } from "@/components/shared/Badge";
import { CTAButton } from "@/components/shared/CTAButton";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { umrahPackageSets } from "@/data/umrahPackages";
import { formatPkr } from "@/lib/utils";

const featuredPackages = umrahPackageSets
  .filter((set) => set.featured)
  .map((set) => ({
    set,
    packageOption: set.packages.find((item) => item.recommended) ?? set.packages.at(-1)!,
  }))
  .slice(0, 4);

export function FeaturedUmrah() {
  return (
    <section className="section-gap">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Umrah"
            title="Selected departures with real hotel pairings and pricing previews"
            description="These featured cards are populated from the shared package data so the homepage reflects actual trip options rather than generic placeholders."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 xl:grid-cols-2">
          {featuredPackages.map(({ set, packageOption }, index) => (
            <Reveal key={`${set.id}-${packageOption.packageNo}`} delay={index * 0.06}>
              <div className="dark-card h-full overflow-hidden p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge>{set.airline}</Badge>
                  <Badge tone="emerald">{set.duration}</Badge>
                  {packageOption.recommended ? <Badge tone="neutral">Recommended</Badge> : null}
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-mist">
                      Package {packageOption.packageNo}
                    </p>
                    <h3 className="mt-2 font-display text-3xl text-ivory">{set.title}</h3>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/6 p-3">
                    <PlaneTakeoff className="h-5 w-5 text-gold" />
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-gold">Makkah Hotel</p>
                    <p className="mt-2 text-base font-semibold text-ivory">{packageOption.makkahHotel}</p>
                    <p className="mt-2 text-sm leading-6 text-mist">{packageOption.makkahNights}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-gold">Madinah Hotel</p>
                    <p className="mt-2 text-base font-semibold text-ivory">{packageOption.madinahHotel}</p>
                    <p className="mt-2 text-sm leading-6 text-mist">{packageOption.madinahNights}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="text-sm text-mist">
                      {set.departure.code} • {set.departure.date} • {set.returnFlight.code}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.24em] text-gold">
                      From {formatPkr(packageOption.occupancy.sharing ?? Object.values(packageOption.occupancy)[0] ?? 0)}
                    </p>
                  </div>
                  <CTAButton href={`/contact?travelType=Umrah&package=${encodeURIComponent(`${set.title} Package ${packageOption.packageNo}`)}`}>
                    Inquire Now
                  </CTAButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
