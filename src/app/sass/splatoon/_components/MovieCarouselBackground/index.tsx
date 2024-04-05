import style from './index.module.scss';
import Image from 'next/image';

import movieTitleImage from '@sass/splatoon/_images/movie_title.png';

export default function MovieCarouselBackground() {
  return (
    <section className={style.wrapper}>
      <div className={style.bg}>
        <video
          className={style.bg_video}
          src="https://www.nintendo.co.kr/switch/av5ja/assets/images/index/movie/movie_pc.mp4"
          preload="none"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className={style.title}>
        <Image src={movieTitleImage} alt="movie" />
      </div>
    </section>
  );
}
