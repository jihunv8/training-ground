import styled from 'styled-components';
import { screenSmall, screenXSmall } from '@/app/styled-components/construction/_styles/theme/mediaSize';

function Section4Header() {
  return (
    <Section4HeaderWrapper>
      <Title>Contact Us</Title>
      <Text>
        Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
      </Text>
    </Section4HeaderWrapper>
  );
}

export default Section4Header;

const Section4HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  width: fit-content;
  color: #313131;
  font-weight: 600;
  font-size: 3.375rem;
  line-height: 3.5rem;

  @media screen and (max-width: ${screenSmall}) {
    font-size: 3rem;
  }

  @media screen and (max-width: ${screenXSmall}) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  margin-top: 30px;
  width: 672px;
  color: #6b6b6b;
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-align: center;

  @media screen and (max-width: ${screenSmall}) {
    font-size: 1rem;
    line-height: 1.5rem;
    width: auto;
  }

  @media screen and (max-width: ${screenXSmall}) {
    font-size: 0.875rem;
  }
`;
