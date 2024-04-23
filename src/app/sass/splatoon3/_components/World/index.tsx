import { useVisible } from '@/app/sass/splatoon3/_utils/visible/useVisible';
import style from './index.module.scss';
import { createClassNamer } from '@sass/splatoon3/_utils/class-namer/classNamer';
import { useInnerWidth } from '@/app/sass/splatoon3/_hooks/useInnerWidth';

const namer = createClassNamer(style);

export default function World() {
  const innerWidth = useInnerWidth();
  const isMobile = innerWidth < 760;

  const movieOnPC = '/assets/sass/splatoon3/videos/pc/world/world.mp4';
  const movieOnMobile = '/assets/sass/splatoon3/videos/m/world/world.mp4';
  const movieSrc = isMobile ? movieOnMobile : movieOnPC;

  const [title, subTitle, text] = useVisible(3, { threshold: 0.5 });

  return (
    <section className={namer('wrapper')}>
      <div className={namer('movie')}>
        <video src={movieSrc} preload="none" autoPlay muted loop></video>
      </div>
      <div className={namer('bg')}></div>
      <div className={namer('neon')}>
        <div className={namer('item', 'item1')}></div>
        <div className={namer('item', 'item2')}></div>
        <div className={namer('item', 'item3')}></div>
      </div>
      <h2 ref={title.ref} data-visible-id={title.id} className={namer('title', title.isVisible && 'visible')}>
        무대는 혼돈의 도시 카오폴리스 타운
      </h2>
      <p
        ref={subTitle.ref}
        data-visible-id={subTitle.id}
        className={namer('subTitle', subTitle.isVisible && 'visible')}
      >
        배틀과 패션을 즐기는 플레이어가 모이는 곳
      </p>
      <p ref={text.ref} data-visible-id={text.id} className={namer('text', text.isVisible && 'visible')}>
        「영역 배틀」에서 이긴 보상으로
        <br />
        새로운 무기나 기어를 구입하려면
        <br />
        여기, 「카오폴리스 타운」에서.
        <br />
        다양한 해양 생물과 건물이 들어선
        <br />
        독특한 분위기의 지방 도시입니다.
      </p>
    </section>
  );
}
