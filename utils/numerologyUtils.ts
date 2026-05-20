const LETTER_VALUES: Record<string, number> = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 1,
  k: 2,
  l: 3,
  m: 4,
  n: 5,
  o: 6,
  p: 7,
  q: 8,
  r: 9,
  s: 1,
  t: 2,
  u: 3,
  v: 4,
  w: 5,
  x: 6,
  y: 7,
  z: 8,
};

const VOWEL_VALUES: Record<string, number> = {
  a: 1,
  e: 5,
  i: 9,
  o: 6,
  u: 3,
};

const NUMBER_TENDENCIES: Record<number, string[]> = {
  1: ["independent drive", "leadership focus"],
  2: ["collaboration", "steady balance"],
  3: ["creative expression", "communication"],
  4: ["structure", "practical execution"],
  5: ["freedom", "adaptability"],
  6: ["responsibility", "people support"],
  7: ["analysis", "introspection"],
  8: ["ambition", "business focus"],
  9: ["purpose", "impact-driven choices"],
  11: ["intuitive vision", "heightened insight"],
  22: ["builder mindset", "long-term scale"],
  33: ["teaching energy", "service leadership"],
};

function reduceNumber(value: number): number {
  while (value > 9 && value !== 11 && value !== 22 && value !== 33) {
    value = value
      .toString()
      .split("")
      .reduce((sum, d) => sum + Number(d), 0);
  }
  return value;
}

function normalizeName(fullName: string): string {
  return fullName.toLowerCase().replace(/[^a-z]/g, "");
}

export function getSoulUrgeNumber(fullName: string): number {
  const sum = normalizeName(fullName)
    .split("")
    .reduce((s, ch) => s + (VOWEL_VALUES[ch] ?? 0), 0);
  return reduceNumber(sum);
}

export function getDestinyNumber(fullName: string): number {
  const sum = normalizeName(fullName)
    .split("")
    .reduce((s, ch) => s + (LETTER_VALUES[ch] ?? 0), 0);
  return reduceNumber(sum);
}

export function getNumerologySignals(
  lifePath: number,
  destiny: number,
  soulUrge: number,
): string[] {
  const signals = new Set<string>();
  (NUMBER_TENDENCIES[lifePath] ?? []).forEach((t) => signals.add(t));
  (NUMBER_TENDENCIES[destiny] ?? []).forEach((t) => signals.add(t));
  (NUMBER_TENDENCIES[soulUrge] ?? []).forEach((t) => signals.add(t));
  return Array.from(signals).slice(0, 4);
}
