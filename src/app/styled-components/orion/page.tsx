'use client';
import styled from 'styled-components';
import GlobalStyle from '@/app/styled-components/orion/_styles/GlobalStyle';

import Header from '@/app/styled-components/orion/_components/Header';
import MainBanner from '@/app/styled-components/orion/_components/MainBanner';
import EthicalManagement from '@/app/styled-components/orion/_components/EthicalManagement';
import NewsRoom from '@/app/styled-components/orion/_components/NewsRoom';
import Footer from '@/app/styled-components/orion/_components/Footer';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <MainBanner />
        <EthicalManagement />
        <NewsRoom />
        <Footer />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main``;
