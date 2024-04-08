import { useIntersectionObserver } from '@/app/sass/splatoon/_hooks/useIntersectionObserver';
import style from './index.module.scss';
import { useState } from 'react';
export default function BattleWithTwoForms() {
  const initVisibleTable = { title: false, text: false, moreDetailBtn: false };

  const [visibleTable, setVisibleTable] = useState(initVisibleTable);

  const createVisibleHandler = (name: string): IntersectionObserverCallback => {
    return ([entry], observer) => {
      if (entry.isIntersecting) {
        setVisibleTable((prev) => {
          const settedVisibleTable = { ...prev, [name]: true };
          return settedVisibleTable;
        });
        observer.disconnect();
      }
    };
  };

  const titleRef = useIntersectionObserver<HTMLHeadingElement>(createVisibleHandler('title'), { threshold: 0.7 });

  const textRef = useIntersectionObserver<HTMLParagraphElement>(createVisibleHandler('text'), { threshold: 0.8 });

  const moreDetailBtnRef = useIntersectionObserver<HTMLButtonElement>(createVisibleHandler('moreDetailBtn'), {
    threshold: 1,
  });

  return (
    <section className={style.wrapper}>
      <div className={style.movieBg}>
        <video
          src="/assets/sass/splatoon3/videos/battle/battle-with-two-forms.mp4"
          preload="none"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className={style.bg}></div>

      <h2 ref={titleRef} className={style.title}>
        주인공은 오징어!?
        <div className={`${style.banner} ${visibleTable.title ? style.visible : ''}`}></div>
      </h2>

      <p ref={textRef} className={`${style.text} ${visibleTable.text ? style.visible : ''}`}>
        플레이어(주인공)는 두 가지 모습을 지닌 신기한 오징어!
        <br />
        「인간」 모습으로 잉크를 마음대로 칠하고
        <br />
        「오징어」 모습으로 잉크 속을 자유롭게 이동합니다.
      </p>

      <button
        ref={moreDetailBtnRef}
        className={`${style.moreDetailBtn} ${visibleTable.moreDetailBtn ? style.visible : ''}`}
      >
        두 모습의 차이점 더 자세히 알아보기
      </button>
    </section>
  );
}
