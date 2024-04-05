import { MouseEventHandler } from 'react';
import style from './index.module.scss';

type MovieNavProps = {
  currentIndex: number;
  length: number;
  onMove: (toIndex: number) => void;
  onPrev: MouseEventHandler<HTMLButtonElement>;
  onNext: MouseEventHandler<HTMLButtonElement>;
};

export default function MovieNav({ currentIndex, length, onMove, onPrev, onNext }: MovieNavProps) {
  const createArrayOfLength = (length: number) => new Array(length).fill(undefined);
  const indexButtons = createArrayOfLength(length).map((_, i) => {
    const isCurrent = i === currentIndex;

    return (
      <button key={i} className={`${style.indexBtn} ${isCurrent && style.current}`} onClick={() => onMove(i)}>
        {i}
      </button>
    );
  });

  return (
    <div className={style.wrapper}>
      <button className={`${style.arrowBtn} ${style.prev}`} onClick={onPrev}>
        prev
      </button>
      <div className={style.indexBtnContainer}>{indexButtons}</div>
      <button className={`${style.arrowBtn} ${style.next}`} onClick={onNext}>
        next
      </button>
    </div>
  );
}
