import styled from 'styled-components';
import { mediaSmall, mediaXLarge, mediaXSmall } from '@/app/styled-components/orion/_styles/mediaSize';

import type { BannerItem } from '../src/bannerItemsData';

export type BannerContainerProps = {
  selectedIndex: number;
  banners: BannerItem[];
};

export default function BannerContainer({ selectedIndex, banners }: BannerContainerProps) {
  return (
    <Wrapper>
      {banners.map((banner, i) => {
        const {
          contents,
          contentsTextColor,
          images: { bg },
        } = banner;
        return (
          <a key={i} href="">
            <Banner $visible={selectedIndex === i}>
              <BannerTitle $textColor={contentsTextColor}>{contents}</BannerTitle>
              <BackgroundImage
                $bgImage={typeof bg.src === 'string' ? bg.src : bg.src.src}
                $visible={selectedIndex === i}
              />
            </Banner>
          </a>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 870px;
  position: relative;

  @media ${mediaXLarge} {
    height: 760px;
  }

  @media ${mediaSmall} {
    height: 566px;
  }
`;

const Banner = styled.div<{ $visible: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.75s ease;
  overflow: hidden;
`;

const BackgroundImage = styled.div<{ $bgImage: string; $visible: boolean }>`
  width: 100%;
  height: 100%;
  background: url(${({ $bgImage }) => $bgImage}) no-repeat center/cover;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) ${({ $visible }) => ($visible ? 'scale(1)' : 'scale(1.08)')};
  transition: 7.5s ease;
`;

const BannerTitle = styled.h2<{ $textColor?: string }>`
  ${({ $textColor }) => $textColor !== undefined && `color: ${$textColor}`};
  position: relative;
  max-width: 1200px;
  padding: 190px 16px 0;
  margin: 0 auto;
  font-size: 5.2rem;
  font-weight: 800;
  line-height: 1.4;
  letter-spacing: -0.02em;
  white-space: pre-wrap;

  @media ${mediaXLarge} {
    padding-top: 166px;
    white-space: normal;
  }

  @media ${mediaSmall} {
    font-size: 3.2rem;
  }

  @media ${mediaXSmall} {
    padding-top: 130px;
  }
`;
