import styled from 'styled-components';
import * as mediaSize from '@/app/styled-components/music-edu/_styles/utils/mediaSize';

function InfoItem({ title = '', content = '' }) {
  return (
    <InfoItemWrapper>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </InfoItemWrapper>
  );
}

export default InfoItem;

const InfoItemWrapper = styled.div`
  padding: 45px 30px 15px;
  flex-grow: 1;
  flex-basis: 0;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    padding-top: 55px;
    padding-bottom: 25px;
  }

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    padding-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    padding-left: 15px;
  }
`;

const Title = styled.h3`
  padding-top: 20px;
  padding-left: 40px;
  color: #1847b8;
  font-family: oswald, sans-serif;
  font-size: 1.25rem;
  line-height: 120%;
`;

const Content = styled.p`
  margin-top: 20px;
  line-height: 160%;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    margin-top: 32px;
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    margin-top: 25px;
  }
`;
