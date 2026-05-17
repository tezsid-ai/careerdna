// Micro insight strings mapped by question index and selected answer key

const INSIGHTS: Record<number, Record<string, string>> = {
  0: {
    A: "You carry natural social energy that others gravitate toward. This is a significant asset in high-visibility environments.",
    B: "You build deep rather than wide — your connections tend to be meaningful and lasting. This shapes the kind of work you'll thrive in.",
    C: "Your tendency to observe before engaging suggests a deep perceptiveness. You often understand rooms that others are still trying to read.",
    D: "Your adaptability is a strength — you can read and respond to different environments. This contextual intelligence is rarer than it seems.",
  },
  2: {
    A: "Financial drive is a powerful motivator — and when channeled into the right structure, it creates remarkable focus.",
    B: "The need to be respected and recognized by peers often signals someone who is building toward mastery and deep expertise.",
    C: "Freedom as the primary goal is a profound signal. It shapes not just what career fits — but what kind of life architecture works for you.",
    D: "Meaning-driven people rarely settle. They may take longer to find their path — but when they do, they go all in.",
    E: "The desire for influence and visibility often comes with a natural charisma and communication ability that others notice even before you do.",
    F: "Builders are a rare type. They are not just motivated by outcomes — they are energized by the act of creation itself.",
  },
  4: {
    A: "Natural leaders often don't choose leadership — it chooses them. You likely stepped up not for the title but because you saw what needed to happen.",
    B: "The quiet executor is often the most valuable person in the room. You deliver while others discuss — a rare and powerful trait.",
    C: "Coordinators are the invisible architecture of every successful team. Without you, ideas stay ideas.",
    D: "Idea generators see possibilities others miss. The challenge — and the opportunity — is learning to channel that into focused execution.",
    E: "Stepping back is not always passive — sometimes it reflects emotional intelligence and the wisdom to know when not to lead.",
  },
  6: {
    A: "You lean toward security and certainty — and that's not a weakness. The key is finding paths that feel bold enough to be meaningful but structured enough to feel safe.",
    B: "The fear of stagnation is one of the most powerful drivers of growth. You are unlikely to stay stuck for long — even when the path forward isn't clear yet.",
  },
};

// Question indices after which a micro insight should appear
export const INSIGHT_AFTER = [0, 2, 4, 6] as const;

export function shouldShowInsight(questionIndex: number): boolean {
  return INSIGHT_AFTER.includes(questionIndex as 0 | 2 | 4 | 6);
}

export function getMicroInsight(questionIndex: number, answer: string): string {
  return INSIGHTS[questionIndex]?.[answer] ?? "";
}
