import styled from 'styled-components';
import GnbMenuList from './GnbMenuList';

export default function Gnb() {
  return (
    <Wrapper>
      <GnbMenuList />
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
