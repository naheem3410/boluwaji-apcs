"use client";
import { useState } from "react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { PageHero } from "@/components/public/PageHero";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { COOP_INFO } from "@/lib/constants/rules";

const IMG = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80&auto=format&fit=crop";

const contactItems = [
  { icon:Mail,   label:"Email",   val:COOP_INFO.EMAIL,   href:`mailto:${COOP_INFO.EMAIL}`, color:"bg-bd/10 text-bd dark:text-bd-lt" },
  { icon:Phone,  label:"Phone",   val:COOP_INFO.PHONE,   href:`tel:${COOP_INFO.PHONE}`,   color:"bg-tussock/15 text-tussock-dk dark:text-tussock-lt" },
  { icon:MapPin, label:"Address", val:COOP_INFO.ADDRESS, href:undefined,                   color:"bg-rust/10 text-rust dark:text-rust-lt" },
];

const inputCls = "w-full px-4 py-3 rounded-2xl border border-theme bg-surface text-heading placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-[var(--blue-dianne)] transition-all";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm({...form, [e.target.name]: e.target.value});

  const onSubmit = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200)); // TODO: connect to notificationService
    setLoading(false); setSent(true);
  };

  return (
    <PublicLayout>
      <PageHero
        image={IMG}
        eyebrow="Get in Touch"
        title="Contact the Executives"
        subtitle="Have a question, concern, or want to learn more? Reach out and we will respond promptly."
      />

      <section className="sec bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Left: info */}
            <div className="lg:col-span-2 space-y-6">
              <AnimateIn animation="fade-up">
                <div>
                  <h2 className="font-playfair text-3xl font-bold text-heading mb-2">Contact Information</h2>
                  <p className="text-muted text-sm">Placeholders — to be updated with official details.</p>
                </div>
              </AnimateIn>

              {contactItems.map(({icon:Icon, label, val, href, color}, i) => (
                <AnimateIn key={label} animation="fade-up" delay={i * 80}>
                  <div className="bg-card rounded-2xl border border-theme p-5 flex items-start gap-4 hover:shadow-brand transition-all duration-300 group">
                    <div className={`w-11 h-11 rounded-xl ${color.split(" ")[0]} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon size={18} className={color.split(" ").slice(1).join(" ")}/>
                    </div>
                    <div>
                      <p className="text-xs text-muted mb-1">{label}</p>
                      {href
                        ? <a href={href} className="text-sm font-semibold text-heading hover:text-bd transition-colors">{val}</a>
                        : <p className="text-sm font-semibold text-heading">{val}</p>
                      }
                    </div>
                  </div>
                </AnimateIn>
              ))}

              <AnimateIn animation="fade-up" delay={300}>
                <div className="bg-bd rounded-2xl p-6">
                  <p className="font-semibold text-tussock-lt text-sm mb-2">Need your Member ID?</p>
                  <p className="text-swirl/60 text-sm leading-relaxed">Contact the executives directly to receive your registration ID before signing up on the platform.</p>
                </div>
              </AnimateIn>
            </div>

            {/* Right: form */}
            <AnimateIn animation="slide-left" className="lg:col-span-3">
              <div className="bg-card rounded-3xl border border-theme p-8 lg:p-10">
                {sent ? (
                  <div className="text-center py-10">
                    <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={36} className="text-emerald-600 dark:text-emerald-400"/>
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-heading mb-3">Message Sent!</h3>
                    <p className="text-muted mb-7">Thank you for reaching out. The executives will get back to you shortly.</p>
                    <Button variant="outline" onClick={() => { setSent(false); setForm({name:"",email:"",subject:"",message:""}); }}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-5">
                    <div>
                      <h2 className="font-playfair text-2xl font-bold text-heading mb-1">Send a Message</h2>
                      <p className="text-muted text-sm">We'll get back to you as soon as possible.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-body mb-1.5">Full Name</label>
                        <input name="name" value={form.name} onChange={onChange} placeholder="Your full name" className={inputCls}/>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-body mb-1.5">Email Address</label>
                        <input name="email" type="email" value={form.email} onChange={onChange} placeholder="your@email.com" className={inputCls}/>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-body mb-1.5">Subject</label>
                      <select name="subject" value={form.subject} onChange={onChange} className={inputCls}>
                        <option value="">Select a subject</option>
                        <option>Membership Enquiry</option>
                        <option>Contribution Issue</option>
                        <option>Loan Application</option>
                        <option>Account Support</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-body mb-1.5">Message</label>
                      <textarea name="message" value={form.message} onChange={onChange} rows={5}
                        placeholder="Write your message here..." className={`${inputCls} resize-none`}/>
                    </div>
                    <Button onClick={onSubmit} loading={loading} size="lg" variant="primary" fullWidth className="gap-2">
                      <Send size={16}/>
                      Send Message
                    </Button>
                  </div>
                )}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
