"use client";

import { motion, type MotionProps } from "framer-motion";
import { Contact2, StarsIcon } from "lucide-react";

const BUTTONS_MOTION: MotionProps = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.3, delay: 0.5 },
};

export const HeroButtons = () => {
  return (
    <div className="flex gap-x-6 max-sm:flex-col max-sm:gap-y-4">
      <motion.div {...BUTTONS_MOTION}>
        <a
          href="#about-section"
          className="bg-acc-yellow-2 hover:bg-off-w group flex cursor-pointer items-center rounded-sm border border-black p-2 text-xl font-extrabold text-black transition-all duration-200 max-md:text-sm"
        >
          <StarsIcon className="mr-2 size-7 transition-all duration-200 group-hover:rotate-90 max-md:size-5" />
          Start this journey
        </a>
      </motion.div>

      <motion.div {...BUTTONS_MOTION}>
        <a
          href="#contact-section"
          className="text-off-w/85 border-off-w/85 bg-off-w/15 hover:bg-acc-yellow-2/15 hover:text-acc-yellow-2 hover:border-acc-yellow-2 flex cursor-pointer items-center rounded-sm border p-2 text-xl font-bold transition-all duration-200 max-md:text-sm"
        >
          <Contact2 className="mr-2 size-7 max-md:size-5" />
          Contact me
        </a>
      </motion.div>
    </div>
  );
};
