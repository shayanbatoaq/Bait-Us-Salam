import Image from "next/image";
import { Globe, MapPin, PhoneCall } from "lucide-react";

import { ContactForm } from "@/components/contact/ContactForm";
import { CTAButton } from "@/components/shared/CTAButton";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { HeroSection } from "@/components/shared/HeroSection";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { company } from "@/data/company";
import { contactFaqs } from "@/data/faq";

export const metadata = {
  title: "Contact",
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function ContactPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;

  const initialValues = {
    travelType: typeof query.travelType === "string" ? query.travelType : undefined,
    packageName: typeof query.package === "string" ? query.package : undefined,
    duration: typeof query.duration === "string" ? query.duration : undefined,
    airline: typeof query.airline === "string" ? query.airline : undefined,
    roomType: typeof query.roomType === "string" ? query.roomType : undefined,
    month: typeof query.month === "string" ? query.month : undefined,
  };

  return (
    <>
      <HeroSection
        eyebrow="Contact"
        title="A premium inquiry route designed to move smoothly into conversation"
        description="Use the form, call directly, or open WhatsApp with your details. The page is designed to feel polished while still staying practical and easy to act on."
        stats={[
          { value: "4", label: "Published phone numbers" },
          { value: "Karachi", label: "Office location" },
          { value: "Hajj & Umrah", label: "Travel focus" },
        ]}
        aside={
          <div className="dark-card p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-gold">Quick Contact</p>
            <div className="mt-4 grid gap-3 text-sm text-mist">
              <p>Call: 0321-2550100</p>
              <p>WhatsApp: 0321-2550100</p>
              <p>Website: {company.website}</p>
            </div>
          </div>
        }
      />

      <section className="section-gap pt-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Call Us",
                value: "0321-2550100 / 0300-0724224",
                icon: PhoneCall,
              },
              {
                title: "PTCL",
                value: "021-36321750 / 021-36333194",
                icon: PhoneCall,
              },
              {
                title: "Visit Website",
                value: company.website,
                icon: Globe,
              },
              {
                title: "Office Address",
                value: company.address,
                icon: MapPin,
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="dark-card h-full p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10">
                      <Icon className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-ivory">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-mist">{item.value}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <div className="grid gap-5">
              <div className="hero-panel overflow-hidden rounded-[32px] p-6 sm:p-8">
                <div className="absolute inset-0 soft-pattern opacity-[0.06]" />
                <div className="relative">
                  <SectionHeading
                    eyebrow="Office & Business Details"
                    title="A clean business presence that stays easy to reach"
                    description="The contact side of the site keeps practical details front and center so visitors can confidently move from browsing to action."
                  />
                  <div className="mt-8 grid gap-4">
                    {company.contactMethods.map((method) => (
                      <a
                        key={`${method.label}-${method.value}`}
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-mist transition-colors hover:text-ivory"
                      >
                        <span className="font-semibold text-ivory">{method.label}:</span> {method.value}
                      </a>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <CTAButton href="tel:03212550100">Call Now</CTAButton>
                    <CTAButton href="https://wa.me/923212550100" variant="secondary">
                      WhatsApp
                    </CTAButton>
                  </div>
                </div>
              </div>

              <div className="dark-card overflow-hidden p-0">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/illustrations/map-placeholder.svg"
                    alt="Map placeholder"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="border-t border-white/10 p-5 text-sm leading-7 text-mist">
                  Office location placeholder: {company.address}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm initialValues={initialValues} />
          </Reveal>
        </div>
      </section>

      <section className="section-gap">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Contact FAQ"
              title="A few final answers before you reach out"
              description="These quick clarifications help visitors choose the fastest contact route and understand what details to have ready."
              align="center"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <FAQAccordion className="mt-10" items={contactFaqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
