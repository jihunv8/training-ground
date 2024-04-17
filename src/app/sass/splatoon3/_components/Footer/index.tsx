import Link from 'next/link';
import style from './index.module.scss';
import { createClassNamer } from '@/app/sass/splatoon3/_utils/class-namer/classNamer';
import Image from 'next/image';

import logoImage from '@sass/splatoon3/_images/footer/logo.png';
import textBattleImage from '@sass/splatoon3/_images/footer/text-battle.png';
import textBattleOnImage from '@sass/splatoon3/_images/footer/text-battle-on.png';
import textCustomizeImage from '@sass/splatoon3/_images/footer/text-customize.png';
import textCustomizeOnImage from '@sass/splatoon3/_images/footer/text-customize-on.png';
import textWorldImage from '@sass/splatoon3/_images/footer/text-world.png';
import textWorldOnImage from '@sass/splatoon3/_images/footer/text-world-on.png';
import textHeromodeImage from '@sass/splatoon3/_images/footer/text-heromode.png';
import textHeromodeOnImage from '@sass/splatoon3/_images/footer/text-heromode-on.png';
import textCoopImage from '@sass/splatoon3/_images/footer/text-coop.png';
import textCoopOnImage from '@sass/splatoon3/_images/footer/text-coop-on.png';
import textFesImage from '@sass/splatoon3/_images/footer/text-fes.png';
import textFesOnImage from '@sass/splatoon3/_images/footer/text-fes-on.png';
import textMovieImage from '@sass/splatoon3/_images/footer/text-movie.png';
import textMovieOnImage from '@sass/splatoon3/_images/footer/text-movie-on.png';

const namer = createClassNamer(style);

const menuItemInfos = [
  { name: 'Battle', href: 'temp', img: textBattleImage, imgOn: textBattleOnImage },
  { name: 'Customize', href: 'temp', img: textCustomizeImage, imgOn: textCustomizeOnImage },
  { name: 'World', href: 'temp', img: textWorldImage, imgOn: textWorldOnImage },
  { name: 'Heromode', href: 'temp', img: textHeromodeImage, imgOn: textHeromodeOnImage },
  { name: 'Coop', href: 'temp', img: textCoopImage, imgOn: textCoopOnImage },
  { name: 'Fes', href: 'temp', img: textFesImage, imgOn: textFesOnImage },
  { name: 'Movie', href: 'temp', img: textMovieImage, imgOn: textMovieOnImage },
];

export default function Footer() {
  return (
    <footer className={namer('wrapper')}>
      <nav className={namer('menu')}>
        <div className={namer('bgInk')}>
          <div className={namer('bgInkInner')}></div>
        </div>
        <div className={namer('bg')}></div>

        <ul className={namer('menuList')}>
          <li className={namer('itemLogo')}>
            <Link className={namer('itemLink')} href="/temp">
              <div className={namer('logo')}>splatoon3</div>
            </Link>
          </li>
          {menuItemInfos.map((item) => (
            <li key={item.name} className={namer('itemMenu', `item${item.name}`)}>
              <Link className={namer('menuLink')} href={item.href}>
                <div className={namer('text')}>{item.name}</div>
              </Link>
            </li>
          ))}
        </ul>

        <button className={namer('toTopButton')}></button>
      </nav>

      <div className={namer('bottom')}>
        <ul className={namer('linkList')}>
          <li className={namer('link')}>
            <Link href="temp">닌텐도 홈페이지</Link>
          </li>
          <li className={namer('link')}>
            <Link href="temp">Nintendo Switch 소프트웨어</Link>
          </li>
        </ul>
        <p>© Nintendo</p>
      </div>
    </footer>
  );
}
