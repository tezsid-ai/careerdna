export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-8 flex items-center justify-center gap-3">
      <span className="text-sm text-gold">✦</span>
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        {title}
      </h3>
      <span className="text-sm text-gold">✦</span>
    </div>
  );
}
