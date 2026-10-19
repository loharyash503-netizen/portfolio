type P = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const ArrowRight = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRight = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const ArrowDown = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

export const ArrowLeft = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </svg>
);

export const Mail = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const Phone = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
);

export const Copy = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="9" y="9" width="12" height="12" rx="2" />
    <path d="M5 15V5a2 2 0 0 1 2-2h8" />
  </svg>
);

export const Check = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="m5 12 5 5 9-10" />
  </svg>
);

export const LinkedIn = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4v-11Z" />
  </svg>
);

export const Behance = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M8.2 11.4c.9-.4 1.5-1.2 1.5-2.4 0-2.2-1.7-3-3.9-3H1v12h5.9c2.3 0 4.3-1.1 4.3-3.6 0-1.5-.7-2.6-2.1-3ZM3.6 8h2c.8 0 1.5.2 1.5 1.1 0 .9-.6 1.2-1.4 1.2H3.6V8Zm2.3 8H3.6v-2.8h2.4c1 0 1.6.4 1.6 1.4 0 1.1-.8 1.4-1.7 1.4ZM15 7h5.4v1.4H15V7Zm6.9 6.6c0-2.6-1.5-4.7-4.3-4.7-2.7 0-4.5 2-4.5 4.6 0 2.7 1.7 4.6 4.5 4.6 2.1 0 3.4-.9 4.1-2.9h-2.1c-.2.7-1.1 1.1-1.9 1.1-1.3 0-2.1-.7-2.1-2.1h6.3v-.6Zm-6.3-.9c.1-1.1.8-1.8 1.9-1.8 1.2 0 1.8.7 1.9 1.8h-3.8Z" />
  </svg>
);

export const Figma = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M8.5 2h3.5v6.5H8.5a3.25 3.25 0 0 1 0-6.5Zm7 0a3.25 3.25 0 0 1 0 6.5H12V2h3.5ZM8.5 8.5H12V15H8.5a3.25 3.25 0 0 1 0-6.5Zm7 0a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5ZM8.5 15H12v3.25A3.25 3.25 0 1 1 8.5 15Z" />
  </svg>
);
