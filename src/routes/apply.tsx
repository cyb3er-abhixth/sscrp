import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader } from "@/components/Shell";
import { Shield, Flame, Users, Wrench, ArrowRight, ClipboardCheck } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Applications — South Sydney City RP" },
      { name: "description", content: "Apply for staff, AFP, NorthStar Medical Services, or custom civilian roles at South Sydney City RP." },
      { property: "og:title", content: "Applications — SSCRP" },
      { property: "og:description", content: "Open applications: staff, Australian Federal Police, Northstar Medical Services, Liberty County Bail Bonds" },
      { property: "og:url", content: "/apply" },
    ],
    links: [{ rel: "canonical", href: "/apply" }],
  }),
  component: ApplyPage,
});

const apps = [
  {
    icon: Wrench,
    title: "Staff Application",
    blurb: "Join the moderation team. Must be 13+, active in Discord, and prior experience preferred.",
    requirements: ["13+ years old", "Active in Discord", "Clean record", "Available 2h/week"],
    url: SITE.discord,
  },

  {
    icon: Shield,
    title: "Australian Federal Police",
    blurb: "The AFP is a federal law enforcement agency. Must be 12+, active in Discord, active in roblox, and skilled in LEOn team of ER:LC. Good XP preferred..",
    requirements: ["13+ years old", "Active in Discord", "Clean record", "Available in all/most SSUs"],
    url: SITE.discord,
  },

  {
    icon: Flame,
    title: "NorthStar Medical Services",
    blurb: "NSMS is a medical service providing emergency care. Must be 12+, active in Discord, active in roblox, and skilled in Fire team of ER:LC. Good XP preferred.",
    requirements: ["13+ years old", "Active in Discord", "Clean record", "Available in all/most SSUs"],
    url: SITE.discord,
  },

  {
    icon: Users,
    title: "Liberty County Bail Bonds",
    blurb: "LCBB is an illegal business providing bail bonds services. Must be 12+, active in Discord, active in roblox, and have good amount of XP in LEO team. This is a Sheriff role. There are no bail bond agents in Australia. It is therefore illegal. Police will arrest you if you are caught in the act.",
    requirements: ["13+ years old", "Active in Discord", "Clean record", "Available in all/most SSUs"],
    url: SITE.discord,
  },
];

function ApplyPage() {
  return (
    <Shell>
      <PageHeader
        eyebrow="Recruitment"
        title="Applications"
        subtitle="All applications are reviewed by senior staff within 48 hours."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {apps.map((a) => (
            <article
              key={a.title}
              className="group flex flex-col rounded-md border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/60"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/15 text-primary">
                  <a.icon size={22} strokeWidth={1.5} />
                </div>
                <div className="text-tracked rounded-full bg-[oklch(0.75_0.15_150)/0.15] px-3 py-1 text-[10px] text-[oklch(0.75_0.15_150)]">
                  Open
                </div>
              </div>
              <h2 className="font-display mt-5 text-2xl">{a.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{a.blurb}</p>

              <div className="text-tracked mt-5 text-[10px] text-primary">Requirements</div>
              <ul className="mt-2 space-y-1.5">
                {a.requirements.map((r) => (
                  <li key={r} className="flex items-center gap-2 text-sm text-foreground/90">
                    <ClipboardCheck size={14} className="shrink-0 text-primary" />
                    {r}
                  </li>
                ))}
              </ul>

              <a
                href={a.url}
                target="_blank"
                rel="noreferrer"
                className="text-tracked mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-xs text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
              >
                Apply via Discord <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Applications run through Discord forms. It is managed and applied through a bot called Melonly that is connected to the server. If you have any questions, please reach out to a staff member in the Discord server.
        </p>
      </section>
    </Shell>
  );
}