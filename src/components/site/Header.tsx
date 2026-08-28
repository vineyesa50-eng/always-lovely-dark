import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Search, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-2" aria-label="MOTOcare home">
      <Car className="size-7 text-primary" strokeWidth={2} aria-hidden="true" />
      <span className="text-xl font-extrabold tracking-tight">
        MOTO<span className="text-primary">care</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="container-page flex h-18 items-center justify-between gap-4 py-4">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-primary" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Search" className="hidden sm:inline-flex">
            <Search className="size-5" />
          </Button>
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/contact">Contact</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu" className="lg:hidden">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 border-border bg-card/95 backdrop-blur-xl">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex flex-col gap-1 px-4 pt-10">
                {[...NAV, { label: "Contact", to: "/contact" as const }].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeProps={{ className: "text-primary" }}
                    className="rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
