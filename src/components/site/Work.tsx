import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { AllProjectsModal } from "./AllProjectsModal";
import { featuredProjects, projects as allProjects } from "@/data/projects";

const projects = featuredProjects;


export function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const activeRef = useRef(0);

  // Continuous rAF loop: eased (lerped) horizontal motion driven by page scroll.
  useEffect(() => {
    let raf = 0;
    let current = 0; // smoothed progress
    let target = 0;

    const readTarget = () => {
      const section = sectionRef.current;
      if (!section) return 0;
      const scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return 0;
      const top = section.getBoundingClientRect().top;
      return Math.min(1, Math.max(0, -top / scrollable));
    };

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const track = trackRef.current;
      const viewport = track?.parentElement;
      if (!track || !viewport) return;

      target = readTarget();
      current += (target - current) * 0.12; // easing
      if (Math.abs(target - current) < 0.0002) current = target;

      const maxX = track.scrollWidth - viewport.clientWidth;
      track.style.transform = `translate3d(${-current * maxX}px, 0, 0)`;

      // Per-card depth animation (scale / opacity / parallax) for a rich transition.
      const pos = current * (projects.length - 1);
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const d = Math.min(1, Math.abs(pos - i));
        card.style.opacity = String(1 - d * 0.65);
        card.style.transform = `scale(${1 - d * 0.12}) translate3d(${(pos - i) * 4}%, 0, 0)`;
        card.style.filter = d > 0.02 ? `blur(${d * 4}px)` : "none";
      });

      const index = Math.min(projects.length - 1, Math.round(pos));
      if (index !== activeRef.current) {
        activeRef.current = index;
        setActive(index);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Jump to a project by scrolling the page to its progress point.
  const scrollTo = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const clamped = Math.max(0, Math.min(projects.length - 1, index));
    const scrollable = section.offsetHeight - window.innerHeight;
    const top =
      section.getBoundingClientRect().top +
      window.scrollY +
      (clamped / (projects.length - 1)) * scrollable;
    window.scrollTo({ top, behavior: "smooth" });
  };


  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative"
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Selected Work</p>
            <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
              <h2 className="display max-w-2xl text-[clamp(2.25rem,5vw,4.25rem)]">
                Systems built for scale
              </h2>
              {/* Counter + arrows */}
              <div className="flex items-center gap-5">
                <p className="display text-sm tracking-[0.2em] text-muted-foreground tabular-nums">
                  {String(active + 1).padStart(2, "0")}
                  <span className="mx-1.5 opacity-40">/</span>
                  {String(projects.length).padStart(2, "0")}
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Previous project"
                    onClick={() => scrollTo(active - 1)}
                    disabled={active === 0}
                    className="group grid size-11 place-items-center rounded-2xl border border-border transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-lg disabled:pointer-events-none disabled:opacity-30"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-x-0.5">
                      <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Next project"
                    onClick={() => scrollTo(active + 1)}
                    disabled={active === projects.length - 1}
                    className="group grid size-11 place-items-center rounded-2xl border border-border transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-lg disabled:pointer-events-none disabled:opacity-30"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Horizontal track driven by vertical scroll */}
        <div className="mt-10 overflow-hidden lg:mt-14">
          <div
            ref={trackRef}
            className="flex will-change-transform"
            style={{ width: `${projects.length * 100}%` }}
          >
            {projects.map((p, i) => (
              <div
                key={p.title}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                className="shrink-0 will-change-transform"
                style={{ width: `${100 / projects.length}%` }}
              >
                <div className="shell">

                  <article className="surface surface-hover group grid overflow-hidden lg:grid-cols-2">
                    <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-[46vh] lg:min-h-[340px]">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading={i === 0 ? "eager" : "lazy"}
                        decoding="async"
                        width={1024}
                        height={768}
                        className="absolute inset-0 size-full object-cover opacity-80 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/80 to-transparent lg:bg-gradient-to-r" />
                      <span className="display absolute left-6 top-6 rounded-full border border-border/60 bg-background/50 px-3 py-1 text-xs tracking-[0.2em] backdrop-blur">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex flex-col justify-center p-7 lg:p-12">
                      <h3 className="display text-2xl lg:text-4xl">{p.title}</h3>
                      <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground lg:text-base">
                        {p.description}
                      </p>
                      <div className="mt-7 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-border px-3 py-1 text-[11px] tracking-wide text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots (left) + view-all action (right) */}
        <div className="shell mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            {projects.map((p, i) => (
              <button
                key={p.title}
                type="button"
                aria-label={`Go to project ${i + 1}`}
                onClick={() => scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === active
                    ? "w-10 bg-foreground"
                    : "w-3 bg-foreground/20 hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="group inline-flex items-center gap-2.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-lg"
          >
            View all projects
            <span className="text-muted-foreground tabular-nums transition-colors group-hover:text-foreground">
              {allProjects.length}
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <AllProjectsModal open={showAll} onClose={() => setShowAll(false)} />
    </section>
  );
}


