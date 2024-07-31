import { useEffect, useState } from 'react';

export const useIsScrollUp = (init?: boolean): boolean => {
  const [isScrollUp, setIsScrollUp] = useState(init || false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = (e: Event) => {
      const isUp = window.scrollY < lastScrollY ? true : false;
      setIsScrollUp(isUp);
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return isScrollUp;
};
