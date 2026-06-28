"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const links = [
  { label:"Home",         href:"/" },
  { label:"About Us",     href:"/about" },
  { label:"Leadership",   href:"/leadership" },
  { label:"How It Works", href:"/how-it-works" },
  { label:"FAQ",          href:"/faq" },
  { label:"Contact",      href:"/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [atHero, setAtHero] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      setAtHero(window.scrollY < 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isHome = pathname === "/";
  const transparent = isHome && atHero;

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled
        ? "bg-[var(--bg-card)]/95 backdrop-blur-xl shadow-brand border-b border-theme"
        : transparent
          ? "bg-transparent"
          : "bg-[var(--bg-card)]/95 backdrop-blur-xl border-b border-theme"
    )}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl grad-hero flex items-center justify-center shadow-brand overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <span className="naira-motif text-[28px] absolute opacity-15">₦</span>
              <span className="font-playfair font-bold text-swirl text-lg relative z-10">B</span>
            </div>
            <div className="hidden sm:block">
              <p className={cn("font-playfair font-bold text-base leading-tight transition-colors",
                transparent ? "text-white" : "text-heading")}>
                Boluwaji APCS
              </p>
              <p className={cn("text-[10px] leading-tight transition-colors",
                transparent ? "text-white/60" : "text-muted")}>
                Alliance Progressive Cooperative
              </p>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map(l => (
              <Link key={l.href} href={l.href}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 underline-anim",
                  pathname === l.href
                    ? "bg-bd text-on-dark"
                    : transparent
                      ? "text-white/80 hover:text-swirl hover:bg-white/10"
                      : "text-body hover:text-bd hover:bg-bd/8 dark:hover:bg-bd/20"
                )}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/login">
              <Button variant={transparent ? "glass" : "outline"} size="sm">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button variant="gold" size="sm">Join Now</Button>
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button onClick={() => setOpen(!open)}
              className={cn("p-2 rounded-xl transition-colors",
                transparent ? "text-swirl hover:bg-white/10" : "text-body hover:bg-bd/10"
              )}>
              {open ? <X size={20}/> : <Menu size={20}/>}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-card border-t border-theme py-4 space-y-1 animate-fade-in">
            {links.map(l => (
              <Link key={l.href} href={l.href}
                className={cn(
                  "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  pathname === l.href
                    ? "bg-bd text-on-dark"
                    : "text-body hover:bg-bd/8 hover:text-bd"
                )}>
                {l.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-subtle flex flex-col gap-2 px-2">
              <Link href="/login"><Button variant="outline" fullWidth>Sign In</Button></Link>
              <Link href="/register"><Button variant="gold" fullWidth>Join Now</Button></Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
