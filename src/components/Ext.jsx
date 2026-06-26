// Every external link opens in a new tab, safely.
export default function Ext({ href, className = "", children, ...rest }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
      {children}
    </a>
  );
}
