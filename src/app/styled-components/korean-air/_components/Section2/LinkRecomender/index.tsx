import styled, { css } from 'styled-components';
import { maxContentsArea, maxWidthLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';

import RecomendedLink from './RecomendedLink';

export default function LinkRecomender() {
  return (
    <Wrapper>
      <Links>
        <RecomendedLink
          title="최저가 항공권 찾기"
          subtitle="합리적인 가격의 항공권을 지도를 통해 편리하게 확인하세요."
          href=""
        />
        <RecomendedLink title="이벤트 확인하기" subtitle="고객님을 위해 준비된 다채로운 혜택을 확인해보세요." href="" />
      </Links>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f3f4f8;
  padding: 40px 20px;
`;

const Links = styled.div`
  max-width: ${maxContentsArea};
  margin: 0 auto;

  display: flex;
  gap: 30px;

  @media ${maxWidthLarge} {
    flex-direction: column;
    gap: 12px;
  }
`;
