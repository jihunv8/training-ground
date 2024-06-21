import styled from 'styled-components';
import { screenSmall, screenXSmall } from '@/app/styled-components/construction/_styles/theme/mediaSize';

function Section5Header() {
  return (
    <Section5HeaderWrapper>
      <Title>Lattest Blogs</Title>
      <Text>
        Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
      </Text>
    </Section5HeaderWrapper>
  );
}

export default Section5Header;

const Section5HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  width: fit-content;
  color: #313131;
  font-size: 3.375rem;
  font-weight: 600;
  line-height: 3.5rem;

  @media screen and (max-width: ${screenSmall}) {
    font-size: 3rem;
  }

  @media screen and (max-width: ${screenXSmall}) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  width: 672px;
  margin-top: 30px;
  color: #6b6b6b;
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-align: center;

  @media screen and (max-width: ${screenSmall}) {
    font-size: 1rem;
    width: auto;
  }

  @media screen and (max-width: ${screenXSmall}) {
    line-height: 1.5rem;
  }
`;
