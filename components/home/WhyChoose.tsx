import {
  Building2,
  Bus,
  MoonStar,
  PlaneTakeoff,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

import { company } from "@/data/company";

import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  plane: PlaneTakeoff,
  building: Building2,
  users: Users,
  bus: Bus,
  moon: MoonStar,
  sparkles: Sparkles,
};

export function WhyChoose() {
  return (
    <section className="section-gap">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Bait Us Salam"
            title="A service style shaped for sacred travel, not ordinary tourism"
            description="The visual system stays premium and calm, while the content emphasizes the practical support pillars pilgrims actually need before departure."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {company.homeReasons.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="dark-card h-full p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ivory">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-mist">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
