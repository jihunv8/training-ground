import styled from 'styled-components';
import { screenSmall } from '@/app/styled-components/construction/_styles/theme/mediaSize';

type LinksListProps = { title: string; links: { href: string; name: string }[] };

function LinksList({ title = '', links = [] }: LinksListProps) {
  return (
    <LinksListWrapper>
      <Title>{title}</Title>
      <LinksContainer>
        {links.map((link, i) => (
          <Link key={`${link.name}${i}`} href={link.href}>
            {link.name}
          </Link>
        ))}
      </LinksContainer>
    </LinksListWrapper>
  );
}

export default LinksList;

const LinksListWrapper = styled.div`
  @media screen and (max-width: ${screenSmall}) {
    order: 2;
  }
`;

const Title = styled.h2`
  color: #313131;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.6875rem;
`;

const LinksContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  color: #6b6b6b;
  line-height: 1.5rem;

  &:not(:first-child) {
    margin-top: 18px;
  }
`;
