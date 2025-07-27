import { useEffect } from "react";

import { Moon } from "lucide-react";
 // No need for Sun icon if toggle is disabled
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  // Always dark mode: apply class once
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <button
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-none cursor-not-allowed opacity-50"
      )}
      disabled
      title="Dark mode enabled"
    >
      <Moon className="h-6 w-6 text-white" />
    </button>
  );
};
