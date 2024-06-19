import styled from 'styled-components';
import * as mediaSize from '@/app/styled-components/music-edu/_styles/utils/mediaSize';

import backImage from '@/app/styled-components/music-edu/_images/vbvf-min.jpg';
import frontImage from '@/app/styled-components/music-edu/_images/estyle-education-concept-cheerful-good-looking-redhead-female-student-with-foxy-long-hair-wearing-headphones-neck-backpack-.jpg';

import Contents from './Contents';

function Section5() {
  return (
    <Section5Wrapper>
      <BackShape />
      <ContentsArea>
        <BackImage />
        <ContentsContainer>
          <Contents />
          <FrontImage />
        </ContentsContainer>
      </ContentsArea>
    </Section5Wrapper>
  );
}

export default Section5;

const Section5Wrapper = styled.section`
  background-color: #e9effd;
  position: relative;
`;

const BackShape = styled.div`
  background-color: #1847b8;
  width: 53%;
  margin-left: auto;
  margin-right: 0;
  height: 800px;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    width: 60%;
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    width: 75%;
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    width: 60%;
    height: 1337px;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    width: 52%;
    height: 1106px;
  }
`;

const ContentsArea = styled.div`
  width: ${mediaSize.contentsAreaXLarge};
  padding-top: 88px;
  padding-bottom: 66px;
  margin: -800px auto 0;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    width: ${mediaSize.contentsAreaLarge};
    padding-top: 80px;
    padding-bottom: 77px;
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    width: ${mediaSize.contentsAreaMiddle};
    padding-bottom: 60px;
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    width: ${mediaSize.contentsAreaSmall};
    margin-top: -1337px;
    padding-bottom: 80px;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    width: ${mediaSize.contentsAreaXSmall};
    margin-top: -1106px;
    padding-bottom: 158px;
  }
`;

const BackImage = styled.div`
  background: url(${backImage.src}) no-repeat center / cover;
  width: 935px;
  height: 551px;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    width: 848px;
    height: 526px;
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    width: 100%;
    height: 446px;
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    height: 335px;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    height: 211px;
  }
`;

const ContentsContainer = styled.div`
  padding-left: 103px;
  padding-right: 60px;
  margin-top: -190px;
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    padding-left: 64px;
    padding-right: 0;
    margin-top: -218px;
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    padding-left: 57px;
    margin-top: -138px;
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    padding-left: 50px;
    padding-right: 50px;
    margin-top: -47px;
    flex-direction: column;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    margin-top: -36px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const FrontImage = styled.div`
  margin-left: 50px;
  background: url(${frontImage.src}) no-repeat center / cover;
  width: 344px;
  height: 364px;
  flex-shrink: 0;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    width: 305px;
    height: 348px;
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    width: 223px;
    height: 255px;
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    width: 100%;
    height: 547px;
    margin-left: 0;
    margin-top: 50px;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    height: 326px;
  }
`;
