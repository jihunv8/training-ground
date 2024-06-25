import styled from 'styled-components';

import TripTypeSelector from './TripTypeSelector';
import DateSelector from './DateSelector';
import PointSelector from './AirportSelector';

export default function FlightsSelector() {
  return (
    <Wrapper>
      <TripTypeSelector />
      <PointSelector from={{ code: 'SEL', name: '서울' }} to={{ code: 'To', name: '도착지' }} />
      <DateSelector />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 12px;
  background-color: #fff;
  width: 100%;
  padding: 16px 13px 5px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
