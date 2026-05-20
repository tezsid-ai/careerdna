interface ContinueButtonProps {
  isValid: boolean;
  onClick: () => void;
}

export default function ContinueButton({
  isValid,
  onClick,
}: ContinueButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={!isValid}
      className={`group mt-4 inline-flex w-full items-center justify-center gap-2
        rounded-full px-8 py-4 text-base font-medium text-white shadow-lg
        transition-all duration-300 sm:text-lg ${
          isValid
            ? "cursor-pointer bg-gradient-to-r from-primary-deep to-primary hover:scale-105 hover:shadow-xl"
            : "cursor-not-allowed bg-gray-300 opacity-60"
        }`}
    >
      Continue to Your Questions
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>
  );
}
