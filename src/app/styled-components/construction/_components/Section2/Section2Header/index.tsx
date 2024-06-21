import styled from 'styled-components';
import { screenMiddle, screenSmall, screenXSmall } from '@/app/styled-components/construction/_styles/theme/mediaSize';

function Section2Header() {
  return (
    <Section2HeaderWrapper>
      <Title>Our Best Engineers</Title>
      <Text>
        Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
      </Text>
    </Section2HeaderWrapper>
  );
}

export default Section2Header;

const Section2HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 3.375rem;
  font-weight: 600;
  line-height: 3.5rem;
  text-align: center;

  @media screen and (max-width: ${screenMiddle}) {
    font-size: 3rem;
    line-height: 3.315rem;
  }

  @media screen and (max-width: ${screenSmall}) {
    font-size: 2rem;
    line-height: 2.21rem;
  }
`;

const Text = styled.p`
  width: 672px;
  margin-top: 30px;
  color: #6b6b6b;
  font-size: 1.25rem;
  font-family: roboto, sans-serif;
  line-height: 1.75rem;
  text-align: center;

  @media screen and (max-width: ${screenMiddle}) {
    width: 600px;
    font-size: 1.125rem;
    line-height: 1.575rem;
  }

  @media screen and (max-width: ${screenSmall}) {
    width: 500px;
    font-size: 1rem;
    line-height: 1.4rem;
  }

  @media screen and (max-width: ${screenXSmall}) {
    width: auto;
    font-size: 0.875rem;
  }
`;
