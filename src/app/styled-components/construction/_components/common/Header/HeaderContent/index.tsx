import styled from 'styled-components';
import {
  screenLarge,
  screenMiddle,
  screenSmall,
  screenXSmall,
} from '@/app/styled-components/construction/_styles/theme/mediaSize';

import CommonButton from '../../buttons/CommonButton.styled';
import CumulativeData from './CumulativeData';

export default function HeaderContent() {
  return (
    <HeaderContentWrapper>
      <Title>
        <span>Masters</span> of Consistency and <span>Quality</span>.
      </Title>
      <Text>
        Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
      </Text>
      <ButtonContainer>
        <CommonButton $inversion>Explore </CommonButton>
        <CommonButtonWithMargin>Contact Us</CommonButtonWithMargin>
      </ButtonContainer>
      <DataContainer>
        <CumulativeData data="25,356" dataName="Projects Done" />
        <CumulativeData data="15,200" dataName="Buildings Done" shapeColor="#40A2D5" />
        <CumulativeData data="350+" dataName="Total Employees" shapeColor="#42B918" />
      </DataContainer>
    </HeaderContentWrapper>
  );
}

const HeaderContentWrapper = styled.div`
  margin-top: 118px;
  padding: 0 20px;

  @media screen and (max-width: ${screenMiddle}) {
    margin-top: 80px;
    padding: 0 10px;
  }

  @media screen and (max-width: ${screenSmall}) {
    margin-top: 50px;
  }

  @media screen and (max-width: ${screenXSmall}) {
    margin-top: 80px;
    padding: 0;
  }
`;

const Title = styled.h2`
  width: 680px;
  color: #313131;
  font-size: 4rem;
  line-height: 1.2;

  > span {
    color: #40a2d5;
  }

  @media screen and (max-width: ${screenMiddle}) {
    width: 500px;
    font-size: 3.5rem;
  }

  @media screen and (max-width: ${screenSmall}) {
    width: 400px;
    font-size: 2.5rem;
  }

  @media screen and (max-width: ${screenXSmall}) {
    width: 300px;
    font-size: 2rem;
  }
`;

const Text = styled.p`
  width: 540px;
  margin-top: 40px;
  color: #6b6b6b;
  font-size: 1.125rem;
  line-height: 1.75rem;

  @media screen and (max-width: ${screenLarge}) {
    width: 420px;
  }

  @media screen and (max-width: ${screenMiddle}) {
    margin-top: 50px;
  }

  @media screen and (max-width: ${screenSmall}) {
    width: 250px;
    font-size: 1rem;
  }

  @media screen and (max-width: ${screenXSmall}) {
    width: auto;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
  width: 443px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${screenXSmall}) {
    width: auto;
    flex-wrap: wrap;
  }
`;

const CommonButtonWithMargin = styled(CommonButton)`
  @media screen and (max-width: ${screenXSmall}) {
    margin-top: 20px;
  }
`;

const DataContainer = styled.div`
  width: 554px;
  display: flex;
  justify-content: space-between;
  margin-top: 90px;

  @media screen and (max-width: ${screenSmall}) {
    width: auto;
    font-size: 2.5rem;
  }
`;
