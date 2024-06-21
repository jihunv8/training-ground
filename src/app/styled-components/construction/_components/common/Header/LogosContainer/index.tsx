import styled from 'styled-components';
import {
  screenLarge,
  screenMiddle,
  screenSmall,
  screenXSmall,
} from '@/app/styled-components/construction/_styles/theme/mediaSize';

import logoAsana from '@/app/styled-components/construction/_images/logo-asana.png';
import logoBuzzfeed from '@/app/styled-components/construction/_images/logo-buzzfeed.png';
import logoChase from '@/app/styled-components/construction/_images/logo-chase.png';
import logoToggl from '@/app/styled-components/construction/_images/logo-toggl.png';
import logoWalmart from '@/app/styled-components/construction/_images/logo-walmart.png';

import Image from 'next/image';

import type { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default function LogosContainer() {
  return (
    <LogosContainerWrapper>
      <Logo src={logoAsana} alt="logoAsana" />
      <Logo src={logoBuzzfeed} alt="logoBuzzfeed" />
      <Logo src={logoChase} alt="logoChase" />
      <Logo src={logoToggl} alt="logoToggl" />
      <Logo src={logoWalmart} alt="logoWalmart" />
    </LogosContainerWrapper>
  );
}

function Logo({ src, alt }: { src: string | StaticImport; alt: string }) {
  return (
    <LogoWrapper>
      <Image src={src} alt={alt} />
    </LogoWrapper>
  );
}

const LogosContainerWrapper = styled.div`
  background-color: #fafafa;
  height: 180px;
  padding: 74px 82px;
  margin-top: 170px;
  border-radius: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${screenLarge}) {
    height: 140px;
    padding: 45px 60px;
  }

  @media screen and (max-width: ${screenMiddle}) {
    margin-top: 80px;
    height: 160px;
    padding: 20px 30px;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (max-width: ${screenSmall}) {
    height: 160px;
    padding: 20px 0;
  }

  @media screen and (max-width: ${screenXSmall}) {
    height: auto;
    flex-direction: column;
    border-radius: 50px;
  }
`;

const LogoWrapper = styled.div`
  @media screen and (max-width: ${screenMiddle}) {
    padding: 0 30px;
  }

  @media screen and (max-width: ${screenSmall}) {
    padding: 0 20px;
  }

  @media screen and (max-width: ${screenXSmall}) {
    padding: 10px 0;
  }
`;
