import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import workshop from "@/assets/workshop.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MOTOcare — Performance Garage & Expert Technicians" },
      {
        name: "description",
        content:
          "Meet the MOTOcare workshop: 18 years of performance builds, in-house dyno, paint booth and certified technicians.",
      },
      { property: "og:title", content: "About MOTOcare" },
      {
        property: "og:description",
        content: "18 years of performance builds, in-house dyno, paint booth and certified technicians.",
      },
    ],
  }),
  component: About,
});

const stats = [
  { value: "18+", label: "Years in business" },
  { value: "9", label: "Service bays" },
  { value: "24", label: "Specialists" },
  { value: "6.2k", label: "Cars serviced" },
];

const team = [
  { src: team1, alt: "Smiling mechanic in red uniform", name: "Marco Reyes", role: "Lead Technician" },
  { src: team2, alt: "Bearded mechanic holding a wrench", name: "Dean Walker", role: "Performance Tuner" },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A workshop built by drivers, for drivers"
        description="We started with two bays and a dyno rented by the hour. The obsession with getting every detail right is what grew the rest."
      />

      <section className="section-y">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={workshop}
              alt="Mechanics working on a red sports car in a dark garage"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full rounded-2xl border border-border object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-[2.6rem] md:leading-[1.15]">How we work</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Every car begins with a documented inspection and a fixed quote. Nothing gets touched
              until you approve the scope, and nothing leaves without a road test.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We keep OEM tooling for diagnostics, fabricate in-house for anything off the shelf
              can't solve, and photograph the process so you see exactly what you paid for.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="card-surface p-6">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-3xl font-bold text-primary">{s.value}</dd>
                  <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-card/40">
        <div className="container-page">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-[2.6rem] md:leading-[1.15]">Team Expert</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.1}>
                <figure className="card-surface card-surface-hover overflow-hidden">
                  <img
                    src={m.src}
                    alt={m.alt}
                    width={700}
                    height={900}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover"
                  />
                  <figcaption className="p-5">
                    <p className="font-bold">{m.name}</p>
                    <p className="text-sm text-primary">{m.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
