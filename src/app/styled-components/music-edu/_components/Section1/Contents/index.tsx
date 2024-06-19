'use client';
import styled from 'styled-components';
import * as mediaSize from '@/app/styled-components/music-edu/_styles/utils/mediaSize';
import _ReadMoreButton from '@/app/styled-components/music-edu/_styles/common/ReadMoreButton.styled';

function Contents() {
  return (
    <ContentsWrapper>
      <ContentsContainer>
        <SubTitle>MODERN&#38; FUN</SubTitle>
        <Title>ONLINE MUSIC EDUCATION</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Text>
        <ImageSource>Image by Freepik</ImageSource>
        <ReadMoreButton>READ MORE</ReadMoreButton>
      </ContentsContainer>
    </ContentsWrapper>
  );
}

export default Contents;

const ContentsWrapper = styled.div`
  flex-grow: 53;
  flex-basis: 0;

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    flex-grow: 45;
  }
`;

const ContentsContainer = styled.div`
  height: 100%;
  padding: 30px 50px 30px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    padding-left: 15px;
    padding-right: 30px;
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 30px;
  }
`;

const SubTitle = styled.div`
  width: 238px;
  height: 54px;
  background-color: #1847b8;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 0.3125rem;
`;

const Title = styled.h2`
  color: #1847b8;
  font-size: 4.25rem;
  font-weight: bold;
  font-family: roboto-condensed, sans-serif;
  line-height: 110%;
  margin-top: 20px;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    font-size: 3.625rem;
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    font-size: 2.75rem;
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    font-size: 4.25rem;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    font-size: 3.4375rem;
  }
`;

const Text = styled.p`
  margin-top: 20px;
  line-height: 160%;
  font-size: 1.125rem;
`;

const ImageSource = styled.p`
  margin-top: 23px;
`;

const ReadMoreButton = styled(_ReadMoreButton)`
  margin-top: 34px;
`;
