import Link from 'next/link';
import style from './index.module.scss';
import Image, { StaticImageData } from 'next/image';

type MovieItemProps = {
  thumbnail: string | StaticImageData;
  href: string;
  title: string;
  width: number;
  current?: boolean;
};

export default function MovieItem({ thumbnail, href, title, width, current = false }: MovieItemProps) {
  return (
    <li className={style.wrapper} style={{ '--itemWidth': `${width}px` } as React.CSSProperties}>
      <Link href={href} className={style.movieLink}>
        <div className={style.movieThumbnail}>
          <Image src={thumbnail} alt={'thumbnail'} />
          {current && <div className={style.playIcon}></div>}
        </div>
        <div className={style.movieTitle}>{title}</div>
      </Link>
    </li>
  );
}
