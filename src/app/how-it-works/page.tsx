import { PublicLayout } from "@/components/layout/PublicLayout";
import { PageHero } from "@/components/public/PageHero";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { UserPlus, PiggyBank, FileText, Wallet, AlertTriangle, CheckCircle2 } from "lucide-react";
import { COOP_RULES } from "@/lib/constants/rules";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const IMG = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80&auto=format&fit=crop";

const steps = [
  { icon:UserPlus, color:"bg-bd", num:"01", title:"Register with Your Member ID",
    desc:"You'll be assigned a Member ID by the executives before signing up. Register with your Full Name, Phone, Email, BVN, NIN, and Passport Photograph.",
    note:"Your account enters a pending state until an admin approves it." },
  { icon:PiggyBank, color:"bg-tussock", num:"02", title:"Make Monthly Contributions",
    desc:`Contribute a minimum of ₦${COOP_RULES.MIN_MONTHLY_CONTRIBUTION.toLocaleString()} each month. The deadline is the ${COOP_RULES.CONTRIBUTION_DEADLINE_DAY}th of the following month. Payments can be made online or confirmed manually.`,
    note:`Missing ${COOP_RULES.EXPULSION_CONSECUTIVE_MONTHS} consecutive months without an approved executive waiver may result in expulsion.` },
  { icon:FileText, color:"bg-rust", num:"03", title:"Apply for an Interest-Free Loan",
    desc:`After 6 active months you can borrow up to 50% of your balance; after 12 months, up to 100%. Provide two guarantors — one APCS member (Cat A) and one close relative (Cat B).`,
    note:`A ${COOP_RULES.ADMIN_CHARGE_PERCENT}% admin charge is deducted at source. A ${COOP_RULES.LOAN_MORATORIUM_DAYS}-day moratorium period applies.` },
  { icon:Wallet, color:"bg-bd", num:"04", title:"Receive Funds & Repay",
    desc:"Upon approval, funds are disbursed. Repay on schedule to maintain good standing and qualify for future loans.",
    note:`Default penalty: ₦${COOP_RULES.PENALTY_FIRST_MONTH.toLocaleString()} (month 1), ₦${COOP_RULES.PENALTY_SUBSEQUENT_MONTHS.toLocaleString()} every subsequent month.` },
];

const rules = [
  "Loan cannot exceed 100% of your savings balance at time of request",
  "Lump-sum deposits made solely to qualify for a loan are disallowed",
  "Guarantor A must have savings worth at least 20% of the loan value",
  "A member servicing a loan must repay 75% before acting as guarantor",
  "Wait 6 months after full repayment before applying again",
  "30-day moratorium period applies to every fresh loan",
  "Partial savings withdrawal requires 3 months notice",
  "Voluntary withdrawal requires 6 months notice",
];

export default function HowItWorksPage() {
  return (
    <PublicLayout>
      <PageHero
        image={IMG}
        eyebrow="The Process"
        title="How Boluwaji APCS Works"
        subtitle="A step-by-step guide to joining, saving, borrowing, and growing with the cooperative."
      />

      {/* Steps */}
      <section className="sec bg-base">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {steps.map((step, i) => (
              <AnimateIn key={step.num} animation="fade-up" delay={i * 100}>
                <div className="bg-card rounded-3xl border border-theme overflow-hidden hover:shadow-brand-lg transition-all duration-400 group">
                  <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-0">
                    {/* Left number column */}
                    <div className={`${step.color} flex flex-col items-center justify-center p-6 min-h-[80px]`}>
                      <span className="font-playfair text-4xl font-bold text-swirl/30">{step.num}</span>
                      <step.icon size={28} className={step.color === "bg-tussock" ? "text-[#1a1208]" : "text-swirl"} />
                    </div>
                    {/* Content */}
                    <div className="p-7">
                      <h3 className="font-playfair font-bold text-xl text-heading mb-3">{step.title}</h3>
                      <p className="text-body text-sm leading-relaxed mb-4">{step.desc}</p>
                      <div className="flex items-start gap-2.5 bg-tussock/8 dark:bg-tussock/12 rounded-2xl px-4 py-3">
                        <AlertTriangle size={15} className="text-tussock mt-0.5 shrink-0"/>
                        <p className="text-sm text-tussock-dk dark:text-tussock-lt">{step.note}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Loan rules on dark bg */}
      <section className="sec relative overflow-hidden" style={{background:"var(--blue-dianne)"}}>
        <div className="absolute inset-0 opacity-5"
             style={{backgroundImage:"repeating-linear-gradient(45deg,var(--swirl) 0,var(--swirl) 1px,transparent 0,transparent 50%)",backgroundSize:"20px 20px"}}/>
        <div className="naira-motif absolute -right-16 top-1/2 -translate-y-1/2 pointer-events-none"
             style={{WebkitTextStroke:"1.5px rgba(212,208,195,0.07)"}}>₦</div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn animation="fade-up">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-tussock/20 text-tussock-lt text-sm font-semibold mb-4 border border-tussock/30">Loan Guidelines</span>
              <h2 className="font-playfair text-4xl font-bold text-swirl">Key Rules to Know</h2>
            </div>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={100}>
            <div className="glass rounded-3xl p-8 mb-10">
              <ul className="space-y-4">
                {rules.map(r => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-tussock mt-0.5 shrink-0"/>
                    <span className="text-swirl/75 text-sm leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 pt-5 border-t border-swirl/10 text-xs text-swirl/40 italic">
                Rules are subject to review by executives. Always confirm current terms before decisions.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={200}>
            <div className="text-center">
              <Link href="/register"><Button variant="gold" size="lg">Start Your Membership</Button></Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </PublicLayout>
  );
}
