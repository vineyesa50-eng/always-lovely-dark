import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";

type SortKey = "newest" | "oldest" | "az" | "za";

const SORTS: { key: SortKey; label: string }[] = [
  { key: "newest", label: "Newest first" },
  { key: "oldest", label: "Oldest first" },
  { key: "az", label: "Title A–Z" },
  { key: "za", label: "Title Z–A" },
];

const PER_PAGE = 6;
const EASE = [0.22, 1, 0.36, 1] as const;

export function AllProjectsModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ProjectCategory | "All">("All");
  const [sort, setSort] = useState<SortKey>("newest");
  const [page, setPage] = useState(1);

  // Close on Escape + lock background scroll while the modal is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  useEffect(() => setPage(1), [query, category, sort]);

  const counts = useMemo(() => {
    const map = new Map<string, number>([["All", projects.length]]);
    for (const c of projectCategories) {
      map.set(c, projects.filter((p) => p.category === c).length);
    }
    return map;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = projects.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });

    return [...list].sort((a, b) => {
      if (sort === "newest") return b.year - a.year || a.title.localeCompare(b.title);
      if (sort === "oldest") return a.year - b.year || a.title.localeCompare(b.title);
      if (sort === "az") return a.title.localeCompare(b.title);
      return b.title.localeCompare(a.title);
    });
  }, [query, category, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, totalPages);
  const paginated = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);
  const hasFilters = query !== "" || category !== "All" || sort !== "newest";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label="All projects"
        >
          <motion.div
            className="absolute inset-0 bg-background/85 backdrop-blur-xl"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="surface relative z-10 flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            {/* Toolbar */}
            <div className="space-y-4 border-b border-border p-6 lg:px-8">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <svg
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  >
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                  </svg>
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search projects, tech, keywords…"
                    aria-label="Search projects"
                    className="h-12 w-full rounded-2xl border border-border bg-background/60 pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground/30"
                  />
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close all projects"
                  className="grid size-12 shrink-0 place-items-center rounded-2xl border border-border transition-all duration-300 hover:rotate-90 hover:border-foreground/30"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-2">
                  {(["All", ...projectCategories] as const).map((c) => {
                    const activeChip = category === c;
                    return (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setCategory(c)}
                        className={`relative rounded-full border px-4 py-1.5 text-xs tracking-wide transition-colors duration-300 ${
                          activeChip
                            ? "border-transparent text-primary-foreground"
                            : "border-border text-muted-foreground hover:border-foreground/25 hover:text-foreground"
                        }`}
                      >
                        {activeChip && (
                          <motion.span
                            layoutId="category-pill"
                            className="absolute inset-0 rounded-full bg-primary"
                            transition={{ duration: 0.35, ease: EASE }}
                          />
                        )}
                        <span className="relative">
                          {c}
                          <span className="ml-1.5 opacity-60">{counts.get(c) ?? 0}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs tracking-wide text-muted-foreground">Sort</span>
                  {SORTS.map((s) => {
                    const activeSort = sort === s.key;
                    return (
                      <button
                        key={s.key}
                        type="button"
                        onClick={() => setSort(s.key)}
                        className={`relative rounded-full border px-3 py-1.5 text-xs tracking-wide transition-colors duration-300 ${
                          activeSort
                            ? "border-transparent text-primary-foreground"
                            : "border-border text-muted-foreground hover:border-foreground/25 hover:text-foreground"
                        }`}
                      >
                        {activeSort && (
                          <motion.span
                            layoutId="sort-pill"
                            className="absolute inset-0 rounded-full bg-primary"
                            transition={{ duration: 0.35, ease: EASE }}
                          />
                        )}
                        <span className="relative">{s.label}</span>
                      </button>
                    );
                  })}
                  {hasFilters && (
                    <button
                      type="button"
                      onClick={() => {
                        setQuery("");
                        setCategory("All");
                        setSort("newest");
                      }}
                      className="ml-2 text-xs tracking-wide text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>

            </div>

            {/* Results */}
            <div className="min-h-0 flex-1 overflow-y-auto p-6 lg:p-8">
              {paginated.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid place-items-center py-20 text-center"
                >
                  <p className="display text-2xl">Nothing matches that search</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Try a different keyword or clear the filters.
                  </p>
                </motion.div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${category}-${sort}-${query}-${current}`}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.06 } },
                      exit: { opacity: 0, transition: { duration: 0.18 } },
                    }}
                    className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                  >
                    {paginated.map((p) => (
                      <motion.article
                        key={p.title}
                        variants={{
                          hidden: { opacity: 0, y: 24, scale: 0.97 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { duration: 0.5, ease: EASE },
                          },
                        }}
                        className="surface surface-hover group flex flex-col overflow-hidden"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img
                            src={p.image}
                            alt={p.title}
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 size-full object-cover opacity-75 transition-all duration-700 group-hover:scale-[1.05] group-hover:opacity-100"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/85 to-transparent" />
                          <span className="display absolute left-4 top-4 rounded-full border border-border/60 bg-background/55 px-3 py-1 text-[11px] tracking-[0.2em] backdrop-blur">
                            {p.year}
                          </span>
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                          <p className="eyebrow">{p.category}</p>
                          <h3 className="display mt-2 text-xl">{p.title}</h3>
                          <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                            {p.description}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {p.tags.slice(0, 3).map((t) => (
                              <span
                                key={t}
                                className="rounded-full border border-border px-2.5 py-0.5 text-[10px] tracking-wide text-muted-foreground"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between gap-4 border-t border-border p-5 lg:px-8">
                <button
                  type="button"
                  onClick={() => setPage(current - 1)}
                  disabled={current === 1}
                  className="rounded-2xl border border-border px-4 py-2 text-xs tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 disabled:pointer-events-none disabled:opacity-30"
                >
                  Previous
                </button>
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setPage(n)}
                      aria-label={`Go to page ${n}`}
                      aria-current={n === current ? "page" : undefined}
                      className={`relative grid size-9 place-items-center rounded-xl text-xs tabular-nums transition-colors duration-300 ${
                        n === current ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {n === current && (
                        <motion.span
                          layoutId="page-pill"
                          className="absolute inset-0 rounded-xl bg-primary"
                          transition={{ duration: 0.35, ease: EASE }}
                        />
                      )}
                      <span className="relative">{n}</span>
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setPage(current + 1)}
                  disabled={current === totalPages}
                  className="rounded-2xl border border-border px-4 py-2 text-xs tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 disabled:pointer-events-none disabled:opacity-30"
                >
                  Next
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
