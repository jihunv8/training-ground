'use client';

import './_styles/global.scss';
import style from './page.module.scss';
import { useEffect } from 'react';

import Poster from './_components/Poster';
import News from './_components/News';
import Battle from './_components/Battle';

export default function Page() {
  useEffect(() => {
    // 스크롤 위치 복원을 비활성화합니다.
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Cleanup 함수
    return () => {
      // 페이지를 이동할 때 원래의 스크롤 복원 기능을 다시 활성화합니다.
      window.history.scrollRestoration = 'auto';
    };
  }, []);
  return (
    <div className={style.wrapper}>
      <Poster />
      <News />
      <Battle />
    </div>
  );
}
