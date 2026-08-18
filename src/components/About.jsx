import { ABOUT } from "../data.js";
import { Section, Label } from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <Section id="about" className="border-t border-[var(--color-rule-soft)]">
      <Reveal>
        <Label>About</Label>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-[1fr_15rem]">
        {/* The essay. No cards, no chrome — just something to read. */}
        <Reveal className="space-y-7">
          {ABOUT.body.map((para, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "max-w-[58ch] text-[clamp(1.28rem,2.6vw,1.6rem)] font-medium leading-[1.45] tracking-[-0.012em] text-[var(--color-ink)]"
                  : "max-w-[64ch] text-[1.05rem] leading-[1.78] text-[var(--color-ink-soft)]"
              }
            >
              {para}
            </p>
          ))}
        </Reveal>

        {/* Margin column — the reference material, set small and quiet. */}
        <Reveal delay={120} className="space-y-9 lg:pt-2">
          <dl className="space-y-0">
            {ABOUT.facts.map((f) => (
              <div
                key={f.k}
                className="flex items-baseline justify-between gap-4 border-b border-[var(--color-rule-soft)] py-2.5"
              >
                <dt className="text-[0.85rem] text-[var(--color-ink-mut)]">{f.k}</dt>
                <dd
                  className={`text-right text-[0.92rem] font-semibold text-[var(--color-ink)] ${
                    f.mono ? "mono text-[var(--color-accent)]" : ""
                  }`}
                >
                  {f.v}
                </dd>
              </div>
            ))}
          </dl>

          <div>
            <Label>Coursework</Label>
            <ul className="mt-3 space-y-1.5">
              {ABOUT.coursework.map((c) => (
                <li key={c} className="text-[0.92rem] leading-snug text-[var(--color-ink-mut)]">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Label>Certification</Label>
            <p className="mt-3 text-[0.95rem] font-semibold leading-snug text-[var(--color-ink)]">
              {ABOUT.certification.name}
            </p>
            <p className="mt-1 text-[0.9rem] leading-snug text-[var(--color-ink-mut)]">
              {ABOUT.certification.issuer}, {ABOUT.certification.when}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
