import { Reveal } from "./Reveal";
import aboutImage from "@/assets/about.jpg";

const principles = [
  {
    name: "Precision",
    copy: "Every query, index and contract deliberately chosen.",
  },
  {
    name: "Reliability",
    copy: "Systems that hold under concurrent, real-world load.",
  },
  {
    name: "Scalability",
    copy: "Multi-tenant foundations that grow without rewrites.",
  },
  {
    name: "Clean Architecture",
    copy: "Boundaries that keep products maintainable for years.",
  },
];

export function About() {
  return (
    <section id="about" className="relative section-y">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">About</p>
            <h2 className="display mt-5 text-[clamp(2.25rem,5vw,4.25rem)]">
              Engineering for reliability and scale
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                I build the technical core behind products people depend on to
                reserve time: high-performance, secure, multi-tenant systems
                where a double booking is not an option.
              </p>
              <p>
                My work centres on real-time capability and high concurrency —
                SignalR-driven availability, cached read paths, tuned data
                access — held together by Clean Architecture so the platform
                stays maintainable long after launch.
              </p>
              <p>
                Four years of production experience across .NET 8, ASP.NET Core,
                Angular, React and Next.js, delivered with quiet confidence and
                measurable results.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {principles.map((p) => (
                <div key={p.name} className="surface surface-hover p-6">
                  <p className="display text-xl">{p.name}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {p.copy}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="surface overflow-hidden">
              <img
                src={aboutImage}
                alt="Classical marble bust in dramatic light"
                loading="lazy"
                width={1024}
                height={1280}
                className="size-full object-cover opacity-80"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
