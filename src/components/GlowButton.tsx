import { ReactNode } from "react";

// Props for the GlowButton component
interface GlowButtonProps {
  children: ReactNode;                           // Button content
  variant?: "primary" | "secondary" | "outline"; // Button style
  size?: "sm" | "md" | "lg";                     // Button size
  className?: string;                            // Additional CSS classes
  onClick?: () => void;                          // Click handler
  type?: "button" | "submit" | "reset";          // Button type
  disabled?: boolean;                            // Is button disabled?
}

// A button with a glowing hover effect
export const GlowButton = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: GlowButtonProps) => {
  // Base styles that apply to all buttons
  const baseStyles = "relative inline-flex items-center justify-center font-medium rounded-lg overflow-hidden transition-all duration-300";

  // Styles based on the variant (primary, secondary, outline)
  let variantStyles = "";
  if (variant === "primary") {
    variantStyles = "bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:scale-105 active:scale-95";
  } else if (variant === "secondary") {
    variantStyles = "bg-accent text-accent-foreground hover:shadow-[0_0_30px_hsl(var(--accent)/0.5)] hover:scale-105 active:scale-95";
  } else if (variant === "outline") {
    variantStyles = "border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary hover:scale-105 active:scale-95";
  }

  // Styles based on the size (sm, md, lg)
  let sizeStyles = "";
  if (size === "sm") {
    sizeStyles = "px-4 py-2 text-sm";
  } else if (size === "md") {
    sizeStyles = "px-6 py-3 text-base";
  } else if (size === "lg") {
    sizeStyles = "px-8 py-4 text-lg";
  }

  // Disabled styles
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed hover:scale-100 active:scale-100" : "";

  // Combine all classes
  const buttonClasses = `${baseStyles} ${variantStyles} ${sizeStyles} ${disabledStyles} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};
