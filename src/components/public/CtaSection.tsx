import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";

const UNSPLASH_CTA = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80&auto=format&fit=crop";

export function CtaSection() {
  return (
    <section className="sec bg-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn animation="scale-in">
          <div className="relative rounded-4xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
              <img src={UNSPLASH_CTA} alt="Financial empowerment" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d2223]/96 via-[#1a4345]/90 to-[#235a5c]/75"/>
            </div>

            {/* ₦ motif inside card */}
            <div className="naira-motif absolute -right-12 top-1/2 -translate-y-1/2 pointer-events-none"
                 style={{WebkitTextStroke:"1.5px rgba(194,140,58,0.10)"}}>₦</div>

            {/* Gold accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tussock-dk via-tussock to-tussock-lt"/>

            <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-16 lg:py-20">
              <div className="max-w-2xl">
                <span className="inline-block px-4 py-1.5 rounded-full bg-tussock/20 text-tussock-lt text-sm font-semibold mb-6 border border-tussock/30">
                  Ready to Begin?
                </span>
                <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-5">
                  Join the Boluwaji<br/>
                  <span className="text-tussock">Community Today</span>
                </h2>
                <p className="text-black text-lg leading-relaxed mb-10">
                  All you need is your Member ID and a commitment to monthly contributions. Interest-free finance and community support await.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/register">
                    <Button variant="gold" size="xl" className="group">
                      Create Your Account
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="glass" size="xl">Contact the Executives</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
