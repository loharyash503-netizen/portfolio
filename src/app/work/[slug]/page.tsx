import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, figmaUrl } from "@/data/portfolio";
import { boards } from "@/data/boards";
import { Reveal } from "@/components/Reveal";
import { accentGlow } from "@/components/ProjectCard";
import { ArrowLeft, ArrowRight, ArrowUpRight, Behance, Figma } from "@/components/icons";

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = caseStudies.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    openGraph: { images: [p.cover] },
  };
}

// The page itself stays synchronous so navigations render the shell instantly;
// the slug is read inside <Suspense> (Next 16 instant-navigation rule).
export default function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  return (
    <Suspense fallback={<CaseStudySkeleton />}>
      <CaseStudy params={params} />
    </Suspense>
  );
}

function CaseStudySkeleton() {
  return (
    <main aria-busy className="mx-auto max-w-6xl animate-pulse px-4 pb-16 pt-32 sm:px-6 sm:pt-40">
      <div className="h-4 w-20 rounded bg-white/5" />
      <div className="mt-10 h-3 w-48 rounded bg-white/5" />
      <div className="mt-5 h-20 w-3/4 max-w-xl rounded-xl bg-white/5" />
      <div className="mt-6 h-6 w-1/2 rounded bg-white/5" />
      <div className="mt-12 h-24 rounded-2xl bg-white/[0.04]" />
      <div className="mt-10 aspect-[16/10] rounded-3xl bg-white/[0.04]" />
    </main>
  );
}

async function CaseStudy({ params }: { params: PageProps<"/work/[slug]">["params"] }) {
  const { slug } = await params;
  const index = caseStudies.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();

  const p = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];
  const slices = boards[p.slug] ?? [];

  return (
    <main className="relative overflow-x-clip">
      <div
        aria-hidden
        className={`pointer-events-none absolute -top-40 left-1/2 size-[50rem] -translate-x-1/2 rounded-full bg-gradient-to-b ${accentGlow[p.accent]} to-transparent opacity-50 blur-[120px]`}
      />

      {/* Intro */}
      <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-32 sm:px-6 sm:pt-40">
        <Reveal>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
          >
            <ArrowLeft /> All work
          </Link>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.25em] text-muted">{p.category}</p>
          <h1 className="mt-4 font-display text-[clamp(2.75rem,8vw,6rem)] font-bold leading-[0.95] tracking-tight text-chrome">
            {p.title}
          </h1>
          <p className="mt-5 max-w-2xl text-xl text-fg/85 sm:text-2xl">{p.tagline}</p>
        </Reveal>

        <Reveal delay={120}>
          <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            <div className="bg-ink-2 p-5">
              <dt className="text-xs uppercase tracking-[0.2em] text-dim">Role</dt>
              <dd className="mt-2 text-fg">{p.role}</dd>
            </div>
            <div className="bg-ink-2 p-5">
              <dt className="text-xs uppercase tracking-[0.2em] text-dim">Team</dt>
              <dd className="mt-2 text-fg">{p.team ? `Yash Lohar ${p.team}` : "Solo project"}</dd>
            </div>
            <div className="bg-ink-2 p-5">
              <dt className="text-xs uppercase tracking-[0.2em] text-dim">Links</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {p.behance && (
                  <a href={p.behance} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-sm transition-colors hover:bg-white/5">
                    <Behance className="size-4" /> Behance
                  </a>
                )}
                {p.figmaNode && (
                  <a href={figmaUrl(p.figmaNode)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-sm transition-colors hover:bg-white/5">
                    <Figma className="size-4" /> Figma
                  </a>
                )}
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={180} className="relative mt-10">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-line">
            <Image src={p.cover} alt={`${p.title} cover`} fill loading="eager" fetchPriority="high" sizes="(max-width: 1200px) 100vw, 1152px" className="object-cover" />
          </div>
        </Reveal>
      </section>

      {/* Story */}
      <section className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16">
        <Reveal>
          <h2 className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-muted">Methods</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {p.methods.map((m) => (
              <li key={m} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-fg/90">
                {m}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="space-y-14">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold">Overview</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{p.summary}</p>
          </Reveal>

          {p.problem && (
            <Reveal>
              <h2 className="font-display text-3xl font-semibold">The problem</h2>
              <p className="mt-4 border-l-2 border-red pl-5 text-lg leading-relaxed text-fg/85">{p.problem}</p>
            </Reveal>
          )}

          {p.approach && (
            <Reveal>
              <h2 className="font-display text-3xl font-semibold">Approach</h2>
              <ol className="mt-6 space-y-4">
                {p.approach.map((a, i) => (
                  <li key={a} className="flex gap-4">
                    <span className="font-display text-sm text-blue-2">{String(i + 1).padStart(2, "0")}</span>
                    <span className="leading-relaxed text-muted">{a}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          )}

          {p.insights && (
            <Reveal>
              <h2 className="font-display text-3xl font-semibold">Key takeaways</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {p.insights.map((s) => (
                  <li key={s} className="rounded-2xl border border-line bg-surface p-5 leading-relaxed text-fg/85">
                    <span className="mb-3 block text-violet">✦</span>
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </section>

      {/* Full board from Figma */}
      {slices.length > 0 && (
        <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">Full case study</p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">The complete board</h2>
            </div>
            {p.figmaNode && (
              <a href={figmaUrl(p.figmaNode)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg">
                Open in Figma <ArrowUpRight />
              </a>
            )}
          </Reveal>
          <div className="mx-auto max-w-[960px] overflow-hidden rounded-2xl border border-line bg-white shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
            {slices.map((s, i) => (
              <Image
                key={s.src}
                src={s.src}
                width={s.w}
                height={s.h}
                alt={i === 0 ? `${p.title} case study board` : ""}
                sizes="(max-width: 1000px) 100vw, 960px"
                className="block h-auto w-full"
              />
            ))}
          </div>
        </section>
      )}

      {/* Next */}
      <section className="mx-auto max-w-6xl px-4 pb-24 pt-12 sm:px-6">
        <Link
          href={`/work/${next.slug}`}
          className="group grid items-center gap-6 rounded-3xl border border-line bg-surface p-4 transition-colors hover:border-white/20 sm:grid-cols-[1fr_2fr]"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image src={next.cover} alt="" fill sizes="(max-width: 640px) 100vw, 380px" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
          </div>
          <div className="px-2 pb-2">
            <p className="text-xs uppercase tracking-[0.25em] text-dim">Next case study</p>
            <p className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{next.title}</p>
            <p className="mt-2 text-muted">{next.tagline}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide">
              Read next <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </section>
    </main>
  );
}
