import type { BestIndustry } from "@/types/reading";
import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";

export default function BestIndustriesSection({
  data,
}: {
  data: BestIndustry[];
}) {
  return (
    <RevealSection className="py-8">
      <SectionHeader title="Best Industries For You" />
      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {data.map((ind, i) => (
          <div
            key={i}
            className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary/20 hover:shadow-md"
          >
            <div>
              <h4 className="text-base font-semibold text-primary">
                {ind.name}
              </h4>
              <p className="mt-2 text-sm font-light leading-relaxed text-gray-600">
                {ind.reason}
              </p>
            </div>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
