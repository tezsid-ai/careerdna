export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Large sacred geometry mandala — center */}
      <svg
        className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 md:h-[900px] md:w-[900px]"
        viewBox="0 0 500 500"
        fill="none"
        style={{ animation: "spin-slow 40s linear infinite" }}
      >
        {/* Outer circle */}
        <circle cx="250" cy="250" r="240" stroke="#000" strokeWidth="0.5" opacity="0.1" />
        <circle cx="250" cy="250" r="200" stroke="#000" strokeWidth="0.4" opacity="0.08" />
        <circle cx="250" cy="250" r="160" stroke="#000" strokeWidth="0.4" opacity="0.08" />
        <circle cx="250" cy="250" r="120" stroke="#000" strokeWidth="0.3" opacity="0.06" />
        {/* Hexagonal sacred geometry */}
        {[0, 60, 120, 180, 240, 300].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x = 250 + 200 * Math.cos(rad);
          const y = 250 + 200 * Math.sin(rad);
          return (
            <line
              key={angle}
              x1="250" y1="250" x2={x} y2={y}
              stroke="#000" strokeWidth="0.3" opacity="0.07"
            />
          );
        })}
        {/* Inner triangles */}
        <polygon
          points="250,50 450,400 50,400"
          stroke="#000" strokeWidth="0.4" fill="none" opacity="0.06"
        />
        <polygon
          points="250,450 60,100 450,100"
          stroke="#000" strokeWidth="0.4" fill="none" opacity="0.09"
        />
      </svg>

      {/* Constellation dots — scattered */}
      <ConstellationDots />

      {/* Secondary geometry — top-right accent */}
      <svg
        className="absolute -top-20 -right-20 h-[400px] w-[400px] md:h-[500px] md:w-[500px]"
        viewBox="0 0 300 300"
        fill="none"
        style={{ animation: "float 30s ease-in-out infinite" }}
      >
        <circle cx="150" cy="150" r="140" stroke="#000" strokeWidth="0.5" opacity="0.1" />
        <circle cx="150" cy="150" r="100" stroke="#000" strokeWidth="0.4" opacity="0.07" />
        <circle cx="150" cy="150" r="60" stroke="#000" strokeWidth="0.3" opacity="0.06" />
      </svg>

      {/* Bottom-left accent geometry */}
      <svg
        className="absolute -bottom-16 -left-16 h-[350px] w-[350px] md:h-[450px] md:w-[450px]"
        viewBox="0 0 300 300"
        fill="none"
        style={{ animation: "float 35s ease-in-out infinite reverse" }}
      >
        <circle cx="150" cy="150" r="130" stroke="#f0e8c8" strokeWidth="0.5" opacity="0.08" />
        <circle cx="150" cy="150" r="90" stroke="#e8e0f0" strokeWidth="0.4" opacity="0.06" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x = 150 + 90 * Math.cos(rad);
          const y = 150 + 90 * Math.sin(rad);
          return (
            <circle key={angle} cx={x} cy={y} r="2" fill="#d4c49e" opacity="0.1" />
          );
        })}
      </svg>
    </div>
  );
}

/* ── Constellation Dots sub-component ── */
function ConstellationDots() {
  const dots = [
    { x: 10, y: 15 }, { x: 25, y: 8 }, { x: 40, y: 22 },
    { x: 55, y: 12 }, { x: 70, y: 28 }, { x: 85, y: 18 },
    { x: 15, y: 45 }, { x: 35, y: 55 }, { x: 60, y: 42 },
    { x: 80, y: 60 }, { x: 20, y: 75 }, { x: 45, y: 80 },
    { x: 65, y: 72 }, { x: 90, y: 85 }, { x: 50, y: 90 },
  ];

  const lines: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
    [6, 7], [7, 8], [8, 9], [10, 11], [11, 12],
    [12, 13], [1, 7], [3, 8], [11, 14],
  ];

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ animation: "pulse-soft 25s ease-in-out infinite" }}
    >
      {lines.map(([a, b], i) => (
        <line
          key={`l-${i}`}
          x1={dots[a].x} y1={dots[a].y}
          x2={dots[b].x} y2={dots[b].y}
          stroke="#c9b8e8" strokeWidth="0.15" opacity="0.1"
        />
      ))}
      {dots.map((d, i) => (
        <circle key={`d-${i}`} cx={d.x} cy={d.y} r="0.3" fill="#9b8ec4" opacity="0.15" />
      ))}
    </svg>
  );
}
