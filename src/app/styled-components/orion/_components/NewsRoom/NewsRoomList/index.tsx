import styled from 'styled-components';
import { mediaSmall } from '@/app/styled-components/orion/_styles/mediaSize';

import ListCard from './ListCard';
import { News } from '@/app/styled-components/orion/_components/NewsRoom/src/mockNewsData';

type NewRoomListProps = {
  items: News[];
};

export default function NewsRoomList({ items }: NewRoomListProps): JSX.Element {
  return (
    <NewsRoomListWrapper>
      {items.map((item, i) => {
        return <ListCard key={i} data={item} />;
      })}
    </NewsRoomListWrapper>
  );
}

const NewsRoomListWrapper = styled.ul`
  margin-top: 50px;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(4, 1fr);
  gap: 1px;

  @media ${mediaSmall} {
    display: flex;
    overflow-x: scroll;
  }
`;
