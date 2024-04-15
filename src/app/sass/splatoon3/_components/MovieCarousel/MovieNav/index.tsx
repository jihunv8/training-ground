import { MouseEventHandler } from 'react';
import style from './index.module.scss';
import { createClassNamer } from '@/app/sass/splatoon3/_utils/class-namer/classNamer';

const namer = createClassNamer(style);

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
      <button key={i} className={namer('indexBtn', isCurrent && 'current')} onClick={() => onMove(i)}>
        {i}
      </button>
    );
  });

  return (
    <div className={namer('wrapper')}>
      <button className={namer('arrowBtn prev')} onClick={onPrev}>
        prev
      </button>
      <div className={namer('indexBtnContainer')}>{indexButtons}</div>
      <button className={namer('arrowBtn next')} onClick={onNext}>
        next
      </button>
    </div>
  );
}
