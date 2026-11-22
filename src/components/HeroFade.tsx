import React from "react";

/**
 * Soft fade at the bottom of a dark hero into the color of the next section.
 * Short and eased so it reads as a smooth blend, not a gray band.
 */
const COLORS = { white: "255,255,255", slate: "248,250,252" } as const;

const HeroFade: React.FC<{ to?: keyof typeof COLORS }> = ({ to = "white" }) => {
  const c = COLORS[to];
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-0 left-0 right-0 h-24 md:h-36 z-[5] pointer-events-none"
      style={{
        background: `linear-gradient(to bottom, rgba(${c},0) 0%, rgba(${c},0.03) 25%, rgba(${c},0.12) 45%, rgba(${c},0.32) 62%, rgba(${c},0.6) 78%, rgba(${c},0.86) 91%, rgba(${c},1) 100%)`,
      }}
    />
  );
};

export default HeroFade;
