export default function HeroBadge() {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full bg-lavender px-5 py-2 text-sm font-medium text-primary"
      style={{ animation: "shimmer 4s ease-in-out infinite" }}
    >
      <span className="text-gold-light">✦</span>
      <span>AI-Powered Career Reading</span>
      <span className="text-gold-light">✦</span>
    </div>
  );
}
