import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "gold" | "emerald" | "neutral";
};

export function Badge({ children, className, tone = "gold" }: BadgeProps) {
  const toneClasses = {
    gold: "border-gold/30 bg-gold/10 text-gold",
    emerald: "border-emerald/30 bg-emerald/10 text-emerald-light",
    neutral: "border-white/12 bg-white/6 text-ivory",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em]",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
