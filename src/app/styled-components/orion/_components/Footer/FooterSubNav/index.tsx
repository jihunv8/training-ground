import styled from 'styled-components';
import { mediaXLarge } from '@/app/styled-components/orion/_styles/mediaSize';

const FooterSubNav = () => {
  return (
    <FooterSubNavWrapper>
      <Anchor href="">범적고지</Anchor>
      <Anchor href="" $strong>
        개인정보처리방침
      </Anchor>
      <Anchor href="">이메일무단수집거부</Anchor>
      <Anchor href="">오시는 길</Anchor>
    </FooterSubNavWrapper>
  );
};

export default FooterSubNav;

const FooterSubNavWrapper = styled.div`
  grid-area: footer-sub-nav;
  justify-self: end;
  margin-top: 26px;

  @media ${mediaXLarge} {
    margin-top: 22px;
  }

  @media screen and (max-width: 960px) {
    justify-self: start;
    margin-top: 18px;
  }
`;

const Anchor = styled.a<{ $strong?: boolean }>`
  color: ${({ $strong }) => ($strong ? '#d2d2d2' : '#777')};
  font-size: 1.4rem;
  font-weight: 700;

  &:not(:first-child) {
    margin-left: 1.6rem;
  }
`;
