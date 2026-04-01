import { type OccupancyKey } from "@/data/types";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatPkr(amount: number) {
  return `PKR ${new Intl.NumberFormat("en-PK").format(amount)}`;
}

export function formatOccupancyLabel(key: OccupancyKey) {
  const labels: Record<OccupancyKey, string> = {
    sharing: "Sharing",
    quad: "Quad",
    triple: "Triple",
    double: "Double",
  };

  return labels[key];
}

export function getWhatsAppHref(message: string) {
  return `https://wa.me/923212550100?text=${encodeURIComponent(message)}`;
}

export function buildInquiryMessage(
  title: string,
  details: Array<[string, string | undefined | null]>,
) {
  const lines = details
    .filter(([, value]) => Boolean(value))
    .map(([label, value]) => `${label}: ${value}`);

  return [title, ...lines].join("\n");
}
