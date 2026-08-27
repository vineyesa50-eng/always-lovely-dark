import { Linkedin, Github, Twitter, Mail, Users, ArrowUp, ArrowUpRight } from "lucide-react";

const columns = [
  {
    title: "Insights",
    links: [
      { label: "Work", href: "#work" },
      { label: "Case Studies", href: "#work" },
      { label: "Expertise", href: "#expertise" },
      { label: "Experience", href: "#experience" },
      { label: "About", href: "#about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "My Story", href: "#about" },
      { label: "Approach", href: "#expertise" },
      { label: "Stack", href: "#expertise" },
      { label: "Clients", href: "#work" },
      { label: "Availability", href: "mailto:m.ssaid356@gmail.com" },
    ],
  },
  {
    title: "What I do",
    links: [
      { label: "Booking Systems", href: "#expertise" },
      { label: "Backend Engineering", href: "#expertise" },
      { label: "Cloud & DevOps", href: "#expertise" },
      { label: "System Architecture", href: "#expertise" },
    ],
  },
];

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/in/mostafasamirsaid", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Mostafa-SAID7", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative bg-background px-0 pt-24 sm:px-4">
      <div className="relative mx-auto max-w-[110rem] rounded-t-[2.5rem] bg-card sm:rounded-t-[3.5rem]">
        {/* Get started badge */}
        <a
          href="mailto:m.ssaid356@gmail.com"
          aria-label="Get started"
          className="group absolute -top-14 right-6 z-10 grid size-28 place-items-center rounded-full border-8 border-background bg-card transition-transform duration-500 hover:scale-105 sm:right-14 sm:size-32"
        >
          <span className="absolute inset-0 grid place-items-center">
            <svg viewBox="0 0 100 100" className="size-full animate-[spin_14s_linear_infinite]">
              <defs>
                <path
                  id="footer-badge-circle"
                  d="M50,50 m-33,0 a33,33 0 1,1 66,0 a33,33 0 1,1 -66,0"
                  fill="none"
                />
              </defs>
              <text
                fill="currentColor"
                className="text-foreground"
                style={{ fontSize: "10px", letterSpacing: "3px" }}
              >
                <textPath href="#footer-badge-circle">
                  GET STARTED · GET STARTED ·
                </textPath>
              </text>
            </svg>
          </span>
          <ArrowUpRight
            className="size-6 text-accent transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.5}
          />
        </a>

        <div className="px-6 pt-16 pb-10 sm:px-10 lg:px-16 lg:pt-20">
          {/* Wordmark */}
          <div className="flex items-end gap-3">
            <span className="display text-[clamp(2.5rem,7vw,5rem)] leading-none text-foreground">
              M
            </span>
            <span className="mb-3 h-px w-16 bg-accent sm:w-24" />
            <span className="display text-[clamp(2.5rem,7vw,5rem)] leading-none text-foreground">
              OSTAFA.
            </span>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            {/* Link columns */}
            <div className="grid gap-10 sm:grid-cols-3">
              {columns.map((col) => (
                <div key={col.title}>
                  <h3 className="text-sm font-medium text-foreground">{col.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Newsletter + contact */}
            <div>
              <h3 className="text-lg text-foreground">Subscribe to my newsletter</h3>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-5 flex items-center gap-3"
              >
                <label htmlFor="footer-email" className="sr-only">
                  E-mail
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="E-mail"
                  className="h-14 w-full rounded-full border border-border-strong bg-transparent px-6 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="grid size-14 shrink-0 place-items-center rounded-full border border-border-strong text-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  <ArrowUpRight className="size-5" strokeWidth={1.25} />
                </button>
              </form>

              <h3 className="display mt-14 text-3xl text-foreground">Contact me</h3>
              <div className="mt-6 space-y-4">
                <a
                  href="mailto:m.ssaid356@gmail.com"
                  className="flex items-center gap-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="size-6 shrink-0" strokeWidth={1} />
                  m.ssaid356@gmail.com
                </a>
                <a
                  href="tel:+201067358073"
                  className="flex items-center gap-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Users className="size-6 shrink-0" strokeWidth={1} />
                  Schedule a meeting
                </a>
              </div>
            </div>
          </div>

          {/* Socials + copyright */}
          <div className="mt-16 flex flex-col gap-6">
            <div className="flex items-center gap-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="text-foreground transition-colors duration-300 hover:text-accent"
                >
                  <s.icon className="size-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              Mostafa Samir © {new Date().getFullYear()}, All rights reserved. Tanta, Egypt.
            </p>
          </div>
        </div>

        {/* Back to top */}
        <a
          href="#top"
          aria-label="Back to top"
          className="absolute right-6 bottom-8 grid size-11 place-items-center rounded-md bg-secondary text-foreground transition-colors duration-300 hover:bg-elevated sm:right-10"
        >
          <ArrowUp className="size-4" strokeWidth={1.5} />
        </a>
      </div>
    </footer>
  );
}
