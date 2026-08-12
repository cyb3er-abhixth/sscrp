import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import nswpfLogo from "../assets/images/nswpf.png";
import hwpLogo from "../assets/images/hwp.png";
import fireRescueLogo from "../assets/images/fire&rescue.png";
import nswaLogo from "../assets/images/nswa.png";
import nrmaLogo from "../assets/images/nrma.png";
import afpLogo from "../assets/images/afp.png";
import mainLogo from "../assets/images/main-logo.webp";
import nmsLogo from "../assets/images/nms.png";
import lcbbLogo from "../assets/images/lcbb.png";
import { Shell, PageHeader } from "@/components/Shell";
import { motion } from "framer-motion";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "Departments — South Sydney City RP" },
      { name: "description", content: "NSW Police, Highway Patrol, Fire & Rescue NSW, NSW Ambulance, Civilian Operations and Staff Team at South Sydney City RP." },
      { property: "og:title", content: "Departments — South Sydney City RP" },
      { property: "og:description", content: "All departments and ranks inside SSCRP." },
      { property: "og:url", content: "/departments" },
    ],
    links: [{ rel: "canonical", href: "/departments" }],
  }),
  component: DepartmentsPage,
});

const departments = [
  {
    logo: nswpfLogo,
    code: "DIV · 01",
    name: "NSW Police Force",
    blurb: "Frontline patrol officers responding to incidents across River City and surrounds. Non-WL.",
    ranks: ["Commander", "Constable", "Major", "Sergeant", "Corporal", "Recruit"],
    accent: "from-primary to-[oklch(0.5_0.18_245)]",
    logoBg: "bg-gradient-to-br from-primary to-[oklch(0.5_0.18_245)]",
    hasApply: false,
  },
  {
    logo: hwpLogo,
    code: "DIV · 02",
    name: "NSW Highway Patrol",
    blurb: "Highway patrol, pursuit and traffic enforcement on the Highway 55. Non-WL.",
    ranks: [ "HWP Senior Constable", "HWP Constable", "HWP Sergeant", "HWP Recruit"],
    accent: "from-[oklch(0.7_0.18_240)] to-primary",
    logoBg: "bg-gradient-to-br from-[oklch(0.7_0.18_240)] to-primary",
    hasApply: false,
  },
  {
    logo: fireRescueLogo,
    code: "DIV · 03",
    name: "NSW Fire & Rescue",
    blurb: "Structure fires, MVAs, hazmat and rescue. Incident command on every job. Non-WL.",
    ranks: [ "Superintendent", "Inspector", "Firefighter","Station Officer", "Senior Firefighter", "Firefighter Recruit"],
    accent: "from-[oklch(0.65_0.22_30)] to-[oklch(0.5_0.18_25)]",
    logoBg: "bg-gradient-to-br from-[oklch(0.65_0.22_30)] to-[oklch(0.5_0.18_25)]",
    hasApply: false,
  },
  {
    logo: nswaLogo,
    code: "DIV · 04",
    name: "NSW Ambulance",
    blurb: "Paramedic roleplay — scene treatment, transport, and ED handover. Non-WL.",
    ranks: ["Duty Manager", "Intensive Care Paramedic","Paramedic", "Trainee Paramedic"],
    accent: "from-[oklch(0.75_0.15_150)] to-[oklch(0.5_0.15_180)]",
    logoBg: "bg-white ring-1 ring-border",
    hasApply: false,
  },
  {
    logo: nrmaLogo,
    code: "DIV · 05",
    name: "NRMA Roadside Assistance",
    blurb: "Roadside assistance, vehicle recovery and support across River City. Open to all members and drivers.",
    ranks: ["Senior Tow Operator" ,"Tow Operator","Senior Technician","Technician", "Trainee",],
    accent: "from-[oklch(0.6_0.15_90)] to-[oklch(0.45_0.18_100)]",
    logoBg: "bg-white ring-1 ring-border",
    hasApply: false,
  },
  {
    logo: afpLogo,
    code: "DIV · 06",
    name: "AFP - Australian Federal Police",
    blurb: "Whitelisted department with custom liveries and special access. Patrol the whole map with a full rank structure and realistic SOPs.",
    ranks: ["Commissioner", "Commander", "Superintendent", "Inspector", "Sergeant", "Senior Constable", "Constable", "Recruit"],
    accent: "from-[oklch(0.7_0.15_300)] to-[oklch(0.5_0.15_290)]",
    logoBg: "bg-blue-600",
    hasApply: true,
  },
  {
    logo: nmsLogo,
    code: "DIV · 07",
    name: "Northstar Medical Services",
    blurb: "Whitelisted department with custom liveries and special access. Private company in springfield, providing medical services to premium clients. It have EMS and Coast Guard Sub-divisions.",
    ranks: ["Commissioner", "Chief Superindentment", "Inspector", "Sergeant", "Inspector", "Medic Level 2", "Medic Level 1", "Recruit"],
    accent: "from-[oklch(0.7_0.15_300)] to-[oklch(0.5_0.15_290)]",
    logoBg: "bg-white ring-1 ring-border",
    hasApply: true,
  },
  {
    logo: lcbbLogo,
    code: "DIV · 08",
    name: "Liberty County Bail Bonds",
    blurb: "Whitelisted department with custom liveries and special access. Private company in springfield, providing medical services to premium clients. It have EMS and Coast Guard Sub-divisions.",
    ranks: ["Commissioner", "Chief Superindentment", "Inspector", "Sergeant", "Inspector", "Medic Level 2", "Medic Level 1", "Recruit"],
    accent: "from-[oklch(0.7_0.15_300)] to-[oklch(0.5_0.15_290)]",
    logoBg: "bg-white ring-1 ring-border",
    hasApply: true,
  },
  {
    logo: mainLogo,
    code: "DIV · 09",
    name: "Staff Team",
    blurb: "Moderators, admins and management keeping the city fair and active 24/7.",
    ranks: ["Foundership", "Co-founder", "Owner", "Director", "Management", "Administrator", "Moderator", "Trial Moderator"],
    accent: "from-[oklch(0.8_0.15_85)] to-[oklch(0.55_0.18_60)]",
    logoBg: "bg-gradient-to-br",
    hasApply: true,
  },
];

