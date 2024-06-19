import styled from 'styled-components';
import * as mediaSize from '@/app/styled-components/music-edu/_styles/utils/mediaSize';
import LeftContents from './LeftContents';
import RightContent from './RightContents';

function Section6() {
  return (
    <Section6Wrapper>
      <ContentsArea>
        <LeftContents />
        <RightContent />
      </ContentsArea>
    </Section6Wrapper>
  );
}

export default Section6;

const Section6Wrapper = styled.section``;

const ContentsArea = styled.div`
  width: ${mediaSize.contentsAreaXLarge};
  margin: 0 auto;
  padding: 60px 0;
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
