import notice1BgPC from '@/app/styled-components/korean-air/_images/notice-banner-mock-data-images/tibb__bg-pc-03.png';
import notice1BgM from '@/app/styled-components/korean-air/_images/notice-banner-mock-data-images/tibb__bg-m-03.png';

import notice2BgPC from '@/app/styled-components/korean-air/_images/notice-banner-mock-data-images/tibb__bg-pc_blue.png';
import notice2BgM from '@/app/styled-components/korean-air/_images/notice-banner-mock-data-images/tibb__bg-m_blue.png';
import { StaticImageData } from 'next/image';

export type NoticeBannerDataImage = Readonly<{
  src: StaticImageData | string;
  alt: string;
}>;

export type NoticeBannerData = Readonly<{
  title: string;
  subtitle: string;
  href: string;
  bgImage: {
    pc: NoticeBannerDataImage;
    mobile: NoticeBannerDataImage;
  };
}>;

const mockNoticeBannerData: NoticeBannerData[] = [
  {
    title: '코로나19 업데이트 센터',
    subtitle: '전 세계 출입국 규정, 항공편 운항 등 코로나19와 관련된 최신 정보를 확인하실 수 있습니다.',
    href: '',
    bgImage: {
      pc: {
        src: notice1BgPC,
        alt: '',
      },
      mobile: {
        src: notice1BgM,
        alt: '',
      },
    },
  },
  {
    title: 'NEW SKYPASS',
    subtitle: '새롭게 개편된 스카이패스가 2023년 4월 시작됩니다.',
    href: '',
    bgImage: {
      pc: {
        src: notice2BgPC,
        alt: '',
      },
      mobile: {
        src: notice2BgM,
        alt: '',
      },
    },
  },
];

export default mockNoticeBannerData;
