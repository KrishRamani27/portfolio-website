import { useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered reveal. The hidden state is applied only after JS confirms
 * IntersectionObserver + motion is allowed, so the default render is always
 * visible (no-JS, reduced-motion, and headless captures never go blank).
 */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    setArmed(true);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = [armed ? "reveal-init" : "", shown ? "reveal-in" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={cls} style={shown ? { transitionDelay: `${delay}ms` } : undefined} {...rest}>
      {children}
    </Tag>
  );
}
