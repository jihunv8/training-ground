import styled from 'styled-components';
import { mediaSmall } from '@/app/styled-components/orion/_styles/mediaSize';
import Card from './Card';

import { ethicalManagementCards } from './src/ethicalManagementCardData';

export default function CardList(): JSX.Element {
  return (
    <Wrapper>
      {ethicalManagementCards.map((data, i) => {
        return <Card key={`${data.title}${i}`} data={data} />;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  width: 100%;
  margin-top: 50px;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(4, 1fr);
  gap: 16px;

  @media ${mediaSmall} {
    grid-template: repeat(4, 1fr) / repeat(2, 1fr);
  }
`;
