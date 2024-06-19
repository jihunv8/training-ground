import styled from 'styled-components';
import * as mediaSize from '@/app/styled-components/music-edu/_styles/utils/mediaSize';

import Header from './Header';
import ContentsList from './ContentsList';

function Section3() {
  return (
    <Section3Wrapper>
      <ContentsArea>
        <Header />
        <ContentsList />
      </ContentsArea>
    </Section3Wrapper>
  );
}

export default Section3;

const Section3Wrapper = styled.section`
  background-color: #e9effd;
`;

const ContentsArea = styled.div`
  width: ${mediaSize.contentsAreaXLarge};
  margin: 0 auto;
  padding: 60px 0;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    width: ${mediaSize.contentsAreaLarge};
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    width: ${mediaSize.contentsAreaMiddle};
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    width: ${mediaSize.contentsAreaSmall};
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    width: ${mediaSize.contentsAreaXSmall};
  }
`;
