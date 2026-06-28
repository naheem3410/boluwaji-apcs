"use client";
import { useEffect, useRef, useState } from "react";
import { AnimateIn } from "@/components/ui/AnimateIn";

const UNSPLASH_COMMUNITY = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80&auto=format&fit=crop";

function Counter({ target, suffix="" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const dur = 1800;
        const step = 16;
        const steps = dur / step;
        let i = 0;
        const id = setInterval(() => {
          i++;
          setCount(Math.round((target * i) / steps));
          if (i >= steps) { setCount(target); clearInterval(id); }
        }, step);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { label:"Members Served",     val:null, display:"Growing",    sub:"Active cooperative members" },
  { label:"Interest Rate",      val:0,    display:null, suffix:"%", sub:"On all member loans — always" },
  { label:"Admin Charge",       val:null, display:"0.5%",       sub:"Only charge — deducted at source" },
  { label:"Years of Service",   val:null, display:"7+",         sub:"Community trust since 2017" },
];

export function StatsSection() {
  return (
    <section className="relative sec overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src={UNSPLASH_COMMUNITY} alt="Community" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-[#1a1208]/60"/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn animation="fade-up">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-tussock/20 text-tussock-lt text-sm font-semibold mb-4 border border-tussock/30">
              By the Numbers
            </span>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-swirl mb-4">
              Transparency Is Our Policy
            </h2>
            <p className="text-swirl/55 max-w-xl mx-auto">Every figure, every rule, open for every member to see.</p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <AnimateIn key={s.label} animation="scale-in" delay={i * 100}>
              <div className="glass rounded-3xl p-6 lg:p-8 text-center border border-swirl/10 hover:border-tussock/30 transition-all duration-300 group">
                <p className="font-playfair text-3xl lg:text-4xl xl:text-5xl font-bold text-tussock mb-2 group-hover:scale-105 transition-transform duration-300">
                  {s.val !== null
                    ? <Counter target={s.val} suffix={s.suffix}/>
                    : s.display
                  }
                </p>
                <p className="font-semibold text-black text-sm mb-1">{s.label}</p>
                <p className="text-black text-xs">{s.sub}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
