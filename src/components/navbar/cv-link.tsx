import type { LanguageCode } from "@/lib/constants/langs";
import type { NavbarStyles } from "@/hooks/use-navbar-styles";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

import Link from "next/link";
import { Download, FileUser } from "lucide-react";

interface CVLinkProps {
  locale: LanguageCode;
  currentStyles: NavbarStyles;
  isMobile?: boolean;
}

export const CVLink = ({ locale, currentStyles, isMobile }: CVLinkProps) => {
  const t = useTranslations("Navbar");
  const href = `/pdf/cv-${locale}.pdf`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      prefetch={false}
      aria-label="Download CV (opens in new tab)"
      className={cn(
        "cursor-pointer",
        isMobile
          ? "rounded-sm p-1 md:hidden"
          : "flex items-center gap-x-1.5 rounded-md p-1.5 text-[10px] max-md:hidden",
        currentStyles.cv,
      )}
    >
      {isMobile ? (
        <FileUser className="size-5" />
      ) : (
        <>
          <Download className="size-4" />
          {t("cv")}
        </>
      )}
    </Link>
  );
};
