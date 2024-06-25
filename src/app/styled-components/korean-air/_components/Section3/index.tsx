import styled, { css } from 'styled-components';
import { maxContentsArea, maxWidthLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';

import Contents from './Contents';

import image from '@/app/styled-components/korean-air/_images/edocservice_pc_b.jpg';
import bgImage from '@/app/styled-components/korean-air/_images/bg/msgi__bg-pc.svg';
import bgImageM from '@/app/styled-components/korean-air/_images/bg/msgi__bg-m.svg';

function Section3() {
  return (
    <Section3Wrapper>
      <ContentsArea>
        <ImageContainer>
          <Image src={image.src} alt="이미지" />
        </ImageContainer>
        <Contents />
      </ContentsArea>
    </Section3Wrapper>
  );
}

export default Section3;

const Section3Wrapper = styled.section`
  padding: 0 20px;
  margin-top: 60px;

  @media ${maxWidthLarge} {
    margin-top: 40px;
    background: url(${bgImageM.src}) no-repeat bottom -48px right 20px / cover;
    padding-bottom: 34px;
  }
`;

const ContentsArea = styled.div`
  max-width: ${maxContentsArea};
  margin: 0 auto;
  display: flex;

  @media ${maxWidthLarge} {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  margin-right: 137px;
  padding-bottom: 50px;
  position: relative;

  &::before {
    content: '';
    display: block;
    background: url(${bgImage.src});
    width: 996px;
    height: 284px;

    position: absolute;
    bottom: 0;
    right: -50px;
  }

  @media ${maxWidthLarge} {
    flex-direction: column;
    margin-right: 0;
    padding-bottom: 0;

    &::before {
      display: none;
    }
  }
`;

const Image = styled.img`
  height: 300px;
  display: block;
  position: relative;

  @media ${maxWidthLarge} {
    width: 100%;
    height: auto;
  }
`;
