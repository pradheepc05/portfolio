export default function RevealText({ children, delay = 0 }) {
  return <span className="block overflow-hidden"><span className="slide-up block" style={{ animationDelay: `${delay}s` }}>{children}</span></span>;
}
