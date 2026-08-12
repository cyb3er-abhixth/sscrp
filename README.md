# South Sydney City RP — ER:LC website

Fully-responsive marketing / community site for the South Sydney City RP private
server. Built with TanStack Start (React 19 + Vite 7) and Tailwind v4.

---

## 1. Get the code onto your PC

You have two options — pick ONE.

### Option A — GitHub (recommended, stays in sync with Lovable)

1. In Lovable, click the **+** menu (bottom-left of the chat) → **GitHub** →
   **Connect to GitHub** → authorize → **Create repository**.
2. Install the tools below on your PC (one time only):
   - **Git** — <https://git-scm.com/downloads>
   - **Node.js 20+** — <https://nodejs.org> (installs `node` and `npm`)
   - **Bun** — <https://bun.sh>
     - Windows PowerShell: `powershell -c "irm bun.sh/install.ps1 | iex"`
     - macOS / Linux: `curl -fsSL https://bun.sh/install | bash`
   - Close and re-open your terminal so the new tools appear on your PATH.
3. Open **Command Prompt** (Windows) or **Terminal** (macOS/Linux) and run:

   ```bash
   cd Desktop
   git clone https://github.com/<your-username>/<your-repo>.git
   cd <your-repo>
   bun install
   bun run dev
   ```

4. Open the URL it prints — usually <http://localhost:8080>.

**Syncing:**
- Pull Lovable's latest changes: `git pull`
- Push your local edits back so Lovable sees them:
  `git add . && git commit -m "your message" && git push`

### Option B — Download ZIP (one-off snapshot, no sync)

1. In Lovable, click **+** → **Download project** (or, if connected, GitHub →
   **Code** → **Download ZIP**).
2. Unzip it somewhere like `Desktop\south-sydney-rp`.
3. Install **Node.js 20+** and **Bun** (see Option A step 2).
4. In Command Prompt / Terminal:

   ```bash
   cd Desktop\south-sydney-rp
   bun install
   bun run dev
   ```

5. Open <http://localhost:8080>.

---

## 2. Everyday commands

Run all of these from inside the project folder.

| Command | What it does |
| --- | --- |
| `bun install` | Install all dependencies (run once, and again whenever `package.json` changes). |
| `bun run dev` | Start the dev server with hot reload at <http://localhost:8080>. |
| `bun run build` | Build the production site into `.output/`. |
| `bun run start` | Serve the production build locally to test it. |
| `bun add <pkg>` | Add a new npm package. |
| `bun remove <pkg>` | Remove a package. |

If you prefer npm: replace `bun` with `npm` and `bun run` with `npm run`. Bun is
just faster.

---

## 3. Where to edit things

- **Server links, Discord invite, ER:LC code, social URLs** →
  `src/lib/site.ts` (one file, swap the placeholders for your real values).
- **Pages** → `src/routes/*.tsx` (one file per URL: `index.tsx` is `/`,
  `departments.tsx` is `/departments`, etc.).
- **Header / Footer** → `src/components/Header.tsx`, `src/components/Footer.tsx`.
- **Colors, fonts, theme** → `src/styles.css`.
- **Logo (crest SVG)** → `src/components/Crest.tsx`.

---

## 4. Deploying

- **Easiest:** click **Publish** inside Lovable → you get a `*.lovable.app` URL,
  and you can attach a custom domain from Project Settings.
- **Self-host:** run `bun run build`, then deploy the generated `.output/`
  folder to any Node/Edge host (Cloudflare Workers, Vercel, Netlify, your own
  VPS with `bun run start`).

---

## 5. Troubleshooting

| Problem | Fix |
| --- | --- |
| `bun: command not found` | Close and re-open your terminal so PATH refreshes. On Windows, sign out and back in if it still doesn't work. |
| `git: command not found` | Install Git from <https://git-scm.com/downloads> and restart the terminal. |
| `EADDRINUSE :8080` | Port 8080 is in use. Close whatever's on it, or run `bun run dev -- --port 5173`. |
| Blank page in the browser | Make sure the terminal is still running `bun run dev` — closing it stops the site. |
| Git asks for a password every push | Use a Personal Access Token from <https://github.com/settings/tokens>, or install GitHub Desktop and let it handle auth. |
| Fonts missing after a build | Run `bun install` again — sometimes the font packages don't finish installing on the first pass. |

---

No backend is required — the site is fully static/SSR-only and runs standalone.