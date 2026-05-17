const SIGN_RANGES: [number, number, string][] = [
  [120, 218, "Aquarius"], [219, 320, "Pisces"], [321, 419, "Aries"],
  [420, 520, "Taurus"], [521, 620, "Gemini"], [621, 722, "Cancer"],
  [723, 822, "Leo"], [823, 922, "Virgo"], [923, 1022, "Libra"],
  [1023, 1121, "Scorpio"], [1122, 1221, "Sagittarius"],
];

export function getSunSign(dob: string): string {
  const [, m, d] = dob.split("-").map(Number);
  const key = m * 100 + d;
  for (const [start, end, sign] of SIGN_RANGES) {
    if (key >= start && key <= end) return sign;
  }
  return "Capricorn"; // Dec 22 – Jan 19
}

const ELEMENTS: Record<string, string> = {
  Aries: "Fire", Leo: "Fire", Sagittarius: "Fire",
  Taurus: "Earth", Virgo: "Earth", Capricorn: "Earth",
  Gemini: "Air", Libra: "Air", Aquarius: "Air",
  Cancer: "Water", Scorpio: "Water", Pisces: "Water",
};

export function getDominantElement(sunSign: string): string {
  return ELEMENTS[sunSign] ?? "Unknown";
}

const VOWEL_VALUES: Record<string, number> = {
  a: 1, e: 5, i: 9, o: 6, u: 3,
};

function reduceNum(n: number): number {
  while (n > 9 && n !== 11 && n !== 22 && n !== 33) {
    n = n.toString().split("").reduce((s, d) => s + parseInt(d, 10), 0);
  }
  return n;
}

export function getSoulUrgeNumber(fullName: string): number {
  const sum = fullName
    .toLowerCase()
    .split("")
    .reduce((s, ch) => s + (VOWEL_VALUES[ch] ?? 0), 0);
  return reduceNum(sum);
}
