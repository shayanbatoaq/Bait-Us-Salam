import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={cn(isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "mt-3 text-balance font-display text-3xl leading-tight text-ivory sm:text-4xl lg:text-[2.9rem]",
          isCentered && "mx-auto",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-8 text-mist",
            isCentered && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
