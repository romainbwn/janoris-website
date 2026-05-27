type FilmGrainProps = {
  /** 0–1 — strength of the grain */
  opacity?: number;
  /** how the grain sits on what's beneath it */
  blend?: "multiply" | "overlay" | "soft-light";
  /** positioning — `absolute inset-0` for the image, `fixed inset-0` page-wide */
  className?: string;
};

/**
 * Film grain — a tiled turbulence texture. Used strong on the hero image
 * to soften digital sharpness, and faintly on paper for a printed feel.
 */
export function FilmGrain({
  opacity = 0.09,
  blend = "multiply",
  className = "absolute inset-0",
}: FilmGrainProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none ${className}`}
      style={{
        opacity,
        mixBlendMode: blend,
        backgroundSize: "190px 190px",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 220'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E\")",
      }}
    />
  );
}
