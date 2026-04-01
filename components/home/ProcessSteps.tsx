import { company } from "@/data/company";

import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";

export function ProcessSteps() {
  return (
    <section className="section-gap">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title="A simple, guided path from package selection to departure"
            description="The process is intentionally laid out in a calm sequence so new pilgrims can understand the journey without information overload."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-6">
          {company.process.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.04}>
              <div className="dark-card h-full p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">{item.step}</p>
                <h3 className="mt-4 text-lg font-semibold text-ivory">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-mist">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
