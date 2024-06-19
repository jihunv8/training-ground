import styled from 'styled-components';
import * as mediaSize from '@/app/styled-components/music-edu/_styles/utils/mediaSize';
import LeftContents from './LeftContents';
import RightContent from './RightContents';

function Section8() {
  return (
    <Section8Wrapper>
      <ContentsArea>
        <LeftContents />
        <RightContent />
      </ContentsArea>
    </Section8Wrapper>
  );
}

export default Section8;

const Section8Wrapper = styled.section`
  background-color: #e9effd;
`;

const ContentsArea = styled.div`
  width: ${mediaSize.contentsAreaXLarge};
  margin: 0 auto;
  padding: 58px 0;
  display: flex;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    width: ${mediaSize.contentsAreaLarge};
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    width: ${mediaSize.contentsAreaMiddle};
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    width: ${mediaSize.contentsAreaSmall};
    flex-direction: column;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    width: ${mediaSize.contentsAreaXSmall};
  }
`;
