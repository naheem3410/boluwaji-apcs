import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { COOP_INFO } from "@/lib/constants/rules";

const cols = {
  "Cooperative": [
    { label:"About Us",     href:"/about" },
    { label:"Leadership",   href:"/leadership" },
    { label:"How It Works", href:"/how-it-works" },
    { label:"Contact",      href:"/contact" },
  ],
  "Members": [
    { label:"Sign In",       href:"/login" },
    { label:"Join Now",      href:"/register" },
    { label:"Dashboard",     href:"/dashboard" },
  ],
  "Information": [
    { label:"FAQ",           href:"/faq" },
    { label:"Loan Rules",    href:"/how-it-works#loans" },
    { label:"Privacy Policy",href:"/privacy" },
    { label:"Terms of Use",  href:"/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-bd-dk text-on-dark">
      {/* Wave top */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" className="w-full block" preserveAspectRatio="none">
          <path d="M0,0 C360,60 1080,0 1440,40 L1440,0 Z" fill="var(--bg-base)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-tussock flex items-center justify-center">
                <span className="font-playfair font-bold text-[#1a1208] text-xl">B</span>
              </div>
              <div>
                <p className="font-playfair font-bold text-swirl text-xl">Boluwaji APCS</p>
                <p className="text-swirl/50 text-xs">Est. {COOP_INFO.FOUNDED}</p>
              </div>
            </div>
            <p className="text-swirl/60 text-sm leading-relaxed mb-6 max-w-xs">
              {COOP_INFO.TAGLINE}. Built on mutual trust, community strength, and the power of interest-free finance.
            </p>
            <div className="space-y-3">
              {[
                { icon: Mail,   val: COOP_INFO.EMAIL,   href: `mailto:${COOP_INFO.EMAIL}` },
                { icon: Phone,  val: COOP_INFO.PHONE,   href: `tel:${COOP_INFO.PHONE}` },
                { icon: MapPin, val: COOP_INFO.ADDRESS,  href: undefined },
              ].map(({ icon:Icon, val, href }) => (
                <div key={val} className="flex items-center gap-2.5 group">
                  <div className="w-8 h-8 rounded-lg bg-tussock/15 flex items-center justify-center shrink-0 group-hover:bg-tussock/25 transition-colors">
                    <Icon size={14} className="text-tussock"/>
                  </div>
                  {href
                    ? <a href={href} className="text-sm text-swirl/60 hover:text-tussock transition-colors">{val}</a>
                    : <p className="text-sm text-swirl/60">{val}</p>
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(cols).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-swirl text-sm mb-5 tracking-wider uppercase">{title}</h4>
              <ul className="space-y-3">
                {links.map(l => (
                  <li key={l.href}>
                    <Link href={l.href}
                      className="text-sm text-swirl/55 hover:text-tussock transition-colors underline-anim">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-14 pt-6 border-t border-swirl/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-swirl/35">
            © {new Date().getFullYear()} {COOP_INFO.FULL_LEGAL_NAME}
          </p>
          <p className="text-xs text-swirl/35">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
