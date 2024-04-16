import Link from 'next/link';
import style from './index.module.scss';
import { createClassNamer } from '@/app/sass/splatoon3/_utils/class-namer/classNamer';

const namer = createClassNamer(style);

export default function Product() {
  return (
    <section className={namer('wrapper')}>
      <div className={namer('body')}>
        <div className={namer('package')}>
          <div className={namer('packageImage')}></div>
          <p className={namer('packageText')}>패키지 버전/다운로드 버전</p>
        </div>
        <div className={namer('contents')}>
          <h2 className={namer('title')}>스플래툰 3</h2>
          <p className={namer('releaseDate')}>발매일: 2022년 9월 9일(금)</p>
          <div className={namer('contentsBody')}>
            <div className={namer('price')}>
              <h3 className={namer('priceTitle')}>희망소비자가격</h3>
              <span className={namer('priceText')}>
                <span>패키지 버전/다운로드 버전</span>
                64,800원
              </span>
            </div>
            <div className={namer('etcLink')}>
              <Link href="temp" className={namer('amiibo')}></Link>
            </div>
          </div>
          <div className={namer('online')}>
            <Link href="temp" className={namer('onlineIcon')}>
              online
            </Link>
            <p className={namer('onlineText')}>
              온라인 플레이를 이용하려면, <Link href="temp">「Nintendo Switch Online」</Link> 가입이 필요합니다 (유료).
            </p>
          </div>
        </div>
        <div className={namer('links')}>
          <Link href="temp" className={namer('link', 'buy')}>
            구입
          </Link>
          <Link href="temp" className={namer('link', 'productInfo')}>
            상품 정보
          </Link>
          <Link href="temp" className={namer('link', 'playInfo')}>
            <span>플레이 인원수・컨트롤러</span>
          </Link>
          <div className={namer('onlineOnMobile')}>
            <Link href="temp" className={namer('onlineIcon')}>
              online
            </Link>
            <p className={namer('onlineText')}>
              온라인 플레이를 이용하려면, <Link href="temp">「Nintendo Switch Online」</Link> 가입이 필요합니다 (유료).
            </p>
          </div>
        </div>
      </div>
      <div className={namer('footer')}>
        <Link href="temp" className={namer('banner')}></Link>
      </div>
    </section>
  );
}
