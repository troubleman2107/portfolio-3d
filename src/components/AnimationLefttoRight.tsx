import React from "react";
import { motion } from "framer-motion";

type infoProps = {
  initial: {
    opacity: number;
    x?: number;
    y?: number;
  };
  animate: {
    opacity: number;
    x?: number;
    y?: number;
  };
  duration: number;
};

type Types = {
  children: any | string | JSX.Element | JSX.Element[];
  class_name: String;
  info: infoProps;
};

const AnimationComponent = ({ children, class_name, info }: Types) => {
  return (
    <motion.div
      initial={info.initial}
      animate={info.animate}
      transition={{
        duration: info.duration,
        ease: "easeInOut",
      }}
      className={class_name.toString()}
    >
      {children}
    </motion.div>
  );
};

export default AnimationComponent;
