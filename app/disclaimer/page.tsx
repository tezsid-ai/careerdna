import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer — CareerDNA",
  description:
    "Important disclaimers about CareerDNA's AI-powered career prediction and guidance service.",
};

export default function DisclaimerPage() {
  return (
    <main className="relative z-10 mx-auto min-h-[calc(100dvh-8rem)] max-w-3xl px-6 pt-28 pb-16 sm:pt-32">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
        Disclaimer
      </h1>
      <div className="mt-1 h-0.5 w-12 rounded-full bg-gradient-to-r from-primary to-gold" />

      {/* Content */}
      <div className="mt-8 flex flex-col gap-6 text-sm font-light leading-relaxed text-muted sm:text-base">
        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground sm:text-lg">
            General Information
          </h2>
          <p>
            CareerDNA is an AI-powered career guidance platform that generates
            personalized career insights based on birth-related data, personality
            assessments, and algorithmic analysis. The insights provided are
            intended for informational and self-discovery purposes only.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground sm:text-lg">
            Not Professional Advice
          </h2>
          <p>
            The career predictions, personality analyses, and recommendations
            provided by CareerDNA do not constitute professional career
            counseling, psychological evaluation, or financial advice. We
            recommend consulting qualified professionals for career, educational,
            or financial decisions.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground sm:text-lg">
            Accuracy of Results
          </h2>
          <p>
            While our AI models strive for meaningful insights, results are
            generated algorithmically and may not fully capture the complexity of
            individual circumstances. CareerDNA does not guarantee the accuracy,
            completeness, or applicability of any results.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground sm:text-lg">
            Astrological & Numerological Elements
          </h2>
          <p>
            Certain aspects of the reading incorporate astrological and
            numerological frameworks. These elements are included as part of a
            holistic, interpretive experience and should not be considered
            scientific predictions.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground sm:text-lg">
            Changes to This Disclaimer
          </h2>
          <p>
            We reserve the right to update this disclaimer at any time. Continued
            use of CareerDNA after changes constitutes acceptance of the revised
            terms.
          </p>
        </section>
      </div>

      {/* Back link */}
      <div className="mt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-deep"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>
    </main>
  );
}
