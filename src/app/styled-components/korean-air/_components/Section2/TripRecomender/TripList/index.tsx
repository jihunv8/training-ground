import styled from 'styled-components';
import { useState } from 'react';

import Trip from './Trip';

import prevBtnIcon from '@/app/styled-components/korean-air/_images/icons/mris__button-left.svg';
import nextBtnIcon from '@/app/styled-components/korean-air/_images/icons/mris__button-right.svg';

import mockTripsData from '../mockTripsData';

import {
  maxWidthLarge,
  maxWidthMiddle,
  maxWidthSmall,
  screenLarge,
} from '@/app/styled-components/korean-air/_styles/mediaSize';
import { useMediaQuery } from 'react-responsive';

export default function TripList() {
  const [trips, setTrips] = useState(mockTripsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMaxWidthLarge = useMediaQuery({ maxWidth: screenLarge });

  const swipePrev = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
    }
  };

  const swipeNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex <= trips.length - (isMaxWidthLarge ? 2 : 4)) {
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <Wrapper>
      <List $index={currentIndex}>
        {trips.map((trip, i) => {
          return (
            <ListItem key={i}>
              <Trip trip={trip} />
            </ListItem>
          );
        })}
      </List>
      <PrevButton onClick={swipePrev} />
      <NextButton onClick={swipeNext} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 20px;
  overflow: hidden;
  position: relative;
`;

const List = styled.ul<{ $index: number }>`
  width: 100%;
  display: flex;
  transform: translateX(calc((232px + 30px) * -1 * ${({ $index }) => $index}));
  transition: transform 0.7s;

  @media ${maxWidthLarge} {
    transform: translateX(calc(((100% - 8px) / 2 + 8px) * -1 * ${({ $index }) => $index}));
    width: 55%;
  }

  @media ${maxWidthMiddle} {
    width: 70%;
  }

  @media ${maxWidthSmall} {
    width: 90%;
  }
`;

const ListItem = styled.li`
  width: 232px;
  flex-shrink: 0;

  &:not(:first-child) {
    margin-left: 30px;
  }

  @media ${maxWidthLarge} {
    width: calc((100% - 8px) / 2);

    &:not(:first-child) {
      margin-left: 8px;
    }
  }
`;

const SwipeButton = styled.button`
  width: 30px;
  height: 60px;
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const PrevButton = styled(SwipeButton)`
  background: url(${prevBtnIcon.src});
  left: 1px;
`;

const NextButton = styled(SwipeButton)`
  background: url(${nextBtnIcon.src});
  right: 1px;
`;
