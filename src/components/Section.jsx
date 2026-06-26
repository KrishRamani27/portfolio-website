import Reveal from "./Reveal.jsx";

export function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28 ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionHeader({ kicker, title, lead }) {
  return (
    <Reveal className="mb-12 lg:mb-16">
      <div className="mono mb-3 text-[0.82rem] font-medium text-[var(--color-accent)]">
        <span className="text-[var(--color-ink-faint)]">// </span>
        {kicker}
      </div>
      <h2 className="text-[clamp(1.9rem,4.5vw,3rem)] font-bold tracking-[-0.025em]">
        {title}
      </h2>
      {lead && (
        <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-[var(--color-ink-mut)]">
          {lead}
        </p>
      )}
    </Reveal>
  );
}
