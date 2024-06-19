import styled from 'styled-components';
import * as mediaSize from '@/app/styled-components/music-edu/_styles/utils/mediaSize';

import ContentText from './ContentText';
import ContentTitle from './ContentTitle';

function Content({ title = '', text = '', alignRight = false }) {
  return (
    <ContentWrapper $alignright={alignRight}>
      <ContentTitle>{title}</ContentTitle>
      <ContentText>{text}</ContentText>
    </ContentWrapper>
  );
}

export default Content;

const ContentWrapper = styled.div<{ $alignright: boolean }>`
  width: 430px;
  ${({ $alignright }) => $alignright && 'align-self:flex-end'};

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    width: ${({ $alignright }) => ($alignright ? '350px' : '100%')};
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    width: ${({ $alignright }) => ($alignright ? '250px' : '100%')};
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    width: ${({ $alignright }) => ($alignright ? '470px' : '100%')};
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    width: ${({ $alignright }) => ($alignright ? '265px' : '100%')};
  }
`;
