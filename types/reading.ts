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
}

export interface WorkEnvironment {
  thrives: string[];
  drains: string[];
}

export interface CareerCluster {
  name: string;
  matchPercent: number;
  reason: string;
  exampleRoles: string[];
}

export interface TopCareerMatch {
  title: string;
  matchPercent: number;
  reason: string;
  supportingSignal: string;
}

export interface ActionPlan {
  steps: [string, string, string];
}

export interface CareerReport {
  archetype: Archetype;
  topCareerMatch: TopCareerMatch;
  careerClusters: CareerCluster[];
  workEnvironment: WorkEnvironment;
  actionPlan: ActionPlan;
}
