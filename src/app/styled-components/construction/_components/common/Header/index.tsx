import styled from 'styled-components';

import HeaderBackground from './HeaderBackground';
import NavBar from './NavBar';
import HeaderContent from './HeaderContent';
import LogosContainer from './LogosContainer';

import {
  contentsAreaLarge,
  contentsAreaMiddle,
  contentsAreaSmall,
  contentsAreaXLarge,
  contentsAreaXSmall,
  screenLarge,
  screenMiddle,
  screenSmall,
  screenXSmall,
} from '@/app/styled-components/construction/_styles/theme/mediaSize';

function Header() {
  return (
    <HeaderWrapper>
      <HeaderBackground />
      <ContentsArea>
        <NavBar />
        <HeaderContent />
        <LogosContainer />
      </ContentsArea>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  padding-top: 50px;
`;

const ContentsArea = styled.div`
  width: ${contentsAreaXLarge};
  margin: -933px auto 0;
  position: relative;

  @media screen and (max-width: ${screenLarge}) {
    width: ${contentsAreaLarge};
  }

  @media screen and (max-width: ${screenMiddle}) {
    width: ${contentsAreaMiddle};
    margin-top: -450px;
  }

  @media screen and (max-width: ${screenSmall}) {
    width: ${contentsAreaSmall};
    margin-top: -410px;
  }

  @media screen and (max-width: ${screenXSmall}) {
    width: ${contentsAreaXSmall};
    margin-top: -175px;
  }
`;
