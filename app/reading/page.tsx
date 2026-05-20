"use client";

import { useCallback, useState } from "react";
import HeroBackground from "@/components/HeroBackground";
import type { ReadingData } from "@/components/reading/BirthDataForm";
import BirthDataStep from "@/components/reading/BirthDataStep";
import GenerationStep from "@/components/reading/GenerationStep";
import ResultsStep from "@/components/reading/ResultsStep";
import WelcomeStep from "@/components/reading/WelcomeStep";
import type { CareerReport } from "@/types/reading";

const INITIAL: ReadingData = {
  name: "",
  dob: "",
  birthCity: "",
  birthTime: "",
};

export default function ReadingPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<ReadingData>(INITIAL);
  const [report, setReport] = useState<CareerReport | null>(null);

  const next = () => setStep((s) => s + 1);
  const goToStep = useCallback((s: number) => setStep(s), []);

  const onReportReady = (r: CareerReport) => {
    setReport(r);
    setStep(4);
  };

  return (
    <div className="relative min-h-dvh overflow-hidden bg-background">
      <HeroBackground />
      <div className="relative z-10">
        {step === 1 && <WelcomeStep onNext={next} />}
        {step === 2 && (
          <BirthDataStep
            data={data}
            setData={(d) => setData((p) => ({ ...p, ...d }))}
            onNext={next}
            onBack={() => goToStep(1)}
            showProgress={true}
          />
        )}
        {step === 3 && (
          <GenerationStep readingData={data} onComplete={onReportReady} />
        )}
        {step === 4 && report && (
          <ResultsStep report={report} onBack={() => goToStep(2)} />
        )}
      </div>
    </div>
  );
}
