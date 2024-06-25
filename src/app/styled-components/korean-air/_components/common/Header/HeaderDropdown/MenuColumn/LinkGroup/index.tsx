import styled from 'styled-components';

import { HeaderLinkGroup } from '../../../src/headerMenus';

type LinkGroupProps = {
  data: HeaderLinkGroup;
};

export default function LinkGroup({ data }: LinkGroupProps) {
  const { title, href, links } = data;

  return (
    <Wrapper>
      <Title>{href !== undefined ? <a href="">{title}</a> : title}</Title>
      <List>
        {links.map((link, i) => {
          return (
            <ListItem key={i}>
              <Link href={link.href}>{link.name}</Link>
            </ListItem>
          );
        })}
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Title = styled.h2`
  font-weight: bold;
  line-height: 1.5;
`;

const List = styled.ul`
  margin-top: 8px;
`;

const ListItem = styled.li`
  &:not(:first-child) {
    margin-top: 8px;
  }
`;

const Link = styled.a`
  color: #606060;
  line-height: 1.5;

  &:hover {
    text-decoration: underline;
  }
`;
