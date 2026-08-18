import { PROFILE, HERO } from "../data.js";
import Ext from "./Ext.jsx";
import { GitHubIcon, LinkedInIcon } from "./icons.jsx";

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div
        className="dot-grid dot-fade pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[88svh] max-w-[84rem] flex-col justify-between px-6 pb-16 pt-28 sm:px-10">
        {/* Header strip: reads like the top of a spec sheet */}
        <div className="reveal flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-b border-[var(--color-rule)] pb-3">
          <p className="label">Rutgers University / CS / 2028</p>
          <p className="mono flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
            <span className="h-1.5 w-1.5 bg-[var(--color-accent)]" />
            open to Summer 2027
          </p>
        </div>

        <div className="py-9">
          <h1
            className="reveal text-[clamp(2.6rem,11.5vw,8.2rem)] leading-[0.9] tracking-[-0.06em]"
            style={{ animationDelay: "60ms" }}
          >
            KRISH
            <br />
            RAMANI
            <span className="text-[var(--color-accent)]">_</span>
          </h1>

          {/* Recruiters scan for seconds. Say the role outright rather than
              making them infer it from the prose. */}
          <p
            className="reveal mono mt-5 text-[clamp(0.95rem,2vw,1.25rem)] tracking-[-0.01em] text-[var(--color-ink-soft)]"
            style={{ animationDelay: "110ms" }}
          >
            {HERO.role}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div className="reveal" style={{ animationDelay: "150ms" }}>
            <p className="max-w-xl text-[clamp(1.05rem,1.9vw,1.24rem)] leading-[1.6] text-[var(--color-ink-soft)]">
              {HERO.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href="#projects"
                className="link-underline mono text-[0.92rem] font-semibold text-[var(--color-ink)]"
              >
                ./see-the-work
              </a>
              <Ext
                href={PROFILE.links.github}
                className="link-draw mono inline-flex items-center gap-2 text-[0.92rem] text-[var(--color-ink-mut)] transition-colors hover:text-[var(--color-ink)]"
              >
                <GitHubIcon className="h-[0.95rem] w-[0.95rem]" />
                github
              </Ext>
              <Ext
                href={PROFILE.links.linkedin}
                className="link-draw mono inline-flex items-center gap-2 text-[0.92rem] text-[var(--color-ink-mut)] transition-colors hover:text-[var(--color-ink)]"
              >
                <LinkedInIcon className="h-[0.9rem] w-[0.9rem]" />
                linkedin
              </Ext>
              <Ext
                href={`mailto:${PROFILE.links.email}`}
                className="link-draw mono text-[0.92rem] text-[var(--color-ink-mut)] transition-colors hover:text-[var(--color-ink)]"
              >
                email
              </Ext>
              {PROFILE.links.resume && (
                <Ext
                  href={PROFILE.links.resume}
                  className="link-draw mono text-[0.92rem] text-[var(--color-ink-mut)] transition-colors hover:text-[var(--color-ink)]"
                >
                  resume.pdf
                </Ext>
              )}
            </div>
          </div>

          {/* Status readout replaces the handwritten aside */}
          <dl
            className="reveal mono border-t border-[var(--color-ink)] text-[0.76rem]"
            style={{ animationDelay: "240ms" }}
          >
            {HERO.stats.map((s) => (
              <div
                key={s.k}
                className="flex items-baseline justify-between gap-4 border-b border-[var(--color-rule-soft)] py-2"
              >
                <dt className="uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">
                  {s.k}
                </dt>
                <dd
                  className={
                    s.signal
                      ? "text-right font-semibold text-[var(--color-ink)] underline decoration-1 underline-offset-4"
                      : "text-right text-[var(--color-ink-soft)]"
                  }
                >
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="relative mx-auto max-w-[84rem] px-6 sm:px-10">
        <div
          className="reveal grid grid-cols-1 items-end gap-x-12 gap-y-5 border-t-2 border-[var(--color-ink)] pt-6 sm:grid-cols-[1fr_auto]"
          style={{ animationDelay: "320ms" }}
        >
          <p className="max-w-2xl text-[clamp(1.02rem,2vw,1.2rem)] leading-[1.5] text-[var(--color-ink-soft)]">
            {HERO.contents}
          </p>
          <a
            href="#projects"
            className="link-underline mono shrink-0 text-[0.92rem] font-semibold text-[var(--color-ink)]"
          >
            start with the work ↓
          </a>
        </div>
      </div>
    </section>
  );
}
