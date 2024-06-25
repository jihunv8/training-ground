import styled from 'styled-components';
import { useState } from 'react';
import { mediaLarge, mediaXLarge } from '@/app/styled-components/orion/_styles/mediaSize';

import gnbData from '../../src/gnbData';
import LnbMenuList from './LnbMenuList';

export default function GnbMenuList() {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(-1);
  return (
    <Wrapper>
      {gnbData.map(({ title, href, lnb }, i) => {
        const isSelected = selectedMenuIndex === i;

        return (
          <ListItem key={i} onMouseEnter={() => setSelectedMenuIndex(i)} onMouseLeave={() => setSelectedMenuIndex(-1)}>
            <Anchor href={href} $selected={isSelected}>
              {title}
            </Anchor>
            <DropDownBox $selected={isSelected}>
              <LnbMenuList menus={lnb} />
            </DropDownBox>
          </ListItem>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  height: 100%;
  display: flex;
`;

const ListItem = styled.li`
  padding: 0 36px;

  @media ${mediaXLarge} {
    padding: 0 31.5px;
  }

  @media ${mediaLarge} {
    padding: 0 24px;
  }
`;

const Anchor = styled.a<{ $selected: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  color: #222;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.6;

  &::after {
    content: '';
    width: ${({ $selected }) => ($selected ? '100%' : '0')};
    height: 3px;
    background-color: ${({ $selected }) => ($selected ? '#e3051b' : 'transparent')};
    position: absolute;
    bottom: -1px;
    transition-duration: 0.45s;
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
    background-color: #e3051b;
  }

  @media ${mediaXLarge} {
    font-size: 1.575rem;
  }
`;

const DropDownBox = styled.div<{ $selected: boolean }>`
  visibility: ${({ $selected }) => ($selected ? 'visible' : 'hidden')};
  opacity: ${({ $selected }) => ($selected ? '1' : '0')};
  background-color: #fff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  transition: opacity 0.45s;

  /*header의 border-bottom영역에서 ListItem의 MouseLeave이벤트 발생 방지용*/
  border-top: solid 1px #e2e2e2;
`;
