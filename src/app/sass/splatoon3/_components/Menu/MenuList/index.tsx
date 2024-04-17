import style from './index.module.scss';
import { createClassNamer } from '@sass/splatoon3/_utils/class-namer/classNamer';
import MenuListItem from '@/app/sass/splatoon3/_components/Menu/MenuList/MenuListItem';
import { URLS } from '@/app/sass/splatoon3/_src/urls';

const namer = createClassNamer(style);

export type MenuItemName = 'battle' | 'weapon' | 'world' | 'hero' | 'salmon' | 'fes' | 'amiibo' | 'app' | 'lab';

const menuItems: { name: MenuItemName; href: string }[] = [
  { name: 'battle', href: URLS.NOT_IMPLEMENTED },
  { name: 'weapon', href: URLS.NOT_IMPLEMENTED },
  { name: 'world', href: URLS.NOT_IMPLEMENTED },
  { name: 'hero', href: URLS.NOT_IMPLEMENTED },
  { name: 'salmon', href: URLS.NOT_IMPLEMENTED },
  { name: 'fes', href: URLS.NOT_IMPLEMENTED },
  { name: 'amiibo', href: URLS.NOT_IMPLEMENTED },
  { name: 'app', href: URLS.NOT_IMPLEMENTED },
  { name: 'lab', href: URLS.NOT_IMPLEMENTED },
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
