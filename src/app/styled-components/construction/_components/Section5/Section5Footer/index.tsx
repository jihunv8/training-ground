import styled from 'styled-components';
import CommonButton from '../../common/buttons/CommonButton.styled';

import arrowIcon from '@/app/styled-components/construction/_images/icons/subscribe-icon.png';
import { screenSmall, screenXSmall } from '@/app/styled-components/construction/_styles/theme/mediaSize';
import Image from 'next/image';

function Section5Footer() {
  return (
    <Section5FooterWrapper>
      <Title>Subscribe to our Newsletter</Title>
      <Text>Age sold some full like rich new. Amounted repeated as believed in confined juvenile.</Text>
      <SubscribeButton $inversion>
        SUBSCRIBE
        <Image src={arrowIcon} alt="arrow icon" />
      </SubscribeButton>
    </Section5FooterWrapper>
  );
}

export default Section5Footer;

const Section5FooterWrapper = styled.footer`
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  width: 462px;
  color: #313131;
  font-size: 3.375rem;
  font-weight: 500;
  line-height: 3.5rem;
  text-align: center;

  @media screen and (max-width: ${screenSmall}) {
    font-size: 3rem;
  }

  @media screen and (max-width: ${screenXSmall}) {
    width: auto;
    font-size: 2rem;
  }
`;

const Text = styled.p`
  margin-top: 40px;
  width: 556px;
  color: #6b6b6b;
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-align: center;

  @media screen and (max-width: ${screenSmall}) {
    width: auto;
    font-size: 1rem;
  }
`;

const SubscribeButton = styled(CommonButton)`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    margin-left: 20px;
  }
`;
