import styled from 'styled-components';
import { maxContentsArea, maxWidthLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';

import MockTrustMark from './MockTrustMark';

export default function About() {
  return (
    <Wrapper>
      <ContentsArea>
        <div>
          <div>
            <Strong>(주) 대한항공</Strong>웹사이트 제작자 : 박지훈
          </div>
          해당 페이지는 <KoreanAirLink href="https://www.koreanair.com/">대한항공 홈페이지</KoreanAirLink>를 참고하여
          제작한 퍼블리싱 연습 페이지입니다.
          <GithubLink href="https://github.com/jihunv8/publishing-prac--korean-air">Github 바로가기</GithubLink>
        </div>
        <MockTrustMarkContainer>
          <MockTrustMark />
          <MockTrustMark />
          <MockTrustMark />
          <MockTrustMark />
        </MockTrustMarkContainer>
      </ContentsArea>
    </Wrapper>
  );
}

About;

const Wrapper = styled.div`
  padding: 20px;
`;

const ContentsArea = styled.div`
  max-width: ${maxContentsArea};
  margin: 0 auto;
  color: #767676;
  font-size: 1.4rem;
  line-height: 1.58;
  display: flex;
  justify-content: space-between;
`;

const Strong = styled.strong`
  margin-right: 20px;
  color: #00256c;
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 1.58;
`;

const KoreanAirLink = styled.a`
  font-size: 1.4rem;
  text-decoration: underline;

  &:hover {
    font-weight: bold;
  }
`;

const GithubLink = styled.a`
  display: block;
  width: fit-content;
  margin-top: 8px;
  color: #555;
  font-size: 1.4rem;
  line-height: 1.58;

  &:hover {
    text-decoration: underline;
  }
`;

const MockTrustMarkContainer = styled.div`
  display: flex;

  @media ${maxWidthLarge} {
    display: none;
  }
`;
