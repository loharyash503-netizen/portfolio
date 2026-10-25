import Link from "next/link";
import { ArrowDown, ArrowRight } from "../icons";

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden px-4">
      {/* ambient light */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* radial gradients instead of blur filters: same softness, far cheaper to animate */}
        <div className="absolute -left-[20%] top-0 size-[65vmax] animate-drift rounded-full bg-[radial-gradient(circle,rgb(42_111_182/0.16),transparent_62%)] will-change-transform" />
        <div className="absolute -right-[25%] bottom-[-15%] size-[60vmax] animate-drift-slow rounded-full bg-[radial-gradient(circle,rgb(205_71_71/0.11),transparent_62%)] will-change-transform" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-ink)_78%)]" />
        {/* design-canvas grid, faded out toward the edges */}
        <div className="bg-grid absolute inset-0" />
      </div>
      <div className="relative z-10 text-center">
        <h1 className="relative font-display text-[clamp(2.5rem,9vw,6.25rem)] font-bold leading-[0.95] tracking-tight">
          <span className="text-steel">Research.</span>{" "}
          <SelectedWord>Design.</SelectedWord>{" "}
          <span className="text-chrome">Delight.</span>
        </h1>

        <p className="relative mt-10 text-[0.9rem] sm:mt-16 sm:text-xl">
          <span className="text-blue-2">User Research</span>
          <span className="mx-1.5 text-dim sm:mx-2">•</span>
          <span className="text-red-2">Interaction Design</span>
          <span className="mx-1.5 text-dim sm:mx-2">•</span>
          <span className="text-fg">Visual Design</span>
        </p>

        <p className="relative mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted sm:text-base">
          Hi, I&apos;m Yash — a UI/UX designer turning research into interfaces people enjoy using.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-white to-slate-300 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink shadow-[0_0_40px_rgba(172,75,255,0.35)] transition-transform hover:-translate-y-0.5"
          >
            View case studies
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-fg backdrop-blur transition-colors hover:border-white/40 hover:bg-white/5"
          >
            Get in touch
          </Link>
        </div>
      </div>

      <Link
        href="/#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-dim transition-colors hover:text-fg"
      >
        <ArrowDown className="size-6 animate-bob" />
      </Link>
    </section>
  );
}

// A word wrapped in a Figma-style selection box, with a collaborator cursor.
function SelectedWord({ children }: { children: React.ReactNode }) {
  const handle = "absolute size-2 border border-blue-2 bg-ink";
  return (
    <span className="relative inline-block">
      <span className="text-signal">{children}</span>
      <span aria-hidden className="pointer-events-none absolute -inset-x-1 -bottom-2 -top-0.5 border border-blue-2 sm:-inset-x-3 sm:-bottom-3">
        <span className={`${handle} -left-1 -top-1`} />
        <span className={`${handle} -right-1 -top-1`} />
        <span className={`${handle} -bottom-1 -left-1`} />
        <span className={`${handle} -bottom-1 -right-1`} />
      </span>
      <span aria-hidden className="pointer-events-none absolute -bottom-7 right-0 flex items-start sm:-bottom-11 sm:-right-14">
        <svg viewBox="0 0 16 16" className="size-4 text-red-2 sm:size-5">
          <path d="M1 1l5.5 14 2-6 6-2z" fill="currentColor" stroke="white" strokeWidth="1" strokeLinejoin="round" />
        </svg>
        <span className="mt-3 rounded-md bg-red-2 px-1.5 py-0.5 font-sans text-[11px] font-semibold tracking-normal text-white sm:mt-4 sm:text-xs">
          Yash
        </span>
      </span>
    </span>
  );
}
