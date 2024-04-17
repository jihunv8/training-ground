'use client';
import { createClassNamer } from '@/app/sass/splatoon3/_utils/class-namer/classNamer';
import style from './index.module.scss';
import Link from 'next/link';

import { useState, useEffect } from 'react';
import { URLS } from '@/app/sass/splatoon3/_src/urls';

const namer = createClassNamer(style);

export default function Poster() {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  return (
    <section className={namer('wrapper', isMount && 'isShow')}>
      <div className={namer('kvWrapper')}>
        <div className={namer('kv', isMount && 'visible')}></div>
        <Link className={namer('switchLogo')} href={URLS.NOT_IMPLEMENTED}></Link>
      </div>
      <div className={namer('head')}>
        <h1>
          <div className={namer('title', isMount && 'visible')}></div>
        </h1>
        <div>
          <div className={namer('releaseDate', isMount && 'visible')}></div>
        </div>
      </div>
    </section>
  );
}
