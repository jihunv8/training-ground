import styled from 'styled-components';
import { screenSmall, screenXSmall } from '@/app/styled-components/construction/_styles/theme/mediaSize';

function NumberBox({ num = '', shapeColor = '' }) {
  return (
    <NumberBoxWrapper>
      <Number>{num}</Number>
      <Shape shape-color={shapeColor} />
    </NumberBoxWrapper>
  );
}

export default NumberBox;

const NumberBoxWrapper = styled.div`
  width: 6.375rem;
  flex-shrink: 0;

  @media screen and (max-width: ${screenSmall}) {
    width: calc(6.375rem / 1.2);
  }

  @media screen and (max-width: ${screenXSmall}) {
    width: calc(6.375rem / 1.4);
  }
`;

const Number = styled.div`
  width: fit-content;
  color: #313131;
  font-size: 4.5rem;
  font-weight: 600;
  margin-left: auto;
  margin-right: 0;

  @media screen and (max-width: ${screenSmall}) {
    font-size: calc(4.5rem / 1.2);
  }

  @media screen and (max-width: ${screenXSmall}) {
    font-size: calc(4.5rem / 1.4);
  }
`;

const Shape = styled.div<{ 'shape-color': string }>`
  background-color: ${(props) => props['shape-color']};
  width: 4.75rem;
  height: 4.75rem;
  border-radius: 0.3125rem 2.375rem;
  margin-top: -2.875rem;

  @media screen and (max-width: ${screenSmall}) {
    width: calc(4.75rem / 1.2);
    height: calc(4.75rem / 1.2);
    border-radius: calc(0.3125rem / 1.2) calc(2.375rem / 1.2);
    margin-top: calc(-2.875rem / 1.2);
  }

  @media screen and (max-width: ${screenXSmall}) {
    width: calc(4.75rem / 1.4);
    height: calc(4.75rem / 1.4);
    border-radius: calc(0.3125rem / 1.4) calc(2.375rem / 1.4);
    margin-top: calc(-2.875rem / 1.4);
  }
`;
