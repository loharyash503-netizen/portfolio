import Link from "next/link";

// Wordmark in the reference's style: split colour + spaced sub-line
export function Logo() {
  return (
    <Link href="/" className="group block leading-none" aria-label="Yash Lohar — home">
      <span className="font-display text-xl tracking-[0.18em] sm:text-2xl">
        <span className="text-blue-2">YASH</span>
        <span className="text-fg">LO</span>
        <span className="text-red">H</span>
        <span className="text-fg">AR</span>
      </span>
      <span className="mt-1.5 block font-sans text-[0.55rem] font-semibold tracking-[0.42em] text-muted transition-colors group-hover:text-fg sm:text-[0.6rem]">
        UI · UX · DESIGN
      </span>
    </Link>
  );
}
