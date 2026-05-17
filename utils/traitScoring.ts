export interface TraitScores {
  autonomy: number;
  socialEnergy: number;
  leadership: number;
  execution: number;
  creativity: number;
  analytical: number;
  riskTolerance: number;
  recognitionNeed: number;
  financialMotivation: number;
  meaningMotivation: number;
  structureTolerance: number;
  noveltyNeed: number;
  ambitionDepth: number;
  peopleOrientation: number;
}

export type Answers = Record<string, string>;

function empty(): TraitScores {
  return {
    autonomy: 0, socialEnergy: 0, leadership: 0, execution: 0,
    creativity: 0, analytical: 0, riskTolerance: 0, recognitionNeed: 0,
    financialMotivation: 0, meaningMotivation: 0, structureTolerance: 0,
    noveltyNeed: 0, ambitionDepth: 0, peopleOrientation: 0,
  };
}

function add(s: TraitScores, deltas: Partial<TraitScores>) {
  for (const [k, v] of Object.entries(deltas)) s[k as keyof TraitScores] += v;
}

const SCORING: Record<string, Partial<TraitScores>> = {
  "q0-A": { socialEnergy: 3, leadership: 1, recognitionNeed: 1 },
  "q0-B": { socialEnergy: -1, structureTolerance: 1, autonomy: 1 },
  "q0-C": { socialEnergy: -2, analytical: 2, execution: 1 },
  "q0-D": { socialEnergy: 1, analytical: 1 },
  "q1-A": { financialMotivation: 2, ambitionDepth: 2, analytical: 1 },
  "q1-B": { analytical: 3, execution: 2 },
  "q1-C": { creativity: 3, autonomy: 1 },
  "q1-D": { peopleOrientation: 3, analytical: 1 },
  "q1-E": { socialEnergy: 1, noveltyNeed: 2 },
  "q1-F": { ambitionDepth: 2, autonomy: 1 },
  "q1-G": { autonomy: 2, noveltyNeed: 3, socialEnergy: 1 },
  "q2-A": { financialMotivation: 4, ambitionDepth: 2 },
  "q2-B": { recognitionNeed: 4, structureTolerance: 1 },
  "q2-C": { autonomy: 4, riskTolerance: 2 },
  "q2-D": { meaningMotivation: 4, peopleOrientation: 2 },
  "q2-E": { recognitionNeed: 3, socialEnergy: 2, ambitionDepth: 1 },
  "q2-F": { ambitionDepth: 4, execution: 2, riskTolerance: 1 },
  "q3-A": { autonomy: 3, structureTolerance: -3, riskTolerance: 1 },
  "q3-B": { socialEnergy: -3, autonomy: 2 },
  "q3-C": { noveltyNeed: 3, structureTolerance: -2 },
  "q3-D": { structureTolerance: 2, riskTolerance: -2 },
  "q3-E": { autonomy: 4, structureTolerance: -4, leadership: 1 },
  "q3-F": { recognitionNeed: 4, meaningMotivation: 1 },
  "q4-A": { leadership: 4, ambitionDepth: 2, socialEnergy: 1 },
  "q4-B": { execution: 4, analytical: 2 },
  "q4-C": { execution: 3, structureTolerance: 2, analytical: 1 },
  "q4-D": { creativity: 4, autonomy: 2 },
  "q4-E": { socialEnergy: -1, autonomy: 1 },
  "q5-A": { ambitionDepth: 4, execution: 2, riskTolerance: 2 },
  "q5-B": { analytical: 4, autonomy: 2 },
  "q5-C": { creativity: 4, autonomy: 2, meaningMotivation: 1 },
  "q5-D": { autonomy: 3, noveltyNeed: 4, socialEnergy: 1 },
  "q5-E": { peopleOrientation: 4, meaningMotivation: 3 },
  "q5-F": { ambitionDepth: -2, riskTolerance: -1 },
  "q6-A": { riskTolerance: -3, structureTolerance: 3 },
  "q6-B": { riskTolerance: 4, ambitionDepth: 3, autonomy: 2 },
};

export function calculateTraitScores(answers: Answers): TraitScores {
  const scores = empty();
  for (const [qKey, ans] of Object.entries(answers)) {
    const lookup = `${qKey}-${ans}`;
    if (SCORING[lookup]) add(scores, SCORING[lookup]);
  }
  return scores;
}

export function detectContradictions(s: TraitScores): string[] {
  const out: string[] = [];
  if (s.autonomy > 8 && s.riskTolerance < 2) out.push("freedom_vs_security");
  if (s.creativity > 6 && s.financialMotivation > 6) out.push("creative_vs_financial");
  if (s.leadership > 6 && s.recognitionNeed < 2) out.push("leader_vs_invisible");
  if (s.noveltyNeed > 6 && s.structureTolerance > 6) out.push("novelty_vs_stability");
  if (s.peopleOrientation > 6 && s.financialMotivation > 6 && s.meaningMotivation < 3)
    out.push("helper_vs_money");
  return out;
}
