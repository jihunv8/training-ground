import styled from 'styled-components';
import { parseMoney } from '@/app/styled-components/korean-air/_utils/money';
import { RecomendedTrip } from '@/app/styled-components/korean-air/_components/Section2/TripRecomender/mockTripsData';
import Image from 'next/image';

type TripProps = {
  trip: RecomendedTrip;
};

export default function Trip({ trip }: TripProps) {
  const { from, to, cabinClass, type, price, image } = trip;
  const imgSrc = image.src;
  const imgUrl = typeof imgSrc === 'string' ? imgSrc : imgSrc.src;

  return (
    <Wrapper>
      <TripImage src={imgUrl} alt={`사진-${to}`} />
      <Content>
        <FromTo>
          {from}
          {'  -  '}
          {to}
        </FromTo>
        <CabinClassAndType>
          {cabinClass} {type}
        </CabinClassAndType>
        <Price>KRW {parseMoney(price)} ~</Price>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.a`
  display: block;
  width: 100%;
  border: 1px solid transparent;
  cursor: pointer;
  position: relative;

  &:hover,
  &:focus {
    border-color: #0064de;
  }
`;

const TripImage = styled.img`
  display: block;
  width: 100%;
`;

const Content = styled.div`
  padding: 20px 22px;
  position: absolute;
  top: 0;
  left: 0;
`;

const FromTo = styled.h3`
  font-weight: bold;
  line-height: 1.5;
  white-space: pre-wrap;
`;

const CabinClassAndType = styled.div`
  margin-top: 8px;
  line-height: 1.5;
`;

const Price = styled.div`
  color: #11277b;
  font-weight: bold;
  line-height: 1.5;
`;
