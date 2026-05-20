import type { ReadingPayload } from "@/types/reading";

const LABELS = [
  "Social Energy",
  "Content Interest",
  "Success Definition",
  "Energy Drain",
  "Natural Role",
  "Unconstrained Desire",
  "Risk Orientation",
];

export function buildPrompt(p: ReadingPayload): string {
  const qBlock = Object.entries(p.answerTexts)
    .map(([k, v], i) => `Q${i + 1} ${LABELS[i] ?? ""}: ${v}`)
    .join("\n");

  const traitBlock = Object.entries(p.traitScores)
    .map(([k, v]) => `${k}: ${v}`)
    .join(", ");

  const contradictionBlock =
    p.contradictions.length > 0 ? p.contradictions.join(", ") : "None detected";

  return `You are CareerDNA — an AI career prediction and guidance system. You combine behavioral signals with subtle astrology and numerology to personalize insights, but career guidance is the main focus. Write in simple, clean, modern Indian-English. Avoid mystical, poetic, or overly intellectual language. Keep sentences short and easy to scan.

Based on the following person's complete profile, generate their career reading as a JSON object matching the exact structure specified below.

PERSON'S PROFILE:
Name: ${p.name}
Date of Birth: ${p.dob}
Birth City: ${p.birthCity}
Birth Time: ${p.birthTime}
Life Path Number: ${p.lifePathNumber}

BEHAVIORAL ANSWERS:
${qBlock}

TRAIT SCORES (internal — use to inform writing, never mention scores explicitly):
${traitBlock}

CONTRADICTIONS DETECTED:
${contradictionBlock}

ASTROLOGY CONTEXT:
Sun Sign: ${p.sunSign}
Dominant Element: ${p.dominantElement}
Life Path Number: ${p.lifePathNumber}
Soul Urge: ${p.soulUrge}

REQUIRED JSON OUTPUT — return ONLY this JSON object, no markdown, no explanation:
{
  "archetype": {
    "name": "string 2-4 words, a career personality name",
    "tagline": "string 1 short sentence, simple and career-focused"
  },
  "topCareerMatch": {
    "title": "string 2-5 words",
    "matchPercent": 92,
    "reason": "string 1-2 sentences, simple and career-focused",
    "supportingSignal": "string 1 short line that subtly references life path or sun sign/element"
  },
  "careerClusters": [
    {
      "name": "string",
      "matchPercent": 88,
      "reason": "string 1-2 sentences, simple and practical",
      "exampleRoles": ["string","string","string"]
    }
  ],
  "workEnvironment": {
    "thrives": ["string","string","string","string"],
    "drains": ["string","string","string","string"]
  },
  "actionPlan": { "steps": ["string","string","string"] }
}

TONE RULES:
- Simple, clean, and emotionally relatable for Indian users.
- Avoid corporate psychology jargon, Western personality terms, and poetic language.
- Keep it practical, believable, and career-focused.
- Prefer India-relevant, modern roles and environments.
- Subtly integrate astrology/numerology as a supporting signal only.
- Reference their answers so it feels personal.
- Return ONLY the JSON.`;
}
