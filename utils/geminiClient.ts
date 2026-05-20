import { GoogleGenerativeAI } from "@google/generative-ai";
import type { ReadingPayload, CareerReport } from "@/types/reading";
import { buildPrompt } from "@/utils/reportPrompt";
import { buildBaseReport } from "@/utils/reportBuilder";

function extractJSON(text: string): string {
  // Try to find JSON block in markdown fences
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenced) return fenced[1].trim();
  // Try to find first { ... } block
  const braceStart = text.indexOf("{");
  const braceEnd = text.lastIndexOf("}");
  if (braceStart !== -1 && braceEnd > braceStart) {
    return text.slice(braceStart, braceEnd + 1);
  }
  return text;
}

export async function generateCareerReading(
  payload: ReadingPayload,
): Promise<CareerReport> {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!apiKey) throw new Error("NEXT_PUBLIC_GEMINI_API_KEY is not configured.");

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const baseReport = buildBaseReport(payload.profile, payload.careerMapping);
  const prompt = buildPrompt(payload);
  const result = await model.generateContent(prompt);
  const text = result.response.text();

  try {
    const parsed = JSON.parse(text) as CareerReport;
    return mergeReport(baseReport, parsed);
  } catch {
    const cleaned = extractJSON(text);
    const parsed = JSON.parse(cleaned) as CareerReport;
    return mergeReport(baseReport, parsed);
  }
}

function mergeReport(
  baseReport: CareerReport,
  aiReport?: CareerReport,
): CareerReport {
  if (!aiReport) return baseReport;

  return {
    archetype: {
      name: aiReport.archetype?.name?.trim() || baseReport.archetype.name,
      tagline:
        aiReport.archetype?.tagline?.trim() || baseReport.archetype.tagline,
    },
    topCareerMatch: {
      title: baseReport.topCareerMatch.title,
      matchPercent: baseReport.topCareerMatch.matchPercent,
      reason:
        aiReport.topCareerMatch?.reason?.trim() ||
        baseReport.topCareerMatch.reason,
      supportingSignal:
        aiReport.topCareerMatch?.supportingSignal?.trim() ||
        baseReport.topCareerMatch.supportingSignal,
    },
    careerClusters: baseReport.careerClusters.map((cluster, index) => ({
      ...cluster,
      reason:
        aiReport.careerClusters?.[index]?.reason?.trim() || cluster.reason,
    })),
    workEnvironment: baseReport.workEnvironment,
    actionPlan: baseReport.actionPlan,
  };
}
