import { type HajjPackage } from "@/data/types";
import { formatPkr } from "@/lib/utils";

type HajjOverviewCardsProps = {
  packages: HajjPackage[];
};

export function HajjOverviewCards({ packages }: HajjOverviewCardsProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
      {packages.map((item) => (
        <div key={item.id} className="dark-card p-6">
          <p className="text-xs uppercase tracking-[0.28em] text-gold">Maktab {item.maktab}</p>
          <h3 className="mt-4 font-display text-2xl text-ivory">{item.name}</h3>
          <div className="mt-5 grid gap-2 text-sm text-mist">
            <p>Duration: {item.duration}</p>
            <p>Zone: {item.zone}</p>
            <p>From: {formatPkr(item.startingPrice)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
