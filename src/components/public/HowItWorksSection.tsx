import Link from "next/link";
import { UserPlus, PiggyBank, FileText, Wallet } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";

const steps = [
  { icon: UserPlus, num:"01", color:"bg-bd", title:"Register with Your Member ID",
    desc:"Get your ID from the executives, then sign up with your Full Name, BVN, NIN, and passport. Admin activates your account." },
  { icon: PiggyBank, num:"02", color:"bg-tussock", title:"Make Monthly Contributions",
    desc:"Contribute at least ₦5,000 each month by the 5th. Every contribution builds your borrowing capacity." },
  { icon: FileText, num:"03", color:"bg-rust", title:"Apply for an Interest-Free Loan",
    desc:"After building savings, apply for a loan up to 100% of your balance with two guarantors. Executives review and approve." },
  { icon: Wallet, num:"04", color:"bg-bd", title:"Receive Funds & Repay",
    desc:"Funds are disbursed on approval. Repay on schedule to maintain good standing and qualify for future loans." },
];

export function HowItWorksSection() {
  return (
    <section className="sec relative overflow-hidden" style={{background:"var(--blue-dianne)"}}>
      {/* ₦ motif — right side, decorative only */}
      <div className="naira-motif absolute -right-16 top-1/2 -translate-y-1/2 pointer-events-none"
           style={{WebkitTextStroke:"1.5px rgba(212,208,195,0.07)"}}>₦</div>

      {/* Diagonal stripe texture */}
      <div className="absolute inset-0 opacity-5"
           style={{backgroundImage:"repeating-linear-gradient(45deg,var(--swirl) 0,var(--swirl) 1px,transparent 0,transparent 50%)",backgroundSize:"20px 20px"}}/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn animation="fade-up">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-tussock/20 text-tussock-lt text-sm font-semibold mb-4 border border-tussock/30">
              The Process
            </span>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-swirl mb-5">
              How It Works
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">Four clear steps from joining to receiving your first loan.</p>
          </div>
        </AnimateIn>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((step, i) => (
            <AnimateIn key={step.num} animation="fade-up" delay={i * 100}>
              <div className="group relative">
                {/* Connector line */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(100%)] w-6 h-px bg-swirl/20 z-10"/>
                )}
                <div className="glass rounded-3xl p-7 h-full hover:bg-white/10 transition-all duration-400 group-hover:-translate-y-1.5">
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-brand group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon size={26} className="text-swirl"/>
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-tussock flex items-center justify-center text-[#1a1208] text-xs font-bold shadow">
                      {i + 1}
                    </span>
                  </div>
                  <p className="font-playfair font-bold text-4xl text-swirl/10 mb-2 leading-none">{step.num}</p>
                  <h3 className="font-playfair font-bold text-lg text-swirl mb-3">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn animation="fade-up" delay={400}>
          <div className="text-center">
            <Link href="/how-it-works">
              <Button variant="gold" size="lg">Read the Full Guide</Button>
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
