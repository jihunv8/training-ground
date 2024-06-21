import styled, { css } from 'styled-components';

import backgroundImage from '@/app/styled-components/construction/_images/section3-bg.png';
import bigDoubleQuote from '@/app/styled-components/construction/_images/icons/big-double-quote.png';
import {
  screenLarge,
  screenMiddle,
  screenSmall,
  screenXSmall,
} from '@/app/styled-components/construction/_styles/theme/mediaSize';

function Section3() {
  return (
    <Section3Wrapper>
      <Background>
        <Contents>
          <Title>Message from CEO</Title>
          <Text>
            Shewing met parties gravity husband sex pleased. On to no kind do next feel held walk. Last own loud and
            knew give gay four. Sentiments motionless or principles preference excellence am. Literature surrounded
            insensible at indulgence or to admiration remarkably. Matter future lovers desire marked boy use. Chamber
            reached do he nothing be.
            <br />
            <br />
            Do in laughter securing smallest sensible no mr hastened. As perhaps proceed in in brandon of limited
            unknown greatly. Distrusts fulfilled happiness unwilling as explained of difficult. No landlord of peculiar
            ladyship attended if contempt ecstatic. Loud wish made on is am as hard. Court so avoid in plate hence. Of
            received mr breeding concerns peculiar securing landlord. Spot to many it four bred soon well to. Or am
            promotion in no departure abilities. Whatever landlord yourself at by pleasure of children be.
          </Text>
        </Contents>
      </Background>
    </Section3Wrapper>
  );
}

export default Section3;

const Section3Wrapper = styled.section`
  margin-top: 140px;
`;

const Background = styled.div`
  margin: 0 auto;
  background: url(${backgroundImage.src}) no-repeat center / cover;
  max-width: 1440px;
`;

const Contents = styled.div`
  width: 860px;
  margin: 0 auto;
  padding-top: 176px;
  padding-bottom: 300px;

  @media screen and (max-width: ${screenLarge}) {
    width: 760px;
  }

  @media screen and (max-width: ${screenMiddle}) {
    width: 640px;
    padding-top: 120px;
    padding-bottom: 200px;
  }

  @media screen and (max-width: ${screenSmall}) {
    width: 400px;
  }

  @media screen and (max-width: ${screenXSmall}) {
    width: 280px;
  }
`;

const Title = styled.h2`
  color: #fafafa;
  font-size: 3.375rem;
  font-weight: 500;
  line-height: 4.75rem;
  text-align: center;

  @media screen and (max-width: ${screenMiddle}) {
    font-size: 3rem;
  }

  @media screen and (max-width: ${screenSmall}) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: ${screenXSmall}) {
    font-size: 1.75rem;
  }
`;

const Quote = css`
  content: '';
  background: url(${bigDoubleQuote.src}) no-repeat center / cover;
  display: block;
  width: 91px;
  height: 64px;
  position: absolute;

  @media screen and (max-width: ${screenMiddle}) {
    width: 70px;
    height: 50px;
  }

  @media screen and (max-width: ${screenSmall}) {
    width: 50px;
    height: 36px;
  }

  @media screen and (max-width: ${screenSmall}) {
    width: 30px;
    height: 21px;
  }
`;

const Text = styled.p`
  margin-top: 50px;
  color: #fafafa;
  font-size: 1.125rem;
  line-height: 1.75rem;
  position: relative;

  @media screen and (max-width: ${screenMiddle}) {
    font-size: 1rem;
  }

  @media screen and (max-width: ${screenXSmall}) {
    font-size: 0.875rem;
  }

  &::before {
    ${Quote}
    top: -64px;
    left: -91px;

    @media screen and (max-width: ${screenMiddle}) {
      top: -50px;
      left: -70px;
    }

    @media screen and (max-width: ${screenSmall}) {
      top: -36px;
      left: -50px;
    }

    @media screen and (max-width: ${screenXSmall}) {
      top: -21px;
      left: -30px;
    }
  }

  &::after {
    ${Quote}
    bottom: -64px;
    right: -91px;
    transform: rotate(180deg);

    @media screen and (max-width: ${screenMiddle}) {
      bottom: -50px;
      right: -70px;
    }

    @media screen and (max-width: ${screenSmall}) {
      bottom: -36px;
      right: -50px;
    }

    @media screen and (max-width: ${screenXSmall}) {
      bottom: -21px;
      right: -30px;
    }
  }
`;
