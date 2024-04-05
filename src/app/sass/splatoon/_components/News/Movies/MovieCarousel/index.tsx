import MovieItem from '@/app/sass/splatoon/_components/News/Movies/MovieCarousel/MovieItem';
import style from './index.module.scss';
import { getMovies } from '@sass/splatoon/_components/News/Movies/MovieCarousel/moviesData';

import { useEffect, useState } from 'react';
import MovieNav from '@/app/sass/splatoon/_components/News/Movies/MovieCarousel/MovieNav';

export default function MovieCarousel() {
  const movies = getMovies();
  const [currentIndex, setCurrentIndex] = useState(0);

  const innerWidth = useInnerWidth();
  const itemWidth = innerWidth / 4;
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
    <div className={style.wrapper}>
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
      <section className={style.movieBottom}>
        <MovieNav
          currentIndex={currentIndex}
          length={movies.length}
          onMove={handleMove}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </section>
    </div>
  );
}

const useInnerWidth = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  return innerWidth;
};
