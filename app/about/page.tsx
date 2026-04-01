import { ShieldCheck, Sparkles, Users } from "lucide-react";

import { CTASection } from "@/components/shared/CTASection";
import { HeroSection } from "@/components/shared/HeroSection";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { company } from "@/data/company";

export const metadata = {
  title: "About",
};

const supportIcons = [Users, ShieldCheck, Sparkles];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        eyebrow="About Bait Us Salam"
        title="A premium sacred-travel presentation focused only on Hajj and Umrah"
        description="Bait Us Salam Pvt Ltd is positioned around trust, structure, and spiritual seriousness, offering Karachi-based pilgrims a clearer path to selecting the right Hajj or Umrah journey."
        stats={[
          { value: "Hajj & Umrah", label: "Exclusive specialization" },
          { value: "Karachi", label: "Departure-centered support" },
          { value: "Multi-tier", label: "Economy to premium options" },
        ]}
        aside={
          <div className="dark-card p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-gold">Company Introduction</p>
            <p className="mt-4 text-sm leading-7 text-mist">{company.positioning}</p>
          </div>
        }
      />

      <section className="section-gap pt-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Mission, Vision, Values"
              title="Built around clarity, care, and the dignity of the journey"
              description="Rather than looking like a generic holiday operator, the About page keeps the emphasis on sacred travel discipline, guidance, and trust."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {company.aboutValues.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="light-card h-full p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-gold">{item.title}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Trust & Accreditation"
              title="A presentation ready for official trust assets and accreditation visuals"
              description="The site structure leaves space for published logos and certificates while already signaling a clean, compliance-minded, trustworthy presence."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {company.accreditations.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.05}>
                <div className="dark-card h-full p-6 text-center">
                  <p className="font-display text-3xl text-gold">{item.label.slice(0, 2)}</p>
                  <p className="mt-4 text-sm font-semibold text-ivory">{item.label}</p>
                  <p className="mt-2 text-sm text-mist">{item.subtitle}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <div className="hero-panel overflow-hidden rounded-[32px] p-8 sm:p-10">
                <div className="absolute inset-0 soft-pattern opacity-[0.06]" />
                <div className="relative">
                  <SectionHeading
                    eyebrow="What Makes Us Different"
                    title="Specialized sacred travel positioning instead of broad tourism marketing"
                    description="The company differentiates itself through focused service design, structured package presentation, and a tone that respects the spiritual nature of Hajj and Umrah."
                  />
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5">
              {company.differentiators.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="dark-card p-6">
                    <h3 className="text-lg font-semibold text-ivory">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-mist">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Support & Guidance"
              title="A polished placeholder area for travel desk, training team, and pilgrim guidance"
              description="This section is intentionally ready for staff profiles, scholar guidance, or support-team introductions once those materials are approved for publication."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {company.supportPillars.map((item, index) => {
              const Icon = supportIcons[index % supportIcons.length];

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

      <CTASection
        eyebrow="Discuss Your Journey"
        title="Speak with the travel desk for a package recommendation shaped around comfort and budget"
        description="Whether you are planning first-time Umrah or comparing Hajj tiers, the contact route is designed to move quickly from browsing into personal guidance."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/umrah-packages"
        secondaryLabel="View Umrah Packages"
      />
    </>
  );
}
