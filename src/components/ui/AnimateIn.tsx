"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "scale-in";
  delay?: number;
  threshold?: number;
}

export function AnimateIn({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold = 0.15,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms`, opacity: visible ? undefined : 0 }}
      className={cn(visible && `animate-${animation}`, className)}
    >
      {children}
    </div>
  );
}
