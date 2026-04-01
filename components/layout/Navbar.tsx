'use client';

import { AnimatePresence, motion } from "framer-motion";
import { Menu, PhoneCall, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useEffectEvent, useState } from "react";

import { company } from "@/data/company";
import { cn } from "@/lib/utils";

import { CTAButton } from "../shared/CTAButton";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const updateScrolled = useEffectEvent(() => {
    setIsScrolled(window.scrollY > 24);
  });

  useEffect(() => {
    const onScroll = () => updateScrolled();

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "rounded-full border px-4 py-3 transition-all duration-300 sm:px-5",
            isScrolled
              ? "border-white/10 bg-surface-dark/88 shadow-[0_18px_45px_rgba(3,7,18,0.42)] backdrop-blur-xl"
              : "border-white/8 bg-white/[0.03] backdrop-blur-md",
          )}
        >
          <div className="flex items-center justify-between gap-3">
            <Link href="/" className="min-w-0">
              <p className="truncate font-display text-xl text-ivory">Bait Us Salam</p>
              <p className="text-[11px] uppercase tracking-[0.32em] text-mist">Hajj & Umrah</p>
            </Link>

            <nav className="hidden items-center gap-2 lg:flex">
              {company.navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-white/8 text-ivory"
                        : "text-mist hover:bg-white/6 hover:text-ivory",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href="tel:03212550100"
                className="inline-flex items-center gap-2 text-sm font-medium text-mist transition-colors hover:text-ivory"
              >
                <PhoneCall className="h-4 w-4 text-gold" />
                0321-2550100
              </a>
              <CTAButton href="/contact">Inquire Now</CTAButton>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-ivory lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence>
            {isOpen ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden lg:hidden"
              >
                <div className="mt-4 grid gap-2 border-t border-white/10 pt-4">
                  {company.navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-white/8 text-ivory"
                            : "text-mist hover:bg-white/6 hover:text-ivory",
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                  <div className="mt-2 grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <a href="tel:03212550100" className="text-sm text-mist">
                      Call: 0321-2550100
                    </a>
                    <CTAButton href="/contact" className="w-full justify-center">
                      Inquire Now
                    </CTAButton>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
