import mapPCImage from '@/app/styled-components/korean-air/_images/bg/map_pc.jpg';
import mapTabletImage from '@/app/styled-components/korean-air/_images/bg/map_ta.jpg';
import mapMobileImage from '@/app/styled-components/korean-air/_images/bg/map_mo.jpg';

import bannerImage2 from '@/app/styled-components/korean-air/_images/bg/keyvisual_pc_sherpa.jpg';
import bannerImage3 from '@/app/styled-components/korean-air/_images/bg/H_PLCC_pc.jpg';

import { StaticImageData } from 'next/image';

export type Section1MainBannerImage = {
  src: string | StaticImageData;
  alt: string;
};

export type Section1MainBanner = {
  title: string;
  href: string;
  bgImage: {
    pc: Section1MainBannerImage;
    tablet: Section1MainBannerImage;
    mobile: Section1MainBannerImage;
  };
};

const mockData: Section1MainBanner[] = [
  {
    title: '지금 갈 수 있는 여행지는 어디? 얼마?',
    href: '',
    bgImage: {
      pc: {
        src: mapPCImage,
        alt: '',
      },
      tablet: {
        src: mapTabletImage,
        alt: '',
      },
      mobile: {
        src: mapMobileImage,
        alt: '',
      },
    },
  },
  {
    title: '여행지별 입국 요건, \n이제 지도에서도 확인하실 수 있습니다.',
    href: '',
    bgImage: {
      pc: {
        src: bannerImage2,
        alt: '',
      },
      tablet: {
        src: bannerImage2,
        alt: '',
      },
      mobile: {
        src: bannerImage2,
        alt: '',
      },
    },
  },
  {
    title: '알고보면 더 매력적인, 대한항공카드 가이드!',
    href: '',
    bgImage: {
      pc: {
        src: bannerImage3,
        alt: '',
      },
      tablet: {
        src: bannerImage3,
        alt: '',
      },
      mobile: {
        src: bannerImage3,
        alt: '',
      },
    },
  },
];

export default mockData;
