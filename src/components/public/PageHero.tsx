import { AnimateIn } from "@/components/ui/AnimateIn";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
}

const DEFAULT_IMG = "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&q=80&auto=format&fit=crop";

export function PageHero({ eyebrow, title, subtitle, image = DEFAULT_IMG }: PageHeroProps) {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Image + overlays */}
      <div className="absolute inset-0 z-0">
        <img src={image} alt="" className="w-full h-full object-cover object-center"/>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2223]/95 via-[#1a4345]/85 to-[#235a5c]/60"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d2223]/50 via-transparent to-transparent"/>
      </div>

      {/* ₦ motif */}
      <div className="naira-motif absolute -right-8 top-1/2 -translate-y-1/2 pointer-events-none"
           style={{WebkitTextStroke:"1.5px rgba(194,140,58,0.08)"}}>₦</div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && (
          <AnimateIn animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full bg-tussock/20 text-tussock-lt text-sm font-semibold mb-5 border border-tussock/30">
              {eyebrow}
            </span>
          </AnimateIn>
        )}
        <AnimateIn animation="fade-up" delay={100}>
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-swirl mb-5 max-w-4xl mx-auto leading-tight">
            {title}
          </h1>
        </AnimateIn>
        {subtitle && (
          <AnimateIn animation="fade-up" delay={200}>
            <p className="text-white text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
          </AnimateIn>
        )}
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 50" className="w-full block" preserveAspectRatio="none">
          <path d="M0,50 C480,0 960,50 1440,20 L1440,50 Z" fill="var(--bg-base)"/>
        </svg>
      </div>
    </section>
  );
}
