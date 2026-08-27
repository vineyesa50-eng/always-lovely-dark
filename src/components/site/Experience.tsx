import { Reveal } from "./Reveal";

const roles = [
  {
    title: "Senior Software Developer",
    company: "WE3DS Company",
    period: "Jul 2024 — Present",
    location: "Tanta, Egypt",
    points: [
      "Architected scalable .NET 8 microservices using Clean Architecture and DDD",
      "Led multi-tenant architectures with secure data isolation and hierarchical RBAC",
      "Engineered high-throughput real-time backends with SignalR across 1,000+ endpoints",
      "Optimized database performance by 300% through query tuning, indexing and Redis",
      "Automated CI/CD pipelines with Azure DevOps",
    ],
  },
  {
    title: "Full Stack Developer (Freelance)",
    company: "Independent",
    period: "Nov 2023 — Jul 2024",
    location: "Cairo, Egypt",
    points: [
      "Delivered end-to-end applications with Next.js / React and .NET Core",
      "Integrated third-party REST APIs across payments, auth and mapping",
      "Containerized services with Docker for reproducible deployments",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative section-y">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Professional Experience</p>
          <h2 className="display mt-5 max-w-2xl text-[clamp(2.25rem,5vw,4.25rem)]">
            A record of shipped systems
          </h2>
        </Reveal>

        <div className="mt-16 space-y-6">
          {roles.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <article className="surface surface-hover p-8 lg:p-12">
                <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:justify-between">
                  <div>
                    <h3 className="display text-3xl">{r.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {r.company} · {r.location}
                    </p>
                  </div>
                  <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                    {r.period}
                  </p>
                </div>
                <ul className="mt-8 space-y-3">
                  {r.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-4 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
