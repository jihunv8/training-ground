import BUDImage from '@/app/styled-components/korean-air/_images/trip-recomende-mock-data-images/BUD-list-pc.jpg';
import DXBImage from '@/app/styled-components/korean-air/_images/trip-recomende-mock-data-images/DXB-list-pc.jpg';
import BCNImage from '@/app/styled-components/korean-air/_images/trip-recomende-mock-data-images/BCN-list-pc.jpg';
import FCOImage from '@/app/styled-components/korean-air/_images/trip-recomende-mock-data-images/FCO-list-pc.jpg';
import HKTImage from '@/app/styled-components/korean-air/_images/trip-recomende-mock-data-images/HKT-list-pc.jpg';
import CNXImage from '@/app/styled-components/korean-air/_images/trip-recomende-mock-data-images/CNX-list-pc.jpg';
import HNLImage from '@/app/styled-components/korean-air/_images/trip-recomende-mock-data-images/HNL-list-pc.jpg';
import AKLImage from '@/app/styled-components/korean-air/_images/trip-recomende-mock-data-images/AKL-list-pc.jpg';
import { StaticImageData } from 'next/image';

export type RecomendedTrip = {
  from: string;
  to: string;
  cabinClass: string;
  type: string;
  price: number;
  image: {
    src: StaticImageData | string;
    alt: string;
  };
};

const mockTripsData: RecomendedTrip[] = [
  {
    from: '서울/인천',
    to: '부다페스트',
    cabinClass: '일반석',
    type: '왕복',
    price: 1333000,
    image: {
      src: BUDImage,
      alt: '',
    },
  },
  {
    from: '서울/인천',
    to: '두바이',
    cabinClass: '일반석',
    type: '왕복',
    price: 1151100,
    image: {
      src: DXBImage,
      alt: '',
    },
  },
  {
    from: '서울/인천',
    to: '바르셀로나',
    cabinClass: '일반석',
    type: '왕복',
    price: 1515500,
    image: {
      src: BCNImage,
      alt: '',
    },
  },
  {
    from: '서울/인천',
    to: '로마/레오나르도 다빈치',
    cabinClass: '일반석',
    type: '왕복',
    price: 1393300,
    image: {
      src: FCOImage,
      alt: '',
    },
  },
  {
    from: '서울/인천',
    to: '푸껫',
    cabinClass: '일반석',
    type: '왕복',
    price: 655600,
    image: {
      src: HKTImage,
      alt: '',
    },
  },
  {
    from: '서울/인천',
    to: '치앙마이',
    cabinClass: '일반석',
    type: '왕복',
    price: 820700,
    image: {
      src: CNXImage,
      alt: '',
    },
  },
  {
    from: '서울/인천',
    to: '호놀룰루 (하와이)',
    cabinClass: '일반석',
    type: '왕복',
    price: 1208000,
    image: {
      src: HNLImage,
      alt: '',
    },
  },

  {
    from: '서울/인천',
    to: '오클랜드',
    cabinClass: '일반석',
    type: '왕복',
    price: 1716200,
    image: {
      src: AKLImage,
      alt: '',
    },
  },
];

export default mockTripsData;
