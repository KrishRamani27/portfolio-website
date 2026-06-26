import { NOW } from "../data.js";
import { Section, SectionHeader } from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Now() {
  return (
    <Section id="now">
      <SectionHeader kicker="now" title="Currently working on." />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {NOW.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 100}
            className="rounded-2xl border border-[var(--color-line-soft)] bg-[var(--color-surface)]/40 p-7"
          >
            <span className="mono text-[0.78rem] text-[var(--color-accent-bright)]">
              {String(i + 1).padStart(2, "0")} —
            </span>
            <h3 className="mt-3 text-[1.3rem] font-semibold tracking-[-0.015em] text-[var(--color-ink)]">
              {item.title}
            </h3>
            <p className="mt-2 text-[1rem] leading-relaxed text-[var(--color-ink-mut)]">
              {item.detail}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
