import {
  LINK_DARK,
  LINK_LIGHT,
  ICON_DARK,
  ICON_LIGHT,
  CV_DARK,
  CV_LIGHT,
  MOBILE_NAVBAR_DARK,
  MOBILE_NAVBAR_LIGHT,
} from "@/lib/constants/navbar";

export default function useNavbarStyles(
  hoveredLink: string,
  activeSection: string,
  isOverlapping: boolean,
) {
  const isHovered = hoveredLink === activeSection;
  const link = isOverlapping ? LINK_DARK : LINK_LIGHT;
  const cv = isOverlapping ? CV_DARK : CV_LIGHT;
  const icon = isOverlapping ? ICON_DARK : ICON_LIGHT;
  const mobileNavbar = isOverlapping ? MOBILE_NAVBAR_DARK : MOBILE_NAVBAR_LIGHT;
  const mobileLink = isOverlapping ? LINK_LIGHT : LINK_DARK;

  const underline = isOverlapping
    ? isHovered
      ? "bg-black/50"
      : "bg-black"
    : isHovered
      ? "bg-off-w/60"
      : "bg-off-w";

  return { link, cv, icon, mobileNavbar, mobileLink, underline };
}
