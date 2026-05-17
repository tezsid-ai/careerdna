interface MicroInsightCardProps {
  insight: string;
  onContinue: () => void;
  animClass: string;
}

export default function MicroInsightCard({
  insight,
  onContinue,
  animClass,
}: MicroInsightCardProps) {
  return (
    <div className={`mx-auto w-full max-w-lg px-6 ${animClass}`}>
      <div className="rounded-2xl border-l-[3px] border-primary bg-lavender/70 p-5 backdrop-blur-sm">
        <span className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-gold">
          Pattern Noticed
        </span>

        <p className="text-sm font-normal leading-relaxed text-gray-700 sm:text-base">
          <span className="mr-1.5 text-primary">✦</span>
          {insight}
        </p>
      </div>

      <div className="mt-5 flex justify-center">
        <button
          onClick={onContinue}
          className="cursor-pointer text-sm font-medium text-primary transition-all duration-200 hover:underline"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
