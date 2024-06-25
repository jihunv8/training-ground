import styled from 'styled-components';
import RootMenuList from './RootMenuListM';

type GlobalNavMProps = {
  isOn: boolean;
};

export default function GlobalNavM({ isOn = false }: GlobalNavMProps) {
  return (
    <Wrapper $on={isOn}>
      <RootMenuList />
    </Wrapper>
  );
}

const Wrapper = styled.nav<{ $on: boolean }>`
  display: none;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: #fff;
  padding-top: 66px;
  z-index: -1;

  @media screen and (max-width: 960px) {
    display: ${({ $on }) => ($on ? 'block' : 'none')};
  }
`;
