import { ReactNode } from "react";

// Props for the GlassCard component
interface GlassCardProps {
  children: ReactNode;      // Content inside the card
  className?: string;       // Additional CSS classes
  hover?: boolean;          // Should card have hover effect?
  glow?: "cyan" | "purple" | "none"; // Optional glow effect
}

// A card with a glass/frosted effect
export const GlassCard = ({
  children,
  className = "",
  hover = true,
  glow = "none",
}: GlassCardProps) => {
  // Build the class string step by step
  let cardClasses = "glass rounded-xl p-6 transition-all duration-300";

  // Add hover effect classes if enabled
  if (hover) {
    cardClasses = cardClasses + " hover:border-primary/30 hover:-translate-y-1 hover:scale-[1.02]";
  }

  // Add glow effect classes
  if (glow === "cyan") {
    cardClasses = cardClasses + " glow-cyan";
  } else if (glow === "purple") {
    cardClasses = cardClasses + " glow-purple";
  }

  // Add any custom classes passed in
  if (className) {
    cardClasses = cardClasses + " " + className;
  }

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};
