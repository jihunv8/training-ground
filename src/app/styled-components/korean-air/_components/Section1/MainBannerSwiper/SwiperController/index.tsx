import styled from 'styled-components';

import prevArrowIcon from '@/app/styled-components/korean-air/_images/icons/carousel-icon-prev-ctrl.svg';
import nextArrowIcon from '@/app/styled-components/korean-air/_images/icons/carousel-icon-next-ctrl.svg';

type SwiperControllerProps = {
  currentIndex: number;
  maxIndex: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function SwiperController({ currentIndex, maxIndex, onPrev, onNext }: SwiperControllerProps) {
  return (
    <Wrapper>
      <PrevButton onClick={onPrev} />
      <PageNumber>
        <span>{currentIndex + 1}</span> / {maxIndex}
      </PageNumber>
      <NextButton onClick={onNext} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  width: fit-content;
  padding: 2px 6px;
  display: flex;
  align-items: center;
`;

const PageNumber = styled.div`
  margin: 0 4px;
  color: #fff;
  font-size: 1.4rem;
  line-height: 2.1rem;

  > span {
    font-weight: bold;
  }
`;

const Button = styled.button`
  width: 28px;
  height: 28px;
  background-color: transparent;
  border: none;
  color: #fff;
`;

const PrevButton = styled(Button)`
  background: url(${prevArrowIcon.src}) no-repeat center;
`;

const NextButton = styled(Button)`
  background: url(${nextArrowIcon.src}) no-repeat center;
`;
