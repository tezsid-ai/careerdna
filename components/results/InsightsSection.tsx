import type { NumerologyInsight, AstrologyInsight } from "@/types/reading";
import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";

interface Props {
  numerology: NumerologyInsight;
  astrology: AstrologyInsight;
}

export default function InsightsSection({ numerology, astrology }: Props) {
  return (
    <RevealSection className="py-12">
      <SectionHeader title="Numerology & Astrology Insights" />
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Numerology */}
        <div className="rounded-2xl border border-primary/10 bg-[#f8f7ff] p-6">
          <span className="text-3xl font-bold text-gold">{numerology.lifePathNumber}</span>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-primary/60">
            Life Path Number
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-700">
            {numerology.lifePathMeaning}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 italic">
            {numerology.soulUrgeInsight}
          </p>
        </div>

        {/* Astrology */}
        <div className="rounded-2xl border border-primary/10 bg-[#f8f7ff] p-6">
          <span className="text-2xl font-bold text-primary">{astrology.sunSign}</span>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-primary/60">
            Sun Sign · {astrology.dominantElement} Element
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-700">
            {astrology.sunSignCareerMeaning}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 italic">
            {astrology.elementCareerInfluence}
          </p>
        </div>
      </div>
    </RevealSection>
  );
}
