import { Link } from "@tanstack/react-router";
import {
  Car,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

const socials = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Youtube, label: "YouTube" },
];

const aboutLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog & Article", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card">
      {/* Red diagonal accent, echoing the section wedges above */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 size-72 rotate-45 opacity-20 blur-3xl"
        style={{ background: "var(--gradient-red)" }}
      />

      <div className="container-page relative grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <Car className="size-7 text-primary" aria-hidden="true" />
            <span className="font-display text-xl font-extrabold tracking-tight">
              MOTO<span className="text-primary">care</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Performance tuning, customization and full-service repair for drivers who expect more
            from their machine. Certified technicians, genuine parts, honest pricing.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid size-11 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="About links">
          <h2 className="font-display text-base font-bold">About Us</h2>
          <span className="mt-3 block h-0.5 w-10 rounded-full bg-primary" aria-hidden="true" />
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {aboutLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-base font-bold">Contact Us</h2>
          <span className="mt-3 block h-0.5 w-10 rounded-full bg-primary" aria-hidden="true" />
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href="mailto:info@motocare.com" className="transition-colors hover:text-primary">
                info@motocare.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href="tel:+1234567890" className="transition-colors hover:text-primary">
                +1 234 567 890
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              London Eye, London, UK
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-base font-bold">We Are Open</h2>
          <span className="mt-3 block h-0.5 w-10 rounded-full bg-primary" aria-hidden="true" />
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              Monday – Saturday: 9 AM – 10 PM
            </li>
            <li className="pl-7">Sunday: Closed</li>
            <li className="pl-7 text-primary">24/7 emergency roadside support</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} MOTOcare — All Rights Reserved</p>
          <p className="flex gap-4">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
