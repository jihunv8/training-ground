import styled from 'styled-components';
import {
  contentsAreaLarge,
  contentsAreaMiddle,
  contentsAreaSmall,
  contentsAreaXLarge,
  contentsAreaXSmall,
  screenLarge,
  screenMiddle,
  screenSmall,
  screenXSmall,
} from '@/app/styled-components/construction/_styles/theme/mediaSize';

import Section5Article from './Section5Article';
import Section5Footer from './Section5Footer';
import Section5Header from './Section5Header';

function Section5() {
  return (
    <Section5Wrapper>
      <ContentsArea>
        <Section5Header />
        <Section5Article />
        <Section5Footer />
      </ContentsArea>
    </Section5Wrapper>
  );
}

export default Section5;

const Section5Wrapper = styled.section`
  margin-top: 140px;
  margin-bottom: 156px;
`;

const ContentsArea = styled.div`
  width: ${contentsAreaXLarge};
  margin: 0 auto;

  @media screen and (max-width: ${screenLarge}) {
    width: ${contentsAreaLarge};
  }

  @media screen and (max-width: ${screenMiddle}) {
    width: ${contentsAreaMiddle};
  }

  @media screen and (max-width: ${screenSmall}) {
    width: ${contentsAreaSmall};
  }

  @media screen and (max-width: ${screenXSmall}) {
    width: ${contentsAreaXSmall};
  }
`;
