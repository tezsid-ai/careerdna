"use client";

import { useState, useCallback, useRef } from "react";
import { QUESTIONS } from "@/utils/questions";
import { shouldShowInsight, getMicroInsight } from "@/utils/microInsights";
import { calculateTraitScores, detectContradictions } from "@/utils/traitScoring";
import type { Answers } from "@/utils/traitScoring";
import StepProgressBar from "./StepProgressBar";
import QuestionCard from "./QuestionCard";
import InsightToast from "./InsightToast";
import BackButton from "./BackButton";

interface QuestionStepProps {
  onComplete: (answers: Answers, traits: ReturnType<typeof calculateTraitScores>, contradictions: string[]) => void;
  onBack?: () => void;
}

type Anim = "anim-enter" | "anim-exit" | "anim-hidden";

export default function QuestionStep({ onComplete, onBack }: QuestionStepProps) {
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [anim, setAnim] = useState<Anim>("anim-enter");
  const transitioning = useRef(false);

  // Toast insight state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastQueueRef = useRef<string | null>(null);

  const totalQ = QUESTIONS.length;

  // Overall flow: BirthData = step 1, Questions = steps 2..(totalQ+1)
  // Progress bar shows question progress: current question out of total questions
  const progressCurrent = qIndex + 1;
  const progressTotal = totalQ;

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

  const triggerToast = useCallback((text: string) => {
    // Only one toast at a time — if one is visible, skip
    if (toastMessage) {
      toastQueueRef.current = text;
      return;
    }
    setToastMessage(text);
  }, [toastMessage]);

  const handleToastDismiss = useCallback(() => {
    setToastMessage(null);
    // Process queued toast if any
    if (toastQueueRef.current) {
      const queued = toastQueueRef.current;
      toastQueueRef.current = null;
      setTimeout(() => setToastMessage(queued), 200);
    }
  }, []);

  const advanceToNext = useCallback(
    (updatedAnswers: Answers, currentIdx: number) => {
      // Check for toast insight after this question
      if (shouldShowInsight(currentIdx)) {
        const key = `q${currentIdx}`;
        const text = getMicroInsight(currentIdx, updatedAnswers[key]);
        if (text) {
          triggerToast(text);
        }
      }

      const next = currentIdx + 1;
      if (next >= totalQ) {
        const traits = calculateTraitScores(updatedAnswers);
        const contradictions = detectContradictions(traits);
        onComplete(updatedAnswers, traits, contradictions);
        return;
      }
      setQIndex(next);
      setSelected(null);
    },
    [totalQ, onComplete, triggerToast],
  );

  const handleSelect = (key: string) => {
    if (transitioning.current) return;
    setSelected(key);
    const updated = { ...answers, [`q${qIndex}`]: key };
    setAnswers(updated);

    setTimeout(() => {
      exitThenRun(() => advanceToNext(updated, qIndex));
    }, 400);
  };

  const handleBack = () => {
    if (transitioning.current) return;

    if (qIndex > 0) {
      // Go to previous question, restoring previous answer
      exitThenRun(() => {
        const prevIndex = qIndex - 1;
        setQIndex(prevIndex);
        setSelected(answers[`q${prevIndex}`] ?? null);
      });
    } else if (onBack) {
      // Go back to the birth data step
      onBack();
    }
  };

  const canGoBack = qIndex > 0 || !!onBack;

  return (
    <section className="flex min-h-dvh flex-col items-center px-4 py-6 sm:py-12">
      <div className="w-full max-w-2xl">
        <StepProgressBar
          currentStep={progressCurrent}
          totalSteps={progressTotal}
          label={`Question ${progressCurrent} of ${progressTotal}`}
        />
      </div>

      {/* Back button */}
      {canGoBack && (
        <div className="w-full max-w-2xl mt-2 mb-4 px-2">
          <BackButton
            onClick={handleBack}
            label={qIndex === 0 ? "Back" : "Previous"}
          />
        </div>
      )}

      <div className="flex flex-1 w-full items-center justify-center">
        <QuestionCard
          question={QUESTIONS[qIndex]}
          selected={selected}
          onSelect={handleSelect}
          animClass={anim}
        />
      </div>

      {/* Toast insight */}
      {toastMessage && (
        <InsightToast
          message={toastMessage}
          onDismiss={handleToastDismiss}
          duration={9000}
        />
      )}
    </section>
  );
}
