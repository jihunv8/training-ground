export type NavLink = {
  title: string;
  href: string;
};

export type LnbMenu = {
  links: NavLink[];
} & NavLink;

export type GnbMenu = {
  lnb: LnbMenu[];
} & NavLink;

const gnbData: GnbMenu[] = [
  {
    title: '회사소개',
    href: '',
    lnb: [
      {
        title: '오리온',
        href: '',
        links: [
          { title: '오리온 소개', href: '' },
          { title: '경영방침', href: '' },
          { title: 'CI 소개', href: '' },
          { title: '회사소개서', href: '' },
        ],
      },
      {
        title: '역사관',
        href: '',
        links: [
          { title: '창업주 이양구 회장', href: '' },
          { title: '연혁', href: '' },
        ],
      },
      {
        title: '오리온 계열사',
        href: '',
        links: [
          { title: '오리온', href: '' },
          { title: '오리온농협', href: '' },
          { title: '오리온재단', href: '' },
        ],
      },
      {
        title: '오리온홀딩스 계열사',
        href: '',
        links: [
          { title: '오리온제주용암수', href: '' },
          { title: '산둥루캉하오리요우', href: '' },
          { title: '쇼박스', href: '' },
        ],
      },
      {
        title: '위치안내',
        href: '',
        links: [
          { title: '본사', href: '' },
          { title: '공장', href: '' },
          { title: '영업소', href: '' },
          { title: '물류센터', href: '' },
        ],
      },
    ],
  },
  {
    title: '사업분야',
    href: '',
    lnb: [
      {
        title: '제과',
        href: '',
        links: [
          { title: '신제품', href: '' },
          { title: '스낵', href: '' },
          { title: '캔디', href: '' },
          { title: '초콜릿', href: '' },
          { title: '닥터유', href: '' },
          { title: '파이', href: '' },
          { title: '비스킷', href: '' },
          { title: '껌', href: '' },
          { title: '마켓오', href: '' },
        ],
      },
      {
        title: '음료',
        href: '',
        links: [
          { title: '닥터유 제주용암수', href: '' },
          { title: '닥터유 면역수', href: '' },
        ],
      },
      {
        title: '간편대용식',
        href: '',
        links: [
          { title: '마켓오네이처', href: '' },
          { title: '오!그래놀라', href: '' },
          { title: '오!그래놀라 바', href: '' },
        ],
      },
      {
        title: '바이오',
        href: '',
        links: [{ title: '신둥루캉하오리요우', href: '' }],
      },
    ],
  },
  {
    title: '윤리경영',
    href: '',
    lnb: [
      {
        title: '개요',
        href: '',
        links: [
          { title: '윤리경영 체계', href: '' },
          { title: '제도/시스템', href: '' },
          { title: '주요활동', href: '' },
          { title: '부패방지', href: '' },
        ],
      },
      {
        title: '임직원',
        href: '',
        links: [
          { title: '인권경영', href: '' },
          { title: '안전보건', href: '' },
          { title: '인재육성', href: '' },
          { title: '임직원만족', href: '' },
        ],
      },
      {
        title: '고객',
        href: '',
        links: [
          { title: '고객만족', href: '' },
          { title: '식품안전', href: '' },
        ],
      },
      {
        title: '협력회사',
        href: '',
        links: [
          { title: '동반성장', href: '' },
          { title: '대리점 상생', href: '' },
        ],
      },
      {
        title: '주주',
        href: '',
        links: [
          { title: '기업지배구조', href: '' },
          { title: '주주가치제고', href: '' },
        ],
      },
      {
        title: '사회',
        href: '',
        links: [
          { title: '친환경 경영', href: '' },
          { title: '사회공헌', href: '' },
        ],
      },
      {
        title: '보고서 및 주요성과',
        href: '',
        links: [
          { title: '대외평가 수상', href: '' },
          { title: '회사소개서', href: '' },
        ],
      },
    ],
  },
  {
    title: '투자정보',
    href: '',
    lnb: [
      {
        title: '주식정보',
        href: '',
        links: [
          { title: '주가정보', href: '' },
          { title: '주주구성', href: '' },
          { title: '배당정보', href: '' },
        ],
      },
      {
        title: '주주총회',
        href: '',
        links: [],
      },
      {
        title: '기업지배구조',
        href: '',
        links: [
          { title: '기업지배구조', href: '' },
          { title: '이사회 구성', href: '' },
          { title: '이사회 권한 및 규정', href: '' },
          { title: '이사회 운영 현황', href: '' },
        ],
      },
      {
        title: '재무정보',
        href: '',
        links: [
          { title: '재무정보', href: '' },
          { title: '분기실적자료', href: '' },
          { title: '감사보고서', href: '' },
          { title: '공시', href: '' },
          { title: '공고', href: '' },
        ],
      },
      {
        title: 'IR문의',
        href: '',
        links: [],
      },
    ],
  },
  {
    title: '뉴스룸',
    href: '',
    lnb: [
      {
        title: '유튜브',
        href: '',
        links: [],
      },
      {
        title: '인스타그램',
        href: '',
        links: [],
      },
      {
        title: '보도자료',
        href: '',
        links: [],
      },
    ],
  },
  {
    title: '고객센터',
    href: '',
    lnb: [
      {
        title: '상담페이지',
        href: '',
        links: [
          { title: '상담접수', href: '' },
          { title: '접수내역 조회', href: '' },
          { title: '신규거래 제안', href: '' },
        ],
      },
      {
        title: '피해보상기구',
        href: '',
        links: [
          { title: '고객의 소리', href: '' },
          { title: '상담내용 처리과정', href: '' },
          { title: '소비자 분쟁(보상 처리과정)', href: '' },
        ],
      },
      {
        title: '자주 묻는 질문',
        href: '',
        links: [
          { title: '제품', href: '' },
          { title: '표기', href: '' },
          { title: '기타', href: '' },
          { title: '개선 반영 사례', href: '' },
        ],
      },
    ],
  },
];

export default gnbData;
