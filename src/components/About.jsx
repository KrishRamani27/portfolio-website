import { ABOUT } from "../data.js";
import { Section, SectionHeader } from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <Section id="about">
      <SectionHeader kicker="about" title="I build complete systems, not just models." />

      <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-[1.5fr_1fr]">
        <Reveal className="space-y-6">
          {ABOUT.body.map((para, i) => (
            <p
              key={i}
              className="max-w-[68ch] text-[1.12rem] leading-[1.75] text-[var(--color-ink-soft)]"
            >
              {para}
            </p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <dl className="divide-y divide-[var(--color-line-soft)] border-y border-[var(--color-line-soft)]">
            {ABOUT.facts.map((f) => (
              <div key={f.k} className="flex items-baseline justify-between gap-4 py-4">
                <dt className="text-[0.92rem] text-[var(--color-ink-mut)]">{f.k}</dt>
                <dd
                  className={`text-right font-semibold text-[var(--color-ink)] ${
                    f.mono ? "mono text-[var(--color-accent-bright)]" : ""
                  }`}
                >
                  {f.v}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
