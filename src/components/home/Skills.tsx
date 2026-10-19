import { certifications, education, languages, skills } from "@/data/portfolio";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const toneDot = {
  blue: "bg-blue-2 shadow-[0_0_12px_var(--color-blue-2)]",
  red: "bg-red shadow-[0_0_12px_var(--color-red)]",
  white: "bg-fg shadow-[0_0_12px_white]",
} as const;

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading
        index="03"
        eyebrow="Skills"
        title={
          <>
            Tools in hand, <span className="text-steel">users</span> in mind.
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={i * 100}>
            <div className="h-full rounded-2xl border border-line bg-surface p-7">
              <h3 className="flex items-center gap-3 font-display text-xl font-semibold">
                <span className={`size-2 rounded-full ${toneDot[group.tone]}`} />
                {group.title}
              </h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm text-fg/90"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <Reveal>
          <div className="h-full rounded-2xl border border-line bg-surface p-7">
            <h3 className="font-display text-xl font-semibold">Education</h3>
            <ol className="mt-6 space-y-6 border-l border-white/10 pl-6">
              {education.map((e) => (
                <li key={e.title} className="relative">
                  <span className="absolute -left-[1.85rem] top-1.5 size-2.5 rounded-full border-2 border-ink bg-gradient-to-br from-blue-2 to-red" />
                  <p className="text-xs uppercase tracking-[0.2em] text-dim">{e.period}</p>
                  <p className="mt-1 font-display text-lg text-fg">{e.title}</p>
                  <p className="text-sm text-muted">{e.place}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="flex h-full flex-col gap-8 rounded-2xl border border-line bg-surface p-7">
            <div>
              <h3 className="font-display text-xl font-semibold">Certifications</h3>
              <ul className="mt-4 space-y-2 text-fg/90">
                {certifications.map((c) => (
                  <li key={c} className="flex items-center gap-3">
                    <span className="text-blue-2">✦</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold">Languages</h3>
              <p className="mt-4 text-fg/90">{languages.join(" · ")}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
