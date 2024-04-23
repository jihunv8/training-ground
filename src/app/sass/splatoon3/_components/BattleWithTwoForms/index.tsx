import style from './index.module.scss';
import { createClassNamer } from '@/app/sass/splatoon3/_utils/class-namer/classNamer';
import { useVisible } from '@/app/sass/splatoon3/_utils/visible/useVisible';
import { useInnerWidth } from '@/app/sass/splatoon3/_hooks/useInnerWidth';

const namer = createClassNamer(style);

export default function BattleWithTwoForms() {
  const [titleVisible] = useVisible(1, { threshold: 0.7 });

  const [textVisible] = useVisible(1, { threshold: 0.8 });

  const [moreDetailBtnVisible] = useVisible(1, {
    threshold: 1,
  });

  const innerWidth = useInnerWidth();
  const isMobile = innerWidth < 760;

  const bgMovieOnPC = '/assets/sass/splatoon3/videos/pc/battle-with-two-forms/two-forms.mp4';
  const bgMovieOnMobile = '/assets/sass/splatoon3/videos/m/battle-with-two-forms/two-forms.mp4';
  const bgMovieSrc = isMobile ? bgMovieOnMobile : bgMovieOnPC;

  return (
    <section className={namer('wrapper')}>
      <div className={namer('movieBg')}>
        <video src={bgMovieSrc} preload="none" autoPlay muted loop></video>
      </div>
      <div className={namer('bg')}></div>

      <h2 ref={titleVisible.ref} data-visible-id={titleVisible.id} className={namer('title')}>
        주인공은 오징어!?
        <div className={namer('banner', titleVisible.isVisible && 'visible')}></div>
      </h2>

      <p ref={textVisible.ref} data-visible-id={textVisible.id} className={namer('text')}>
        <span className={namer('textInner', textVisible.isVisible && 'visible')}>
          플레이어(주인공)는
          <br className={namer('brOnMobile')} />
          두 가지 모습을 지닌 신기한 오징어!
          <br />
          「인간」 모습으로 잉크를 마음대로 칠하고
          <br />
          「오징어」 모습으로 잉크 속을 자유롭게 이동합니다.
        </span>
      </p>

      <button
        ref={moreDetailBtnVisible.ref}
        data-visible-id={moreDetailBtnVisible.id}
        className={namer('moreDetailBtn', moreDetailBtnVisible.isVisible && 'visible')}
      >
        두 모습의 차이점 더 자세히 알아보기
      </button>
    </section>
  );
}
