import type { WorkEnvironment } from "@/types/reading";
import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";

export default function WorkEnvironmentSection({
  data,
}: {
  data: WorkEnvironment;
}) {
  return (
    <RevealSection className="py-12">
      <SectionHeader title="Where You Thrive" />

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h4 className="mb-3 text-sm font-semibold text-gray-700">
            You Thrive In
          </h4>
          <ul className="flex flex-col gap-2">
            {data.thrives.map((t, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-gray-600"
              >
                <span className="mt-0.5 text-gold">✦</span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h4 className="mb-3 text-sm font-semibold text-gray-700">
            You May Struggle In
          </h4>
          <ul className="flex flex-col gap-2">
            {data.drains.map((d, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-gray-600"
              >
                <span className="mt-0.5 text-red-300">●</span>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </RevealSection>
  );
}
