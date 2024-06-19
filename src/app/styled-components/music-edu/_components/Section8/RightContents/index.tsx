import styled from 'styled-components';
import { contentsWrapper } from '../_styles/contentsWrapper';
import * as mediaSize from '@/app/styled-components/music-edu/_styles/utils/mediaSize';

import image from '@/app/styled-components/music-edu/_images/44720b5f-d674-4089-b6ec-12c44ea13947.jpg';

function RightContents() {
  return (
    <RightContentsWrapper>
      <ContentsContainer>
        <Image />
        <Title>TOP RANKED PROGRAM</Title>
        <Text>
          ​In mollis nunc sed id semper risus in hendrerit gravida. Aliquet enim tortor at auctor urna nunc id cursus.
          Risus at ultrices mi tempus imperdiet. Sapien pellentesque habitant morbi tristique senectus et netus. Id
          cursus metus aliquam eleifend mi in. Quis commodo odio aenean sed.
        </Text>
        <ImageSource>Image by Freepik</ImageSource>
      </ContentsContainer>
    </RightContentsWrapper>
  );
}

export default RightContents;

const RightContentsWrapper = styled.div`
  ${contentsWrapper}
  padding-left: 15px;

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    padding-left: 0;
    padding-top: 15px;
  }
`;

const ContentsContainer = styled.div`
  padding-left: 142px;
  padding-bottom: 30px;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    padding-left: 100px;
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    padding-left: 30px;
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    padding-right: 30px;
  }
`;

const Image = styled.div`
  background: url(${image.src}) no-repeat center / cover;
  width: 328px;
  height: 402px;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    width: 313px;
    height: 384px;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    width: 270px;
    height: 362px;
  }
`;

const Title = styled.h3`
  margin-top: 20px;
  color: #1847b8;
  font-family: oswald, sans-serif;
  font-size: 1.5rem;
  line-height: 120%;
`;

const Text = styled.p`
  margin-top: 71px;
  color: #111111;
  line-height: 160%;
`;

const ImageSource = styled.p`
  margin-top: 20px;
  color: #111111;
  line-height: 160%;
`;
