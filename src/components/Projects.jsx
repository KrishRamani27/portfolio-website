import { PROJECTS } from "../data.js";
import { Section, SectionHeader } from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import Ext from "./Ext.jsx";
import { GitHubIcon, ArrowUpRight, CodeIcon } from "./icons.jsx";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        kicker="projects"
        title="Things I've built and shipped."
        lead="Each one is a complete application — backend, frontend, system design, and real deployment, not a notebook. ML is the specialty; production engineering is the constant."
      />

      <div className="flex flex-col gap-5">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={i * 90}>
            <ProjectRow project={p} index={i + 1} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectRow({ project, index }) {
  const { name, blurb, description, metrics, stack, deployment, links, status } = project;
  const live = status === "live";

  return (
    <article className="group relative grid grid-cols-1 gap-x-12 gap-y-6 rounded-2xl border border-[var(--color-line-soft)] bg-[var(--color-surface)]/40 p-6 transition-[border-color,background-color] duration-400 ease-[var(--ease-out-quint)] hover:border-[var(--color-line)] hover:bg-[var(--color-surface)]/70 sm:p-8 lg:grid-cols-[1fr_1.4fr]">
      {/* Left rail: identity */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <span className="mono text-[0.8rem] text-[var(--color-ink-faint)]">
            {String(index).padStart(2, "0")}
          </span>
          <StatusBadge live={live} />
        </div>
        <h3 className="mt-4 text-[1.7rem] font-bold tracking-[-0.02em] text-[var(--color-ink)]">
          {name}
        </h3>
        <p className="mt-1 text-[0.98rem] text-[var(--color-accent-bright)]">{blurb}</p>

        {/* Spec strip — real metrics, mono */}
        <dl className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-[var(--color-line-soft)] bg-[var(--color-line-soft)] sm:grid-cols-1">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="flex items-baseline justify-between gap-3 bg-[var(--color-bg)] px-3.5 py-2.5"
            >
              <dt className="mono text-[0.72rem] uppercase tracking-wider text-[var(--color-ink-faint)]">
                {m.label}
              </dt>
              <dd className="mono text-right text-[0.84rem] font-medium text-[var(--color-ink-soft)]">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Right: narrative + stack + links */}
      <div className="flex flex-col">
        <p className="max-w-[60ch] text-[1.05rem] leading-[1.72] text-[var(--color-ink-soft)]">
          {description}
        </p>

        <p className="mono mt-5 text-[0.78rem] leading-relaxed text-[var(--color-ink-mut)]">
          {deployment}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {stack.map((s) => (
            <li
              key={s}
              className="rounded-md border border-[var(--color-line-soft)] bg-[var(--color-bg)] px-2.5 py-1 text-[0.78rem] text-[var(--color-ink-mut)]"
            >
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
          {links.live ? (
            <Ext
              href={links.live}
              className="group/btn inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-2 text-[0.85rem] font-semibold text-[oklch(0.16_0_0)] transition-[transform,background-color] duration-300 ease-[var(--ease-out-quint)] hover:-translate-y-0.5 hover:bg-[var(--color-accent-bright)]"
            >
              Live demo
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Ext>
          ) : (
            <span className="mono inline-flex items-center gap-2 rounded-full border border-dashed border-[var(--color-line)] px-4 py-2 text-[0.78rem] text-[var(--color-ink-faint)]">
              <CodeIcon className="h-3.5 w-3.5" />
              demo coming soon
            </span>
          )}

          {links.repo ? (
            <Ext
              href={links.repo}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-4 py-2 text-[0.85rem] font-semibold text-[var(--color-ink)] transition-colors duration-300 hover:border-[var(--color-ink-faint)] hover:bg-[var(--color-surface)]"
            >
              <GitHubIcon className="h-4 w-4" />
              Source
            </Ext>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function StatusBadge({ live }) {
  return (
    <span
      className={`mono inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.68rem] uppercase tracking-wider ${
        live
          ? "bg-[var(--color-accent-glow)] text-[var(--color-accent-bright)]"
          : "bg-[var(--color-surface-2)] text-[var(--color-ink-mut)]"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          live ? "bg-[var(--color-accent)]" : "bg-[var(--color-ink-faint)]"
        }`}
      />
      {live ? "Live" : "In progress"}
    </span>
  );
}
