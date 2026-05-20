import type { ActionPlan } from "@/types/reading";
import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";

export default function ActionPlanSection({ data }: { data: ActionPlan }) {
  return (
    <RevealSection className="py-12">
      <SectionHeader title="Action Plan" />
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
        {data.steps.map((step, i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
          >
            <div className="text-xs font-semibold text-gold">Step {i + 1}</div>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">{step}</p>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
