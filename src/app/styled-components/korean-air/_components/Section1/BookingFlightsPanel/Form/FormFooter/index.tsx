import styled from 'styled-components';

import { maxWidthLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';

import EtcLink from './EtcLink';
import FlexibleDatesCheckBox from './FlexibleDatesCheckBox';

function FormFooter() {
  return (
    <FormFooterWrapper>
      <FlexibleDatesCheckBox />
      <Etc>
        <EtcLink href="">구매와 동시 승급</EtcLink>
        <EtcLink href="">다구간</EtcLink>
      </Etc>
    </FormFooterWrapper>
  );
}

export default FormFooter;

const FormFooterWrapper = styled.div`
  margin-top: 12px;
  width: 100%;

  @media ${maxWidthLarge} {
    margin-top: 15px;
  }
`;

const Etc = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
`;
