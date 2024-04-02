'use client';

import Link from 'next/link';
import Image from 'next/image';
import style from './index.module.scss';

import additionImage from '../../../_images/banners/banner_addition.png';
import interviewImage from '../../../_images/banners/banner_interview.png';
import { useState } from 'react';
import { useIntersectionObserver } from '../../../_hooks/useIntersectionObserver';
import BulletinBoard from '@/app/sass/splatoon/_components/News/Posts/BulletinBoard';

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
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleForBiginner, setIsVisibleForBiginner] = useState(false);
  const [banners, setBanners] = useState(getBanners().map((banner) => ({ ...banner, isVisible: false })));

  const createHandleIntersection = (setter: () => void): IntersectionObserverCallback => {
    return ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (entry.isIntersecting) {
        setter();
        observer.unobserve(entry.target);
      }
    };
  };

  const handleNewPostsBannerAnimation = createHandleIntersection(() => {
    setIsVisible(true);
  });
  const handleForBeginnerAnimation = createHandleIntersection(() => setIsVisibleForBiginner(true));

  const intersectionObserverOptions: IntersectionObserverInit = { threshold: 1 };

  const newPostsBanner = useIntersectionObserver<HTMLDivElement>(
    handleNewPostsBannerAnimation,
    intersectionObserverOptions,
  );
  const forBeginner = useIntersectionObserver<HTMLAnchorElement>(
    handleForBeginnerAnimation,
    intersectionObserverOptions,
  );

  const bannersBodyRef = useIntersectionObserver<Map<string | number, HTMLElement>>((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetId = Number(entry.target.getAttribute('data-id'));

        setBanners((prevBanners) => {
          const nextBanners = prevBanners.map((banner) => {
            if (banner.id !== targetId) return banner;
            return { ...banner, isVisible: true };
          });

          return nextBanners;
        });
        observer.unobserve(entry.target);
      }
    });
  }, intersectionObserverOptions);

  const getMap = () => {
    if (bannersBodyRef.current === undefined || bannersBodyRef.current === null) {
      bannersBodyRef.current = new Map<string | number, HTMLElement>();
    }

    return bannersBodyRef.current;
  };

  return (
    <section className={style.wrapper}>
      <BulletinBoard ref={newPostsBanner} visible={isVisible} />
      <section className={style.bennersWrapper}>
        <div className={style.bannersHead}>
          <Link
            ref={forBeginner}
            href="/temp"
            className={`${style.benner} ${style.forBeginner} ${isVisibleForBiginner ? style.visible : ''}`}
          ></Link>
        </div>
        <ul className={style.bannersBody}>
          {banners.map(({ id, href, src, alt, isVisible }) => (
            <li
              key={id}
              data-id={id}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(id, node);
                } else {
                  map.delete(id);
                }
              }}
            >
              <Link href={href} className={`${style.benner} ${isVisible ? style.visible : ''}`}>
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
