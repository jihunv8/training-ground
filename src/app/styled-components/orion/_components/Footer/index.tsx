import styled from 'styled-components';

import logo from '@/app/styled-components/orion/_images/footer/f_logo.png';
import { mediaSmall, mediaXLarge } from '@/app/styled-components/orion/_styles/mediaSize';

import FooterNav from './FooterNav';
import FooterSubNav from './FooterSubNav';
import FamilySite from './FamilySite';
import Address from './Address';
import SNSButtonContainer from './SNSButtonContainer';

const Footer = () => {
  return (
    <FooterWrapper>
      <ContentsArea>
        <Logo>
          <img src={logo.src} alt="orion logo" />
        </Logo>
        <FooterNav />
        <FooterSubNav />
        <FamilySite />
        <Address />
        <Line />
        <ETC>
          <Copyright>COPYRIGHT ORION CORP. ALL RIGHT RESERVED.</Copyright>
          <SNSButtonContainer />
        </ETC>
      </ContentsArea>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background-color: #222;
`;

const ContentsArea = styled.div`
  max-width: 1640px;
  margin: 0 auto;
  padding: 80px 16px 50px;
  display: grid;
  grid-template:
    'logo footer-nav footer-nav'
    'address footer-sub-nav footer-sub-nav'
    'line line line'
    'etc etc family-site'
    / 1fr auto auto;

  @media ${mediaXLarge} {
    padding: 70px 14px 44px;
  }

  @media screen and (max-width: 960px) {
    padding-top: 40px;
    display: block;
  }

  @media ${mediaSmall} {
    padding-top: 70px;
  }
`;

const Logo = styled.div`
  grid-area: logo;
`;

const Line = styled.div`
  grid-area: line;
  margin-top: 40px;
  margin-bottom: 20px;
  height: 1px;
  background-color: #444;

  @media ${mediaXLarge} {
    margin-top: 35px;
    margin-bottom: 18px;
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const ETC = styled.div`
  grid-area: etc;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    margin-top: 35px;
  }

  @media ${mediaSmall} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Copyright = styled.p`
  color: #777;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.6;
`;
