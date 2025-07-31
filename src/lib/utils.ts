import { clsx, type ClassValue } from "clsx"
import { RefObject } from "react";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// scroll function
export const scrollToSection = (ref: RefObject<HTMLDivElement | null>) => {
  if (ref?.current) {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
};

