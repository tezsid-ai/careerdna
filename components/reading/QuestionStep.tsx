"use client";

import { useState, useCallback, useRef } from "react";
import { QUESTIONS } from "@/utils/questions";
import { shouldShowInsight, getMicroInsight } from "@/utils/microInsights";
import { calculateTraitScores, detectContradictions } from "@/utils/traitScoring";
import type { Answers } from "@/utils/traitScoring";
import StepProgressBar from "./StepProgressBar";
import QuestionCard from "./QuestionCard";
import MicroInsightCard from "./MicroInsightCard";

interface QuestionStepProps {
  onComplete: (answers: Answers, traits: ReturnType<typeof calculateTraitScores>, contradictions: string[]) => void;
}

type Phase = "question" | "insight";
type Anim = "anim-enter" | "anim-exit" | "anim-hidden";

export default function QuestionStep({ onComplete }: QuestionStepProps) {
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [phase, setPhase] = useState<Phase>("question");
  const [anim, setAnim] = useState<Anim>("anim-enter");
  const [insightText, setInsightText] = useState("");
  const transitioning = useRef(false);

  const totalQ = QUESTIONS.length;
  const progressStep = Math.round(((qIndex + 1) / totalQ) * 2) + 2; // steps 3-4 range mapped

  const exitThenRun = useCallback((fn: () => void) => {
    if (transitioning.current) return;
    transitioning.current = true;
    setAnim("anim-exit");
    setTimeout(() => {
      fn();
      setAnim("anim-enter");
      transitioning.current = false;
    }, 320);
  }, []);

  const advanceToNext = useCallback(
    (updatedAnswers: Answers, currentIdx: number) => {
      if (shouldShowInsight(currentIdx)) {
        const key = `q${currentIdx}`;
        const text = getMicroInsight(currentIdx, updatedAnswers[key]);
        if (text) {
          setInsightText(text);
          setPhase("insight");
          setAnim("anim-enter");
          return;
        }
      }
      goToNextQuestion(updatedAnswers, currentIdx);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const goToNextQuestion = (updatedAnswers: Answers, currentIdx: number) => {
    const next = currentIdx + 1;
    if (next >= totalQ) {
      const traits = calculateTraitScores(updatedAnswers);
      const contradictions = detectContradictions(traits);
      onComplete(updatedAnswers, traits, contradictions);
      return;
    }
    setQIndex(next);
    setSelected(null);
    setPhase("question");
    setAnim("anim-enter");
  };

  const handleSelect = (key: string) => {
    if (transitioning.current) return;
    setSelected(key);
    const updated = { ...answers, [`q${qIndex}`]: key };
    setAnswers(updated);

    setTimeout(() => {
      exitThenRun(() => advanceToNext(updated, qIndex));
    }, 400);
  };

  const handleInsightContinue = () => {
    exitThenRun(() => goToNextQuestion(answers, qIndex));
  };

  return (
    <section className="flex min-h-dvh flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        <StepProgressBar currentStep={progressStep} totalSteps={4} />
      </div>

      <div className="flex flex-1 w-full items-center justify-center">
        {phase === "question" && (
          <QuestionCard
            question={QUESTIONS[qIndex]}
            selected={selected}
            onSelect={handleSelect}
            animClass={anim}
          />
        )}

        {phase === "insight" && (
          <MicroInsightCard
            insight={insightText}
            onContinue={handleInsightContinue}
            animClass={anim}
          />
        )}
      </div>
    </section>
  );
}
