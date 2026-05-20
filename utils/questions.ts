export interface QuestionOption {
  key: string;
  text: string;
}

export interface Question {
  text: string;
  options: QuestionOption[];
  wide?: boolean; // Use wider container for many options
  finalPair?: boolean; // Special 2-card layout for Q7
}

export const QUESTIONS = [
  {
    text: "You're at a college fest or joining a new workplace for the first time. What do you naturally do?",
    options: [
      { key: "A", text: "I start talking to people around me pretty easily" },
      { key: "B", text: "I stick close to the one or two people I already know" },
      { key: "C", text: "I quietly observe everything and warm up slowly" },
      { key: "D", text: "Completely depends on my mood that day" },
    ],
  },
  {
    text: "What kind of topics naturally grab your attention the fastest?",
    options: [
      { key: "A", text: "Business, startups, and making money" },
      { key: "B", text: "Technology and how things actually work" },
      { key: "C", text: "Creativity — design, art, music, writing" },
      { key: "D", text: "Human behavior and psychology" },
      { key: "E", text: "Entertainment and trends" },
      { key: "F", text: "Self-growth and motivation" },
      { key: "G", text: "Travel and different cultures" },
    ],
  },
  {
    text: "Which of these would genuinely make you feel most successful in life?",
    options: [
      { key: "A", text: "Becoming financially wealthy" },
      { key: "B", text: "Being deeply respected by people in my field" },
      { key: "C", text: "Having complete freedom over my time and choices" },
      { key: "D", text: "Doing work that feels truly meaningful" },
      { key: "E", text: "Becoming famous or respected by a large audience" },
      { key: "F", text: "Building something that lasts — a company, a legacy, a body of work" },
    ],
  },
  {
    text: "What drains your energy the fastest at work or in life?",
    options: [
      { key: "A", text: "Too many rules and processes I didn't create" },
      { key: "B", text: "Too much talking, impressing people, and being 'on' all the time" },
      { key: "C", text: "Doing the same things repeatedly with no variety" },
      { key: "D", text: "Constant uncertainty and no clear direction" },
      { key: "E", text: "Being controlled or micromanaged by someone else" },
      { key: "F", text: "Feeling invisible, unnoticed, or undervalued" },
    ],
  },
  {
    text: "In group projects or real-life situations, what role do you usually end up taking — even if you didn't plan to?",
    options: [
      { key: "A", text: "I naturally end up leading or directing the group" },
      { key: "B", text: "I quietly handle the most important work" },
      { key: "C", text: "I organize, plan, and make sure everything runs properly" },
      { key: "D", text: "I come up with most of the ideas and concepts" },
      { key: "E", text: "I usually step back and let others take the lead" },
    ],
  },
  {
    text: "Even when nobody forces you, what kind of activities do you naturally keep coming back to?",
    options: [
      { key: "A", text: "Building something — a business, a project, a system" },
      { key: "B", text: "Learning and understanding things deeply" },
      { key: "C", text: "Creating — content, art, music, writing, design" },
      { key: "D", text: "Exploring — travel, new experiences, meeting people" },
      { key: "E", text: "Helping or guiding other people through challenges" },
      { key: "F", text: "Gaming, entertainment, and enjoying life" },
    ],
  },
  {
    text: "When you start something exciting, what usually happens after a few weeks?",
    options: [
      { key: "A", text: "I stay consistent and keep improving it steadily" },
      { key: "B", text: "I lose interest and move on to something new" },
      { key: "C", text: "Depends — I stay if I see results, otherwise I drop it" },
      { key: "D", text: "I overthink too much and delay actually doing it" },
    ],
  },
  {
    text: "Which situation would frustrate you more after 5 years?",
    options: [
      { key: "A", text: "I took a big risk and it failed badly" },
      { key: "B", text: "I never tried anything bigger and stayed average" },
    ],
  },
];
