import { ArrowDown, Github, Instagram, Twitter } from "lucide-react";
import type { CSSProperties } from "react";

const services = ["BOOKING SYSTEMS", "MULTI-TENANT SAAS", "REAL-TIME APIS"];

const socials = [
  { Icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { Icon: Github, label: "GitHub", href: "https://github.com" },
];

const d = (delay: number): CSSProperties =>
  ({ "--enter-delay": `${delay}s` } as CSSProperties);

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-background"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0 hero-grid" />
      <div className="pointer-events-none absolute inset-0 z-0 hero-aura" />

      {/* Portrait — right half, layered above the wordmark.
          `isolate` on the section scopes all z-indexes here, so no
          transformed sibling can ever paint the wordmark line over it. */}
      <div
        style={d(0.05)}
        className="pointer-events-none absolute inset-y-0 right-0 z-30 w-[78%] enter-scale sm:w-[62%] lg:w-[52%]"
      >
        <picture>
          <source
            srcSet="/images/portrait-cutout-800.webp 512w, /images/portrait-cutout.webp 1024w"
            sizes="(min-width: 1024px) 52vw, 72vw"
            type="image/webp"
          />
          <img
            src="/images/portrait-cutout.webp"
            alt="Portrait of Mostafa Samir"
            width={1024}
            height={1024}
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            className="size-full object-contain object-bottom"
          />
        </picture>
      </div>

      {/* Thin frame rule — fixed so the line stays visible while scrolling */}
      <div className="pointer-events-none fixed inset-y-0 left-[4.5rem] z-30 hidden w-px bg-border md:block" />

      {/* Vertical socials */}
      <div
        style={d(0.6)}
        className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-6 pl-6 enter-fade md:flex"
      >
        {socials.map(({ Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
          >
            <Icon className="size-4" />
          </a>
        ))}
      </div>

      <div className="relative z-10 flex w-full flex-1 flex-col justify-center pb-28 pt-36 shell shell-rail">
        {/* Service list */}
        <ul className="mb-14 space-y-1.5">
          {services.map((s, i) => (
            <li
              key={s}
              style={d(0.15 + i * 0.08)}
              className="group flex items-center gap-3 text-foreground/80 enter-left"
            >
              <span className="h-px w-6 origin-left bg-foreground/45 transition-transform duration-500 group-hover:scale-x-[1.8]" />
              <span className="display text-sm uppercase tracking-[0.14em] transition-colors duration-300 group-hover:text-foreground">
                {s}
              </span>
            </li>
          ))}
        </ul>

        {/* Headline — per-line mask reveal */}
        <h1 className="display max-w-4xl text-[clamp(3.25rem,11vw,9rem)] leading-[0.92] text-foreground">
          <span className="block overflow-hidden pb-[0.06em]">
            <span style={d(0.1)} className="block enter-mask">
              Full <span className="text-muted-foreground">Stack</span>
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.06em]">
            <span style={d(0.2)} className="block enter-mask">
              <span className="text-muted-foreground">&amp;</span> Developer
            </span>
          </span>
        </h1>

        {/* Pill CTAs */}
        <div
          style={d(0.4)}
          className="mt-8 flex flex-wrap items-center gap-3 enter-fade"
        >
          <a
            href="#contact"
            className="display group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-2xl bg-foreground px-7 text-base text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <span className="relative z-10">You need a developer ?</span>
            <span
              aria-hidden
              className="absolute inset-y-0 -left-1/3 z-0 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-background/20 to-transparent blur-md shimmer-sweep"
            />
          </a>
          <a
            href="#contact"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-2xl border border-foreground px-7 text-[11px] uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground hover:text-background hover:shadow-lg"
          >
            <span className="relative z-10">Resume</span>
            <span
              aria-hidden
              className="absolute inset-y-0 -left-1/3 z-0 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-background/20 to-transparent blur-md shimmer-sweep"
            />
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#work"
        aria-label="Scroll to work"
        style={d(1)}
        className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2 text-muted-foreground transition-colors enter-fade hover:text-foreground"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </a>

      {/* Wordmark — sits behind the portrait so the cutout isn't clipped */}
      <div className="absolute inset-x-0 bottom-0 z-0 flex items-center gap-6 pb-6 shell shell-rail">
        <span
          style={d(0.5)}
          className="display text-[clamp(2rem,7vw,4.5rem)] uppercase leading-none tracking-[0.02em] text-foreground enter-fade"
        >
          Mostafa
        </span>
        <span className="h-px flex-1 bg-border-strong rule-grow" />
      </div>
    </section>
  );
}
