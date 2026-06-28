"use client";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type Variant = "primary" | "gold" | "rust" | "outline" | "ghost" | "glass";
type Size = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  fullWidth?: boolean;
}

const v: Record<Variant, string> = {
  primary: "grad-hero text-on-dark hover:brightness-110 shadow-brand glow-bd",
  gold:    "grad-tussock text-[#1a1208] font-semibold hover:brightness-110 glow-tussock shadow-brand",
  rust:    "grad-rust text-swirl hover:brightness-110 shadow-brand",
  outline: "border-2 border-[var(--blue-dianne)] text-bd hover:bg-bd hover:text-on-dark dark:border-bd-lt dark:text-bd-lt",
  ghost:   "text-bd hover:bg-[rgba(35,90,92,0.10)] dark:text-bd-lt",
  glass:   "glass text-on-dark hover:bg-[rgba(212,208,195,0.12)]",
};

const s: Record<Size, string> = {
  sm:  "px-4 py-2 text-sm rounded-xl gap-1.5",
  md:  "px-6 py-3 text-sm rounded-2xl gap-2",
  lg:  "px-8 py-3.5 text-base rounded-2xl gap-2",
  xl:  "px-10 py-4.5 text-lg rounded-2xl gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant="primary", size="md", loading, fullWidth, className, children, disabled, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all duration-300 cursor-pointer select-none",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tussock)] focus-visible:ring-offset-2",
        "active:scale-[0.97]",
        v[variant], s[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
        </svg>
      )}
      {children}
    </button>
  )
);
Button.displayName = "Button";
