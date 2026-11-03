const ink = "#1b2260";

type Art = { className?: string };

export function Virus({
  className,
  color = "#6f3aa0",
  dot = "#e8578e",
}: Art & { color?: string; dot?: string }) {
  const spikes = Array.from({ length: 14 }, (_, i) => (i * 360) / 14);
  const spots = spikes.filter((_, i) => i % 2 === 0);
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      {spikes.map((a) => (
        <g key={a} transform={`rotate(${a} 50 50)`}>
          <line x1="50" y1="16" x2="50" y2="7" stroke={color} strokeWidth="3" />
          <circle cx="50" cy="6" r="4.5" fill={dot} />
        </g>
      ))}
      <circle cx="50" cy="50" r="35" fill={color} />
      {spots.map((a) => (
        <circle
          key={a}
          cx="50"
          cy="26"
          r="5"
          fill={dot}
          transform={`rotate(${a} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="8" fill={dot} />
    </svg>
  );
}

// wobbly closed outline; w = how irregular, k = how many bumps
function blob(cx: number, cy: number, r: number, w = 0, k = 0) {
  const pts = Array.from({ length: 48 }, (_, i) => {
    const a = (i / 48) * 2 * Math.PI;
    const rr = r * (1 + w * Math.sin(k * a) + w * 0.6 * Math.cos((k + 2) * a));
    return `${(cx + rr * Math.cos(a)).toFixed(1)} ${(cy + rr * Math.sin(a)).toFixed(1)}`;
  });
  return `M${pts.join("L")}Z`;
}

const cluster = [
  [21, 22, 13, "#a84a86"],
  [41, 20, 12, "#8e3374"],
  [19, 41, 12, "#8e3374"],
  [40, 40, 14, "#a84a86"],
  [30, 30, 11, "#7a2263"],
] as const;

export function Cell({
  className,
  stage,
}: Art & { stage: "normal" | "altered" | "cancer" }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden>
      {stage === "normal" && (
        <>
          <circle cx="30" cy="30" r="24" fill="#fbc6da" stroke="#e07aa3" strokeWidth="2" />
          <circle cx="30" cy="30" r="7" fill="#e8578e" />
          <circle cx="18" cy="22" r="1.8" fill="#e8a0be" />
          <circle cx="41" cy="38" r="1.8" fill="#e8a0be" />
        </>
      )}
      {stage === "altered" && (
        <>
          <path d={blob(30, 30, 23, 0.08, 3)} fill="#f08bb3" stroke="#c84f82" strokeWidth="2" />
          <path d={blob(31, 29, 12, 0.12, 4)} fill="#b2306a" />
          <circle cx="16" cy="36" r="3" fill="#b2306a" />
          <circle cx="42" cy="18" r="2.2" fill="#b2306a" />
        </>
      )}
      {stage === "cancer" &&
        cluster.map(([x, y, r, fill]) => (
          <g key={`${x}-${y}`}>
            <path d={blob(x, y, r, 0.12, 5)} fill={fill} stroke="#4a1240" strokeWidth="1.5" />
            <path d={blob(x + 1, y - 1, r * 0.55, 0.15, 3)} fill="#4a1240" />
          </g>
        ))}
    </svg>
  );
}

export function Vial({ className }: Art) {
  return (
    <svg viewBox="0 0 80 110" className={className} aria-hidden>
      <rect x="20" y="4" width="40" height="16" rx="3" fill="#2f6fb0" />
      <rect x="26" y="20" width="28" height="10" fill="#cfe0ee" />
      <rect
        x="10"
        y="30"
        width="60"
        height="76"
        rx="10"
        fill="#eef5fa"
        stroke={ink}
        strokeWidth="2.5"
      />
      <rect x="10" y="48" width="60" height="42" fill="white" />
      <text
        x="40"
        y="66"
        textAnchor="middle"
        fontSize="13"
        fontWeight="900"
        fill={ink}
      >
        VACINA
      </text>
      <text
        x="40"
        y="82"
        textAnchor="middle"
        fontSize="15"
        fontWeight="900"
        fill={ink}
      >
        HPV
      </text>
    </svg>
  );
}

export function Shield({ className }: Art) {
  return (
    <svg viewBox="0 0 80 100" className={className} aria-hidden>
      <path
        d="M40 4 74 16v32c0 24-18 40-34 48C24 88 6 72 6 48V16Z"
        fill="#2f6fb0"
        stroke={ink}
        strokeWidth="2.5"
      />
      <path d="M34 28h12v14h14v12H46v14H34V54H20V42h14Z" fill="white" />
    </svg>
  );
}

export function Megaphone({ className }: Art) {
  return (
    <svg viewBox="0 0 120 92" className={className} aria-hidden>
      <path d="m30 58 6 28h14l-6-26Z" fill="#c81e3e" stroke={ink} strokeWidth="2.5" />
      <path d="M14 32 82 8v72L14 58Z" fill="white" stroke={ink} strokeWidth="2.5" />
      <rect x="4" y="30" width="12" height="30" rx="3" fill="#c81e3e" stroke={ink} strokeWidth="2.5" />
      <ellipse cx="84" cy="44" rx="10" ry="38" fill="#c81e3e" stroke={ink} strokeWidth="2.5" />
      <path d="M102 26 114 16M106 44h13M102 62l12 10" stroke="#ffd93d" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function Sparks({ className }: Art) {
  return (
    <svg viewBox="0 0 24 40" className={className} aria-hidden>
      <path
        d="M20 6 6 12M22 20H4M20 34 6 28"
        stroke={ink}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
