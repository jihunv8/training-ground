'use client';

import styled from 'styled-components';
import * as mediaSize from '../../_styles/utils/mediaSize';

import logo from '../../_images/default-logo.png';
import menuIcon from '../../_images/icons/menu.svg';
import Image from 'next/image';

function Header() {
  return (
    <header>
      <HeaderContentsArea>
        <Logo>
          <a href="">
            <Image alt="logo" src={logo} />
          </a>
        </Logo>

        <TempButton>
          <Image alt="menu icon" src={menuIcon} />
        </TempButton>
      </HeaderContentsArea>
    </header>
  );
}

export default Header;

const HeaderContentsArea = styled.div`
  width: ${mediaSize.contentsAreaLarge};
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    width: ${mediaSize.contentsAreaLarge};
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    width: ${mediaSize.contentsAreaMiddle};
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    width: ${mediaSize.contentsAreaSmall};
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    width: ${mediaSize.contentsAreaXSmall};
  }
`;

const Logo = styled.h1`
  height: 100%;
  display: flex;
  align-items: center;

  > a > img {
    width: 64px;
  }
`;

const TempButton = styled.button`
  /* color: #1847b8; */
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;

  > img {
    width: 24px;
  }
`;
