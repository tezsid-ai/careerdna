import { GoogleGenerativeAI } from "@google/generative-ai";
import type { CareerReport, ReadingPayload } from "@/types/reading";
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
  if (!apiKey) {
    console.warn(
      "NEXT_PUBLIC_GEMINI_API_KEY is not configured. Using high-fidelity local fallback generator.",
    );
    return generateFallbackReading(payload);
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = buildPrompt(payload);
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const cleaned = extractJSON(text);
    return JSON.parse(cleaned) as CareerReport;
  } catch (error) {
    console.error(
      "Error calling Gemini API, falling back to local engine:",
      error,
    );
    return generateFallbackReading(payload);
  }
}

function generateFallbackReading(p: ReadingPayload): CareerReport {
  // Generate high-fidelity fallback reading based on astrological element
  let title = "The Practical Leader";
  let explanation =
    "You perform best when organizing structured projects, managing resources, and translating ideas into clear, steady growth.";

  if (p.dominantElement === "Fire") {
    title = "The Strategic Builder";
    explanation =
      "You are driven by growth and momentum, excelling at launching new ideas, taking calculated risks, and building innovative projects.";
  } else if (p.dominantElement === "Air") {
    title = "The Creative Problem Solver";
    explanation =
      "You thrive on ideas and clear communication, performing best in dynamic environments that allow creative thinking and rapid adaptation.";
  } else if (p.dominantElement === "Water") {
    title = "The Independent Thinker";
    explanation =
      "You possess deep focus and intuition, working best in analytical or human-centric environments where you can make strategic decisions.";
  }

  // Top career matches based on dominantElement
  const fireMatches = [
    {
      title: "Entrepreneurship & Startups",
      matchPercent: 94,
      reason:
        "Your fire element combined with a strong life path gives you the natural drive to lead ventures.",
    },
    {
      title: "Product Management",
      matchPercent: 88,
      reason:
        "Aligns with your ability to navigate uncertainty and drive initiatives from spark to execution.",
    },
    {
      title: "Business Strategy & Consulting",
      matchPercent: 86,
      reason:
        "Perfect for your high-level overview and natural desire to scale systems.",
    },
  ];

  const earthMatches = [
    {
      title: "Operations Leadership",
      matchPercent: 93,
      reason:
        "Your earth-based steady energy makes you exceptional at managing complex delivery systems.",
    },
    {
      title: "Finance & Investing",
      matchPercent: 89,
      reason:
        "Leverages your long-term patience, structured planning, and practical follow-through.",
    },
    {
      title: "Business Strategy & Analytics",
      matchPercent: 85,
      reason:
        "Combines your focus on steady systems with analytical decision making.",
    },
  ];

  const airMatches = [
    {
      title: "Digital Marketing & Branding",
      matchPercent: 92,
      reason:
        "Your air energy supercharges communication, making you excellent at media and brand storytelling.",
    },
    {
      title: "Technology & AI Strategy",
      matchPercent: 90,
      reason:
        "Perfect for your future-oriented thinking and adaptability in rapid tech landscapes.",
    },
    {
      title: "Product Management & Design",
      matchPercent: 87,
      reason:
        "Matches your creative problem-solving and focus on user experience.",
    },
  ];

  const waterMatches = [
    {
      title: "Consulting & Advisory Roles",
      matchPercent: 91,
      reason:
        "Your intuitive understanding and focus make you highly credible in guiding others.",
    },
    {
      title: "Strategic Operations",
      matchPercent: 88,
      reason:
        "Perfect for deep, behind-the-scenes strategy that requires analytical patience.",
    },
    {
      title: "Education & Executive Coaching",
      matchPercent: 86,
      reason:
        "Harnesses your natural leadership combined with deep empathy and listening skills.",
    },
  ];

  let topCareerMatches = earthMatches;
  if (p.dominantElement === "Fire") topCareerMatches = fireMatches;
  else if (p.dominantElement === "Air") topCareerMatches = airMatches;
  else if (p.dominantElement === "Water") topCareerMatches = waterMatches;

  // Best Industries
  const bestIndustries = [
    {
      name:
        p.dominantElement === "Air" || p.dominantElement === "Fire"
          ? "Technology & AI"
          : "Finance & Fintech",
      reason:
        "Aligned with your focus on future trends and high-impact structural growth.",
    },
    {
      name: "Digital Business & E-Commerce",
      reason:
        "Excellent fit for your ability to organize workflows in highly scalable markets.",
    },
    {
      name: "Media & Creator Economy",
      reason:
        "Harnesses your communication skills and adaptability in modern digital spaces.",
    },
  ];

  // Natural Strengths
  const naturalStrengths = [
    {
      name: "Strategic Thinking",
      description:
        "You see the big picture and plan multiple steps ahead naturally.",
    },
    {
      name:
        p.dominantElement === "Fire" || p.dominantElement === "Earth"
          ? "Leadership Potential"
          : "Analytical Focus",
      description:
        "You are highly capable of bringing structure to complex situations.",
    },
    {
      name: "Independent Decision Making",
      description:
        "You trust your own judgment and execute without needing constant validation.",
    },
  ];

  return {
    careerPersonality: { title, explanation },
    topCareerMatches,
    bestIndustries,
    naturalStrengths,
  };
}
