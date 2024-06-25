import styled from 'styled-components';
import { useIsScrollUp } from '../../_hooks/scroll';
import { mediaSmall, mediaXLarge } from '@/app/styled-components/orion/_styles/mediaSize';
import { useState } from 'react';

import GnbOnMobile from './GnbOnMobile';
import GlobalNav from './Gnb';
import UtilityArea from './UtilityArea';

import Image from 'next/image';

import logoImage from '@/app/styled-components/orion/_images/logo.png';

export default function Header() {
  const [isGnbMOn, setIsGnbMOn] = useState(false);
  const isScrollUp = useIsScrollUp();

  const handleToggleMenu = () => {
    setIsGnbMOn((prev) => !prev);
  };

  return (
    <Wrapper $visible={isScrollUp}>
      <InnerWrapper>
        <LogoWrapper>
          <a href="/">
            <Image src={logoImage} alt="ORION" />
          </a>
        </LogoWrapper>
        <GlobalNav />
        <GnbOnMobile isOn={isGnbMOn} />
        <UtilityArea onToggleMenu={handleToggleMenu} />
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header<{ $visible: boolean }>`
  width: 100%;
  height: 90px;
  background-color: #fff;
  border-bottom: solid 1px #e2e2e2;
  position: fixed;
  z-index: 1000;
  transform: translateY(${({ $visible }) => ($visible ? '0' : '-100%')});
  transition: 0.45s;

  @media ${mediaXLarge} {
    height: 78px;
  }

  @media screen and (max-width: 960px) {
    height: 66px;
  }

  @media ${mediaSmall} {
    height: 75px;
  }
`;

const InnerWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const LogoWrapper = styled.div`
  position: absolute;
  left: 60px;
  top: 50%;
  transform: translateY(-50%);

  @media ${mediaXLarge} {
    left: 20px;
  }
`;
