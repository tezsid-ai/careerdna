import type { Strength } from "@/types/reading";
import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";

export default function StrengthsSection({ data }: { data: Strength[] }) {
  return (
    <RevealSection className="py-12">
      <SectionHeader title="Your Natural Strengths" />
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
        {data.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
          >
            <span className="text-xs font-bold text-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h4 className="mt-2 text-base font-semibold text-primary">{s.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.description}</p>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
