import type { CareerPersonality } from "@/types/reading";
import RevealSection from "./RevealSection";

export default function CareerPersonalitySection({
  data,
}: {
  data: CareerPersonality;
}) {
  return (
    <RevealSection className="py-6 text-center">
      <div className="mx-auto max-w-3xl rounded-3xl border border-primary/10 bg-white/80 px-6 py-10 shadow-sm backdrop-blur-sm sm:px-12 sm:py-12">
        <div className="mb-5 flex items-center justify-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold animate-pulse">
            Your Career Personality
          </span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-5xl">
          {data.title}
        </h1>
        <div className="mx-auto mt-6 max-w-2xl border-t border-gray-100/50 pt-6">
          <p className="text-sm font-light leading-relaxed text-gray-700 sm:text-base">
            {data.explanation}
          </p>
        </div>
      </div>
    </RevealSection>
  );
}
