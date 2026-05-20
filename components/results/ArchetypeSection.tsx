import type { Archetype } from "@/types/reading";
import RevealSection from "./RevealSection";

export default function ArchetypeSection({ data }: { data: Archetype }) {
  return (
    <RevealSection className="py-6 text-center">
      <div className="mx-auto max-w-3xl rounded-3xl border border-primary/10 bg-white px-6 py-10 shadow-sm">
        <div className="mb-5 flex items-center justify-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Your Career Personality
          </span>
        </div>

        <h1 className="text-4xl font-bold text-primary sm:text-5xl">
          {data.name}
        </h1>
        <div className="mx-auto mt-5 max-w-2xl">
          <p className="mt-2 text-sm font-medium leading-relaxed text-gray-700 sm:text-base">
            {data.tagline}
          </p>
        </div>
      </div>
    </RevealSection>
  );
}
