import { company } from "@/data/company";

import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";

export function TrustStrip() {
  return (
    <section className="section-gap pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Trust & Accreditation"
            title="Built on a compliance-led, confidence-first presentation"
            description="Where visual assets are not yet published, the site uses refined placeholder trust marks so the structure stays ready for real badge artwork later."
            align="center"
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3 xl:grid-cols-5">
          {company.accreditations.map((badge, index) => (
            <Reveal key={badge.label} delay={index * 0.06}>
              <div className="dark-card h-full p-5 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 font-display text-xl text-gold">
                  {badge.label
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <p className="mt-4 text-sm font-semibold text-ivory">{badge.label}</p>
                <p className="mt-2 text-sm leading-6 text-mist">{badge.subtitle}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
