import type { GrowthPath } from "@/types/reading";
import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";

const CARDS: { key: keyof GrowthPath; label: string; color: string; border: string }[] = [
  { key: "emotionalBlocker", label: "What May Hold You Back", color: "text-red-400", border: "border-red-200" },
  { key: "hiddenStrength", label: "Your Hidden Strength", color: "text-emerald-500", border: "border-emerald-200" },
  { key: "evolutionDirection", label: "Where You're Headed", color: "text-primary", border: "border-primary/30" },
];

export default function GrowthPathSection({ data }: { data: GrowthPath }) {
  return (
    <RevealSection className="py-12">
      <SectionHeader title="Your Growth Path" />
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        {CARDS.map((c) => (
          <div
            key={c.key}
            className={`rounded-2xl border-l-[3px] ${c.border} bg-white p-6 shadow-sm`}
          >
            <span className={`text-[10px] font-semibold uppercase tracking-widest ${c.color}`}>
              {c.label}
            </span>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              {data[c.key]}
            </p>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
