import styled from 'styled-components';
import * as mediaSize from '@/app/styled-components/music-edu/_styles/utils/mediaSize';

function Contents({ isDown = false, icon = '', iconAlt = '', title = '', text = '' }) {
  return (
    <ContentsWrapper $isdown={isDown}>
      <ContentsIcon>
        <img src={icon} alt={iconAlt} />
      </ContentsIcon>
      <ContentsTitle>{title}</ContentsTitle>
      <ContentsText>{text}</ContentsText>
    </ContentsWrapper>
  );
}

export default Contents;

const ContentsWrapper = styled.div<{ $isdown: boolean }>`
  height: 571px;
  padding: ${({ $isdown }) => ($isdown ? '160px 20px 26px' : '30px 20px')};
  flex-grow: 1;
  flex-basis: 0;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    height: 501px;
    ${({ $isdown }) => $isdown && 'padding-top: 140px'}
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    height: 494px;
    padding: 30px 20px;
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    height: fit-content;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const ContentsIcon = styled.div`
  width: 78px;
  height: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a9c0f8;
  border-radius: 100%;

  > img {
    width: 38px;
    height: 38px;
  }
`;

const ContentsTitle = styled.h2`
  margin-top: 30px;
  color: #fff;
  font-size: 1.5rem;
  font-family: oswald, sans-serif;
  line-height: 120%;
`;

const ContentsText = styled.div`
  margin-top: 20px;
  color: #fff;
  line-height: 160%;
`;
