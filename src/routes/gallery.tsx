import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import galleryWheel from "@/assets/gallery-wheel.jpg";
import galleryEngine from "@/assets/gallery-engine.jpg";
import galleryExhaust from "@/assets/gallery-exhaust.jpg";
import galleryBrake from "@/assets/gallery-brake.jpg";
import heroCar from "@/assets/hero-car.jpg";
import tireWork from "@/assets/tire-work.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Custom Builds & Workshop Photos | MOTOcare" },
      {
        name: "description",
        content:
          "Browse MOTOcare builds: wheels, engine bays, exhaust systems, brake upgrades and finished performance cars.",
      },
      { property: "og:title", content: "MOTOcare Gallery" },
      { property: "og:description", content: "Wheels, engine bays, exhausts and finished builds from our workshop." },
    ],
  }),
  component: Gallery,
});

const items = [
  { src: heroCar, alt: "Red sports coupe in a dark studio", caption: "Finished Build" },
  { src: galleryWheel, alt: "Alloy wheel with red brake caliper", caption: "Wheels & Tyres" },
  { src: galleryEngine, alt: "Tuned engine bay with red intakes", caption: "Engine Tuning" },
  { src: galleryExhaust, alt: "Twin exhaust tips on a red car", caption: "Exhaust Systems" },
  { src: galleryBrake, alt: "Performance brake disc", caption: "Brake Service" },
  { src: tireWork, alt: "Mechanic fitting a performance wheel", caption: "In the Bay" },
];

function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Our Gallery"
        title="Work from the bay"
        description="A selection of recent builds, upgrades and details from the MOTOcare workshop."
      />
      <section className="section-y">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((g, i) => (
            <Reveal key={g.caption} delay={i * 0.06}>
              <figure className="group relative overflow-hidden rounded-2xl border border-border">
                <img
                  src={g.src}
                  alt={g.alt}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-background via-background/20 to-transparent p-5 text-sm font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {g.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
