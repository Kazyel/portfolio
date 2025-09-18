"use client";

import { type CustomMotion } from "@/lib/types";

import { cn } from "@/lib/utils";
import { SOCIAL_LINKS } from "@/lib/constants/socials";

import { MotionWrapper, m } from "@/components/motion-wrapper";
import { ShineBorder } from "@/components/ui/shine-border";
import { Form } from "@/components/sections/contact/form/form";
import Link from "next/link";

const CONTACT_MOTION: CustomMotion<"div"> = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay: 0.75 },
  viewport: { once: true, amount: 0.65 },
};

export const ContactForm = () => {
  return (
    <MotionWrapper>
      <m.div
        {...CONTACT_MOTION}
        className={cn(
          "border-off-w/30 relative z-10 flex w-[450px] flex-col gap-y-3 overflow-hidden rounded-lg border bg-black p-4 drop-shadow-xl",
          "max-sm:w-full",
        )}
      >
        {/* Form */}
        <Form />

        {/* Social Links */}
        <div className="flex gap-4">
          {Object.entries(SOCIAL_LINKS).map(([key, social]) => (
            <Link
              key={key}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "border-off-w/30 group hover:border-off-w hover:bg-off-w flex grow cursor-pointer items-center justify-center gap-x-2 rounded-sm border p-2 transition-all duration-200",
              )}
            >
              <social.icon
                className={cn(
                  "text-off-w/65 size-5 shrink-0 transition-all duration-200",
                  "group-hover:text-black",
                )}
              />
              <p
                className={cn(
                  "text-off-w/65 text-sm font-semibold transition-all duration-200",
                  "group-hover:text-black",
                )}
              >
                {social.text}
              </p>
            </Link>
          ))}
        </div>

        <ShineBorder shineColor={["#F3E5D7ee", "#F3E5D744", "#F3E5D722"]} />
      </m.div>
    </MotionWrapper>
  );
};
