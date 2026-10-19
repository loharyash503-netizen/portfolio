import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-3xl sm:mb-16">
      <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-muted">
        <span className="text-blue-2">{index}</span>
        <span className="h-px w-8 bg-gradient-to-r from-blue-2 to-red" />
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
    </Reveal>
  );
}
