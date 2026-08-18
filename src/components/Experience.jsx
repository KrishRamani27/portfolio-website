import { EXPERIENCE } from "../data.js";
import { Section, Label } from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <Section id="experience">
      <Reveal>
        <Label>Experience</Label>
        <h2 className="mt-5 max-w-2xl text-[clamp(2rem,4.5vw,3.1rem)] font-semibold">
          Research, teaching, and one marketing detour.
        </h2>
      </Reveal>

      {/* Dates live in the margin, the way a printed CV sets them.
          No drawn-on timeline: the hairlines already do that job. */}
      <ol className="mt-16">
        {EXPERIENCE.map((e) => (
          <Reveal key={e.role} as="li" className="block">
            <div className="grid grid-cols-1 gap-x-12 gap-y-3 border-t border-[var(--color-rule)] py-10 sm:grid-cols-[8.5rem_1fr]">
              <div className="sm:pt-1">
                <p
                  className={`mono text-[0.8rem] ${
                    e.incoming
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-ink-faint)]"
                  }`}
                >
                  {e.when}
                </p>
                {e.incoming && (
                  <p className="mono mt-1 text-[0.72rem] uppercase tracking-wider text-[var(--color-ink-faint)]">
                    incoming
                  </p>
                )}
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-[1.32rem] font-semibold leading-snug">{e.role}</h3>
                  {e.honor && (
                    <span className="mono text-[0.76rem] text-[var(--color-accent)]">
                      {e.honor}
                    </span>
                  )}
                </div>

                <p className="mt-1.5 text-[0.98rem] text-[var(--color-ink-mut)]">
                  {e.org}
                  {e.location && (
                    <span className="text-[var(--color-ink-faint)]"> · {e.location}</span>
                  )}
                </p>

                {e.detail && (
                  <p className="mt-4 max-w-[62ch] text-[1.03rem] leading-[1.75] text-[var(--color-ink-soft)]">
                    {e.detail}
                  </p>
                )}

                {e.tags && (
                  <ul className="mono mt-4 flex flex-wrap gap-x-2 gap-y-1.5 text-[0.74rem]">
                    {e.tags.map((t) => (
                      <li
                        key={t}
                        className="border border-[var(--color-rule-soft)] px-2 py-0.5 text-[var(--color-ink-mut)]"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
