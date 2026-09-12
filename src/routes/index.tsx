import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield, Flame, Stethoscope, Users, Radio, Star, ArrowRight, Wrench, HeartPulse, ShieldCheck } from "lucide-react";
import { Shell } from "@/components/Shell";
import { Crest } from "@/components/Crest";
import { AssetImage } from "@/components/AssetImage";
import { HERO_ASSETS } from "@/lib/assets";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "South Sydney City RP" },
      { name: "description", content: SITE.description },
      { property: "og:title", content: "South Sydney City RP" },
      { property: "og:description", content: SITE.description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const stats = [
  { value: "80+", label: "Members" },
  { value: "24/7", label: "Active Server" },
  { value: "6", label: "Departments" },
  { value: "AEST", label: "Timezone" },
];

const features = [
  { icon: Shield, title: "NSW Police Force", body: "Frontline patrol officers responding to incidents across River City and surrounds. Non-WL." },
  { icon: Radio, title: "NSW Highway Patrol", body: "Highway patrol, pursuit and traffic enforcement on the Highway 55. Non-WL." },
  { icon: Flame, title: "NSW Fire & Rescue", body: "Structure fires, MVAs, hazmat and rescue. Incident command on every job. Non-WL." },
  { icon: Stethoscope, title: "NSW Ambulance", body: "Paramedic roleplay — scene treatment, transport, and ED handover. Non-WL." },
  { icon: Wrench, title: "NRMA Roadside Assistance", body: "Roadside assistance, vehicle recovery and support across River City. Open to all members and drivers." },
  { icon: Users, title: "AFP - Australian Federal Police", body: "Whitelisted department with custom liveries and special access. Patrol the whole map with a full rank structure and realistic SOPs." },
  { icon: HeartPulse, title: "Northstar Medical Services", body: "Whitelisted department with custom liveries and special access. Private company in Springfield, providing medical services to premium clients. It has EMS and Coast Guard sub-divisions." },
  { icon: ShieldCheck, title: "Staff Team", body: "Moderators, admins and management keeping the city fair and active 24/7." },
];

function Home() {
  return (
    <Shell>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[var(--gradient-hero)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center md:px-6 md:py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-primary/30 blur-3xl" />
            <Crest size={120} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-tracked mt-6 text-xs text-primary"
          >
            ER:LC · Private Server · NSW · Sydney
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display mt-3 text-[2.75rem] leading-none sm:text-6xl md:text-8xl"
          >
            South Sydney
            <br />
            <span className="bg-gradient-to-r from-primary to-[oklch(0.75_0.18_240)] bg-clip-text text-transparent">
              City RP
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-5 max-w-xl text-sm text-muted-foreground md:text-base"
          >
            {SITE.tagline}. Serious roleplay. Realistic departments. A city that
            never sleeps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={SITE.discord}
              target="_blank"
              rel="noreferrer"
              className="text-tracked group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-xs text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              Join the Discord 
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              to="/join"
              className="text-tracked inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/60 px-6 py-3 text-xs text-foreground transition-colors hover:bg-card"
            >
              How to Join
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-10 w-full"
          >
            <AssetImage
              src={HERO_ASSETS.heroBanner}
              alt="South Sydney City RP hero artwork"
              containerClassName="mx-auto h-[240px] w-full max-w-5xl rounded-2xl shadow-[var(--shadow-glow)] sm:h-[300px] md:h-[380px]"
              className="object-cover"
            />
          </motion.div>

          {/* stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { delayChildren: 1, staggerChildren: 0.08 } },
            }}
            className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -5, borderColor: "var(--color-primary)" }}
                transition={{ duration: 0.25 }}
                className="rounded-md border border-border bg-card/50 px-4 py-4 backdrop-blur"
              >
                <div className="font-display text-2xl text-primary md:text-3xl">{s.value}</div>
                <div className="text-tracked mt-1 text-[10px] text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* marquee */}
        <div className="overflow-hidden border-y border-border bg-card/30 py-3">
          <div className="flex animate-[scroll_30s_linear_infinite] gap-12 whitespace-nowrap text-tracked text-xs text-muted-foreground">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12">
                <span>NSW Police</span><span className="text-primary">●</span>
                <span>Highway Patrol</span><span className="text-primary">●</span>
                <span>NSW Fire & Rescue</span><span className="text-primary">●</span>
                <span>NSW Ambulance</span><span className="text-primary">●</span>
                <span>AFP - Australian Federal Police</span><span className="text-primary">●</span>
                <span>NMS - NorthStar Medical Services</span><span className="text-primary">●</span>
                <span>Liberty County Bail Bonds</span><span className="text-primary">●</span>
                <span>Staff Team</span><span className="text-primary">●</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mb-12 max-w-2xl">
          <div className="text-tracked text-xs text-primary">Divisions</div>
          <h2 className="font-display mt-2 text-3xl md:text-5xl">Built for serious roleplay.</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Every department runs on documented SOPs, ranks, and training. Pick a
            lane — patrol the city, run code 3 to a structure fire, save a life,
            or live as a civilian.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group relative overflow-hidden rounded-md border border-border bg-card p-6 transition-colors hover:border-primary/60"
            >
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-12 translate-x-12 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <f.icon className="text-primary" size={28} strokeWidth={1.5} />
              <div className="font-display mt-4 text-xl">{f.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/departments"
            className="text-tracked inline-flex items-center gap-2 text-xs text-primary hover:underline"
          >
            View all departments <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-y border-border bg-card/40 px-4 py-16 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
        >
          <div className="text-tracked text-xs text-primary">Ready up</div>
          <h2 className="font-display mt-2 text-3xl sm:text-4xl md:text-6xl">Enjoyment starts here.</h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            Join 80+ members already in South Sydney City. New officers, paramedics, firies, and civs welcome.
            We are currently hiring.
          </p>
          <motion.a
            href="https://discord.gg/CZPhs66TWZ"
            target="_blank"
            rel="noreferrer"
            className="text-tracked mt-8 inline-flex rounded-md bg-primary px-8 py-4 text-xs text-primary-foreground shadow-[var(--shadow-glow)]"
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            Join Discord →
          </motion.a>
        </motion.div>
      </section>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </Shell>
  );
}