function DepartmentsPage() {
  return (
    <Shell>
      <PageHeader
        eyebrow="Divisions"
        title="Departments"
        subtitle="Seven divisions running South Sydney City. Pick your lane — all are recruiting."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {departments.map((d, i) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group relative overflow-hidden rounded-md border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/60"
            >
              <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${d.accent} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`} />
              <div className="flex items-start justify-between">
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-md ${d.logoBg ?? `bg-gradient-to-br ${d.accent}`} ${d.logoBg === "bg-white ring-1 ring-border" ? "border border-border" : ""}`}>
                  <img
                    src={d.logo}
                    alt={`${d.name} logo`}
                    className={`h-10 w-10 object-contain ${d.logoBg === "bg-blue-600" ? "invert brightness-110" : ""}`}
                  />
                </div>
                <div className="text-tracked text-[10px] text-muted-foreground">{d.code}</div>
              </div>
              <h2 className="font-display mt-5 text-2xl">{d.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{d.blurb}</p>

              <div className="text-tracked mt-5 text-[10px] text-primary">Rank Structure</div>
              <ul className="mt-2 space-y-1.5">
                {d.ranks.map((r, idx) => (
                  <li key={r} className="flex items-center gap-3 text-sm">
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-foreground/90">{r}</span>
                  </li>
                ))}
              </ul>

              {d.hasApply && (
                <Link
                  to="/apply"
                  className="text-tracked mt-6 inline-flex items-center gap-2 text-xs text-primary hover:underline"
                >
                  Apply now <ArrowRight size={14} />
                </Link>
              )}
            </motion.article>
          ))}
        </div>
      </section>
    </Shell>
  );
}