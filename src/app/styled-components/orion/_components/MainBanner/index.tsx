import { useEffect, useState } from 'react';
import styled from 'styled-components';

import BannerContainer from './BannerContainer';
import BannerNav from './BannerNav';

import { bannerItems } from './src/bannerItemsData';

const MainBanner = (): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 배너 바뀌는 모습 보여주기 위한 코드. 기존 시간은 배너가 바뀌는 모습을 못보고 지나칠 가능성이 있어서 작성함
  // 배너 렌더링 후 처음 배너교체 시간 1초.
  useEffect(() => {
    const autoBannerChangeTimer = setTimeout(() => {
      let nextBannerIndex = selectedIndex + 1;

      setSelectedIndex(nextBannerIndex < 4 ? nextBannerIndex : 0);
    }, 1000);

    return () => {
      clearTimeout(autoBannerChangeTimer);
    };
  }, []);
  // 배너 바뀌는 모습 보여주기 위한 코드 여기까지....

  useEffect(() => {
    const autoBannerChangeTimer = setTimeout(() => {
      let nextBannerIndex = selectedIndex + 1;

      setSelectedIndex(nextBannerIndex < 4 ? nextBannerIndex : 0);
    }, 5000);

    return () => {
      clearTimeout(autoBannerChangeTimer);
    };
  });

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <MainBannerWrapper>
      <BannerContainer banners={bannerItems} selectedIndex={selectedIndex} />
      <BannerNav banners={bannerItems} selectedIndex={selectedIndex} onSelect={handleSelect} />
    </MainBannerWrapper>
  );
};

export default MainBanner;

const MainBannerWrapper = styled.div`
  position: relative;
`;
