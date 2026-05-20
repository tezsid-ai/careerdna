"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface InsightToastProps {
  /** The insight text to display */
  message: string;
  /** Callback when the toast finishes and should be dismissed */
  onDismiss: () => void;
  /** Duration in ms (default: 9000) */
  duration?: number;
}

export default function InsightToast({
  message,
  onDismiss,
  duration = 9000,
}: InsightToastProps) {
  const [phase, setPhase] = useState<"enter" | "visible" | "exit">("enter");
  const [countdown, setCountdown] = useState(100);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startRef = useRef(Date.now());

  const dismiss = useCallback(() => {
    setPhase("exit");
    setTimeout(() => {
      onDismiss();
    }, 400);
  }, [onDismiss]);

  useEffect(() => {
    // Enter transition
    const enterTimer = setTimeout(() => setPhase("visible"), 50);

    // Countdown tick
    startRef.current = Date.now();
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startRef.current;
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
      setCountdown(remaining);
      if (remaining <= 0) {
        dismiss();
      }
    }, 50);

    return () => {
      clearTimeout(enterTimer);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [duration, dismiss]);

  const translateClass =
    phase === "enter"
      ? "translate-x-full sm:translate-x-[120%] opacity-0"
      : phase === "exit"
        ? "translate-x-full sm:translate-x-[120%] opacity-0"
        : "translate-x-0 opacity-100";

  return (
    <div
      className={`fixed top-[4.5rem] right-4 z-50 w-[calc(100vw-2rem)] max-w-sm
        sm:top-[5.5rem] sm:right-6 sm:w-96
        transition-all duration-500 ease-out
        ${translateClass}
        pointer-events-auto`}
      role="status"
      aria-live="polite"
    >
      <div
        className="relative overflow-hidden rounded-2xl border border-primary/10
          bg-white/95 p-5 shadow-lg backdrop-blur-md"
        style={{
          boxShadow:
            "0 8px 32px rgba(79, 59, 139, 0.12), 0 2px 8px rgba(201, 168, 76, 0.08)",
        }}
      >
        {/* Header */}
        <div className="mb-2 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-gold">
            <span>✦</span> Pattern Noticed
          </span>
          <button
            onClick={dismiss}
            className="cursor-pointer rounded-full p-1 text-gray-300 transition-colors hover:text-gray-500"
            aria-label="Dismiss insight"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Message */}
        <p className="text-sm font-normal leading-relaxed text-gray-700">
          <span className="mr-1.5 text-primary">✦</span>
          {message}
        </p>

        {/* Countdown bar */}
        <div className="mt-3 h-0.5 w-full overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary/60 to-gold/60"
            style={{
              width: `${countdown}%`,
              transition: "width 0.1s linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}
