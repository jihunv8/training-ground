import Link from 'next/link';
import style from './index.module.scss';
import { createClassNamer } from '@sass/splatoon3/_utils/class-namer/classNamer';
import { MenuItemName } from '../index';
import { useVisible } from '@/app/sass/splatoon3/_utils/visible/useVisible';

const namer = createClassNamer(style);

type MenuListItemProps = {
  item: {
    name: MenuItemName;
    href: string;
  };
};

export default function MenuListItem({ item: { name, href } }: MenuListItemProps) {
  const [visible] = useVisible(1, { threshold: 0.5 });

  return (
    <li
      ref={visible.ref}
      data-visible-id={visible.id}
      className={namer('wrapper', name, visible.isVisible && 'visible')}
    >
      <Link href={href}>
        <span></span>
        <span></span>
      </Link>
    </li>
  );
}
