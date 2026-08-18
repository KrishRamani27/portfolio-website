import { useEffect, useState } from "react";
import { NAV, PROFILE } from "../data.js";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const span = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(span > 0 ? Math.min(1, window.scrollY / span) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

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
      className={`fixed inset-x-0 top-0 z-[200] transition-colors duration-300 ${
        scrolled
          ? "border-b border-[var(--color-rule)] bg-[var(--color-bg)]/92 backdrop-blur-[6px]"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[4.25rem] max-w-5xl items-center justify-between px-6 sm:px-8">
        <a
          href="#top"
          className="font-display text-[1.08rem] font-semibold tracking-[-0.02em] text-[var(--color-ink)]"
        >
          Krish Ramani
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative py-1 text-[0.94rem] transition-colors duration-200 ${
                active === item.id
                  ? "text-[var(--color-ink)]"
                  : "text-[var(--color-ink-mut)] hover:text-[var(--color-ink)]"
              }`}
            >
              {item.label}
              {active === item.id && (
                <span className="absolute inset-x-0 -bottom-0.5 h-px bg-[var(--color-accent)]" />
              )}
            </a>
          ))}
          <a
            href={`mailto:${PROFILE.links.email}`}
            className="link-underline text-[0.94rem] font-semibold text-[var(--color-ink)]"
          >
            Get in touch
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] text-[var(--color-ink)] md:hidden"
        >
          <span
            className={`h-[1.5px] w-5 bg-current transition-transform duration-300 ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-5 bg-current transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-5 bg-current transition-transform duration-300 ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-[var(--color-rule)] bg-[var(--color-bg)] transition-[max-height] duration-300 ease-[var(--ease-out-quint)] md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-transparent"
        }`}
      >
        <div className="flex flex-col px-6 py-2">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-[var(--color-rule-soft)] py-3.5 text-[1rem] text-[var(--color-ink-soft)] last:border-b-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${PROFILE.links.email}`}
            onClick={() => setOpen(false)}
            className="py-3.5 text-[1rem] font-semibold text-[var(--color-accent)]"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* How far down the page you are. Two pixels of information. */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-[var(--color-accent)]"
        style={{ transform: `scaleX(${progress})` }}
      />
    </header>
  );
}
