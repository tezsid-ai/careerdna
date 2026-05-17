import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
      {/* Main headline */}
      <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
        Discover the career you&apos;re{" "}
        <span className="bg-gradient-to-r from-primary to-primary-deep bg-clip-text text-transparent">
          naturally built
        </span>{" "}
        for
      </h1>

      {/* Subheadline */}
      <p className="max-w-xl text-base font-light leading-relaxed text-muted sm:text-lg md:text-xl">
        Your birth patterns, personality, and hidden drives — decoded through
        astrology, numerology, and AI.
      </p>

      {/* CTA button */}
      <Link
        href="/reading"
        className="group relative mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-deep to-primary px-8 py-4 text-base font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:w-auto sm:text-lg"
        style={{ animation: "glow 4s ease-in-out infinite" }}
      >
        Begin Your Reading
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          ✦
        </span>
      </Link>

      {/* Trust line */}
      <p className="mt-1 text-xs font-light tracking-wide text-muted/60 sm:text-sm">
        No signup required · 5 minutes · Completely personal
      </p>
    </div>
  );
}
