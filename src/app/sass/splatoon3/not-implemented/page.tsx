import Link from 'next/link';
import style from './page.module.scss';
import { createClassNamer } from '@/app/sass/splatoon3/_utils/class-namer/classNamer';
import { URLS } from '@/app/sass/splatoon3/_src/urls';

const namer = createClassNamer(style);

export default function Page() {
  return (
    <div className={namer('wrapper')}>
      <div className={namer('character')}></div>
      <Link className={namer('logo')} href={URLS.ROOT}></Link>
      <div className={namer('text')}>미구현 페이지 입니다.</div>
    </div>
  );
}
