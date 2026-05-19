"use client";

import { useState, useCallback } from "react";
import HeroBackground from "@/components/HeroBackground";
import WelcomeStep from "@/components/reading/WelcomeStep";
import BirthDataStep from "@/components/reading/BirthDataStep";
import QuestionStep from "@/components/reading/QuestionStep";
import GenerationStep from "@/components/reading/GenerationStep";
import ResultsStep from "@/components/reading/ResultsStep";
import type { ReadingData } from "@/components/reading/BirthDataForm";
import type { TraitScores, Answers } from "@/utils/traitScoring";
import type { CareerReport } from "@/types/reading";

export interface FullReadingData extends ReadingData {
  answers?: Answers;
  traitScores?: TraitScores;
  contradictions?: string[];
}

const INITIAL: FullReadingData = {
  name: "",
  dob: "",
  birthCity: "",
  birthTime: "",
};

export default function ReadingPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FullReadingData>(INITIAL);
  const [report, setReport] = useState<CareerReport | null>(null);

  const next = () => setStep((s) => s + 1);
  const goToStep = useCallback((s: number) => setStep(s), []);

  const onQuestionsComplete = (a: Answers, t: TraitScores, c: string[]) => {
    setData((p) => ({ ...p, answers: a, traitScores: t, contradictions: c }));
    setStep(4);
  };

  const onReportReady = (r: CareerReport) => {
    setReport(r);
    setStep(5);
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
          />
        )}
        {step === 3 && (
          <QuestionStep
            onComplete={onQuestionsComplete}
            onBack={() => goToStep(2)}
          />
        )}
        {step === 4 && (
          <GenerationStep readingData={data} onComplete={onReportReady} />
        )}
        {step === 5 && report && <ResultsStep report={report} />}
      </div>
    </div>
  );
}
