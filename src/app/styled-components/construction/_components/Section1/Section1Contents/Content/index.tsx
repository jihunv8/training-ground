import styled from 'styled-components';
import { screenXSmall } from '@/app/styled-components/construction/_styles/theme/mediaSize';

import NumberBox from './NumberBox';

function Content({ num = '', shapeColor = '', text = '' }) {
  return (
    <ContentWrapper>
      <NumberBox num={num} shapeColor={shapeColor} />
      <Text>{text}</Text>
    </ContentWrapper>
  );
}

export default Content;

const ContentWrapper = styled.div`
  height: fit-content;
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: ${screenXSmall}) {
    align-items: flex-start;
  }
`;

const Text = styled.p`
  color: #6b6b6b;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-left: 37px;

  @media screen and (max-width: ${screenXSmall}) {
    font-size: 0.875rem;
    line-height: 1.35rem;
    margin-left: 20px;
  }
`;
