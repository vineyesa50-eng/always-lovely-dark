import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Car,
  PaintBucket,
  Wrench,
  Gauge,
  Disc,
  ShieldCheck,
  Users,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Newsletter } from "@/components/site/Newsletter";
import heroCar from "@/assets/hero-car.jpg";
import workshop from "@/assets/workshop.jpg";
import tireWork from "@/assets/tire-work.jpg";
import galleryWheel from "@/assets/gallery-wheel.jpg";
import galleryEngine from "@/assets/gallery-engine.jpg";
import galleryExhaust from "@/assets/gallery-exhaust.jpg";
import galleryBrake from "@/assets/gallery-brake.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import helpMechanic from "@/assets/help-mechanic.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MOTOcare — Performance Auto Service & Car Customization" },
      {
        name: "description",
        content:
          "MOTOcare builds, tunes and repairs performance cars. Engine tuning, custom paint, brake service and full mechanical repair by expert technicians.",
      },
      { property: "og:title", content: "MOTOcare — Performance Auto Service" },
      {
        property: "og:description",
        content:
          "Engine tuning, car customization, paint and repair from a workshop obsessed with performance.",
      },
    ],
  }),
  component: Home,
});

const features = [
  { n: "01", title: "Best Services", copy: "Factory-grade diagnostics and parts on every job we take in." },
  { n: "02", title: "Comfortable", copy: "Transparent quotes, live progress updates and a lounge worth waiting in." },
  { n: "03", title: "Expert Team", copy: "Certified technicians with decades of motorsport experience." },
];

const services = [
  {
    Icon: Car,
    title: "Modification Car",
    copy: "Bodykits, suspension, wheels and full performance builds engineered around how you drive.",
  },
  {
    Icon: PaintBucket,
    title: "Car Painting",
    copy: "Booth-cured refinishing, colour changes and ceramic protection with a mirror-deep gloss.",
  },
  {
    Icon: Wrench,
    title: "Car Repair",
    copy: "Diagnostics, engine work, brakes and transmission — repaired right the first time.",
  },
];

const gallery = [
  { src: galleryWheel, alt: "Matte black alloy wheel with red brake caliper", caption: "Wheels & Tyres" },
  { src: galleryEngine, alt: "Tuned engine bay with red intake filters", caption: "Engine Tuning" },
  { src: galleryExhaust, alt: "Red sports car rear with twin exhaust tips", caption: "Exhaust Systems" },
  { src: galleryBrake, alt: "Performance brake disc close-up", caption: "Brake Service" },
];

const partners = [
  { name: "SPEED AUTO", Icon: Gauge },
  { name: "QUALITY POWER", Icon: ShieldCheck },
  { name: "CHROME TYRES", Icon: Disc },
  { name: "AUTOFAST", Icon: Settings },
];

const quickServices = [
  { Icon: Car, title: "Car Customization", copy: "Performance Upgrades" },
  { Icon: Gauge, title: "Engine Tuning", copy: "More Power" },
  { Icon: Disc, title: "Brake Service", copy: "Safer Stopping" },
  { Icon: Wrench, title: "Auto Repair", copy: "Reliable Finishes" },
];

const news = [
  {
    src: galleryEngine,
    alt: "Engine bay close-up",
    title: "Top 5 Performance Upgrades for 2026",
    copy: "Where to spend first when you want real gains without wrecking daily drivability.",
  },
  {
    src: galleryBrake,
    alt: "Brake disc close-up",
    title: "Brake Maintenance: What You Need to Know",
    copy: "Pad wear, fluid cycles and the warning signs that mean you should stop driving now.",
  },
  {
    src: galleryExhaust,
    alt: "Red sports car rear with twin exhaust tips",
    title: "10 Brands of Quality Car Paint",
    copy: "How we pick clearcoats and basecoats that survive years of sun, salt and washing.",
  },
];

