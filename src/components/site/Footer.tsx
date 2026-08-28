import { Link } from "@tanstack/react-router";
import { Car, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const socials = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-page grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <Car className="size-7 text-primary" aria-hidden="true" />
            <span className="text-xl font-extrabold tracking-tight">
              MOTO<span className="text-primary">care</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Performance tuning, customization and full-service repair for drivers who expect more
            from their machine.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid size-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="About links">
          <h2 className="text-base font-bold">About Us</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Gallery", to: "/gallery" },
              { label: "Blog", to: "/blog" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-base font-bold">Contact Us</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              info@motocare.com
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              +1 234 567 890
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              London Eye, London, UK
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-bold">We Are Open</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>Monday – Saturday: 9 AM – 10 PM</li>
            <li>Sunday: Closed</li>
            <li className="text-primary">24/7 emergency roadside support</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} MOTOcare — All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
