import { createClassNamer } from '@/app/sass/splatoon3/_utils/class-namer/classNamer';
import style from './index.module.scss';
import Image from 'next/image';

import image from '@sass/splatoon3/_images/information/img-twitter.png';
import Link from 'next/link';
import { useVisible } from '@/app/sass/splatoon3/_hooks/useVisible';

const namer = createClassNamer(style);

export default function Information() {
  const [title, footer] = useVisible(2);

  return (
    <section className={namer('wrapper')}>
      <h2 ref={title.ref} data-visible-id={title.id} className={namer('title', title.isVisible && 'visible')}></h2>
      <ul className={namer('contents')}>
        <li className={namer('item')}>
          <div className={namer('itemImage')}>
            <Image src={image} alt="img-twitter" />
          </div>
          <div className={namer('itemBody')}>
            <div className={namer('itemDate')}>2023.01.17</div>
            <div className={namer('itemText')}>
              [알림] 1월 18일(수)부터 『스플래툰 3』의 업데이트 데이터 Ver 2.1.0을 배포합니다. 자세한 업데이트 내용은
              알림 페이지에서 확인해주세요. Ver. 2.0.1 이전과는 배틀 전적 호환성이 없습니다.
            </div>
          </div>
        </li>
      </ul>
      <div ref={footer.ref} data-visible-id={footer.id} className={namer('footer', footer.isVisible && 'visible')}>
        <Link href="temp">스플래툰 3의 최신 정보는 한국닌텐도 공식 트위터 계정에서</Link>
      </div>
    </section>
  );
}
