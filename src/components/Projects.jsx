import { PROJECTS } from "../data.js";
import { Section, Label } from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import Ext from "./Ext.jsx";
import CountUp from "./CountUp.jsx";
import { GitHubIcon, ArrowUpRight } from "./icons.jsx";

export default function Projects() {
  return (
    <Section id="projects">
      <Reveal>
        <h2 className="max-w-2xl text-[clamp(2.1rem,5vw,3.4rem)]">Projects.</h2>
        <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-[var(--color-ink-mut)]">
          Each one is a complete application: trained model, API, frontend, and a URL you
          can open right now. I've noted where each got difficult, because that's usually
          more interesting than the parts that went smoothly.
        </p>
      </Reveal>

      <div className="mt-20">
        {PROJECTS.map((p) => (
          <Reveal key={p.name}>
            <ProjectEntry project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectEntry({ project }) {
  const { name, blurb, when, description, hard, metrics, stack, links, status } = project;

  return (
    <article className="group/row relative pb-16 pt-8">
      {/* The top hairline is its own element so it can both draw in on reveal
          and warm to the accent when the row is hovered. */}
      <span
        aria-hidden="true"
        className="rule-draw row-edge absolute inset-x-0 top-0 h-px bg-[var(--color-rule)]"
      />

      <div className="flex items-baseline justify-between gap-6">
        <span className="mono text-[0.76rem] text-[var(--color-ink-faint)]">{when}</span>
        <span className="mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">
          {status === "live" ? "deployed" : "in progress"}
        </span>
      </div>

      <h3 className="row-name mt-5 text-[clamp(2.3rem,6.2vw,4.1rem)] font-semibold leading-[0.94]">
        {name}
      </h3>
      <p className="row-name mono mt-3 text-[0.92rem] tracking-[-0.01em] text-[var(--color-ink-faint)]">
        <span className="text-[var(--color-ink-faint)]">// </span>
        {blurb.toLowerCase()}
      </p>

      <div className="mt-11 grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="max-w-[58ch] text-[1.06rem] leading-[1.78] text-[var(--color-ink-soft)]">
            {description}
          </p>

          {hard && (
            <aside className="mt-8 max-w-[56ch] border-l-2 border-[var(--color-accent)] pl-5">
              <Label className="!text-[var(--color-accent)]">Where it got hard</Label>
              <p className="mt-2 text-[1rem] leading-[1.72] text-[var(--color-ink-soft)]">
                {hard}
              </p>
            </aside>
          )}

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3">
            {status === "live" && links.live && (
              <Ext
                href={links.live}
                className="link-underline group/btn inline-flex items-center gap-1.5 text-[1rem] font-semibold text-[var(--color-ink)]"
              >
                Open it
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Ext>
            )}
            {links.repo && (
              <Ext
                href={links.repo}
                className="link-draw inline-flex items-center gap-2 text-[1rem] text-[var(--color-ink-mut)] transition-colors hover:text-[var(--color-ink)]"
              >
                <GitHubIcon className="h-[0.95rem] w-[0.95rem]" />
                Read the code
              </Ext>
            )}
          </div>
        </div>

        {/* Spec table. Reads like the back page of a datasheet rather than
            three little boxes in a row. */}
        <div>
          <dl className="mono border-l-2 border-[var(--color-rule)] pl-5 text-[0.88rem]">
            {metrics.map((m) => {
              const numeric = /^[\d.]/.test(m.value);
              return (
                <div key={m.label} className="flex flex-wrap items-baseline gap-x-2 py-1.5">
                  <dt className="text-[var(--color-ink-mut)]">
                    {m.label.replace(/[\s-]+/g, "_")}
                  </dt>
                  <span aria-hidden="true" className="text-[var(--color-ink-faint)]">
                    =
                  </span>
                  <dd
                    className={
                      numeric
                        ? "figure font-semibold text-[var(--color-ink)]"
                        : "figure text-[var(--color-ink-soft)]"
                    }
                  >
                    {numeric ? <CountUp value={m.value} /> : `"${m.value}"`}
                  </dd>
                </div>
              );
            })}
          </dl>

          <ul className="mono mt-7 flex flex-wrap gap-x-2 gap-y-1.5 text-[0.74rem] text-[var(--color-ink-faint)]">
            {stack.map((tech) => (
              <li
                key={tech}
                className="border border-[var(--color-rule-soft)] px-2 py-0.5 text-[var(--color-ink-mut)]"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
