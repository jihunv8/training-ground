import Image, { StaticImageData } from 'next/image';
import style from './index.module.scss';
import { createClassNamer } from '@/modules/utils';
import Link from 'next/link';

const namer = createClassNamer(style);

type LinkButtonProps = {
  href: string;
  logo: string | StaticImageData;
  name: string;
};

export default function LinkButton({ href, logo, name }: LinkButtonProps) {
  return (
    <Link className={namer('wrapper')} href={href} target="_blank">
      <Image src={logo} alt="" />
      {name}
    </Link>
  );
}
