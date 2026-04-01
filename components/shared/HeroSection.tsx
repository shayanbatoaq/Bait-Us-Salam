import { Badge } from "@/components/shared/Badge";
import { cn } from "@/lib/utils";

type HeroStat = {
  label: string;
  value: string;
};

type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  stats?: HeroStat[];
  actions?: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
};

export function HeroSection({
  eyebrow,
  title,
  description,
  stats,
  actions,
  aside,
  className,
}: HeroSectionProps) {
  return (
    <section className={cn("section-gap pb-8 pt-28 sm:pt-32", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="hero-panel overflow-hidden rounded-[36px] p-8 sm:p-10 lg:p-14">
          <div className="absolute inset-0 bg-[url('/patterns/islamic-geometry.svg')] bg-[length:180px] bg-center opacity-[0.08]" />
          <div className="absolute inset-y-10 right-8 hidden w-1/3 rounded-full bg-emerald/18 blur-3xl lg:block" />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
            <div className="max-w-3xl">
              {eyebrow ? <Badge>{eyebrow}</Badge> : null}
              <h1 className="mt-6 max-w-4xl font-display text-4xl leading-tight text-ivory sm:text-5xl lg:text-[4rem]">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-mist sm:text-lg">{description}</p>
              {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
              {stats?.length ? (
                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 backdrop-blur"
                    >
                      <p className="text-2xl font-semibold text-ivory">{stat.value}</p>
                      <p className="mt-1 text-sm text-mist">{stat.label}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            {aside ? <div className="relative">{aside}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
