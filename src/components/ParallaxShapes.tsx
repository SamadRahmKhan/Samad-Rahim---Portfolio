// Background shapes component for visual decoration
// These shapes float and animate in the background

export const ParallaxShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large rotating circle in the top right */}
      <div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full border border-primary/20"
        style={{
          animation: "spin 50s linear infinite",
        }}
      />

      {/* Floating hexagon shape */}
      <div
        className="absolute top-1/4 left-10 w-20 h-20 float"
        style={{
          background: "linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--accent) / 0.2))",
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      />

      {/* Cyber grid pattern overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Glowing orb on the left side */}
      <div
        className="absolute top-1/2 -left-32 w-64 h-64 rounded-full float-delayed"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
        }}
      />

      {/* Purple glowing orb in the bottom right */}
      <div
        className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full float"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.2) 0%, transparent 70%)",
        }}
      />

      {/* Small floating squares */}
      <div
        className="absolute top-1/3 right-1/4 w-4 h-4 bg-primary/30 rotate-45 float"
        style={{ animationDelay: "-2s" }}
      />
      <div className="absolute top-2/3 left-1/4 w-3 h-3 bg-accent/40 rotate-45 float-delayed" />
      <div
        className="absolute bottom-1/4 right-10 w-5 h-5 bg-primary/20 rotate-45 float"
        style={{ animationDelay: "-4s" }}
      />

      {/* Diagonal decorative lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <line
          x1="0"
          y1="100%"
          x2="100%"
          y2="0"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
        />
        <line
          x1="20%"
          y1="100%"
          x2="100%"
          y2="20%"
          stroke="hsl(var(--accent))"
          strokeWidth="0.5"
        />
      </svg>

      {/* Pulsing ring animation */}
      <div className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full border border-accent/30 pulse-glow" />
    </div>
  );
};
