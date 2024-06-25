import styled, { css } from 'styled-components';

import earthIcon from '@/app/styled-components/korean-air/_images/icons/lang__button.svg';
import arrowIcon from '@/app/styled-components/korean-air/_images/icons/lang__arrow.svg';
import { maxContentsArea } from '@/app/styled-components/korean-air/_styles/mediaSize';

export default function LanguageSelector() {
  return (
    <Wrapper>
      <ContentsArea>
        <SelectButton>대한민국</SelectButton>
        <QuickSelectButtonContainer>
          <QuickSelectButton $selected>한국어</QuickSelectButton>
          <QuickSelectButton>English</QuickSelectButton>
        </QuickSelectButtonContainer>
      </ContentsArea>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 14px 20px;
  border-bottom: solid 1px #e7eaf0;
`;

const ContentsArea = styled.div`
  margin: 0 auto;
  max-width: ${maxContentsArea};
  display: flex;
`;

const SelectButton = styled.button`
  padding-left: 20px;
  background: transparent url(${earthIcon.src}) no-repeat left center;
  border: none;
  font-size: 1.4rem;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    text-decoration: underline;
    outline: none;
  }

  &:after {
    content: '';
    display: block;
    background: transparent url(${arrowIcon.src}) no-repeat left center;
    width: 9px;
    height: 5px;
    margin-left: 12px;
  }
`;

const QuickSelectButtonContainer = styled.div`
  margin-left: 8px;
  &::before {
    content: '';
    display: inline-block;
    background-color: #dee1e4;
    width: 1px;
    height: 15px;
    margin-right: 13px;
  }
`;

const QuickSelectButton = styled.button<{ $selected?: boolean }>`
  background-color: transparent;
  border: none;
  color: #555;
  font-size: 1.4rem;
  line-height: 1.58;

  &:not(:first-child) {
    margin-left: 16px;
  }

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    text-decoration: underline;
    outline: none;
  }

  ${({ $selected }) =>
    $selected &&
    css`
      color: #000;
      font-weight: bold;
      text-decoration: underline;
    `}
`;
