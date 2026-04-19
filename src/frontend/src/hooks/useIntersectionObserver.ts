import { type RefObject, useEffect, useState } from "react";

interface IntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | null;
}

export function useIntersectionObserver(
  ref: RefObject<Element | null>,
  options: IntersectionObserverOptions = {},
): boolean {
  const [isVisible, setIsVisible] = useState(false);
  const { threshold = 0.1, rootMargin = "0px", root = null } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, no need to keep observing
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin, root },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, root]);

  return isVisible;
}
