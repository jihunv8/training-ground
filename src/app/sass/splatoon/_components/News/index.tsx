import style from './index.module.scss';

import Posts from './Posts';

export default function News() {
  return (
    <section className={style.wrapper}>
      <Posts />
    </section>
  );
}
