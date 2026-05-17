import { GoogleGenerativeAI } from "@google/generative-ai";
import type { ReadingPayload, CareerReport } from "@/types/reading";
import { buildPrompt } from "@/utils/reportPrompt";

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

  const prompt = buildPrompt(payload);
  const result = await model.generateContent(prompt);
  const text = result.response.text();

  try {
    return JSON.parse(text) as CareerReport;
  } catch {
    const cleaned = extractJSON(text);
    return JSON.parse(cleaned) as CareerReport;
  }
}
