import styled from 'styled-components';
import * as mediaSize from '@/app/styled-components/music-edu/_styles/utils/mediaSize';

import Contents from './Contents';

import image from '@/app/styled-components/music-edu/_images/bnbnbn.jpg';

function Section7() {
  return (
    <Section7Wrapper>
      <ContentsArea>
        <Shape1 />
        <Image />
        <Shape2 />
        <Contents />
      </ContentsArea>
    </Section7Wrapper>
  );
}

export default Section7;

const Section7Wrapper = styled.section``;

const ContentsArea = styled.div`
  width: ${mediaSize.contentsAreaXLarge};
  margin: 0 auto;
  padding-bottom: 70px;
  position: relative;

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

const Shape1 = styled.div`
  background-color: #1847b8;
  width: 806px;
  height: 70px;
  margin-left: auto;
  margin-right: 122px;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    width: 586px;
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    margin-right: 32px;
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    width: 423px;
    margin-right: 47px;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    width: 100%;
    margin-right: 0;
  }
`;

const Image = styled.div`
  background: url(${image.src}) no-repeat center / cover;
  width: 1009px;
  height: 570px;
  margin-left: auto;
  margin-right: 0;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    width: 840px;
    height: 531px;
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    width: 688px;
    height: 431px;
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    width: 100%;
    height: 338px;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    height: 213px;
  }
`;

const Shape2 = styled.div`
  background-color: #6b93f2;
  width: 570px;
  height: 476px;
  margin: 0 auto;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    height: 514px;
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    width: 543px;
    height: 525px;
    margin-left: 75px;
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    width: 482px;
    height: 543px;
    margin-left: auto;
    margin-right: 0;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    width: 100%;
    height: 618px;
    margin-top: 50px;
  }
`;
