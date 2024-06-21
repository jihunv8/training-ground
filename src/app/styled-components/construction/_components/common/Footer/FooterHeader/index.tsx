import styled from 'styled-components';

import Logo from '../../Logo';
import SNSButton from './SnsButton';

import facebookIcon from '@/app/styled-components/construction/_images/icons/facebook.png';
import twiterIcon from '@/app/styled-components/construction/_images/icons/twiter.png';
import instaIcon from '@/app/styled-components/construction/_images/icons/insta.png';
import { screenSmall } from '@/app/styled-components/construction/_styles/theme/mediaSize';

function FooterHeader() {
  return (
    <FooterHeaderWrapper>
      <Logo />
      <Text>You’ll find your next Home loan valu you prefer.</Text>
      <ButtonContainer>
        <SNSButton iconUrl={facebookIcon.src} iconAlt="facebook" />
        <SNSButton iconUrl={twiterIcon.src} iconAlt="twiter" />
        <SNSButton iconUrl={instaIcon.src} iconAlt="insta" />
      </ButtonContainer>
    </FooterHeaderWrapper>
  );
}

export default FooterHeader;

const FooterHeaderWrapper = styled.div`
  width: 236px;

  @media screen and (max-width: ${screenSmall}) {
    order: 0;
  }
`;

const Text = styled.p`
  margin-top: 30px;
  color: #6b6b6b;
  line-height: 1.75rem;
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
  width: 117px;
  display: flex;
  justify-content: space-between;
`;
