import { useEffect, useRef, useState } from "react";

/** Animates the leading number inside a metric string and leaves the rest of
 *  the text alone: "n=918" counts the 918, "24 / 25" counts the 24, and
 *  "Docker, no network" is passed straight through untouched. */
const LEADING_NUMBER = /^(\D*?)(\d+(?:\.\d+)?)(.*)$/s;

export default function CountUp({ value, className = "" }) {
  const match = LEADING_NUMBER.exec(value);
  const target = match ? parseFloat(match[2]) : null;
  const decimals = match?.[2].includes(".") ? match[2].split(".")[1].length : 0;

  const ref = useRef(null);
  const [shown, setShown] = useState(target);

  useEffect(() => {
    if (target === null) return;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setShown(0);
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - start) / 850);
          setShown(target * (1 - Math.pow(1 - p, 4)));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [target]);

  if (target === null) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      {match[1]}
      {shown.toFixed(decimals)}
      {match[3]}
    </span>
  );
}
