import RevealSection from "./RevealSection";

export default function ContradictionSection({ text }: { text: string }) {
  return (
    <RevealSection className="py-12">
      <div className="rounded-3xl bg-lavender/40 px-6 py-12 text-center sm:px-12">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="text-sm text-gold">✦</span>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Your Inner Tension — And How to Use It
          </h3>
          <span className="text-sm text-gold">✦</span>
        </div>
        <p className="mx-auto max-w-2xl text-base font-light italic leading-relaxed text-gray-700">
          {text}
        </p>
      </div>
    </RevealSection>
  );
}
