import type { WorkEnvironment } from "@/types/reading";
import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";

export default function WorkEnvironmentSection({ data }: { data: WorkEnvironment }) {
  return (
    <RevealSection className="py-12">
      <SectionHeader title="Where You Thrive" />

      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Thrives */}
        <div>
          <h4 className="mb-3 text-sm font-semibold text-gray-700">
            Environments where you peak
          </h4>
          <ul className="flex flex-col gap-2">
            {data.thrives.map((t, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-0.5 text-gold">✦</span>{t}
              </li>
            ))}
          </ul>
        </div>

        {/* Drains */}
        <div>
          <h4 className="mb-3 text-sm font-semibold text-gray-700">
            Environments that drain you
          </h4>
          <ul className="flex flex-col gap-2">
            {data.drains.map((d, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-0.5 text-red-300">●</span>{d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Ideal structure */}
      <div className="mx-auto mt-6 max-w-3xl rounded-2xl border-l-[3px] border-primary bg-lavender/50 p-5">
        <p className="text-sm leading-relaxed text-gray-700">{data.idealStructure}</p>
      </div>
    </RevealSection>
  );
}
