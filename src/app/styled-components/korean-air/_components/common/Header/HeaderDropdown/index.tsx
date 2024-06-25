import styled, { css } from 'styled-components';
import { maxContentsArea } from '@/app/styled-components/korean-air/_styles/mediaSize';

import closeIcon from '@/app/styled-components/korean-air/_images/icons/gnb__close.svg';

import headerMenus from '../src/headerMenus';

import MenuColumn from './MenuColumn';
import QuickMenu from './QuickMenu';

import { HeaderMenuKey } from '../src/headerMenus';

type HeaderDropdownProps = {
  selectedMenuKey: HeaderMenuKey | null;
  onCloseDropdown: () => void;
};

function HeaderDropdown({ selectedMenuKey, onCloseDropdown }: HeaderDropdownProps) {
  return (
    <HeaderDropdownWrapper>
      {selectedMenuKey !== null ? (
        <ContentsArea>
          {headerMenus[selectedMenuKey].map((linkGroups, i) => (
            <MenuColumn key={i} linkGroups={linkGroups} />
          ))}
          <QuickMenu />
          <CloseButton
            onClick={() => {
              onCloseDropdown();
            }}
          />
        </ContentsArea>
      ) : (
        <>null</>
      )}
    </HeaderDropdownWrapper>
  );
}

export default HeaderDropdown;

const HeaderDropdownWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 0 20px;
  box-shadow: 0 6px 10px 0 rgb(39 40 44 / 10%);
`;

const ContentsArea = styled.div`
  max-width: ${maxContentsArea};
  margin: 0 auto;
  display: flex;
  border-left: solid 1px #d9dbe1;
  border-right: solid 1px #d9dbe1;
  position: relative;
`;

const CloseButton = styled.button`
  background: transparent url(${closeIcon.src}) no-repeat center;
  width: 44px;
  height: 44px;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
`;
