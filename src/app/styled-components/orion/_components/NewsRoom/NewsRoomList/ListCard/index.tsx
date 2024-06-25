import styled from 'styled-components';
import { mediaMiddle, mediaSmall, mediaXLarge, mediaXSmall } from '@/app/styled-components/orion/_styles/mediaSize';

import iconInstagram from '@/app/styled-components/orion/_images/home/news-room/social_icon_instagram.png';
import iconYoutube from '@/app/styled-components/orion/_images/home/news-room/social_icon_youtube.png';
import iconNews from '@/app/styled-components/orion/_images/home/news-room/social_icon_news.png';

const iconUrls = { instagram: iconInstagram.src, youtube: iconYoutube.src, news: iconNews.src };

import { News } from '@/app/styled-components/orion/_components/NewsRoom/src/mockNewsData';

export type ListCardProps = {
  data: News;
};

export default function ListCard({ data }: ListCardProps): JSX.Element {
  const { contents, imageUrl, type } = data;

  return (
    <Wrapper $imageUrl={imageUrl} itemType={type}>
      <InnerWrapper href="">
        <Contents>{contents}</Contents>
      </InnerWrapper>
    </Wrapper>
  );
}

type ListCardWrapperProps = {
  $imageUrl: string;
  itemType: 'instagram' | 'youtube' | 'news';
};

const Wrapper = styled.li<ListCardWrapperProps>`
  width: 100%;
  background: #000 url(${({ $imageUrl }) => $imageUrl}) no-repeat center/contain;
  position: relative;
  aspect-ratio: 1/1;

  ::after {
    content: '';
    display: block;
    width: 36px;
    height: 36px;
    background: url(${({ itemType }) => iconUrls[itemType]}) no-repeat center / cover;
    position: absolute;
    right: 1.6rem;
    bottom: 1.6rem;
    z-index: 1;
  }

  @media ${mediaSmall} {
    height: 242px;
  }
`;

const Contents = styled.p`
  width: 100%;
  height: 100%;
  padding: 24px;
  background-color: rgba(227, 5, 27, 0.6);

  color: #fff;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.4;
  text-align: center;
  word-break: keep-all;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  transform: translateY(100%);
  transition: 0.35s ease-in-out;

  @media ${mediaXLarge} {
    font-size: 2.1rem;
  }

  @media ${mediaMiddle} {
    font-size: 1.6rem;
  }

  @media ${mediaXSmall} {
    font-size: 1.8rem;
  }
`;

const InnerWrapper = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &:hover {
    > ${Contents} {
      transform: translateY(0);
    }
  }
`;
