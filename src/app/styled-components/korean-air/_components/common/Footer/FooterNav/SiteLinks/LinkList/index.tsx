import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { maxWidthLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';

import arrowDownIcon from '@/app/styled-components/korean-air/_images/icons/snb__title.svg';
import arrowUpIcon from '@/app/styled-components/korean-air/_images/icons/snb__title--expand.svg';
import { FooterSiteLinkGroup } from '../src/footerSiteLinksData';

type LinkListProps = {
  data: FooterSiteLinkGroup;
  isExpanded?: boolean;
  onToggle: () => void;
};

function LinkList({ data, isExpanded = false, onToggle }: LinkListProps) {
  const isLargeSize = useMediaQuery({ maxWidth: 1060 });

  const { title, links } = data;

  return (
    <LinkListWrapper>
      {isLargeSize ? (
        <TitleButton onClick={onToggle} $dropdown={isExpanded}>
          {title}
        </TitleButton>
      ) : (
        <Title>{title}</Title>
      )}
      <List $dropdown={isExpanded}>
        {links.map((link, i) => (
          <li key={i}>
            <Anchor href={link.href} $bold={link.isBold || false}>
              {link.name}
            </Anchor>
          </li>
        ))}
      </List>
    </LinkListWrapper>
  );
}

export default LinkList;

const LinkListWrapper = styled.div`
  width: 25%;

  &:last-child {
    border-right: solid 1px #e7eaf0;
  }

  @media ${maxWidthLarge} {
    width: auto;
    border-bottom: solid 1px #e7eaf0;
  }
`;

const Title = styled.h2`
  font-weight: $bold;
  line-height: 1.5;
`;

const TitleButton = styled.button<{ $dropdown: boolean }>`
  width: 100%;
  background: transparent url(${({ $dropdown }) => ($dropdown ? arrowUpIcon : arrowDownIcon)}) no-repeat center right /
    17px;
  border: none;
  padding: 14px 50px 14px 10px;

  font-size: 1.4rem;
  font-weight: $bold;
  line-height: 1.5;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
`;

const List = styled.ul<{ $dropdown: boolean }>`
  margin-top: 11px;

  @media ${maxWidthLarge} {
    display: ${({ $dropdown }) => ($dropdown ? 'block' : 'none')};
    margin-top: 0;
  }
`;

const Anchor = styled.a<{ $bold: boolean }>`
  display: block;
  padding: 2px 0;
  color: #555;
  font-size: 1.4rem;
  line-height: 1.58;
  ${({ $bold }) => $bold && 'font-weight: $bold'};

  &:hover {
    text-decoration: underline;
  }

  @media ${maxWidthLarge} {
    padding: 5px 10px;
  }
`;
