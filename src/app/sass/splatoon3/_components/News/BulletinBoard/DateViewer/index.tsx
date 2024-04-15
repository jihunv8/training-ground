import { createClassNamer } from '@/app/sass/splatoon3/_utils/class-namer/classNamer';
import style from './index.module.scss';

const namer = createClassNamer(style);

export default function DateViewer({ date: _date }: { date: string }) {
  let date = _date;

  const pattern: RegExp = /^\d{4}-\d{2}-\d{2}$/;
  if (!pattern.test(date)) {
    date = '0000-00-00';
  }

  const splited = date.split('');

  return (
    <div className={namer('wrapper')}>
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

  return <span className={namer('number', className)}>{number}</span>;
}
