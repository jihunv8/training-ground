import style from './index.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import movieTitleImage from '@sass/splatoon/_images/movie_title.png';

import thumbnail1Image from '@sass/splatoon/_images/movie-thumbnails/movie-thumbnail-1.png';
import thumbnail2Image from '@sass/splatoon/_images/movie-thumbnails/movie-thumbnail-2.png';
import thumbnail3Image from '@sass/splatoon/_images/movie-thumbnails/movie-thumbnail-3.jpeg';
import thumbnail4Image from '@sass/splatoon/_images/movie-thumbnails/movie-thumbnail-4.jpeg';
import thumbnail5Image from '@sass/splatoon/_images/movie-thumbnails/movie-thumbnail-5.jpeg';
import thumbnail6Image from '@sass/splatoon/_images/movie-thumbnails/movie-thumbnail-6.jpeg';
import thumbnail7Image from '@sass/splatoon/_images/movie-thumbnails/movie-thumbnail-7.jpeg';
import thumbnail8Image from '@sass/splatoon/_images/movie-thumbnails/movie-thumbnail-8.jpeg';
import thumbnail9Image from '@sass/splatoon/_images/movie-thumbnails/movie-thumbnail-9.jpeg';
import thumbnail10Image from '@sass/splatoon/_images/movie-thumbnails/movie-thumbnail-10.png';
import thumbnail11Image from '@sass/splatoon/_images/movie-thumbnails/movie-thumbnail-11.png';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import MovieCarousel from '@/app/sass/splatoon/_components/News/Movies/MovieCarousel';

export default function Movies() {
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
      <MovieCarousel />
    </section>
  );
}
