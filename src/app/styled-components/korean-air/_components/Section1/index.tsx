import styled, { css } from 'styled-components';
import { maxContentsArea, maxWidthLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';

import MainBannerSwiper from './MainBannerSwiper';
import BookingFlightsPanel from './BookingFlightsPanel';
import FrequencyMenu from './FrequencyMenu';

function Section1() {
  return (
    <Section1Wrapper>
      <MainBannerSwiper />
      <BookingFormWrapper>
        <BookingFlightsPanel />
      </BookingFormWrapper>
      <FrequencyMenu />
    </Section1Wrapper>
  );
}

export default Section1;

const Section1Wrapper = styled.section`
  overflow: hidden;
`;

const BookingFormWrapper = styled.div`
  margin: -460px auto 0;
  display: flex;
  justify-content: flex-end;
  max-width: ${maxContentsArea};

  @media ${maxWidthLarge} {
    margin-top: 0;
  }
`;
