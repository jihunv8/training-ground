import styled from 'styled-components';
import {
  screenLarge,
  screenMiddle,
  screenSmall,
  screenXSmall,
} from '@/app/styled-components/construction/_styles/theme/mediaSize';

import CommonButton from '@/app/styled-components/construction/_components/common/buttons/CommonButton.styled';

function Section1Header() {
  return (
    <Section1HeaderWrapper>
      <Title>Why Choose us for best construction experience</Title>
      <HeaderContent>
        <Text>
          Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
        </Text>
        <CommonButton $inversion>Explore</CommonButton>
      </HeaderContent>
    </Section1HeaderWrapper>
  );
}

export default Section1Header;

const Section1HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${screenMiddle}) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  order: 1;
  width: 520px;
  color: #313131;
  font-size: 3.375rem;
  font-weight: 500;
  line-height: 4.05rem;

  @media screen and (max-width: ${screenMiddle}) {
    width: auto;
    order: 0;
  }

  @media screen and (max-width: ${screenSmall}) {
    font-size: 2.5rem;
    line-height: 3rem;
  }

  @media screen and (max-width: ${screenXSmall}) {
    font-size: 1.75rem;
    line-height: 2.1rem;
  }
`;

const HeaderContent = styled.div`
  order: 0;
  width: 540px;

  @media screen and (max-width: ${screenLarge}) {
    width: 400px;
  }

  @media screen and (max-width: ${screenMiddle}) {
    margin-top: 40px;
    width: auto;
    order: 1;
  }
`;

const Text = styled.p`
  color: #6b6b6b;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 30px;

  @media screen and (max-width: ${screenXSmall}) {
    font-size: 1rem;
  }
`;
