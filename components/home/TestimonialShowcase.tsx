import { company } from "@/data/company";

import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";

export function TestimonialShowcase() {
  return (
    <section className="section-gap">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials Placeholder"
            title="A refined space for pilgrim stories and trust-building social proof"
            description="These cards are intentionally written as polished placeholders so you can later replace them with approved customer reviews without changing the layout."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {company.testimonials.map((item, index) => (
            <Reveal key={`${item.name}-${index}`} delay={index * 0.05}>
              <div className="light-card h-full p-6">
                <p className="font-display text-2xl text-heading-dark">“</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.quote}</p>
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <p className="text-sm font-semibold text-heading-dark">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
