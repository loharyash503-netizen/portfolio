"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

const links = [
  { href: "/#about", label: "About me" },
  { href: "/#skills", label: "Skills" },
  { href: "/#work", label: "Best works" },
  { href: "/#contact", label: "Contacts" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-line bg-ink/75 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6">
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="relative text-sm font-medium uppercase tracking-wide text-fg/85 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-blue-2 after:to-red after:transition-all hover:text-white hover:after:w-full"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="relative grid size-11 place-items-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute h-px w-6 bg-fg transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`}
          />
          <span
            className={`absolute h-px w-6 bg-fg transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-[max-height] duration-500 md:hidden ${open ? "max-h-96" : "max-h-0"}`}
      >
        <ul className="flex flex-col gap-1 px-4 pb-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 font-display text-2xl text-fg transition-colors hover:bg-white/5"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
