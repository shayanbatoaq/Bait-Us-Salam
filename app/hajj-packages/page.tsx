import { ContactForm } from "@/components/contact/ContactForm";
import { HajjOverviewCards } from "@/components/packages/HajjOverviewCards";
import { HajjPackageAccordion } from "@/components/packages/HajjPackageAccordion";
import { PackageComparisonTable } from "@/components/packages/PackageComparisonTable";
import { CTASection } from "@/components/shared/CTASection";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { HeroSection } from "@/components/shared/HeroSection";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { hajjFaqs } from "@/data/faq";
import { hajjPackages } from "@/data/hajjPackages";

export const metadata = {
  title: "Hajj Packages",
};

export default function HajjPackagesPage() {
  return (
    <>
      <HeroSection
        eyebrow="Hajj Packages"
        title="Four Hajj package types presented with structured premium clarity"
        description="From Titanium 5-Star to Aziziyah and 3-star options, the page organizes the shared Hajj data into comparison-friendly layers while preserving pricing and notes exactly as provided."
        stats={[
          { value: "4", label: "Package types" },
          { value: "Zone 1 + Zone 5", label: "Shared zone coverage" },
          { value: "15-17 Days", label: "Longest listed duration" },
        ]}
        aside={
          <div className="dark-card p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-gold">Page Coverage</p>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-mist">
              <li>• Overview cards</li>
              <li>• Premium comparison table</li>
              <li>• Expandable package details</li>
              <li>• Add-ons, hotels, schedule, and notes</li>
            </ul>
          </div>
        }
      />

      <section className="section-gap pt-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Overview Strip"
              title="A quick view of all four Hajj options"
              description="This strip gives a fast sense of duration, zone, and pricing range before you move into the deeper package comparison and expandable details below."
            />
          </Reveal>
          <div className="mt-10">
            <HajjOverviewCards packages={hajjPackages} />
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Comparison Table"
              title="A premium table view for faster package comparison"
              description="Start with the summary rows, then expand the cards below for room prices, inclusions, hotel details, add-ons, tentative schedules, and important notes."
            />
          </Reveal>
          <div className="mt-10">
            <PackageComparisonTable packages={hajjPackages} />
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Detailed Packages"
              title="Expandable cards with shared room pricing, facilities, and schedules"
              description="Each package card below opens into a complete detail layer so pilgrims can evaluate not only the price, but also the operational structure and service profile of the journey."
            />
          </Reveal>
          <div className="mt-10">
            <HajjPackageAccordion packages={hajjPackages} />
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <Reveal>
            <div className="dark-card p-6 sm:p-8">
              <SectionHeading
                eyebrow="Hajj FAQ"
                title="Important clarification before final inquiry"
                description="These answers reinforce how pricing notes and schedule details are being handled on the page."
              />
              <FAQAccordion className="mt-8" items={hajjFaqs} />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <ContactForm initialValues={{ travelType: "Hajj" }} />
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Need A Recommendation"
        title="Discuss the right Hajj tier for your comfort, room preference, and budget"
        description="The final step is intentionally simple: compare carefully, then speak with the team for the package that best fits your circumstances."
        primaryHref="/contact?travelType=Hajj"
        primaryLabel="Start Hajj Inquiry"
        secondaryHref="/umrah-packages"
        secondaryLabel="View Umrah Packages"
      />
    </>
  );
}
