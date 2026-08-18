import { NOW } from "../data.js";
import { Section, Label } from "./Section.jsx";
import Reveal from "./Reveal.jsx";

/** Deliberately the only tinted band on the page. This section is the one
 *  that goes stale, so it should look like a note pinned to the page
 *  rather than another section of the document. */
export default function Now() {
  return (
    <div className="border-y border-[var(--color-rule)] bg-[var(--color-bg-2)]">
      <Section id="now" className="!py-20 lg:!py-24">
        <Reveal className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <h2 className="text-[clamp(1.75rem,4vw,2.6rem)] font-semibold">
            What I'm stuck on this week.
          </h2>
          <p className="mono text-[0.78rem] text-[var(--color-ink-faint)]">
            updated {NOW.updated}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-3">
          {NOW.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div className="border-t border-[var(--color-ink)] pt-5">
                <h3 className="text-[1.18rem] font-semibold leading-snug">{item.title}</h3>
                <p className="mt-3 text-[1rem] leading-[1.7] text-[var(--color-ink-soft)]">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
