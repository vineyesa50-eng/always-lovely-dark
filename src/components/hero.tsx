import { motion, useReducedMotion, type Variants } from "motion/react";
import portraitTiny from "@/assets/portrait-dev-420.webp";
import portraitSm from "@/assets/portrait-dev-640.webp";
import portraitMd from "@/assets/portrait-dev-720.webp";
import portrait from "@/assets/portrait-dev.webp";
import { AnimatedChars, CountUp, Magnetic } from "@/components/motion-text";
import { Parallax } from "@/components/reveal";
import { stats, tools } from "@/data/projects";

const uniqueTools = Array.from(new Set(tools));

/** Shared easing so every hero element settles on the same curve. */
const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number, y = 16): Variants => ({
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: reduce ? { duration: 0 } : { delay, duration: 0.75, ease: EASE },
    },
  });

  return (
    <section id="top" className="relative overflow-hidden px-4 pt-10 sm:px-6 lg:pt-14">
      <div className="relative mx-auto max-w-6xl">
        {/* Giant wordmark */}
        <h1 className="sr-only">Mostafa Samir — Healthcare Full-Stack Engineer Portfolio 2026</h1>
        <AnimatedChars
          as="div"
          text="Portfolio"
          pillIndex={5}
          stagger={44}
          className="flex w-full cursor-default items-center justify-center font-display leading-[0.8] font-extrabold tracking-[-0.05em] text-foreground"
          style={{ fontSize: "clamp(3.5rem, 15.5vw, 13rem)" }}
        />

        <motion.p
          className="mx-auto mt-4 max-w-xl text-center text-sm text-muted-foreground sm:text-base"
          variants={fadeUp(0.55)}
          initial="hidden"
          animate="show"
        >
          EHR platforms, telehealth and remote monitoring — built secure, HIPAA-aligned and fast.
        </motion.p>

        {/* Showcase card */}
        {/* LCP element. Entrance is a CSS transform-only animation so the
            hero image paints on the very first frame instead of waiting for
            hydration behind an opacity-0 motion variant. */}
        <div className="hero-rise relative mt-8 transform-gpu sm:mt-10">
          <div className="hero-surface relative overflow-hidden rounded-[2rem] p-6 sm:rounded-[2.5rem] sm:p-10 lg:p-14">
            {/* Soft drifting colour blobs behind the content */}
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
              <span className="float-slow absolute -top-24 -left-16 size-72 rounded-full bg-brand-orange/25 blur-3xl" />
              <span className="float-slow absolute -right-10 bottom-[-6rem] size-80 rounded-full bg-brand-sky/25 blur-3xl [animation-delay:-4s]" />
            </div>

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <motion.span
                  className="inline-flex items-center gap-2 rounded-full bg-hero-card-foreground/10 px-3 py-1.5 text-[0.62rem] font-semibold tracking-[0.18em] text-hero-card-foreground/80 uppercase backdrop-blur-sm sm:text-xs"
                  variants={fadeUp(0.1, 10)}
                  initial="hidden"
                  animate="show"
                >
                  <span className="blink-dot size-1.5 rounded-full bg-brand-orange" />
                  Available for healthcare software projects · Q3 2026
                </motion.span>

                <motion.h2
                  className="mt-5 font-display text-4xl leading-[0.92] font-extrabold tracking-[-0.04em] text-hero-card-foreground sm:text-6xl"
                  variants={fadeUp(0.2, 22)}
                  initial="hidden"
                  animate="show"
                >
                  Mostafa Samir
                  <span className="mt-1 block text-brand-orange">
                    Healthcare Full-Stack Engineer.
                  </span>
                </motion.h2>

                <motion.p
                  className="mt-5 max-w-lg text-sm leading-relaxed text-hero-card-foreground/70 sm:text-base"
                  variants={fadeUp(0.32)}
                  initial="hidden"
                  animate="show"
                >
                  Building secure, HIPAA-aligned healthcare platforms — EHR systems, HL7/FHIR
                  interoperability, telehealth, and remote patient monitoring — with .NET 8
                  microservices and modern frontend frameworks.
                </motion.p>




                <motion.dl
                  className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4"
                  variants={fadeUp(0.55)}
                  initial="hidden"
                  animate="show"
                >
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="sr-only">{stat.label}</dt>
                      <dd>
                        <CountUp
                          value={stat.value}
                          className="block font-display text-2xl font-extrabold tracking-[-0.03em] text-hero-card-foreground sm:text-3xl"
                        />
                        <span className="mt-1 block text-[0.62rem] font-semibold tracking-[0.12em] text-hero-card-foreground/55 uppercase">
                          {stat.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </motion.dl>
              </div>

              <div className="relative mx-auto w-full max-w-sm">
                <Parallax strength={-14}>
                  <div className="float-slow overflow-hidden rounded-[2rem] bg-brand-sky/30 shadow-[var(--shadow-image)] transform-gpu">
                    <img
                      src={portrait}
                      srcSet={`${portraitTiny} 420w, ${portraitSm} 640w, ${portraitMd} 720w, ${portrait} 1024w`}
                      sizes="(max-width: 640px) 90vw, 420px"
                      alt="Illustrated portrait of Mostafa Samir, a healthcare full-stack engineer"
                      width={1024}
                      height={1024}
                      decoding="async"
                      fetchPriority="high"
                      className="hero-media size-full transform-gpu object-cover object-top"
                    />
                  </div>
                </Parallax>
                <p className="mt-4 text-center text-xs font-semibold tracking-wide text-hero-card-foreground/80 sm:text-sm">
                  EHR · FHIR · Telehealth · Cloud
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row: scroll dot + year */}
        <motion.div
          className="relative mt-6 flex items-center justify-between gap-4"
          variants={fadeUp(0.75, 18)}
          initial="hidden"
          animate="show"
        >
          <div className="flex flex-wrap items-center gap-3">
            <Magnetic strength={10}>
              <a
                href="#work"
                className="press sheen inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                View projects
              </a>
            </Magnetic>
            <Magnetic strength={10}>
              <a
                href="#contact"
                className="press edge inline-flex items-center gap-2 rounded-full bg-card px-5 py-2.5 text-sm font-semibold hover:bg-secondary"
              >
                Get in touch
              </a>
            </Magnetic>
          </div>

          <Magnetic strength={14}>
            <a
              href="#about"
              aria-label="Scroll to about section"
              className="press absolute left-1/2 hidden size-14 -translate-x-1/2 items-center justify-center rounded-full bg-card shadow-[var(--shadow-image)] edge sm:inline-flex"
            >
              {/* CSS-driven loop: runs on the compositor with no per-frame JS. */}
              <span className="nudge-y block size-2 transform-gpu rounded-full bg-foreground" />
            </a>
          </Magnetic>

          <div className="flex items-center gap-2 font-display text-2xl font-extrabold tracking-[-0.03em] sm:text-4xl">
            2026
            {/* CSS-driven loop: no infinite rAF timeline for a decorative glyph. */}
            <span
              aria-hidden
              className="wiggle-slow inline-flex size-7 transform-gpu items-center justify-center rounded-full border-2 border-current text-xs sm:size-9 sm:text-sm"
            >
              ˘‿˘
            </span>
          </div>
        </motion.div>

        {/* Tools marquee */}
        <div className="mt-6">
          <div className="edge-card overflow-hidden rounded-2xl bg-card py-2.5 sm:rounded-full sm:py-3">
            <div className="marquee-track gap-5 px-3 sm:gap-8 sm:px-4">
              {[...uniqueTools, ...uniqueTools].map((tool, i) => (
                <span
                  key={`tool-${tool}-${i}`}
                  className="flex shrink-0 items-center gap-2 text-[0.68rem] font-semibold tracking-wide whitespace-nowrap text-muted-foreground uppercase transition-colors hover:text-brand-orange sm:gap-3 sm:text-sm"
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-brand-orange" />
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
