import style from './index.module.scss';
import { createClassNamer } from '@/app/sass/splatoon3/_utils/class-namer/classNamer';

import Image from 'next/image';
import movieTitleImage from '@sass/splatoon3/_images/movie_title.png';

const namer = createClassNamer(style);

export default function MovieCarouselBackground() {
  return (
    <section className={namer('wrapper')}>
      <div className={namer('bg')}>
        <video
          className={namer('bgVideo')}
          src="https://www.nintendo.co.kr/switch/av5ja/assets/images/index/movie/movie_pc.mp4"
          preload="none"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className={namer('title')}>
        <Image src={movieTitleImage} alt="movie" />
      </div>
    </section>
  );
}
