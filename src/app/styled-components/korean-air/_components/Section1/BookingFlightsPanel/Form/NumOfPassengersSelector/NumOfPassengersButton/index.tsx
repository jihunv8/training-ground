import styled from 'styled-components';
import { maxWidthLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';

import passengerIcon from '@/app/styled-components/korean-air/_images/icons/quickbooking__passenger.svg';

function NumOfPassengersButton() {
  return (
    <NumOfPassengersButtonWrapper type="button">
      <Title>승객 수</Title>
      <Selected>성인 1명</Selected>
    </NumOfPassengersButtonWrapper>
  );
}

export default NumOfPassengersButton;

const NumOfPassengersButtonWrapper = styled.button`
  background-color: transparent;
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: padding-right 0.2s;

  &:focus,
  &:hover {
    outline: solid 1px #0064de;
    padding-right: 4px;
    transition: padding-right 0.2s;
  }

  @media ${maxWidthLarge} {
    position: relative;
  }
`;

const Title = styled.span`
  color: #767676;

  @media ${maxWidthLarge} {
    height: auto;
    font-size: 1.2rem;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Selected = styled.span`
  padding-right: 30px;
  background: url(${passengerIcon.src}) no-repeat right center / 24px;

  @media ${maxWidthLarge} {
    display: block;
    width: 100%;
    padding-top: 19px;
    text-align: left;
  }
`;
