import type { CareerMapping } from "@/utils/careerMapping";
import type { StructuredProfile } from "@/utils/profileEngine";

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
  profile: StructuredProfile;
  careerMapping: CareerMapping;
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
