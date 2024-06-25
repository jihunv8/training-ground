import styled, { css } from 'styled-components';
import { maxContentsArea } from '@/app/styled-components/korean-air/_styles/mediaSize';

import TripList from './TripList';

export default function TripRecomender() {
  return (
    <Wrapper>
      <ContentsArea>
        <Title>지금 떠나기 좋은 여행</Title>
        <TripList />
      </ContentsArea>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;
`;

const ContentsArea = styled.div`
  max-width: ${maxContentsArea};
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #1a1a1a;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.67;
`;
