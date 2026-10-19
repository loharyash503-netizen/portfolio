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
      </div>
      <div className="relative z-10 text-center">
        <div className="relative">
          <div className="orb" aria-hidden />
          <h1 className="relative font-display text-[clamp(2.5rem,9vw,6.25rem)] font-bold leading-[0.95] tracking-tight drop-shadow-[0_6px_30px_rgba(0,0,0,0.55)]">
            <span className="text-steel">Research.</span>{" "}
            <span className="text-signal">Design.</span>{" "}
            <span className="text-chrome">Delight.</span>
          </h1>
        </div>

        <p className="relative mt-6 text-[0.9rem] sm:text-xl">
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
