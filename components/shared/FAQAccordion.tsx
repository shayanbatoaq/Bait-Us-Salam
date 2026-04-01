'use client';

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { type FaqItem } from "@/data/types";
import { cn } from "@/lib/utils";

type FAQAccordionProps = {
  items: FaqItem[];
  className?: string;
};

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <div className={cn("grid gap-4", className)}>
      {items.map((item, index) => {
        const isOpen = activeItem === index;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              onClick={() => setActiveItem(isOpen ? -1 : index)}
            >
              <span className="text-base font-semibold text-ivory">{item.question}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-gold transition-transform duration-300",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <p className="px-5 pb-5 text-sm leading-7 text-mist sm:px-6 sm:text-base">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
