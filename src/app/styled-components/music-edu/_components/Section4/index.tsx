import styled from 'styled-components';
import * as mediaSize from '@/app/styled-components/music-edu/_styles/utils/mediaSize';

import image from '@/app/styled-components/music-edu/_images/jj.jpg';

import Contents from './Contents';

function Section4() {
  return (
    <Section4Wrapper>
      <ContentsArea>
        <Contents />
        <Image />
        <Circle />
      </ContentsArea>
    </Section4Wrapper>
  );
}

export default Section4;

const Section4Wrapper = styled.section``;

const ContentsArea = styled.div`
  width: ${mediaSize.contentsAreaXLarge};
  position: relative;
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

const Image = styled.div`
  background: url(${image.src}) no-repeat center / cover;
  width: 507px;
  height: 507px;
  margin: -307px auto 0 30px;
  border-radius: 100%;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    width: 484px;
    height: 484px;
    margin-left: 0;
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    width: 405px;
    height: 405px;
    margin-top: -93px;
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    margin-top: -88px;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    width: 285px;
    height: 285px;
    margin-top: -110px;
  }
`;

const Circle = styled.div`
  background-color: #a9c0f8;
  width: 228px;
  height: 228px;
  border-radius: 100%;
  margin: -110px 361px 0 auto;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    margin-top: -78px;
    margin-right: 228px;
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    width: 192px;
    height: 192px;
    margin-top: -87px;
    margin-right: 103px;
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    width: 148px;
    height: 148px;
    margin-top: -51px;
    margin-right: 20px;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    width: 127px;
    height: 127px;
    margin-top: 20px;
    margin-right: 22px;
  }
`;
