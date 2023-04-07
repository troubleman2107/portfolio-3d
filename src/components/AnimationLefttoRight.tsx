import React from "react";
import { motion } from "framer-motion";

const AnimationLefttoRight = ({ children, class_name }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 40 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className={class_name}
    >
      {children}
    </motion.div>
  );
};

export default AnimationLefttoRight;
