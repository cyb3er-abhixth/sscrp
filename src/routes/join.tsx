import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader } from "@/components/Shell";
import { Copy, ExternalLink, Check } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "How to Join — South Sydney City RP" },
      { name: "description", content: "Step-by-step guide to joining the South Sydney City RP private ER:LC server." },
      { property: "og:title", content: "Join South Sydney City RP" },
      { property: "og:description", content: "Private server code, requirements, and how to connect." },
      { property: "og:url", content: "/join" },
    ],
    links: [{ rel: "canonical", href: "/join" }],
  }),
  component: JoinPage,
});

const steps = [
  { n: "01", t: "Able to play ER:LC on Roblox", d: "You'll need to play Emergency Response: Liberty County on Roblox. It's a free game" },
  { n: "02", t: "Join our Discord", d: "Read the rules, get verified, and pick your department roles." },
  { n: "03", t: "Open the private server", d: "Click the join link above or paste our private server code into ER:LC." },
  { n: "04", t: "Pick a slot & roleplay", d: "Spawn in, pick a department (or civ), and enjoy roleplaying!" },
];

function JoinPage() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(SITE.erlcCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Shell>
      <PageHeader
        eyebrow="Server Access"
        title="How to Join"
        subtitle="Three minutes from zero to your first time in-game."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        {/* Server code card */}
        <div className="relative overflow-hidden rounded-md border border-primary/40 bg-card p-6 md:p-8">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
          <div className="text-tracked text-xs text-primary">Private Server Code</div>
          <div className="font-mono mt-3 break-all text-2xl tracking-widest text-foreground sm:text-3xl md:text-5xl">
            {SITE.erlcCode}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={copy}
              className="text-tracked inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background/50 px-5 py-3 text-xs text-foreground transition-colors hover:bg-background"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copied" : "Copy Code"}
            </button>
            <a
              href={SITE.erlcJoinUrl}
              target="_blank"
              rel="noreferrer"
              className="text-tracked inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-xs text-primary-foreground shadow-[var(--shadow-glow)]"
            >
              Join Server <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Requirements */}
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {[
            { l: "Roblox Account", v: "Free" },
            { l: "ER:LC", v: "Required" },
            { l: "Discord", v: "Verified" },
          ].map((r) => (
            <div key={r.l} className="rounded-md border border-border bg-card p-4">
              <div className="text-tracked text-[10px] text-muted-foreground">{r.l}</div>
              <div className="font-display mt-1 text-xl text-primary">{r.v}</div>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="mt-12">
          <div className="text-tracked text-xs text-primary">Walkthrough</div>
          <h2 className="font-display mt-2 text-3xl">Connect in 4 steps</h2>

          <ol className="mt-8 space-y-4">
            {steps.map((s) => (
              <li
                key={s.n}
                className="flex gap-5 rounded-md border border-border bg-card p-5"
              >
                <div className="font-display shrink-0 text-4xl text-primary/60">{s.n}</div>
                <div>
                  <div className="font-display text-lg">{s.t}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </Shell>
  );
}