import { SKILLS } from "../data.js";
import { Section, Label, Gutter } from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  return (
    <Section id="skills">
      <Reveal>
        <Gutter>
          <Label className="lg:pt-3">Toolkit</Label>
          <h2 className="text-[clamp(1.9rem,4.4vw,3rem)]">What I reach for.</h2>
        </Gutter>
      </Reveal>

      <div className="mt-12">
        {SKILLS.map((cat, i) => (
          <Reveal
            key={cat.group}
            delay={i * 60}
            className="grid grid-cols-1 gap-x-12 gap-y-3 border-t border-[var(--color-rule)] py-6 lg:grid-cols-[13rem_minmax(0,1fr)]"
          >
            <h3 className="label lg:pt-2">{cat.group}</h3>

            <ul className="flex flex-wrap items-baseline gap-x-2.5 gap-y-2 text-[1.02rem] text-[var(--color-ink-soft)]">
              {cat.items.map((item, j) => (
                <li key={item} className="flex items-baseline">
                  {item}
                  {j < cat.items.length - 1 && (
                    <span aria-hidden="true" className="ml-2.5 text-[var(--color-ink-faint)]">
                      ·
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
