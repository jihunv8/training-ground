import styled, { css } from 'styled-components';
import * as media from '@/app/styled-components/korean-air/_styles/mediaSize';

import koreanairLogoPC from '@/app/styled-components/korean-air/_images/logos/logo--koreanair-pc.png';
import koreanairLogoM from '@/app/styled-components/korean-air/_images/logos/logo--koreanair-m.png';
import skyteamLogo from '@/app/styled-components/korean-air/_images/logos/logo--skyteam-pc.png';

import loginIcon from '@/app/styled-components/korean-air/_images/icons/util__link--login.svg';
import alramIcon from '@/app/styled-components/korean-air/_images/icons/util__link--alram-off.svg';
import cartIcon from '@/app/styled-components/korean-air/_images/icons/util__link--cart-off.svg';
import searchIcon from '@/app/styled-components/korean-air/_images/icons/util__link--search.svg';
import hamburgerIcon from '@/app/styled-components/korean-air/_images/icons/drawer-trigger.svg';
import Image from 'next/image';

import { HeaderMenuKey } from '../src/headerMenus';
import { useResponsiveCheck } from '@/app/styled-components/korean-air/_utils/useResponsiveCheck';

type HeaderNavProps = {
  selectedMenuKey: HeaderMenuKey | null;
  onSelectMenu: (menu: HeaderMenuKey) => void;
};

function HeaderNav({ selectedMenuKey, onSelectMenu }: HeaderNavProps) {
  const isTabletSize = useResponsiveCheck('large');

  const _onSelectMenu = (menuKey: HeaderMenuKey) => {
    return () => {
      onSelectMenu(menuKey);
    };
  };

  return (
    <HeaderNavWrapper>
      <ContentsArea>
        <Logos>
          {isTabletSize ? (
            <a href="/">
              <Image src={koreanairLogoM} alt="korean air logo" priority />
            </a>
          ) : (
            <>
              <a href="/">
                <Image src={koreanairLogoPC} alt="korean air logo" priority />
              </a>

              <a href="">
                <Image src={skyteamLogo} alt="skyteam logo" />
              </a>
            </>
          )}
        </Logos>
        {!isTabletSize && (
          <div>
            <NavButton onClick={_onSelectMenu('book')} $selected={selectedMenuKey === 'book'}>
              예매
            </NavButton>
            <NavButton onClick={_onSelectMenu('airport')} $selected={selectedMenuKey === 'airport'}>
              공항
            </NavButton>
            <NavButton onClick={_onSelectMenu('inFlight')} $selected={selectedMenuKey === 'inFlight'}>
              기내
            </NavButton>
            <NavButton onClick={_onSelectMenu('skypass')} $selected={selectedMenuKey === 'skypass'}>
              스카이패스
            </NavButton>
          </div>
        )}

        <Menu>
          <MenuItemLink href="" $imgUrl={loginIcon.src}></MenuItemLink>
          <MenuItemButton $imgUrl={alramIcon.src}></MenuItemButton>
          <MenuItemLink href="" $imgUrl={cartIcon.src}></MenuItemLink>
          {isTabletSize ? (
            <MenuItemButton $imgUrl={hamburgerIcon.src}></MenuItemButton>
          ) : (
            <MenuItemButton $imgUrl={searchIcon.src}></MenuItemButton>
          )}
        </Menu>
      </ContentsArea>
    </HeaderNavWrapper>
  );
}

export default HeaderNav;

const HeaderNavWrapper = styled.nav`
  border-bottom: solid 1px #d9dbe1;
  padding: 0 20px;
`;

const ContentsArea = styled.div`
  margin: 0 auto;
  max-width: ${media.maxContentsArea};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logos = styled.div`
  display: flex;

  > a > img {
    display: block;
    height: auto;
  }

  @media ${media.maxWidthLarge} {
    > a {
      height: 50px;
      display: flex;
      align-items: center;
      > img {
        width: 132px;
      }
    }
  }

  @media ${media.maxWidthXSmall} {
    > a > img {
      width: 105px;
    }
  }
`;

const NavButton = styled.button<{ $selected: boolean }>`
  height: 90px;
  padding: 0 30px;
  border: none;
  background-color: transparent;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1.56;
  position: relative;

  &:after {
    content: '';
    height: 4px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition:
      bottom 0.4s,
      width 0.4s,
      background-color 0.4s;

    ${({ $selected }) =>
      $selected &&
      css`
        animation: select 0.4s forwards;

        @keyframes select {
          from {
            width: calc(100% - 60px);
            background-color: #888;
            bottom: 14px;
          }
          to {
            width: calc(100% - 40px);
            background-color: #de001b;
            bottom: 12px;
          }
        }
      `}
  }
`;

const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;

  @media ${media.maxWidthLarge} {
    column-gap: 0;
  }
`;

const MenuItemStyle = css<{ $imgUrl: string }>`
  width: 44px;
  height: 44px;
  background: url(${({ $imgUrl }) => $imgUrl}) no-repeat center / 44px;
  transition: background-size 0.15s;

  &:hover {
    background-size: 48px;
  }

  @media ${media.maxWidthXSmall} {
    column-gap: 0;
    width: 35px;
    height: 40px;
    background-size: 40px;
  }
`;

const MenuItemLink = styled.a<{ $imgUrl: string }>`
  ${MenuItemStyle}
`;

const MenuItemButton = styled.button<{ $imgUrl: string }>`
  background-color: transparent;
  border: none;
  ${MenuItemStyle}
`;
