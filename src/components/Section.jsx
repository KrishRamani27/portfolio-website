export function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-[84rem] scroll-mt-20 px-6 py-20 sm:px-10 lg:py-24 ${className}`}
    >
      {children}
    </section>
  );
}

/** The page's structural grid: a fixed left margin for labels and metadata,
 *  with content filling everything to its right. Keeps the wide frame from
 *  reading as empty space either side of a narrow column. */
export function Gutter({ children, className = "" }) {
  return (
    <div
      className={`grid grid-cols-1 gap-x-12 gap-y-4 lg:grid-cols-[13rem_minmax(0,1fr)] ${className}`}
    >
      {children}
    </div>
  );
}

/** Small caps eyebrow. Sections style their own headings beyond this,
 *  deliberately — a uniform header block is what made every section
 *  read like the same template. */
export function Label({ children, className = "" }) {
  return <p className={`label ${className}`}>{children}</p>;
}
