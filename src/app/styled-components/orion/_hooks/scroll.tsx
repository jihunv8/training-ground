import { useEffect, useState } from 'react';

export const useIsScrollUp = (): boolean => {
  let lastScrollY = window.scrollY;
  const [isScrollUp, setIsScrollUp] = useState(true);

  useEffect(() => {
    const onScrollListener = (e: Event) => {
      const isUp = window.scrollY < lastScrollY ? true : false;
      setIsScrollUp(isUp);
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', onScrollListener);

    return () => {
      window.removeEventListener('scroll', onScrollListener);
    };
  });

  return isScrollUp;
};
