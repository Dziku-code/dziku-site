"use client";

import { motion } from "framer-motion";

const TestPage = () => {
  const variants = {
    variant1: {
      x: 400,
      y: 200,
      opacity: 0.5,
    },
    variant2: {
      x: 100,
      y: -300,
      opacity: 0.5,
    },
  };

  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        className="w-96 h-96 bg-red-400 rounded"
        initial={{ x: -100 }}
        variants={variants}
        animate='variant2'
      ></motion.div>
    </div>
  );
};

export default TestPage;
