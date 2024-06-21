import styled from 'styled-components';
import {
  screenLarge,
  screenMiddle,
  screenSmall,
  screenXSmall,
} from '@/app/styled-components/construction/_styles/theme/mediaSize';

import image from '@/app/styled-components/construction/_images/millo-lin.png';

export default function HeaderBackground() {
  return (
    <HeaderBackgroundArea>
      <Background>
        <Shape1 />
        <Shape2 />
        <Image />
      </Background>
    </HeaderBackgroundArea>
  );
}

const HeaderBackgroundArea = styled.div`
  width: 1340px;
  margin: 0 auto;

  @media screen and (max-width: ${screenLarge}) {
    width: 1140px;
  }

  @media screen and (max-width: ${screenMiddle}) {
    width: 790px;
  }

  @media screen and (max-width: ${screenSmall}) {
    width: 580px;
  }

  @media screen and (max-width: ${screenXSmall}) {
    width: 340px;
  }
`;

const Background = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: 0;
  display: grid;
  grid-template:
    'shape1 image' auto
    'shape2 shape2' auto
    / auto auto;
`;

const Image = styled.div`
  grid-area: image;
  width: 647px;
  height: 850px;
  background: url(${image.src}) no-repeat center / cover;
  border-radius: 10px 10px 10px 300px;

  @media screen and (max-width: ${screenLarge}) {
    width: 560px;
  }

  @media screen and (max-width: ${screenMiddle}) {
    width: 420px;
    height: 450px;
    border-bottom-left-radius: 250px;
  }

  @media screen and (max-width: ${screenSmall}) {
    width: 300px;
    height: 400px;
    border-bottom-left-radius: 200px;
  }

  @media screen and (max-width: ${screenXSmall}) {
    width: 100px;
    height: 160px;
    border-bottom-left-radius: 50px;
  }
`;

const Shape = styled.div`
  background-color: #c9e7ff;
  opacity: 0.4;
`;

const Shape1 = styled(Shape)`
  grid-area: shape1;
  width: 97px;
  height: 213px;
  margin-top: 97px;
  border-radius: 106.5px 0 0 5px;

  @media screen and (max-width: ${screenMiddle}) {
    margin-top: 60px;
    height: 160px;
    width: 70px;
  }

  @media screen and (max-width: ${screenXSmall}) {
    display: none;
  }
`;

const Shape2 = styled(Shape)`
  grid-area: shape2;
  width: 238px;
  height: 83px;
  margin-right: 26px;
  margin-left: auto;
  border-radius: 0 0 106.5px 5px;

  @media screen and (max-width: ${screenMiddle}) {
    display: none;
  }
`;
