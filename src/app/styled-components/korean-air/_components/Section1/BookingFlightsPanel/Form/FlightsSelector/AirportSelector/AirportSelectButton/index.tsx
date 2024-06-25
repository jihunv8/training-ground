import styled from 'styled-components';
import { maxWidthLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';

type AirportSelectButtonProps = {
  code: string;
  name: string;
};

export default function AirportSelectButton({ code, name }: AirportSelectButtonProps) {
  return (
    <PointSelectButtonWrapper type="button">
      <Code>{code}</Code>
      <Name>{name}</Name>
    </PointSelectButtonWrapper>
  );
}

const PointSelectButtonWrapper = styled.button`
  background-color: transparent;
  width: 100%;
  border: none;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:focus,
  &:hover {
    outline: 1px solid #0064de;
  }
`;

const Code = styled.span`
  font-size: 2.6rem;
  font-weight: bold;
  line-height: 1.2;

  @media ${maxWidthLarge} {
    font-size: 3rem;
    line-height: 1.55;
  }
`;

const Name = styled.span`
  font-size: 1.4rem;
  line-height: 1.57;
`;
