import type { NaturalStrength } from "@/types/reading";
import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";

export default function NaturalStrengthsSection({
  data,
}: {
  data: NaturalStrength[];
}) {
  return (
    <RevealSection className="py-8">
      <SectionHeader title="Your Natural Strengths" />
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        {data.map((str, i) => (
          <div
            key={i}
            className="flex items-start gap-4 rounded-2xl border border-gray-50 bg-white p-5 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-primary/15"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lavender/50 text-gold">
              <span className="text-base font-bold">✦</span>
            </div>

            <div>
              <h4 className="text-base font-semibold text-primary">
                {str.name}
              </h4>
              <p className="mt-1.5 text-sm font-light leading-relaxed text-gray-600">
                {str.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
