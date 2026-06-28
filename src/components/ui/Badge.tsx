import { cn } from "@/lib/utils";

type BadgeVariant = "gold"|"rust"|"bd"|"swirl"|"success"|"warning";
interface BadgeProps { variant?: BadgeVariant; children: React.ReactNode; className?: string; }

const bv: Record<BadgeVariant,string> = {
  gold:    "bg-tussock/15 text-tussock-dk border border-tussock/25 dark:text-tussock-lt",
  rust:    "bg-rust/15 text-rust-dk border border-rust/25 dark:text-rust-lt",
  bd:      "bg-bd/10 text-bd border border-bd/20 dark:text-bd-lt",
  swirl:   "bg-swirl/30 text-[var(--text-heading)] border border-swirl",
  success: "bg-emerald-100 text-emerald-800 border border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300",
  warning: "bg-amber-100 text-amber-800 border border-amber-200 dark:bg-amber-900/30 dark:text-amber-300",
};

export function Badge({ variant="bd", children, className }: BadgeProps) {
  return (
    <span className={cn("inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold", bv[variant], className)}>
      {children}
    </span>
  );
}
