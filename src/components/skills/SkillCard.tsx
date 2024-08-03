import Dragon from "../../assets/dragon.png";
import type { SkillProps } from "../../utils/types";

const SkillCard = ({ img, skill, text, alt, className }: SkillProps) => {
  return (
    <div className="ease relative col-span-1 w-full overflow-hidden rounded-lg border border-stone-700 bg-darkest p-5 text-off-w transition-all duration-200 hover:border-stone-600 group">
      <img
        src={img.src}
        alt={alt}
        className={`${className} aspect-square h-[72px] rounded-sm`}
      />

      <h2 className="my-4 text-2xl font-bold">{skill}</h2>
      <p className="font-light">{text}</p>

      <img
        src={Dragon.src}
        alt="Dragon PNG Background"
        className={
          "ease absolute -right-24 -top-12 invert transition-all duration-200 opacity-[0.02] group-hover:opacity-[0.04]"
        }
      />
    </div>
  );
};

export default SkillCard;
