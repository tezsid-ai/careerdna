import { calculateLifePath } from "@/components/reading/LifePathCalculator";
import {
  getSunSign,
  getDominantElement,
  getMoonSign,
  getAscendant,
  getCareerIndicator,
  getPlanetaryTendencies,
} from "@/utils/astrologyUtils";
import {
  getDestinyNumber,
  getSoulUrgeNumber,
  getNumerologySignals,
} from "@/utils/numerologyUtils";
import type { TraitScores } from "@/utils/traitScoring";
import type { ReadingPayload } from "@/types/reading";
import { buildStructuredProfile } from "@/utils/profileEngine";
import { buildCareerMapping } from "@/utils/careerMapping";

interface BirthData {
  name: string;
  dob: string;
  birthCity: string;
  birthTime: string;
}

export function buildReadingPayload(
  birth: BirthData,
  traitScores: TraitScores,
  contradictions: string[],
): ReadingPayload {
  const sunSign = getSunSign(birth.dob);
  const moonSign = getMoonSign(birth.dob, birth.birthTime, birth.birthCity);
  const ascendant = getAscendant(birth.dob, birth.birthTime, birth.birthCity);
  const dominantElement = getDominantElement(sunSign);
  const careerIndicator = getCareerIndicator(ascendant);
  const lifePathNumber = calculateLifePath(birth.dob);
  const destinyNumber = getDestinyNumber(birth.name);
  const soulUrgeNumber = getSoulUrgeNumber(birth.name);
  const numerologySignals = getNumerologySignals(
    lifePathNumber,
    destinyNumber,
    soulUrgeNumber,
  );
  const astrologySignals = [
    `${sunSign} sun with ${dominantElement.toLowerCase()} energy`,
    `${moonSign} moon influence`,
    `${ascendant} rising focus`,
    ...getPlanetaryTendencies(sunSign, moonSign, ascendant),
  ].slice(0, 4);
  const profile = buildStructuredProfile(
    traitScores,
    contradictions,
    numerologySignals,
    astrologySignals,
  );
  const careerMapping = buildCareerMapping(profile);

  return {
    name: birth.name,
    dob: birth.dob,
    birthCity: birth.birthCity,
    birthTime: birth.birthTime || "Not provided",
    sunSign,
    moonSign,
    ascendant,
    dominantElement,
    careerIndicator,
    lifePathNumber,
    destinyNumber,
    soulUrgeNumber,
    numerologySignals,
    astrologySignals,
    profile,
    careerMapping,
  };
}
