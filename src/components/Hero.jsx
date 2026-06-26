import { PROFILE } from "../data.js";
import Ext from "./Ext.jsx";
import { GitHubIcon, LinkedInIcon, ArrowUpRight } from "./icons.jsx";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="accent-bloom pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="grid-field pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      {/* fade the grid into the page */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[var(--color-bg)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-x-12 gap-y-14 px-5 pb-20 pt-36 sm:px-8 lg:grid-cols-[1.35fr_1fr] lg:pb-28 lg:pt-44">
        {/* Left: identity */}
        <div>
          <div className="reveal mono mb-7 inline-flex items-center gap-2.5 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)]/60 py-1.5 pl-2.5 pr-3.5 text-[0.74rem] text-[var(--color-ink-mut)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            </span>
            Rutgers CS&nbsp;’28 · Software &amp; ML/AI
          </div>

          <h1
            className="reveal text-[clamp(2.9rem,8vw,5.5rem)] font-extrabold leading-[0.98] tracking-[-0.035em] text-[var(--color-ink)]"
            style={{ animationDelay: "60ms" }}
          >
            Krish
            <br />
            Ramani
          </h1>

          <p
            className="reveal mt-7 max-w-md text-[clamp(1.1rem,2.4vw,1.4rem)] leading-snug text-[var(--color-ink-soft)]"
            style={{ animationDelay: "150ms" }}
          >
            CS junior at Rutgers building{" "}
            <span className="text-[var(--color-accent-bright)]">ML/AI systems</span> and{" "}
            <span className="text-[var(--color-accent-bright)]">full-stack applications</span>.
          </p>

          <div
            className="reveal mt-10 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <Ext
              href={PROFILE.links.github}
              className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--color-accent)] px-5 py-3 text-[0.92rem] font-semibold text-[oklch(0.16_0_0)] transition-[transform,background-color] duration-300 ease-[var(--ease-out-quint)] hover:-translate-y-0.5 hover:bg-[var(--color-accent-bright)]"
            >
              <GitHubIcon className="h-[1.15rem] w-[1.15rem]" />
              GitHub
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Ext>
            <Ext
              href={PROFILE.links.linkedin}
              className="group inline-flex items-center gap-2.5 rounded-full border border-[var(--color-line)] px-5 py-3 text-[0.92rem] font-semibold text-[var(--color-ink)] transition-[transform,border-color,background-color] duration-300 ease-[var(--ease-out-quint)] hover:-translate-y-0.5 hover:border-[var(--color-ink-faint)] hover:bg-[var(--color-surface)]"
            >
              <LinkedInIcon className="h-[1.05rem] w-[1.05rem]" />
              LinkedIn
            </Ext>
            <a
              href="#projects"
              className="link-underline ml-1 inline-flex items-center gap-1.5 px-1 py-2 text-[0.92rem] font-medium text-[var(--color-ink-mut)] transition-colors hover:text-[var(--color-ink)]"
            >
              See the work
            </a>
          </div>
        </div>

        {/* Right: photo placeholder */}
        <div className="reveal justify-self-center lg:justify-self-end" style={{ animationDelay: "180ms" }}>
          <PhotoPlaceholder src={PROFILE.photo} name={PROFILE.name} />
        </div>
      </div>
    </section>
  );
}

function PhotoPlaceholder({ src, name }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <figure className="relative w-[min(78vw,21rem)]">
      {/* accent frame accent */}
      <div
        className="absolute -inset-2 rounded-[1.4rem] bg-gradient-to-br from-[var(--color-accent)]/30 via-transparent to-transparent blur-[2px]"
        aria-hidden="true"
      />
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]">
        {src ? (
          <img src={src} alt={`Portrait of ${name}`} className="h-full w-full object-cover" />
        ) : (
          <div className="grid h-full w-full place-items-center bg-[radial-gradient(120%_120%_at_70%_10%,oklch(0.25_0_0),oklch(0.18_0_0))]">
            <div className="grid-field absolute inset-0 opacity-50" aria-hidden="true" />
            <div className="relative text-center">
              <div className="font-display text-6xl font-bold text-[var(--color-ink-faint)]">
                {initials}
              </div>
              <div className="mono mt-3 text-[0.7rem] uppercase tracking-widest text-[var(--color-ink-faint)]">
                photo · swap later
              </div>
            </div>
          </div>
        )}
        {/* corner ticks — engineering-frame detail */}
        <Corner className="left-2 top-2" />
        <Corner className="right-2 top-2 rotate-90" />
        <Corner className="bottom-2 left-2 -rotate-90" />
        <Corner className="bottom-2 right-2 rotate-180" />
      </div>
    </figure>
  );
}

function Corner({ className }) {
  return (
    <span
      className={`pointer-events-none absolute h-3.5 w-3.5 border-l border-t border-[var(--color-accent)]/70 ${className}`}
      aria-hidden="true"
    />
  );
}
