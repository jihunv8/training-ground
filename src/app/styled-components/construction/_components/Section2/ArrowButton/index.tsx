import styled from 'styled-components';

import blackArrow from '@/app/styled-components/construction/_images/icons/black-arrow.png';
import whiteArrow from '@/app/styled-components/construction/_images/icons/white-arrow.png';
import Image from 'next/image';

function ArrowButton({ right = false }) {
  return (
    <ArrowButtonWrapper $right={right}>
      <Image src={right ? whiteArrow : blackArrow} alt="arrow" />
    </ArrowButtonWrapper>
  );
}

export default ArrowButton;

const ArrowButtonWrapper = styled.button<{ $right: boolean }>`
  background-color: ${({ $right }) => ($right ? '#40A2D5' : '#fff')};
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
