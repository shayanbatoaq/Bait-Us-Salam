import Link from "next/link";
import { MessageCircleMore, PhoneCall, Send } from "lucide-react";

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-40 px-4 md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2 rounded-full border border-white/10 bg-surface-dark/90 p-2 shadow-[0_18px_45px_rgba(3,7,18,0.45)] backdrop-blur-xl">
        <a
          href="tel:03212550100"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white/6 px-3 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ivory"
        >
          <PhoneCall className="h-4 w-4 text-gold" />
          Call
        </a>
        <a
          href="https://wa.me/923212550100"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-3 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ivory"
        >
          <MessageCircleMore className="h-4 w-4" />
          WhatsApp
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-3 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-surface-dark"
        >
          <Send className="h-4 w-4" />
          Inquiry
        </Link>
      </div>
    </div>
  );
}
