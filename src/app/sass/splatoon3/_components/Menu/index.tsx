import style from './index.module.scss';
import { createClassNamer } from '@sass/splatoon3/_utils/class-namer/classNamer';
import MenuList from '@/app/sass/splatoon3/_components/Menu/MenuList';
import { useVisible } from '@/app/sass/splatoon3/_hooks/useVisible';

const namer = createClassNamer(style);

export default function Menu() {
  const [title, subtitle] = useVisible(2, { threshold: 0.5 });
  console.log(title.isVisible);
  console.log(subtitle.isVisible);

  return (
    <section className={namer('wrapper')}>
      <div className={namer('bg')}></div>
      <h2 ref={title.ref} data-visible-id={title.id} className={namer('title')}>
        Menu
        <div className={namer('band', title.isVisible && 'visible')}></div>
      </h2>
      <div ref={subtitle.ref} data-visible-id={subtitle.id} className={namer('subtitle')}>
        더 자세히 알고 싶다면?
        <div className={namer('band', subtitle.isVisible && 'visible')}></div>
      </div>
      <MenuList />
    </section>
  );
}
