"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

// Decorative "living canvas" behind the hero: a parallax grid, floating cards for each step of the
// design process, a faint user-flow network and a guide cursor that walks through the cards.
// The cards sit on a fixed 1240×740 stage centred on the hero, so their pixel positions line up with
// the headline and buttons above them; the stage only shows at xl, where it fits beside the content.
export function HeroCanvas() {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse parallax: publish the pointer position as --mx / --my in the range -1..1
  useEffect(() => {
    const el = ref.current;
    if (!el || !matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (window.scrollY > window.innerHeight) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--mx", ((e.clientX / window.innerWidth) * 2 - 1).toFixed(3));
        el.style.setProperty("--my", ((e.clientY / window.innerHeight) * 2 - 1).toFixed(3));
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0">
      <div className="bg-grid parallax absolute -inset-10" style={depth(-8)} />

      {/* everything on the stage shares one parallax depth so the guide cursor stays on its targets */}
      <div
        className="hero-stage parallax absolute left-[calc(50%-620px)] top-[calc(50%-370px)] hidden h-[740px] w-[1240px] xl:block"
        style={depth(14)}
      >
        <Network />

        <Card x={60} y={40} float="9s" className="hidden w-[250px] [@media(min-height:900px)]:block">
          <UserFlow />
        </Card>
        <Card x={50} y={350} float="8s" delay="-2s" className="w-[220px]">
          <Research />
        </Card>
        <Card x={190} y={500} float="10s" delay="-5s" bare>
          <Wireframe />
        </Card>
        <Card x={950} y={360} float="9s" delay="-3s" className="w-[240px]">
          <DesignSystem />
        </Card>
        <Card x={900} y={540} float="8s" delay="-6s" className="w-[180px]">
          <Prototype />
        </Card>

        <div className="guide absolute left-0 top-0">
          <svg viewBox="0 0 16 16" className="guide-click size-5 text-blue-2 drop-shadow-[0_0_8px_rgb(61_143_217/0.9)]">
            <path d="M1 1l5.5 14 2-6 6-2z" fill="currentColor" stroke="white" strokeWidth="1" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Phone/tablet version of the canvas: the same cards in a slow marquee under the hero buttons
export function CanvasStrip() {
  const cards = (
    <div className="flex shrink-0 items-center gap-4 pr-4">
      <div className={`${PANEL} w-[220px]`}>
        <Research />
      </div>
      <Wireframe />
      <div className={`${PANEL} w-[240px]`}>
        <DesignSystem />
      </div>
      <div className={`${PANEL} w-[180px]`}>
        <Prototype />
      </div>
      <div className={`${PANEL} w-[250px]`}>
        <UserFlow />
      </div>
    </div>
  );
  return (
    <div
      aria-hidden
      className="hero-strip hero-rise pointer-events-none relative left-1/2 mt-12 w-screen -translate-x-1/2 overflow-hidden text-left [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] xl:hidden"
      style={{ "--d": "900ms" } as CSSProperties}
    >
      <div className="flex w-max animate-marquee py-2">
        {cards}
        {cards}
      </div>
    </div>
  );
}

const PANEL =
  "rounded-2xl border border-white/10 bg-surface-2/75 p-3 shadow-[0_24px_60px_-24px_rgb(0_0_0/0.85)] backdrop-blur-md";

const depth = (d: number) => ({ "--depth": d }) as CSSProperties;

function Card({
  x,
  y,
  float,
  delay = "0s",
  bare = false,
  className = "",
  children,
}: {
  x: number;
  y: number;
  float: string;
  delay?: string;
  bare?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`absolute ${className}`} style={{ left: x, top: y }}>
      <div
        className={`float ${bare ? "" : PANEL}`}
        style={{ "--float": "7px", "--float-dur": float, "--float-delay": delay } as CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}

function Label({ dot, children }: { dot: string; children: ReactNode }) {
  return (
    <p className="mb-2.5 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-dim">
      <span className={`size-1.5 rounded-full ${dot}`} />
      {children}
    </p>
  );
}

// Highlight shown around whatever the guide cursor is pointing at
function Ring({ name, className }: { name: string; className: string }) {
  return <span className={`loop-ring ${name} absolute border border-blue-2/80 ${className}`} />;
}

function Research() {
  return (
    <>
      <Label dot="bg-blue-2">User research</Label>
      <div className="mb-2.5 flex items-center">
        {["bg-blue", "bg-red", "bg-violet", "bg-slate-500"].map((bg, i) => (
          <span key={bg} className={`size-6 rounded-full border-2 border-surface-2 ${bg} ${i ? "-ml-1.5" : ""}`} />
        ))}
        <span className="ml-2 text-[10px] text-muted">Survey insights</span>
      </div>
      <div className="relative space-y-1.5">
        <Ring name="ring-research" className="-inset-1.5 rounded-lg" />
        {[
          ["bg-blue-2", "78%"],
          ["bg-red-2", "54%"],
          ["bg-violet", "66%"],
        ].map(([bg, width]) => (
          <div key={bg} className="flex items-center gap-2">
            <span className="h-1 w-8 rounded-full bg-white/15" />
            <span className="h-1.5 flex-1 rounded-full bg-white/5">
              <span className={`bar-grow block h-full rounded-full ${bg}`} style={{ width }} />
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

// A wireframe that turns into finished UI while the cursor rests on it
function Wireframe() {
  const rows = (tone: [string, string, string, string, string, string]) => (
    <>
      <div className={`h-3 w-10 rounded ${tone[0]}`} />
      <div className={`h-12 rounded-md ${tone[1]}`} />
      <div className={`h-1.5 w-full rounded ${tone[2]}`} />
      <div className={`h-1.5 w-3/4 rounded ${tone[3]}`} />
      <div className={`h-1.5 w-1/2 rounded ${tone[3]}`} />
      <div className={`mt-3 grid h-4 place-items-center rounded-full text-[7px] font-semibold uppercase tracking-wider text-white ${tone[4]}`}>
        {tone[5]}
      </div>
    </>
  );
  return (
    <div className="relative h-[180px] w-[104px] rounded-[22px] border border-white/15 bg-ink p-1.5 shadow-[0_24px_60px_-24px_rgb(0_0_0/0.85)]">
      <Ring name="ring-phone" className="-inset-1.5 rounded-[26px]" />
      <div className="relative h-full overflow-hidden rounded-[16px] bg-surface-2">
        <span className="absolute left-1/2 top-1.5 z-10 h-1 w-6 -translate-x-1/2 rounded-full bg-white/20" />
        <div className="phone-skel absolute inset-0 space-y-1.5 p-2 pt-4">
          {rows(["bg-white/10", "border border-dashed border-white/15", "bg-white/10", "bg-white/10", "border border-white/15", ""])}
        </div>
        <div className="phone-ui absolute inset-0 space-y-1.5 p-2 pt-4">
          {rows(["bg-gradient-to-r from-blue-2 to-violet", "bg-gradient-to-br from-blue to-violet/70", "bg-fg/70", "bg-fg/30", "bg-red", "Book"])}
        </div>
      </div>
    </div>
  );
}

function DesignSystem() {
  return (
    <>
      <Label dot="bg-violet">Design system</Label>
      <div className="flex gap-1.5">
        {["bg-blue", "bg-red", "bg-violet", "bg-fg", "bg-ink"].map((bg, i) => (
          <span key={bg} className={`relative size-6 rounded-md border border-white/10 ${bg}`}>
            {i === 1 && <Ring name="ring-swatch" className="-inset-1 rounded-[9px]" />}
          </span>
        ))}
      </div>
      <div className="mt-3 flex items-end gap-3">
        <span className="font-display text-3xl font-bold leading-none text-fg">Aa</span>
        <span className="pb-0.5 text-[9px] leading-relaxed">
          <span className="block text-muted">Space Grotesk · Display</span>
          <span className="block text-dim">Outfit · Body</span>
        </span>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span className="rounded-full border border-dashed border-violet/60 px-2 py-0.5 text-[8px] uppercase tracking-wider text-violet/90">◇ Button</span>
        <span className="flex h-4 w-7 rounded-full bg-blue-2 p-0.5">
          <span className="ml-auto size-3 rounded-full bg-white" />
        </span>
        <span className="grid size-4 place-items-center rounded border border-blue-2 bg-blue-2/20 text-[9px] text-blue-2">✓</span>
        <span className="h-4 flex-1 rounded border border-white/10 bg-white/5" />
      </div>
    </>
  );
}

// A two-screen prototype diagram: the guide cursor taps the mini button on the first screen
// and the second screen shows the result. Drawn small, as a diagram, so it doesn't read as a real button.
function Prototype() {
  const screen = "relative h-[78px] w-[58px] rounded-lg border border-white/10 bg-ink p-1.5";
  return (
    <>
      <Label dot="bg-red-2">Prototype</Label>
      <div className="flex items-center gap-2">
        <div className={`${screen} flex flex-col`}>
          <div className="h-1 w-3/4 rounded bg-white/15" />
          <div className="mt-1 h-1 w-1/2 rounded bg-white/10" />
          <div className="relative mt-auto">
            <span className="proto-ripple absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-2/40" />
            <div className="proto-btn relative h-3.5 rounded-full bg-blue-2/80" />
          </div>
        </div>
        <div className="flex w-[22px] flex-col items-center gap-0.5 text-[6px] uppercase tracking-wider text-dim">
          <span>tap</span>
          <svg viewBox="0 0 22 8" fill="none" className="w-full stroke-blue-2/70">
            <path d="M1 4h18M16 1l3 3-3 3" strokeDasharray="2 2" />
          </svg>
        </div>
        <div className={`${screen} grid place-items-center`}>
          <div className="proto-a col-start-1 row-start-1 w-full space-y-1">
            <div className="mx-auto size-4 rounded-full border border-dashed border-white/15" />
            <div className="mx-auto h-1 w-3/4 rounded bg-white/10" />
          </div>
          <div className="proto-b col-start-1 row-start-1 w-full space-y-1">
            <div className="mx-auto grid size-4 place-items-center rounded-full bg-blue-2/25 text-[8px] text-blue-2">✓</div>
            <div className="mx-auto h-1 w-3/4 rounded bg-fg/40" />
          </div>
        </div>
      </div>
    </>
  );
}

const FLOW_MAIN = "M15 32 C28 32, 26 15, 40 15 L84 15 C104 15, 104 32, 118 32 L162 32";

function UserFlow() {
  return (
    <>
      <Label dot="bg-blue-2">User flow</Label>
      <div className="relative h-16 w-[224px]">
        <svg viewBox="0 0 224 64" fill="none" className="absolute inset-0 overflow-visible">
          {[
            "M15 32 C28 32, 26 15, 40 15",
            "M15 32 C28 32, 26 49, 40 49",
            "M84 15 C104 15, 104 32, 118 32",
            "M84 49 C104 49, 104 32, 118 32",
            "M138 32 L162 32",
          ].map((d) => (
            <path key={d} d={d} className="flow-dash stroke-white/25" strokeDasharray="3 3" />
          ))}
          <circle cx="10" cy="32" r="5" className="fill-blue-2" />
          {[
            [40, 6, "Home"],
            [40, 40, "Search"],
          ].map(([x, y, label]) => (
            <g key={label}>
              <rect x={x} y={y} width="44" height="18" rx="5" className="fill-white/5 stroke-white/20" />
              <text x={Number(x) + 22} y={Number(y) + 12} textAnchor="middle" className="fill-muted text-[7px]">
                {label}
              </text>
            </g>
          ))}
          <path d="M128 22 L138 32 L128 42 L118 32 Z" className="fill-violet/20 stroke-violet" />
          <rect x="162" y="23" width="54" height="18" rx="9" className="fill-red/80" />
          <text x="189" y="35" textAnchor="middle" className="fill-white text-[7px] font-semibold">
            Checkout
          </text>
        </svg>
        <span className="flow-dot absolute left-0 top-0 size-1.5 rounded-full bg-white" style={{ offsetPath: `path("${FLOW_MAIN}")` }} />
      </div>
    </>
  );
}

// Faint connections between the cards, routed around the headline and buttons
const NETWORK = [
  "M60 465 C40 520, 80 590, 190 590",
  "M242 680 C330 725, 860 725, 990 650",
  "M1080 595 C1150 590, 1180 540, 1150 495",
];

function Network() {
  return (
    <>
      <svg viewBox="0 0 1240 740" fill="none" className="absolute inset-0 h-full w-full overflow-visible">
        {NETWORK.map((d) => (
          <path key={d} d={d} className="flow-dash stroke-white/10" strokeDasharray="3 7" />
        ))}
      </svg>
      {NETWORK.map((d, i) => (
        <span
          key={d}
          className="flow-dot absolute left-0 top-0 size-1.5 rounded-full bg-blue-2 shadow-[0_0_8px_var(--color-blue-2)]"
          style={{ offsetPath: `path("${d}")`, animationDuration: "6s", animationDelay: `${i * 1.8}s` }}
        />
      ))}
    </>
  );
}
