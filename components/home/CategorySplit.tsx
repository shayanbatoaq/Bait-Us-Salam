import { Landmark, MoonStar } from "lucide-react";

import { CTAButton } from "../shared/CTAButton";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";

const cards = [
  {
    icon: MoonStar,
    title: "Umrah Packages",
    description:
      "Comparison-friendly packages with flight details, hotel pairings, room occupancy pricing, and curated comfort levels.",
    href: "/umrah-packages",
  },
  {
    icon: Landmark,
    title: "Hajj Packages",
    description:
      "Structured Hajj options from premium 5-star arrangements to value-focused tiers, with detailed inclusions and schedules.",
    href: "/hajj-packages",
  },
];

export function CategorySplit() {
  return (
    <section className="section-gap">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Journey Types"
            title="A dedicated site architecture for the only two journeys we offer"
            description="Every route, section, and CTA is focused on Hajj and Umrah only, keeping the experience clear, premium, and uncluttered."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <Reveal key={card.title} delay={index * 0.08}>
                <div className="hero-panel overflow-hidden rounded-[32px] p-8 sm:p-10">
                  <div className="absolute inset-0 soft-pattern opacity-[0.08]" />
                  <div className="absolute -right-14 top-12 h-44 w-44 rounded-full bg-emerald/16 blur-3xl" />
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10">
                      <Icon className="h-7 w-7 text-gold" />
                    </div>
                    <h3 className="mt-6 font-display text-3xl text-ivory">{card.title}</h3>
                    <p className="mt-4 max-w-xl text-base leading-8 text-mist">{card.description}</p>
                    <div className="mt-8">
                      <CTAButton href={card.href}>Explore {card.title}</CTAButton>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
