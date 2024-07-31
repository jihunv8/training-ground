import { SiteCardData } from '@/app/(home)/_src/siteCardData';
import style from './index.module.scss';
import { createClassNamer } from '@/modules/utils';

import linkIcon from '../../images/icons/link.png';
import githubLogo from '../../images/skill-logos/github-white.png';
import SkillLabel from '@/app/(home)/_src/components/SiteCard/SkillLabel';
import LinkButton from '@/app/(home)/_src/components/SiteCard/LinkButton';
import Image from 'next/image';

const namer = createClassNamer(style);

type SiteCardProps = {
  data: SiteCardData;
};

export default function SiteCard({ data }: SiteCardProps) {
  return (
    <article className={namer('wrapper')}>
      {data.thumbnail && (
        <section className={namer('thumbnail')}>
          <Image src={data.thumbnail} alt="" priority />
        </section>
      )}

      <section className={namer('body')}>
        <h2 className={namer('title')}>{data.title}</h2>
        <p className={namer('description')}>{data.description}</p>
      </section>
      <section className={namer('footer')}>
        <ul>
          {data.skills.map((skill) => (
            <li key={skill.id}>
              <SkillLabel logo={skill.logo} name={skill.name} />
            </li>
          ))}
        </ul>

        <ul className={namer('link-list')}>
          {data.links.deployment && (
            <li>
              <LinkButton href={data.links.deployment} logo={linkIcon} name="배포 링크" />
            </li>
          )}

          {data.links.github && (
            <li>
              <LinkButton href={data.links.github} logo={githubLogo} name="Github" />
            </li>
          )}
        </ul>
      </section>
    </article>
  );
}
