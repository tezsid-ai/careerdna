import type { CareerReport } from "@/types/reading";
import ArchetypeSection from "@/components/results/ArchetypeSection";
import TopCareerMatchSection from "@/components/results/TopCareerMatchSection";
import CareerClustersSection from "@/components/results/CareerClustersSection";
import WorkEnvironmentSection from "@/components/results/WorkEnvironmentSection";
import ActionPlanSection from "@/components/results/ActionPlanSection";
import BackButton from "@/components/reading/BackButton";

export default function ResultsStep({
  report,
  onBack,
}: {
  report: CareerReport;
  onBack: () => void;
}) {
  return (
    <div className="mx-auto max-w-4xl px-2 pb-10">
      <div className="mt-26 flex items-center justify-start">
        <BackButton onClick={onBack} label="Back" />
      </div>
      <ArchetypeSection data={report.archetype} />
      <TopCareerMatchSection data={report.topCareerMatch} />
      <CareerClustersSection data={report.careerClusters} />
      <WorkEnvironmentSection data={report.workEnvironment} />
      <ActionPlanSection data={report.actionPlan} />
    </div>
  );
}
