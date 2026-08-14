import { Link } from "@tanstack/react-router";
import { NAV, SITE } from "@/lib/site";
import { Crest } from "./Crest";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <Crest size={48} />
            <div>
              <div className="font-display text-xl">South Sydney City RP</div>
              <div className="text-tracked text-[10px] text-primary">EST · 2025</div>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">{SITE.description}</p>
        </div>

        <div>
          <div className="text-tracked mb-3 text-[10px] text-primary">Navigate</div>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-muted-foreground transition-colors hover:text-foreground">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-tracked mb-3 text-[10px] text-primary">Community</div>
          <ul className="space-y-2 text-sm">
            <li><a className="text-muted-foreground hover:text-foreground" href={SITE.discord} target="_blank" rel="noreferrer">Discord</a></li>
            <li><a className="text-muted-foreground hover:text-foreground" href={SITE.tiktok} target="_blank" rel="noreferrer">TikTok</a></li>
            <li><a className="text-muted-foreground hover:text-foreground" href={SITE.x} target="_blank" rel="noreferrer">X</a></li>
            <li><a className="text-muted-foreground hover:text-foreground" href={SITE.youtube} target="_blank" rel="noreferrer">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-4 py-6 text-center text-xs text-muted-foreground md:px-6">
        © {new Date().getFullYear()} South Sydney City RP. Not affiliated with Roblox Corporation or Police Roleplay Community. Follow Discord and Roblox ToS.
      </div>
    </footer>
  );
}