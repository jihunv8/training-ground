import styled from 'styled-components';
import { useState } from 'react';
import * as media from '@/app/styled-components/korean-air/_styles/mediaSize';

import Banner from './Banner';
import SwiperController from './SwiperController';

import mockData from './mockBannersData';

export default function MainBannerSwiper() {
  const banners = mockData;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    let prevPage = currentIndex - 1;
    if (prevPage < 0) {
      prevPage = banners.length - 1;
    }

    setCurrentIndex(prevPage);
  };

  const handleNext = () => {
    let nextPage = currentIndex + 1;
    if (nextPage >= banners.length) {
      nextPage = 0;
    }

    setCurrentIndex(nextPage);
  };

  return (
    <MainBannerWrapper>
      {banners.map((banner, i) => (
        <BannerWrapper key={i} $visible={i === currentIndex}>
          <Banner data={banner} />
        </BannerWrapper>
      ))}

      <SwipeButtonContainer>
        <SwiperController
          currentIndex={currentIndex}
          maxIndex={banners.length}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </SwipeButtonContainer>
    </MainBannerWrapper>
  );
}

const MainBannerWrapper = styled.div`
  padding: 0 20px;
  position: relative;

  @media ${media.maxWidthLarge} {
    display: none;
    padding-left: 0;
    padding-right: 0;
  }
`;

const BannerWrapper = styled.div<{ $visible: boolean }>`
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};

  margin: 0 auto;
  animation: fade-in 1s;

  @keyframes fade-in {
    from {
      opacity: 0.5;
    }

    to {
      opacity: 1;
    }
  }
`;

const SwipeButtonContainer = styled.div`
  max-width: ${media.maxContentsArea};
  margin: 0 auto;
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 40px;

  display: flex;

  @media ${media.maxWidthXLarge} {
    padding-left: 40px;
    padding-right: 40px;
    left: 0;
    right: 0;
  }

  @media ${media.maxWidthLarge} {
    padding-right: 20px;
    justify-content: flex-end;
    bottom: 150px;
  }
`;
