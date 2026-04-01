'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import { CTAButton } from "@/components/shared/CTAButton";
import { company } from "@/data/company";

export function Hero() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 700], [0, 120]);
  const cardY = useTransform(scrollY, [0, 700], [0, -40]);

  return (
    <section className="relative min-h-screen px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="hero-panel relative min-h-[82vh] overflow-hidden rounded-[36px]">
          <motion.div style={{ y: backgroundY }} className="absolute inset-0">
            <Image
              src="/illustrations/sacred-arches.svg"
              alt="Abstract sacred architecture illustration"
              fill
              priority
              className="object-cover object-center opacity-75"
            />
          </motion.div>
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(5,10,24,0.9)_0%,rgba(5,10,24,0.66)_40%,rgba(5,10,24,0.82)_100%)]" />
          <div className="absolute inset-0 bg-[url('/patterns/islamic-geometry.svg')] bg-[length:210px] opacity-[0.06]" />

          <div className="relative grid min-h-[82vh] gap-12 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[minmax(0,1fr)_370px] lg:px-12 lg:py-14">
            <div className="flex flex-col justify-center">
              <div className="inline-flex max-w-max items-center rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                Karachi departures • Hajj & Umrah only
              </div>
              <h1 className="mt-8 max-w-4xl font-display text-4xl leading-tight text-ivory sm:text-5xl lg:text-[4.6rem]">
                Premium Hajj & Umrah Journeys from Karachi
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-mist sm:text-lg">
                Trusted sacred travel with carefully curated hotel tiers, guided support, and
                thoughtfully structured packages designed to keep your focus on the journey that
                matters most.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTAButton href="/umrah-packages">Explore Umrah Packages</CTAButton>
                <CTAButton href="/hajj-packages" variant="secondary">
                  View Hajj Packages
                </CTAButton>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {company.trustHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-sm font-medium text-ivory backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <motion.div style={{ y: cardY }} className="relative flex items-center lg:justify-end">
              <div className="w-full rounded-[30px] border border-white/12 bg-surface-dark/76 p-6 shadow-[0_20px_55px_rgba(3,7,18,0.46)] backdrop-blur-xl sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                  Quick inquiry
                </p>
                <h2 className="mt-3 font-display text-3xl text-ivory">Find your package fit</h2>
                <p className="mt-3 text-sm leading-7 text-mist">
                  Share your preferred journey details and move straight to a more tailored
                  consultation.
                </p>
                <form action="/contact" className="mt-6 grid gap-4">
                  <label className="grid gap-2 text-sm text-mist">
                    Travel type
                    <select
                      name="travelType"
                      className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-ivory"
                      defaultValue="Umrah"
                    >
                      <option value="Umrah">Umrah</option>
                      <option value="Hajj">Hajj</option>
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm text-mist">
                    Duration
                    <select
                      name="duration"
                      className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-ivory"
                      defaultValue="21 Days"
                    >
                      <option value="20 Days">20 Days</option>
                      <option value="21 Days">21 Days</option>
                      <option value="22 Days">22 Days</option>
                      <option value="11-12 Days">11-12 Days</option>
                      <option value="13-15 Days">13-15 Days</option>
                      <option value="15-17 Days">15-17 Days</option>
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm text-mist">
                    Room type
                    <select
                      name="roomType"
                      className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-ivory"
                      defaultValue="Quad"
                    >
                      <option value="Sharing">Sharing</option>
                      <option value="Quad">Quad</option>
                      <option value="Triple">Triple</option>
                      <option value="Double">Double</option>
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm text-mist">
                    Preferred month
                    <select
                      name="month"
                      className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-ivory"
                      defaultValue="February"
                    >
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="Dhul Hijjah">Dhul Hijjah</option>
                    </select>
                  </label>
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-surface-dark transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#d8b951]"
                  >
                    Get Package Details
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
