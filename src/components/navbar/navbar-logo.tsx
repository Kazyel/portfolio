import { NavbarStyles } from "@/hooks/use-navbar-styles";
import { cn } from "@/lib/utils";

interface NavbarLogoProps {
  currentStyles: NavbarStyles;
  onClick: () => void;
}

export const NavbarLogo = ({ currentStyles, onClick }: NavbarLogoProps) => {
  return (
    <button
      onClick={onClick}
      aria-label="Go to home section"
      className={cn(
        "relative cursor-pointer border-l-2 px-2 text-lg font-extrabold tracking-tighter transition-colors duration-150",
        "before:font-jp before:absolute before:-left-7 before:text-lg before:transition-all before:duration-150 before:content-['新']",
        currentStyles.link,
      )}
    >
      Kazyel
    </button>
  );
};
