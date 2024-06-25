import cardIcon from '@/app/styled-components/korean-air/_images/icons/masl__credit-card-pc.png';
import hotelIcon from '@/app/styled-components/korean-air/_images/icons/masl__hotel-pc.png';
import rentalIcon from '@/app/styled-components/korean-air/_images/icons/masl__rental-car-pc.png';
import dutyFreeIcon from '@/app/styled-components/korean-air/_images/icons/masl__duty-free-pc.png';
import insuranceIcon from '@/app/styled-components/korean-air/_images/icons/masl__insurance-pc.png';
import guideIcon from '@/app/styled-components/korean-air/_images/icons/masl__guide-book-pc.png';
import { StaticImageData } from 'next/image';

export type UsefulMenu = {
  title: string;
  href: string;
  icon: {
    src: string | StaticImageData;
    alt: string;
  };
};

const usefulMenus: UsefulMenu[] = [
  {
    title: '대한항공 카드',
    href: '',
    icon: {
      src: cardIcon,
      alt: '',
    },
  },
  {
    title: '호텔',
    href: '',
    icon: {
      src: hotelIcon,
      alt: '',
    },
  },
  {
    title: '렌터카',
    href: '',
    icon: {
      src: rentalIcon,
      alt: '',
    },
  },
  {
    title: '기내 면세점',
    href: '',
    icon: {
      src: dutyFreeIcon,
      alt: '',
    },
  },
  {
    title: '여행자 보험',
    href: '',
    icon: {
      src: insuranceIcon,
      alt: '',
    },
  },
  {
    title: '여행 상품',
    href: '',
    icon: {
      src: guideIcon,
      alt: '',
    },
  },
];

export default usefulMenus;
