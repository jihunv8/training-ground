import styled from 'styled-components';
import { screenSmall, screenXSmall } from '@/app/styled-components/construction/_styles/theme/mediaSize';

export default function CumulativeData({ data = '', dataName = '', shapeColor = '#FE8432' }) {
  return (
    <CumulativeDataWrapper>
      <Shape shape-color={shapeColor} />
      <Data>{data}</Data>
      <DataName>{dataName}</DataName>
    </CumulativeDataWrapper>
  );
}

const CumulativeDataWrapper = styled.div`
  position: relative;
`;

const Shape = styled.div<{ 'shape-color': string }>`
  background-color: ${(props) => props['shape-color']};
  width: 40px;
  height: 20px;
  border-radius: 20px 20px 0 0;
  transform: rotate(-54deg);
  position: absolute;
  top: -11px;
  left: -8px;

  @media screen and (max-width: ${screenSmall}) {
    width: 34px;
    height: 17px;
  }

  @media screen and (max-width: ${screenXSmall}) {
    width: 26px;
    height: 13px;
  }
`;

const Data = styled.div`
  position: relative;
  color: #313131;
  font-size: 2.5rem;
  font-weight: 500;
  line-break: 2.5rem;

  @media screen and (max-width: ${screenSmall}) {
    font-size: 2rem;
  }

  @media screen and (max-width: ${screenXSmall}) {
    font-size: 1.5rem;
  }
`;

const DataName = styled.div`
  margin-top: 15px;
  color: #6b6b6b;
  font-size: 1.25rem;
  line-height: 1.625rem;

  @media screen and (max-width: ${screenSmall}) {
    font-size: 1rem;
  }

  @media screen and (max-width: ${screenXSmall}) {
    font-size: 0.75rem;
  }
`;
