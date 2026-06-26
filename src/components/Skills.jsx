import { SKILLS } from "../data.js";
import { Section, SectionHeader } from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader kicker="skills" title="The toolkit." />

      <div className="space-y-2">
        {SKILLS.map((cat, i) => (
          <Reveal
            key={cat.group}
            delay={i * 70}
            className="grid grid-cols-1 items-baseline gap-x-10 gap-y-3 border-t border-[var(--color-line-soft)] py-6 sm:grid-cols-[10rem_1fr]"
          >
            <h3 className="mono text-[0.85rem] uppercase tracking-wider text-[var(--color-accent)]">
              {cat.group}
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-[var(--color-line-soft)] bg-[var(--color-surface)]/50 px-3.5 py-1.5 text-[0.92rem] text-[var(--color-ink-soft)] transition-colors duration-200 hover:border-[var(--color-accent)]/50 hover:text-[var(--color-ink)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
