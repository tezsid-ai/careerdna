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

export const QUESTIONS: Question[] = [
  {
    text: "At a party full of strangers, what do you usually do first?",
    options: [
      { key: "A", text: "I start talking to people pretty easily" },
      { key: "B", text: "I stay close to the few people I already know" },
      { key: "C", text: "I observe quietly and warm up slowly" },
      { key: "D", text: "Depends entirely on how I'm feeling that day" },
    ],
  },
  {
    text: "What kind of content can you watch, read, or listen to for hours without getting bored?",
    wide: true,
    options: [
      { key: "A", text: "Business, money, entrepreneurship" },
      { key: "B", text: "Technology, science, how things work" },
      { key: "C", text: "Creative stuff — design, art, music, storytelling" },
      { key: "D", text: "Psychology, human behavior, relationships" },
      { key: "E", text: "Gaming, entertainment, pop culture" },
      { key: "F", text: "Motivation, self-improvement, mindset" },
      { key: "G", text: "Travel, lifestyle, culture, exploration" },
    ],
  },
  {
    text: "Which of these would genuinely make you feel most successful in life?",
    wide: true,
    options: [
      { key: "A", text: "Becoming financially wealthy" },
      { key: "B", text: "Being deeply respected by people in my field" },
      { key: "C", text: "Having complete freedom over my time and choices" },
      { key: "D", text: "Doing work that feels truly meaningful" },
      { key: "E", text: "Becoming well-known or influential" },
      { key: "F", text: "Building something that lasts — a company, a legacy, a body of work" },
    ],
  },
  {
    text: "What drains your energy the fastest at work or in life?",
    wide: true,
    options: [
      { key: "A", text: "Too many rules and processes I didn't create" },
      { key: "B", text: "Too much social interaction and performance" },
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
      { key: "D", text: "I generate most of the ideas and concepts" },
      { key: "E", text: "I usually step back and let others take the lead" },
    ],
  },
  {
    text: "If money was completely sorted for life — you never had to work again — what would you honestly spend most of your time doing?",
    wide: true,
    options: [
      { key: "A", text: "Building a business, project, or system" },
      { key: "B", text: "Learning, researching, studying things deeply" },
      { key: "C", text: "Creating — content, art, music, writing, design" },
      { key: "D", text: "Traveling and experiencing different cultures and people" },
      { key: "E", text: "Helping, coaching, or guiding other people through challenges" },
      { key: "F", text: "Gaming, watching content, relaxing and enjoying life" },
    ],
  },
  {
    text: "Which of these feels more painful to you — be honest with yourself:",
    finalPair: true,
    options: [
      { key: "A", text: "Taking a big risk and failing badly" },
      { key: "B", text: "Staying stuck in the same life and career forever" },
    ],
  },
];
