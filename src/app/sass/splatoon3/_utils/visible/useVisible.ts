import { useIntersectionObserver } from '@/app/sass/splatoon3/_hooks/useIntersectionObserver';
import { RefCallback, useState } from 'react';

const useVisibleTable = (length: number) => {
  const initTable = new Array<boolean>(length);
  initTable.fill(false);
  return useState<boolean[]>(initTable);
};

type VisibleSlot<T> = {
  id: number;
  isVisible: boolean;
  ref: RefCallback<T>;
};

/**
 * 요소가 화면에 표시되는 시점을 감지하는 hook입니다.
 * @param length 감지할 요소의 수 입니다.
 * @param options
 */

export const useVisible = <T extends HTMLElement = HTMLElement>(
  length: number,
  options?: { threshold?: number | [number, number]; isPersistent?: boolean },
): VisibleSlot<T>[] => {
  const isPersistent = options?.isPersistent || false;

  const [visibleTable, setVisibleTable] = useVisibleTable(length);

  const handle: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      const visibleId = entry.target.getAttribute('data-visible-id');

      if (!entry.isIntersecting) {
        if (isPersistent) {
          setVisibleTable((prev) => {
            const settedVisibleTable = [...prev];
            settedVisibleTable[Number(visibleId)] = false;
            return settedVisibleTable;
          });
        }

        return;
      }

      if (visibleId === null) {
        console.warn(entry.target, '해당요소의 data-visible-id 속성이 정의되지 않았습니다.');
        observer.unobserve(entry.target);
        return;
      }

      setVisibleTable((prev) => {
        const settedVisibleTable = [...prev];
        settedVisibleTable[Number(visibleId)] = true;
        return settedVisibleTable;
      });

      if (!isPersistent) {
        observer.unobserve(entry.target);
      }
    });
  };

  const opts: IntersectionObserverInit = { threshold: options?.threshold };

  const mapRef = useIntersectionObserver<Map<string | number, T>>(handle, opts);

  const getMap = () => {
    if (mapRef.current === null) {
      mapRef.current = new Map<string | number, T>();
    }
    return mapRef.current;
  };

  return visibleTable.map((visible, i) => {
    const ref: RefCallback<T> = (node) => {
      const map = getMap();
      if (node === null) {
        map.delete(i);
      } else {
        map.set(i, node);
      }
    };

    return { id: i, isVisible: visible, ref };
  });
};
