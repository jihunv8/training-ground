import Link from 'next/link';
import style from './index.module.scss';
import { createClassNamer } from '@/app/sass/splatoon/_utils/class-namer/classNamer';
import Image from 'next/image';

import logoImage from '@sass/splatoon/_images/footer/logo.png';
import textBattleImage from '@sass/splatoon/_images/footer/text-battle.png';
import textBattleOnImage from '@sass/splatoon/_images/footer/text-battle-on.png';
import textCustomizeImage from '@sass/splatoon/_images/footer/text-customize.png';
import textCustomizeOnImage from '@sass/splatoon/_images/footer/text-customize-on.png';
import textWorldImage from '@sass/splatoon/_images/footer/text-world.png';
import textWorldOnImage from '@sass/splatoon/_images/footer/text-world-on.png';
import textHeromodeImage from '@sass/splatoon/_images/footer/text-heromode.png';
import textHeromodeOnImage from '@sass/splatoon/_images/footer/text-heromode-on.png';
import textCoopImage from '@sass/splatoon/_images/footer/text-coop.png';
import textCoopOnImage from '@sass/splatoon/_images/footer/text-coop-on.png';
import textFesImage from '@sass/splatoon/_images/footer/text-fes.png';
import textFesOnImage from '@sass/splatoon/_images/footer/text-fes-on.png';
import textMovieImage from '@sass/splatoon/_images/footer/text-movie.png';
import textMovieOnImage from '@sass/splatoon/_images/footer/text-movie-on.png';

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

        <ul className={namer('list')}>
          <li className={namer('item', 'itemTop')}>
            <Link href="/temp">
              <Image className={namer('notHover')} src={logoImage} alt="logo" />
            </Link>
          </li>
          {menuItemInfos.map((item) => (
            <li key={item.name} className={namer('item', `item${item.name}`)}>
              <Link href={item.href}>
                <Image src={item.img} alt={item.name} />
                <Image className={namer('onImage')} src={item.imgOn} alt={`${item.name}-On`} />
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
