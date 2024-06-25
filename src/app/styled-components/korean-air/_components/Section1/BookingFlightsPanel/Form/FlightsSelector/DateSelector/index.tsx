import styled from 'styled-components';

import calendarIcon from '@/app/styled-components/korean-air/_images/icons/quickbooking__calendar.svg';
import { maxWidthLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';

function DateSelector() {
  return (
    <DateSelectorWrapper type="button">
      <Icon />
      가는 날 ~ 오는 날
    </DateSelectorWrapper>
  );
}

export default DateSelector;

const DateSelectorWrapper = styled.button`
  margin-top: 10px;

  width: 100%;
  height: 48px;
  background-color: transparent;
  border: none;
  border-radius: 3px;
  border-top: dotted 1px #d9dbe1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #767676;

  &:focus,
  &:hover {
    outline: solid 1px #0064de;
  }

  @media ${maxWidthLarge} {
    margin-top: 20px;
    height: 60px;
  }
`;

const Icon = styled.span`
  width: 30px;
  height: 30px;
  display: block;
  background: url(${calendarIcon.src}) no-repeat center / 30px;
`;
