interface StepProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function StepProgressBar({ currentStep, totalSteps }: StepProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="mx-auto mb-8 w-full max-w-md">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-medium text-muted">
          Step {currentStep} of {totalSteps}
        </span>
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-gold transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
