import Link from "next/link";
import type { Archetype } from "@/types/reading";
import RevealSection from "./RevealSection";

interface Props {
  closingMessage: string;
  archetype: Archetype;
}

export default function ClosingSection({ closingMessage, archetype }: Props) {
  return (
    <RevealSection className="py-16 text-center">
      {/* Decorative stars */}
      <p className="mb-6 text-sm tracking-[0.5em] text-gold">✦ ✦ ✦</p>

      <p className="mx-auto max-w-2xl text-xl font-light italic leading-relaxed text-gray-700">
        {closingMessage}
      </p>

      {/* Divider */}
      <div className="mx-auto my-10 h-px w-24 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Share section */}
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        Share Your Archetype
      </h3>
      <div className="mx-auto max-w-sm rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <p className="text-2xl font-bold text-primary">{archetype.name}</p>
        <p className="mt-1 text-sm italic text-muted">{archetype.tagline}</p>
      </div>

      <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <button
          onClick={() => alert("Coming soon!")}
          className="cursor-pointer rounded-full border border-primary/20 px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary/5"
        >
          Copy My Reading Link
        </button>
        <Link
          href="/reading"
          className="rounded-full bg-gradient-to-r from-primary-deep to-primary px-6 py-3 text-sm font-medium text-white transition hover:scale-105"
        >
          Retake Reading
        </Link>
      </div>
    </RevealSection>
  );
}
