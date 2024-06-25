import styled, { css } from 'styled-components';
import { maxContentsArea, maxWidthLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';

import FrequencyMenuLink from './FrequencyMenuLink';

import bookingIcon from '@/app/styled-components/korean-air/_images/icons/mfnb__booking.svg';
import checkinIcon from '@/app/styled-components/korean-air/_images/icons/mfnb__checkin.svg';
import scheduleIcon from '@/app/styled-components/korean-air/_images/icons/mfnb__schedule.svg';

function FrequencyMenu() {
  return (
    <Wrapper>
      <LinkList>
        <LinkItem>
          <FrequencyMenuLink href="" iconUrl={bookingIcon.src}>
            예약 조회
          </FrequencyMenuLink>
        </LinkItem>
        <LinkItem>
          <FrequencyMenuLink href="" iconUrl={checkinIcon.src}>
            체크인
          </FrequencyMenuLink>
        </LinkItem>
        <LinkItem>
          <FrequencyMenuLink href="" iconUrl={scheduleIcon.src}>
            항공편 현황
          </FrequencyMenuLink>
        </LinkItem>
      </LinkList>
    </Wrapper>
  );
}

export default FrequencyMenu;

const Wrapper = styled.div`
  margin-top: 20px;
  padding: 0 20px;
`;

const LinkList = styled.ul`
  max-width: ${maxContentsArea};
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const LinkItem = styled.li`
  width: 100%;

  &:not(:last-child) {
    display: flex;
    align-items: center;

    &::after {
      content: '';
      background-color: #d9dbe1;
      display: block;
      width: 1px;
      height: 20px;

      @media ${maxWidthLarge} {
        display: none;
      }
    }
  }
`;
