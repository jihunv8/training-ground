'use client';

import styled from 'styled-components';

import mockNoticeBannerData from './mockNoticeBannerData';
import GlobalStyle from '@/app/styled-components/korean-air/_styles/GlobalStyle';

import Header from '@/app/styled-components/korean-air/_components/common/Header';
import Section1 from '@/app/styled-components/korean-air/_components/Section1';
import Section2 from '@/app/styled-components/korean-air/_components/Section2';
import NoticeBanner from '@/app/styled-components/korean-air/_components/NoticeBanner';
import Section3 from '@/app/styled-components/korean-air/_components/Section3';
import Section4 from '@/app/styled-components/korean-air/_components/Section4';
import Footer from '@/app/styled-components/korean-air/_components/common/Footer';

const noticeBanners = mockNoticeBannerData;

function Home() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Section1 />
      <NoticeBannerWrapper>
        <NoticeBanner data={noticeBanners[0]} />
      </NoticeBannerWrapper>
      <Section2 />
      <Section3 />
      <NoticeBannerWrapper>
        <NoticeBanner data={noticeBanners[1]} />
      </NoticeBannerWrapper>
      <Section4 />
      <Footer />
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.main``;

const NoticeBannerWrapper = styled.div`
  margin: 60px auto 0;
`;
