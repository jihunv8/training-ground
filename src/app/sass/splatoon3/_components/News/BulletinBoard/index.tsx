import style from './index.module.scss';
import { useVisible } from '@/app/sass/splatoon3/_hooks/useVisible';
import { createClassNamer } from '@/app/sass/splatoon3/_utils/class-namer/classNamer';

import Link from 'next/link';
import DateViewer from '@/app/sass/splatoon3/_components/News/BulletinBoard/DateViewer';

import { getBulletins } from '@/app/sass/splatoon3/_components/News/tempDB';

const namer = createClassNamer(style);

export default function BulletinBoard() {
  const [visible] = useVisible(1, { threshold: 1 });

  const bulletins = getBulletins();

  return (
    <div ref={visible.ref} data-visible-id={visible.id} className={namer('wrapper', visible.isVisible && 'visible')}>
      <div className={namer('body')}>
        <ul className={namer('bulletinList')}>
          {bulletins.map(({ id, date, title, href }) => {
            return (
              <li key={id} className={namer('bulletinItem')}>
                <div className={namer('date')}>
                  <DateViewer date={date} />
                </div>
                <Link href={href}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
