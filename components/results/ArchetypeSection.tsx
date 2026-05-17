import type { Archetype } from "@/types/reading";
import RevealSection from "./RevealSection";

export default function ArchetypeSection({ data }: { data: Archetype }) {
  return (
    <RevealSection className="py-16 text-center">
      {/* Small mandala accent */}
      <div className="mx-auto mb-8 h-24 w-24">
        <svg viewBox="0 0 100 100" fill="none" style={{ animation: "spin-slow 30s linear infinite" }}>
          <circle cx="50" cy="50" r="45" stroke="#4f3b8b" strokeWidth="0.5" opacity="0.2" />
          <circle cx="50" cy="50" r="32" stroke="#c9a84c" strokeWidth="0.4" opacity="0.15" />
          <circle cx="50" cy="50" r="18" stroke="#4f3b8b" strokeWidth="0.3" opacity="0.12" />
          <polygon points="50,10 90,70 10,70" stroke="#c9a84c" strokeWidth="0.3" fill="none" opacity="0.1" />
          <polygon points="50,90 10,30 90,30" stroke="#c9a84c" strokeWidth="0.3" fill="none" opacity="0.1" />
        </svg>
      </div>

      <h1 className="mb-4 text-4xl font-bold text-primary sm:text-5xl">
        {data.name}
      </h1>
      <p className="mb-6 text-xl font-light italic text-muted">
        {data.tagline}
      </p>
      <p className="mx-auto max-w-2xl text-base font-normal leading-relaxed text-gray-700">
        {data.description}
      </p>

      {/* Soft divider */}
      <div className="mx-auto mt-12 h-px w-24 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </RevealSection>
  );
}
