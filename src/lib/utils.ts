import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { formOptions } from "@tanstack/react-form/nextjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
