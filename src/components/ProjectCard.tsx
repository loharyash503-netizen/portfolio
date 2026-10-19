import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/portfolio";
import { ArrowUpRight } from "./icons";

export const accentGlow = {
  blue: "from-blue/40",
  red: "from-red/40",
  violet: "from-violet/40",
} as const;

export function projectHref(p: Project) {
  if (p.board) return { href: `/work/${p.slug}`, external: false };
  if (p.behance) return { href: p.behance, external: true };
  return null;
}

// Typographic stand-in for projects without a visual yet
function Placeholder({ p }: { p: Project }) {
  return (
    <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_30%_20%,rgb(172_75_255/0.35),transparent_55%),radial-gradient(circle_at_80%_90%,rgb(42_111_182/0.35),transparent_50%)] bg-surface-2">
      <span className="font-display text-4xl font-bold tracking-tight text-chrome">{p.title}</span>
    </div>
  );
}

export function ProjectCard({ p }: { p: Project }) {
  const link = projectHref(p);
  const body = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-surface-2">
        {p.cover ? (
          <Image
            src={p.cover}
            alt={`${p.title} cover`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <Placeholder p={p} />
        )}
        {link && (
          <span className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-ink/70 text-fg opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
            <ArrowUpRight />
          </span>
        )}
      </div>
      <div className="px-1 pb-1 pt-4">
        <p className="text-xs uppercase tracking-[0.18em] text-dim">{p.category}</p>
        <h3 className="mt-2 font-display text-xl font-semibold text-fg">{p.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.tagline}</p>
        {!link && <p className="mt-3 text-xs text-dim">Case study coming soon</p>}
      </div>
    </>
  );

  const cls =
    "group relative block h-full rounded-2xl border border-line bg-surface p-3 transition-all duration-500 hover:-translate-y-1 hover:border-white/20";

  if (!link) return <div className={cls}>{body}</div>;
  if (link.external)
    return (
      <a href={link.href} target="_blank" rel="noreferrer" className={cls}>
        {body}
      </a>
    );
  return (
    <Link href={link.href} className={cls}>
      {body}
    </Link>
  );
}
