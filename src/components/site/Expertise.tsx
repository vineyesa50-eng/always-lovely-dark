import { Reveal } from "./Reveal";
import {
  Server,
  LayoutTemplate,
  Database,
  ShieldCheck,
  Code2,
  Braces,
  Layers,
  Wind,
  DatabaseZap,
  Boxes,
  CloudCog,
  GitBranch,
  Gauge,
  Lock,
} from "lucide-react";

const services = [
  { icon: Server, title: "Backend Engineering", blurb: ".NET 8, Clean Architecture, DDD" },
  { icon: LayoutTemplate, title: "Frontend Development", blurb: "Angular, React, Next.js" },
  { icon: Database, title: "Data & Performance", blurb: "SQL Server tuning, Redis, PostgreSQL" },
  { icon: ShieldCheck, title: "DevOps & Security", blurb: "Azure, Docker, OAuth 2.0, RBAC" },
];

const stack = [
  { icon: Code2, name: ".NET 8 / Core" },
  { icon: Braces, name: "C# / TypeScript" },
  { icon: Layers, name: "Angular / React / Next.js" },
  { icon: Wind, name: "Tailwind CSS" },
  { icon: DatabaseZap, name: "SQL Server / PostgreSQL" },
  { icon: Boxes, name: "Redis / MongoDB" },
  { icon: CloudCog, name: "Azure DevOps / Docker / K8s" },
  { icon: GitBranch, name: "Microservices / gRPC / SignalR" },
];

const otherSkills = [
  { icon: Gauge, label: "Query Optimization" },
  { icon: Lock, label: "OAuth 2.0 / JWT / RBAC" },
  { icon: Boxes, label: "Multi-tenant Isolation" },
  { icon: CloudCog, label: "CI/CD Pipelines" },
  { icon: Database, label: "High-throughput Queries" },
];

const metrics = [
  { value: "300%", label: "Database performance gain" },
  { value: "1,000+", label: "Real-time endpoints served" },
  { value: "4+", label: "Years building production systems" },
];

export function Expertise() {
  return (
    <section id="expertise" className="relative section-y">
      <div className="glow-radial pointer-events-none absolute inset-0" />
      <div className="relative shell">
        <Reveal>
          <p className="eyebrow">Technical Expertise</p>
          <h2 className="display mt-5 max-w-2xl text-[clamp(2.25rem,5vw,4.25rem)]">
            Skills & tools
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Focused where booking platforms live or die: multi-tenant isolation,
            high throughput, real-time availability, security, and relentless
            performance optimization.
          </p>
        </Reveal>

        {/* Sidebar + panel layout */}
        <Reveal delay={0.08}>
          <div className="surface mt-16 grid overflow-hidden rounded-2xl lg:grid-cols-[320px_1fr]">
            {/* Left — What I do */}
            <aside className="border-b border-border bg-background/60 p-8 lg:border-b-0 lg:border-r lg:p-10">
              <p className="text-[0.65rem] font-medium tracking-[0.32em] text-muted-foreground">
                WHAT I DO
              </p>
              <ul className="mt-8 space-y-6">
                {services.map((s) => (
                  <li key={s.title} className="group flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-elevated transition-colors group-hover:border-border-strong">
                      <s.icon className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" strokeWidth={1.5} />
                    </span>
                    <span>
                      <span className="block text-sm font-medium leading-snug">
                        {s.title}
                      </span>
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {s.blurb}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Right — Skills & tools */}
            <div className="bg-card p-8 lg:p-10">
              <p className="text-[0.65rem] font-medium tracking-[0.32em] text-muted-foreground">
                SOFTWARE SKILLS
              </p>

              {/* Icon badges */}
              <ul className="mt-6 flex flex-wrap gap-3">
                {stack.map((t) => (
                  <li
                    key={t.name}
                    className="group flex items-center gap-2.5 rounded-lg border border-border bg-elevated px-3.5 py-2.5 transition-colors hover:border-border-strong"
                  >
                    <span className="flex size-7 items-center justify-center rounded-md border border-border bg-background">
                      <t.icon className="size-3.5 text-muted-foreground transition-colors group-hover:text-foreground" strokeWidth={1.5} />
                    </span>
                    <span className="text-xs font-medium">{t.name}</span>
                  </li>
                ))}
              </ul>

              {/* Other skills — circular icon row */}
              <p className="mt-10 text-[0.65rem] font-medium tracking-[0.32em] text-muted-foreground">
                OTHER SKILLS
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
                {otherSkills.map((o) => (
                  <li key={o.label} className="flex flex-col items-center gap-3 text-center">
                    <span className="flex size-14 items-center justify-center rounded-full border border-border bg-elevated transition-colors hover:border-border-strong">
                      <o.icon className="size-5 text-muted-foreground" strokeWidth={1.25} />
                    </span>
                    <span className="text-[0.7rem] leading-tight text-muted-foreground">
                      {o.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Metrics */}
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.07}>
              <div className="surface surface-hover h-full p-8 text-center">
                <p className="display text-5xl">{m.value}</p>
                <p className="mt-3 text-xs tracking-wide text-muted-foreground">
                  {m.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
