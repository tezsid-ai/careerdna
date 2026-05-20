import type { CareerCluster } from "@/types/reading";
import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";

export default function CareerClustersSection({
  data,
}: {
  data: CareerCluster[];
}) {
  return (
    <RevealSection className="py-12">
      <SectionHeader title="Career Clusters" />
      <div className="mx-auto flex max-w-4xl flex-col gap-4">
        {data.map((c, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
          >
            <div className="h-0.5 bg-gradient-to-r from-gold to-gold-light" />
            <div className="grid gap-4 p-6 sm:grid-cols-[1fr,180px] sm:items-start">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h4 className="text-base font-semibold text-primary">
                    {c.name}
                  </h4>
                  <span className="rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                    {c.matchPercent}% Match
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {c.reason}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.exampleRoles.map((r, j) => (
                    <span
                      key={j}
                      className="rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-right text-sm font-semibold text-gray-700">
                  {c.matchPercent}%
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary-deep"
                    style={{ width: `${c.matchPercent}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
