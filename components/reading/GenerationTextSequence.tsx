const LINES = [
  "Reading your birth patterns...",
  "Aligning planetary coordinates...",
  "Cross-referencing astrology and numerology...",
  "Synthesizing your career profile...",
  "Preparing your personal reading...",
];

interface Props {
  activeIndex: number;
}

export default function GenerationTextSequence({ activeIndex }: Props) {
  return (
    <div className="flex flex-col items-center gap-3">
      {LINES.map((line, i) => {
        const isActive = i === activeIndex;
        const isVisible = i <= activeIndex;
        return (
          <p
            key={i}
            className={`flex items-center gap-2 text-sm font-medium transition-all duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            } ${isActive ? "text-gray-800" : "text-gray-400"}`}
          >
            <span className={`text-gold ${isActive ? "animate-pulse" : ""}`}>
              ✦
            </span>
            {line}
          </p>
        );
      })}
    </div>
  );
}
