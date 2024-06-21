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

import EngineersList from './EngineersList';
import Section2Header from './Section2Header';
import ArrowButton from './ArrowButton';

function Section2() {
  return (
    <Seciton2Wrapper>
      <ContentsArea>
        <Section2Header />
        <EngineersList />
        <ButtonContainer>
          <ArrowButton />
          <ArrowButton right />
        </ButtonContainer>
      </ContentsArea>
    </Seciton2Wrapper>
  );
}

export default Section2;

const Seciton2Wrapper = styled.section`
  margin-top: 140px;
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

const ButtonContainer = styled.div`
  margin: 80px auto 0;
  width: 120px;
  border-radius: 65px;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  box-shadow:
    0px 64.8148px 46.8519px rgba(64, 162, 213, 0.0759259),
    0px 38.5185px 25.4815px rgba(64, 162, 213, 0.0607407),
    0px 20px 13px rgba(64, 162, 213, 0.05),
    0px 8.14815px 6.51852px rgba(64, 162, 213, 0.0392593),
    0px 1.85185px 3.14815px rgba(64, 162, 213, 0.0240741);
`;
