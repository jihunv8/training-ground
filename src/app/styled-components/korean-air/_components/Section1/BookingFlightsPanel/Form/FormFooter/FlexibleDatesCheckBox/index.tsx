import styled from 'styled-components';
import { maxWidthLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';

import checkBoxIcon from '@/app/styled-components/korean-air/_images/icons/icon-w-checkbox.svg';

export default function FlexibleDatesCheckBox() {
  return (
    <Wrapper>
      <CheckBox type="checkbox" id="flexible-date-checkbox" />
      <Label htmlFor="flexible-date-checkbox">가까운 날짜 함께 조회</Label>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  color: #fff;
  line-height: 1.5;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media ${maxWidthLarge} {
    font-size: 1.4rem;
    line-height: 1.58;
  }
`;

const CheckBox = styled.input`
  display: none;

  & + label {
    &::before {
      content: '';
      display: block;
      width: 16px;
      height: 16px;
      margin-right: 12px;
      border: solid 1px #fff;
      border-radius: 2px;
    }

    &:hover::before {
      box-shadow:
        0 0 0 1px #fff,
        0 0 0 3px #0064de;
    }
  }

  &:checked + label::before {
    background: #fff url(${checkBoxIcon.src}) no-repeat center;
  }
`;
