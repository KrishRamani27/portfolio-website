import { PROFILE } from "../data.js";
import Ext from "./Ext.jsx";
import { GitHubIcon, LinkedInIcon } from "./icons.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-ink)] bg-[var(--color-bg-2)]">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:py-24">
        <h2 className="max-w-2xl text-[clamp(2rem,5vw,3.4rem)] leading-[1.08]">
          Let's connect.
        </h2>

        <p className="mt-6 max-w-lg text-[1.06rem] leading-relaxed text-[var(--color-ink-soft)]">
          I'm looking for a machine learning or AI engineering internship for Summer 2027.
          Email is the fastest way to reach me and I answer quickly.
        </p>

        <Ext
          href={`mailto:${PROFILE.links.email}`}
          className="link-underline mt-8 inline-block font-display text-[clamp(1.35rem,3.5vw,2rem)] font-semibold tracking-[-0.02em] text-[var(--color-ink)]"
        >
          {PROFILE.links.email}
        </Ext>

        <p className="mt-7 max-w-lg text-[1.06rem] leading-relaxed text-[var(--color-ink-soft)]">
          And if you're just building something you're excited about and want someone to
          build it with, let's connect anyway.
        </p>

        <div className="mt-16 flex flex-col gap-5 border-t border-[var(--color-rule)] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="mono text-[0.78rem] text-[var(--color-ink-faint)]">
            © {new Date().getFullYear()} Krish Ramani · Rutgers University
          </p>

          <div className="flex items-center gap-7">
            <Ext
              href={PROFILE.links.github}
              className="link-draw inline-flex items-center gap-2 text-[0.94rem] text-[var(--color-ink-mut)] transition-colors hover:text-[var(--color-ink)]"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </Ext>
            <Ext
              href={PROFILE.links.linkedin}
              className="link-draw inline-flex items-center gap-2 text-[0.94rem] text-[var(--color-ink-mut)] transition-colors hover:text-[var(--color-ink)]"
            >
              <LinkedInIcon className="h-[0.95rem] w-[0.95rem]" />
              LinkedIn
            </Ext>
          </div>
        </div>
      </div>
    </footer>
  );
}
