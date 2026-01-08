import { useEffect, useState } from "react";

// Props for the TypewriterText component
interface TypewriterTextProps {
  texts: string[];        // Array of texts to cycle through
  speed?: number;         // Speed of typing in milliseconds
  pauseDuration?: number; // How long to pause after typing a word
  className?: string;     // Optional CSS class
}

// This component creates a typewriter effect that types and erases text
export const TypewriterText = ({
  texts,
  speed = 100,
  pauseDuration = 2000,
  className,
}: TypewriterTextProps) => {
  // Track which text we're currently showing (0, 1, 2, etc.)
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  // The text that is currently displayed on screen
  const [displayedText, setDisplayedText] = useState("");
  
  // Are we typing or deleting?
  const [isTyping, setIsTyping] = useState(true);
  
  // Are we pausing after finishing a word?
  const [isPaused, setIsPaused] = useState(false);
  
  // Controls the blinking cursor visibility
  const [showCursor, setShowCursor] = useState(true);

  // Get the full text we're trying to type
  const fullText = texts[currentTextIndex];

  // Effect to handle the typing and deleting logic
  useEffect(() => {
    // If we're paused, don't do anything
    if (isPaused) {
      return;
    }

    // Set up the interval for typing/deleting
    const intervalId = setInterval(() => {
      if (isTyping) {
        // TYPING MODE
        // Check if we've finished typing the full word
        if (displayedText.length < fullText.length) {
          // Add one more character
          const nextCharIndex = displayedText.length;
          const nextChar = fullText[nextCharIndex];
          setDisplayedText(displayedText + nextChar);
        } else {
          // Finished typing - pause before deleting
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsTyping(false); // Switch to deleting mode
          }, pauseDuration);
        }
      } else {
        // DELETING MODE
        // Check if we've finished deleting
        if (displayedText.length > 0) {
          // Remove one character from the end
          const shorterText = displayedText.slice(0, displayedText.length - 1);
          setDisplayedText(shorterText);
        } else {
          // Finished deleting - move to next text
          const nextIndex = (currentTextIndex + 1) % texts.length;
          setCurrentTextIndex(nextIndex);
          setIsTyping(true); // Switch back to typing mode
        }
      }
    }, isTyping ? speed : speed / 2); // Delete faster than typing

    // Clean up the interval when component unmounts or dependencies change
    return () => {
      clearInterval(intervalId);
    };
  }, [displayedText, isTyping, isPaused, fullText, currentTextIndex, texts.length, speed, pauseDuration]);

  // Effect to make the cursor blink
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((previous) => !previous);
    }, 500); // Blink every 500ms

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  // Render the component
  return (
    <span className={className}>
      {displayedText}
      {/* Blinking cursor */}
      <span
        style={{
          display: "inline-block",
          width: "3px",
          height: "1em",
          backgroundColor: showCursor ? "hsl(var(--primary))" : "transparent",
          marginLeft: "4px",
          verticalAlign: "middle",
        }}
      />
    </span>
  );
};
