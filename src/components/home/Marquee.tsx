import { marquee } from "@/data/portfolio";

const dot = ["text-blue-2", "text-red", "text-violet"];

export function Marquee() {
  const row = [...marquee, ...marquee];
  return (
    <div className="relative overflow-hidden border-y border-line bg-ink-2/60 py-5 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <ul className="flex w-max animate-marquee gap-8 whitespace-nowrap hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <li
            key={i}
            aria-hidden={i >= marquee.length}
            className="flex items-center gap-8 font-display text-lg text-fg/70 sm:text-xl"
          >
            {item}
            <span className={`text-xs ${dot[i % 3]}`}>✦</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
