import backgroundImage1 from '@/app/styled-components/orion/_images/home/ethical-management/ethical_img01.jpg';
import backgroundImage2 from '@/app/styled-components/orion/_images/home/ethical-management/ethical_img02.jpg';
import backgroundImage3 from '@/app/styled-components/orion/_images/home/ethical-management/ethical_img03.jpg';
import backgroundImage4 from '@/app/styled-components/orion/_images/home/ethical-management/ethical_img04.jpg';
import backgroundImage5 from '@/app/styled-components/orion/_images/home/ethical-management/ethical_img05.jpg';
import backgroundImage6 from '@/app/styled-components/orion/_images/home/ethical-management/ethical_img06.jpg';
import backgroundImage7 from '@/app/styled-components/orion/_images/home/ethical-management/ethical_img07.jpg';
import backgroundImageM7 from '@/app/styled-components/orion/_images/home/ethical-management/ethical_img07_m.jpg';
import { StaticImageData } from 'next/image';

export type EthicalManagementCardImage = {
  src: string | StaticImageData;
  alt: string;
};
export type EthicalManagementCard = {
  title: string;
  contents: string;
  hoverColor: string;
  image: EthicalManagementCardImage;
  imageM?: EthicalManagementCardImage;
};

export const ethicalManagementCards: EthicalManagementCard[] = [
  {
    title: '개요',
    contents: '윤리경영을 기반으로 한 지속성장을 추구합니다.',
    image: {
      src: backgroundImage1,
      alt: '',
    },
    hoverColor: 'rgba(221, 130, 24, 0.85)',
  },
  {
    title: '임직원',
    contents: '임직원의 행복과 발전을 중시합니다.',
    image: {
      src: backgroundImage2,
      alt: '',
    },
    hoverColor: 'rgba(91, 133, 240, 0.85)',
  },
  {
    title: '고객',
    contents: '고객의 만족을 추구합니다.',
    image: {
      src: backgroundImage3,
      alt: '',
    },
    hoverColor: 'rgba(148, 193, 18, 0.85)',
  },
  {
    title: '협력회사',
    contents: '협력회사와 동반성장을 실현합니다.',
    image: {
      src: backgroundImage4,
      alt: '',
    },
    hoverColor: 'rgba(36, 181, 214, 0.85)',
  },
  {
    title: '주주',
    contents: '주주가치를 증대합니다.',
    image: {
      src: backgroundImage5,
      alt: '',
    },
    hoverColor: 'rgba(156, 39, 228, 0.85)',
  },
  {
    title: '사회',
    contents: '사회에 대한 책임을 다합니다.',
    image: {
      src: backgroundImage6,
      alt: '',
    },
    hoverColor: 'rgba(204, 31, 49, 0.85)',
  },
  {
    title: '보고서 및 주요성과',
    contents: '윤리경영 주요활동 및 성과를 소개합니다.',
    image: {
      src: backgroundImage7,
      alt: '',
    },

    imageM: {
      src: backgroundImageM7,
      alt: '',
    },
    hoverColor: 'rgba(20, 160, 76, 0.85)',
  },
];
