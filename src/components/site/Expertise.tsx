import { useState } from "react";
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
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  blurb: string;
  description: string;
  stack: { icon: LucideIcon; name: string }[];
  otherSkills: { icon: LucideIcon; label: string }[];
};

const services: Service[] = [
  {
    icon: Server,
    title: "Backend Engineering",
    blurb: ".NET 8, Clean Architecture, DDD",
    description:
      "Scalable server-side systems built with clean architecture, domain-driven design, and high-throughput APIs.",
    stack: [
      { icon: Code2, name: ".NET 8 / Core" },
      { icon: Braces, name: "C# / TypeScript" },
      { icon: GitBranch, name: "Microservices / gRPC / SignalR" },
      { icon: CloudCog, name: "Azure DevOps / Docker / K8s" },
    ],
    otherSkills: [
      { icon: Boxes, label: "Multi-tenant Isolation" },
      { icon: Gauge, label: "High-throughput Queries" },
      { icon: Database, label: "Repository Patterns" },
    ],
  },
  {
    icon: LayoutTemplate,
    title: "Frontend Development",
    blurb: "Angular, React, Next.js",
    description:
      "Performance-first UIs with modern frameworks, design systems, and accessibility baked in from the start.",
    stack: [
      { icon: Layers, name: "Angular / React / Next.js" },
      { icon: Wind, name: "Tailwind CSS" },
      { icon: Braces, name: "TypeScript" },
    ],
    otherSkills: [
      { icon: Gauge, label: "Bundle Optimization" },
      { icon: Lock, label: "Auth Integration" },
      { icon: CloudCog, label: "Component Libraries" },
    ],
  },
  {
    icon: Database,
    title: "Data & Performance",
    blurb: "SQL Server tuning, Redis, PostgreSQL",
    description:
      "Data layers tuned for speed: indexing, caching, query optimization, and reliable persistence at scale.",
    stack: [
      { icon: DatabaseZap, name: "SQL Server / PostgreSQL" },
      { icon: Boxes, name: "Redis / MongoDB" },
      { icon: Database, name: "Entity Framework / Dapper" },
    ],
    otherSkills: [
      { icon: Gauge, label: "Query Optimization" },
      { icon: Database, label: "High-throughput Queries" },
      { icon: Boxes, label: "Caching Strategies" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "DevOps & Security",
    blurb: "Azure, Docker, OAuth 2.0, RBAC",
    description:
      "Secure delivery pipelines, identity-aware architectures, and role-based access for production workloads.",
    stack: [
      { icon: CloudCog, name: "Azure DevOps / Docker / K8s" },
      { icon: GitBranch, name: "CI/CD Pipelines" },
      { icon: Lock, name: "OAuth 2.0 / JWT" },
    ],
    otherSkills: [
      { icon: Lock, label: "RBAC & Claims" },
      { icon: Boxes, label: "Multi-tenant Isolation" },
      { icon: ShieldCheck, label: "Secret Management" },
    ],
  },
];

const metrics = [
  { value: "300%", label: "Database performance gain" },
  { value: "1,000+", label: "Real-time endpoints served" },
  { value: "4+", label: "Years building production systems" },
];

export function Expertise() {
  const [active, setActive] = useState(0);
  const current = services[active]!;

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
            {/* Left — What I do (tabs) */}
            <aside className="border-b border-border bg-background/60 p-6 lg:border-b-0 lg:border-r lg:p-8">
              <p className="text-[0.65rem] font-medium tracking-[0.32em] text-muted-foreground">
                WHAT I DO
              </p>
              <ul className="mt-6 space-y-2" role="tablist">
                {services.map((s, i) => {
                  const isActive = i === active;
                  return (
                    <li key={s.title}>
                      <button
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActive(i)}
                        className={`group flex w-full items-start gap-4 rounded-xl p-4 text-left transition-all ${
                          isActive
                            ? "bg-elevated ring-1 ring-border-strong"
                            : "hover:bg-elevated/50"
                        }`}
                      >
                        <span
                          className={`flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors ${
                            isActive
                              ? "border-border-strong bg-background"
                              : "border-border bg-elevated group-hover:border-border-strong"
                          }`}
                        >
                          <s.icon
                            className={`size-4 transition-colors ${
                              isActive
                                ? "text-foreground"
                                : "text-muted-foreground group-hover:text-foreground"
                            }`}
                            strokeWidth={1.5}
                          />
                        </span>
                        <span>
                          <span className="block text-sm font-medium leading-snug">
                            {s.title}
                          </span>
                          <span className="mt-1 block text-xs text-muted-foreground">
                            {s.blurb}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </aside>

            {/* Right — Skills & tools (active tab content) */}
            <div className="bg-card p-6 lg:p-8">
              <div className="flex flex-col gap-1">
                <p className="text-[0.65rem] font-medium tracking-[0.32em] text-muted-foreground">
                  SOFTWARE SKILLS
                </p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {current.description}
                </p>
              </div>

              {/* Icon badges */}
              <ul className="mt-6 flex flex-wrap gap-3">
                {current.stack.map((t) => (
                  <li
                    key={t.name}
                    className="group flex items-center gap-2.5 rounded-lg border border-border bg-elevated px-3.5 py-2.5 transition-colors hover:border-border-strong"
                  >
                    <span className="flex size-7 items-center justify-center rounded-md border border-border bg-background">
                      <t.icon
                        className="size-3.5 text-muted-foreground transition-colors group-hover:text-foreground"
                        strokeWidth={1.5}
                      />
                    </span>
                    <span className="text-xs font-medium">{t.name}</span>
                  </li>
                ))}
              </ul>

              {/* Other skills — circular icon row */}
              <p className="mt-10 text-[0.65rem] font-medium tracking-[0.32em] text-muted-foreground">
                OTHER SKILLS
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {current.otherSkills.map((o) => (
                  <li
                    key={o.label}
                    className="flex flex-col items-center gap-3 text-center"
                  >
                    <span className="flex size-14 items-center justify-center rounded-full border border-border bg-elevated transition-colors hover:border-border-strong">
                      <o.icon
                        className="size-5 text-muted-foreground"
                        strokeWidth={1.25}
                      />
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
