'use client';
import styled from 'styled-components';

import GlobalStyle from '@/app/styled-components/construction/_styles/GlobalStyle';

import Header from '@/app/styled-components/construction/_components/common/Header';
import Section1 from '@/app/styled-components/construction/_components/Section1';
import Section2 from '@/app/styled-components/construction/_components/Section2';
import Section3 from '@/app/styled-components/construction/_components/Section3';
import Section4 from '@/app/styled-components/construction/_components/Section4';
import Section5 from '@/app/styled-components/construction/_components/Section5';
import Footer from '@/app/styled-components/construction/_components/common/Footer';

export default function Page() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.main``;
