import styled from 'styled-components';
import * as mediaSize from '@/app/styled-components/music-edu/_styles/utils/mediaSize';

import _ReadMoreButton from '@/app/styled-components/music-edu/_styles/common/ReadMoreButton.styled';

function Contents() {
  return (
    <ContentsWrapper>
      <Title>Performances &#38; Activities</Title>
      <Text>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
      <ImageSource>Images from Freepik</ImageSource>
      <ReadMoreButton>READ MORE</ReadMoreButton>
    </ContentsWrapper>
  );
}

export default Contents;

const ContentsWrapper = styled.div`
  background-color: #fff;
  height: 474px;
  padding: 30px 50px;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    height: 458px;
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    height: auto;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Title = styled.h2`
  margin-top: 18px;
  color: #1847b8;
  font-size: 3.75rem;
  font-weight: normal;
  font-family: oswald, sans-serif;
  line-height: 110%;

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    font-size: 3rem;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    font-size: 2.25rem;
  }
`;

const Text = styled.div`
  margin-top: 20px;
  line-height: 160%;
`;

const ImageSource = styled.div`
  margin-top: 20px;
  line-height: 160%;
`;

const ReadMoreButton = styled(_ReadMoreButton)`
  margin-top: 20px;
`;
