import styled from 'styled-components';
import { maxContentsArea, maxWidthLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';

import UsefulMenu from './UsefulMenu';

function Section4() {
  return (
    <Section4Wrapper>
      <ContentsArea>
        <Title>여행의 완성을 위한 경험</Title>
        <UsefulMenu />
      </ContentsArea>
    </Section4Wrapper>
  );
}

export default Section4;

const Section4Wrapper = styled.section`
  padding: 0 20px;
  margin-top: 60px;

  @media ${maxWidthLarge} {
    margin-top: 40px;
  }
`;

const ContentsArea = styled.div`
  max-width: ${maxContentsArea};
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  line-height: 1.53;
`;
