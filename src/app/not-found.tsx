import Link from "next/link";
import { ArrowLeft } from "@/components/icons";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[80svh] flex-col items-center justify-center px-4 text-center">
      <div className="orb opacity-40" aria-hidden />
      <h1 className="relative font-display text-7xl font-bold text-chrome sm:text-8xl">404</h1>
      <p className="relative mt-4 text-lg text-muted">This page wandered off the user flow.</p>
      <Link href="/" className="relative mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors hover:bg-white/5">
        <ArrowLeft /> Back home
      </Link>
    </main>
  );
}
