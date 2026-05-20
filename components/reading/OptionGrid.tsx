import type { QuestionOption } from "@/utils/questions";

interface OptionGridProps {
  options: QuestionOption[];
  selected: string | null;
  onSelect: (key: string) => void;
  wide?: boolean;
  finalPair?: boolean;
}

export default function OptionGrid({
  options,
  selected,
  onSelect,
  wide,
  finalPair,
}: OptionGridProps) {
  const gridCls = finalPair
    ? "grid grid-cols-1 gap-4 sm:grid-cols-2"
    : wide
      ? "grid grid-cols-1 gap-3 sm:grid-cols-2"
      : "flex flex-col gap-3";

  return (
    <div className={gridCls}>
      {options.map((opt) => {
        const isSelected = selected === opt.key;
        return (
          <button
            key={opt.key}
            type="button"
            onClick={() => onSelect(opt.key)}
            className={`group relative cursor-pointer rounded-2xl border-2 px-5 text-left
              transition-all duration-200 hover:scale-[1.02] hover:shadow-md
              ${finalPair ? "py-8" : "py-4"}
              ${
                isSelected
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-gray-200 bg-white hover:border-primary/50"
              }`}
          >
            <span
              className={`text-sm font-medium leading-relaxed ${
                isSelected ? "text-primary" : "text-gray-700"
              }`}
            >
              {opt.text}
            </span>

            {/* Selected indicator */}
            {isSelected && (
              <span className="absolute top-1/2 right-4 -translate-y-1/2 text-primary">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <circle cx="10" cy="10" r="10" />
                  <path
                    d="M6 10l3 3 5-5"
                    stroke="#fff"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
