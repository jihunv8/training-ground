import style from './index.module.scss';
import { createClassNamer } from '@/app/sass/splatoon3/_utils/class-namer/classNamer';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

const namer = createClassNamer(style);

type MovieItemProps = {
  thumbnail: string | StaticImageData;
  href: string;
  title: string;
  current?: boolean;
};

export default function MovieItem({ thumbnail, href, title, current = false }: MovieItemProps) {
  return (
    <li className={namer('wrapper')}>
      <Link href={href} className={namer('movieLink')}>
        <div className={namer('movieThumbnail')}>
          <Image src={thumbnail} alt={'thumbnail'} />
          {current && <div className={namer('playIcon')}></div>}
        </div>
        <div className={namer('movieTitle')}>{title}</div>
      </Link>
    </li>
  );
}
