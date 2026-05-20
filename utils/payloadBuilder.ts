import { calculateLifePath } from "@/components/reading/LifePathCalculator";
import type { ReadingPayload } from "@/types/reading";
import {
  getAscendant,
  getCareerIndicator,
  getDominantElement,
  getMoonSign,
  getPlanetaryTendencies,
  getSunSign,
} from "@/utils/astrologyUtils";
import {
  getDestinyNumber,
  getNumerologySignals,
  getSoulUrgeNumber,
} from "@/utils/numerologyUtils";

interface BirthData {
  name: string;
  dob: string;
  birthCity: string;
  birthTime: string;
}

export function buildReadingPayload(birth: BirthData): ReadingPayload {
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
  };
}
