import Image from "next/image";
import { certifications, languages, profile, projects } from "@/data/portfolio";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const stats = [
  { value: String(projects.length), label: "Projects & studies" },
  { value: "M.Des", label: "UI/UX, Indus University" },
  { value: String(certifications.length), label: "Google certifications" },
  { value: String(languages.length), label: "Languages spoken" },
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading
        index="01"
        eyebrow="About me"
        title={
          <>
            Designing with <span className="text-steel">empathy</span> and{" "}
            <span className="text-signal">business sense</span>.
          </>
        }
      />

      <div className="grid gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
        <Reveal className="relative mx-auto w-full max-w-sm md:mx-0">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-blue/30 via-violet/20 to-red/25 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/yash.jpg"
                alt="Portrait of Yash Lohar"
                fill
                sizes="(max-width: 768px) 90vw, 380px"
                className="object-cover object-[50%_42%]"
              />
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface/80 to-transparent" />
            </div>
            <div className="flex items-center justify-between px-2 pb-1 pt-4">
              <div>
                <p className="font-display text-lg font-semibold">{profile.name}</p>
                <p className="text-sm text-muted">{profile.role}</p>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                {profile.location}
              </span>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal delay={100}>
            <p className="text-xl leading-relaxed text-fg sm:text-2xl">{profile.summary}</p>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 text-lg leading-relaxed text-muted">{profile.background}</p>
          </Reveal>

          <Reveal delay={260}>
            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-ink-2 p-5">
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block font-display text-3xl font-semibold text-fg">{s.value}</span>
                    <span className="mt-1 block text-xs leading-snug text-muted">{s.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
