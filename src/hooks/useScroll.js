import { useEffect, useState } from 'react';

export function useScroll(threshold = 50) {
  const [scrolled, setScrolled] = useState(() => typeof window !== 'undefined' && window.scrollY > threshold);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [threshold]);
  return scrolled;
}
