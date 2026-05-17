function reduceToSingle(num: number): number {
  while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
    num = num
      .toString()
      .split("")
      .reduce((sum, d) => sum + parseInt(d, 10), 0);
  }
  return num;
}

export function calculateLifePath(dob: string): number {
  const [year, month, day] = dob.split("-").map(Number);
  const dayR = reduceToSingle(day);
  const monthR = reduceToSingle(month);
  const yearR = reduceToSingle(year);
  return reduceToSingle(dayR + monthR + yearR);
}

const INSIGHTS: Record<number, string> = {
  1: "Your birth pattern carries the energy of independence and original thinking.",
  2: "Your birth pattern resonates with harmony, intuition, and deep partnership.",
  3: "Your birth pattern vibrates with creative expression and joyful communication.",
  4: "Your birth pattern reflects discipline, stability, and practical mastery.",
  5: "Your birth pattern pulses with freedom, adventure, and dynamic change.",
  6: "Your birth pattern carries the warmth of nurturing, responsibility, and vision.",
  7: "Your birth pattern holds the depth of analysis, spirituality, and inner knowing.",
  8: "Your birth pattern reveals a natural orientation toward power, ambition, and large-scale impact.",
  9: "Your birth pattern resonates with compassion, wisdom, and a global humanitarian purpose.",
  11: "Your birth pattern holds the frequency of intuition and deep insight — a rare visionary path.",
  22: "Your birth pattern carries the blueprint of a master builder — turning dreams into lasting reality.",
  33: "Your birth pattern vibrates with the energy of a master teacher — uplifting through love.",
};

export function getLifePathInsight(lifePathNumber: number): string {
  return INSIGHTS[lifePathNumber] || INSIGHTS[reduceToSingle(lifePathNumber)] || "";
}
