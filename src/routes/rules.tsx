import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader } from "@/components/Shell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlertTriangle, Gavel, Car, Shield, Users, Flame } from "lucide-react";

export const Route = createFileRoute("/rules")({
  head: () => ({
    meta: [
      { title: "Rules & Conduct — South Sydney City RP" },
      { name: "description", content: "Full rulebook for South Sydney City RP — general conduct, RP standards, pursuits, civilian and emergency services rules." },
      { property: "og:title", content: "Rules — South Sydney City RP" },
      { property: "og:description", content: "How we keep South Sydney City a serious RP environment." },
      { property: "og:url", content: "/rules" },
    ],
    links: [{ rel: "canonical", href: "/rules" }],
  }),
  component: RulesPage,
});

const sections = [
  {
    id: "general-conduct",
    icon: Gavel,
    title: "General Conduct",
    rules: [
      "Be respectful at all times. Discrimination, hate speech, or harassment results in a permanent ban.",
      "No NSFW content in any channel or in-game. Keep it PG-13.",
      "Staff have final say. Argue tickets in DMs, not in-game.",
      "Ban evasion is permanent. New accounts will be detected.",
      "Use common sense — if you're unsure, ask a moderator before doing it.",
    ],
  },
  {
    id: "roleplay-standards",
    icon: Shield,
    title: "Roleplay Standards",
    rules: [
      "No FailRP. Treat every situation as if it were real life.",
      "No RDM (Random Deathmatch) or VDM (Vehicle Deathmatch).",
      "Maintain New Life Rule (NLR) — forget the events leading to your death for 5 minutes.",
      "No metagaming. Information from outside RP cannot be used in RP.",
      "No powergaming. Give other players a chance to react.",
    ],
  },
  {
    id: "website-discord",
    icon: Car,
    title: "Website & Discord Rules",
    rules: [
      "Do not DM advertise. If you are caught DM advertising, you will be banned or kicked.",
      "Do not start or cause drama in conversations.",
      "Do not spam messages or use duplicate characters in chat.",
      "Do not spam people with your server link in DMs. If you have an important question, open a support ticket.",
      "Keep server channels on-topic and follow staff direction for reporting rule breaks.",
    ],
  },
  {
    id: "in-game-guidelines",
    icon: Shield,
    title: "In-Game Guidelines",
    rules: [
      "Do not use exploiting or hacking. If you are caught, you will be banned from all servers.",
      "Do not spam in-game messages or repeatedly use duplicate characters.",
      "Roleplay responsibly and keep interactions realistic.",
      "Respect other players and allow them time to respond.",
      "Follow staff instructions during active RP scenes.",
    ],
  },
  {
    id: "community-safety",
    icon: Flame,
    title: "Community Safety",
    rules: [
      "Avoid toxic behaviour and keep the environment welcoming.",
      "Use the correct channel for support requests and do not post disputes publicly.",
      "Do not impersonate staff or use fake scenarios to deceive others.",
      "Cooperate with staff investigations and show respect to moderators.",
      "Keep your conduct consistent with server norms and RP expectations.",
    ],
  },
  {
    id: "roleplay-practices",
    icon: Users,
    title: "Roleplay Practices",
    rules: [
      "Do not powergame or metagame. Let other players react naturally.",
      "High-risk actions require clear roleplay and meaningful player interaction.",
      "Stay in character during RP and switch to civilian behaviour when out-of-character.",
      "Do not create unnecessary chaos without a valid RP reason.",
      "Respect vehicle and role restrictions inside the server and in-game.",
    ],
  },
  {
    id: "punishments",
    icon: AlertTriangle,
    title: "Punishments",
    rules: [
      "Verbal warning → Written warning → Kick → 1d / 3d / 7d ban → Permanent ban.",
      "Severe rule breaks (RDM compilation, racism, cheating) skip straight to permanent.",
      "Appeals via #ban-appeals in Discord. One appeal per ban.",
      "Punishments are logged and visible to all staff.",
    ],
  },
];

function RulesPage() {
  return (
    <Shell>
      <PageHeader
        eyebrow="Code of Conduct"
        title="Rules & Conduct"
        subtitle="Read the rulebook before joining. By connecting to the server you agree to all rules below."
      />
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <div className="mb-8 flex items-start gap-3 rounded-md border border-destructive/40 bg-destructive/10 p-4">
          <AlertTriangle className="mt-0.5 shrink-0 text-destructive" size={18} />
          <p className="text-sm text-foreground/90">
            Rules are updated regularly. The version in our Discord <code className="font-mono text-xs text-primary">#rules</code> channel is authoritative.
          </p>
        </div>

        <Accordion type="multiple" className="space-y-3">
          {sections.map((s, i) => (
            <AccordionItem
              key={s.id}
              value={s.id}
              className="overflow-hidden rounded-md border border-border bg-card"
            >
              <AccordionTrigger className="px-5 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/15 text-primary">
                    <s.icon size={16} />
                  </div>
                  <div className="text-left">
                    <div className="text-tracked text-[10px] text-muted-foreground">
                      Section {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="font-display text-lg">{s.title}</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5">
                <ol className="space-y-3 border-l border-border pl-5">
                  {s.rules.map((r, idx) => (
                    <li key={idx} className="relative text-sm text-foreground/90">
                      <span className="font-mono absolute -left-[26px] top-0 text-[10px] text-primary">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      {r}
                    </li>
                  ))}
                </ol>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </Shell>
  );
}