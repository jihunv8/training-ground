import { StaticImageData } from 'next/image';

import sassLogo from './images/skill-logos/sass.png';
import styledComponentsLogo from './images/skill-logos/styled-components.png';

import splatoonThubnail from './images/thumbnails/splatoon-3.png';
import orionThubnail from './images/thumbnails/orion.png';
import koreanAirThubnail from './images/thumbnails/korean-air.png';
import musicEduThubnail from './images/thumbnails/music-edu.png';
import constructionThubnail from './images/thumbnails/construction.png';

type Skill = {
  id: number;
  name: string;
  logo: string | StaticImageData;
};

const skillTable: { [key: string]: Skill } = {
  sass: {
    id: 0,
    name: 'SASS',
    logo: sassLogo,
  },
  styledComponrnts: {
    id: 1,
    name: 'Styled Components',
    logo: styledComponentsLogo,
  },
};

export type SiteCardData = {
  id: number;
  title: string;
  description: string;
  thumbnail?: string | StaticImageData;
  links: {
    deployment?: string;
    github?: string;
  };
  skills: Skill[];
};

export const siteCardData: Readonly<SiteCardData>[] = [
  {
    id: 4,
    title: 'Splatoon 3',
    thumbnail: splatoonThubnail,
    description: '닌텐도의 Splatoon3 메인 페이지',
    links: {
      deployment: 'sass/splatoon3',
      github: 'https://github.com/jihunv8/training-ground/blob/main/src/app/sass/splatoon3/READEME.md',
    },
    skills: [skillTable.sass],
  },
  {
    id: 3,
    title: '오리온',
    description: '오리온 메인 페이지',
    thumbnail: orionThubnail,
    links: {
      deployment: 'styled-components/orion',
      github: 'https://github.com/jihunv8/training-ground/blob/main/src/app/styled-components/orion/READEME.md',
    },
    skills: [skillTable.styledComponrnts],
  },
  {
    id: 2,
    title: '대한항공',
    description: '대한항공 메인 페이지',
    thumbnail: koreanAirThubnail,
    links: {
      deployment: 'styled-components/korean-air',
      github: 'https://github.com/jihunv8/training-ground/blob/main/src/app/styled-components/korean-air/READEME.md',
    },
    skills: [skillTable.styledComponrnts],
  },
  {
    id: 1,
    title: 'Construction',
    description: '디자인 시안을 보고 구현한 페이지',
    thumbnail: constructionThubnail,
    links: {
      deployment: 'styled-components/construction',
      github: 'https://github.com/jihunv8/training-ground/blob/main/src/app/styled-components/construction/READEME.md',
    },
    skills: [skillTable.styledComponrnts],
  },
  {
    id: 0,
    title: 'Music Education',
    description: '디자인 시안을 보고 구현한 페이지',
    thumbnail: musicEduThubnail,
    links: {
      deployment: 'styled-components/music-edu',
      github: 'https://github.com/jihunv8/training-ground/blob/main/src/app/styled-components/music-edu/READEME.md',
    },
    skills: [skillTable.styledComponrnts],
  },
];
