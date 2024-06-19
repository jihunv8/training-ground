import styled from 'styled-components';
import * as mediaSize from '@/app/styled-components/music-edu/_styles/utils/mediaSize';

import Contents from './Contents';

const mockText =
  '​Justo nec ultrices dui sapien eget mi. Velit egestas dui id ornare arcu odio ut sem nulla. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed.';

function ContentsList() {
  return (
    <ContentsListWrapper>
      <Contents title="Students" text={mockText} />
      <Contents title="Programs" text={mockText} />
      <Contents title="Music" text={mockText} />
      <Contents title="Psychology" text={mockText} />
    </ContentsListWrapper>
  );
}

export default ContentsList;

const ContentsListWrapper = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template: auto / repeat(4, 1fr);

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    grid-template: repeat(4, 1fr) / auto;
  }
`;
