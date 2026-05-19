"use client";

interface StepProgressBarProps {
  /** 0-indexed current step within the flow */
  currentStep: number;
  /** Total number of steps in the flow */
  totalSteps: number;
  /** Optional label override */
  label?: string;
}

export default function StepProgressBar({
  currentStep,
  totalSteps,
  label,
}: StepProgressBarProps) {
  // Clamp progress between 0 and 100
  const progress = Math.min(100, Math.max(0, (currentStep / totalSteps) * 100));

  return (
    <div
      className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md pb-4 pt-4 px-4 sm:px-0"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Form progress"
    >
      <div className="mx-auto w-full max-w-md">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium text-muted">
            {label ?? `Step ${currentStep} of ${totalSteps}`}
          </span>
          <span className="text-xs font-medium text-primary/60">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100/80">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-gold"
            style={{
              width: `${progress}%`,
              transition: "width 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
