import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Menu, Search, Car, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type Item = { label: string; to: string };

const NAV: { label: string; to?: string; children?: Item[] }[] = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    to: "/about",
    children: [
      { label: "Our Story", to: "/about" },
      { label: "Team Expert", to: "/about" },
      { label: "Why Choose Us", to: "/about" },
    ],
  },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "All Services", to: "/services" },
      { label: "Car Customization", to: "/services" },
      { label: "Engine Tuning", to: "/services" },
      { label: "Auto Repair", to: "/services" },
    ],
  },
  {
    label: "Pages",
    children: [
      { label: "Gallery", to: "/gallery" },
      { label: "Blog & Article", to: "/blog" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

function Logo() {
  return (
    <Link
      to="/"
      className="flex shrink-0 flex-col items-start leading-none"
      aria-label="MOTOcare home"
    >
      <Car className="size-7 text-primary" strokeWidth={2.25} aria-hidden="true" />
      <span className="font-display text-lg font-extrabold uppercase tracking-[0.18em]">
        MOTO<span className="text-primary">care</span>
      </span>
    </Link>
  );
}

function NavDropdown({
  label,
  to,
  children,
}: {
  label: string;
  to?: string | undefined;
  children: Item[];
}) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const hide = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(false), 120);
  };

  const trigger: ReactNode = (
    <span className="inline-flex items-center gap-1">
      {label}
      <ChevronDown
        className={cn("size-3.5 transition-transform duration-200", open && "rotate-180")}
        aria-hidden="true"
      />
    </span>
  );

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      {to ? (
        <Link
          to={to}
          activeProps={{ className: "text-primary" }}
          className="flex items-center py-2 text-sm font-medium text-foreground/85 transition-colors hover:text-primary"
        >
          {trigger}
        </Link>
      ) : (
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex items-center py-2 text-sm font-medium text-foreground/85 transition-colors hover:text-primary"
        >
          {trigger}
        </button>
      )}

      <div
        className={cn(
          "absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 transition-all duration-200",
          open ? "visible opacity-100" : "pointer-events-none invisible translate-y-1 opacity-0",
        )}
      >
        <ul className="overflow-hidden rounded-xl border border-border bg-card/95 p-2 shadow-xl backdrop-blur-xl">
          {children.map((c) => (
            <li key={c.label}>
              <Link
                to={c.to}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="container-page grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:grid-cols-[auto_1fr_auto]">
        <Logo />

        <nav aria-label="Main" className="hidden items-center justify-center gap-9 lg:flex">
          {NAV.map((item) =>
            item.children ? (
              <NavDropdown key={item.label} label={item.label} to={item.to} children={item.children} />
            ) : (
              <Link
                key={item.label}
                to={item.to!}
                activeProps={{ className: "text-primary" }}
                className="py-2 text-sm font-medium text-foreground/85 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <Button
            variant="ghost"
            size="icon"
            aria-label={searchOpen ? "Close search" : "Search"}
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((v) => !v)}
            className="hidden sm:inline-flex"
          >
            {searchOpen ? <X className="size-5" /> : <Search className="size-5" />}
          </Button>
          <Button asChild className="hidden rounded-md px-7 font-semibold sm:inline-flex">
            <Link to="/contact">Contact</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu" className="lg:hidden">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 border-border bg-card/95 backdrop-blur-xl">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex flex-col gap-1 overflow-y-auto px-4 pt-10 pb-8">
                {NAV.map((item) => (
                  <div key={item.label}>
                    {item.to ? (
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        activeProps={{ className: "text-primary" }}
                        className="block rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-secondary hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <p className="px-3 pt-4 pb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        {item.label}
                      </p>
                    )}
                    {item.children?.map((c) => (
                      <Link
                        key={c.label}
                        to={c.to}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-6 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <Button asChild className="mt-6 rounded-md">
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    Contact
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-border bg-background/95 backdrop-blur-xl transition-all duration-300",
          searchOpen ? "max-h-24 border-b" : "max-h-0",
        )}
      >
        <form
          className="container-page flex items-center gap-3 py-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <Search className="size-5 shrink-0 text-primary" aria-hidden="true" />
          <Input
            type="search"
            placeholder="Search services, articles, gallery…"
            aria-label="Search the site"
            className="h-11 border-border bg-card"
          />
          <Button type="submit" className="rounded-md px-6">
            Search
          </Button>
        </form>
      </div>
    </header>
  );
}
