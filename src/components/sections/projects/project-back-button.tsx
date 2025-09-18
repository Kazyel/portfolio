"use client";

import { cn } from "@/lib/utils";

import { Undo2 } from "lucide-react";
import { MotionWrapper, m } from "@/components/motion-wrapper";

interface ProjectBackButtonProps {
  onClick: () => void;
}

export const ProjectBackButton = ({ onClick }: ProjectBackButtonProps) => {
  return (
    <MotionWrapper>
      <m.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClick}
        className={cn(
          "bg-off-w sticky right-5 bottom-5 z-20 translate-x-5 cursor-pointer self-end rounded-full border-2 border-black p-2 shadow-sm",
          "-my-[32px] transition-colors duration-200 hover:bg-[#bfafa4]",
          "lg:hidden",
        )}
      >
        <Undo2 className={cn("size-8", "sm:max-lg:size-10")} />
      </m.div>
    </MotionWrapper>
  );
};
