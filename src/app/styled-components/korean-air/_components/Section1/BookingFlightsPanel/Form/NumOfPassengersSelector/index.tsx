import styled from 'styled-components';
import { maxWidthLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';

import NumOfPassengersButton from './NumOfPassengersButton';

function NumOfPassengersSelector() {
  return (
    <Wrapper>
      <NumOfPassengersButton />
    </Wrapper>
  );
}

export default NumOfPassengersSelector;

const Wrapper = styled.div`
  margin-top: 8px;

  background-color: #fff;
  width: 100%;
  padding: 3px 18px;
  border-radius: 8px;

  @media ${maxWidthLarge} {
    padding-top: 7px;
    padding-bottom: 7px;
  }
`;
