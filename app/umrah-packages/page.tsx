import { CTASection } from "@/components/shared/CTASection";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { HeroSection } from "@/components/shared/HeroSection";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { UmrahPackagesBrowser } from "@/components/packages/UmrahPackagesBrowser";
import { umrahFaqs } from "@/data/faq";
import { umrahPackageSets } from "@/data/umrahPackages";

export const metadata = {
  title: "Umrah Packages",
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function UmrahPackagesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;
  const duration = typeof query.duration === "string" ? query.duration : undefined;
  const airline = typeof query.airline === "string" ? query.airline : undefined;
  const search = typeof query.search === "string" ? query.search : undefined;

  return (
    <>
      <HeroSection
        eyebrow="Umrah Packages"
        title="Real shared package sets arranged for clearer comparison"
        description="This page keeps each Umrah trip grouped by its own departure and return flights, preserving the data as shared while giving pilgrims a cleaner and more premium browsing experience."
        stats={[
          { value: `${umrahPackageSets.length}`, label: "Trip sets displayed" },
          { value: "Saudia + Fly Jinnah", label: "Airlines represented" },
          { value: "20, 21, 22 Days", label: "Duration filters available" },
        ]}
        aside={
          <div className="dark-card p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-gold">What You Can Filter</p>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-mist">
              <li>• Duration chips</li>
              <li>• Airline chips</li>
              <li>• Hotel name search</li>
              <li>• Recommended package highlighting</li>
            </ul>
          </div>
        }
      />

      <section className="section-gap pt-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <UmrahPackagesBrowser
            sets={umrahPackageSets}
            initialDuration={duration}
            initialAirline={airline}
            initialSearch={search}
          />
        </div>
      </section>

      <section className="section-gap">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Umrah FAQ"
              title="Helpful clarification before you commit to a departure"
              description="The answers below explain how the page is organized and how the shared package details are presented without silently changing them."
              align="center"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <FAQAccordion className="mt-10" items={umrahFaqs} />
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Need Guidance"
        title="Shortlist a package, then move to personal consultation"
        description="The current package layout is built to help you compare first and inquire second, with the original hotel and flight pairing integrity kept intact."
        primaryHref="/contact?travelType=Umrah"
        primaryLabel="Inquire About Umrah"
        secondaryHref="/hajj-packages"
        secondaryLabel="Compare Hajj Options"
      />
    </>
  );
}
