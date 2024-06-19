import styled from 'styled-components';
import * as mediaSize from '@/app/styled-components/music-edu/_styles/utils/mediaSize';

import InfoItem from './InfoItem';

function Information() {
  return (
    <InformationWrapper>
      <InfoItem title="CALL US" content="1 (234) 567-891, 1 (234) 987-654" />
      <InfoItem title="LOCATION" content="121 Rock Sreet, 21 Avenue, New York, NY 92103-9000" />
      <InfoItem title="BUSINESS HOURS" content="Mon – Fri …… 10 am – 8 pm, Sat, Sun ....… Closed" />
    </InformationWrapper>
  );
}

export default Information;

const InformationWrapper = styled.div`
  background-color: #e9effd;
  width: 976px;
  margin: -119px 28px 0 auto;
  display: flex;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    width: 880px;
    margin-top: -40px;
    margin-right: 0;
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    width: 692px;
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    width: 300px;
    flex-direction: column;
    margin-top: -192px;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    margin-top: -40px;
    margin-right: auto;
  }
`;
