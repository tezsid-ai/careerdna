interface MicroInsightProps {
  insight: string;
  lifePathNumber: number;
}

export default function MicroInsight({ insight, lifePathNumber }: MicroInsightProps) {
  return (
    <div
      className="mt-3 rounded-2xl border-l-4 border-primary bg-lavender/60 px-4 py-3"
      style={{ animation: "slide-in 0.5s ease-out both" }}
    >
      <p className="text-xs font-semibold text-primary">
        <span className="mr-1.5 text-gold">✦</span>
        Life Path {lifePathNumber}
      </p>
      <p className="mt-1 text-sm font-light leading-relaxed text-foreground/80">
        {insight}
      </p>
    </div>
  );
}
