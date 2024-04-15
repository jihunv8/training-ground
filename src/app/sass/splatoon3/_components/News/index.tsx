'use client';

import Link from 'next/link';
import Image from 'next/image';
import style from './index.module.scss';
import { useVisible } from '@/app/sass/splatoon3/_hooks/useVisible';
import { createClassNamer } from '@/app/sass/splatoon3/_utils/class-namer/classNamer';

import { getBanners } from '@/app/sass/splatoon3/_components/News/tempDB';

import BulletinBoard from '@sass/splatoon3/_components/News/BulletinBoard';

const namer = createClassNamer(style);

export default function News() {
  const banners = getBanners();

  const [forBeginnerVisible, ...bannersVisibleTable] = useVisible(1 + banners.length, {
    threshold: 1,
  });

  return (
    <section className={namer('wrapper')}>
      <BulletinBoard />
      <section className={namer('bannersWrapper')}>
        <div className={namer('bannersHead')}>
          <Link
            ref={forBeginnerVisible.ref}
            data-visible-id={forBeginnerVisible.id}
            href="/temp"
            className={namer('banner forBeginner', forBeginnerVisible.isVisible && 'visible')}
          ></Link>
        </div>
        <ul className={namer('bannersBody')}>
          {banners.map(({ id, href, src, alt }, i) => {
            const { ref, id: visibleId, isVisible } = bannersVisibleTable[i];

            return (
              <li key={id} data-id={id} ref={ref} data-visible-id={visibleId}>
                <Link href={href} className={namer('banner', isVisible && 'visible')}>
                  <Image src={src} alt={alt} />
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={namer('bannersFoot')}>
          <Link href="/temp" className={namer('bigBanner')}></Link>
        </div>
      </section>
    </section>
  );
}
