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

import Image from 'next/image';

import Form from './Form';
import Section4Header from './Section4Header';

import mapImage from '@/app/styled-components/construction/_images/map.png';

function Section4() {
  return (
    <Section4Wrapper>
      <ContentsArea>
        <Section4Header />
        <Seciton4Article>
          <Form />
          <MapImage src={mapImage} alt="map image" />
        </Seciton4Article>
      </ContentsArea>
    </Section4Wrapper>
  );
}

export default Section4;

const Section4Wrapper = styled.section`
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

const Seciton4Article = styled.article`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${screenSmall}) {
    flex-direction: column;
  }
`;

const MapImage = styled(Image)`
  width: 600px;
  object-fit: contain;

  @media screen and (max-width: ${screenLarge}) {
    width: 520px;
  }

  @media screen and (max-width: ${screenLarge}) {
    width: 360px;
  }

  @media screen and (max-width: ${screenSmall}) {
    width: auto;
    margin-top: 60px;
  }
`;
