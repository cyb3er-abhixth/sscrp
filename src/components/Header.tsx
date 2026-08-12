import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { Crest } from "./Crest";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Crest size={40} />
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wide text-foreground">
              South Sydney City
            </div>
            <div className="text-tracked text-[10px] text-primary">ER:LC · Roleplay</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-primary bg-secondary/60" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              activeOptions={{ exact: true }}
              className="text-tracked rounded-md px-3 py-2 text-xs transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SITE.discord}
            target="_blank"
            rel="noreferrer"
            className="text-tracked ml-2 rounded-md bg-primary px-4 py-2 text-xs text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
          >
            Join Discord
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-border p-2 text-foreground lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/95 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-primary" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                activeOptions={{ exact: true }}
                className="text-tracked border-b border-border/50 py-3 text-xs"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={SITE.discord}
              target="_blank"
              rel="noreferrer"
              className="text-tracked mt-3 mb-2 rounded-md bg-primary py-3 text-center text-xs text-primary-foreground"
            >
              Join Discord
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}