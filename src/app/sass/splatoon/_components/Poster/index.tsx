'use client';
import style from './index.module.scss';
import Link from 'next/link';

import { useState, useEffect } from 'react';

export default function Poster() {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  return (
    <section className={`${style.wrapper} ${isMount ? style.isShow : ''}`}>
      <div className={style.kvWrapper}>
        <div className={style.kv}></div>
        <Link href="/sass/splatoon/a" className={style.switchLogo}></Link>
      </div>
      <div className={style.head}>
        <h1>
          <div className={style.title}></div>
        </h1>
        <div>
          <div className={style.releaseDate}></div>
        </div>
      </div>
    </section>
  );
}
