import style from './index.module.scss';
import { createClassNamer } from '@sass/splatoon3/_utils/class-namer/classNamer';
import MenuListItem from '@/app/sass/splatoon3/_components/Menu/MenuList/MenuListItem';

const namer = createClassNamer(style);

export type MenuItemName = 'battle' | 'weapon' | 'world' | 'hero' | 'salmon' | 'fes' | 'amiibo' | 'app' | 'lab';

const menuItems: { name: MenuItemName; href: string }[] = [
  { name: 'battle', href: 'temp' },
  { name: 'weapon', href: 'temp' },
  { name: 'world', href: 'temp' },
  { name: 'hero', href: 'temp' },
  { name: 'salmon', href: 'temp' },
  { name: 'fes', href: 'temp' },
  { name: 'amiibo', href: 'temp' },
  { name: 'app', href: 'temp' },
  { name: 'lab', href: 'temp' },
];

export default function MenuList() {
  return (
    <ul className={namer('wrapper')}>
      {menuItems.map((item, i) => (
        <MenuListItem key={i} item={item} />
      ))}
    </ul>
  );
}
