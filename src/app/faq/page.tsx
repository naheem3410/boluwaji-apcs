"use client";
import { useState } from "react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { PageHero } from "@/components/public/PageHero";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { COOP_RULES } from "@/lib/constants/rules";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const IMG = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80&auto=format&fit=crop";

const faqs = [
  { cat:"Membership", color:"text-bd dark:text-bd-lt", items:[
    { q:"How do I join Boluwaji APCS?", a:"You must first obtain a Member ID from the executives. Once you have your ID, register on this platform with your Full Name, Phone, Email, BVN, NIN, and passport photograph. Your account will be reviewed and activated by an admin." },
    { q:"What happens if I miss contributions for 3 months?", a:`Missing ${COOP_RULES.EXPULSION_CONSECUTIVE_MONTHS} consecutive months without an approved waiver may result in expulsion. Your balance will be refunded within ${COOP_RULES.REFUND_PERIOD_MONTHS} months, provided you are not under any loan surety.` },
    { q:"Can I withdraw voluntarily?", a:`Yes — give ${COOP_RULES.VOLUNTARY_WITHDRAWAL_NOTICE_MONTHS} months' written notice. Your balance is returned at the end of that period, provided you are not a guarantor on any active loan.` },
  ]},
  { cat:"Contributions", color:"text-tussock-dk dark:text-tussock-lt", items:[
    { q:"What is the minimum monthly contribution?", a:`The minimum is ₦${COOP_RULES.MIN_MONTHLY_CONTRIBUTION.toLocaleString()} per month. The deadline is the ${COOP_RULES.CONTRIBUTION_DEADLINE_DAY}th of the following month.` },
    { q:"Can I pay offline?", a:"Yes. Make an offline payment and an admin will manually confirm and record it. You will receive confirmation once processed." },
    { q:"Can I partially withdraw my savings?", a:`Yes, with ${COOP_RULES.PARTIAL_WITHDRAWAL_NOTICE_MONTHS} months' minimum notice, provided you are not currently a guarantor on any active loan.` },
  ]},
  { cat:"Loans", color:"text-rust dark:text-rust-lt", items:[
    { q:"How much can I borrow?", a:`After 6 active months, up to 50% of your balance. After 12 months, up to 100%. The admin charge is ${COOP_RULES.ADMIN_CHARGE_PERCENT}%, deducted at source.` },
    { q:"Who can be my guarantors?", a:"Category A: an active APCS member with savings worth at least 20% of the loan, not currently servicing a loan (unless 75% repaid). Category B: a spouse (if married) or sibling/parent/uncle/aunt (if unmarried)." },
    { q:"What is the moratorium period?", a:`Every new loan includes a ${COOP_RULES.LOAN_MORATORIUM_DAYS}-day moratorium — no repayment required during this time.` },
    { q:"What are the default penalties?", a:`₦${COOP_RULES.PENALTY_FIRST_MONTH.toLocaleString()} for the first month of default. ₦${COOP_RULES.PENALTY_SUBSEQUENT_MONTHS.toLocaleString()} for every subsequent month.` },
    { q:"Can I deposit a lump sum to qualify for a bigger loan?", a:"No. Your savings pattern is assessed at the time of loan request. Depositing a lump sum specifically to qualify for an immediate loan is explicitly disallowed." },
  ]},
  { cat:"Platform", color:"text-bd dark:text-bd-lt", items:[
    { q:"Is my money and data safe?", a:"Yes. The platform uses SSL encryption, role-based access controls, audit logging, and requires admin approval before any disbursement is released." },
    { q:"What payment methods are accepted?", a:"Currently, contributions and repayments are made manually and confirmed by an admin. Online payment via Paystack will be available soon." },
  ]},
];

function FaqItem({ q, a, accentColor }: { q:string; a:string; accentColor:string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("border border-theme rounded-2xl overflow-hidden transition-all duration-300", open && "border-[var(--border)] shadow-brand")}>
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-card hover:bg-surface transition-colors group">
        <span className={cn("font-medium text-sm transition-colors", open ? accentColor : "text-heading")}>{q}</span>
        <ChevronDown size={18} className={cn("text-muted shrink-0 transition-transform duration-300", open && "rotate-180")}/>
      </button>
      {open && (
        <div className="px-6 pb-5 bg-surface border-t border-subtle">
          <p className="text-body text-sm leading-relaxed pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <PublicLayout>
      <PageHero
        image={IMG}
        eyebrow="Got Questions?"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about membership, contributions, and loans."
      />

      <section className="sec bg-base">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {faqs.map((section, si) => (
            <AnimateIn key={section.cat} animation="fade-up" delay={si * 60}>
              <div>
                <h2 className="font-playfair text-2xl font-bold text-heading mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-7 rounded-full bg-tussock inline-block"/>
                  {section.cat}
                </h2>
                <div className="space-y-3">
                  {section.items.map(item => (
                    <FaqItem key={item.q} q={item.q} a={item.a} accentColor={section.color}/>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}

          {/* Bottom CTA */}
          <AnimateIn animation="scale-in">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-bd"/>
              <div className="absolute inset-0 opacity-5"
                   style={{backgroundImage:"repeating-linear-gradient(45deg,var(--swirl) 0,var(--swirl) 1px,transparent 0,transparent 50%)",backgroundSize:"20px 20px"}}/>
              <div className="relative z-10 p-10 text-center">
                <h3 className="font-playfair text-2xl font-bold text-swirl mb-3">Still have questions?</h3>
                <p className="text-swirl/60 text-sm mb-7">Reach out to the executives directly — we're here to help.</p>
                <Link href="/contact"><Button variant="gold" size="lg">Contact Us</Button></Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </PublicLayout>
  );
}
