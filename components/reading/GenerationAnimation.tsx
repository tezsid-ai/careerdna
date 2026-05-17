export default function GenerationAnimation() {
  return (
    <div className="mx-auto mb-10 h-40 w-40 sm:h-48 sm:w-48">
      <svg
        viewBox="0 0 200 200"
        fill="none"
        className="h-full w-full"
        style={{ animation: "spin-slow 30s linear infinite" }}
      >
        <circle cx="100" cy="100" r="95" stroke="#4f3b8b" strokeWidth="0.5" opacity="0.15" />
        <circle cx="100" cy="100" r="75" stroke="#c9a84c" strokeWidth="0.4" opacity="0.12" />
        <circle cx="100" cy="100" r="55" stroke="#4f3b8b" strokeWidth="0.4" opacity="0.1" />
        <circle cx="100" cy="100" r="35" stroke="#c9a84c" strokeWidth="0.3" opacity="0.15" />
        {[0, 60, 120, 180, 240, 300].map((a) => {
          const r = (a * Math.PI) / 180;
          return (
            <line
              key={a}
              x1="100" y1="100"
              x2={100 + 75 * Math.cos(r)} y2={100 + 75 * Math.sin(r)}
              stroke="#4f3b8b" strokeWidth="0.3" opacity="0.08"
            />
          );
        })}
        <polygon
          points="100,25 175,137 25,137"
          stroke="#c9a84c" strokeWidth="0.4" fill="none" opacity="0.08"
        />
        <polygon
          points="100,175 25,63 175,63"
          stroke="#c9a84c" strokeWidth="0.4" fill="none" opacity="0.08"
        />
      </svg>
    </div>
  );
}
