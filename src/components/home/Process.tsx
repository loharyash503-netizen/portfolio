import { process } from "@/data/portfolio";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const glow = ["from-blue-2", "from-blue", "from-violet", "from-red", "from-red-2"];

export function Process() {
  return (
    <section id="process" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading
        index="02"
        eyebrow="How I work"
        title={
          <>
            A process that starts with <span className="text-chrome">people</span>.
          </>
        }
        intro="Every case study follows the same double-diamond rhythm — research first, pixels later."
      />

      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {process.map((p, i) => (
          <Reveal as="li" key={p.step} delay={i * 90} className="group relative">
            <div className="relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-colors duration-500 hover:border-white/20">
              <div
                aria-hidden
                className={`absolute -right-10 -top-10 size-32 rounded-full bg-gradient-to-br ${glow[i]} to-transparent opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-50`}
              />
              <span className="font-display text-sm text-dim">{p.step}</span>
              <h3 className="mt-6 font-display text-2xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
