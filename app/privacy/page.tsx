import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — CareerDNA",
  description:
    "Learn how CareerDNA handles your personal data and protects your privacy.",
};

export default function PrivacyPage() {
  return (
    <main className="relative z-10 mx-auto min-h-[calc(100dvh-8rem)] max-w-3xl px-6 pt-28 pb-16 sm:pt-32">
      {/* Back link */}
      <div className="mt-1 relative -left-2 -top-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 border px-3 py-2 rounded-full text-sm font-medium text-primary transition-colors hover:text-primary-deep"
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
      {/* Heading */}
      <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
        Privacy Policy
      </h1>
      <div className="mt-1 h-0.5 w-12 rounded-full bg-gradient-to-r from-primary to-gold" />

      {/* Content */}
      <div className="mt-8 flex flex-col gap-6 text-sm font-light leading-relaxed text-muted sm:text-base">
        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground sm:text-lg">
            Information We Collect
          </h2>
          <p>
            CareerDNA collects basic information you voluntarily provide during
            the reading process, including your name, date of birth, birth city,
            and optionally your birth time. This data is used exclusively to
            generate your personalized career reading.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground sm:text-lg">
            How We Use Your Data
          </h2>
          <p>
            Your data is processed in real-time to generate career insights and
            is not stored permanently on our servers. We do not create user
            accounts, and your reading data is not linked to any persistent
            identity.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground sm:text-lg">
            Third-Party Services
          </h2>
          <p>
            We use Google&apos;s Gemini AI to process your reading data and
            generate career insights. Data sent to this service is governed by
            Google&apos;s privacy policies. We do not share your data with any
            other third parties for marketing or advertising purposes.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground sm:text-lg">
            Data Retention
          </h2>
          <p>
            We do not retain your personal data after your reading session ends.
            No cookies are used for tracking purposes. Basic analytics may be
            collected in anonymous, aggregated form.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground sm:text-lg">
            Your Rights
          </h2>
          <p>
            Since we do not store personal data persistently, there is no stored
            data to request deletion of. If you have any concerns about how your
            data was handled during a session, please contact us.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground sm:text-lg">
            Changes to This Policy
          </h2>
          <p>
            We may update this privacy policy from time to time. Any changes will
            be reflected on this page with an updated effective date.
          </p>
        </section>
      </div>

      
    </main>
  );
}
