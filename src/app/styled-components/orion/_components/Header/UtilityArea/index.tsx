import styled from 'styled-components';

import iconSearch from '@/app/styled-components/orion/_images/header/icon-search.png';
import { mediaXLarge } from '@/app/styled-components/orion/_styles/mediaSize';

type UtilityAreaProps = {
  onToggleMenu: () => void;
};

export default function UtilityArea({ onToggleMenu }: UtilityAreaProps) {
  return (
    <Wrapper>
      <EnglishLink href="/en">English</EnglishLink>
      <SearchBtn />
      <HamburgerBtn onClick={onToggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 60px;
  top: 50%;
  transform: translateY(-50%);

  @media ${mediaXLarge} {
    right: 20px;
  }
`;

const EnglishLink = styled.a`
  margin-right: 32px;
  color: #222;
  font-size: 1.4rem;
  font-weight: 700;
  transition-duration: 0.45s;

  &:hover {
    color: #e3051b;
  }

  @media ${mediaXLarge} {
    margin-right: 28px;
    font-size: 1.225rem;
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const SearchBtn = styled.button`
  width: 26px;
  height: 26px;
  margin-right: 16px;
  border: none;
  background: url(${iconSearch.src}) no-repeat center / 24px;
`;

const HamburgerBtn = styled.button`
  display: none;
  flex-direction: column;
  align-items: flex-end;
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;

  > span {
    display: block;
    width: 20px;
    height: 2px;
    background-color: #222;

    &:first-chi ld {
      margin-top: 3px;
    }

    &:nth-child(2) {
      margin-top: 8px;
    }

    &:last-child {
      margin-top: 8px;
      width: 30px;
    }
  }

  @media screen and (max-width: 960px) {
    display: flex;
  }
`;
