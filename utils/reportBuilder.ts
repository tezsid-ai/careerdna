import type { CareerReport } from "@/types/reading";
import type { CareerMapping } from "@/utils/careerMapping";
import type { StructuredProfile } from "@/utils/profileEngine";

export function buildBaseReport(
  profile: StructuredProfile,
  mapping: CareerMapping,
): CareerReport {
  return {
    archetype: {
      name: profile.dominantPattern,
      tagline: profile.strengths.join(". "),
    },
    topCareerMatch: {
      title: mapping.topMatch.title,
      matchPercent: mapping.topMatch.matchPercent,
      reason: mapping.topMatch.reasonNotes.join(". "),
      supportingSignal: mapping.topMatch.supportingSignal,
    },
    careerClusters: mapping.clusters.map((cluster) => ({
      name: cluster.name,
      matchPercent: cluster.matchPercent,
      reason: cluster.reasonNotes.join(". "),
      exampleRoles: cluster.exampleRoles,
    })),
    workEnvironment: mapping.workEnvironment,
    actionPlan: mapping.actionPlan,
  };
}
