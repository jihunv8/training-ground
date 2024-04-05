'use client';

import { Noto_Sans_KR } from 'next/font/google';

import './_styles/global.scss';
import style from './page.module.scss';
import { useEffect } from 'react';

import Poster from './_components/Poster';
import News from './_components/News';
import Battle from './_components/Battle';
import MovieCarousel from '@/app/sass/splatoon/_components/MovieCarousel';
import MovieCarouselBackground from '@/app/sass/splatoon/_components/MovieCarouselBackground';

const NotoSansKR = Noto_Sans_KR({
  weight: ['400', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function Page() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    return () => {
      window.history.scrollRestoration = 'auto';
    };
  }, []);
  return (
    <div className={`${style.wrapper} ${NotoSansKR.className}`}>
      <Poster />
      <News />
      <MovieCarousel />
      <MovieCarouselBackground />
      <Battle />
    </div>
  );
}
