import { useReveal } from '../../hooks/useReveal';

export default function Section({ id, children, className = '' }) {
  const ref = useReveal();
  return <section id={id} ref={ref} className={`mx-auto max-w-6xl px-6 py-24 reveal-hidden ${className}`}>{children}</section>;
}
