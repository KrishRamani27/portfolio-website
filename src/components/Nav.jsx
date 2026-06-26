import { useEffect, useState } from "react";
import { NAV, PROFILE } from "../data.js";
import Ext from "./Ext.jsx";
import { GitHubIcon, LinkedInIcon } from "./icons.jsx";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[200] transition-colors duration-500 ${
        scrolled
          ? "border-b border-[var(--color-line-soft)] bg-[oklch(0.16_0_0/0.82)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-display text-[0.98rem] font-bold tracking-tight text-[var(--color-ink)]"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md bg-[var(--color-accent)] font-mono text-[0.72rem] font-bold tracking-tight text-[oklch(0.16_0_0)] transition-transform duration-300 group-hover:-rotate-6">
            KR
          </span>
          <span>Krish Ramani</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative rounded-full px-3.5 py-2 text-[0.86rem] font-medium transition-colors duration-200 ${
                active === item.id
                  ? "text-[var(--color-ink)]"
                  : "text-[var(--color-ink-mut)] hover:text-[var(--color-ink)]"
              }`}
            >
              {item.label}
              {active === item.id && (
                <span className="absolute inset-x-3.5 -bottom-0.5 h-px bg-[var(--color-accent)]" />
              )}
            </a>
          ))}
          <div className="ml-2 flex items-center gap-1 border-l border-[var(--color-line)] pl-3">
            <Ext
              href={PROFILE.links.github}
              aria-label="GitHub"
              className="grid h-9 w-9 place-items-center rounded-full text-[var(--color-ink-mut)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-ink)]"
            >
              <GitHubIcon className="h-[1.05rem] w-[1.05rem]" />
            </Ext>
            <Ext
              href={PROFILE.links.linkedin}
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-full text-[var(--color-ink-mut)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-ink)]"
            >
              <LinkedInIcon className="h-[1.05rem] w-[1.05rem]" />
            </Ext>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-lg text-[var(--color-ink)] md:hidden"
        >
          <span className={`h-[2px] w-5 bg-current transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-[2px] w-5 bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`h-[2px] w-5 bg-current transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`overflow-hidden border-t border-[var(--color-line-soft)] bg-[oklch(0.14_0_0/0.96)] backdrop-blur-xl transition-[max-height] duration-400 ease-[var(--ease-out-quint)] md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-transparent"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-[var(--color-ink-soft)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-ink)]"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 flex items-center gap-2 border-t border-[var(--color-line)] px-3 pt-4">
            <Ext href={PROFILE.links.github} className="flex items-center gap-2 text-[0.9rem] text-[var(--color-ink-mut)]">
              <GitHubIcon className="h-4 w-4" /> GitHub
            </Ext>
            <Ext href={PROFILE.links.linkedin} className="ml-4 flex items-center gap-2 text-[0.9rem] text-[var(--color-ink-mut)]">
              <LinkedInIcon className="h-4 w-4" /> LinkedIn
            </Ext>
          </div>
        </div>
      </div>
    </header>
  );
}
