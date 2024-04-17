'use client';

import style from './page.module.scss';
import { useEffect } from 'react';

import Poster from './_components/Poster';
import News from './_components/News';
import MovieCarousel from '@/app/sass/splatoon3/_components/MovieCarousel';
import MovieCarouselBackground from '@/app/sass/splatoon3/_components/MovieCarouselBackground';
import BattleWithTwoForms from '@/app/sass/splatoon3/_components/BattleWithTwoForms';
import AreaBattle from '@/app/sass/splatoon3/_components/AreaBattle';
import BattleStyle from '@/app/sass/splatoon3/_components/BattleStyle';
import World from '@/app/sass/splatoon3/_components/World';
import Menu from '@/app/sass/splatoon3/_components/Menu';
import Update from '@/app/sass/splatoon3/_components/Update';
import Information from '@/app/sass/splatoon3/_components/Information';
import Product from '@/app/sass/splatoon3/_components/Product';
import Footer from '@/app/sass/splatoon3/_components/Footer';

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
    <div className={style.wrapper}>
      <Poster />
      <News />
      <MovieCarousel />
      <MovieCarouselBackground />
      <BattleWithTwoForms />
      <AreaBattle />
      <BattleStyle />
      <World />
      <Menu />
      <Update />
      <Information />
      <Product />
      <Footer />
    </div>
  );
}
