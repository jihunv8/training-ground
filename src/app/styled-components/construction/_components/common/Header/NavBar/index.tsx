import styled from 'styled-components';

import Logo from '../../Logo';
import menuIcon from '@/app/styled-components/construction/_images/icons/hamburger-icon.svg';
import { screenMiddle } from '@/app/styled-components/construction/_styles/theme/mediaSize';
import Image from 'next/image';

function NavBar() {
  return (
    <NavBarWrapper>
      <h1>
        <Logo />
      </h1>
      <MenuButton>
        <Image src={menuIcon} alt="menuIcon" width={40} height={40} />
      </MenuButton>
      <Nav>
        <NavContent href="">Home</NavContent>
        <NavContent href="">Abtou Us</NavContent>
        <NavContent href="">Services</NavContent>
        <NavContent href="">Project</NavContent>
      </Nav>
    </NavBarWrapper>
  );
}

export default NavBar;

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Nav = styled.nav`
  width: 380px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${screenMiddle}) {
    display: none;
  }
`;

const NavContent = styled.a`
  color: #fff;
  font-size: 1.125rem;
  position: relative;

  &:hover {
    font-weight: 600;

    &::after {
      content: '';
      display: block;
      width: 4px;
      height: 4px;
      background-color: #fff;
      border-radius: 100%;
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-2px);
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background-color: rgba(0, 0, 0, 0);
  border: none;

  > img {
    color: #fff;
  }

  @media screen and (max-width: ${screenMiddle}) {
    display: block;
  }
`;
