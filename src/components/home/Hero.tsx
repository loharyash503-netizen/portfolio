import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArrowDown, ArrowRight } from "../icons";
import { HeroCanvas } from "./HeroCanvas";

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden px-4">
      {/* ambient light */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* radial gradients instead of blur filters: same softness, far cheaper to animate */}
        <div className="absolute -left-[20%] top-0 size-[65vmax] animate-drift rounded-full bg-[radial-gradient(circle,rgb(42_111_182/0.16),transparent_62%)] will-change-transform" />
        <div className="absolute -right-[25%] bottom-[-15%] size-[60vmax] animate-drift-slow rounded-full bg-[radial-gradient(circle,rgb(205_71_71/0.11),transparent_62%)] will-change-transform" />
        {/* faint blue-to-violet wash behind the headline */}
        <div className="hero-glow absolute left-1/2 top-[calc(50%-8rem)] h-[26rem] w-[60rem] max-w-[150vw] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-ink)_78%)]" />
      </div>
      <HeroCanvas />

      <div className="relative z-10 text-center">
        <h1
          className="float relative font-display text-[clamp(2.5rem,9vw,6.25rem)] font-bold leading-[0.95] tracking-tight"
          style={{ "--float": "3px", "--float-dur": "10s" } as CSSProperties}
        >
          <Word text="text-steel" glow="rgb(61 143 217 / 0.55)" delay={0}>
            Research.
          </Word>{" "}
          <Word text="text-signal" glow="rgb(224 88 88 / 0.5)" delay={150} selected>
            Design.
          </Word>{" "}
          <Word text="text-chrome" glow="rgb(226 232 240 / 0.4)" delay={300}>
            Delight.
          </Word>
        </h1>

        <p className="hero-rise relative mt-10 text-[0.9rem] sm:mt-16 sm:text-xl" style={rise(450)}>
          <span className="text-blue-2">User Research</span>
          <span className="mx-1.5 text-dim sm:mx-2">•</span>
          <span className="text-red-2">Interaction Design</span>
          <span className="mx-1.5 text-dim sm:mx-2">•</span>
          <span className="text-fg">Visual Design</span>
        </p>

        <p className="hero-rise relative mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted sm:text-base" style={rise(600)}>
          Hi, I&apos;m Yash — a UI/UX designer turning research into interfaces people enjoy using.
        </p>

        <div className="hero-rise mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row" style={rise(750)}>
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-white to-slate-300 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink shadow-[0_0_40px_rgba(172,75,255,0.35)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_50px_rgba(172,75,255,0.5)] active:translate-y-0 active:scale-[0.97]"
          >
            View case studies
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-fg backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/40 hover:bg-white/5 hover:shadow-[0_14px_40px_rgba(61,143,217,0.25)] active:translate-y-0 active:scale-[0.97]"
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

const rise = (delay: number) => ({ "--d": `${delay}ms` }) as CSSProperties;

// One headline word: staggered entrance, a shimmer that follows the entrance, and a lift + glow on hover.
// `selected` wraps the word in a Figma-style selection box with a collaborator cursor.
function Word({
  text,
  glow,
  delay,
  selected = false,
  children,
}: {
  text: string;
  glow: string;
  delay: number;
  selected?: boolean;
  children: ReactNode;
}) {
  const handle = "absolute size-2 border border-blue-2 bg-ink";
  return (
    <span
      className="hero-word relative"
      style={{ "--d": `${delay}ms`, "--glow": glow, "--shine-d": `${1300 + delay * 2}ms` } as CSSProperties}
    >
      <span className={`hero-word-text shimmer ${text}`}>{children}</span>
      {selected && (
        <>
          <span aria-hidden className="hero-frame pointer-events-none absolute -inset-x-1 -bottom-2 -top-0.5 border border-blue-2 sm:-inset-x-3 sm:-bottom-3">
            <span className={`${handle} -left-1 -top-1`} />
            <span className={`${handle} -right-1 -top-1`} />
            <span className={`${handle} -bottom-1 -left-1`} />
            <span className={`${handle} -bottom-1 -right-1`} />
          </span>
          <span aria-hidden className="hero-tag pointer-events-none absolute -bottom-7 right-0 flex items-start sm:-bottom-11 sm:-right-14">
            <svg viewBox="0 0 16 16" className="size-4 text-red-2 sm:size-5">
              <path d="M1 1l5.5 14 2-6 6-2z" fill="currentColor" stroke="white" strokeWidth="1" strokeLinejoin="round" />
            </svg>
            <span className="mt-3 rounded-md bg-red-2 px-1.5 py-0.5 font-sans text-[11px] font-semibold tracking-normal text-white sm:mt-4 sm:text-xs">
              Yash
            </span>
          </span>
        </>
      )}
    </span>
  );
}
