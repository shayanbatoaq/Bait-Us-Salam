import { ShieldCheck } from "lucide-react";

import { CTAButton } from "@/components/shared/CTAButton";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { hajjPackages } from "@/data/hajjPackages";
import { formatPkr } from "@/lib/utils";

export function FeaturedHajj() {
  return (
    <section className="section-gap">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Hajj"
            title="All four Hajj package types presented in one premium overview"
            description="Each package preview highlights duration, Maktab, Zone, and the shared starting price so pilgrims can compare tiers quickly before reviewing full details."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {hajjPackages.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05}>
              <div className="dark-card flex h-full flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <ShieldCheck className="h-6 w-6 text-gold" />
                  <p className="text-xs uppercase tracking-[0.24em] text-mist">Zone {item.zone}</p>
                </div>
                <h3 className="mt-5 font-display text-2xl text-ivory">{item.name}</h3>
                <div className="mt-4 grid gap-3 text-sm text-mist">
                  <p>Duration: {item.duration}</p>
                  <p>Maktab: {item.maktab}</p>
                  <p>Starting from: {formatPkr(item.startingPrice)}</p>
                </div>
                <div className="mt-6 pt-2">
                  <CTAButton href={`/contact?travelType=Hajj&package=${encodeURIComponent(item.name)}`}>
                    Discuss Package
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
