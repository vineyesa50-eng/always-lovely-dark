import { Reveal } from "./Reveal";
import { Server, LayoutTemplate, Database, ShieldCheck } from "lucide-react";

const groups = [
  {
    icon: Server,
    title: "Backend",
    items: [
      ".NET 8 / Core",
      "C#",
      "ASP.NET Web API",
      "Microservices",
      "Clean Architecture",
      "DDD",
      "SignalR",
      "gRPC",
      "Entity Framework",
    ],
  },
  {
    icon: LayoutTemplate,
    title: "Frontend",
    items: [
      "Angular",
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
    ],
  },
  {
    icon: Database,
    title: "Data & Performance",
    items: [
      "SQL Server (Advanced Tuning)",
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "High-throughput queries",
    ],
  },
  {
    icon: ShieldCheck,
    title: "DevOps & Security",
    items: [
      "Azure DevOps",
      "Docker",
      "Kubernetes",
      "OAuth 2.0",
      "JWT",
      "RBAC",
      "CI/CD",
    ],
  },
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
            Core competencies
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Focused where booking platforms live or die: multi-tenant isolation,
            high throughput, real-time availability, security, and relentless
            performance optimization.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.07}>
              <div className="surface surface-hover h-full p-8 lg:p-10">
                <g.icon
                  className="size-5 text-muted-foreground"
                  strokeWidth={1.25}
                />
                <h3 className="display mt-6 text-2xl">{g.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

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
