export type FooterSiteLink = { name: String; href: string; isBold?: boolean };
export type FooterSiteLinkGroup = {
  title: string;
  links: FooterSiteLink[];
};

const footerSiteLinksData: FooterSiteLinkGroup[] = [
  {
    title: '회사 소개',
    links: [
      { name: '대한항공에 대하여', href: '' },
      { name: '기업지배구조', href: '' },
      { name: '투자정보', href: '' },
      { name: '지속가능경영', href: '' },
      { name: '뉴스룸', href: '' },
    ],
  },
  {
    title: '고객 지원',
    links: [
      { name: '공지사항', href: '' },
      { name: '자주 묻는 질문', href: '' },
      { name: '고객의 말씀', href: '' },
      { name: '서비스 센터', href: '' },
      { name: 'e-서식함', href: '' },
      { name: '웹 접근성', href: '' },
    ],
  },
  {
    title: '약관 및 규정',
    links: [
      { name: '개인정보 처리방침', href: '', isBold: true },
      { name: '이용약관', href: '' },
      { name: '운송약관 및 고지사항', href: '' },
      { name: '소비자 안전 관련 정보', href: '' },
      { name: '운임 및 서비스 요금표', href: '' },
    ],
  },
  {
    title: '기타 안내',
    links: [
      { name: '초등학생 견학 신청', href: '' },
      { name: '고객 안내 서비스', href: '' },
      { name: '항공교통이용자 서비스 계획', href: '' },
      { name: '항공교통이용자 피해 구제', href: '' },
      { name: '관련 사이트', href: '' },
      { name: '사이트맵', href: '' },
    ],
  },
];

export default footerSiteLinksData;
