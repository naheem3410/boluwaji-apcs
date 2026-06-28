import { PublicLayout } from "@/components/layout/PublicLayout";
import { PageHero } from "@/components/public/PageHero";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { UserCircle2, Mail } from "lucide-react";

const IMG = "https://images.unsplash.com/photo-1638262052640-82e94d64664a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const exco = [
  { id:"1", title:"President",             name:"Name Placeholder", initials:"PP", color:"bg-bd" },
  { id:"2", title:"Vice President",         name:"Name Placeholder", initials:"VP", color:"bg-tussock" },
  { id:"3", title:"Secretary",             name:"Name Placeholder", initials:"SP", color:"bg-rust" },
  { id:"4", title:"Assistant Secretary",   name:"Name Placeholder", initials:"AS", color:"bg-bd" },
  { id:"5", title:"Treasurer",             name:"Name Placeholder", initials:"TP", color:"bg-tussock" },
  { id:"6", title:"Financial Secretary",   name:"Name Placeholder", initials:"FS", color:"bg-rust" },
];

export default function LeadershipPage() {
  return (
    <PublicLayout>
      <PageHero
        image={IMG}
        eyebrow="The Executives"
        title="Meet the Leadership"
        subtitle="The dedicated team steering Boluwaji APCS toward its mission of community financial empowerment."
      />

      <section className="sec bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up">
            <div className="text-center mb-14">
              <h2 className="font-playfair text-3xl font-bold text-heading mb-3">Executive Committee</h2>
              <p className="text-muted max-w-xl mx-auto text-sm">
                Photographs and full profiles will be updated once provided by the cooperative executives.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {exco.map((m, i) => (
              <AnimateIn key={m.id} animation="fade-up" delay={i * 80}>
                <div className="group bg-card rounded-3xl border border-theme overflow-hidden hover:-translate-y-2 hover:shadow-brand-lg transition-all duration-400">
                  {/* Photo placeholder */}
                  <div className="relative h-52 bg-surface flex items-center justify-center overflow-hidden">
                    <div className={`w-24 h-24 rounded-3xl ${m.color} flex items-center justify-center shadow-brand group-hover:scale-110 transition-transform duration-400`}>
                      <UserCircle2 size={40} className={m.color === "bg-tussock" ? "text-[#1a1208]" : "text-swirl"} />
                    </div>
                    {/* Top color bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 ${m.color}`}/>
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent"/>
                  </div>

                  <div className="p-6 pt-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3
                      ${m.color === "bg-bd" ? "bg-bd/10 text-bd dark:text-bd-lt border border-bd/20" :
                        m.color === "bg-tussock" ? "bg-tussock/15 text-tussock-dk dark:text-tussock-lt border border-tussock/25" :
                        "bg-rust/10 text-rust-dk dark:text-rust-lt border border-rust/20"}`}>
                      {m.title}
                    </span>
                    <h3 className="font-playfair font-bold text-xl text-heading mb-1">{m.name}</h3>
                    <p className="text-muted text-xs italic">Photo and bio to be provided</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn animation="fade-up" delay={600}>
            <p className="text-center text-muted text-sm mt-12 italic">
              * Executive profiles and photographs will be updated once provided by the cooperative.
            </p>
          </AnimateIn>
        </div>
      </section>
    </PublicLayout>
  );
}
