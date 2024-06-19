'use client';
import styled from 'styled-components';
import * as mediaSize from '@/app/styled-components/music-edu/_styles/utils/mediaSize';

import Contents from './Contents';

import image from '@/app/styled-components/music-edu/_images/man-min.jpg';
import background from '@/app/styled-components/music-edu/_images/ww.jpg';

function Section1() {
  return (
    <Section1Wrapper>
      <ContentsArea>
        <Image />
        <Contents />
      </ContentsArea>
    </Section1Wrapper>
  );
}

export default Section1;

const Section1Wrapper = styled.section`
  background: url(${background.src}) no-repeat center / cover;
`;

const ContentsArea = styled.div`
  width: ${mediaSize.contentsAreaXLarge};
  height: 691px;
  margin: 0 auto;
  display: flex;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    width: ${mediaSize.contentsAreaLarge};
    height: 570px;
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    width: ${mediaSize.contentsAreaMiddle};
    height: 535px;
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    width: ${mediaSize.contentsAreaSmall};
    height: 1194px;
    flex-direction: column;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    width: ${mediaSize.contentsAreaXSmall};
    height: 1078px;
  }
`;

const ImageContainer = styled.div`
  flex-grow: 47;
  flex-basis: 0;

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    flex-grow: 55;
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    order: 1;
  }
`;

const Image = styled.div`
  background: url(${image.src}) no-repeat center / cover;
  flex-grow: 47;
  flex-basis: 0;

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    flex-grow: 55;
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    order: 1;
  }
`;
