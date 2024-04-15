import { useInnerWidth } from '@/app/sass/splatoon3/_hooks/useInnerWidth';
import style from './index.module.scss';
import { createClassNamer } from '@/app/sass/splatoon3/_utils/class-namer/classNamer';

const namer = createClassNamer(style);

export default function MovieCarouselBackground() {
  const innerWidth = useInnerWidth();
  const isMobile = innerWidth < 760;

  const bgMovieOnPC = '/assets/sass/splatoon3/videos/pc/movie/bg-movie.mp4';
  const bgMovieOnMobile = '/assets/sass/splatoon3/videos/m/movie/bg-movie.mp4';
  const bgMovieSrc = isMobile ? bgMovieOnMobile : bgMovieOnPC;

  return (
    <section className={namer('wrapper')}>
      <div className={namer('bg')}>
        <video className={namer('bgMovie')} src={bgMovieSrc} preload="none" autoPlay muted loop></video>
      </div>
      <div className={namer('title')}>movie</div>
    </section>
  );
}
