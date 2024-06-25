import styled from 'styled-components';

import Form from './Form';

import bgImagePC from '@/app/styled-components/korean-air/_images/bg/quickbooking__bg.svg';
import bgImageM from '@/app/styled-components/korean-air/_images/bg/quickbooking__m-bg.svg';
import { maxWidthLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';

export default function BookingFlightsPanel() {
  return (
    <Wrapper>
      <Form />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  transform: translateX(300px);

  &::after {
    content: '';
    background: url(${bgImagePC.src}) no-repeat center / cover;
    width: 300px;

    @media ${maxWidthLarge} {
      display: none;
    }
  }

  @media ${maxWidthLarge} {
    width: 100%;
    background: url(${bgImageM.src}) no-repeat right bottom / auto;
    transform: translateX(0);
  }
`;
