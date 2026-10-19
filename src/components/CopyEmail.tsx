"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "./icons";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="flex max-w-full items-center gap-1 rounded-full border border-white/15 bg-surface/80 p-1.5 backdrop-blur">
      <a
        href={`mailto:${email}`}
        className="inline-flex min-w-0 items-center gap-2.5 rounded-full bg-gradient-to-b from-white to-slate-300 px-5 py-3 font-semibold text-ink transition-transform hover:-translate-y-0.5 sm:px-6"
      >
        <Mail className="size-5 shrink-0" />
        <span className="truncate text-sm sm:text-base">{email}</span>
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Email copied" : "Copy email address"}
        className="grid size-11 shrink-0 place-items-center rounded-full text-fg transition-colors hover:bg-white/10"
      >
        {copied ? <Check className="size-4 text-green-400" /> : <Copy />}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied" : ""}
      </span>
    </div>
  );
}
