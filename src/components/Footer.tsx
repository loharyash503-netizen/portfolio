import { profile } from "@/data/portfolio";
import { Behance, LinkedIn, Mail } from "./icons";

async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await currentYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-dim sm:flex-row sm:px-6">
        <p>
          © {year} {profile.name}. Designed with care in {profile.location}.
        </p>
        <div className="flex items-center gap-1">
          <a href={`mailto:${profile.email}`} aria-label="Email" className="grid size-10 place-items-center rounded-full transition-colors hover:bg-white/5 hover:text-fg">
            <Mail className="size-4.5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid size-10 place-items-center rounded-full transition-colors hover:bg-white/5 hover:text-fg">
            <LinkedIn className="size-4.5" />
          </a>
          <a href={profile.behance} target="_blank" rel="noreferrer" aria-label="Behance" className="grid size-10 place-items-center rounded-full transition-colors hover:bg-white/5 hover:text-fg">
            <Behance className="size-4.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
