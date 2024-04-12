import { useEffect, useRef } from 'react';
/**
 * React 컴포넌트에서 IntersectionObserver 사용할 수 있도록 도와주는 hook입니다.
 * 감시할 요소를 참조할 수 있는 MutableRefObject를 반환합니다.
 */
export const useIntersectionObserver = <T extends HTMLElement | Map<string | number, HTMLElement> = HTMLElement>(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    if (ref.current instanceof Map) {
      const iterator = ref.current.values();

      let next = iterator.next();
      while (!next.done) {
        const element = next.value;
        observer.observe(element);
        next = iterator.next();
      }
    } else if (ref.current !== null) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
};
