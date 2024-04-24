'use client';

import style from './index.module.scss';

import { useState } from 'react';
import { createClassNamer } from '@/app/sass/splatoon3/_utils/class-namer/classNamer';

import MovieNav from '@/app/sass/splatoon3/_components/MovieCarousel/MovieNav';
import MovieItem from '@/app/sass/splatoon3/_components/MovieCarousel/MovieItem';

import { getMovies } from '@/app/sass/splatoon3/_components/MovieCarousel/tempDB';

const namer = createClassNamer(style);

export default function MovieCarousel() {
  const movies = getMovies();
  const [currentIndex, setCurrentIndex] = useState(0);

  const dynamicStyle = {
    '--currentIndex': currentIndex,
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
            return <MovieItem key={id} thumbnail={thumbnail} href={href} title={title} current={currentIndex === i} />;
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
