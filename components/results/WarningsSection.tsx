import type { Warning } from "@/types/reading";
import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";

export default function WarningsSection({ data }: { data: Warning[] }) {
  return (
    <RevealSection className="py-12">
      <SectionHeader title="Honest Insights" />
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        {data.map((w, i) => (
          <div
            key={i}
            className="rounded-2xl border-l-[3px] border-gold bg-[#fdf6e3]/70 p-5"
          >
            <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-800">
              <span className="text-gold">✦</span>{w.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{w.description}</p>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
