import type { Question } from "@/utils/questions";
import OptionGrid from "./OptionGrid";
import QuestionDivider from "./QuestionDivider";

interface QuestionCardProps {
  question: Question;
  selected: string | null;
  onSelect: (key: string) => void;
  animClass: string;
}

export default function QuestionCard({
  question,
  selected,
  onSelect,
  animClass,
}: QuestionCardProps) {
  const containerWidth =
    question.wide || question.finalPair ? "max-w-2xl" : "max-w-lg";

  return (
    <div className={`mx-auto w-full ${containerWidth} px-6 ${animClass}`}>
      <QuestionDivider />

      <h2 className="mb-8 text-center text-xl font-semibold leading-snug text-gray-800 sm:text-2xl">
        {question.text}
      </h2>

      <OptionGrid
        options={question.options}
        selected={selected}
        onSelect={onSelect}
        wide={question.wide}
        finalPair={question.finalPair}
      />
    </div>
  );
}
