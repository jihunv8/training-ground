import styled from 'styled-components';

import Contents from './Contents';

import musicTherapyIcon from '@/app/styled-components/music-edu/_images/icons/music-therapy.png';
import ourMissionIcon from '@/app/styled-components/music-edu/_images/icons/our-mission.png';
import musicCampsIcon from '@/app/styled-components/music-edu/_images/icons/music-camps.png';
import libraryIcon from '@/app/styled-components/music-edu/_images/icons/library.png';
import * as mediaSize from '@/app/styled-components/music-edu/_styles/utils/mediaSize';

const mockText =
  '​Justo nec ultrices dui sapien eget mi. Velit egestas dui id ornare arcu odio ut sem nulla. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed.';

function Section2() {
  return (
    <Section2Wrapper>
      <ContentsArea>
        <Contents icon={musicTherapyIcon.src} iconAlt="music therapy" title="MUSIC THERAPY" text={mockText} />
        <Contents icon={ourMissionIcon.src} iconAlt="Our Mission" title="OUR MISSION" text={mockText} isDown />
        <Contents icon={musicCampsIcon.src} iconAlt="" title="MUSIC CAMPS" text={mockText} />
        <Contents icon={libraryIcon.src} iconAlt="" title="LIBRARY" text={mockText} isDown />
      </ContentsArea>
    </Section2Wrapper>
  );
}

export default Section2;

const Section2Wrapper = styled.section`
  background-color: #1847b8;
`;

const ContentsArea = styled.div`
  width: ${mediaSize.contentsAreaXLarge};
  margin: 0 auto;
  padding: 60px 0;
  display: flex;

  @media screen and (max-width: ${mediaSize.screenLarge}) {
    width: ${mediaSize.contentsAreaLarge};
  }

  @media screen and (max-width: ${mediaSize.screenMiddle}) {
    width: ${mediaSize.contentsAreaMiddle};
  }

  @media screen and (max-width: ${mediaSize.screenSmall}) {
    width: ${mediaSize.contentsAreaSmall};
    flex-direction: column;
  }

  @media screen and (max-width: ${mediaSize.screenXSmall}) {
    width: ${mediaSize.contentsAreaXSmall};
  }
`;
