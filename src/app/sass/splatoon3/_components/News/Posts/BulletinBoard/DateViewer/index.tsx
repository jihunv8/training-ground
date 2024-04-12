import style from './index.module.scss';

export default function DateViewer({ date: _date }: { date: string }) {
  let date = _date;

  const pattern: RegExp = /^\d{4}-\d{2}-\d{2}$/;
  if (!pattern.test(date)) {
    date = '0000-00-00';
  }

  const splited = date.split('');

  return (
    <div className={style.wrapper}>
      {splited.map((num, i) => (
        <DateNumber key={i} number={num} />
      ))}
    </div>
  );
}

/**
 * number: 0~9, '0'~'9', '-', '.'
 */
function DateNumber({ number }: { number: number | string | '-' | '.' }) {
  const className = number === '-' || number === '.' ? 'dot' : `num${number}`;

  return <span className={`${style.number} ${style[className]}`}>{number}</span>;
}
