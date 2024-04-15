'use client';

import style from './index.module.scss';

import { useVisible } from '@/app/sass/splatoon3/_hooks/useVisible';
import { createClassNamer } from '@/app/sass/splatoon3/_utils/class-namer/classNamer';

const namer = createClassNamer(style);

export default function AreaBattle() {
  const [character1Visible, character2Visible, titleVisible, textVisible, movieVisible] = useVisible(5, {
    threshold: 0.3,
  });

  const numOfInkStains = 6;

  const inkStainsVisible = useVisible(numOfInkStains, { threshold: 0.5 });

  return (
    <section className={namer('wrapper')}>
      <div
        ref={character1Visible.ref}
        data-visible-id={character1Visible.id}
        className={namer('character1', character1Visible.isVisible && 'visible')}
      ></div>
      <h2
        ref={titleVisible.ref}
        data-visible-id={titleVisible.id}
        className={namer('title', titleVisible.isVisible && 'visible')}
      >
        영역 배틀
      </h2>
      <p
        ref={textVisible.ref}
        data-visible-id={textVisible.id}
        className={namer('text', textVisible.isVisible && 'visible')}
      >
        4명씩 팀을 맺어
        <br className={namer('onMobile')} />
        지면에 자신의 팀과 같은 색의
        <br className={namer('onPC')} />
        잉크를 얼마나
        <br className={namer('onMobile')} />
        칠했는지, 그 면적(영역)으로 경쟁합니다.
        <br />
        그것이 바로 「영역 배틀」!
      </p>
      <div ref={movieVisible.ref} data-visible-id={movieVisible.id} className={namer('movie')}>
        <div className={namer('movieInner', movieVisible.isVisible && 'visible')}>
          <div className={namer('frame')}></div>
          <video
            src="/assets/sass/splatoon3/videos/battle/battle-area-battle.mp4"
            preload="none"
            autoPlay
            muted
            loop
          ></video>
        </div>
      </div>
      <div
        ref={character2Visible.ref}
        data-visible-id={character2Visible.id}
        className={namer('character2', character2Visible.isVisible && 'visible')}
      ></div>

      {new Array(numOfInkStains).fill(undefined).map((_, i) => (
        <div
          key={i}
          ref={inkStainsVisible[i].ref}
          data-visible-id={inkStainsVisible[i].id}
          className={namer('inkStain', `ink${i + 1}`, inkStainsVisible[i].isVisible && 'visible')}
        ></div>
      ))}
    </section>
  );
}
