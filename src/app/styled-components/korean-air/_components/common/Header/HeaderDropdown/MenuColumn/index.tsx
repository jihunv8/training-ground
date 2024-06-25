import styled from 'styled-components';

import LinkGroup from './LinkGroup';
import { HeaderMenuColumn } from '../../src/headerMenus';

type MenuColumnProps = { linkGroups: HeaderMenuColumn };

export default function MenuColumn({ linkGroups }: MenuColumnProps) {
  return (
    <LinkListContainerWrapper>
      {linkGroups.map((linkGroup, i) => (
        <ListItem key={i}>
          <LinkGroup data={linkGroup} />
        </ListItem>
      ))}
    </LinkListContainerWrapper>
  );
}

const LinkListContainerWrapper = styled.ul`
  padding: 30px 3.5% 50px;

  flex-basis: 25%;

  &:not(:first-child) {
    border-left: solid 1px #d9dbe1;
  }
`;

const ListItem = styled.li`
  &:not(:first-child) {
    margin-top: 40px;
    margin-bottom: 8px;
  }
`;
