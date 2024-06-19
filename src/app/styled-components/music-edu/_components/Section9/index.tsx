import styled from 'styled-components';
import * as mediaSize from '@/app/styled-components/music-edu/_styles/utils/mediaSize';

import image from '@/app/styled-components/music-edu/_images/wqe-min.jpg';
import ContactForm from './ContactForm';
import Information from './Information';

function Section9() {
  return (
    <Section9Wrapper>
      <ContentsArea>
        <ContactForm />
        <Image />
        <Information />
      </ContentsArea>
    </Section9Wrapper>
  );
}

export default Section9;

const Section9Wrapper = styled.section`
  background-color: #1847b8;
`;

const ContentsArea = styled.div`
  width: ${mediaSize.contentsAreaXLarge};
  margin: 0 auto;
  padding: 80px 0;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    width: ${mediaSize.contentsAreaLarge};
    padding-bottom: 44px;
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    width: ${mediaSize.contentsAreaMiddle};
    padding-bottom: 60px;
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    width: ${mediaSize.contentsAreaSmall};
    flex-direction: column;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    width: ${mediaSize.contentsAreaXSmall};
  }
`;

const Image = styled.div`
  background: url(${image.src}) no-repeat center / cover;
  width: 570px;
  height: 698px;
  margin-top: -482px;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    width: 443px;
    height: 607px;
    margin-top: -470px;
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    width: 431px;
    height: 511px;
    margin-top: -50px;
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    width: 420px;
    height: 497px;
    margin-top: -58px;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    width: 100%;
    height: 403px;
    margin-top: 40px;
  }
`;
