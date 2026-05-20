import BackButton from "@/components/reading/BackButton";
import BestIndustriesSection from "@/components/results/BestIndustriesSection";
import CareerPersonalitySection from "@/components/results/CareerPersonalitySection";
import NaturalStrengthsSection from "@/components/results/NaturalStrengthsSection";
import TopCareerMatchesSection from "@/components/results/TopCareerMatchesSection";
import type { CareerReport } from "@/types/reading";

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
      <CareerPersonalitySection data={report.careerPersonality} />
      <TopCareerMatchesSection data={report.topCareerMatches} />
      <BestIndustriesSection data={report.bestIndustries} />
      <NaturalStrengthsSection data={report.naturalStrengths} />
    </div>
  );
}
