import type { CareerReport } from "@/types/reading";
import ArchetypeSection from "@/components/results/ArchetypeSection";
import StrengthsSection from "@/components/results/StrengthsSection";
import WorkEnvironmentSection from "@/components/results/WorkEnvironmentSection";
import CareerClustersSection from "@/components/results/CareerClustersSection";
import WarningsSection from "@/components/results/WarningsSection";
import GrowthPathSection from "@/components/results/GrowthPathSection";
import ContradictionSection from "@/components/results/ContradictionSection";
import InsightsSection from "@/components/results/InsightsSection";
import ClosingSection from "@/components/results/ClosingSection";

export default function ResultsStep({ report }: { report: CareerReport }) {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-20">
      <ArchetypeSection data={report.archetype} />
      <StrengthsSection data={report.strengths} />
      <WorkEnvironmentSection data={report.workEnvironment} />
      <CareerClustersSection data={report.careerClusters} />
      <WarningsSection data={report.warnings} />
      <GrowthPathSection data={report.growthPath} />

      {report.contradictionInsight && (
        <ContradictionSection text={report.contradictionInsight} />
      )}

      <InsightsSection
        numerology={report.numerologyInsight}
        astrology={report.astrologyInsight}
      />

      <ClosingSection
        closingMessage={report.closingMessage}
        archetype={report.archetype}
      />
    </div>
  );
}
