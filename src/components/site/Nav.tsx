import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <motion.nav
        animate={{
          paddingTop: scrolled ? 10 : 16,
          paddingBottom: scrolled ? 10 : 16,
        }}
        transition={{ duration: 0.5, ease }}
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full border px-5 transition-all duration-500 sm:px-7 ${
          scrolled
            ? "border-border bg-background/75 shadow-[0_8px_40px_-12px_var(--color-border-strong)] backdrop-blur-xl"
            : "border-border/50 bg-background/40 backdrop-blur-md"
        }`}
      >
        <a href="#top" className="group flex flex-col items-start gap-0.5 leading-none">
          <span className="display text-lg tracking-tight text-foreground transition-opacity duration-300 group-hover:opacity-70">
            Mostafa Samir
          </span>
          <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            Booking Systems
          </span>
        </a>

        {/* Desktop links with sliding underline */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-foreground transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group hidden items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm text-background transition-all duration-300 hover:gap-2.5 hover:opacity-85 sm:inline-flex"
          >
            Let's talk
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Animated burger */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative grid size-10 place-items-center rounded-full border border-border text-foreground transition-colors duration-300 hover:bg-secondary md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.25, ease }}
                className="grid place-items-center"
              >
                {open ? <X className="size-4" /> : <Menu className="size-4" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 -z-10 bg-background/60 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.35, ease }}
              className="mx-auto mt-3 max-w-5xl overflow-hidden rounded-3xl border border-border bg-background/95 p-3 shadow-[0_24px_60px_-16px_var(--color-border-strong)] backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12, transition: { duration: 0.15 } }}
                    transition={{ delay: 0.06 + i * 0.055, duration: 0.4, ease }}
                    className="group flex items-center justify-between rounded-2xl px-4 py-4 text-base text-muted-foreground transition-colors duration-300 hover:bg-secondary hover:text-foreground"
                  >
                    <span className="flex items-center gap-3">
                      <span className="display text-[10px] tracking-[0.2em] text-muted-foreground/60">
                        0{i + 1}
                      </span>
                      {l.label}
                    </span>
                    <ArrowUpRight className="size-4 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  transition={{ delay: 0.06 + links.length * 0.055, duration: 0.4, ease }}
                  className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-foreground px-4 py-4 text-base text-background transition-opacity duration-300 hover:opacity-85"
                >
                  Let's talk
                  <ArrowUpRight className="size-4" />
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
