import type { TopCareerMatch } from "@/types/reading";
import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";

export default function TopCareerMatchSection({
  data,
}: {
  data: TopCareerMatch;
}) {
  return (
    <RevealSection className="py-12">
      <SectionHeader title="Top Career Match" />
      <div className="mx-auto grid max-w-4xl gap-6 rounded-3xl border border-primary/10 bg-white p-6 shadow-sm sm:grid-cols-[1.2fr,240px] sm:items-center">
        <div>
          <h3 className="text-2xl font-semibold text-primary sm:text-3xl">
            {data.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-700">
            {data.reason}
          </p>
          <p className="mt-3 text-xs font-medium text-primary/70">
            {data.supportingSignal}
          </p>
        </div>

        <div className="rounded-2xl bg-lavender/50 p-5 text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-primary/20">
            <span className="text-2xl font-bold text-primary">
              {data.matchPercent}%
            </span>
          </div>
          <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-primary/60">
            Match Score
          </p>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-primary-deep"
              style={{ width: `${data.matchPercent}%` }}
            />
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
