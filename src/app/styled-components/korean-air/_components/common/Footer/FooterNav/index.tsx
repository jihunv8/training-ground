import styled, { css } from 'styled-components';
import { maxContentsArea, maxWidthLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';

import SiteLinks from './SiteLinks';
import OhterLinks from './OtherLinks';

export default function FooterNav() {
  return (
    <Wrapper>
      <ContentsArea>
        <SiteLinks />
        <OhterLinks />
      </ContentsArea>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 40px 20px 35px;
  background-color: #f3f4f8;
  border: solid 1px #d9dbe1;

  @media ${maxWidthLarge} {
    padding: 6px 20px 23px;
  }
`;

const ContentsArea = styled.nav`
  max-width: ${maxContentsArea};
  margin: 0 auto;
  position: relative;
`;
