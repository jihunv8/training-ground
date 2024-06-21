import styled from 'styled-components';
import {
  screenLarge,
  screenMiddle,
  screenSmall,
  screenXSmall,
} from '@/app/styled-components/construction/_styles/theme/mediaSize';

import image from '@/app/styled-components/construction/_images/section1-image.png';
import Content from './Content';

function Section1Contents() {
  return (
    <Section1ContentsWrapper>
      <Image />
      <ContentsContainer>
        <Content
          num="01"
          shapeColor="#40A2D5"
          text="And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help."
        />
        <Content
          num="02"
          shapeColor="rgba(254, 132, 50, 0.52)"
          text="Up maids me an ample stood given. Certainty say suffering his him collected intention promotion."
        />
        <Content
          num="03"
          shapeColor="#B5E4A5"
          text="Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom."
        />
      </ContentsContainer>
    </Section1ContentsWrapper>
  );
}

export default Section1Contents;

const Section1ContentsWrapper = styled.div`
  margin-top: 110px;
  display: flex;

  @media screen and (max-width: ${screenMiddle}) {
    flex-direction: column;
  }
`;

const Image = styled.div`
  border-top-right-radius: 200px;
  background: url(${image.src}) no-repeat center / cover;
  width: 584px;
  height: 850px;
  flex-shrink: 0;

  @media screen and (max-width: ${screenLarge}) {
    width: 399px;
    height: 581px;
  }

  @media screen and (max-width: ${screenMiddle}) {
    width: auto;
    height: 400px;
  }

  @media screen and (max-width: ${screenSmall}) {
    height: 300px;
  }

  @media screen and (max-width: ${screenSmall}) {
    border-top-right-radius: 140px;
    height: 200px;
  }
`;

const ContentsContainer = styled.div`
  height: 500px;
  margin-top: 50px;
  margin-left: 68px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: ${screenMiddle}) {
    margin-left: 0;
  }

  @media screen and (max-width: ${screenXSmall}) {
    height: 400px;
  }
`;
