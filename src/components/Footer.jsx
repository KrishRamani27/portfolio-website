import { PROFILE } from "../data.js";
import Ext from "./Ext.jsx";
import { GitHubIcon, LinkedInIcon, ArrowUpRight } from "./icons.jsx";

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-[var(--color-line-soft)]">
      <div className="accent-bloom pointer-events-none absolute inset-x-0 bottom-0 top-auto h-64 rotate-180 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
          <div>
            <a
              href="#top"
              className="font-display text-[clamp(1.8rem,5vw,2.6rem)] font-bold tracking-[-0.025em] text-[var(--color-ink)]"
            >
              Let's build something.
            </a>
            <p className="mt-3 max-w-sm text-[0.98rem] text-[var(--color-ink-mut)]">
              Open to ML/AI engineering internships for Summer 2027.
            </p>
            <Ext
              href={`mailto:${PROFILE.links.email}`}
              className="link-underline mono mt-5 inline-block text-[0.95rem] text-[var(--color-accent-bright)]"
            >
              {PROFILE.links.email}
            </Ext>
          </div>

          <div className="flex items-center gap-3">
            <Ext
              href={PROFILE.links.github}
              className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-4 py-2.5 text-[0.88rem] font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink-faint)] hover:bg-[var(--color-surface)]"
            >
              <GitHubIcon className="h-4 w-4" /> GitHub
              <ArrowUpRight className="h-3.5 w-3.5 text-[var(--color-ink-mut)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Ext>
            <Ext
              href={PROFILE.links.linkedin}
              className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-4 py-2.5 text-[0.88rem] font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink-faint)] hover:bg-[var(--color-surface)]"
            >
              <LinkedInIcon className="h-4 w-4" /> LinkedIn
              <ArrowUpRight className="h-3.5 w-3.5 text-[var(--color-ink-mut)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Ext>
          </div>
        </div>

        <div className="mono mt-14 flex flex-col gap-2 border-t border-[var(--color-line-soft)] pt-6 text-[0.76rem] text-[var(--color-ink-faint)] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Krish Ramani</span>
          <span>Rutgers University · CS ’28</span>
        </div>
      </div>
    </footer>
  );
}
