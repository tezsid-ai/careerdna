const STROKE_COLOR = "#4B3F8A";
const SIZE = 280;
const ARC_CONFIG = [
  { r: 260, opacity: 0.1, width: 0.8 },
  { r: 220, opacity: 0.12, width: 0.8 },
  { r: 180, opacity: 0.13, width: 1 },
  { r: 140, opacity: 0.15, width: 1 },
  { r: 100, opacity: 0.16, width: 1 },
  { r: 60, opacity: 0.18, width: 1 },
  { r: 30, opacity: 0.18, width: 1 },
];

export default function HeroBackground() {
  // const topLeftStar = createStarPoints(0, 0, 6, 155, 130);
  // const bottomRightStar = createStarPoints(SIZE, SIZE, 6, 155, 130);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      <div className="pointer-events-none absolute left-0 top-0 h-[160px] w-[160px] overflow-hidden md:h-[280px] md:w-[280px]">
        <svg viewBox="0 0 280 280" width="100%" height="100%" fill="none">
          <defs>
            <clipPath id="corner-clip-tl" clipPathUnits="userSpaceOnUse">
              <rect x="0" y="0" width="280" height="280" />
            </clipPath>
          </defs>
          {ARC_CONFIG.map((arc) => (
            <path
              key={`tl-arc-${arc.r}`}
              d={createTopLeftArc(arc.r)}
              stroke={STROKE_COLOR}
              strokeOpacity={arc.opacity}
              strokeWidth={arc.width}
              fill="none"
            />
          ))}
          <g
            clipPath="url(#corner-clip-tl)"
            style={{
              animation: "spin 50s linear infinite",
              transformOrigin: "0px 0px",
            }}
          >
            <polygon
              // points={topLeftStar}
              stroke={STROKE_COLOR}
              strokeOpacity={0.08}
              strokeWidth={0.7}
              fill="none"
            />
          </g>
        </svg>
      </div>

      <div className="pointer-events-none absolute bottom-0 right-0 h-[160px] w-[160px] overflow-hidden md:h-[280px] md:w-[280px]">
        <svg viewBox="0 0 280 280" width="100%" height="100%" fill="none">
          <defs>
            <clipPath id="corner-clip-br" clipPathUnits="userSpaceOnUse">
              <rect x="0" y="0" width="280" height="280" />
            </clipPath>
          </defs>
          {ARC_CONFIG.map((arc) => (
            <path
              key={`br-arc-${arc.r}`}
              d={createBottomRightArc(arc.r)}
              stroke={STROKE_COLOR}
              strokeOpacity={arc.opacity}
              strokeWidth={arc.width}
              fill="none"
            />
          ))}
          <g
            clipPath="url(#corner-clip-br)"
            style={{
              animation: "spin 50s linear infinite reverse",
              transformOrigin: "280px 280px",
            }}
          >
            <polygon
              // points={bottomRightStar}
              stroke={STROKE_COLOR}
              strokeOpacity={0.08}
              strokeWidth={0.7}
              fill="none"
            />
          </g>
        </svg>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function createTopLeftArc(radius: number) {
  return `M 0 ${radius} A ${radius} ${radius} 0 0 1 ${radius} 0`;
}

function createBottomRightArc(radius: number) {
  const start = SIZE - radius;
  return `M ${SIZE} ${start} A ${radius} ${radius} 0 0 0 ${start} ${SIZE}`;
}

function createStarPoints(
  centerX: number,
  centerY: number,
  points: number,
  outerRadius: number,
  innerRadius: number,
) {
  const step = (Math.PI * 2) / (points * 2);
  const coords = Array.from({ length: points * 2 }, (_, index) => {
    const radius = index % 2 === 0 ? outerRadius : innerRadius;
    const angle = index * step - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  });

  return coords.join(" ");
}
