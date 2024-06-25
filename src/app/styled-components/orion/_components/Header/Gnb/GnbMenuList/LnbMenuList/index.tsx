import styled from 'styled-components';
import NavLinkList from './NavLinkList';

import type { LnbMenu } from '../../../src/gnbData';

type LnbMenuListProps = {
  menus: LnbMenu[];
};

export default function LnbMenuList({ menus }: LnbMenuListProps) {
  return (
    <Wrapper>
      {menus.map(({ title, href, links }, i) => {
        return (
          <ListItem key={i}>
            <Anchor href={href}>{title}</Anchor>
            <NavLinkList links={links} />
          </ListItem>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  display: flex;
  width: fit-content;
  padding: 40px 36px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const ListItem = styled.li`
  &:not(:first-child) {
    margin-left: 80px;
  }
`;

const Anchor = styled.a`
  color: #222;
  font-size: 1.8rem;
  font-weight: 700;
`;
