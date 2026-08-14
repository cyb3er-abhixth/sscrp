import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader } from "@/components/Shell";
import { MessageCircle, Music2, Youtube, Twitter, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community & Socials — South Sydney City RP" },
      { name: "description", content: "Join the South Sydney City RP community on Discord, TikTok, X, and YouTube." },
      { property: "og:title", content: "Community — SSCRP" },
      { property: "og:description", content: "Follow SSCRP across Discord and social media." },
      { property: "og:url", content: "/community" },
    ],
    links: [{ rel: "canonical", href: "/community" }],
  }),
  component: CommunityPage,
});

const socials = [
  { icon: MessageCircle, name: "Discord", handle: "Primary hub", url: SITE.discord, color: "from-[oklch(0.6_0.2_270)] to-primary" },
  { icon: Music2, name: "TikTok", handle: "@southsydneycityrp", url: SITE.tiktok, color: "from-[oklch(0.7_0.15_330)] to-[oklch(0.5_0.2_200)]" },
  { icon: Twitter, name: "X", handle: "@southsydneycityrp", url: SITE.x, color: "from-[oklch(0.3_0.02_240)] to-[oklch(0.18_0.02_240)]" },
  { icon: Youtube, name: "YouTube", handle: "@southsydneyroleplayofficial", url: SITE.youtube, color: "from-[oklch(0.6_0.22_25)] to-[oklch(0.45_0.18_25)]" },
];

function CommunityPage() {
  return (
    <Shell>
      <PageHeader
        eyebrow="Stay Connected"
        title="Community"
        subtitle="Discord is mission control. Everything else is highlights, recruitment, and clips."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        {/* Discord hero card */}
        <a
          href={SITE.discord}
          target="_blank"
          rel="noreferrer"
          className="group relative block overflow-hidden rounded-md border border-primary/40 bg-gradient-to-br from-[oklch(0.25_0.1_260)] to-[oklch(0.13_0.03_260)] p-8 transition-all hover:border-primary md:p-12"
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl transition-opacity group-hover:opacity-80" />
          <div className="relative">
            <div className="text-tracked text-xs text-primary">Primary Hub</div>
            <h2 className="font-display mt-2 text-3xl sm:text-4xl md:text-6xl">Join the Discord</h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
              Verify, pick your departments, read the rules, and start your first
              shift in South Sydney City.
            </p>
            <div className="text-tracked mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-xs text-primary-foreground shadow-[var(--shadow-glow)]">
              Open Invite <ArrowUpRight size={14} />
            </div>
          </div>
        </a>

        {/* Socials grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socials.slice(1).map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-md border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/60"
            >
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br ${s.color}`}>
                <s.icon size={22} className="text-white" strokeWidth={1.5} />
              </div>
              <div className="font-display text-xl">{s.name}</div>
              <div className="font-mono mt-1 text-xs text-muted-foreground">{s.handle}</div>
              <ArrowUpRight
                size={16}
                className="absolute right-5 top-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
              />
            </a>
          ))}
        </div>

      </section>
    </Shell>
  );
}