import styled from 'styled-components';
import { screenSmall } from '@/app/styled-components/construction/_styles/theme/mediaSize';

import arrowIcon from '@/app/styled-components/construction/_images/icons/arrow-in-circle.png';
import Image from 'next/image';

function InputMail() {
  return (
    <InputMailWrapper>
      <Title>Get in touch</Title>
      <InputConatiner>
        <Input placeholder="Enter your mail" />
        <Image src={arrowIcon} alt="arrow icon" />
      </InputConatiner>
    </InputMailWrapper>
  );
}

export default InputMail;

const InputMailWrapper = styled.div`
  @media screen and (max-width: ${screenSmall}) {
    order: 1;
  }
`;

const Title = styled.h2`
  color: #313131;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.6875rem;
`;

const InputConatiner = styled.div`
  display: flex;
  background-color: #fafafa;
  width: 174px;
  margin-top: 37px;
  padding: 12px;
`;

const Input = styled.input`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  font-size: 0.625rem;
  line-height: 0.9375rem;
`;
