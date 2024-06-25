import bannerImage1 from '@/app/styled-components/orion/_images/main-banner/cover_img01.jpg';
import bannerImage2 from '@/app/styled-components/orion/_images/main-banner/cover_img02.jpg';
import bannerImage3 from '@/app/styled-components/orion/_images/main-banner/cover_img03.jpg';
import bannerImage4 from '@/app/styled-components/orion/_images/main-banner/cover_img04.jpg';

import thumbImage1 from '@/app/styled-components/orion/_images/main-banner/cover_thumb01.jpg';
import thumbImage2 from '@/app/styled-components/orion/_images/main-banner/cover_thumb02.jpg';
import thumbImage3 from '@/app/styled-components/orion/_images/main-banner/cover_thumb03.jpg';
import thumbImage4 from '@/app/styled-components/orion/_images/main-banner/cover_thumb04.jpg';

import type { StaticImageData } from 'next/image';

type BannerItemImage = {
  src: string | StaticImageData;
  alt: string;
};

export type BannerItem = {
  title: string;
  contents: string;
  contentsTextColor?: string;
  images: {
    bg: BannerItemImage;
    thumb: BannerItemImage;
  };
};

export const bannerItems: BannerItem[] = [
  {
    title: '제과',
    contents: '맛있고 품질 좋은 제품을\n합리적인 가격으로 공급합니다.',
    contentsTextColor: '#fff',
    images: {
      bg: {
        src: bannerImage1,
        alt: '',
      },
      thumb: {
        src: thumbImage1,
        alt: '',
      },
    },
  },
  {
    title: '음료',
    contents: "제주 청정 수자원인\n용암해주로 만든\n'닥터유 제주용암수'",
    images: {
      bg: {
        src: bannerImage2,
        alt: '',
      },
      thumb: {
        src: thumbImage2,
        alt: '',
      },
    },
  },
  {
    title: '간편대용식',
    contents: "더 건강하게 더 맛있게\n원물 그대로 담은 자연한끼\n'마켓오네이처'",
    images: {
      bg: {
        src: bannerImage3,
        alt: '',
      },
      thumb: {
        src: thumbImage3,
        alt: '',
      },
    },
  },
  {
    title: '바이오',
    contents: '진단키트 사업을 시작으로 백신, 신약 발굴 및 개발까지\n제약/바이오 Platform 기업을 추구합니다.',
    contentsTextColor: '#fff',
    images: {
      bg: {
        src: bannerImage4,
        alt: '',
      },
      thumb: {
        src: thumbImage4,
        alt: '',
      },
    },
  },
];
