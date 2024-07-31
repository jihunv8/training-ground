import Image, { StaticImageData } from 'next/image';
import style from './index.module.scss';
import { createClassNamer } from '@/modules/utils';

const namer = createClassNamer(style);

type SkillLabelProps = {
  logo: string | StaticImageData;
  name: string;
};

export default function SkillLabel({ logo, name }: SkillLabelProps) {
  return (
    <div className={namer('wrapper')}>
      <Image src={logo} alt="" />
      {name}
    </div>
  );
}
