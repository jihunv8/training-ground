import styled from 'styled-components';
import { useState } from 'react';

import NavLinkList from './NavLinkList';

import type { LnbMenu } from '../../../src/gnbData';

type LnbMenuListProps = {
  menus: LnbMenu[];
  isSelected: boolean;
};

export default function LnbMenuList({ menus, isSelected = false }: LnbMenuListProps) {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(-1);

  const toggleSelectedMenuIndex = (i: number) => {
    if (selectedMenuIndex === i) {
      setSelectedMenuIndex(-1);
    } else {
      setSelectedMenuIndex(i);
    }
  };

  return (
    <Wrapper $selected={isSelected}>
      {menus.map(({ title, href, links }, i) => {
        const isSelectedLinkList = selectedMenuIndex === i;
        return (
          <ListItem key={i}>
            {links.length !== 0 ? (
              <Button $selected={isSelected} onClick={() => toggleSelectedMenuIndex(i)}>
                {title}
              </Button>
            ) : (
              <Anchor href={href}>{title}</Anchor>
            )}
            <NavLinkList links={links} isSelected={isSelectedLinkList} />
          </ListItem>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.ul<{ $selected: boolean }>`
  width: calc(100% - 140px);
  display: ${({ $selected }) => ($selected ? 'block' : 'none')};
  padding-left: 26px;
  padding-right: 14px;
  position: absolute;
  top: 66px;
  left: 140px;
`;

const ListItem = styled.li``;

const Button = styled.button<{ $selected: boolean }>`
  width: 100%;
  height: 64px;
  background-color: transparent;
  border: none;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;

  color: #222;
  font-size: 1.4rem;

  &::before {
    content: '';
    display: block;
    width: 7px;
    height: 7px;
    border-right: 2px solid #222;
    border-bottom: 2px solid #222;

    position: absolute;
    top: 50%;
    right: 8px;

    transform: translateY(-50%) rotate(${({ $selected }) => ($selected ? '225deg' : '45deg')});
  }
`;

const Anchor = styled.a`
  display: block;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;

  color: #222;
  font-size: 1.4rem;
`;
