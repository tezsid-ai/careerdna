const SIGN_RANGES: [number, number, string][] = [
  [120, 218, "Aquarius"],
  [219, 320, "Pisces"],
  [321, 419, "Aries"],
  [420, 520, "Taurus"],
  [521, 620, "Gemini"],
  [621, 722, "Cancer"],
  [723, 822, "Leo"],
  [823, 922, "Virgo"],
  [923, 1022, "Libra"],
  [1023, 1121, "Scorpio"],
  [1122, 1221, "Sagittarius"],
];

const SIGNS = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
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
  Aries: "Fire",
  Leo: "Fire",
  Sagittarius: "Fire",
  Taurus: "Earth",
  Virgo: "Earth",
  Capricorn: "Earth",
  Gemini: "Air",
  Libra: "Air",
  Aquarius: "Air",
  Cancer: "Water",
  Scorpio: "Water",
  Pisces: "Water",
};

export function getDominantElement(sunSign: string): string {
  return ELEMENTS[sunSign] ?? "Unknown";
}

function hashSeed(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) % 100000;
  }
  return hash;
}

function getDayOfYear(dob: string): number {
  const [year, month, day] = dob.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  const start = new Date(Date.UTC(year, 0, 0));
  const diff = date.getTime() - start.getTime();
  return Math.floor(diff / 86400000);
}

function getTimeSeed(birthTime: string): number {
  if (!birthTime || birthTime === "Not provided") return 12 * 60;
  const [h, m] = birthTime.split(":").map(Number);
  return (h || 12) * 60 + (m || 0);
}

export function getMoonSign(
  dob: string,
  birthTime: string,
  birthCity: string,
): string {
  const seed = getDayOfYear(dob) + getTimeSeed(birthTime) + hashSeed(birthCity);
  return SIGNS[seed % SIGNS.length];
}

export function getAscendant(
  dob: string,
  birthTime: string,
  birthCity: string,
): string {
  const seed =
    getDayOfYear(dob) * 3 + getTimeSeed(birthTime) * 2 + hashSeed(birthCity);
  return SIGNS[seed % SIGNS.length];
}

export function getCareerIndicator(ascendant: string): string {
  const map: Record<string, string> = {
    Aries: "initiative-led career growth",
    Taurus: "steady builder energy",
    Gemini: "communication-driven work",
    Cancer: "people-first environments",
    Leo: "visible leadership roles",
    Virgo: "precision and systems",
    Libra: "collaboration and balance",
    Scorpio: "deep focus and strategy",
    Sagittarius: "growth and expansion",
    Capricorn: "long-term authority",
    Aquarius: "future-focused innovation",
    Pisces: "creative service focus",
  };
  return map[ascendant] ?? "balanced career focus";
}

export function getPlanetaryTendencies(
  sunSign: string,
  moonSign: string,
  ascendant: string,
): string[] {
  const element = getDominantElement(sunSign);
  const tendencies = new Set<string>();
  if (element === "Fire") tendencies.add("drive and bold momentum");
  if (element === "Earth") tendencies.add("practical follow-through");
  if (element === "Air") tendencies.add("ideas and communication");
  if (element === "Water") tendencies.add("emotional depth and care");
  if (moonSign === "Virgo" || moonSign === "Capricorn")
    tendencies.add("structured inner pacing");
  if (moonSign === "Aries" || moonSign === "Leo")
    tendencies.add("fast emotional ignition");
  if (ascendant === "Aquarius" || ascendant === "Gemini")
    tendencies.add("future-oriented thinking");
  if (ascendant === "Taurus" || ascendant === "Libra")
    tendencies.add("steady social diplomacy");
  return Array.from(tendencies).slice(0, 4);
}
