import { useState } from "react";
import Dragon from "../assets/dragon.png";
import type { SkillProps } from "../utils/types";

const SkillCard = ({ img, skill, text, alt, className }: SkillProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const hoverHandler = () => {
    setIsHovered((prev) => !prev);
  };

  return (
    <div
      className="ease relative col-span-1 w-full overflow-hidden rounded-lg border border-stone-700 bg-darkest p-5 text-off-w transition-all duration-200 hover:border-stone-600"
      onMouseEnter={() => {
        hoverHandler();
      }}
      onMouseLeave={() => {
        hoverHandler();
      }}
    >
      <img
        className={`${className} aspect-square h-[72px] rounded-sm`}
        src={img.src}
        alt={alt}
      />
      <h2 className="my-4 text-2xl font-bold">{skill}</h2>
      <p className="text-sm font-extralight">{text}</p>
      <img
        className={`ease absolute -right-24 -top-12 invert transition-all duration-200 ${
          !isHovered ? "opacity-[0.02]" : "opacity-[0.04]"
        }`}
        src={Dragon.src}
        alt="Dragon PNG Background"
      />
    </div>
  );
};

export default SkillCard;
