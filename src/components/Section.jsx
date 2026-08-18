export function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-5xl scroll-mt-20 px-6 py-20 sm:px-8 lg:py-24 ${className}`}
    >
      {children}
    </section>
  );
}

/** Small caps eyebrow. Sections style their own headings beyond this,
 *  deliberately — a uniform header block is what made every section
 *  read like the same template. */
export function Label({ children, className = "" }) {
  return <p className={`label ${className}`}>{children}</p>;
}
