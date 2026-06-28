"use client";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative w-14 h-7 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tussock focus-visible:ring-offset-2",
        dark ? "bg-bd" : "bg-swirl border border-[var(--border)]",
        className
      )}
    >
      <span className={cn(
        "absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 shadow-md",
        dark
          ? "left-[calc(100%-1.75rem)] bg-tussock text-[#1a1208]"
          : "left-0.5 bg-white text-bd"
      )}>
        {dark ? <Moon size={12}/> : <Sun size={12}/>}
      </span>
    </button>
  );
}
