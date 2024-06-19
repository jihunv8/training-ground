import styled from 'styled-components';
import * as mediaSize from '@/app/styled-components/music-edu/_styles/utils/mediaSize';
import { contentsWrapper } from '../_styles/contentsWrapper';

function LeftContents() {
  return (
    <LeftContentsWrapper>
      <ContentsContaniner>
        <Title>Music psychology and conducting pedagogy</Title>
      </ContentsContaniner>
    </LeftContentsWrapper>
  );
}

export default LeftContents;

const LeftContentsWrapper = styled.div`
  ${contentsWrapper}
  padding-right: 15px;

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    padding-right: 0;
    padding-bottom: 15px;
  }
`;

const ContentsContaniner = styled.div`
  background-color: #1847b8;
  height: 100%;
  padding: 30px;
  display: flex;
  align-items: center;

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    height: 255px;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    height: 231px;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: 3.75rem;
  font-family: oswald, sans-serif;
  line-height: 120%;

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    font-size: 3rem;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    font-size: 2.25rem;
  }
`;
