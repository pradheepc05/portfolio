import { useEffect, useRef } from 'react';

export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.classList.add('reveal-visible');
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { entry.target.classList.add('reveal-visible'); observer.unobserve(entry.target); }
    }, { rootMargin: '0px 0px -80px 0px', threshold: 0.08 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return ref;
}
