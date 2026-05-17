import type { TraitScores } from "@/utils/traitScoring";

export interface ReadingPayload {
  name: string;
  dob: string;
  birthCity: string;
  birthTime: string;
  lifePathNumber: number;
  sunSign: string;
  dominantElement: string;
  soulUrge: number;
  answers: Record<string, string>;
  answerTexts: Record<string, string>;
  traitScores: TraitScores;
  contradictions: string[];
}

export interface Archetype {
  name: string;
  tagline: string;
  description: string;
}

export interface Strength {
  title: string;
  description: string;
}

export interface WorkEnvironment {
  thrives: string[];
  drains: string[];
  idealStructure: string;
}

export interface CareerCluster {
  name: string;
  description: string;
  exampleRoles: string[];
}

export interface Warning {
  title: string;
  description: string;
}

export interface GrowthPath {
  emotionalBlocker: string;
  hiddenStrength: string;
  evolutionDirection: string;
}

export interface NumerologyInsight {
  lifePathNumber: number;
  lifePathMeaning: string;
  soulUrgeInsight: string;
}

export interface AstrologyInsight {
  sunSign: string;
  sunSignCareerMeaning: string;
  dominantElement: string;
  elementCareerInfluence: string;
}

export interface CareerReport {
  archetype: Archetype;
  strengths: Strength[];
  workEnvironment: WorkEnvironment;
  careerClusters: CareerCluster[];
  warnings: Warning[];
  growthPath: GrowthPath;
  numerologyInsight: NumerologyInsight;
  astrologyInsight: AstrologyInsight;
  contradictionInsight: string | null;
  closingMessage: string;
}
