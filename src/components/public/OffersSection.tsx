import { Percent, Clock, Users, BookOpen, ShieldCheck, Banknote } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";

const offers = [
  {
    icon: Percent,
    title: "Zero Interest Loans",
    description: "Access loans up to 100% of your savings balance — no interest whatsoever. Only a 0.5% admin charge applies.",
    accent: "bg-bd/10 text-bd dark:bg-bd/20 dark:text-bd-lt",
    bar: "bg-bd",
  },
  {
    icon: Users,
    title: "Community Guarantee",
    description: "Loans are backed by fellow members who stand as guarantors — mutual accountability that makes us all stronger.",
    accent: "bg-tussock/15 text-tussock-dk dark:text-tussock-lt",
    bar: "bg-tussock",
  },
  {
    icon: Clock,
    title: "Flexible Monthly Savings",
    description: "Contribute from ₦5,000/month at your pace. Deadline is the 5th of the following month — no stress, no surprises.",
    accent: "bg-rust/10 text-rust-dk dark:text-rust-lt",
    bar: "bg-rust",
  },
  {
    icon: BookOpen,
    title: "Transparent Governance",
    description: "Every rule is written down, reviewed by executives, and available to all members. No hidden charges, ever.",
    accent: "bg-bd/10 text-bd dark:bg-bd/20 dark:text-bd-lt",
    bar: "bg-bd",
  },
  {
    icon: ShieldCheck,
    title: "Member Protection",
    description: "Your savings are protected. Even in expulsion, your balance is returned within 6 months — cooperative law guarantees it.",
    accent: "bg-tussock/15 text-tussock-dk dark:text-tussock-lt",
    bar: "bg-tussock",
  },
  {
    icon: Banknote,
    title: "Real Empowerment",
    description: "Build your savings record and unlock capital to grow your business, handle emergencies, or achieve personal goals.",
    accent: "bg-rust/10 text-rust-dk dark:text-rust-lt",
    bar: "bg-rust",
  },
];

export function OffersSection() {
  return (
    <section className="sec bg-base relative overflow-hidden">
      {/* Background ₦ motif */}
      <div className="naira-motif absolute -left-20 top-0 opacity-100 pointer-events-none"
           style={{WebkitTextStroke:"1px rgba(35,90,92,0.05)"}}>₦</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn animation="fade-up">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-tussock/15 text-tussock-dk dark:text-tussock-lt text-sm font-semibold mb-4 border border-tussock/25">
              What We Offer
            </span>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-heading mb-5">
              Finance That Works<br/>
              <span className="text-bd dark:text-bd-lt">for Everyone</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              Combining the strength of community savings with accessible, interest-free credit — giving every member a fair shot at financial stability.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((o, i) => (
            <AnimateIn key={o.title} animation="fade-up" delay={i * 80}>
              <div className="group relative bg-card rounded-3xl border border-theme p-7 hover:-translate-y-2 hover:shadow-brand-lg transition-all duration-400 overflow-hidden cursor-default">
                {/* Coloured top bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${o.bar} rounded-t-3xl`} />

                <div className={`w-12 h-12 rounded-2xl ${o.accent} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <o.icon size={22}/>
                </div>
                <h3 className="font-playfair font-bold text-xl text-heading mb-3">{o.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{o.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
