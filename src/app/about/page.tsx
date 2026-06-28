import { PublicLayout } from "@/components/layout/PublicLayout";
import { PageHero } from "@/components/public/PageHero";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Shield, Target, Heart, Users } from "lucide-react";
import { COOP_INFO } from "@/lib/constants/rules";

const IMG_ABOUT = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80&auto=format&fit=crop";
const IMG_STORY = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&auto=format&fit=crop";

const values = [
  { icon:Shield, title:"Integrity",    desc:"Every decision is made with full transparency and accountability to our members.", color:"text-bd dark:text-bd-lt", bg:"bg-bd/10 dark:bg-bd/20" },
  { icon:Target, title:"Purpose",      desc:"Providing accessible, interest-free finance to empower each member financially.",  color:"text-tussock-dk dark:text-tussock-lt", bg:"bg-tussock/15" },
  { icon:Heart,  title:"Unity",        desc:"We succeed together. The collective strength of our members is what makes us strong.", color:"text-rust dark:text-rust-lt", bg:"bg-rust/10" },
  { icon:Users,  title:"Self-Help",    desc:"Communities thrive when members support one another without external dependency.", color:"text-bd dark:text-bd-lt", bg:"bg-bd/10 dark:bg-bd/20" },
];

const timeline = [
  { year:"2017", event:"Cooperative founded by a close-knit group of friends in Ibadan" },
  { year:"2018", event:"First interest-free loans disbursed to qualifying members" },
  { year:"2020", event:"Rules and governance structure formally documented and adopted" },
  { year:"2023", event:"Membership expanded; digital record-keeping introduced" },
  { year:"2025+", event:"Platform launch for digital contributions and loan management" },
];

export default function AboutPage() {
  return (
    <PublicLayout>
      <PageHero
        image={IMG_ABOUT}
        eyebrow="Our Story"
        title="Built on Mutual Trust Since 2017"
        subtitle="A cooperative born from a simple but powerful idea — that communities can finance themselves, together, without interest."
      />

      {/* Story */}
      <section className="sec bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn animation="fade-up">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-tussock/15 text-tussock-dk dark:text-tussock-lt text-sm font-semibold mb-5 border border-tussock/25">Our Origin</span>
                <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-heading mb-6">
                  From Shared Frustration<br/>
                  <span className="text-bd dark:text-bd-lt">to Lasting Solution</span>
                </h2>
                <div className="space-y-4 text-body leading-relaxed">
                  <p>{COOP_INFO.NAME} was established in 2017 out of a shared desire to create access to affordable and interest-free financial support for its members.</p>
                  <p>The founder recognized the challenges many individuals faced in obtaining loans without the burden of high interest rates, and envisioned a cooperative system built on mutual trust, support, and collective growth.</p>
                  <p>Driven by this vision, a group of like-minded friends came together and began contributing funds regularly. These pooled resources were then made available to members who needed loans — providing timely financial assistance without interest.</p>
                  <p>Over the years, the cooperative has continued to uphold its founding principles of unity, self-help, and financial empowerment, serving as a reliable source of support while promoting economic stability and community development.</p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn animation="slide-left">
              <div className="relative">
                <img src={IMG_STORY} alt="Team collaboration" className="w-full rounded-3xl object-cover shadow-brand-lg h-96 lg:h-[500px]"/>
                {/* Floating badge on image */}
                <div className="absolute -bottom-5 -left-5 bg-tussock rounded-2xl px-5 py-4 shadow-brand-lg">
                  <p className="font-playfair font-bold text-3xl text-[#1a1208]">7+</p>
                  <p className="text-[#1a1208]/70 text-xs font-medium">Years of Service</p>
                </div>
                <div className="absolute -top-5 -right-5 bg-bd rounded-2xl px-5 py-4 shadow-brand-lg">
                  <p className="font-playfair font-bold text-3xl text-swirl">0%</p>
                  <p className="text-swirl/70 text-xs font-medium">Interest Rate</p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="sec bg-surface relative overflow-hidden">
        <div className="naira-motif absolute -left-16 top-1/2 -translate-y-1/2 pointer-events-none"
             style={{WebkitTextStroke:"1px rgba(35,90,92,0.05)"}}>₦</div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn animation="fade-up">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-bd/10 text-bd dark:text-bd-lt text-sm font-semibold mb-4 border border-bd/20">Our Journey</span>
              <h2 className="font-playfair text-4xl font-bold text-heading">Milestones</h2>
            </div>
          </AnimateIn>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-tussock via-bd to-transparent"/>
            {timeline.map((item, i) => (
              <AnimateIn key={item.year} animation="fade-up" delay={i * 100}>
                <div className="flex gap-8 pb-10 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-bd flex items-center justify-center shadow-brand shrink-0 z-10">
                      <span className="text-swirl text-xs font-bold text-center leading-tight">{item.year.replace("+","")}<br/>{item.year.includes("+")&&"+"}</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="font-semibold text-tussock-dk dark:text-tussock-lt text-sm mb-1">{item.year}</p>
                    <p className="text-body">{item.event}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="sec bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-tussock/15 text-tussock-dk dark:text-tussock-lt text-sm font-semibold mb-4 border border-tussock/25">What Guides Us</span>
              <h2 className="font-playfair text-4xl font-bold text-heading">Our Core Values</h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimateIn key={v.title} animation="fade-up" delay={i * 80}>
                <div className="bg-card rounded-3xl border border-theme p-7 text-center group hover:-translate-y-2 hover:shadow-brand-lg transition-all duration-400">
                  <div className={`w-14 h-14 rounded-2xl ${v.bg} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                    <v.icon size={24} className={v.color}/>
                  </div>
                  <h3 className="font-playfair font-bold text-xl text-heading mb-3">{v.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
