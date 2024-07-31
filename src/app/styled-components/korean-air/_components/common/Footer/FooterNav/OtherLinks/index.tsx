import styled from 'styled-components';

import { maxWidthLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';

import youtubeIcon from '@/app/styled-components/korean-air/_images/icons/sns__link--youtube.svg';
import instagramIcon from '@/app/styled-components/korean-air/_images/icons/sns__link--instagram.svg';
import facebookIcon from '@/app/styled-components/korean-air/_images/icons/sns__link--facebook.svg';
import twitterIcon from '@/app/styled-components/korean-air/_images/icons/sns__link--twitter.svg';
import googleplayIcon from '@/app/styled-components/korean-air/_images/icons/banner-googleplay.svg';
import appstore from '@/app/styled-components/korean-air/_images/icons/banner-appstore.svg';

export default function OhterLinks() {
  return (
    <Wrapper>
      <SNSLinkContainer>
        <SNSLink $iconUrl={youtubeIcon.src} href="" />
        <SNSLink $iconUrl={instagramIcon.src} href="" />
        <SNSLink $iconUrl={facebookIcon.src} href="" />
        <SNSLink $iconUrl={twitterIcon.src} href="" />
      </SNSLinkContainer>
      <AppLinkContainer>
        <AppLink $iconUrl={googleplayIcon.src} href="" />
        <AppLink $iconUrl={appstore.src} href="" />
      </AppLinkContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: fit-content;
  position: absolute;
  top: 0;
  right: 0;

  @media ${maxWidthLarge} {
    position: static;
    margin: 25px auto 0;
  }
`;

const SNSLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media ${maxWidthLarge} {
    justify-content: center;
  }
`;

const SNSLink = styled.a<{ $iconUrl: string }>`
  background: url(${({ $iconUrl }) => $iconUrl}) no-repeat center / 44px;
  width: 44px;
  height: 44px;
  display: block;

  &:not(:first-child) {
    margin-left: 8px;
  }
`;

const AppLinkContainer = styled.div`
  margin-top: 12px;
  display: flex;
`;

const AppLink = styled.a<{ $iconUrl: string }>`
  background: url(${({ $iconUrl }) => $iconUrl}) no-repeat center / 118px auto;
  width: 118px;
  height: 34px;
  display: block;

  &:last-child {
    margin-left: 16px;
  }
`;
