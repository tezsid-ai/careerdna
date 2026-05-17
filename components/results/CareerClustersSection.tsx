import type { CareerCluster } from "@/types/reading";
import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";

export default function CareerClustersSection({ data }: { data: CareerCluster[] }) {
  return (
    <RevealSection className="py-12">
      <SectionHeader title="Your Career Clusters" />
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        {data.map((c, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
          >
            <div className="h-0.5 bg-gradient-to-r from-gold to-gold-light" />
            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <h4 className="text-base font-semibold text-primary">{c.name}</h4>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">{c.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 sm:max-w-[200px]">
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
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
