import type { ReadingData } from "./BirthDataForm";
import StepProgressBar from "./StepProgressBar";
import BirthDataForm from "./BirthDataForm";
import BackButton from "./BackButton";

interface BirthDataStepProps {
  data: ReadingData;
  setData: (data: ReadingData) => void;
  onNext: () => void;
  onBack?: () => void;
  showProgress?: boolean;
}

export default function BirthDataStep({
  data,
  setData,
  onNext,
  onBack,
  showProgress = true,
}: BirthDataStepProps) {
  const currentStep = 1;
  return (
    <section className="flex min-h-dvh flex-col items-center justify-center px-4 sm:px-6 py-6 sm:py-12">
      <div className="w-full max-w-md">
        {showProgress && (
          <StepProgressBar
            currentStep={currentStep}
            totalSteps={2}
            label="Step 1 — Birth Details"
          />
        )}

        {/* Back button */}
        {onBack && (
          <div className="mb-4 mt-2">
            <BackButton onClick={onBack} />
          </div>
        )}

        <div className="rounded-3xl border border-gray-100 bg-white/80 p-6 sm:p-8 shadow-sm backdrop-blur-sm">
          <h2 className="text-center text-2xl font-semibold text-foreground">
            Tell us about the moment you arrived
          </h2>
          <p className="mt-2 mb-8 text-center text-sm font-light text-muted">
            This is what astrology and numerology use to build your unique
            profile.
          </p>

          <BirthDataForm data={data} setData={setData} onNext={onNext} />
        </div>
      </div>
    </section>
  );
}
