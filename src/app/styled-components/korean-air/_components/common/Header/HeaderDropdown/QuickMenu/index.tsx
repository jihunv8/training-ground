import styled from 'styled-components';

import { quick } from '../../src/headerMenus';

function QuickMenu() {
  return (
    <QuickMenuWrapper>
      <Title>{quick.title}</Title>
      <LinkList>
        {quick.links[0].map((link, i) => (
          <LinkListItem key={i}>
            <Link iconurl={link.icon.src} href={link.href}>
              {link.name}
            </Link>
          </LinkListItem>
        ))}
      </LinkList>
      <ETCLinkList>
        {quick.links[1].map((link, i) => (
          <ETCLinkListItem key={i}>
            <BasicLink iconurl={link.icon.src} href={link.href}>
              {link.name}
            </BasicLink>
          </ETCLinkListItem>
        ))}
      </ETCLinkList>
    </QuickMenuWrapper>
  );
}

export default QuickMenu;

const QuickMenuWrapper = styled.div`
  background-color: rgba(230, 249, 255, 0.4);
  padding: 30px 3.5% 50px;
  flex-grow: 1;

  &:not(:first-child) {
    border-left: solid 1px #d9dbe1;
  }
`;

const Title = styled.h2`
  color: #00256c;
  font-weight: bold;
  line-height: 1.5;
`;

const LinkList = styled.ul`
  margin-top: 12px;
`;

const LinkListItem = styled.li`
  &:not(:first-child) {
    margin-top: 12px;
  }
`;

const BasicLink = styled.a<{ iconurl: string }>`
  background: url(${({ iconurl }) => iconurl}) no-repeat center left / 24px;
  padding-left: 32px;
  line-height: 1.5;

  &:focus,
  &:hover {
    text-decoration: underline;
  }
`;

const Link = styled(BasicLink)`
  color: #00256c;
`;

const ETCLinkList = styled.ul`
  margin-top: 20px;
`;

const ETCLinkListItem = styled.li`
  &:not(:first-child) {
    margin-top: 8px;
  }
`;
