import styled from 'styled-components';
import * as mediaSize from '@/app/styled-components/music-edu/_styles/utils/mediaSize';

function Contents() {
  return (
    <ContentsWrapper>
      <Title>What We Do</Title>
      <Text>Sample text. Click to select the text box. Click again or double click to start editing the text.</Text>
      <Button>CONTACT US</Button>
      <ImageSource>Image from Freepik</ImageSource>
    </ContentsWrapper>
  );
}

export default Contents;

const ContentsWrapper = styled.div`
  background-color: #1847b8;
  width: 889px;
  height: 368px;
  margin: 0 30px 0 auto;
  padding: 30px 30px 30px 370px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    width: 763px;
    margin-right: 0;
    padding-left: 340px;
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    width: 577px;
    height: 426px;
    padding: 40px 40px 130px 60px;
    justify-content: flex-start;
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    width: 466px;
    height: 446px;
    padding: 30px 30px 100px 30px;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    width: 309px;
    height: 446px;
  }
`;

const Title = styled.h2`
  font-size: 3.75rem;
  font-family: roboto-condensed, sans-serif;
  font-weight: normal;
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

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0);
  width: 240px;
  height: 49px;
  margin-top: 20px;
  border: solid 2px #fff;
  color: inherit;
  letter-spacing: 2px;

  &:hover {
    background-color: #fff;
    color: #1847b8;
  }
`;

const ImageSource = styled.div`
  margin-top: 20px;
  font-size: 1.125rem;
  line-height: 160%;
  font-weight: lighter;
`;
