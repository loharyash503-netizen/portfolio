import Image from "next/image";
import Link from "next/link";
import { featuredProjects, moreProjects } from "@/data/portfolio";
import { accentGlow, ProjectCard } from "../ProjectCard";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { ArrowRight } from "../icons";

export function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading
        index="04"
        eyebrow="Best works"
        title={
          <>
            Selected <span className="text-signal">case studies</span>.
          </>
        }
        intro="From real-time school attendance to kid-friendly shopping — research-led projects from my M.Des journey."
      />

      <div className="space-y-6 sm:space-y-10">
        {featuredProjects.map((p, i) => (
          <Reveal key={p.slug}>
            <Link
              href={`/work/${p.slug}`}
              className="group relative grid items-center gap-6 overflow-hidden rounded-3xl border border-line bg-surface p-3 transition-colors duration-500 hover:border-white/20 sm:p-4 md:grid-cols-2 md:gap-10"
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute size-[28rem] rounded-full bg-gradient-to-br ${accentGlow[p.accent]} to-transparent opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-60 ${i % 2 ? "-left-40 -top-40" : "-right-40 -bottom-40"}`}
              />
              <div className={`relative aspect-[16/10] overflow-hidden rounded-2xl ${i % 2 ? "md:order-2" : ""}`}>
                <Image
                  src={p.cover}
                  alt={`${p.title} case study cover`}
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="relative px-3 pb-4 md:px-4 md:pb-0">
                <p className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-dim">
                  <span className="font-display text-fg/60">{String(i + 1).padStart(2, "0")}</span>
                  {p.category}
                </p>
                <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-lg text-fg/80">{p.tagline}</p>
                <p className="mt-4 leading-relaxed text-muted">{p.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.methods.slice(0, 4).map((m) => (
                    <li key={m} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                      {m}
                    </li>
                  ))}
                </ul>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-fg">
                  View case study
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal className="mb-8 mt-24 flex items-end justify-between gap-4">
        <h3 className="font-display text-2xl font-semibold sm:text-3xl">More explorations</h3>
        <p className="hidden text-sm text-muted sm:block">Ergonomics, product innovation and branding</p>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {moreProjects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 90}>
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
