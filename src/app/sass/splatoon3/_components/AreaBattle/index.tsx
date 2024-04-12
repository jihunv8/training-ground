'use client';

import Image from 'next/image';
import style from './index.module.scss';

import frameImage from '@sass/splatoon3/_images/battle/frame.png';
import { useVisible } from '@/app/sass/splatoon3/_hooks/useVisible';

export default function AreaBattle() {
  const [twoFormsImg, title, text, areaBattleMovie, ...inkStains] = useVisible(10, { threshold: 0.3 });

  return (
    <section className={style.wrapper}>
      <div
        ref={twoFormsImg.ref}
        data-visible-id={twoFormsImg.id}
        className={`${style.twoFormsImg} ${twoFormsImg.isVisible ? style.visible : ''}`}
      ></div>
      <h2
        ref={title.ref}
        data-visible-id={title.id}
        className={`${style.title} ${title.isVisible ? style.visible : ''}`}
      >
        영역 배틀
      </h2>
      <p ref={text.ref} data-visible-id={text.id} className={`${style.text} ${text.isVisible ? style.visible : ''}`}>
        4명씩 팀을 맺어 지면에 자신의 팀과 같은 색의
        <br />
        잉크를 얼마나 칠했는지, 그 면적(영역)으로 경쟁합니다.
        <br />
        그것이 바로 「영역 배틀」!
      </p>
      <div
        ref={areaBattleMovie.ref}
        data-visible-id={areaBattleMovie.id}
        className={`${style.areaBattleMovie} ${areaBattleMovie.isVisible ? style.visible : ''}`}
      >
        <Image className={style.frame} src={frameImage} alt="frame" />
        <video
          className={style.movie}
          src="/assets/sass/splatoon3/videos/battle/battle-area-battle.mp4"
          preload="none"
          autoPlay
          muted
          loop
        ></video>
      </div>
      {new Array(6).fill(undefined).map((_, i) => (
        <div
          key={i}
          ref={inkStains[i].ref}
          data-visible-id={inkStains[i].id}
          className={`${style.inkStain} ${style[`stain${i}`]} ${inkStains[i].isVisible ? style.visible : ''}`}
        ></div>
      ))}
    </section>
  );
}
