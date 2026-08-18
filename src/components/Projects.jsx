import { PROJECTS } from "../data.js";
import { Section, Label, Gutter } from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import Ext from "./Ext.jsx";
import CountUp from "./CountUp.jsx";
import { GitHubIcon, ArrowUpRight } from "./icons.jsx";

export default function Projects() {
  return (
    <Section id="projects">
      <Reveal>
        <Gutter>
          <Label className="lg:pt-3">Selected work</Label>
          <div>
            <h2 className="text-[clamp(2.1rem,5vw,3.4rem)]">Projects.</h2>
            <p className="mt-4 max-w-[58ch] text-[1.05rem] leading-relaxed text-[var(--color-ink-mut)]">
              Each one is a complete application: trained model, API, frontend, and a URL
              you can open right now. I've noted where each got difficult, because that's
              usually more interesting than the parts that went smoothly.
            </p>
          </div>
        </Gutter>
      </Reveal>

      <div className="mt-16">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name}>
            <ProjectEntry project={p} index={i + 1} total={PROJECTS.length} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectEntry({ project, index, total }) {
  const { name, blurb, when, description, hard, metrics, stack, links, status } = project;

  return (
    <article className="group/row border-t border-[var(--color-rule)] py-12 first:border-t-2 first:border-[var(--color-ink)]">
      {/* Three tracks across the full frame: margin metadata, the writing,
          and the numbers. Nothing is left stranded in dead space. */}
      <div className="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-[13rem_minmax(0,1fr)_19rem]">
        <div className="mono flex flex-row justify-between gap-4 text-[0.74rem] text-[var(--color-ink-faint)] lg:flex-col lg:justify-start lg:gap-2 lg:pt-3">
          <span>
            {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span>{when}</span>
          <span className="uppercase tracking-[0.16em]">
            {status === "live" ? "deployed" : "in progress"}
          </span>
        </div>

        <div>
          <h3 className="row-name text-[clamp(1.8rem,3.6vw,2.5rem)]">{name}</h3>
          <p className="row-name mono mt-3 text-[0.9rem] tracking-[-0.01em] text-[var(--color-ink-faint)]">
            <span className="text-[var(--color-ink-faint)]">// </span>
            {blurb.toLowerCase()}
          </p>

          <p className="mt-6 max-w-[62ch] text-[1.05rem] leading-[1.75] text-[var(--color-ink-soft)]">
            {description}
          </p>

          {hard && (
            <aside className="mt-7 max-w-[60ch] border-l-2 border-[var(--color-ink)] pl-5">
              <Label>Where it got hard</Label>
              <p className="mt-2 text-[1rem] leading-[1.7] text-[var(--color-ink-soft)]">
                {hard}
              </p>
            </aside>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
            {status === "live" && links.live ? (
              <Ext
                href={links.live}
                className="link-underline group/btn mono inline-flex items-center gap-1.5 text-[0.94rem] font-semibold text-[var(--color-ink)]"
              >
                open it
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Ext>
            ) : (
              <span className="mono text-[0.86rem] text-[var(--color-ink-faint)]">
                not deployed yet
              </span>
            )}

            {links.repo && (
              <Ext
                href={links.repo}
                className="link-draw mono inline-flex items-center gap-2 text-[0.94rem] text-[var(--color-ink-mut)] transition-colors hover:text-[var(--color-ink)]"
              >
                <GitHubIcon className="h-[0.9rem] w-[0.9rem]" />
                source
              </Ext>
            )}
          </div>
        </div>

        <div className="lg:pt-3">
          <dl className="mono border-l-2 border-[var(--color-rule)] pl-5 text-[0.86rem]">
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

          <ul className="mono mt-6 flex flex-wrap gap-x-2 gap-y-1.5 text-[0.72rem]">
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
