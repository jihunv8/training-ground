import additionImage from '@sass/splatoon3/_images/banners/banner_addition.png';
import interviewImage from '@sass/splatoon3/_images/banners/banner_interview.png';

export const getBanners = () => [
  {
    id: 1,
    src: additionImage,
    alt: 'addition',
    href: '/temp',
  },
  {
    id: 2,
    src: interviewImage,
    alt: 'interview',
    href: '/temp',
  },
];

export const getBulletins = () => [
  { id: 0, date: '2023-05-25', title: '『스플래툰 3』의 뉴 시즌 「2023여름 Sizzle Season」이 6월 1일 개막.' },
  {
    id: 1,
    date: '2023-05-02',
    title: '『스플래툰 3』의 「젤다의 전설」 컬래버레이션 페스티벌이 이번 주말에 개최됩니다.',
  },
  {
    id: 2,
    date: '2023-04-14',
    title: '「스플래툰×젤다의 전설 컬래버레이션 페스티벌」을 기념한 페스티벌 T셔츠와 플래티넘 포인트 교환 상품이 출시!',
  },
  { id: 3, date: '2023-04-05', title: '「스플래툰 3 이벤트 매치」 리포트' },
  { id: 4, date: '2023-03-24', title: '『스플래툰 3』의 제5회 페스티벌 「미확인 생물 페스티벌」은 4월 1일부터 개최.' },
  { id: 5, date: '2023-03-09', title: '「스플래툰 3 이벤트 매치」 참가팀 발표' },
  { id: 6, date: '2023-03-01', title: '2023.3.1 『스플래툰 3』의 새로운 시즌 「2023 봄 Fresh Season」이 오늘 개막!' },
];