function QuickServices() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading eyebrow="What We Offer" title="Our Services" />
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {quickServices.map(({ Icon, title, copy }, i) => (
            <Reveal key={title} delay={i * 0.07}>
              <div className="group flex flex-col items-center text-center">
                <span className="icon-badge group-hover:bg-primary/25">
                  <Icon className="size-7" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-extrabold">{title}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="container-page grid items-center gap-12 pb-16 pt-32 md:pb-24 md:pt-40 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="label-eyebrow">Performance Workshop</p>
          <h1 className="mt-4 font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Building Your
            <br />
            Dream Car
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            From a stage-one tune to a full ground-up build, MOTOcare technicians treat every car
            like it's leaving for the track tomorrow.
          </p>
          <div className="mt-8">
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button asChild size="lg" className="h-12 px-8 text-base">
                <Link to="/services">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-primary/25 blur-3xl" />
          <img
            src={heroCar}
            alt="Red sports coupe lit against a black studio backdrop"
            width={1280}
            height={896}
            className="w-full rounded-2xl object-cover"
          />
        </motion.div>
      </div>

      <svg
        aria-hidden="true"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="relative block h-12 w-full md:h-[5.5rem]"
      >
        <path d="M0 90 C 360 10 1080 10 1440 90 L1440 90 L0 90 Z" fill="var(--background)" />
      </svg>

      <div className="border-b border-border bg-background">
        <div className="container-page grid gap-8 py-10 md:grid-cols-3 md:divide-x md:divide-border">
          {features.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.08} className="md:px-8 md:first:pl-0">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-primary">{f.n}</span>
                <div className="min-w-0">
                  <h2 className="text-lg font-bold">{f.title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section-y">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative">
          <img
            src={workshop}
            alt="Two mechanics in red jumpsuits working under the hood of a red sports car"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full rounded-2xl border border-border object-cover"
          />
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl gradient-red px-6 py-5 shadow-glow sm:block">
            <p className="text-3xl font-bold text-primary-foreground">18+</p>
            <p className="text-xs uppercase tracking-widest text-primary-foreground/80">
              Years in the bay
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="label-eyebrow">About Us</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-[2.6rem] md:leading-[1.15]">
            A workshop built by drivers, for drivers
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            MOTOcare started as a two-bay garage tuning weekend track cars. Today we run a full
            service facility with in-house dyno, paint booth and fabrication — but the obsession
            hasn't changed.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Every car gets a documented inspection, a fixed quote before work begins, and a road
            test signed off by the technician who did the job.
          </p>
          <Button asChild className="mt-8">
            <Link to="/about">Read More</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section-y bg-card/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="What We Do"
          title="Modification Your Car"
          description="Three core disciplines, one standard of finish."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map(({ Icon, title, copy }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <article className="card-surface card-surface-hover group h-full p-8">
                <Icon className="size-9 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mt-6 font-display text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Learn More
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GoodCars() {
  return (
    <section className="section-y">
      <div className="container-page grid gap-8 lg:grid-cols-2 lg:items-stretch">
        <Reveal className="card-surface flex flex-col justify-center p-10">
          <p className="label-eyebrow">Featured Work</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-[2.6rem] md:leading-[1.15]">Good Cars</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Corner-balanced setups, forged wheel fitments and geometry dialled in on our alignment
            rig — the details that separate a fast car from a finished one.
          </p>
          <Button asChild variant="outline" className="mt-8 w-fit">
            <Link to="/gallery">
              Learn More <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
        <Reveal delay={0.1} className="grid gap-6">
          <img
            src={tireWork}
            alt="Mechanic in red uniform fitting a performance wheel"
            width={1024}
            height={768}
            loading="lazy"
            className="h-full w-full rounded-2xl border border-border object-cover"
          />
          <div className="rounded-2xl gradient-red p-8 shadow-glow">
            <h3 className="font-display text-xl font-bold text-primary-foreground">Top Modification</h3>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/85">
              Stage-two package: intake, exhaust, ECU calibration and brake upgrade in one visit.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="section-y bg-card/40">
      <div className="container-page">
        <SectionHeading eyebrow="Our Gallery" title="Recent Builds" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <Reveal key={g.caption} delay={i * 0.07}>
              <figure className="group relative overflow-hidden rounded-2xl border border-border">
                <img
                  src={g.src}
                  alt={g.alt}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-background via-background/20 to-transparent p-5 text-sm font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {g.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="border-y border-border py-12">
      <div className="container-page grid grid-cols-2 gap-8 md:grid-cols-4">
        {partners.map(({ name, Icon }, i) => (
          <Reveal key={name} delay={i * 0.06}>
            <div className="flex items-center justify-center gap-3 text-muted-foreground transition-colors hover:text-primary">
              <Icon className="size-6 shrink-0" aria-hidden="true" />
              <span className="text-sm font-bold uppercase tracking-widest">{name}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="section-y">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="label-eyebrow">Team Expert</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-[2.6rem] md:leading-[1.15]">
            The hands under your hood
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Master technicians, fabricators and paint specialists — each certified, each accountable
            for the car they sign off.
          </p>
          <div className="mt-8 flex items-center gap-3 text-muted-foreground">
            <Users className="size-5 text-primary" aria-hidden="true" />
            <span className="text-sm">24 specialists across 9 service bays</span>
          </div>
          <Button asChild className="mt-8">
            <Link to="/about">Meet the Team</Link>
          </Button>
        </Reveal>
        <div className="grid grid-cols-2 gap-6">
          {[
            { src: team1, alt: "Smiling mechanic in red uniform and cap", name: "Marco Reyes", role: "Lead Technician" },
            { src: team2, alt: "Bearded mechanic in red overalls holding a wrench", name: "Dean Walker", role: "Performance Tuner" },
          ].map((m, i) => (
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
  );
}

function News() {
  return (
    <section className="section-y bg-card/40">
      <div className="container-page">
        <SectionHeading eyebrow="Latest News" title="Blog & Article" />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {news.map((n, i) => (
            <Reveal key={n.title} delay={i * 0.1}>
              <article className="card-surface card-surface-hover group h-full overflow-hidden">
                <img
                  src={n.src}
                  alt={n.alt}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-7">
                  <h3 className="font-display text-xl font-bold">{n.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{n.copy}</p>
                  <Link
                    to="/blog"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    Read More
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function NeedHelp() {
  return (
    <section className="relative overflow-hidden gradient-red">
      <div className="container-page grid items-center gap-10 py-16 md:grid-cols-2 md:py-0">
        <Reveal className="md:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Need Help?
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-primary-foreground/85">
            Contact our experts for fast, reliable service. Same-day diagnostics on most vehicles.
          </p>
          <Button asChild variant="secondary" className="mt-8">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </Reveal>
        <div className="relative h-64 md:h-full md:min-h-[22rem]">
          <img
            src={helpMechanic}
            alt="Mechanic at a workbench in a dark garage"
            width={1024}
            height={700}
            loading="lazy"
            className="absolute inset-0 size-full rounded-2xl object-cover md:rounded-none"
          />
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <GoodCars />
      <Gallery />
      <Partners />
      <Team />
      <News />
      <NeedHelp />
      <Newsletter />
    </>
  );
}
