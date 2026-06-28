import { AnimateIn } from "@/components/ui/AnimateIn";

const testimonials = [
  {
    name:"Adebisi Adeleke",
    role:"Member since 2018",
    initials:"AA",
    quote:"Boluwaji APCS helped me access capital for my business without the burden of interest. The community is genuinely supportive and the process is transparent.",
    color:"bg-bd",
  },
  {
    name:"Funke Akinwale",
    role:"Member since 2019",
    initials:"FA",
    quote:"After seeing how professionally the executives manage our funds, I have been a committed member for years. My savings culture has transformed completely.",
    color:"bg-tussock",
    featured: true,
  },
  {
    name:"Seun Oladipo",
    role:"Member since 2020",
    initials:"SO",
    quote:"The interest-free loan helped me handle a family emergency without going to predatory lenders. I will always be grateful for this cooperative.",
    color:"bg-rust",
  },
];

export function TestimonialsSection() {
  return (
    <section className="sec bg-surface relative overflow-hidden">
      <div className="naira-motif absolute -right-16 bottom-0 pointer-events-none"
           style={{WebkitTextStroke:"1px rgba(35,90,92,0.06)"}}>₦</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn animation="fade-up">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-tussock/15 text-tussock-dk dark:text-tussock-lt text-sm font-semibold mb-4 border border-tussock/25">
              Testimonials
            </span>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-heading mb-4">
              What Members Say
            </h2>
            <p className="text-muted max-w-xl mx-auto text-sm italic">
              Placeholder testimonials — to be replaced with actual member stories.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} animation="fade-up" delay={i * 100}>
              <div className={`
                relative rounded-3xl border border-theme p-7 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-brand-lg
                ${t.featured
                  ? "bg-bd text-on-dark md:scale-105 md:shadow-brand-lg border-bd"
                  : "bg-card"
                }
              `}>
                {/* Large quote mark */}
                <div className={`font-playfair text-8xl leading-none mb-1 select-none
                  ${t.featured ? "text-tussock/30" : "text-bd/10 dark:text-bd-lt/10"}`}
                  aria-hidden>
                  "
                </div>
                <p className={`text-sm leading-relaxed mb-6 -mt-6
                  ${t.featured ? "text-swirl/80" : "text-muted"}`}>
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center shrink-0`}>
                    <span className={`text-xs font-bold ${t.color === "bg-tussock" ? "text-[#1a1208]" : "text-swirl"}`}>
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className={`font-semibold text-sm ${t.featured ? "text-swirl" : "text-heading"}`}>{t.name}</p>
                    <p className={`text-xs ${t.featured ? "text-swirl/50" : "text-muted"}`}>{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
