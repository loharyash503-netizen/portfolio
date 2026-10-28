import { profile } from "@/data/portfolio";
import { Reveal } from "../Reveal";
import { CopyEmail } from "../CopyEmail";
import { ArrowUpRight, Behance, LinkedIn, Phone } from "../icons";

const channels = [
  { label: "LinkedIn", value: "in/yashlohar14", href: profile.linkedin, Icon: LinkedIn },
  { label: "Behance", value: "behance.net/yashlohar14", href: profile.behance, Icon: Behance },
  { label: "Phone", value: profile.phone, href: profile.phoneHref, Icon: Phone },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-4 py-28 sm:px-6 sm:py-36">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/3 size-[40rem] -translate-x-1/2 rounded-full bg-violet/15 blur-[120px]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="mb-6 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            <span className="text-blue-2">05</span>
            <span className="h-px w-8 bg-gradient-to-r from-blue-2 to-red" />
            Contacts
          </p>
          <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1] tracking-tight">
            <span className="text-chrome">Let&apos;s design something</span>{" "}
            <span className="text-signal">people love.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Have a project, a role or just want to talk UX? My inbox is always open.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10 flex justify-center">
          <CopyEmail email={profile.email} />
        </Reveal>

        <Reveal delay={200}>
          <ul className="mx-auto mt-14 grid max-w-3xl gap-3 text-left sm:grid-cols-2">
            {channels.map(({ label, value, href, Icon }) => (
              <li key={label} className="sm:odd:last:col-span-2 sm:odd:last:w-[calc(50%-0.375rem)] sm:odd:last:justify-self-center">
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-surface/80 p-4 backdrop-blur transition-colors hover:border-white/20"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/5 text-fg">
                    <Icon className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs uppercase tracking-[0.18em] text-dim">{label}</span>
                    <span className="block truncate text-fg">{value}</span>
                  </span>
                  <ArrowUpRight className="size-4 text-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
