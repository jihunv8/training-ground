import styled from 'styled-components';
import { maxWidthLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';

import selectIcon from '@/app/styled-components/korean-air/_images/icons/ico-select.svg';

function Selector({ ...props }) {
  return (
    <Wrapper {...props}>
      <Label htmlFor="cabin-class-select">좌석 등급</Label>
      <Select id="cabin-class-select">
        <option value="일반석">일반석</option>
        <option value="프레스티지석">프레스티지석</option>
        <option value="일등석">일등석</option>
      </Select>
    </Wrapper>
  );
}

export default Selector;

const Wrapper = styled.div`
  background-color: transparent;
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 3px;
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

const Label = styled.label`
  height: 48px;
  display: flex;
  align-items: center;
  color: #767676;

  @media ${maxWidthLarge} {
    height: auto;
    font-size: 1.2rem;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Select = styled.select`
  background: url(${selectIcon.src}) no-repeat right center/ 24px 24px;
  width: 100%;
  height: 48px;
  padding-right: 30px;
  margin-top: -48px;
  border: none;
  display: flex;
  -webkit-appearance: none;
  text-align: right;

  &:focus {
    outline: none;
  }

  @media ${maxWidthLarge} {
    text-align: left;
    padding-top: 19px;
    margin-top: 0;
    position: relative;
  }
`;
