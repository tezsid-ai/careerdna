export interface ReadingPayload {
  name: string;
  dob: string;
  birthCity: string;
  birthTime: string;
  sunSign: string;
  moonSign: string;
  ascendant: string;
  dominantElement: string;
  careerIndicator: string;
  lifePathNumber: number;
  destinyNumber: number;
  soulUrgeNumber: number;
  numerologySignals: string[];
  astrologySignals: string[];
}

export interface CareerPersonality {
  title: string;
  explanation: string;
}

export interface CareerMatch {
  title: string;
  matchPercent?: number;
  reason: string;
}

export interface BestIndustry {
  name: string;
  reason: string;
}

export interface NaturalStrength {
  name: string;
  description: string;
}

export interface CareerReport {
  careerPersonality: CareerPersonality;
  topCareerMatches: CareerMatch[];
  bestIndustries: BestIndustry[];
  naturalStrengths: NaturalStrength[];
}
