'use client';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/app/styled-components/music-edu/_styles/theme';

import Header from '@/app/styled-components/music-edu/_components/Header';
import styled from 'styled-components';
import Footer from '@/app/styled-components/music-edu/_components/Footer';
import GlobalStyle from '@/app/styled-components/music-edu/_styles/GlobalStyle';
import Section1 from '@/app/styled-components/music-edu/_components/Section1';
import Section2 from '@/app/styled-components/music-edu/_components/Section2';
import Section3 from '@/app/styled-components/music-edu/_components/Section3';
import Section4 from '@/app/styled-components/music-edu/_components/Section4';
import Section5 from '@/app/styled-components/music-edu/_components/Section5';
import Section6 from '@/app/styled-components/music-edu/_components/Section6';
import Section7 from '@/app/styled-components/music-edu/_components/Section7';
import Section8 from '@/app/styled-components/music-edu/_components/Section8';
import Section9 from '@/app/styled-components/music-edu/_components/Section9';

export default function Page() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.main``;
