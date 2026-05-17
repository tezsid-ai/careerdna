import { QUESTIONS } from "@/utils/questions";
import { calculateLifePath } from "@/components/reading/LifePathCalculator";
import { getSunSign, getDominantElement, getSoulUrgeNumber } from "@/utils/astrologyUtils";
import type { TraitScores } from "@/utils/traitScoring";
import type { ReadingPayload } from "@/types/reading";

interface BirthData {
  name: string;
  dob: string;
  birthCity: string;
  birthTime: string;
}

export function buildReadingPayload(
  birth: BirthData,
  answers: Record<string, string>,
  traitScores: TraitScores,
  contradictions: string[],
): ReadingPayload {
  const answerTexts: Record<string, string> = {};
  for (const [key, val] of Object.entries(answers)) {
    const qIdx = parseInt(key.replace("q", ""), 10);
    const q = QUESTIONS[qIdx];
    const opt = q?.options.find((o) => o.key === val);
    answerTexts[key] = opt?.text ?? val;
  }

  return {
    name: birth.name,
    dob: birth.dob,
    birthCity: birth.birthCity,
    birthTime: birth.birthTime || "Not provided",
    lifePathNumber: calculateLifePath(birth.dob),
    sunSign: getSunSign(birth.dob),
    dominantElement: getDominantElement(getSunSign(birth.dob)),
    soulUrge: getSoulUrgeNumber(birth.name),
    answers,
    answerTexts,
    traitScores,
    contradictions,
  };
}
