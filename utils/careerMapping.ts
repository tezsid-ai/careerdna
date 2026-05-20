import type { StructuredProfile, TraitLevels } from "@/utils/profileEngine";

interface ClusterConfig {
  name: string;
  weights: Partial<Record<keyof TraitLevels, number>>;
  roles: string[];
}

export interface CareerClusterMapping {
  name: string;
  matchPercent: number;
  reasonNotes: string[];
  exampleRoles: string[];
}

export interface CareerMapping {
  topMatch: {
    title: string;
    matchPercent: number;
    reasonNotes: string[];
    supportingSignal: string;
  };
  clusters: CareerClusterMapping[];
  workEnvironment: { thrives: string[]; drains: string[] };
  actionPlan: { steps: [string, string, string] };
}

const CLUSTERS: ClusterConfig[] = [
  {
    name: "Product & Strategy",
    weights: {
      analyticalThinking: 3,
      creativity: 2,
      leadership: 2,
      executionConsistency: 2,
      independence: 2,
      curiosity: 2,
    },
    roles: ["Product manager", "UX strategist", "Business analyst"],
  },
  {
    name: "Business & Entrepreneurship",
    weights: {
      ambition: 3,
      riskTolerance: 3,
      leadership: 2,
      independence: 2,
      adaptability: 2,
    },
    roles: ["Founder", "Business development", "Growth strategy"],
  },
  {
    name: "Creative & Branding",
    weights: {
      creativity: 3,
      emotionalSensitivity: 2,
      curiosity: 2,
      socialEnergy: 1,
      independence: 1,
    },
    roles: ["Brand strategist", "Content lead", "Visual designer"],
  },
  {
    name: "Tech & Systems",
    weights: {
      analyticalThinking: 3,
      structurePreference: 2,
      executionConsistency: 2,
      curiosity: 2,
    },
    roles: ["Data analyst", "Process automation", "QA analyst"],
  },
  {
    name: "People & Coaching",
    weights: {
      socialEnergy: 3,
      emotionalSensitivity: 3,
      leadership: 2,
      adaptability: 1,
    },
    roles: ["People partner", "Career coach", "Community lead"],
  },
];

function scoreCluster(levels: TraitLevels, config: ClusterConfig): number {
  const weightEntries = Object.entries(config.weights);
  const max = weightEntries.reduce((sum, [, w]) => sum + (w ?? 0) * 10, 0);
  const score = weightEntries.reduce(
    (sum, [trait, w]) => sum + levels[trait as keyof TraitLevels] * (w ?? 0),
    0,
  );
  if (!max) return 70;
  return Math.round(70 + (score / max) * 25);
}

function buildReasonNotes(
  levels: TraitLevels,
  picks: (keyof TraitLevels)[],
): string[] {
  const map: Record<keyof TraitLevels, string> = {
    leadership: "you naturally step up when direction is needed",
    creativity: "you enjoy shaping ideas into something tangible",
    riskTolerance: "you can handle uncertainty without freezing",
    socialEnergy: "you gain momentum through people",
    structurePreference: "you work best with clear systems",
    independence: "you prefer ownership over your pace",
    analyticalThinking: "you like breaking complex problems into parts",
    emotionalSensitivity: "you read subtle cues and intent",
    curiosity: "you keep exploring new angles",
    executionConsistency: "you can stay steady once you start",
    ambition: "you want visible progress and growth",
    adaptability: "you adjust fast when plans change",
  };
  return picks.map((p) => map[p]);
}

function getEnvironment(profile: StructuredProfile) {
  const thrives: string[] = [];
  const drains: string[] = [];

  if (profile.traitLevels.independence >= 7)
    thrives.push("autonomy and ownership");
  if (profile.traitLevels.structurePreference >= 7)
    thrives.push("clear goals and stable systems");
  if (profile.traitLevels.socialEnergy >= 7)
    thrives.push("collaborative, people-driven teams");
  if (profile.traitLevels.creativity >= 7)
    thrives.push("space to experiment and iterate");
  if (thrives.length < 4) thrives.push("steady feedback and learning loops");

  if (profile.traitLevels.socialEnergy <= 3)
    drains.push("constant meetings and social pressure");
  if (profile.traitLevels.structurePreference <= 3)
    drains.push("rigid rules you did not choose");
  if (profile.traitLevels.riskTolerance <= 3)
    drains.push("high chaos without support");
  if (profile.traitLevels.executionConsistency <= 3)
    drains.push("long, repetitive tasks with no variety");
  if (drains.length < 4) drains.push("unclear expectations and mixed signals");

  return {
    thrives: thrives.slice(0, 4),
    drains: drains.slice(0, 4),
  };
}

function buildActionPlan(profile: StructuredProfile): [string, string, string] {
  const steps: string[] = [];

  if (profile.traitLevels.executionConsistency <= 4) {
    steps.push(
      "Build a 4-week routine with weekly deliverables and simple tracking.",
    );
  }
  if (profile.traitLevels.socialEnergy <= 4) {
    steps.push(
      "Practice low-pressure networking by joining one focused community.",
    );
  }
  if (profile.traitLevels.riskTolerance <= 4) {
    steps.push(
      "Start with small experiments before taking bigger career risks.",
    );
  }
  if (profile.traitLevels.leadership <= 4) {
    steps.push(
      "Take one ownership task each week to build confidence in leading.",
    );
  }
  if (steps.length < 3) {
    steps.push(
      "Pick one skill gap and build a 30-day learning plan around it.",
    );
  }
  if (steps.length < 3) {
    steps.push(
      "Test two career clusters through short projects or internships.",
    );
  }

  return [steps[0], steps[1], steps[2]] as [string, string, string];
}

function pickSupportingSignal(profile: StructuredProfile): string {
  const signal = profile.numerologySignals[0] ?? "steady career focus";
  const astro = profile.astrologySignals[0] ?? "grounded energy";
  return `Signal: ${signal} with ${astro}.`;
}

export function buildCareerMapping(profile: StructuredProfile): CareerMapping {
  const clusters = CLUSTERS.map((cluster) => {
    const matchPercent = scoreCluster(profile.traitLevels, cluster);
    const reasonNotes = buildReasonNotes(
      profile.traitLevels,
      Object.keys(cluster.weights) as (keyof TraitLevels)[],
    );
    return {
      name: cluster.name,
      matchPercent,
      reasonNotes: reasonNotes.slice(0, 3),
      exampleRoles: cluster.roles,
    };
  }).sort((a, b) => b.matchPercent - a.matchPercent);

  const topCluster = clusters[0];

  return {
    topMatch: {
      title: topCluster.name,
      matchPercent: topCluster.matchPercent,
      reasonNotes: topCluster.reasonNotes,
      supportingSignal: pickSupportingSignal(profile),
    },
    clusters: clusters.slice(0, 4),
    workEnvironment: getEnvironment(profile),
    actionPlan: { steps: buildActionPlan(profile) },
  };
}
