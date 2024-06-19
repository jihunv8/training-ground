import styled from 'styled-components';
import * as mediaSize from '@/app/styled-components/music-edu/_styles/utils/mediaSize';

import Content from '../_common/Content';

import image from '@/app/styled-components/music-edu/_images/-min2.jpg';

function LeftContents() {
  return (
    <LeftContentsWrapper>
      <Content
        title="mission"
        text="In mollis nunc sed id semper risus in hendrerit gravida. Aliquet enim tortor at auctor urna nunc id cursus. Risus at ultrices mi tempus imperdiet. Sapien pellentesque habitant morbi tristique senectus et netus. Id cursus metus aliquam eleifend mi in. Quis commodo odio aenean sed. Sollicitudin ac orci phasellus egestas tellus. Id velit ut tortor pretium."
        alignRight
      />
      <Image />
      <ImageSource>Images by Freepik</ImageSource>
    </LeftContentsWrapper>
  );
}

export default LeftContents;

const LeftContentsWrapper = styled.div`
  padding: 30px;
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const Image = styled.div`
  background: url(${image.src}) no-repeat center / cover;
  width: 298px;
  height: 222px;
  margin-top: 30px;
`;

const ImageSource = styled.div`
  margin-top: 20px;
  line-height: 160%;
`;
