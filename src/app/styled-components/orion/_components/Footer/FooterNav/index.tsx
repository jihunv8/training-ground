import styled from 'styled-components';

import linkIcon from '@/app/styled-components/orion/_images/footer/link_icon.svg';
import { mediaXLarge } from '@/app/styled-components/orion/_styles/mediaSize';

const FooterNav = () => {
  return (
    <FooterNavWrapper>
      <Anchor href="">고객문의</Anchor>
      <Anchor href="">신규거래 제안</Anchor>
      <Anchor href="">채용</Anchor>
    </FooterNavWrapper>
  );
};

export default FooterNav;

const FooterNavWrapper = styled.div`
  grid-area: footer-nav;
  justify-self: end;
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 960px) {
    justify-self: start;
    margin-top: 26px;
  }
`;

const Anchor = styled.a`
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;

  &:not(:first-child) {
    margin-left: 1.8rem;
  }

  &::after {
    content: '';
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    background: url(${linkIcon}) no-repeat center;
    margin-left: 0.8rem;
  }

  @media ${mediaXLarge} {
    font-size: 1.575rem;
  }

  @media screen and (max-width: 960px) {
    font-size: 1.8rem;
  }
`;
