import { CTAButton } from "@/components/shared/CTAButton";
import { SectionHeading } from "@/components/shared/SectionHeading";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTASection({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CTASectionProps) {
  return (
    <section className="section-gap">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="hero-panel overflow-hidden rounded-[32px] px-6 py-12 sm:px-10 lg:px-14">
          <div className="absolute inset-0 bg-[url('/patterns/islamic-geometry.svg')] bg-[length:190px] opacity-[0.07]" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(15,118,110,0.22),transparent_62%)]" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
              className="max-w-3xl"
            />
            <div className="flex flex-wrap gap-3">
              <CTAButton href={primaryHref}>{primaryLabel}</CTAButton>
              {secondaryHref && secondaryLabel ? (
                <CTAButton href={secondaryHref} variant="secondary">
                  {secondaryLabel}
                </CTAButton>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
