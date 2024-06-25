import bookingIcon from '@/app/styled-components/korean-air/_images/icons/ico-booking.svg';
import reservationIcon from '@/app/styled-components/korean-air/_images/icons/ico-reservation.svg';
import checkinIcon from '@/app/styled-components/korean-air/_images/icons/ico-checkin.svg';
import scheduleIcon from '@/app/styled-components/korean-air/_images/icons/ico-schedule.svg';
import dutyfreeIcon from '@/app/styled-components/korean-air/_images/icons/ico-dutyfree.svg';
import businessIcon from '@/app/styled-components/korean-air/_images/icons/ico-business.svg';
import eventIcon from '@/app/styled-components/korean-air/_images/icons/ico-event.svg';

export type HeaderLink = Readonly<{
  name: string;
  href: string;
}>;

export type HeaderLinkGroup = Readonly<{
  title: string;
  href?: string;
  links: HeaderLink[];
}>;

export type HeaderMenuColumn = HeaderLinkGroup[];

export type HeaderMenus = {
  book: HeaderMenuColumn[];
  airport: HeaderMenuColumn[];
  inFlight: HeaderMenuColumn[];
  skypass: HeaderMenuColumn[];
};

export type HeaderMenuKey = keyof HeaderMenus;

const headerMenus: HeaderMenus = {
  book: [
    [
      {
        title: '구매 안내',
        links: [
          { name: '국내선', href: '' },
          { name: '국제선', href: '' },
          { name: '사전 좌석 배정', href: '' },
          { name: '좌석 등급', href: '' },
          { name: '유료 부가상품', href: '' },
          { name: '온라인 결제 안내', href: '' },
        ],
      },
    ],
    [
      {
        title: '변경 및 환불 안내',
        links: [
          { name: '항공권 변경', href: '' },
          { name: '항공권 환불', href: '' },
          { name: '예약부도위약금', href: '' },
        ],
      },
      {
        title: '최저가 항공권',
        href: '',
        links: [],
      },
    ],
    [
      {
        title: '환승 상품',
        links: [
          { name: '환승 전용 내항기', href: '' },
          { name: 'Rail & Fly', href: '' },
        ],
      },
      {
        title: '공동운항 안내',
        href: '',
        links: [],
      },
      {
        title: '운항 노선도',
        href: '',
        links: [],
      },
    ],
  ],
  airport: [
    [
      {
        title: '수하물',
        links: [
          { name: '수하물 안내', href: '' },
          { name: '운송 제한 물품', href: '' },
          { name: '휴대 수하물', href: '' },
          { name: '위탁 수하물', href: '' },
          { name: '지연, 파손 및 유실물', href: '' },
        ],
      },
      {
        title: '탐승 절차',
        links: [
          { name: '탑승 절차 안내', href: '' },
          { name: 'SkyPriority', href: '' },
          { name: '출입국 규정 정보', href: '' },
        ],
      },
    ],
    [
      {
        title: '체크인',
        links: [
          { name: '사전 체크인', href: '' },
          { name: '공항 체크인', href: '' },
        ],
      },
      {
        title: '도움이 필요한 승객',
        links: [
          { name: '한가족 서비스', href: '' },
          { name: '유아 동반 승객', href: '' },
          { name: '혼자 여행하는 어린이', href: '' },
          { name: '몸이 불편한 승객', href: '' },
          { name: '임신중인 승객', href: '' },
          { name: '반려동물 동반 승객', href: '' },
        ],
      },
    ],
    [
      {
        title: '공항 이용 가이드',
        links: [
          { name: '인천국제공항', href: '' },
          { name: '취항지 공항 정보', href: '' },
        ],
      },
      {
        title: 'KAL 라운지',
        href: '',
        links: [],
      },
      {
        title: '엑설런트 프로그램',
        links: [
          { name: '엑설런트 보딩패스', href: '' },
          { name: '엑설런트 트랜짓 프로그램', href: '' },
        ],
      },
    ],
  ],
  inFlight: [
    [
      {
        title: '클래스별 서비스',
        links: [
          { name: '일등석', href: '' },
          { name: '프레스티지석', href: '' },
          { name: '일반석', href: '' },
        ],
      },
    ],
    [
      {
        title: '기내 서비스',
        links: [
          { name: '서비스 순서', href: '' },
          { name: '기내식', href: '' },
          { name: '기내 면세품', href: '' },
          { name: '기내 여행 가이드', href: '' },
        ],
      },
      {
        title: '기내 엔터테인먼트',
        href: '',
        links: [],
      },
    ],
    [
      {
        title: '항공기 안내',
        links: [
          { name: '보잉 787', href: '' },
          { name: '보인 777', href: '' },
          { name: '보잉 747', href: '' },
          { name: '보잉 737', href: '' },
          { name: '에어버스 A380', href: '' },
          { name: '에어버스 A330', href: '' },
          { name: '에어버스 A220', href: '' },
        ],
      },
    ],
  ],
  skypass: [
    [
      {
        title: '스카이패스 소개',
        links: [
          { name: '회원 혜택', href: '' },
          { name: '가족 마일리지', href: '' },
          { name: '제휴사 확인', href: '' },
          { name: '스카이팀 공동 혜택', href: '' },
        ],
      },
    ],
    [
      {
        title: '마일리지 적립',
        links: [
          { name: '대한항공', href: '' },
          { name: '신용카드', href: '' },
          { name: '여행과 라이프', href: '' },
          { name: '제휴 항공사', href: '' },
          { name: '탑승 후 적립 안내', href: '' },
        ],
      },
    ],
    [
      {
        title: '마일리지 사용',
        links: [
          { name: '대한항공 보너스', href: '' },
          { name: '제휴 항공사 보너스', href: '' },
          { name: '보너스 좌석 상황 보기', href: '' },
        ],
      },
      {
        title: '마일리지 사용',
        href: '',
        links: [],
      },
    ],
  ],
};

export default headerMenus;

export type HeaderQuickMenuLink = Readonly<{
  name: string;
  href: string;
  icon: {
    src: string;
    alt: string;
  };
}>;

export type HeaderQuickMenuLinkGroup = HeaderQuickMenuLink[];

export type HeaderQuickMenu = Readonly<{
  title: string;
  links: HeaderQuickMenuLinkGroup[];
}>;

export const quick: HeaderQuickMenu = {
  title: '빠른 메뉴',
  links: [
    [
      { name: '항공권 예매', href: '', icon: bookingIcon },
      { name: '예약 조회', href: '', icon: reservationIcon },
      { name: '체크인', href: '', icon: checkinIcon },
      { name: '항공편 현황', href: '', icon: scheduleIcon },
    ],
    [
      { name: '기내 면세점', href: '', icon: dutyfreeIcon },
      { name: '기업 출장 여행', href: '', icon: businessIcon },
      { name: '이벤트', href: '', icon: eventIcon },
    ],
  ],
};
