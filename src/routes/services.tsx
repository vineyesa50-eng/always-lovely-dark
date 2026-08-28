import { createFileRoute } from "@tanstack/react-router";
import { Car, PaintBucket, Wrench, Gauge, Disc, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Auto Services — Tuning, Custom Paint & Repair | MOTOcare" },
      {
        name: "description",
        content:
          "Engine tuning, car customization, custom paint, brake and suspension service, and full mechanical repair at MOTOcare.",
      },
      { property: "og:title", content: "MOTOcare Services" },
      {
        property: "og:description",
        content: "Tuning, customization, paint, brakes and full mechanical repair.",
      },
    ],
  }),
  component: Services,
});

const services = [
  { Icon: Car, title: "Car Customization", copy: "Bodykits, wheel fitment, interior retrims and one-off fabrication." },
  { Icon: Gauge, title: "Engine Tuning", copy: "Dyno-verified ECU calibration, intake and exhaust packages." },
  { Icon: Disc, title: "Brake Service", copy: "Big brake kits, pad and rotor replacement, fluid and line upgrades." },
  { Icon: Wrench, title: "Auto Repair", copy: "Diagnostics, engine, transmission and electrical repair." },
  { Icon: PaintBucket, title: "Car Painting", copy: "Booth-cured refinishing, colour change and ceramic coating." },
  { Icon: ShieldCheck, title: "Maintenance Plans", copy: "Scheduled servicing with fixed pricing and loan car options." },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything your car needs, under one roof"
        description="Six core service lines, all delivered in-house by technicians who specialise in performance vehicles."
      />
      <section className="section-y">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, copy }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <article className="card-surface card-surface-hover h-full p-8">
                <Icon className="size-9 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <h2 className="mt-6 font-display text-xl font-bold">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
