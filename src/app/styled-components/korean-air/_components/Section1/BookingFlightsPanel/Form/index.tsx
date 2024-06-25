import styled from 'styled-components';
import { maxWidthLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';

import BookingTypeSelector from './BookingTypeSelector';
import FlightsSelector from './FlightsSelector';
import NumOfPassengersSelector from './NumOfPassengersSelector';
import CabinClassSelector from './CabinClassSelector';
import FormFooter from './FormFooter';

export default function Form() {
  return (
    <Wrapper>
      <BookingTypeSelector />
      <FlightsSelector />
      <NumOfPassengersSelector />
      <CabinClassSelector />
      <FormFooter />
      <SearchButton>항공편 검색</SearchButton>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  background: rgba(5, 22, 96, 0.85);
  width: 400px;
  padding: 20px 10px 14px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${maxWidthLarge} {
    width: 100%;
    padding-bottom: 40px;
    padding-left: 16px;
    padding-right: 16px;
    background-color: transparent;
  }
`;

const SearchButton = styled.button`
  background-color: #0064de;
  width: 100%;
  height: 50px;
  margin-top: 10px;
  border: none;
  border-radius: 8px;

  color: #fff;
  font-weight: bold;

  @media ${maxWidthLarge} {
    height: 57px;
    border-radius: 12px;
    margin-top: 16px;
  }
`;
