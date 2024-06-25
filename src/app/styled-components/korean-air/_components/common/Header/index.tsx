import styled from 'styled-components';
import { useState } from 'react';
import { maxWidthLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';

import HeaderDropdown from './HeaderDropdown';
import HeaderNav from './HeaderNav';

import { HeaderMenuKey } from './src/headerMenus';

function Header() {
  const [selectedMenuKey, setSelectedMenuKey] = useState<HeaderMenuKey | null>(null);
  const [isDropdown, setIsDropdown] = useState(false);

  const handleSelectMenu = (menuKey: HeaderMenuKey | null) => {
    if (menuKey === null) {
      setIsDropdown(false);
    } else {
      setIsDropdown(true);
    }

    setSelectedMenuKey(menuKey);
  };

  const handleCloseDropdown = () => {
    handleSelectMenu(null);
  };

  return (
    <HeaderWrapper>
      <HeaderNav selectedMenuKey={selectedMenuKey} onSelectMenu={handleSelectMenu} />
      <HeaderDropdownWrapper $visible={isDropdown}>
        <HeaderDropdown selectedMenuKey={selectedMenuKey} onCloseDropdown={handleCloseDropdown} />
      </HeaderDropdownWrapper>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  position: relative;
`;

const HeaderDropdownWrapper = styled.div<{ $visible: boolean }>`
  width: 100%;
  position: absolute;
  z-index: 20;
  top: 91px;
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};

  @media ${maxWidthLarge} {
    display: none;
  }
`;
