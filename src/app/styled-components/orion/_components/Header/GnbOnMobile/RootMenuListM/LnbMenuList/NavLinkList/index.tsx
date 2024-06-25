import styled from 'styled-components';
import { NavLink } from '../../../../src/gnbData';

type NavLinksListProps = {
  links: NavLink[];
  isSelected: boolean;
};

export default function NavLinkList({ links, isSelected = false }: NavLinksListProps) {
  return (
    <Wrapper $selected={isSelected}>
      {links.map(({ title, href }, i) => {
        return (
          <ListItem key={i}>
            <Anchor href={href}>{title}</Anchor>
          </ListItem>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.ul<{ $selected: boolean }>`
  display: ${({ $selected }) => ($selected ? 'block' : 'none')};
  background-color: #fff;
  border-bottom: 1px solid #e2e2e2;
  padding-top: 18px;
  padding-bottom: 18px;
`;

const ListItem = styled.li`
  &:not(:first-child) {
    margin-top: 8px;
  }
`;

const Anchor = styled.a`
  display: block;
  width: fit-content;
  position: relative;

  color: #222;
  font-size: 1.4rem;
  line-height: 1.4;

  &:hover {
    color: #e3051b;
  }
`;
