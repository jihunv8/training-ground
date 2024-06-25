import styled, { css } from 'styled-components';
import { useState } from 'react';

import gnbData from '../../src/gnbData';

import LnbMenuList from './LnbMenuList';

export default function GnbMenuList() {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(-1);

  return (
    <Wrapper>
      {gnbData.map(({ title, href, lnb }, i) => {
        const isSelected = selectedMenuIndex === i;

        return (
          <ListItem key={i} onClick={() => setSelectedMenuIndex(i)}>
            <Button $selected={isSelected}>{title}</Button>
            <LnbMenuList menus={lnb} isSelected={isSelected} />
          </ListItem>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  width: fit-content;
  height: 100%;
  background-color: #f9f9f9;
`;

const ListItem = styled.li``;

const Button = styled.button<{ $selected: boolean }>`
  width: 140px;
  height: 64px;
  background-color: transparent;
  border: none;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #999;
  font-size: 1.4rem;
  font-weight: 800;
  line-height: 1.6;

  transition: 0.15s;

  ${({ $selected }) =>
    $selected &&
    css`
      background-color: #e3051b;
      color: #fff;
    `}
`;
