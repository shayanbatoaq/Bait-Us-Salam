import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  icon?: boolean;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className,
  icon = true,
}: CTAButtonProps) {
  const sharedClassName =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-[0.02em] transition-all duration-300";

  const variantClassName = {
    primary:
      "bg-gold text-surface-dark shadow-[0_14px_34px_rgba(201,162,39,0.28)] hover:-translate-y-0.5 hover:bg-[#d7b84f]",
    secondary:
      "border border-white/14 bg-white/8 text-ivory backdrop-blur hover:-translate-y-0.5 hover:border-gold/40 hover:bg-white/12",
    ghost:
      "text-ivory/88 hover:-translate-y-0.5 hover:text-ivory",
  };

  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  const content = (
    <>
      <span>{children}</span>
      {icon ? <ArrowRight className="h-4 w-4" /> : null}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className={cn(sharedClassName, variantClassName[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(sharedClassName, variantClassName[variant], className)}>
      {content}
    </Link>
  );
}
