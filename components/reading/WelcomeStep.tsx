"use client";

interface WelcomeStepProps {
  onNext: () => void;
}

const STATEMENTS = [
  "✦ Some are natural builders",
  "✦ Some are creators",
  "✦ Some are strategists",
  "✦ Some are guides",
];

export default function WelcomeStep({ onNext }: WelcomeStepProps) {
  const delay = (i: number) => ({ animation: `fade-in-up 0.8s ease-out ${i}s both` });

  return (
    <section className="flex min-h-dvh items-center justify-center px-6 py-20">
      <div className="flex max-w-xl flex-col items-center gap-8 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full bg-lavender px-5 py-2 text-sm font-medium text-primary"
          style={delay(0)}
        >
          Your Reading Begins
        </div>

        {/* Text reveal */}
        <div className="flex flex-col gap-3">
          {/* Intro line */}
          <p className="text-sm font-light text-muted" style={delay(0.4)}>
            Every person is wired differently.
          </p>

          {/* Identity statements */}
          <div className="mt-4 flex flex-col gap-2.5">
            {STATEMENTS.map((line, i) => (
              <p
                key={i}
                className="text-base font-normal text-foreground/90 sm:text-lg"
                style={delay(0.8 + i * 0.3)}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Bridge */}
          <div className="mt-6 flex flex-col gap-2">
            <p className="text-sm font-light text-muted" style={delay(2.2)}>
              Your birth patterns reveal part of this story.
            </p>
            <p className="text-sm font-light text-muted" style={delay(2.5)}>
              Your personality and decisions reveal the rest.
            </p>
          </div>

          {/* Emphasis */}
          <p
            className="mt-4 text-lg font-semibold text-foreground sm:text-xl"
            style={delay(3)}
          >
            This reading combines both.
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={onNext}
          className="group mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-deep to-primary px-8 py-4 text-base font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:text-lg"
          style={delay(3.5)}
        >
          Let&apos;s Begin
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </section>
  );
}
