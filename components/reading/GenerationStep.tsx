"use client";

import { useEffect, useRef, useState } from "react";
import type { ReadingData } from "@/components/reading/BirthDataForm";
import type { CareerReport } from "@/types/reading";
import { generateCareerReading } from "@/utils/geminiClient";
import { buildReadingPayload } from "@/utils/payloadBuilder";
import GenerationTextSequence from "./GenerationTextSequence";

interface Props {
  readingData: ReadingData;
  onComplete: (report: CareerReport) => void;
}

const MIN_WAIT = 8000;

export default function GenerationStep({ readingData, onComplete }: Props) {
  const [activeText, setActiveText] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const reportRef = useRef<CareerReport | null>(null);
  const timerDone = useRef(false);
  const apiDone = useRef(false);

  const tryAdvance = () => {
    if (timerDone.current && apiDone.current && reportRef.current) {
      onComplete(reportRef.current);
    }
  };

  const callApi = async () => {
    try {
      setError(null);
      const payload = buildReadingPayload(readingData);
      const report = await generateCareerReading(payload);
      reportRef.current = report;
      apiDone.current = true;
      tryAdvance();
    } catch (e: unknown) {
      setError(
        e instanceof Error
          ? e.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  useEffect(() => {
    callApi();

    // Text sequence intervals: 0, 1.5s, 3s, 4.5s, 6s
    const intervals = [0, 1500, 3000, 4500, 6000];
    const timers = intervals.map((ms, i) =>
      setTimeout(() => setActiveText(i), ms),
    );

    // Minimum 8-second timer
    const minTimer = setTimeout(() => {
      timerDone.current = true;
      tryAdvance();
    }, MIN_WAIT);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(minTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="flex min-h-dvh flex-col items-center justify-center px-6 py-20">
      {error ? (
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-red-400">{error}</p>
          <button
            onClick={() => {
              setError(null);
              apiDone.current = false;
              callApi();
            }}
            className="cursor-pointer rounded-full bg-gradient-to-r from-primary-deep to-primary px-6 py-3 text-sm font-medium text-white transition hover:scale-105"
          >
            Try Again
          </button>
        </div>
      ) : (
        <GenerationTextSequence activeIndex={activeText} />
      )}
    </section>
  );
}
