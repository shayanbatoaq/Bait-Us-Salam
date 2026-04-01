'use client';

type PricingGridItem = {
  label: string;
  value: string;
  meta?: string;
};

type PricingGridProps = {
  items: PricingGridItem[];
  className?: string;
};

export function PricingGrid({ items, className }: PricingGridProps) {
  return (
    <div className={className}>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={`${item.label}-${item.value}`}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-gold">{item.label}</p>
            <p className="mt-2 text-base font-semibold text-ivory">{item.value}</p>
            {item.meta ? <p className="mt-1 text-xs text-mist">{item.meta}</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
