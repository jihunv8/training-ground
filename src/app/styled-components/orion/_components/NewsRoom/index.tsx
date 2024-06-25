import styled from 'styled-components';
import { useState } from 'react';
import { mediaSmall, mediaXLarge } from '@/app/styled-components/orion/_styles/mediaSize';

import CategorySelector from './CategorySelector';
import NewsRoomList from './NewsRoomList';

import { News, NewsType, mockNewsData } from '@/app/styled-components/orion/_components/NewsRoom/src/mockNewsData';

const NewsRoom = (): JSX.Element => {
  const [data, setData] = useState<News[]>(mockNewsData);
  const [selectedCategory, setSelectedCategory] = useState<NewsType | 'all'>('all');

  const filterData = (): News[] => {
    if (selectedCategory === 'all') {
      return data.slice(0, 8);
    } else {
      return data.filter((item) => {
        return item.type === selectedCategory;
      });
    }
  };

  return (
    <NewsRoomWrapper>
      <ContentsArea>
        <Title>뉴스룸</Title>
        <CategorySelector selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <NewsRoomList items={filterData()} />
      </ContentsArea>
    </NewsRoomWrapper>
  );
};

export default NewsRoom;

const NewsRoomWrapper = styled.section`
  margin-top: 160px;
  margin-bottom: 180px;

  padding: 0 16px;
`;

const ContentsArea = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 4.4rem;
  font-weight: 800;
  line-height: 1.4;

  @media ${mediaXLarge} {
    font-size: 3.85rem;
  }

  @media ${mediaSmall} {
    font-size: 2.8rem;
  }
`;
