import style from './index.module.scss';
import { createClassNamer } from '@sass/splatoon3/_utils/class-namer/classNamer';
import { useVisible } from '@/app/sass/splatoon3/_hooks/useVisible';

const namer = createClassNamer(style);

export default function Update() {
  const tapes = useVisible(3, { threshold: 0.8 });
  const inkStains = useVisible(6, { threshold: 0.5 });
  const [title, mainImage, text1, text2] = useVisible(4, { threshold: 0.5 });

  return (
    <section className={namer('wrapper')}>
      {tapes.map((tape, i) => (
        <div key={i} ref={tape.ref} data-visible-id={tape.id} className={namer('tape', `tape${i + 1}`)}>
          <div className={namer('tapeInner', tape.isVisible && 'visible')}></div>
        </div>
      ))}

      {inkStains.map((ink, i) => (
        <div
          key={i}
          ref={ink.ref}
          data-visible-id={ink.id}
          className={namer('ink', `ink${i + 1}`, ink.isVisible && 'visible')}
        ></div>
      ))}

      <h2 ref={title.ref} data-visible-id={title.id} className={namer('title', title.isVisible && 'visible')}>
        발매 후 2년간 업데이트 실시!
      </h2>
      <div
        ref={mainImage.ref}
        data-visible-id={mainImage.id}
        className={namer('mainImage', mainImage.isVisible && 'visible')}
      ></div>
      <div ref={text1.ref} data-visible-id={text1.id} className={namer('text1', text1.isVisible && 'visible')}>
        정기적으로 배포!
      </div>
      <div ref={text2.ref} data-visible-id={text2.id} className={namer('text2', text2.isVisible && 'visible')}>
        이 외에도!
      </div>
    </section>
  );
}
