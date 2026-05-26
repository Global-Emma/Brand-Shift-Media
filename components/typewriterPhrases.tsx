import { useState, useEffect } from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";

function TypewriterPhrases() {
  const [phrases] = useState([
    "Command Attention",
    "Dominate Markets",
    "Ranks",
    "Inspire Culture",
    "Scale Influence",
    "Define Aesthetics"
  ]);
  
  const [currentPhraseIdx, setCurrentPhraseIdx] = useState(0);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayedText = useTransform(rounded, (latest) =>
    phrases[currentPhraseIdx].slice(0, latest)
  );

  useEffect(() => {
    // 1. Types out characters step by step
    const controls = animate(count, phrases[currentPhraseIdx].length, {
      type: "tween",
      duration: 1.6,
      ease: "easeInOut",
      delay: 0.5, // Holds brief window before start typing
      onComplete: () => {
        // 2. Erases phrase text backwards after resting 2 seconds
        setTimeout(() => {
          animate(count, 0, {
            type: "tween",
            duration: 1.2,
            ease: "easeInOut",
            onComplete: () => {
              // 3. Shift counter array target and loop infinitely
              setCurrentPhraseIdx((prev) => (prev + 1) % phrases.length);
            }
          });
        }, 2000);
      }
    });
    return () => controls.stop();
  }, [currentPhraseIdx, count, phrases]);

  return <motion.span>{displayedText}</motion.span>;
}

export default TypewriterPhrases