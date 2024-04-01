import './_styles/global.scss';
import style from './page.module.scss';
import type { Metadata } from 'next';

import Poster from './_components/Poster';
import News from './_components/News';
import Battle from './_components/Battle';

export const metadata: Metadata = {
  title: 'Spatoon 3',
};

export default function Page() {
  return (
    <div className={style.wrapper}>
      <Poster />
      <News />
      <Battle />
    </div>
  );
}
