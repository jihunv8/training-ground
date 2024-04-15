'use client';

import style from './index.module.scss';

import { useState } from 'react';
import { useInnerWidth } from '@/app/sass/splatoon3/_hooks/useInnerWidth';
import { createClassNamer } from '@/app/sass/splatoon3/_utils/class-namer/classNamer';

import MovieNav from '@/app/sass/splatoon3/_components/MovieCarousel/MovieNav';
import MovieItem from '@/app/sass/splatoon3/_components/MovieCarousel/MovieItem';

import { getMovies } from '@/app/sass/splatoon3/_components/MovieCarousel/tempDB';

const namer = createClassNamer(style);

export default function MovieCarousel() {
  const movies = getMovies();
  const [currentIndex, setCurrentIndex] = useState(0);

  const innerWidth = useInnerWidth();
  const itemWidth = innerWidth >= 760 ? innerWidth / 4 : innerWidth / 1.3;
  const translateX = innerWidth / 2 - itemWidth / 2 - itemWidth * currentIndex;

  const dynamicStyle = {
    '--itemWidth': `${itemWidth}px`,
    transform: `translate3d(${translateX}px, 0, 0)`,
  } as React.CSSProperties;

  const handleMove = (toIndex: number) => {
    setCurrentIndex(toIndex);
  };

  const handlePrev = () => {
    const prevIndex = currentIndex <= 0 ? movies.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };
  const handleNext = () => {
    const nextIndex = currentIndex >= movies.length - 1 ? 0 : currentIndex + 1;

    setCurrentIndex(nextIndex);
  };

  return (
    <section className={namer('wrapper')}>
      <div className={namer('carousel')}>
        <ul style={dynamicStyle}>
          {movies.map(({ id, thumbnail, href, title }, i) => {
            return (
              <MovieItem
                key={id}
                thumbnail={thumbnail}
                href={href}
                title={title}
                width={itemWidth}
                current={currentIndex === i}
              />
            );
          })}
        </ul>
        <section className={namer('movieBottom')}>
          <MovieNav
            currentIndex={currentIndex}
            length={movies.length}
            onMove={handleMove}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </section>
      </div>
    </section>
  );
}
