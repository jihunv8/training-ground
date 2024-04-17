import Link from 'next/link';
import style from './index.module.scss';
import { createClassNamer } from '@/app/sass/splatoon3/_utils/class-namer/classNamer';

const namer = createClassNamer(style);

const menuItemInfos = [
  { name: 'Battle', href: 'temp' },
  { name: 'Customize', href: 'temp' },
  { name: 'World', href: 'temp' },
  { name: 'Heromode', href: 'temp' },
  { name: 'Coop', href: 'temp' },
  { name: 'Fes', href: 'temp' },
  { name: 'Movie', href: 'temp' },
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
