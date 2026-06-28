"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

const UNSPLASH_HERO = "https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const words = ["Trust.", "Community.", "Growth.", "Freedom."];

export function HeroSection() {
  const [wordIdx, setWordIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Cycling headline words
  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIdx(i => (i + 1) % words.length);
        setVisible(true);
      }, 400);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  // Subtle parallax on scroll
  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0 z-0">
        <div ref={parallaxRef} className="absolute inset-0 scale-110">
          <img
            src={UNSPLASH_HERO}
            alt="Community members collaborating"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Layered overlays for depth and text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2223]/95 via-[#1a4345]/80 to-[#235a5c]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2223]/70 via-transparent to-transparent" />
      </div>

      {/* Decorative ₦ motif — top right, low opacity, never behind text */}
      <div className="naira-motif absolute -right-8 top-1/2 -translate-y-1/2 opacity-100 select-none pointer-events-none z-[1]"
           style={{WebkitTextStroke:"2px rgba(194,140,58,0.12)"}}>
        ₦
      </div>

      {/* Floating gold orbs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-tussock/10 blur-[80px] animate-pulse2 pointer-events-none z-[1]" />
      <div className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-bd-lt/20 blur-[60px] animate-pulse2 pointer-events-none z-[1]" style={{animationDelay:"1.5s"}} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-0 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 glass rounded-full px-5 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-tussock animate-ping" />
            <span className="text-swirl/80 text-sm font-medium">Ibadan · Est. 2017 · Interest-Free</span>
          </div>

          {/* Headline */}
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-swirl leading-none mb-4 animate-fade-up" style={{animationDelay:"100ms"}}>
            Finance Built
            <br />
            on{" "}
            <span
              className="text-tussock inline-block transition-all duration-400"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(-12px)",
                minWidth: "200px"
              }}
            >
              {words[wordIdx]}
            </span>
          </h1>

          <p className="text-white/70 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg animate-fade-up" style={{animationDelay:"250ms"}}>
            Join a community where your savings grow collectively and loans come without the burden of interest — just mutual support and shared prosperity.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-up" style={{animationDelay:"400ms"}}>
            <Link href="/register">
              <Button variant="gold" size="lg" className="group">
                Become a Member
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200"/>
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button variant="glass" size="lg">How It Works</Button>
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 animate-fade-up" style={{animationDelay:"550ms"}}>
            {[
              { val:"0%",   label:"Interest Rate" },
              { val:"0.5%", label:"Admin Charge Only" },
              { val:"2017", label:"Year Founded" },
              { val:"100%", label:"Member-Driven" },
            ].map(s => (
              <div key={s.label} className="text-center">
                <p className="font-playfair text-2xl font-bold text-tussock">{s.val}</p>
                <p className="text-white text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-float">
        <p className="text-swirl/40 text-xs tracking-widest uppercase">Scroll</p>
        <ChevronDown size={18} className="text-swirl/40"/>
      </div>
    </section>
  );
}
