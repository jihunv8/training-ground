import { useState } from 'react';
import styled, { css } from 'styled-components';

function TripTypeSelector() {
  const [isRoundTrip, setIseRoundTrip] = useState(true);

  const selectRoundTrip = () => {
    setIseRoundTrip(true);
  };

  const selectOneWay = () => {
    setIseRoundTrip(false);
  };

  return (
    <Wrapper>
      <ButtonWrapper>
        <TripTypebutton type="button" onClick={selectRoundTrip} $selected={isRoundTrip}>
          왕복
        </TripTypebutton>
      </ButtonWrapper>
      <ButtonWrapper>
        <TripTypebutton type="button" onClick={selectOneWay} $selected={!isRoundTrip}>
          편도
        </TripTypebutton>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default TripTypeSelector;

const Wrapper = styled.div`
  display: flex;
`;

const ButtonWrapper = styled.div`
  padding: 0 15px;
`;

const TripTypebutton = styled.button<{ $selected: boolean }>`
  background-color: transparent;
  margin-bottom: 9px;
  padding: 0 2px 5px;

  border: none;
  border-radius: 1.8px;

  color: #555;
  font-size: 1.4rem;
  line-height: 1.5;
  &:focus {
    outline: solid 1px #0064de;
  }

  ${({ $selected }) =>
    $selected &&
    css`
      color: #0064de;
      font-weight: bold;
      position: relative;

      &::before {
        content: '';
        background-color: #0064de;
        height: 1px;
        width: 100%;
        border-radius: 1.8rem;
        border: 1px solid #00256c;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
      }
    `};
`;
