import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { generalFaqs } from "@/data/faq";

import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";

export function FAQPreview() {
  return (
    <section className="section-gap">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Frequently Asked"
            title="Clear answers before you decide on the right package"
            description="The FAQ keeps the most common questions concise while leaving deeper inquiry paths open through contact, WhatsApp, and consultation."
            align="center"
          />
        </Reveal>
        <Reveal delay={0.08}>
          <FAQAccordion className="mt-10" items={generalFaqs} />
        </Reveal>
      </div>
    </section>
  );
}
