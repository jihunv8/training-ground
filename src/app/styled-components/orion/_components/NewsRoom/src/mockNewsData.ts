import tempImage1 from '@/app/styled-components/orion/_images/news/temp-image1.jpg';
import tempImage2 from '@/app/styled-components/orion/_images/news/temp-image2.png';
import tempImage3 from '@/app/styled-components/orion/_images/news/temp-image3.jpg';
import tempImage4 from '@/app/styled-components/orion/_images/news/temp-image4.jpg';
import tempImage5 from '@/app/styled-components/orion/_images/news/temp-image5.png';
import tempImage6 from '@/app/styled-components/orion/_images/news/temp-image6.jpg';
import tempImage7 from '@/app/styled-components/orion/_images/news/temp-image7.jpg';
import tempImage8 from '@/app/styled-components/orion/_images/news/temp-image8.jpg';
import tempImage9 from '@/app/styled-components/orion/_images/news/temp-image9.jpg';
import tempImage10 from '@/app/styled-components/orion/_images/news/temp-image10.jpg';
import tempImage11 from '@/app/styled-components/orion/_images/news/temp-image11.png';
import tempImage12 from '@/app/styled-components/orion/_images/news/temp-image12.jpg';
import tempImage13 from '@/app/styled-components/orion/_images/news/temp-image13.jpg';
import tempImage14 from '@/app/styled-components/orion/_images/news/temp-image14.png';
import tempImage15 from '@/app/styled-components/orion/_images/news/temp-image15.jpg';
import tempImage16 from '@/app/styled-components/orion/_images/news/temp-image16.png';
import tempImage17 from '@/app/styled-components/orion/_images/news/temp-image17.jpg';
import tempImage18 from '@/app/styled-components/orion/_images/news/temp-image18.jpg';
import tempImage19 from '@/app/styled-components/orion/_images/news/temp-image19.jpg';
import tempImage20 from '@/app/styled-components/orion/_images/news/temp-image20.jpg';
import tempImage21 from '@/app/styled-components/orion/_images/news/temp-image21.jpg';
import tempImage22 from '@/app/styled-components/orion/_images/news/temp-image22.jpg';

export type NewsType = 'instagram' | 'youtube' | 'news';

export type News = {
  imageUrl: string;
  contents: string;
  type: NewsType;
};

export const mockNewsData: News[] = [
  {
    type: 'instagram',
    imageUrl: tempImage9.src,
    contents: '운동 필수템 닥터유와 함께하는 신년 운동 계획 이벤트',
  },
  {
    type: 'news',
    imageUrl: tempImage10.src,
    contents: '오리온 베트남 법인, 2005년 법인 설립 이래 사상 첫 연매출 4천억 원 돌파',
  },
  {
    type: 'news',
    imageUrl: tempImage1.src,
    contents: "오리온 토핑 초콜릿 '톡핑', 와인 전문숍 '와인앤모어'와 컬래버레이션 이벤트 진행",
  },
  { type: 'instagram', imageUrl: tempImage2.src, contents: '연말 파티엔 톡핑 초콜릿과 함께♥' },
  { type: 'instagram', imageUrl: tempImage3.src, contents: '초코파이情 해핍리쇼콜라와 함께하는 따뜻한 情나눔 이벤트' },
  { type: 'instagram', imageUrl: tempImage4.src, contents: '꼬물탱X케피 네이버 쇼핑 라이브 소문내기 이벤트' },
  {
    type: 'instagram',
    imageUrl: tempImage5.src,
    contents: '<꼬북칩 크런치즈> 전국 편의점, 대형마트, 체인스토어 판매시작!',
  },
  { type: 'news', imageUrl: tempImage6.src, contents: "오리온, 겨울 한정판 '초코파이情 해피베리쇼콜라' 재출시" },
  { type: 'instagram', imageUrl: tempImage7.src, contents: '마이구미 알맹이젤리 3종 매력탐구' },
  {
    type: 'youtube',
    imageUrl: tempImage8.src,
    contents:
      '★특별한 체험이 있는 제주여행지 추천★ 닥터유 제주용암수 홍보관 | 제주도 브이로그 | 함덕해수욕장 | 월정리해수욕장 | 댓글 이벤트',
  },
  {
    type: 'instagram',
    imageUrl: tempImage11.src,
    contents: '크리스마스엔 달콤한 오리온 과자 선물세트를 선물하세요!',
  },
  {
    type: 'instagram',
    imageUrl: tempImage12.src,
    contents: '초코파이情 해피베리쇼콜라 신상선발대 모집',
  },
  {
    type: 'youtube',
    imageUrl: tempImage13.src,
    contents: '오징어땅콩 원조 맛집 오리온이 구운김땅콩까지 만들었다고?ㅣ오리온 공식썰 오!피셜 Ep.06 오징어땅콩',
  },
  {
    type: 'youtube',
    imageUrl: tempImage14.src,
    contents: '나에게 딱 맞는 그래놀라 제대로 고르는 방법 대.공.개!',
  },
  {
    type: 'youtube',
    imageUrl: tempImage15.src,
    contents: '도대체 어떤 물을 마셔야 될까? 드디어 고민 해결!',
  },
  {
    type: 'youtube',
    imageUrl: tempImage16.src,
    contents: '오리온 임직원들의 감자 수확 봉사활동 현장!',
  },
  {
    type: 'youtube',
    imageUrl: tempImage17.src,
    contents: '꼬북칩 먹기 전에 이 영상 ❗필수 시청❗ㅣ오리온 공식인증썰 오!피셜 Ep.01 꼬북칩',
  },
  {
    type: 'youtube',
    imageUrl: tempImage18.src,
    contents: '마시던 대로 매일. 쉽게. 닥터유 면역수 (30’s ver)',
  },
  {
    type: 'youtube',
    imageUrl: tempImage19.src,
    contents: '모르면 손해보는 완전 쉽게 정상적인 면역기능 챙기는 방법!',
  },
  { type: 'news', imageUrl: tempImage20.src, contents: '오리온, ‘마켓오네이처 오!그래놀라 식물성 100%’ 2종 출시' },
  { type: 'news', imageUrl: tempImage21.src, contents: '오리온, 크리스마스 한정판 ‘2022 오리온 어드벤트 캘린더’ 출시' },
  { type: 'news', imageUrl: tempImage22.src, contents: '오리온, 2022년 하반기 채용 연계형 인턴십 진행' },
  { type: 'news', imageUrl: tempImage20.src, contents: '다른 두 사진이 사람 얼굴이 나와서 이 사진으로 대체함' },
  { type: 'news', imageUrl: tempImage21.src, contents: '다른 두 사진이 사람 얼굴이 나와서 이 사진으로 대체함' },
];
