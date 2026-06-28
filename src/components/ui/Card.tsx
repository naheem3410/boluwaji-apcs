import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "tussock" | "bd" | "none";
  padding?: "none"|"sm"|"md"|"lg";
}

const pads = { none:"", sm:"p-4", md:"p-6 lg:p-8", lg:"p-8 lg:p-10" };

export function Card({ children, className, hover=false, glow="none", padding="md" }: CardProps) {
  return (
    <div className={cn(
      "bg-card rounded-3xl border border-theme shadow-brand transition-all duration-300",
      hover && "hover:-translate-y-1.5 hover:shadow-brand-lg cursor-pointer",
      glow === "tussock" && "hover:glow-tussock",
      glow === "bd" && "hover:glow-bd",
      pads[padding],
      className
    )}>
      {children}
    </div>
  );
}
