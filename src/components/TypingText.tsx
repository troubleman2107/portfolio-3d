import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimationLefttoRight from "./AnimationLefttoRight";

const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      if (i <= text.length) {
        setDisplayedText(text.substr(0, i));
        setShowCursor(true);
      } else {
        setShowCursor(false);
      }
      i++;
    }, 100);

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <div className="inline-block text-6xl mb-3">
      <span className="text-white font-bold">{displayedText}</span>
      <span className="typing-cursor animate-pulse text-white">_</span>
    </div>
    // <motion.div
    //   initial={{ opacity: 0, x: -50 }}
    //   animate={{ opacity: 1, x: 0 }}
    //   transition={{
    //     duration: 1,
    //     ease: "easeInOut",
    //   }}
    //   className="inline-block text-6xl mb-3"
    // >
    //   <span className="text-slate font-bold">{displayedText}</span>
    //   <span className="typing-cursor animate-pulse text-slate-300">_</span>
    // </motion.div>
  );
};

export default TypingText;
