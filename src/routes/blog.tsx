import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import galleryEngine from "@/assets/gallery-engine.jpg";
import galleryBrake from "@/assets/gallery-brake.jpg";
import galleryExhaust from "@/assets/gallery-exhaust.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Performance Tips & Maintenance Guides | MOTOcare" },
      {
        name: "description",
        content:
          "Performance upgrade guides, brake and engine maintenance advice, and workshop notes from the MOTOcare technicians.",
      },
      { property: "og:title", content: "MOTOcare Blog" },
      { property: "og:description", content: "Upgrade guides and maintenance advice from our technicians." },
    ],
  }),
  component: Blog,
});

const posts = [
  {
    src: galleryEngine,
    alt: "Engine bay close-up",
    title: "Top 5 Performance Upgrades for 2026",
    copy: "Where to spend first when you want real gains without wrecking daily drivability.",
    date: "12 Aug 2026",
  },
  {
    src: galleryBrake,
    alt: "Brake disc close-up",
    title: "Brake Maintenance: What You Need to Know",
    copy: "Pad wear, fluid cycles and the warning signs that mean you should stop driving now.",
    date: "29 Jul 2026",
  },
  {
    src: galleryExhaust,
    alt: "Exhaust tips close-up",
    title: "Exhaust Systems: Sound, Flow and the Law",
    copy: "How to pick a system that adds power without attracting the wrong kind of attention.",
    date: "04 Jul 2026",
  },
];

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Latest News"
        title="Blog & Article"
        description="Guides, teardowns and workshop notes written by the people doing the work."
      />
      <section className="section-y">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="card-surface card-surface-hover group h-full overflow-hidden">
                <img
                  src={p.src}
                  alt={p.alt}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-7">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{p.date}</p>
                  <h2 className="mt-3 text-lg font-bold">{p.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read More
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
