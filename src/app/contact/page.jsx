"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ContactPage = () => {
  const [succes, setSucess] = useState(true);
  const [error, setError] = useState(false);
  const text = "Say Hello";
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full w-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 ">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            <span className="px-2">😀</span>
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form className="h-1/2 lg:h-full lg:w-1/2 flex flex-col py-5 justify-center bg-red-50 rounded-xl text-xl gap-8 p-24">
          <span> Dear Dziku Dev,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
          />
          <span> My mail adress is:</span>
          <input
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none "
          />
          <span> Kind regards</span>
          <div className="flex justify-center">
            <button className="rounded bg-black text-white w-1/6   semi-bold ">
              SEND
            </button>
            {succes && <span className="text-green-600 semi-bold">Your message sent succesfully</span>}
            {error && <span className="text-red-600 semi-bold">Something goes wrong...</span>}
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
