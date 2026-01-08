import { ReactNode } from "react";

// Props for the PageTransition component
interface PageTransitionProps {
  children: ReactNode; // The page content to display
}

// A simple wrapper that applies fade-in animation to pages
// Note: Using CSS animation instead of complex framer-motion variants
export const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <div className="min-h-screen animate-fade-in">
      {children}
    </div>
  );
};
