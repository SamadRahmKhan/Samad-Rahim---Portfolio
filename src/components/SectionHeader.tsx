// Props for the SectionHeader component
interface SectionHeaderProps {
  title: string;                         // Main title text
  subtitle?: string;                     // Optional subtitle
  align?: "left" | "center" | "right";   // Text alignment
  className?: string;                    // Additional CSS classes
}

// A reusable header for page sections
export const SectionHeader = ({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) => {
  // Determine text alignment class
  let alignClass = "text-center";
  if (align === "left") {
    alignClass = "text-left";
  } else if (align === "right") {
    alignClass = "text-right";
  }

  // Determine underline bar position
  let barPositionClass = "mx-auto"; // Center by default
  if (align === "left") {
    barPositionClass = "";
  } else if (align === "right") {
    barPositionClass = "ml-auto";
  }

  return (
    <div className={`mb-12 ${alignClass} ${className}`}>
      {/* Main Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold gradient-text mb-4">
        {title}
      </h2>

      {/* Optional Subtitle */}
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

      {/* Decorative Underline Bar */}
      <div
        className={`h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mt-6 ${barPositionClass}`}
      />
    </div>
  );
};
