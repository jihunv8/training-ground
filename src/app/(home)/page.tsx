import SiteCard from '@/app/(home)/_src/components/SiteCard';
import style from './page.module.scss';
import { createClassNamer } from '@/modules/utils';

import { siteCardData } from '@/app/(home)/_src/siteCardData';

const namer = createClassNamer(style);

export default function Home() {
  return (
    <main className={namer('wrapper')}>
      <section className={namer('contents-area')}>
        <ul className={namer('card-list')}>
          {siteCardData.map((data) => (
            <li>
              <SiteCard data={data} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
