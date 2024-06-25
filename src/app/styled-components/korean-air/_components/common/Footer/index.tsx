import styled from 'styled-components';

import FooterNav from './FooterNav';
import LanguageSelector from './LanguageSelector';
import About from './About';

import { maxWidthXLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';

function Footer() {
  return (
    <Wrapper>
      <FooterNav />
      <LanguageSelector />
      <About />
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.footer`
  margin-top: 100px;

  @media ${maxWidthXLarge} {
    margin-top: 60px;
  }
`;
