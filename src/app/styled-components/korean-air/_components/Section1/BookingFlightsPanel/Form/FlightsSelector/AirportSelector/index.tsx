import styled from 'styled-components';
import { maxWidthLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';

import AirportSelectButton from './AirportSelectButton';

import swapIcon from '@/app/styled-components/korean-air/_images/icons/booking__swap--disabled.svg';

type AirportIdentity = {
  code: string;
  name: string;
};

type AirportSelectorProps = {
  from: AirportIdentity;
  to: AirportIdentity;
};

function AirportSelector({
  from = { code: 'SEL', name: '서울' },
  to = { code: 'To', name: '도착지' },
}: AirportSelectorProps) {
  return (
    <Wrapper>
      <AirportSelectButton code={from.code} name={from.name} />
      <ReverseButton type="button" />
      <AirportSelectButton code={to.code} name={to.name} />
    </Wrapper>
  );
}

export default AirportSelector;

const Wrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: flex-end;

  @media ${maxWidthLarge} {
    align-items: center;
  }
`;

const ReverseButton = styled.button`
  background: url(${swapIcon.src}) no-repeat center;
  width: 44px;
  height: 44px;
  margin: 0 10px;
  border: none;
  border-radius: 100%;
  flex-shrink: 0;

  &:focus,
  &:hover {
    outline: 1px solid #0064de;
  }

  @media ${maxWidthLarge} {
    margin: 0 30px;
  }
`;
