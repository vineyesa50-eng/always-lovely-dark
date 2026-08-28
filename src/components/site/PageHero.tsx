import { Reveal } from "./Reveal";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="gradient-hero relative overflow-hidden pb-16 pt-36 md:pb-20 md:pt-44">
      <div className="container-page">
        <Reveal>
          <p className="label-eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
