import { type HajjPackage } from "@/data/types";
import { formatPkr } from "@/lib/utils";

type PackageComparisonTableProps = {
  packages: HajjPackage[];
};

export function PackageComparisonTable({ packages }: PackageComparisonTableProps) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-white/10 bg-white/6">
              <th className="px-5 py-4 text-sm font-semibold text-ivory">Package</th>
              <th className="px-5 py-4 text-sm font-semibold text-ivory">Duration</th>
              <th className="px-5 py-4 text-sm font-semibold text-ivory">Maktab</th>
              <th className="px-5 py-4 text-sm font-semibold text-ivory">Zone</th>
              <th className="px-5 py-4 text-sm font-semibold text-ivory">Starting Price</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((item) => (
              <tr key={item.id} className="border-b border-white/8 last:border-b-0">
                <td className="px-5 py-4 text-sm text-ivory">{item.name}</td>
                <td className="px-5 py-4 text-sm text-mist">{item.duration}</td>
                <td className="px-5 py-4 text-sm text-mist">{item.maktab}</td>
                <td className="px-5 py-4 text-sm text-mist">{item.zone}</td>
                <td className="px-5 py-4 text-sm font-semibold text-gold">{formatPkr(item.startingPrice)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
