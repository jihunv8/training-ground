import style from './index.module.scss';

import Posts from './Posts';
import Movies from './Movies';

export default function News() {
  return (
    <section className={style.wrapper}>
      <Posts />
      <Movies />
    </section>
  );
}
