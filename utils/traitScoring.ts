export interface TraitScores {
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

export type Answers = Record<string, string>;

export function createEmptyTraitScores(): TraitScores {
  return {
    leadership: 0,
    creativity: 0,
    riskTolerance: 0,
    socialEnergy: 0,
    structurePreference: 0,
    independence: 0,
    analyticalThinking: 0,
    emotionalSensitivity: 0,
    curiosity: 0,
    executionConsistency: 0,
    ambition: 0,
    adaptability: 0,
  };
}

function add(s: TraitScores, deltas: Partial<TraitScores>) {
  for (const [k, v] of Object.entries(deltas)) s[k as keyof TraitScores] += v;
}

const SCORING: Record<string, Partial<TraitScores>> = {
  "q0-A": { socialEnergy: 3, leadership: 1, adaptability: 1 },
  "q0-B": { socialEnergy: -1, emotionalSensitivity: 1, structurePreference: 1 },
  "q0-C": { socialEnergy: -2, analyticalThinking: 2, emotionalSensitivity: 1 },
  "q0-D": { adaptability: 2, socialEnergy: 1, emotionalSensitivity: 1 },
  "q1-A": {
    ambition: 2,
    riskTolerance: 1,
    analyticalThinking: 1,
    independence: 1,
  },
  "q1-B": { analyticalThinking: 3, curiosity: 2, executionConsistency: 1 },
  "q1-C": { creativity: 3, curiosity: 1, emotionalSensitivity: 1 },
  "q1-D": { emotionalSensitivity: 2, socialEnergy: 1, analyticalThinking: 1 },
  "q1-E": { socialEnergy: 2, adaptability: 1, curiosity: 1 },
  "q1-F": { ambition: 2, executionConsistency: 1, emotionalSensitivity: 1 },
  "q1-G": { adaptability: 2, curiosity: 2, independence: 1 },
  "q2-A": { ambition: 3, riskTolerance: 1, executionConsistency: 1 },
  "q2-B": { leadership: 2, executionConsistency: 1, structurePreference: 1 },
  "q2-C": { independence: 3, riskTolerance: 1, adaptability: 1 },
  "q2-D": { emotionalSensitivity: 2, socialEnergy: 1, creativity: 1 },
  "q2-E": { socialEnergy: 2, leadership: 1, ambition: 1 },
  "q2-F": { executionConsistency: 2, leadership: 1, ambition: 2 },
  "q3-A": { independence: 3, structurePreference: -2, riskTolerance: 1 },
  "q3-B": { socialEnergy: -3, emotionalSensitivity: 1, analyticalThinking: 1 },
  "q3-C": { adaptability: 2, curiosity: 2, structurePreference: -1 },
  "q3-D": {
    structurePreference: 2,
    riskTolerance: -1,
    executionConsistency: 1,
  },
  "q3-E": { independence: 3, leadership: 1, structurePreference: -2 },
  "q3-F": { emotionalSensitivity: 2, ambition: 1, socialEnergy: 1 },
  "q4-A": { leadership: 3, socialEnergy: 1, ambition: 1 },
  "q4-B": { executionConsistency: 3, analyticalThinking: 2 },
  "q4-C": {
    structurePreference: 2,
    executionConsistency: 2,
    analyticalThinking: 1,
  },
  "q4-D": { creativity: 3, curiosity: 1, independence: 1 },
  "q4-E": { independence: 1, socialEnergy: -1, adaptability: 1 },
  "q5-A": { ambition: 3, executionConsistency: 2, leadership: 1 },
  "q5-B": { analyticalThinking: 3, curiosity: 2 },
  "q5-C": { creativity: 3, emotionalSensitivity: 1, independence: 1 },
  "q5-D": { adaptability: 3, curiosity: 2, socialEnergy: 1 },
  "q5-E": { emotionalSensitivity: 2, socialEnergy: 2, leadership: 1 },
  "q5-F": { adaptability: 1, socialEnergy: 1, executionConsistency: -2 },
  "q6-A": { executionConsistency: 3, structurePreference: 1, ambition: 1 },
  "q6-B": { adaptability: 2, curiosity: 1, executionConsistency: -2 },
  "q6-C": { adaptability: 1, executionConsistency: 1, riskTolerance: 1 },
  "q6-D": {
    analyticalThinking: 2,
    emotionalSensitivity: 1,
    executionConsistency: -1,
  },
  "q7-A": {
    structurePreference: 2,
    emotionalSensitivity: 1,
    riskTolerance: -2,
  },
  "q7-B": { ambition: 2, riskTolerance: 2, independence: 1 },
};

export function calculateTraitScores(answers: Answers): TraitScores {
  const scores = createEmptyTraitScores();
  for (const [qKey, ans] of Object.entries(answers)) {
    const lookup = `${qKey}-${ans}`;
    if (SCORING[lookup]) add(scores, SCORING[lookup]);
  }
  return scores;
}

export function detectContradictions(s: TraitScores): string[] {
  const out: string[] = [];
  if (s.independence > 6 && s.structurePreference > 6)
    out.push("freedom_vs_structure");
  if (s.riskTolerance < 2 && s.ambition > 6) out.push("ambition_vs_caution");
  if (s.socialEnergy < 2 && s.leadership > 6) out.push("leader_vs_private");
  if (s.creativity > 6 && s.executionConsistency < 2)
    out.push("ideas_vs_followthrough");
  if (s.emotionalSensitivity > 6 && s.riskTolerance > 6)
    out.push("sensitivity_vs_risk");
  return out;
}
