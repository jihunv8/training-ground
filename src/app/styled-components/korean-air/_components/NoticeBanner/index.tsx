import styled from 'styled-components';
import { maxContentsArea, maxWidthLarge } from '@/app/styled-components/korean-air/_styles/mediaSize';
import { NoticeBannerData } from '@/app/styled-components/korean-air/mockNoticeBannerData';
import { StaticImageData } from 'next/image';

type NoticeBannerProps = {
  data: NoticeBannerData;
};
type NoticeBannerDataBgImage = NoticeBannerData['bgImage'];

function NoticeBanner({ data }: NoticeBannerProps) {
  const { title, subtitle, href, bgImage } = data;
  return (
    <NoticeBannerWrapper>
      <Anchor href={href} bg-image={bgImage}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Anchor>
    </NoticeBannerWrapper>
  );
}

export default NoticeBanner;

const NoticeBannerWrapper = styled.div`
  padding: 0 20px;
`;

const getUrl = (src: string | StaticImageData) => {
  if (typeof src === 'string') return src;
  return src.src;
};

const Anchor = styled.a<{ 'bg-image': NoticeBannerDataBgImage }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(${(props) => getUrl(props['bg-image'].pc.src)}) no-repeat right center / cover;
  max-width: ${maxContentsArea};
  height: 120px;
  padding: 30px 320px 34px 40px;
  color: #00256c;

  &:hover {
    text-decoration: underline;
  }

  @media ${maxWidthLarge} {
    background-image: url(${(props) => getUrl(props['bg-image'].mobile.src)});
    padding: 22px 100px 22px 24px;
  }
`;

const Title = styled.h2`
  color: inherit;
  font-size: 1.8rem;
  text-decoration: inherit;
`;

const Subtitle = styled.h3`
  margin-top: 4px;
  color: inherit;
  font-weight: normal;
  text-decoration: inherit;
`;
