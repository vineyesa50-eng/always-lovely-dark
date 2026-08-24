import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  catalog,
  catalogNiches,
  catalogStacks,
  catalogTypes,
  type CatalogProject,
} from "@/data/catalog";

const PAGE_SIZE = 6;
const ALL = "all";

type SortKey = "name-asc" | "name-desc" | "niche" | "type";

const sorters: Record<SortKey, (a: CatalogProject, b: CatalogProject) => number> = {
  "name-asc": (a, b) => a.name.localeCompare(b.name),
  "name-desc": (a, b) => b.name.localeCompare(a.name),
  niche: (a, b) => a.niche.localeCompare(b.niche) || a.name.localeCompare(b.name),
  type: (a, b) => a.type.localeCompare(b.type) || a.name.localeCompare(b.name),
};

function ProjectCard({ project }: { project: CatalogProject }) {
  return (
    <article className="edge-card group flex flex-col overflow-hidden rounded-2xl bg-card">
      <div className="media-zoom aspect-[16/10] bg-secondary">
        <img
          src={project.image}
          alt={`${project.name} — ${project.type} interface`}
          loading="lazy"
          width={800}
          height={500}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-base font-extrabold">{project.name}</h3>
        <p className="mt-1 text-xs font-semibold tracking-wide text-brand-teal uppercase">
          {project.type} · {project.niche}
        </p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {[project.side, project.stack, project.backend, project.db]
            .filter(Boolean)
            .map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-secondary px-2.5 py-1 text-[0.65rem] font-semibold tracking-wide uppercase"
              >
                {tag}
              </li>
            ))}
        </ul>
        <div className="mt-4 flex items-center justify-between gap-3 pt-1">
          <span className="text-xs text-muted-foreground">{project.client ?? "—"}</span>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="text-xs font-bold text-brand-orange underline-offset-4 hover:underline"
            >
              Live demo →
            </a>
          ) : (
            <span className="text-xs text-muted-foreground">Private</span>
          )}
        </div>
      </div>
    </article>
  );
}

export function ProjectsCatalogDialog() {
  const [query, setQuery] = useState("");
  const [niche, setNiche] = useState(ALL);
  const [type, setType] = useState(ALL);
  const [stack, setStack] = useState(ALL);
  const [sort, setSort] = useState<SortKey>("name-asc");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return catalog
      .filter((p) => {
        if (niche !== ALL && p.niche !== niche) return false;
        if (type !== ALL && p.type !== type) return false;
        if (stack !== ALL && p.stack !== stack) return false;
        if (!q) return true;
        return [p.name, p.type, p.niche, p.stack, p.side, p.client, p.backend, p.db]
          .filter(Boolean)
          .some((v) => String(v).toLowerCase().includes(q));
      })
      .sort(sorters[sort]);
  }, [query, niche, type, stack, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pageCount);
  const visible = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  const reset = <T,>(setter: (v: T) => void) => (value: T) => {
    setter(value);
    setPage(1);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="rounded-full font-bold">
          See all projects ({catalog.length})
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-5xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-extrabold">All projects</DialogTitle>
          <DialogDescription>
            Search, filter and sort the full healthcare product catalog.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <Input
            value={query}
            onChange={(e) => reset(setQuery)(e.target.value)}
            placeholder="Search projects…"
            aria-label="Search projects"
            className="lg:col-span-2"
          />
          <Select value={niche} onValueChange={reset(setNiche)}>
            <SelectTrigger aria-label="Filter by niche">
              <SelectValue placeholder="Niche" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL}>All niches</SelectItem>
              {catalogNiches.map((n) => (
                <SelectItem key={n} value={n}>
                  {n}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={type} onValueChange={reset(setType)}>
            <SelectTrigger aria-label="Filter by type">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL}>All types</SelectItem>
              {catalogTypes.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={stack} onValueChange={reset(setStack)}>
            <SelectTrigger aria-label="Filter by stack">
              <SelectValue placeholder="Stack" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL}>All stacks</SelectItem>
              {catalogStacks.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            {filtered.length} project{filtered.length === 1 ? "" : "s"}
          </p>
          <Select value={sort} onValueChange={(v) => reset(setSort)(v as SortKey)}>
            <SelectTrigger className="w-[190px]" aria-label="Sort projects">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name-asc">Name (A–Z)</SelectItem>
              <SelectItem value="name-desc">Name (Z–A)</SelectItem>
              <SelectItem value="niche">Niche</SelectItem>
              <SelectItem value="type">Type</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {visible.length === 0 ? (
          <p className="py-12 text-center text-sm text-muted-foreground">
            No projects match those filters.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}

        <div className="flex items-center justify-between gap-3 pt-2">
          <Button
            variant="outline"
            size="sm"
            disabled={current === 1}
            onClick={() => setPage(current - 1)}
          >
            Previous
          </Button>
          <span className="text-xs font-semibold text-muted-foreground">
            Page {current} of {pageCount}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={current === pageCount}
            onClick={() => setPage(current + 1)}
          >
            Next
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
