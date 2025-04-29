"use client";

import { motion } from "framer-motion";
import { Contact2, StarsIcon } from "lucide-react";

const BUTTONS_ANIMATION = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.3, delay: 0.5 },
};

export const HeroButtons = () => {
  return (
    <div className="flex gap-x-6">
      <motion.div {...BUTTONS_ANIMATION}>
        <a
          href="#about-section"
          className="bg-acc-yellow-2 hover:bg-off-w group flex cursor-pointer items-center rounded-sm border-2 border-black p-2 text-xl font-extrabold text-black transition-all duration-200"
        >
          <StarsIcon className="mr-2 size-7 transition-all duration-200 group-hover:rotate-90" />
          Start this journey
        </a>
      </motion.div>

      <motion.div {...BUTTONS_ANIMATION}>
        <a
          href="#contact-section"
          className="text-off-w/85 border-off-w/85 bg-off-w/20 hover:bg-acc-yellow-2/15 hover:text-acc-yellow-2 hover:border-acc-yellow-2 flex cursor-pointer items-center rounded-sm border-2 p-2 text-xl font-bold transition-all duration-200"
        >
          <Contact2 className="mr-2 size-7" />
          Contact me
        </a>
      </motion.div>
    </div>
  );
};
