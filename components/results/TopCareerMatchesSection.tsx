import type { CareerMatch } from "@/types/reading";
import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";

export default function TopCareerMatchesSection({
  data,
}: {
  data: CareerMatch[];
}) {
  return (
    <RevealSection className="py-8">
      <SectionHeader title="Top Career Matches" />
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        {data.map((match, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-primary/20 hover:shadow-md"
          >
            {/* Top gold-lavender accent gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-gold opacity-60 transition-opacity group-hover:opacity-100" />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-primary transition-colors group-hover:text-primary-deep">
                  {match.title}
                </h4>
                <p className="mt-1.5 text-sm font-light leading-relaxed text-gray-600">
                  {match.reason}
                </p>
              </div>

              {match.matchPercent !== undefined && (
                <div className="flex items-center gap-2 self-start rounded-full bg-lavender/50 px-3.5 py-1 text-xs font-semibold text-primary sm:self-center">
                  <span>Match:</span>
                  <span className="font-bold text-gold">
                    {match.matchPercent}%
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
