import { useEffect, useRef, useState } from "react";
import { EXPERIENCE } from "../data.js";
import { Section, SectionHeader } from "./Section.jsx";

export default function Experience() {
  const listRef = useRef(null);
  const nodeRefs = useRef([]);
  const [fill, setFill] = useState(0);
  const [active, setActive] = useState(() => EXPERIENCE.map(() => false));

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    // Reduced motion / no-JS safety: show the line fully drawn and every node
    // lit. The text content is never gated on any of this.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setFill(list.getBoundingClientRect().height);
      setActive(EXPERIENCE.map(() => true));
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const lr = list.getBoundingClientRect();
      const playhead = window.innerHeight * 0.62; // the line "draws" down to here
      setFill(Math.max(0, Math.min(lr.height, playhead - lr.top)));
      setActive(
        nodeRefs.current.map((n) => {
          if (!n) return false;
          const r = n.getBoundingClientRect();
          return r.top + r.height / 2 <= playhead;
        })
      );
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <Section id="experience">
      <SectionHeader kicker="experience" title="Where I've shown up." />

      <ol ref={listRef} className="relative">
        {/* Rail track + the azure progress line that fills on scroll */}
        <span
          aria-hidden="true"
          className="absolute left-4 top-3 bottom-3 w-px bg-[var(--color-line)]"
        />
        <span
          aria-hidden="true"
          className="absolute left-4 top-3 w-px bg-[var(--color-accent)]"
          style={{
            height: `max(0px, ${fill - 12}px)`,
            transition: "height 0.12s linear",
          }}
        />

        {EXPERIENCE.map((e, i) => (
          <li
            key={e.role}
            className="grid grid-cols-[2rem_1fr] gap-x-4 pb-10 last:pb-1 sm:gap-x-6"
          >
            {/* Node */}
            <div className="flex justify-center pt-1">
              <span
                ref={(el) => (nodeRefs.current[i] = el)}
                aria-hidden="true"
                className={`grid h-7 w-7 place-items-center rounded-full border transition-all duration-500 ease-[var(--ease-out-quint)] ${
                  active[i]
                    ? "scale-100 border-[var(--color-accent)] bg-[var(--color-accent-soft)]"
                    : "scale-90 border-[var(--color-line)] bg-[var(--color-bg)]"
                }`}
              >
                <span
                  className={`rounded-full transition-all duration-500 ${
                    e.incoming
                      ? `h-2.5 w-2.5 border-[1.5px] bg-transparent ${
                          active[i]
                            ? "border-[var(--color-accent)]"
                            : "border-[var(--color-ink-faint)]"
                        }`
                      : `h-2 w-2 ${
                          active[i]
                            ? "bg-[var(--color-accent)]"
                            : "bg-[var(--color-ink-faint)]"
                        }`
                  }`}
                />
              </span>
            </div>

            {/* Entry */}
            <div className="min-w-0 pt-0.5">
              {e.when && (
                <div
                  className={`mono mb-2 text-[0.76rem] ${
                    e.incoming
                      ? "text-[var(--color-accent-bright)]"
                      : "text-[var(--color-ink-faint)]"
                  }`}
                >
                  {e.when}
                </div>
              )}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <h3 className="text-[1.2rem] font-semibold leading-snug tracking-[-0.015em] text-[var(--color-ink)]">
                  {e.role}
                </h3>
                {e.honor && (
                  <span className="mono inline-flex items-center gap-1 rounded-full bg-[var(--color-accent-soft)] px-2.5 py-0.5 text-[0.7rem] text-[var(--color-accent-bright)]">
                    <span aria-hidden="true">★</span>
                    {e.honor}
                  </span>
                )}
              </div>
              <p className="mt-1 text-[0.95rem] text-[var(--color-ink-mut)]">
                {e.org}
                {e.location && (
                  <span className="text-[var(--color-ink-faint)]"> · {e.location}</span>
                )}
              </p>
              {e.detail && (
                <p className="mt-3 max-w-[58ch] text-[0.96rem] leading-relaxed text-[var(--color-ink-soft)]">
                  {e.detail}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
