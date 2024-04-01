import Link from 'next/link';
import Image from 'next/image';
import style from './index.module.scss';

import additionImage from '../../../_images/banners/banner_addition.png';
import interviewImage from '../../../_images/banners/banner_interview.png';

const getBanners = () => [
  {
    id: 1,
    src: additionImage,
    alt: 'addition',
    href: '/temp',
  },
  {
    id: 2,
    src: interviewImage,
    alt: 'interview',
    href: '/temp',
  },
];

export default function Posts() {
  const banners = getBanners();

  return (
    <section className={style.wrapper}>
      <article className={style.newsPostsBanner}>
        <div className={style.newsPostsBannerBody}>
          <div>내용이다</div>
          <div>내용이다</div>
          <div>내용이다</div>
          <div>내용이다</div>
          <div>내용이다</div>
          <div>내용이다</div>
          <div>내용이다</div>
        </div>
      </article>
      <section className={style.bennersWrapper}>
        <div className={style.bannersHead}>
          <Link href="/temp" className={`${style.benner} ${style.forBeginner}`}></Link>
        </div>
        <ul className={style.bannersBody}>
          {banners.map(({ id, href, src, alt }) => (
            <li key={id}>
              <Link href={href} className={style.benner}>
                <Image src={src} alt={alt} />
              </Link>
            </li>
          ))}
        </ul>
        <div className={style.bannersFoot}>
          <Link href="/temp" className={style.bigBanner}></Link>
        </div>
      </section>
    </section>
  );
}
