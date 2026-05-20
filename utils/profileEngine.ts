import type { TraitScores } from "@/utils/traitScoring";

export interface TraitLevels {
  leadership: number;
  creativity: number;
  riskTolerance: number;
  socialEnergy: number;
  structurePreference: number;
  independence: number;
  analyticalThinking: number;
  emotionalSensitivity: number;
  curiosity: number;
  executionConsistency: number;
  ambition: number;
  adaptability: number;
}

export interface StructuredProfile {
  traitLevels: TraitLevels;
  dominantPattern: string;
  strengths: string[];
  risks: string[];
  motivators: string[];
  contradictions: string[];
  numerologySignals: string[];
  astrologySignals: string[];
}

const TRAIT_LABELS: Record<keyof TraitLevels, string> = {
  leadership: "naturally takes charge when needed",
  creativity: "generates fresh ideas with ease",
  riskTolerance: "handles uncertainty without freezing",
  socialEnergy: "builds energy through people",
  structurePreference: "prefers clarity and systems",
  independence: "values control over their own direction",
  analyticalThinking: "spots patterns and logic quickly",
  emotionalSensitivity: "picks up on subtle emotional cues",
  curiosity: "keeps exploring new topics",
  executionConsistency: "follows through after the initial spark",
  ambition: "pushes for bigger goals",
  adaptability: "shifts quickly when conditions change",
};

const RISK_LABELS: Record<keyof TraitLevels, string> = {
  leadership: "may avoid taking charge even when needed",
  creativity: "may rely too much on safe ideas",
  riskTolerance: "may hesitate under uncertainty",
  socialEnergy: "can feel drained by heavy interaction",
  structurePreference: "can feel lost without clear direction",
  independence: "may feel boxed in by others",
  analyticalThinking: "can miss deeper patterns",
  emotionalSensitivity: "may ignore emotional signals",
  curiosity: "can get bored with learning new areas",
  executionConsistency: "may drop projects after the start",
  ambition: "may settle too early",
  adaptability: "can resist sudden change",
};

function clampScore(value: number) {
  return Math.max(-4, Math.min(8, value));
}

function toLevel(score: number): number {
  const capped = clampScore(score);
  const scaled = ((capped + 4) / 12) * 9 + 1;
  return Math.round(scaled);
}

function getTopTraits(levels: TraitLevels, count: number) {
  return Object.entries(levels)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .map(([trait]) => trait as keyof TraitLevels);
}

function getLowTraits(levels: TraitLevels, count: number) {
  return Object.entries(levels)
    .sort((a, b) => a[1] - b[1])
    .slice(0, count)
    .map(([trait]) => trait as keyof TraitLevels);
}

function getDominantPattern(levels: TraitLevels): string {
  if (
    levels.independence >= 8 &&
    levels.ambition >= 7 &&
    levels.riskTolerance >= 7
  ) {
    return "Independent Strategic Builder";
  }
  if (levels.creativity >= 8 && levels.analyticalThinking >= 7) {
    return "Creative Problem Solver";
  }
  if (levels.socialEnergy >= 8 && levels.leadership >= 7) {
    return "People-Forward Leader";
  }
  if (levels.analyticalThinking >= 8 && levels.executionConsistency >= 7) {
    return "Focused Systems Thinker";
  }
  if (levels.adaptability >= 8 && levels.curiosity >= 7) {
    return "Restless Explorer";
  }
  if (levels.emotionalSensitivity >= 8 && levels.socialEnergy >= 6) {
    return "Empathetic Connector";
  }
  return "Balanced Growth Seeker";
}

export function buildStructuredProfile(
  traits: TraitScores,
  contradictions: string[],
  numerologySignals: string[],
  astrologySignals: string[],
): StructuredProfile {
  const traitLevels: TraitLevels = {
    leadership: toLevel(traits.leadership),
    creativity: toLevel(traits.creativity),
    riskTolerance: toLevel(traits.riskTolerance),
    socialEnergy: toLevel(traits.socialEnergy),
    structurePreference: toLevel(traits.structurePreference),
    independence: toLevel(traits.independence),
    analyticalThinking: toLevel(traits.analyticalThinking),
    emotionalSensitivity: toLevel(traits.emotionalSensitivity),
    curiosity: toLevel(traits.curiosity),
    executionConsistency: toLevel(traits.executionConsistency),
    ambition: toLevel(traits.ambition),
    adaptability: toLevel(traits.adaptability),
  };

  const strengths = getTopTraits(traitLevels, 3).map(
    (trait) => TRAIT_LABELS[trait],
  );
  const risks = getLowTraits(traitLevels, 2).map((trait) => RISK_LABELS[trait]);

  const motivators: string[] = [];
  if (traitLevels.ambition >= 7) motivators.push("visible progress and growth");
  if (traitLevels.independence >= 7)
    motivators.push("freedom to decide the path");
  if (traitLevels.emotionalSensitivity >= 7)
    motivators.push("meaning and impact");
  if (traitLevels.creativity >= 7)
    motivators.push("room for original expression");
  if (motivators.length < 3) motivators.push("clarity and steady momentum");

  return {
    traitLevels,
    dominantPattern: getDominantPattern(traitLevels),
    strengths,
    risks,
    motivators: motivators.slice(0, 3),
    contradictions,
    numerologySignals,
    astrologySignals,
  };
}
