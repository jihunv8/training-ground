import styled from 'styled-components';

import Menu from './Menu';
import { maxWidthLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';
import usefulMenus from './usefulMenu';

export default function UsefulMenu() {
  return (
    <Wrapper>
      {usefulMenus.map((menu, i) => (
        <MenuItem key={i}>
          <Menu data={menu} />
        </MenuItem>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  margin-top: 20px;
  padding: 24px 0 28px;
  border: solid 1px #d9dbe1;
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  @media ${maxWidthLarge} {
    margin-top: 30px;
    padding: 0;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 32px;
    grid-column-gap: 16px;
    border: none;
  }
`;

const MenuItem = styled.li`
  position: relative;

  &:not(:last-child)::after {
    content: '';
    display: block;
    background-color: #d9dbe1;
    width: 1px;
    height: 40px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);

    @media ${maxWidthLarge} {
      display: none;
    }
  }
`;
