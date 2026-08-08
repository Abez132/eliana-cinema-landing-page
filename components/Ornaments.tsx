export function FilmReel({ className = "", spin = false }: { className?: string; spin?: boolean }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${spin ? "animate-reel-spin" : ""}`}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="3" />
      <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const cx = (50 + Math.cos(rad) * 28).toFixed(4);
        const cy = (50 + Math.sin(rad) * 28).toFixed(4);
        return <circle key={deg} cx={cx} cy={cy} r="11" stroke="currentColor" strokeWidth="3" fill="none" />;
      })}
    </svg>
  );
}

export function Sparkle({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
      <path d="M12 1l2.4 7.6L22 11l-7.6 2.4L12 21l-2.4-7.6L2 11l7.6-2.4L12 1Z" fill="currentColor" />
    </svg>
  );
}

/** Scattered stars used as a hero/dark-section watermark */
export function StarField({ className = "" }: { className?: string }) {
  const stars = [
    { top: "8%", left: "6%", size: 14, delay: "0s" },
    { top: "18%", left: "88%", size: 10, delay: "0.4s" },
    { top: "62%", left: "92%", size: 16, delay: "0.9s" },
    { top: "80%", left: "4%", size: 12, delay: "1.3s" },
    { top: "40%", left: "48%", size: 8, delay: "1.7s" },
    { top: "12%", left: "45%", size: 10, delay: "0.6s" },
  ];
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {stars.map((s, i) => (
        <Sparkle
          key={i}
          className="absolute text-gold animate-sparkle"
          style={
            {
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              animationDelay: s.delay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

export function FilmstripDivider({ className = "" }: { className?: string }) {
  return <div className={`filmstrip ${className}`} aria-hidden="true" />;
}

/** Small clapperboard icon used as a section accent */
export function Clapper({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="14" width="32" height="22" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M4 14l4-8 28 6-4 8-28-6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 5l3 8M20 6.5l3 8M28 8l3 8" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
